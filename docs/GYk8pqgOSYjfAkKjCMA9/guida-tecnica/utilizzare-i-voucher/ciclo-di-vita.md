# Tipi di richiesta di voucher

È possibile richiedere a PDND Interoperabilità voucher che rispettino specifiche diverse. Per tutti i casi indicati di seguito tranne il primo, il voucher da richiedere è dettagliato dall'erogatore nelle impostazioni del proprio e-service (file di interfaccia API e documentazione tecnica allegata). Se l'erogatore non indica niente, il voucher da produrre è del secondo tipo (Bearer) senza informazioni aggiuntive.

I tipi possibili sono i seguenti:

1. voucher Bearer spendibile presso le API di PDND Interoperabilità;
2. voucher Bearer spendibile presso le API di un erogatore;
3. voucher DPoP spendibile presso le API di un erogatore.

Per le opzioni 2 e 3, è possibile sia una configurazione base, sia inserendo informazioni aggiuntive, secondo il pattern descritto da AgID chiamato _Audit REST 02_.

Di seguito, una breve descrizione di tutte le tipologie di voucher.

## Flusso di richiesta base

In tutti i casi, la richiesta di voucher si articola per lo meno in tre momenti:

1. **la generazione e la firma di una client assertion** che offra i dettagli della richiesta (da quale client, per quale finalità, ecc);
2. **l'inoltro della client assertion al server autorizzativo** di PDND Interoperabilità che, a valle delle verifiche, rilascia il voucher;
3. **l'inoltro della richiesta di dati all'erogatore**, inserendo nell'header della richiesta il voucher ottenuto da PDND Interoperabilità.

Tutti i tipi di richiesta previsti sono una variazione di questo flusso, e fanno capo a RFC specifiche.&#x20;

{% hint style="info" %}
Ulteriori prove autorizzative possono comunque essere richieste nella comunicazione tra erogatore e fruitore, a discrezione delle parti.
{% endhint %}

## Sicurezza e standard di riferimento per firma e verifica <a href="#sicurezza-e-standard-di-riferimento" id="sicurezza-e-standard-di-riferimento"></a>

Il processo di firma e verifica segue specifiche internazionali che garantiscono la sicurezza. Gli standard di riferimento includono:

* [RFC 8017](https://datatracker.ietf.org/doc/html/rfc8017) (PKCS #1): definisce le modalità di utilizzo dell’algoritmo RSA per la firma digitale;
* [RFC 7518](https://datatracker.ietf.org/doc/html/rfc7518) (JSON Web Algorithms): specifica gli algoritmi di firma, come RSA e SHA-256;
* [RFC 7517](https://datatracker.ietf.org/doc/html/rfc7517) (JSON Web Key — JWK): questo documento specifica il formato JSON per rappresentare le chiavi crittografiche, sia pubbliche che private.

## Bearer Token spendibile presso le API di PDND Interoperabilità

Ha due caratteristiche distintive:

1. deve essere effettuata da un _client API Interop_;
2. non prevede che sia indicata la finalità di riferimento.

Le API di PDND Interoperabilità sono fornite a tutti gli aderenti per contratto, così come previsto dalle Linee Guida AgID. Per questa ragione, non è necessario dettagliare la finalità della richiesta.&#x20;

L'elenco delle API esposte da PDND Interoperabilità è disponibile [qui](https://developer.pagopa.it/pdnd-interoperabilita/api).&#x20;

Per maggiori informazioni, si veda il [tutorial pratico](../../tutorial-back-office/come-richiedere-e-spendere-un-voucher-verso-le-api-di-pdnd-interoperabilita.md).

{% hint style="info" %}
PDND Interoperabilità non ha visibilità dei dati scambiati tra erogatore e fruitore. Le proprie API restituiscono solamente informazioni relative al dominio di PDND stessa (es. l'elenco delle richieste di fruizione presentate dal proprio ente).
{% endhint %}

## Bearer Token spendibile presso le API di un erogatore (base)

Impiegato dalla grande maggioranza dei servizi, prevede la creazione di una client assertion che dettagli le informazioni base richieste da PDND Interoperabilità. Queste sono utili sia ai fini di audit, che perché l'erogatore possa valutare le richieste di accesso ai dati che gli pervengono.

Per maggiori informazioni, si vedano il [tutorial pratico](../../tutorial-back-office/come-richiedere-e-spendere-un-voucher-verso-le-api-di-un-erogatore-base.md) e le [verifiche standard](verifiche-su-un-voucher-bearer-token-da-parte-di-un-erogatore.md).

## Bearer Token spendibile presso le API di un erogatore (con informazioni aggiuntive — pattern ModI _Audit REST 02_)

Impiegato da tutti quei servizi per i quali l'erogatore ritiene necessario ottenere informazioni aggiuntive di audit che non fanno parte dei campi standard previsti da PDND Interoperabilità all'interno della client assertion.&#x20;

Un esempio può essere l'indirizzo IP del chiamante, oppure informazioni relative all'operatore che sta effettuando la richiesta.

Il meccanismo messo a punto permette all'erogatore di verificare che il fruitore abbia depositato una traccia su PDND Interoperabilità, che agisce da notaio in questo processo. Allo stesso tempo, le informazioni sono scambiate direttamente tra il fruitore e l'erogatore, senza che PDND Interoperabilità ne sia a conoscenza.

Un esempio di applicazione di questo pattern sono i servizi dell'ANPR.

In questo flusso, il fruitore forgia un secondo JWT che contiene le informazioni aggiuntive. Da questo JWT deriva un hash, che viene poi riportato nella client assertion nel campo _digest.value_.

Infine, dopo aver ottenuto un voucher da PDND Interoperabilità, il fruitore inserisce sia il voucher stesso che il secondo JWT all'interno della chiamata all'erogatore.

L'erogatore confronta quindi l'hash che trova nel _digest_ che trova riportato nel voucher PDND con un valore calcolato a partire dal contenuto del secondo JWT. Se c'è corrispondenza, i dato aggiuntivi presenti nel secondo JWT sono integri.

Per maggiori informazioni, si vedano il [tutorial pratico](../../tutorial-back-office/come-richiedere-e-spendere-un-voucher-verso-le-api-di-un-erogatore-con-informazioni-aggiuntive.md), le [verifiche standard](verifiche-su-un-voucher-bearer-token-da-parte-di-un-erogatore.md) e le [verifiche aggiuntive](verifiche-sul-digest-da-parte-di-un-erogatore.md).

## DPoP spendibile presso le API di un erogatore

Il pattern di DPoP, _Demonstrating Proof-of-Possession_, prevede l'uso di due token di DPoP, uno destinato a PDND Interoperabilità e l'altro al resource server al quale si vuole richiedere il dato. Se non c'è corrispondenza tra le due verifiche indipendenti, la richiesta non viene autorizzata.

Questo pattern offre un layer di sicurezza aggiuntivo, utile ad esempio nei casi in cui il dato venga richiesto per una singola operazione puntuale, come nel caso in cui sia un device a richiedere l'autorizzazione per l'accesso a un dato.

È una valida alternativa al mTLS per alcuni casi. Ha il vantaggio di non necessitare uno scambio di certificati tra le due parti e di non richiedere particolare manutenzione, specialmente da parte dell'erogatore.

Per maggiori informazioni, si vedano il [tutorial pratico](../../tutorial-back-office/come-richiedere-e-spendere-un-voucher-verso-le-api-di-un-erogatore-dpop.md) e l'[approfondimento](dpop.md).


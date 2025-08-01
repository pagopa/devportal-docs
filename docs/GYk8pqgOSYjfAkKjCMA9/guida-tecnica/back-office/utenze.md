# Utenze

## Gestione delle utenze

La voce di menu per gestire le utenze è disponibile solo per gli amministratori nel menu del back office di PDND Interoperabilità, alla voce _Utenti_. Si verrà rimandati alla pagina dedicata sulla Piattaforma Area Riservata, che gestisce tutti gli utenti in maniera centralizzata per i prodotti PagoPA.

{% hint style="warning" %}
Per poter accedere ad Area Riservata, il tuo ente deve aver già effettuato l'adesione a PDND Interoperabilità. Se non sai come fare, segui la [_Guida all'adesione._](../../tutorial/guida-alladesione.md)
{% endhint %}

## Tipologie di utenza

&#x20;Sono tre: amministratore, operatore API e operatore di sicurezza.

### Amministratore (operatore amministrativo)

Un amministratore (chiamato "operatore amministrativo" nelle Linee Guida AgID) è delegato dal legale rappresentante dell'ente ad operare con pieni poteri su PDND Interoperabilità.

All'atto dell'adesione dell'ente, è possibile specificare fino a tre amministratori (operatori amministrativi). È sempre possibile aggiungerne altri, o rimuoverne, attraverso la Piattaforma Area Riservata.

Gli utenti con questo lilvello di permesso hanno facoltà esclusiva di gestire tutto il quadro amministrativo dell'ente, come ad esempio: inoltrare, sospendere e riattivare richieste di fruizione, creare client e finalità, aggiungere, rimuovere o sospendere figure operative, compilare analisi del rischio.

Possono inoltre gestire la parte tecnica, oppure decidere di delegarla alle altre utenze tecniche: operatore API (principalmente per gli e-service) o operatore di sicurezza (principalmente per il materiale crittografico).

### Operatore API

Un operatore API è un'utenza tecnica dedicata alla gestione degli e-service per conto di utenze con permessi di amministrazione, e in particolare può:

* gestire il ciclo di vita degli e-service (pubblicare nuove versioni, sospendere, riattivare);
* approvare le stime di carico per le finalità pervenute dai fruitori che necessitano approvazione manuale.

### Operatore di sicurezza

Un operatore di sicurezza è un'utenza tecnica dedicata alla gestione del materiale crittografico.&#x20;

Per la fruizione, le chiavi pubbliche saranno caricate all'interno dei client. Con le chiavi caricate, può portare a compimento la procedura per ottenere un voucher valido per tutte le finalità associate ai client stessi in caso di _client e-service_, e un voucher valido da spendere verso le API di PDND Interoperabilità in caso di _client API Interop_.

Per l'erogazione, le chiavi pubbliche saranno caricate all'interno dei portachiavi erogatore. Può quindi firmare con una chiave privata le risposte che un erogatore destina al fruitore che ne ha fatto richiesta. Il fruitore potrà a sua volta verificare l'integrità della risposta, andando a recuperare la chiave pubblica corrispondente che l'operatore di sicurezza ha caricato all'interno del portachiavi.

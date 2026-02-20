---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/jqqB3CsnONZdScwRg13O/riferimenti-tecnici/utilizzare-i-voucher/tipi-di-richiesta-di-voucher
---

# Tipi di richiesta di voucher

## Introduzione

È possibile richiedere a **PDND Interoperabilità** voucher che rispettino specifiche differenti. Per tutte le casistiche elencate di seguito, il tipo di voucher da utilizzare è indicato dall’erogatore nelle **impostazioni dell’e-service** (file di interfaccia API e documentazione tecnica allegata).

Se l’erogatore **non** specifica alcuna preferenza, il voucher da produrre è il **Bearer** destinato alle **API dell’erogatore** **senza informazioni aggiuntive**.

I tipi di voucher previsti:

* **Bearer** spendibile presso le **API di un erogatore**.
* **DPoP** spendibile presso le **API di un erogatore**.
* **Bearer** spendibile presso le [**API della piattaforma**](../api-esposte-da-pdnd/).

Per le opzioni **Bearer** e **DPoP** verso l’erogatore sono disponibili sia la **configurazione base** sia la variante con **informazioni aggiuntive** secondo il pattern **ModI** [**Audit REST 02**](https://www.agid.gov.it/sites/agid/files/2024-07/Linee_guida_interoperabilit%C3%A0PA_All2_Pattern_sicurezza.pdf?utm_source=chatgpt.com).

## Flusso di richiesta base

Tutte le richieste di voucher seguono tre passaggi fondamentali:

1. **Generazione e firma** di una **client assertion** con i dettagli della richiesta (client, finalità, ecc.).
2. **Invio della client assertion** al server autorizzativo di PDND Interoperabilità, che effettua le verifiche e **rilascia il voucher**.
3. **Invio della richiesta di dati** all’erogatore con il **voucher** nell’header.

Tutte le varianti sono declinate su questo flusso e fanno capo a specifiche **RFC**. Ulteriori prove autorizzative possono essere definite tra **erogatore** e **fruitore**.

## Sicurezza e standard di riferimento

Firma e verifica seguono standard internazionali:

* [**RFC 8017**](https://datatracker.ietf.org/doc/html/rfc8017) **(PKCS #1)** — uso di RSA per firma digitale.
* [**RFC 7518**](https://datatracker.ietf.org/doc/html/rfc7518) **(JSON Web Algorithms)** — algoritmi di firma (es. RSA, SHA-256).
* [**RFC 7517**](https://datatracker.ietf.org/doc/html/rfc7517) **(JSON Web Key — JWK)** — rappresentazione JSON delle chiavi. L’autorizzazione del client tramite **client assertion** è implementata secondo [**RFC 7521**](https://datatracker.ietf.org/doc/html/rfc7521); ulteriori RFC dipendono dal tipo di voucher.

## Voucher verso le API di un erogatore

### Bearer (versione base)

Impiegato dalla grande maggioranza dei servizi: prevede la **client assertion** con le informazioni standard richieste da PDND Interoperabilità, utili sia per **audit** sia per consentire all’erogatore di valutare le richieste di accesso.

**Approfondimenti:**

* lato fruitore: [tutorial pratico](../../tutorial/tutorial-per-il-fruitore/come-richiedere-un-voucher-bearer-per-le-api-di-un-erogatore-base.md) per richiedere un voucher;
* lato erogatore: [verifiche standard](../../tutorial/tutorial-per-lerogatore/come-verificare-la-validita-di-un-voucher-bearer.md) consigliate.

### DPoP (versione base)

Il pattern **DPoP (Demonstrating Proof-of-Possession)** utilizza **due token**, uno verso **PDND Interoperabilità** e uno verso il **resource server** dell’erogatore, con verifiche indipendenti: la corrispondenza è necessaria per l’autorizzazione. È una **valida alternativa a mTLS** e riduce oneri di gestione certificati.

**Approfondimenti:**

* lato fruitore: [tutorial pratico](../../tutorial/tutorial-per-il-fruitore/come-richiedere-un-voucher-dpop-per-le-api-di-un-erogatore-base.md) per richiedere un voucher;
* lato erogatore: [verifiche standard](../../tutorial/tutorial-per-lerogatore/come-verificare-la-validita-di-un-voucher-dpop.md) consigliate;
* tutti: [approfondimento dedicato](approfondimento-su-dpop.md).

## Pattern ModI Audit REST 02 — informazioni aggiuntive (applicabile a Bearer e DPoP)

Quando l’erogatore richiede **metadati di audit aggiuntivi** (es. **IP del chiamante**, **identificativo operatore**), si adotta il pattern **ModI Audit REST 02**:

1. Il fruitore genera un **secondo JWT** con le informazioni aggiuntive.
2. Calcola un **hash** del secondo JWT e lo riporta nella **client assertion** nel campo `digest.value`.
3. Dopo l’emissione del **voucher**, il fruitore invia **voucher** + **secondo JWT** all’erogatore.
4. L’erogatore **ricalcola l’hash** dal secondo JWT e lo **confronta** con `digest.value`: la corrispondenza attesta **autenticità** e **integrità** dei metadati.

In questo modello PDND Interoperabilità **attesta la catena autorizzativa** e **non accede** ai dati aggiuntivi scambiati direttamente tra fruitore ed erogatore. Un esempio applicativo è rappresentato dai servizi **ANPR**.

**Approfondimenti:**

* lato fruitore: tutorial pratico per richiedere un voucher [Bearer](../../tutorial/tutorial-per-il-fruitore/come-richiedere-un-voucher-bearer-per-le-api-di-un-erogatore-con-informazioni-aggiuntive.md) o [DPoP](../../tutorial/tutorial-per-il-fruitore/come-richiedere-un-voucher-dpop-per-le-api-di-un-erogatore-con-informazioni-aggiuntive.md) con informazioni aggiuntive;
* lato erogatore: [verifiche aggiuntive](../../tutorial/tutorial-per-lerogatore/come-verificare-il-digest-di-un-voucher.md) consigliate.

## Voucher verso le API di PDND Interoperabilità (Bearer)

**Caratteristiche:**

* richiesta da **client destinati alle API della piattaforma (Client API Interop)**;
* **non** richiede l’indicazione della **finalità** di riferimento.

Le **API di PDND Interoperabilità** forniscono esclusivamente informazioni del **dominio PDND** (es. elenco richieste di fruizione dell’ente) e **non** veicolano i dati scambiati tra erogatore e fruitore.

**Approfondimenti:**

* [elenco delle API](https://developer.pagopa.it/pdnd-interoperabilita/api);
* [tutorial pratico dedicato](../../tutorial/tutorial-per-il-fruitore/come-richiedere-un-voucher-bearer-per-le-api-di-pdnd-interoperabilita.md).

***

Pagina successiva [→ Reperire gli identificativi per le verifiche](reperire-gli-identificativi-per-le-verifiche.md)

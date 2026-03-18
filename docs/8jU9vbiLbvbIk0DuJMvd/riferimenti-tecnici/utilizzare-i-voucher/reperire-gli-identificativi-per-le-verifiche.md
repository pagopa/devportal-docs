---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/jqqB3CsnONZdScwRg13O/riferimenti-tecnici/utilizzare-i-voucher/reperire-gli-identificativi-per-le-verifiche
---

# Reperire gli identificativi per le verifiche

## Scopo

Per eseguire le verifiche previste su **PDND Interoperabilità**, l’erogatore utilizza alcuni **identificativi univoci** riferiti a specifiche componenti dell’ecosistema.

## Ambienti e variabilità

Gli **id sono diversi per ogni ambiente** (attestazione, collaudo, produzione). Di conseguenza, occorre utilizzare gli identificativi **coerenti con l’ambiente** in cui si effettua la verifica.

## Dove reperirli nel front office

* **Scheda e-service di erogazione** (_Erogazione → I tuoi e-service_):
  * `producerId`
  * `eserviceId`
  * `descriptorId`
  * `aud` (_audience_)
* **Scheda finalità di erogazione** (_Erogazione → Finalità_):
  * `purposeId`
  * `consumerId`

## Accesso tramite API

Tutti i parametri sono disponibili anche tramite le **API di PDND Interoperabilità**, così da poterli integrare nei flussi di verifica automatizzati.

## Stabilità e profilo informativo

Gli identificativi **non cambiano nel tempo** e **non veicolano informazioni sensibili**; sono pensati per essere referenziati in modo stabile nei controlli applicativi.

## Efficienza operativa

* **Caching**: è consigliato **memorizzare in cache** gli id per velocizzare le verifiche.
* **Allineamento**: è possibile **utilizzare le notifiche di aggiornamento** esposte dalle API per recepire eventuali modifiche di configurazione e mantenere gli archivi locali sincronizzati.

***

Pagina successiva [→ Approfondimento su DPoP](approfondimento-su-dpop.md)

# Garanzia dell'integrità della risposta

È possibile per gli erogatori mettere a disposizione dei fruitori un ulteriore livello di sicurezza, che garantisca loro l'integrità della risposta che ricevono.

In sostanza, gli erogatori firmano la propria risposta con una chiave privata, la cui corrispondente chiave pubblica è depositata su PDND Interoperabilità per le dovute verifiche.

La chiave pubblica viene caricata dall'erogatore all'interno di un portachiavi (disponibile all'interno della scheda del proprio e-service — _**Erogazione > I miei e-service**_, seleziona un e-service, tab _**Portachiavi**_). Sarà possibile per il fruitore verificare la corrispondenza chiedendo la chiave pubblica attraverso le API di PDND Interoperabilità.

Per tutte le operazioni legate alla gestione di un portachiavi, si rimanda alla [sezione dedicata](../client-e-materiale-crittografico/).

## Precondizioni&#x20;

* l'erogatore deve avere creato un portachiavi;
* deve averlo associato ad un e-service attraverso la tab _Portachiavi_ disponibile all'interno della scheda e-service;
* un suo operatore di sicurezza o amministratore deve aver caricato almeno una chiave pubblica all'interno di quel portachiavi.

Sarà quindi possibile per l'erogatore firmare la propria risposta con la propria chiave privata. Il fruitore potrà verificare la corrispondente chiave pubblica depositata su PDND Interoperabilità.

## Sicurezza e standard di riferimento

Si applicano gli stessi standard definiti nell'ambito dei flussi legati al voucher. Per maggiori informazioni sugli RFC, si veda la [sezione dedicata](garanzia-dellintegrita-della-risposta.md#sicurezza-e-standard-di-riferimento).

## Esempio

Il ModI lascia discrezione all'erogatore nell'indicare qual debba essere la procedura corretta di firma del payload e verifica da parte del fruitore.&#x20;

Per questa ragione, PDND Interoperabilità non impone alcun vincolo, ad accezione dell'utilizzo di chiavi asimmetriche di tipo RSA in conformità con gli standard di sicurezza già adottati.

Nel tutorial dedicati all'[erogatore](../../tutorial/erogatore/voucher/come-firmare-una-risposta-per-un-fruitore.md) e al [fruitore](../../tutorial/fruitore/voucher/come-verificare-una-risposta-firmata-da-un-erogatore.md), si riporta a titolo di esempio una possibile gestione del meccanismo di firma del payload di risposta di un e-service.

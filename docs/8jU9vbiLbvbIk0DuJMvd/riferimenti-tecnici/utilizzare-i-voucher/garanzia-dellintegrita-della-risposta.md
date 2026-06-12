---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/jqqB3CsnONZdScwRg13O/riferimenti-tecnici/utilizzare-i-voucher/garanzia-dellintegrita-della-risposta
---

# Garanzia dell'integrità della risposta

## Scopo

Gli **erogatori** possono offrire ai **fruitori** un **ulteriore livello di sicurezza** firmando le proprie risposte, così da garantire l’**integrità e l’autenticità dei dati ricevuti**.

Questo meccanismo assicura che il contenuto della risposta **non sia stato alterato** lungo il percorso e che **provenga effettivamente dall’erogatore legittimo**.

## Funzionamento generale

L’erogatore firma la propria risposta utilizzando una **chiave privata**. La **chiave pubblica corrispondente** viene **depositata su PDND Interoperabilità**, che ne consente la verifica da parte dei fruitori attraverso le proprie API. Il fruitore può così:

1. ricevere la risposta firmata;
2. richiedere a PDND Interoperabilità la chiave pubblica associata all’erogatore;
3. verificare la firma e confermare l’integrità del payload ricevuto.

## Gestione del portachiavi

La gestione delle chiavi pubbliche avviene tramite il **portachiavi**, accessibile nella scheda dell’e-service:

**Percorso:**\
&#xNAN;_&#x45;rogazione → I miei e-service → \[seleziona un e-service] → tab “Portachiavi”_

L’erogatore può:

* creare uno o più portachiavi;
* associare ciascun portachiavi a uno specifico e-service;
* caricare all’interno del portachiavi una o più chiavi pubbliche.

Per tutte le operazioni di configurazione, creazione e manutenzione del portachiavi, si veda la [**sezione dedicata**](../e-service/portachiavi.md) **alla gestione del portachiavi**.

## Precondizioni

Per poter firmare le proprie risposte, devono essere soddisfatte le seguenti condizioni:

* l’erogatore ha creato un **portachiavi**;
* il portachiavi è **associato a un e-service** tramite la relativa tab nella scheda dell’e-service;
* un **operatore di sicurezza o amministratore** ha caricato **almeno una chiave pubblica** all’interno del portachiavi.

Dopo queste operazioni, l’erogatore potrà firmare le proprie risposte con la chiave privata corrispondente; il fruitore potrà recuperare la chiave pubblica da PDND Interoperabilità e verificarne la validità.

## Sicurezza e standard di riferimento

La firma della risposta utilizza **gli stessi standard crittografici** già applicati nei flussi legati al **voucher**, in conformità con le specifiche internazionali (es. **RFC 7517, RFC 7518, RFC 8017**). Per i dettagli tecnici, si rimanda alla [**sezione dedicata**](tipi-di-richiesta-di-voucher.md).

## Implementazione ed esempi

Il **ModI** lascia agli erogatori la libertà di definire **come firmare il payload** e **come i fruitori debbano eseguire la verifica**. PDND Interoperabilità non impone alcun vincolo, fatta eccezione per l’utilizzo di **chiavi asimmetriche RSA** conformi agli standard di sicurezza adottati.

Si mettono tuttavia a disposizione alcuni **tutorial dedicati all'**[**erogatore**](../../tutorial/tutorial-per-lerogatore/come-firmare-una-risposta-per-un-fruitore.md) **e al** [**fruitore**](../../tutorial/tutorial-per-il-fruitore/come-verificare-una-risposta-firmata-da-un-erogatore.md) per mostrare un esempio completo di implementazione del meccanismo di firma e verifica del payload di risposta di un e-service.

***

Pagina successiva [→ FAQ e dubbi comuni](faq-e-dubbi-comuni.md)

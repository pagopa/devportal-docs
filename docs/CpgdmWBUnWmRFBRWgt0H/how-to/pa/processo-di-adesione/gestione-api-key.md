# Gestione API Key

&#x20;la voce _**API Key**_ il referente tecnico gestisce i “secret” che sono utilizzati per permettere alla PA di autenticare le proprie richieste effettuate su PN.

## Generazione API key

Tramite l’[Area Riservata](https://www.pagopa.it/it/area-riservata/), l’Ente deve generare le API key di produzione e accedere alla documentazione di SEND che guida le PA e i propri PT nel processo di integrazione. Una volta eseguito l’accesso a [Area Riservata](https://selfcare.pagopa.it/), cliccando sul prodotto attivo _**SEND Servizio Notifiche Digitali**_ il soggetto ha modo di generare le API key che deve consegnare al PT scelto, unitamente alla documentazione tecnica a supporto dell’integrazione.&#x20;

L’utente crea una nuova chiave premendo il tasto _**Aggiungi**_.

Nella nuova pagina l’utente otterrà un un secret da PN e dovrà fornire una descrizione e, opzionalmente, i gruppi ai quali l’API Key appartiene. L’utente deve appartenere a questi gruppi.

Le APIKey associate a gruppi seguono le stesse regole previste per l'associazione tra un referente e un gruppo:

1. Una notifica creata dall’APIKey viene associata al gruppo
2. Può accedere al dettaglio solo di notifiche che sono associate a quel gruppo

A questo proposito si ricorda che al momento della creazione di una notifica il campo gruppo è obbligatorio:

* se l’operatore PA (o l’api-key) sono associati a un gruppo allora il campo gruppo, durante la creazione della notifica, è obbligatorio.
* se l’operatore PA (o l’api-key) NON sono associati a un gruppo allora il campo gruppo, durante la creazione della notifica, è facoltativo. (Indipendentemente dal fatto che su SelfCare siano censiti gruppi oppure no)

## Visualizzazione API Key

La pagina mostra la lista delle API Key già configurate dalla PA e che sono etichettate con gruppi ai quali l’utente appartiene.

Le API Key sono visualizzate in forma tabellare e con le seguenti informazioni:&#x20;

* il nome attribuito all’API Key
* il secret: di default mascherato ma con un tasto che permette di visualizzarlo in chiaro
* lo stato: attiva, ruotata o bloccata
* i gruppi associati all’API Key
* l'istante di creazione&#x20;
* il nome e cognome del creatore
* l'istante di rotazione&#x20;
* il nome e cognome di chi ha effettuato l’operazione
* l'istante di blocco&#x20;
* il nome e cognome di chi ha effettuato l’operazione.

<figure><img src="../../../.gitbook/assets/image (39).png" alt=""><figcaption></figcaption></figure>



## Rotazione API Key

Selezionata un’API Key attiva, l’utente la ruota premendo il bottone “Ruota”. Questo richiede a PN di generare un nuovo secret.

Questa operazione creerà una nuova versione dell’API Key utilizzante il nuovo secret.

La versione precedente rimane attiva fino a quando non viene esplicitamente bloccata ma non può essere ulteriormente ruotata.

## Blocco API Key

Selezionata un’API Key attiva o ruotata, l’utente la blocca premendo il bottone “Blocca”.

L’effetto di questa operazione è di far fallire immediatamente l’autenticazione di richieste effettuate attraverso API B2B ed utilizzanti il secret relativo all’API Key bloccata.

## Eliminazione API Key

Selezionata un’API Key bloccata, l’utente la elimina premendo il bottone “Elimina”.

L’effetto di questa operazione è di far fallire immediatamente l’autenticazione di richieste effettuate attraverso API B2B ed utilizzanti il secret relativo all’API Key eliminata.

## Riattivazione API Key

Selezionata un’API Key bloccata, l’utente la riattiva premendo il bottone “Riattiva”.

L’effetto di questa operazione è di riportare un’API Key bloccata per errore al suo stato precedente.

Solo l’ultima versione di un’API Key può essere riattivata.

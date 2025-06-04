# Gestione delle deleghe

Le persone fisiche possono delegare altre persone fisiche o persone giuridiche ad accedere alle proprie notifiche per proprio conto.

Il processo parte dal delegante che crea una delega per un delegato e prosegue con il delegato che accetta la delega. La delega ha un periodo di validità che determina quali notifiche possono essere visualizzate dal delegato, ovvero quelle che hanno data di creazione all’interno del periodo di validità.

La data di inizio validità è posta a 120 giorni prima della creazione della delega. La data di fine validità è posta in un qualsiasi istante successivo alla data di creazione.

La delega può essere associata ad una particolare PA mittente in modo tale da restringere il campo di validità della delega stessa. Se non specificata, la delega permette l’accesso alle notifiche generate da tutte le PA.

La delega viene accettata dal delegato inserendo in PN un codice che viene fornito dal delegante e che era stato a sua volta fornito da PN in fase di creazione della delega.

La delega può essere in qualsiasi momento revocata dal delegante o rifiutata dal delegato.

Delegante e delegato possono avere una sola delega attiva in un dato istante. Seil delegante vuole cambiare/aggiungere gli enti per il quale ha fornito la delega (o la data di scadenza ad esempio), deve revocare la delega già attiva e crearne una nuova con le informazioni aggiornate.

Una delega assume uno dei seguenti stati: in attesa di conferma, attiva, revocata, rifiutata, conclusa.

Per tutta la durata di validità di una delega attiva, il delegato potrà accedere a PN e decidere di agire per conto del delegante, potendo in tal senso effettuare qualunque operazione che il delegante avrebbe potuto effettuare sulle proprie notifiche.

Periodicamente PN verifica le deleghe presenti a sistema e rimuove quelle con data di fine validità precedente all’istante corrente.

## Creazione di una delega

Premendo il tasto _**Aggiungi una delega**_, l’utente crea una nuova delega.

I campi obbligatori che l’utente specifica sono:

* tipologia di delegato, Persona fisica/Persona giuridica&#x20;
* nome e cognome o ragione sociale del delegato
* Codice Fiscale del delegato
* la data di fine validità della delega

L’utente può anche specificare una PA mittente da associare alla delega.&#x20;

La data di inizio validità è sempre posta automaticamente a 120 giorni precedenti la data di creazione.

PN genera un codice di accettazione che il delegante deve fornire, con mezzi propri, al delegato per completare l’accettazione.\


<figure><img src="../../.gitbook/assets/image (128).png" alt=""><figcaption></figcaption></figure>

## Visualizzazione delle deleghe

L'utente visualizza le deleghe attive o in corso di accettazione selezionando _**Deleghe**_.

La pagina che appare mostra, su due tabelle separate, le deleghe create dall'utente in qualità di delegante e le deleghe accettate in qualità di delegato.

Per le deleghe create dall'utente vengono mostrati:&#x20;

* il nome del delegato
* la data di inizio validità
* la data di fine validità
* l'eventuale PA associata&#x20;
* lo stato della delega.

Per le deleghe ricevute vengono mostrati:&#x20;

* il nome del delegante&#x20;
* la data di inizio validità
* la data di fine validità
* l'eventuale PA associata&#x20;
* lo stato della delega.

<figure><img src="../../.gitbook/assets/image (110).png" alt=""><figcaption></figcaption></figure>

## Recupero codice di accettazione di una delega

Selezionando una delega creata dall'utente nello stato “in attesa di conferma” e premendo il tasto _**Mostra codice**_, PN visualizza il codice di accettazione richiesto per completare l'accettazione.

<figure><img src="../../.gitbook/assets/image (54).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (107).png" alt=""><figcaption></figcaption></figure>

## Cancellazione di una delega

Selezionando una delega creata dall’utente nello stato “in attesa di conferma” o “attiva” e premendo il tasto “Rimuovi”, PN chiede conferma dell’operazione e quindi rimuove la delega dal sistema. Questa funzionalità è offerta nel caso in cui la delega sia stata creata per errore.

<figure><img src="../../.gitbook/assets/image (112).png" alt=""><figcaption></figcaption></figure>

## Accettazione di una delega

L’accettazione di una delega da parte del delegato avviene premendo il tasto _**Accetta**_ posto a fianco delle delega che deve essere accettata.

<figure><img src="../../.gitbook/assets/image (60).png" alt=""><figcaption></figcaption></figure>

A questo punto viene richiesto al delegato di inserire il codice di accettazione fornito dal delegante.

<figure><img src="../../.gitbook/assets/image (63).png" alt=""><figcaption></figcaption></figure>

Nel caso in cui il codice sia corretto, la delega transita nello stato “attiva”.

<figure><img src="../../.gitbook/assets/image (106).png" alt=""><figcaption></figcaption></figure>

## Revoca di una delega

Selezionando una delega creata dall’utente nello stato “attiva” e premendo il tasto “Revoca”, PN chiede conferma dell’operazione e quindi cambia lo stato della delega in “revocata”.

<figure><img src="../../.gitbook/assets/image (125).png" alt=""><figcaption></figcaption></figure>

## Rifiuto di una delega

Selezionando una delega ricevuta dall’utente nello stato “in attesa di conferma” o “attiva” e premendo il tasto _**Rifiuta**_ dal menu, PN chiede conferma dell’operazione e quindi cambia lo stato della delega in “rifiutata”.

<figure><img src="../../.gitbook/assets/image (15).png" alt=""><figcaption></figcaption></figure>


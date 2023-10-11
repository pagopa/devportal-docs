---
description: >-
  Questa funzionalità consente la creazione della stazione che è il punto di
  accesso al Nodo dei Pagamenti PagoPA.
---

# Creazione

### **Sezione Canale: Creazione - Ambiente di Collaudo**

All’interno del **Back office pagoPA** è possibile accedere alla **sezione Stazioni** cliccando sulla **voce di menu "Stazioni"**.

Se **non** sono ancora state **create stazioni**, l'utente visualizzerà la _Pagina "Vista Stazioni"_ vuota e il warning informativo "_Non sono ancora presenti stazioni in ambiente di collaudo. Crea nuova stazione_".&#x20;

E' possibile procedere alla **creazione** di una **nuova stazione**, cliccando sia su tasto **"Crea Stazione"** che su hyperlink in blu **"Crea stazione".**

<figure><img src="../../../.gitbook/assets/image (122).png" alt=""><figcaption><p><em>Pagina Vista Stazioni vuota - caso in cui non è stata ancora creata alcuna stazione</em></p></figcaption></figure>

Nel caso in cui sono già **state create stazioni**, l'utente nella suddetta _Pagina_ visualizzerà l'elenco di questi sotto forma di tabella:

* Codice Stazione
* Data creazione
* Data modifica (corrispondente all'ultima modifica dei parametri di configurazione della stazione nella _Pagina di dettaglio_ di seguito)
* Stato, che mostra il dettaglio sullo **stato di avanzamento** del processo di creazione della stazione e che può assumere i seguenti valori: **Attivo -** la stazione è correttamente in esercizio; **In revisione -** la stazione è stata creata, ma in attesa di revisione da parte di PagoPA; **Da correggere**: la stazione è stata revisionata e richiede delle correzioni.

Per **creare** una **nuova stazione** è necessario cliccare sul tasto  **"Crea Stazione".**

#### **Pagina di dettaglio (configurazione stazione)**

_Contiene tutti i parametri di configurazione della stazione per il collegamento al Nodo._&#x20;

Al click su **"Crea Stazione"** l'utente può accedere alla _Pagina di dettaglio Stazione_ in cui sono riportate le informazioni necessarie alla creazione della stazione.

I soli campi valorizzati sono quelli della sezione **Anagrafica.**&#x20;

Per quanto riguarda la sezione **Target**, la **compilazione** del relativo campo è **subordinata** alla **tipologia** di **stazione** che si intende creare. In particolare, è possibile configurare **due tipologie** di stazioni:

* **Stazione asincrona**: in questo caso l'utente non deve inserire alcun valore per il campo endpoint.
* **Stazione sincrona**: in questo caso l'utente è tenuto a specificare l'endpoint.

<figure><img src="../../../.gitbook/assets/image (61).png" alt=""><figcaption><p><em>Pagina di Configurazione della Stazione</em></p></figcaption></figure>

Nel momento in cui la compilazione è **completata,** è possibile cliccare sul tasto **"Conferma".**

<figure><img src="../../../.gitbook/assets/image (81).png" alt=""><figcaption><p><em>Pagina Configurazione della Stazione - Conferma</em></p></figcaption></figure>



Una volta aver cliccato sul tasto "Conferma", l'**utente** attiverà la stazione e verrà **reindirizzato** alla **Pagina Vista Stazioni** in cui potrà visualizzarla in stato **Attivo**.

<figure><img src="../../../.gitbook/assets/image (142).png" alt=""><figcaption><p><em>Pagina Lista Stazioni - tabella elenco stazioni - stato Attivo</em></p></figcaption></figure>

### Sezione Stazioni: Creazione - Ambiente di Produzione&#x20;

L'utente può eseguire la **creazione** della **stazione** in **ambiente** di **produzione** svolgendo le stesse azioni illustrate nella sopra indicata Sezione Stazioni: Creazione - Ambiente di Collaudo.&#x20;

A differenza dell'ambiente di collaudo però, una volta aver completato la compilazione dei campi della Pagina di dettaglio, **è necessario ottenere la validazione di tali dati**.&#x20;

Ciò significa che l'utente, cliccando sul tasto "Conferma" **non** otterrà l'**immediata attivazione** della stazione, ma **invierà** una **richiesta** di attivazione **all'operatore PagoPA**, come illustrato di seguito nel dettaglio.

#### Pop up Informativo: Invio dati

_Consente di inviare i dati di configurazione della stazione, contenuti nella Pagina di dettaglio, per ottenere l'approvazione di questi da parte di un operatore PagoPA e conseguire la creazione della stazione._

Una volta aver confermato i dati, viene mostrato un messaggio informativo in cui si comunica all'utente che cliccando sul tasto "Invia"  i dati salvati verranno inviati ad un operatore PagoPA per la revisione. Ad **approvazione avvenuta** l'utente riceverà una **notifica**.

Cliccando sul tasto "**Invia**", inoltre, verrà inviata una notifica all'operatore che procederà alla revisione. (TBD)

Altrimenti è necessario cliccare su "Torna indietro" per tornare alla _Pagina di dettaglio della stazione._

<figure><img src="../../../.gitbook/assets/image (127).png" alt=""><figcaption><p><em>Pop up - Invio per la revisione</em></p></figcaption></figure>

Una volta aver cliccato su tasto "Invia", l'utente verrà reindirizzato alla _Pagina Vista Stazioni_ in cui potrà visualizzare nella tabella la stazione appena configurata, che risulterà nello stato **In revisione** (la stazione è stata creata, ma in attesa di revisione da parte di PagoPA).&#x20;

<figure><img src="../../../.gitbook/assets/image (111).png" alt=""><figcaption><p><em>Pagina Vista Stazioni - tabella elenco stazioni - stato In revisione</em></p></figcaption></figure>
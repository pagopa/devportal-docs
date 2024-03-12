---
description: >-
  Questa funzionalità consente la creazione della stazione che è il punto di
  accesso al Nodo dei Pagamenti PagoPA.
---

# Creazione

### **Sezione Canale: Creazione**

All’interno del **Back office pagoPA** è possibile accedere alla **sezione Stazioni** cliccando sulla **voce di menu "Stazioni"**.

Se **non** sono ancora state **create stazioni**, l'utente visualizzerà la _Pagina "Vista Stazioni"_ vuota e il warning informativo "_Non sono ancora presenti stazioni in ambiente di collaudo. Crea nuova stazione_".&#x20;

E' possibile procedere alla **creazione** di una **nuova stazione**, cliccando sia su tasto **"Crea Stazione"** che su hyperlink in blu **"Crea stazione".**

<figure><img src="../../../.gitbook/assets/image (177).png" alt=""><figcaption><p><em>Pagina Lista Stazioni vuota - caso in cui non sono state ancora create stazioni</em></p></figcaption></figure>

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

A seconda della configurazione della stazione, vecchio modello 1, oppure nuovo modello unico sarà necessario valorizzare i campi nel modo seguente:

_**Modello 1**_&#x20;

* _`Endpoint RT`_: inserire la url dell'endpoint del servizio RT : Rappresenta la URL del servizio esposto dall'EC utilizzato per la ricezione delle RT inviate dal Nodo dei Pagamenti
* _`Endpoint Redirect`_: inserire la url dell'endpoint del servizio Redirect

_**Modello Unico**_

* _`Endpoint:`_ inserire la url dell'endpoint unico
* _`Versione primitive:`_selezionare dal menu a tendina la versione delle primitive da utilizzare (1 o 2)

{% hint style="info" %}
Se si sta configurando una stazione asincrona non è necessario specificare alcun endpoint
{% endhint %}

<figure><img src="../../../.gitbook/assets/image (204).png" alt=""><figcaption><p><em>Pagina di Configurazione della Stazione</em></p></figcaption></figure>

Nel momento in cui la compilazione è **completata,** è possibile cliccare sul tasto **"Conferma".**

Una volta aver completato la compilazione dei campi della Pagina di dettaglio, **è necessario ottenere la validazione di tali dati**.&#x20;

Ciò significa che l'utente, cliccando sul tasto "Conferma" **non** otterrà l'**immediata attivazione** della stazione, ma **invierà** una **richiesta** di attivazione **all'operatore PagoPA**, come illustrato di seguito nel dettaglio.

#### Pop up Informativo: Invio dati

_Consente di inviare i dati di configurazione della stazione, contenuti nella Pagina di dettaglio, per ottenere l'approvazione di questi da parte di un operatore PagoPA e conseguire la creazione della stazione._

Una volta aver confermato i dati, viene mostrato un messaggio informativo in cui si comunica all'utente che cliccando sul tasto "Invia"  i dati salvati verranno inviati ad un operatore PagoPA per la revisione. Ad **approvazione avvenuta** l'utente riceverà una **notifica**.

Cliccando sul tasto "**Invia**", inoltre, verrà inviata una notifica all'operatore che procederà alla revisione.&#x20;

Altrimenti è necessario cliccare su "Torna indietro" per tornare alla _Pagina di dettaglio della stazione._

<figure><img src="../../../.gitbook/assets/image (131).png" alt=""><figcaption><p><em>Pop up - Invio per la revisione</em></p></figcaption></figure>

Una volta aver cliccato su tasto "Invia", l'utente verrà reindirizzato alla _Pagina Vista Stazioni_ in cui potrà visualizzare nella tabella la stazione appena configurata, che risulterà nello stato **In revisione** (la stazione è stata creata, ma in attesa di revisione da parte di PagoPA).&#x20;

<figure><img src="../../../.gitbook/assets/image (181).png" alt=""><figcaption><p><em>Pagina Lista Stazioni Prod - Stazione In revisione</em></p></figcaption></figure>

Una volta completata la revisione da parte degli Operatori PagoPA la stazione diverrà "Attiva" e potrà essere utilizzata.

<figure><img src="../../../.gitbook/assets/image (180).png" alt=""><figcaption><p><em>Pagina Lista Stazioni - Stazione creata</em></p></figcaption></figure>


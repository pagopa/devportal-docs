---
description: >-
  Questa funzionalità consente la creazione del canale che è il punto di accesso
  al Nodo dei Pagamenti PagoPA.
---

# Creazione

Il ruolo che ne possiede il **pieno potere** a livello di **operatività** è il **Responsabile Tecnico**:

* interno al **PSP**, nel caso di soggetto **direttamente connesso** al Nodo dei Pagamenti PagoPA;
* dell’**Intermediario Tecnologico** o del **Partner tecnologico** del **PSP**, nel caso di soggetto **non direttamente connesso** al Nodo dei Pagamenti PagoPA.

**L' Amministratore** possiede invece **pieno** **potere** a livello di **visualizzazione.**

## Sezione Canale: Creazione - Ambiente di Collaudo

All'interno della sezione Canali, se **non** sono ancora stati **creati canali**, l'utente visualizzerà la _Pagina "Vista Canali"_ vuota e il warning informativo "_Non sono ancora presenti canali in ambiente di test. Crea nuovo canale_".&#x20;

E' possibile procedere alla **creazione** di un **nuovo canale**, cliccando sia su tasto **"Crea Canale"** che su hyperlink in blu **"Crea canale".**

<figure><img src="../../../.gitbook/assets/image (75).png" alt=""><figcaption><p><em>Pagina Vista Canali vuota - caso in cui ancora non è stato creato alcun canale</em></p></figcaption></figure>

Nel caso in cui sono già **stati creati canali**, l'utente nella suddetta _Pagina_ visualizzerà l'elenco di questi sotto forma di tabella, e per **creare** un **nuovo canale** è necessario cliccare sul tasto  **"Crea Canale".**

<figure><img src="../../../.gitbook/assets/image (153).png" alt=""><figcaption><p><em>Pagina Vista Canali - tabella elenco Canali</em></p></figcaption></figure>

### **Pagina di creazione Canale (configurazione canale)**

_Contiene tutti i dati di configurazione del canale._

Al click su **"Crea Canale"** l'utente può accedere alla _Pagina di dettaglio Canale_ in cui sono riportate tutte le informazioni necessarie alla creazione del canale.

I soli campi valorizzati sono quelli della sezione **Anagrafica,** per procedere è necessario compilare **almeno i campi obbligatori** evidenziati con un asterisco.

<figure><img src="../../../.gitbook/assets/image (68).png" alt=""><figcaption><p><em>Pagina di creazione canale</em></p></figcaption></figure>

Nel momento in cui la compilazione è **completata,** è possibile cliccare sul tasto **"Conferma".**

<figure><img src="../../../.gitbook/assets/image (83).png" alt=""><figcaption><p><em>Pagina di creazione canale - Conferma</em></p></figcaption></figure>

Una volta aver cliccato sul tasto "Conferma", l'utente attiverà il canale e verrà reindirizzato alla _Pagina Vista Canale_ in cui potrà visualizzarlo in stato **Attivo**.&#x20;

## Sezione Canali: Creazione - Ambiente di Produzione

L'utente può eseguire la **creazione del canale** in **ambiente di produzione** svolgendo le stesse azioni illustrate nella sopra indicata _Sezione Canali: Creazione - Ambiente di Collaudo._

A differenza dell'ambiente di collaudo però, una volta aver completato la compilazione dei campi della P_agina di dettaglio,_ **è necessario ottenere la validazione di tali dati.**

Ciò significa che l'utente, cliccando sul tasto "Conferma" non otterrà l'immediata attivazione del canale, ma invia una richiesta di attivazione all'operatore PagoPA, come illustrato di seguito nel dettaglio.

### [Pop up Informativo: Invio dati](#user-content-fn-1)[^1]

_Consente di inviare i dati di configurazione del canale, contenuti nella Pagina di dettaglio, per ottenere l'approvazione di questi da parte di un operatore PagoPA e conseguire la creazione del canale._

Una volta aver confermato i dati, viene mostrato il seguente messaggio informativo che comunica all'utente che cliccando su tasto "Invia" è possibile inviare i dati salvati ad un operatore PagoPA per la revisione. Ad approvazione avvenuta l'utente riceverà una notifica.

Cliccando sul tasto "Invia" verrà inviata una e-mail all'operatore.

Altrimenti è necessario cliccare su "Torna indietro" per tornare alla _Pagina di dettaglio del canale._

<figure><img src="../../../.gitbook/assets/image (85).png" alt=""><figcaption><p><em>Pop up - Conferma</em></p></figcaption></figure>

Una volta aver cliccato su tasto "Invia", l'utente verrà reindirizzato alla _Pagina Vista Canale_ in cui potrà visualizzare nella tabella il canale, che risulterà nello stato **In revisione** (il canale è stato creato, ma in attesa di revisione da parte di PagoPA).

<figure><img src="../../../.gitbook/assets/image (152).png" alt=""><figcaption><p><em>Pagina Vista Canali - tabella elenco Canali</em></p></figcaption></figure>



[^1]: 

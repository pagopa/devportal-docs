---
description: >-
  Questa funzionalità consente di duplicare i dati di un canale e apportare
  variazioni a queste al fine di facilitare l'operazione di creazione di un
  nuovo canale.
---

# Duplicazione

Il ruolo che ne possiede il **pieno potere** a livello di **operatività** è il **Responsabile Tecnico**:

* interno al **PSP**, nel caso di soggetto **direttamente connesso** al Nodo dei Pagamenti PagoPA;
* dell’**Intermediario Tecnologico** o del **Partner tecnologico** del **PSP**, nel caso di soggetto **non direttamente connesso** al Nodo dei Pagamenti PagoPA.

Il **Responsabile Amministrativo** possiede invece **pieno** **potere** a livello di **visualizzazione.**

## Sezione Canale: Duplicazione - Ambiente di Collaudo

All'interno della _Pagina "Vista Canali",_ l'utente cliccando sui **3 puntini** accanto lo Stato **"Attivo"**, ha la possibilità di selezionare la voce **"Duplica"** accedendo così alla _Pagina di configurazione Canale._&#x20;

<figure><img src="../../../.gitbook/assets/image (150).png" alt=""><figcaption><p><em>Pagina Vista Canali - tabella elenco Canali</em></p></figcaption></figure>

&#x20;Da qui l'utente, ha la possibilità di sostituire i dati all'interno dei campi per effettuare la creazione del nuovo canale.&#x20;

All'interno del form, l'utente può visualizzare **tutti i campi già valorizzati** dei dati **inseriti** in fase di creazione del **canale**. I **campi** relativi alla sezione **"Anagrafica"** **non** saranno **editabili**, mentre saranno modificabili i campi **"Target"** e **"Tipo Versamento"**.&#x20;

Se si intende creare un nuovo canale, al termine della compilazione, è possibile cliccare sul tasto **"Continua"**.

<figure><img src="../../../.gitbook/assets/image (94).png" alt=""><figcaption><p><em>Pagina duplicazione canale - continua</em></p></figcaption></figure>

Una volta aver cliccato sul tasto "Continua", l'utente attiverà il nuovo canale e verrà reindirizzato alla _Pagina Vista Canale_ in cui potrà visualizzarlo in stato **Attivo**.&#x20;

## Sezione Canale: Duplicazione - Ambiente di Produzione

L'utente può eseguire la **duplicazione del canale** in **ambiente di produzione** svolgendo le stesse azioni illustrate nella sopra indicata _Sezione Canali: Duplicazione - Ambiente di Collaudo._&#x20;

A differenza dell'ambiente di collaudo però, una volta aver completato la compilazione dei campi della P_agina di dettaglio,_ **è necessario ottenere la validazione di tali dati.**

Quindi, una volta che l'utente avrà cliccato sul tasto "Continua" non otterrà l'immediata attivazione del canale, ma invia una richiesta di attivazione all'operatore PagoPA, come illustrato di seguito nel dettaglio.

### [Pop up Informativo: Invio dati](#user-content-fn-1)[^1]

_Consente di inviare i dati di configurazione del canale, contenuti nella Pagina di dettaglio, per ottenere l'approvazione di questi da parte di un operatore PagoPA e conseguire la creazione del canale._

Una volta aver confermato i dati, viene mostrato il seguente messaggio informativo che comunica all'utente che cliccando su tasto "Invia" è possibile inviare i dati salvati ad un operatore PagoPA per la revisione. Ad approvazione avvenuta l'utente riceverà una notifica.

Cliccando sul tasto "Invia" verrà inviata una e-mail all'operatore.

Altrimenti è necessario cliccare su "Torna indietro" per tornare alla _Pagina di dettaglio del canale._

<figure><img src="../../../.gitbook/assets/image (41).png" alt=""><figcaption><p><em>Pop up - Conferma</em></p></figcaption></figure>

Una volta aver cliccato su tasto "Invia", l'utente verrà reindirizzato alla _Pagina Vista Canale_ in cui potrà visualizzare nella tabella il canale, che risulterà nello stato **In revisione** (il canale è stato creato, ma in attesa di revisione da parte di PagoPA).

<figure><img src="../../../.gitbook/assets/image (151).png" alt=""><figcaption><p><em>Pagina Vista Canali - tabella elenco Canali</em></p></figcaption></figure>

[^1]: 

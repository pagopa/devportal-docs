---
description: >-
  La funzionalità generazione delle API Key è una delle operazione necessarie
  per l’attivazione del prodotto pagoPA e che, in particolare, consente la
  connessione al Nodo dei Pagamenti PagoPA.
---

# Generazione API Key

All’interno della **Panoramica - Area riservata**, per il prodotto **pagoPA** cliccando sul **pulsante "Gestisci"** viene esposto il messaggio che permette di selezionare l’**ambiente target** a cui si intende accedere (Ambiente di Collaudo e Ambiente di Produzione).

E' possibile accedere al portale del prodotto pagoPA anche dall’apposito **menù a tendina** situato al lato sinistro dell’intestazione. Anche da qui sarà possibile selezionare l’**ambiente target**.

<figure><img src="../../.gitbook/assets/image (168).png" alt=""><figcaption><p><em>Pop up di selezione ambiente target</em></p></figcaption></figure>

Per avviare la generazione delle chiavi è necessario scegliere l'ambiente target, ad esempio "Collaudo", cliccando sull'omonimo tasto. Solo dopo aver completato la generazione nel primo ambiente selezionato, sarà possibile effettuarla anche nel secondo (ovvero "Produzione").

### Sezione API Key: Ambiente di Collaudo

Dalla **Panoramica - Area riservata**, dopo aver cliccato sul pulsante "Gestisci**"** del prodotto e aver selezionato l'ambiente target, ad esempio **"Collaudo"**, l'utente accede alla _Pagina Vista API Key._

Nella suddetta _Pagina_ è possibile procedere alla generazione delle chiavi cliccando sul tasto “+ Genera API Key” o su link in blu “Genera API Key”.

<figure><img src="../../.gitbook/assets/image (106).png" alt=""><figcaption><p><em>Pagina Vista API Key</em></p></figcaption></figure>

Effettuando il click, si accede alla _Pagina di Selezione tipo di prodotto_

#### **Selezione del tipo di prodotto**

Nella _Pagina di Selezione tipo di prodotto,_ tramite Il menu a tendina “Tipo di prodotto”, è possibile visualizzare l’elenco delle tipologie di prodotto per cui è necessario generare le chiavi_:_

* **Connessione con nodo**
* **Integrazione Asincrona**
* **Recupero Ricevuta**
* **Gestione Flussi di Rendicontazione**

<figure><img src="../../.gitbook/assets/image (131).png" alt=""><figcaption><p><em>Generazione API Key: Selezione Tipo di Prodotto</em></p></figcaption></figure>

#### **Connessione con nodo**

_Questa API Key permette di connettersi al Nodo Pagamenti di PagoPA: azione propedeutica per tutte le ulteriori operazioni._

Per procedere, dal menù è necessario selezionare il prodotto “**Connessione con nodo**”, l’unico abilitato dato che è obbligatorio generare prima la coppia di chiavi di questa tipologia per poi procedere con le altre chiavi.

Solo una volta selezionata la voce, sarà possibile proseguire cliccando sul pulsante “Genera API Key”; altrimenti sul tasto “Annulla” per tornare alla _Pagina Vista API Key._

<figure><img src="../../.gitbook/assets/image (89).png" alt=""><figcaption><p><em>Pagina Selezione Tipo di prodotto: Connessione con nodo</em></p></figcaption></figure>

Una volta aver cliccato sul pulsante “Genera API Key”, se la coppia di chiavi (primaria e secondaria) è stata generata correttamente allora è possibile visualizzarle e gestirle all’interno della _Pagina Vista API Key._

<figure><img src="../../.gitbook/assets/image (140).png" alt=""><figcaption><p><em>Pagina Vista API Key: Connessione con nodo</em></p></figcaption></figure>

Per ogni campo contenente il codice API Key è possibile effettuare le seguenti azioni:

* cliccare su **icona a forma di occhio** che consente la visualizzazione del Codice alfanumerico

<figure><img src="../../.gitbook/assets/image (139).png" alt=""><figcaption><p><em>Pagina Vista API Key: icona a forma di occhio</em></p></figcaption></figure>

* cliccare sul tasto **"Usa questa chiave"** che permette di copiare ed incollare il codice alfanumerico;

<figure><img src="../../.gitbook/assets/image (116).png" alt=""><figcaption><p><em>Pagina Vista API Key: tasto “Usa questa chiave”</em></p></figcaption></figure>

* cliccare sul tasto **“Rigenera”**, da cui verrà mostrato il pop up informativo che consente di generare un nuovo codice. Se si intende procedere alla generazione del nuovo codice è necessario cliccare sul pulsante “Rigenera”, altrimenti sul pulsante “Annulla” al fine di chiudere il pop up.

<figure><img src="../../.gitbook/assets/image (74).png" alt=""><figcaption><p><em>Pagina Vista API Key: tasto “Rigenera”</em></p></figcaption></figure>

#### **Integrazione asincrona**

Dopo aver generato la coppia di chiavi “Connessione con nodo”, al fine di svolgere tale operazione anche per gli altri prodotti, è necessario cliccare sul tasto “+ Genera API Key” e tornare alla _Pagina di Selezione tipo di prodotto_.

Dal menu è possibile scegliere e selezionare una delle altre tre voci a disposizione, ad es. “**Integrazione asincrona**” e cliccare sul pulsante “Genera API Key”.

<figure><img src="../../.gitbook/assets/image (88).png" alt=""><figcaption><p><em>Pagina di Selezione tipo di prodotto: Integrazione Asincrona</em></p></figcaption></figure>

Se la chiave è stata generata correttamente, sarà possibile visualizzare nella _Pagina Vista API Key,_ il nuovo prodotto e la coppia di chiavi primaria e secondaria.

Come già illustrato nella sezione Connessione con nodo, per ogni campo è possibile effettuare le azioni di gestione del codice tramite i comandi:

* icona a forma di occhio;
* il tasto "Usa questa chiave";
* il tasto “Rigenera”.

Per effettuare la generazione della coppia di chiavi relative prodotto "Recupero Ricevuta", è necessario cliccare sul tasto “Genera API Key” e tornare alla _Pagina Selezione tipo Prodotto_.

#### **Recupero Ricevuta**

Da qui è possibile selezionare la voce di menu **“Recupero Ricevuta”** e cliccare sul tasto “Genera API Key”.

<figure><img src="../../.gitbook/assets/image (75).png" alt=""><figcaption><p><em>Pagina di Selezione tipo di prodotto: Recupero Ricevuta</em></p></figcaption></figure>

Per effettuare la generazione della coppia di chiavi relative all'ultimo prodotto "Gestione Flussi di Rendicontazione", è necessario cliccare sul tasto “Genera API Key” e tornare alla _Pagina Selezione tipo Prodotto_.

#### Gestione Flussi di Rendicontazione

Da qui è possibile selezionare la voce di menu **“Gestione Flussi di Rendicontazione”** e cliccare sul tasto “Genera API Key”.

<figure><img src="../../.gitbook/assets/image (94).png" alt=""><figcaption><p><em>Pagina di Selezione tipo di prodotto: Gestione Flussi di Rendicontazione</em></p></figcaption></figure>

Completata la fase di generazione delle chiavi, nella _Pagina Vista API Key_ è possibile visualizzare i prodotti con la coppia di chiavi primaria e secondaria ad essi associate e i relativi comandi di gestione del codice.

<figure><img src="../../.gitbook/assets/image (60).png" alt=""><figcaption><p><em>Pagina vista ApiKey generate</em></p></figcaption></figure>

Per procedere è necessario ritornare nella Panoramica - Area Riservata, selezionandola dal **menu a tendina** situato al lato sinistro dell'intestazione.

<figure><img src="../../.gitbook/assets/image (102).png" alt=""><figcaption><p><em>Menu a tendina che consente di tornare nella Panoramica di Area Riservata</em> </p></figcaption></figure>

Dalla Panoramica - Area riservata, cliccando sulla freccia all'interno della card relativa al prodotto è possibile selezionare il secondo ambiente per cui si intende effettuare la generazione **"Produzione".**

<figure><img src="../../.gitbook/assets/image (103).png" alt=""><figcaption><p><em>Pop up di selezione dell'ambiente target all'ingresso del back-office di prodotto</em></p></figcaption></figure>

### Sezione API Key: Ambiente di Produzione

L'utente potrà procedere alla **generazione** delle API Key di produzione seguendo le stesse azioni illustrate nella sezione API Key: Ambiente di Collaudo.

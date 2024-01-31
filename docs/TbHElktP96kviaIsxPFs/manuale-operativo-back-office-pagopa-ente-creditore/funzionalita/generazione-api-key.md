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

{% hint style="info" %}
L'elenco di seguito è indicativo in quanto le tipologie di prodotto sono in continua evoluzione e potranno cambiare nel corso del tempo.
{% endhint %}

* **Connessione con nodo**
* **GPD - Posizioni Debitorie**
* **GPD - Recupero Ricevute**
* **GPD - Gestione Flussi di Rendicontazione**
* **BIZ - Recupero Ricevute Ente Creditore**
* **FdR  - Flussi di Rendicontazione (EC)**

<figure><img src="../../.gitbook/assets/Screenshot 2024-01-23 alle 17.50.40.png" alt=""><figcaption><p><em>Generazione API Key: Selezione Tipo di Prodotto</em></p></figcaption></figure>

{% hint style="info" %}
La prossima sezione descrive il processo di generazione di una coppia di API Key per una tipologia di prodotto, la principale, ovvero la _**connessione con nodo**_.&#x20;

Le altre tipologie di prodotto, per semplicità non descritte hanno rispettivamente i seguenti compiti:

* _**GPD - Posizioni Debitorie**_ -> prodotto da utilizzare nell'ambito dell'_`integrazione asincrona`_per la gestione delle posizioni debitorie
* _**GPD - Recupero ricevute**_ -> prodotto da utilizzare nell'ambito dell'_`integrazione asincrona`_per il recupero delle ricevute di pagamento
* _**GPD - Gestione flussi di rendicontazione**_ -> prodotto da utilizzare nell'ambito dell'_`integrazione asincrona`_per la gestione dei flussi di rendicontazione da parte dei PSP
* _**BIZ - Recupero ricevute Ente Creditore**_ -> prodotto da utilizzare nell'ambito dell'_`integrazione asincrona`_per il recupero delle ricevute di pagamento
* _**FdR - Flussi di Rendicontazione**_ (EC) -> prodotto da utilizzare per recuperare i flussi di rendicontazione da parte dei PSP
{% endhint %}

**Connessione con nodo**

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



Completata la fase di generazione delle chiavi, nella _Pagina Vista API Key_ è possibile visualizzare i prodotti con la coppia di chiavi primaria e secondaria ad essi associate e i relativi comandi di gestione del codice.

<figure><img src="../../.gitbook/assets/image (60).png" alt=""><figcaption><p><em>Pagina vista ApiKey generate</em></p></figcaption></figure>

Per procedere è necessario ritornare nella Panoramica - Area Riservata, selezionandola dal **menu a tendina** situato al lato sinistro dell'intestazione.

<figure><img src="../../.gitbook/assets/image (102).png" alt=""><figcaption><p><em>Menu a tendina che consente di tornare nella Panoramica di Area Riservata</em> </p></figcaption></figure>

Dalla Panoramica - Area riservata, cliccando sulla freccia all'interno della card relativa al prodotto è possibile selezionare il secondo ambiente per cui si intende effettuare la generazione **"Produzione".**

<figure><img src="../../.gitbook/assets/image (103).png" alt=""><figcaption><p><em>Pop up di selezione dell'ambiente target all'ingresso del back-office di prodotto</em></p></figcaption></figure>

### Sezione API Key: Ambiente di Produzione

L'utente potrà procedere alla **generazione** delle API Key di produzione seguendo le stesse azioni illustrate nella sezione API Key: Ambiente di Collaudo.

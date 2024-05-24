---
description: >-
  La funzionalità generazione delle API Key è una delle operazione necessaria
  per l’attivazione del prodotto pagoPA e che, in particolare, consente la
  connessione al Nodo dei Pagamenti PagoPA.
---

# Generazione API Key

Il ruolo che ne possiede il **pieno potere** a livello di **operatività** è il **Responsabile Tecnico**:

* interno al **PSP**, nel caso di soggetto **direttamente connesso** al Nodo dei Pagamenti PagoPA;
* dell’**Intermediario Tecnologico** o del **Partner tecnologico** del **PSP**, nel caso di soggetto **non direttamente connesso** al Nodo dei Pagamenti PagoPA.

Il **Responsabile Amministrativo** possiede invece **pieno** **potere** a livello di **visualizzazione.**



### Sezione API Key: Ambiente di Collaudo

Dalla **Panoramica - Area riservata**, dopo aver cliccato sul pulsante "Gestisci**"** del prodotto e aver selezionato l'ambiente target, ad esempio **"Collaudo"**, l'utente accede alla _Pagina Vista API Key._

Nella suddetta _Pagina_ è possibile procedere alla generazione delle chiavi cliccando sul tasto “+ Genera API Key” o su link in blu “Genera API Key”.

<figure><img src="../../.gitbook/assets/image (52).png" alt=""><figcaption><p><em>Pagina Vista API Key</em></p></figcaption></figure>

Effettuando il click, si accede alla _Pagina di Selezione tipo di prodotto_

#### **Selezione del tipo di prodotto**

Nella _Pagina di Selezione tipo di prodotto,_ tramite Il menu a tendina “Tipo di prodotto”, è possibile visualizzare e selezionare la tipologia di prodotto per cui è necessario generare le chiavi.

{% hint style="info" %}
La prossima sezione descrive il processo di generazione di una coppia di API Key per una tipologia di prodotto, la principale, ovvero la _**connessione con nodo**_.&#x20;



Le altre tipologie di prodotto, per semplicità non descritte hanno rispettivamente i seguenti compiti:

* _**FdR - Flussi di Rendicontazione**_ (PSP) -> prodotto da utilizzare per recuperare i flussi di rendicontazione da parte dei PSP
* _**Backoffice External (PSP)** ->  prodotto da utilizzare per le API esterne descritte nella sezione_ [_"External API"_](broken-reference)
{% endhint %}

<figure><img src="../../.gitbook/assets/Screenshot 2024-03-18 alle 16.15.54.png" alt=""><figcaption></figcaption></figure>

#### **Connessione con nodo**

_Questa API Key permette di connettersi al Nodo Pagamenti di PagoPA: azione propedeutica per tutte le ulteriori operazioni._

Per procedere, dal menù è necessario selezionare il prodotto “**Connessione con nodo**”.

Solo una volta selezionata la voce, sarà possibile proseguire cliccando sul pulsante “Genera API Key”.

Cliccando sul tasto "Annulla", invece, è possibile tornare alla _Pagina Vista API Key._

<figure><img src="../../.gitbook/assets/image (143).png" alt=""><figcaption><p><em>Pagina di Selezione tipo di prodotto: Connessione con nodo</em></p></figcaption></figure>

Una volta aver cliccato sul pulsante “Genera API Key”, se la coppia di chiavi (primaria e secondaria) è stata generata correttamente allora è possibile visualizzarle e gestirle all’interno della _Pagina Vista API Key._

<figure><img src="../../.gitbook/assets/image (118).png" alt=""><figcaption><p><em>Pagina Vista API Key: Connessione con nodo</em></p></figcaption></figure>

Per ogni campo contenente il codice API Key è possibile effettuare le seguenti azioni:

* cliccare su **icona a forma di occhio** che consente la visualizzazione del Codice alfanumerico

<figure><img src="../../.gitbook/assets/image (141).png" alt=""><figcaption><p><em>Pagina Vista API Key: icona a forma di occhio</em></p></figcaption></figure>

* cliccare sul tasto **"Usa questa chiave"** che permette di copiare ed incollare il codice alfanumerico;

<figure><img src="../../.gitbook/assets/image (123).png" alt=""><figcaption><p><em>Pagina Vista API Key: tasto “Usa questa chiave”</em></p></figcaption></figure>

* cliccare sul tasto **“Rigenera”**, da cui verrà mostrato il pop up informativo che consente di generare un nuovo codice. Se si intende procedere alla generazione del nuovo codice è necessario cliccare sul pulsante “Rigenera”, altrimenti sul pulsante “Annulla” al fine di chiudere il pop up.

<figure><img src="../../.gitbook/assets/image (88).png" alt=""><figcaption><p><em>Pagina Vista API Key: tasto “Rigenera”</em></p></figcaption></figure>

Completata la generazione della coppia di chiavi per il prodotto Connessione con nodo in ambiente di Collaudo, è possibile effettuare questa operazione in ambiente di Produzione.&#x20;

Per procedere è necessario ritornare nella Panoramica - Area Riservata, selezionando questa dal **menù a tendina** situato al lato sinistro dell'intestazione.

<figure><img src="../../.gitbook/assets/image (35).png" alt=""><figcaption><p><em>Menu a tendina che consente di tornare nella Panoramica di Area Riservata</em> </p></figcaption></figure>

Dalla Panoramica - Area riservata, dopo aver cliccato sul pulsante "Gestisci" del prodotto è possibile selezionare il secondo ambiente per cui si intende effettuare la generazione es. **"Produzione".**

<figure><img src="../../.gitbook/assets/image (11) (2).png" alt=""><figcaption><p><em>Pop up di selezione ambiente target</em></p></figcaption></figure>

### Sezione API Key: Ambiente di Produzione

L'utente potrà procedere alla **generazione** delle API Key in **ambiente di produzione**, svolgendo le stesse azioni illustrate nella sezione API Key: Ambiente di Collaudo.

---
description: >-
  Il censimento al nodo consiste nella registrazione del PSP al nodo ed è
  l'operazione necessaria da effettuare, al fine di poter operare all'interno di
  Back office pagoPA.
---

# Registrazione al Nodo dei pagamenti PagoPA

Il ruolo che ne possiede il **pieno potere** a livello di **operatività** è il **Responsabile Amministrativo.**

{% hint style="danger" %}
Si precisa che la modalità di connessione al nodo "diretta" sta ad indicare che il PSP sceglie di connettersi direttamente al Nodo, utilizzando quindi le proprie infrastrutture ed i propri collegamenti. Avrà inoltre la possibilità di essere intermediario di altri PSP indiretti e di associarli ai propri canali attraverso la funzionalità [Associa PSP](canale/associazione-di-un-psp-al-canale.md)

Inoltre, una volta selezionata la modalità "diretta" non è possibile da sistema cambiarla in "indiretta". Per fare ciò è necessario contattare l'assistenza tecnica.

La modalità "indiretta" prevede invece che il PSP sarà connesso al nodo per il tramite di un PSP "diretto" oppure di un Partner Tecnologico. Affinché il Partner Tecnologico possa poi associare il PSP ad un canale è necessario che il PSP abbia concluso la procedura di registrazione al nodo indicata in questa sezione.
{% endhint %}

### Registrazione al Nodo

Per procedere alla Registrazione al nodo, all'interno del box "E ora?" l'utente può **cliccare** sul tasto **"Completa registrazione -->"**.

<figure><img src="../../.gitbook/assets/image (97).png" alt=""><figcaption><p><em>Panoramica</em></p></figcaption></figure>

Una volta aver cliccato su "Completa registrazione -->", l'utente **accede** alla _Pagina **"Registrazione sul Nodo"**._

Per procedere, è necessario che l'utente completi la **compilazione** dei **campi obbligatori** quali:

* **Codice BIC**, all'interno della sezione **"Dati di registrazione"**
* **Marca da bollo digitale**, in cui avrà la possibilità di scegliere tra i valori: No; Si, attiva.

Inoltre, l'utente oltre a dover procedere alla compilazione dei suddetti campi, è **tenuto** ad **esprimere** la scelta relativa alla **modalità** di **connessione** al **Nodo**. Tale scelta avviene **tramite** **selezione** **dell'opzione "Diretta"/"Indiretta"** all'interno della **sezione** **"Modalità di connessione al Nodo"**.

<figure><img src="../../.gitbook/assets/image (8).png" alt=""><figcaption><p><em>Form Registrazione sul Nodo</em></p></figcaption></figure>

#### Caso 1: Modalità di connessione al Nodo indiretta

L'utente procede alla **compilazione dei dati obbligatori e** sceglie la **modalità indiretta** di connessione al Nodo**.**

<figure><img src="../../.gitbook/assets/image (7) (1).png" alt=""><figcaption><p><em>Registrazione al Nodo - Connessione indiretta - Conferma</em></p></figcaption></figure>

Una volta completati tutti i campi obbligatori e aver cliccato sul tasto "Conferma", l'utente avrà completato la Registrazione al Nodo dei Pagamenti PagoPA.

Questo verrà reindirizzato alla Panoramica in cui potrà visualizzare il riepilogo dei dati:

* **Nome**
* **Ragione Sociale**
* **Codice Fiscale**
* **Codice ABI**
* **Codice PSP**
* **Codice BIC**
* **Marca da bollo digitale**
* Stato **"Abilitato".**
* Intermediario di altri  **"Non disponibile"**

<figure><img src="../../.gitbook/assets/image (9).png" alt=""><figcaption><p><em>Panoramica - PSP indiretto - Registrazione completata</em></p></figcaption></figure>



#### Caso 2 : Modalità di connessione al Nodo diretta

L'utente procede alla **compilazione dei dati obbligatori e** sceglie la **modalità diretta** di connessione al Nodo**.**

<figure><img src="../../.gitbook/assets/image (8) (1).png" alt=""><figcaption><p><em>Registrazione al Nodo - Connessione diretta - Conferma</em></p></figcaption></figure>

L'utente, una volta **cliccato** su **"Conferma"**, visualizzerà il **pop up** informativo **per confermare la scelta** di volersi connettere direttamente al Nodo.&#x20;

&#x20;Un PSP che sceglie di connettersi direttamente al Nodo, utilizzando quindi le proprie infrastrutture ed i propri collegamenti, avrà la possibilità di essere intermediario di altri PSP indiretti e di associarli ai propri canali attraverso la funzionalità [Associa PSP](canale/associazione-di-un-psp-al-canale.md).

Una volta completati i campi obbligatori e aver cliccato sul tasto "Conferma", l'utente avrà completato la Registrazione al Nodo dei Pagamenti PagoPA.

Questo verrà reindirizzato alla Panoramica in cui potrà visualizzare il riepilogo dei dati:

* **Nome**
* **Ragione Sociale**
* **Codice Fiscale**
* **Codice ABI**
* **Codice PSP**
* **Codice BIC**
* **Marca da bollo digitale**
* Stato **"Abilitato".**
* Intermediario di altri  **"Disponibile"**

<figure><img src="../../.gitbook/assets/image (10).png" alt=""><figcaption><p><em>Panoramica - PSP diretto - Registrazione completata</em></p></figcaption></figure>



L'utente **solo** dopo aver **completato la Registrazione**, può procedere all'esecuzione degli step successivi a questa, come la Generazione delle API Key, che può avviare direttamente dalla Panoramica - box "E ora?" cliccando su tasto "**Genera API Key**", o accedendo alla **Sezione** **dedicata**[ "**API Key"**](generazione-api-key.md)**.**

#### Modifica dati di registrazione

L'utente, una volta completata la registrazione al Nodo **potrà** intervenire a **modificare** le seguenti informazioni:

* **Codice BIC:**  può **modificare** e aggiornare il codice **BIC.**
* **Marca da bollo digitale:** può passare da marca **da** bollo digitale "**Attiva**" a "**Non Attiva**" e **viceversa**.
* **Modalità di Connessione al Nodo:** questa scelta è **modificabile senza vincoli** **solo** se si intende passare **da** connessione **Indiretta** a **Diretta.** Se invece si vuole passare **da Diretta a Indiretta** la possibilità è garantita soltanto se non esistono dei rapporti di associazione in corso sui canali  configurati. In tal caso è necessario contattare l'assistenza PagoPa.

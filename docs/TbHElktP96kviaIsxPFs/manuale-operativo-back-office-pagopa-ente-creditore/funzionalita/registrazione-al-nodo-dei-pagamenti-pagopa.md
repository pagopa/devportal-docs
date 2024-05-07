---
description: >-
  Il censimento al nodo consiste nella registrazione dell'EC al nodo ed è
  l'operazione necessaria da effettuare, al fine di poter operare all'interno di
  Back office pagoPA.
---

# Registrazione al nodo dei Pagamenti PagoPa

Il ruolo che ne possiede il **pieno potere** a livello di **operatività** è il **Referente dei Pagamenti**;

Il **Referente Tecnico** possiede invece **pieno potere** a livello di **visualizzazione.**

{% hint style="danger" %}
Si precisa che la modalità di connessione al nodo "diretta" sta ad indicare che l'EC sceglie di connettersi direttamente al Nodo, utilizzando quindi le proprie infrastrutture ed i propri collegamenti. Avrà inoltre la possibilità di essere intermediario di altri EC indiretti e di associarli alle proprie stazioni attraverso la funzionalità [Associa EC](stazioni/associazione-di-un-ec-alla-stazione.md).

Inoltre, una volta selezionata la modalità "diretta" non è possible da sistema cambiarla in "indiretta". Per fare ciò è necessario contattare l'assistenza tecnica.

La modalità "indiretta" prevede invece che l'EC sarà connesso al nodo per il tramite di un EC "diretto" oppure di un Partner Tecnologico. Affinchè il Partner Tecnologico possa poi associare l'EC ad una stazione è necessario che l'EC abbia concluso la procedura di registrazione al nodo indicata in questa sezione.

![](../../.gitbook/assets/spaces\_TbHElktP96kviaIsxPFs\_uploads\_hL0lb3IbEe9mUYvUYQ9m\_image.webp)
{% endhint %}

## Registrazione al Nodo

Per procedere alla Registrazione al nodo, all'interno del box "E ora?" l'utente può **cliccare** sul tasto "**Completa registrazione** -->".

<figure><img src="../../.gitbook/assets/image (56).png" alt=""><figcaption><p><em>Panoramica - Completa registrazione</em></p></figcaption></figure>

Una volta aver cliccato su "Completa registrazione -->", l'utente **accede** alla Pagina "**Registrazione sul Nodo**".

Per procedere, è necessario che l'utente completi la **compilazione** dei **campi obbligatori** quali:

Indirizzo, Provincia, Domicilio Fiscale, Città e CAP, **all'interno** della **sezione** "**Dati di registrazione**"

Inoltre, l'utente oltre a dover procedere alla compilazione dei suddetti campi, è **tenuto** ad **esprimere** la scelta relativa alla **modalità** di **connessione** al **Nodo**. Tale scelta avviene **tramite** **selezione** **dell'opzione "Diretta"/"Indiretta"** all'interno della **sezione** **"Modalità di connessione al Nodo"**.

<figure><img src="../../.gitbook/assets/image (1) (1).png" alt=""><figcaption><p><em>Registrazione al Nodo - da completare</em></p></figcaption></figure>



#### Caso 1: Modalità di connessione al Nodo indiretta

L'utente procede alla **compilazione dei dati obbligatori** e sceglie la **modalità indiretta** di connessione al Nodo**.**

<figure><img src="../../.gitbook/assets/image (2) (1).png" alt=""><figcaption><p><em>Registrazione al Nodo - connessione indiretta</em></p></figcaption></figure>

Una volta aver cliccato sul tasto "Conferma", l'utente avrà completato la Registrazione al Nodo dei Pagamenti PagoPA.

Questo verrà reindirizzato alla Panoramica in cui potrà visualizzare il riepilogo dei dati:

* **Nome**
* **Ragione Sociale**
* **Codice Fiscale**
* **Codice Interbancario**
* **Data adesione**
* **Indirizzo**
* **Città**
* **Provincia**
* **CAP**
* **Domicilio fiscale**
* Stato "**Abilitato**"
* Intermediario di altri **"Non disponibile"**

<figure><img src="../../.gitbook/assets/image (3).png" alt=""><figcaption><p><em>Panoramica - Registrazione al Nodo completata - Connessione indiretta</em></p></figcaption></figure>

#### Caso 2 :  Modalità di connessione al Nodo diretta

L'utente procede alla **compilazione dei dati obbligatori e** sceglie la **modalità diretta** di connessione al Nodo**.**

<figure><img src="../../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>

L'utente, una volta **cliccato** su **"Conferma"**, visualizzerà il **pop up** informativo **per confermare la scelta** di volersi connettere direttamente al Nodo.&#x20;

&#x20;Un EC che sceglie di connettersi direttamente al Nodo, utilizzando quindi le proprie infrastrutture ed i propri collegamenti, avrà la possibilità di essere intermediario di altri EC indiretti e di associarli alle proprie stazioni attraverso la funzionalità [Associa EC](stazioni/associazione-di-un-ec-alla-stazione.md).

Una volta completati i campi obbligatori e aver cliccato sul tasto "Conferma", l'utente avrà completato la Registrazione al Nodo dei Pagamenti PagoPA.

Una volta aver cliccato sul tasto "Conferma", l'utente avrà completato la Registrazione al Nodo dei Pagamenti PagoPA.

Questo verrà reindirizzato alla Panoramica in cui potrà visualizzare il riepilogo dei dati:

* **Nome**
* **Ragione Sociale**
* **Codice Fiscale**
* **Codice Interbancario**
* **Data adesione**
* **Indirizzo**
* **Città**
* **Provincia**
* **CAP**
* **Domicilio fiscale**
* Stato "**Abilitato**"
* Modalità di connessione **"Diretta"**

<figure><img src="../../.gitbook/assets/image (5).png" alt=""><figcaption><p><em>Panoramica - Registrazione al Nodo completata - Connessione diretta</em></p></figcaption></figure>

L'utente **solo** dopo aver **completato la Registrazione**, può procedere all'esecuzione degli step successivi a questa, come la Generazione delle API Key, che può avviare direttamente dalla Panoramica - box "E ora?" cliccando su tasto "**Genera API Key**", o accedendo alla **Sezione** **dedicata** ["**API Key"**](generazione-api-key.md)**.**

#### Modifica dati di registrazione

L'utente, una volta completata la registrazione al Nodo **potrà** intervenire a **modificare** le seguenti informazioni:

* **Indirizzo**
* **Città**
* **Provincia**
* **CAP**
* **Modalità di Connessione al Nodo:** questa scelta è **modificabile senza vincoli** **solo** se si intende passare **da** connessione **Indiretta** a **Diretta.** Se invece si vuole passare **da Diretta a Indiretta** la possibilità è garantita soltanto se non esistono dei rapporti di associazione in corso sulle stazioni  configurate. In tal caso è necessario contattare l'assistenza PagoPa.



####

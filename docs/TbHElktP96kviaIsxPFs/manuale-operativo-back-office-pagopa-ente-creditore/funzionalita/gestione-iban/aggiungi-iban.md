---
description: >-
  Questa funzionalità consente la configurazione di un nuovo IBAN associato
  all'EC.
---

# Aggiungi IBAN

La funzionalità **Aggiungi IBAN** è riservata esclusivamente al **Referente dei Pagamenti.**

### **Sezione IBAN: Aggiungi**

All’interno del **Back office pagoPA** è possibile accedere alla **sezione IBAN** cliccando sulla **voce di menu "IBAN"**.

Se **non** sono ancora stati **creati IBAN**, l'utente visualizzerà la _Pagina "Vista Iban"_ vuota e il warning informativo "_Non sono ancora presenti IBAN in ambiente di collaudo. Aggiungi IBAN_".&#x20;

E' possibile procedere alla **creazione** di un nuovo IBAN, cliccando sia su tasto **"Aggiungi IBAN"** che su hyperlink in blu **"Aggiungi IBAN".**

<figure><img src="../../../.gitbook/assets/image (187).png" alt=""><figcaption><p><em>Pagina Vista Iban - tabella elenco Iban vuota</em></p></figcaption></figure>

Nel caso in cui siano già **stati creati iban**, l'utente nella suddetta _Pagina_ ne visualizzerà l'**elenco** sotto forma di **tabella**:

* Codice IBAN
* Descrizione
* Data inizio validità

<figure><img src="../../../.gitbook/assets/image (48).png" alt=""><figcaption><p><em>Tabella elenco IBAN</em></p></figcaption></figure>

Per **creare** un **nuovo IBAN** è necessario cliccare sul tasto  **"Aggiungi IBAN".**

#### **Pagina Aggiungi IBAN - Caricamento singolo**

Al click su **"Aggiungi IBAN"** l'utente può accedere alla _**pagina Aggiungi IBAN**_ in cui selezionando **"Caricamento singolo"**, è possibile inserire tutti i dati necessari alla **configurazione di un singolo IBAN**.

{% hint style="warning" %}
Si ricorda che è necessario inserire come `data inizio` il giorno successivo a quello di inserimento e come `data fine` una data successiva a quella di inizio. Il sistema di default imposta come data inizio il giorno successivo alla data in cui si sta facendo l'operazione e come data fine la data di inizio + 365 giorni.



La data di fine inoltre non determina inibizioni particolari sui processi di pagamento ma allo stato attuale serve solo ai fini di monitoraggio.
{% endhint %}

<figure><img src="../../../.gitbook/assets/image (188).png" alt=""><figcaption><p><em>Form Aggiungi Iban - Caricamento singolo</em></p></figcaption></figure>

&#x20;Nel momento in cui la compilazione è **completata,** è possibile cliccare sul tasto **"Conferma".**

<figure><img src="../../../.gitbook/assets/image (189).png" alt=""><figcaption><p><em>Form Aggiungi Iban - Caricamento singolo - Conferma</em></p></figcaption></figure>

Una volta aver cliccato sul tasto **"Conferma"**, l'**utente** verrà **reindirizzato** alla **Pagina Vista IBAN** in cui potrà visualizzare l'IBAN appena creato.&#x20;

<figure><img src="../../../.gitbook/assets/image (190).png" alt=""><figcaption><p><em>Pagina Vista elenco Iban</em></p></figcaption></figure>

### **Gestione IBAN Stand In e Cup**

All'interno della sezione IBAN è possibile **selezionare** gli **IBAN** designati come **Stand In** e come **Cup** selezionandoli tra quelli disponibili dall'apposito menu a tendina presente nel box in alto.

* **STAND IN:** IBAN da utilizzare per il processo che garantisce l’intervento di pagoPA qualora l’ente riscontrasse problemi. Per maggiori informazioni si faccia riferimento a [https://docs.pagopa.it/sanp/specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/stand-in](https://docs.pagopa.it/sanp/specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/stand-in)
* **CUP:** IBAN da utilizzare in caso di pagamento Canone Unico Patrimoniale, servizio gestito da PagoPA S.p.A.

<figure><img src="../../../.gitbook/assets/image (6) (1).png" alt=""><figcaption><p><em>Gestione IBAN Stand In e Cup</em></p></figcaption></figure>

Tale **selezione** sarà **modificabile** grazie alla funzionalità **"Gestisci"**.

<figure><img src="../../../.gitbook/assets/image (7) (1).png" alt=""><figcaption><p><em>Gestione IBAN Stand In e Cup - Gestisci</em></p></figcaption></figure>






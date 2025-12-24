# Modello dei dati V 3

### Schema logico (ER)

<figure><img src="../../.gitbook/assets/Screenshot 2025-12-24 alle 10.36.15.png" alt=""><figcaption></figcaption></figure>

La **Posizione Debitoria (Payment Position)** ha le seguenti relazioni:

* Una **Payment Position** può avere più Payment Option. Ne esiste almeno una. Una **Payment Option** è collegata ad una sola **Payment Position**.
* Una **Payment Option** può avere più **Installment** (i.e. Rata). Ne esiste almeno una. Un **Installment** è collegato ad una sola **Payment Option**.
* Una **Payment Option** è collegata a un **Debtor**. Se esiste un **Debtor** esiste almeno una **Payment Option** ad esso collegata.
* Un **Installment** può avere più **Transfer** (i.e. Versamenti), tanti quanti gli Enti Creditori (EC) a cui deve afferire. Ne esiste _almeno uno con un massimo di cinque_. Un **Transfer** è collegato ad un solo **Installment**.

{% hint style="info" %}
_Ad esempio, una rata potrebbe avere la seguente suddivisione:_

* _Pagamento mono-beneficiario, con singolo versamento (1 EC, 1 versamento);_
* _Pagamento mono-beneficiario , con più versamenti (1 EC, n versamenti);_
* _Pagamento multi-beneficiario (n EC, n versamenti);_
* _Una combinazione dei punti precedenti (n EC, m versamenti con m>n)._
{% endhint %}

Questa struttura permette di gestire non solo i modelli retro-compatibili con le API-V1, ma anche scenari avanzati non supportati in precedenza, come la gestione dei **co-obbligati** e i **pagamenti multi-rateali**.

Nei paragrafi seguenti sono riportati le principali caratteristiche di una Posizione Debitoria. Maggiori dettagli tecnici sulla logica del sistema e le transizioni di stato dipendenti dai campi specificati sono riportati nella sezione dedicata agli Stati della Posizione Debitoria.

#### Posizione Debitoria (Payment Position)

Le principali caratteristiche di una Posizione Debitoria sono le seguenti:

* **IUPD**: Identificativo univoco posizione debitoria. È onere dell’EC la creazione di uno IUPD univoco. Qualora non sia univoco il sistema restituirà un errore.
* **Ente Creditore**: Codice Fiscale dell’ente creditore proprietario della PD.
* **Anagrafica Ente Creditore**: Ragione sociale, dipartimento, ufficio.
* **Data di pubblicazione:** Data in cui la PD è pubblicata nel sistema.

#### Opzione di Pagamento (Payment Option)

Le principali caratteristiche di un Opzione di Pagamento sono le seguenti:

* **Descrizione:** Descrizione dell’Opzione di Pagamento.
* **Data di Validità**: Data dalla quale è valida e pagabile l’Opzione di Pagamento e le Rate in essa contenute.&#x20;

{% hint style="info" %}
È responsabilità dell’EC gestire la PD e ogni informazione ad essa associata, ivi compresa la data di validità.
{% endhint %}

* **Scadenza**_\[flag]_: Indica se la PD è da rendere non pagabile alla scadenza.

#### Rata (Installment)

Le principali caratteristiche di una Rata sono le seguenti:

* **Numero Avviso (NAV)**: Identificativo della Rata emessa da un determinato Ente Creditore, sarà l’identificativo utilizzato dal Nodo dei Pagamenti per avviare la transazione, emettere la ricevuta e rendicontare il pagamento.
* **Identificativo Univoco Versamento (IUV)**: Identificativo univoco per ogni Rata.
* **Importo**: Importo previsto per la Rata.
* **Descrizione**: Descrizione della Rata.
* **Data di scadenza**: Data che definisce la data di scadenza del dovuto. Ha un effetto sulla pagabilità qualora sia attivo il flag di scadenza.
* **Meta-Dati** _\[optional]_: Array per permettere agli EC di inserire informazioni custom tipicamente relative alla riconciliazione contabile, allineamento programmi gestionali, etc.

#### Debitore (Debtor)

Le principali caratteristiche di un Debitore sono le seguenti:

* **Tipo**: Indica se è una persona fisica o giuridica.
* **Identificativo**: Codice Fiscale (o anche Partita IVA in caso di persona giuridica) del debitore.
* **Indirizzo** _\[optional]_.
* **Email** _\[optional]_.
* **Numero di telefono** _\[optional]_.

#### Versamento (Transfer)

Le principali caratteristiche di un Versamento sono le seguenti:

* **Id**: Identificativo (progressivo) di un versamento all’interno di una Rata.
* **Ente Creditore**: Ente beneficiario del versamento.
* **Importo**: Importo previsto per il versamento.
* **Causale versamento**: Causale del singolo versamento.
* **Tassonomia**: Tassonomia del servizio associato al versamento.
* **IBAN**: IBAN su cui verra riversato l’importo.&#x20;

{% hint style="warning" %}
L’IBAN viene associato alla **PD** nel momento in cui viene caricata. Se l’IBAN scelto viene modificato da [Back Office](https://developer.pagopa.it/pago-pa/guides/manuale-bo-ec/v1.0/manuale-operativo-back-office-pagopa-ente-creditore/funzionalita/gestione-iban/modifica-iban), la **PD** precedentemente caricata avrà associato sempre l’IBAN che è stato associato in fase di creazione.
{% endhint %}

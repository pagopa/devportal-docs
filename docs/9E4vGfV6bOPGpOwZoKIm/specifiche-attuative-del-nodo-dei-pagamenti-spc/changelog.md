# Changelog

### 3.4.1 (maggio 2023)

* Correzione _sequence diagram_ in [pagamento-presso-frontend-dellec.md](../casi-duso/pagamento-presso-frontend-dellec.md "mention")
* Correzione relativa all'utilizzo del [#bollettino-postale-pa](../ente-creditore/modalita-dintegrazione/best-practice.md#bollettino-postale-pa "mention")
* Correzione relativa alla quota commissionale a carico dell'EC in [gestione-evoluta-commissioni.md](../appendici/gestione-evoluta-commissioni.md "mention")
* Correzione tag in _transferType_ di [#pagetpayment-versione-2](../appendici/primitive.md#pagetpayment-versione-2 "mention") con aggiunta valore _PAGOPA_
* Correzione openapi [#getorganizationreceipt](../appendici/primitive.md#getorganizationreceipt "mention") per _mbdAttachment not required_
* Correzione type del tag _amount_ nelle primitive [#paverifypaymentnotice](../appendici/primitive.md#paverifypaymentnotice "mention"), [#verifypaymentnotice](../appendici/primitive.md#verifypaymentnotice "mention") e [#verificabollettino](../appendici/primitive.md#verificabollettino "mention")
* Correzione della gestione del campo _organizationFiscalCode_ nei transfer delle **Posizioni Debitorie** in[operazioni-disponibili.md](../appendici/posizioni-debitorie/operazioni-disponibili.md "mention")

### 3.4.0 (marzo 2023)

* [#archivio-centralizzato-avvisi](../ente-creditore/modalita-dintegrazione/integrazione-tramite-api-sincrone.md#archivio-centralizzato-avvisi "mention") in caso di [integrazione-tramite-api-sincrone.md](../ente-creditore/modalita-dintegrazione/integrazione-tramite-api-sincrone.md "mention")
* [#ricezione-sincrona-della-ricevuta](../ente-creditore/modalita-dintegrazione/integrazione-tramite-api-asincrone.md#ricezione-sincrona-della-ricevuta "mention") in caso di [integrazione-tramite-api-asincrone.md](../ente-creditore/modalita-dintegrazione/integrazione-tramite-api-asincrone.md "mention")
* Aggiunti _idCart_ e _allCCP_ nei [#\_om57nyt5rga1](../ente-creditore/modalita-dintegrazione/integrazione-touch-point-dellec-con-checkout.md#\_om57nyt5rga1 "mention") per [integrazione-touch-point-dellec-con-checkout.md](../ente-creditore/modalita-dintegrazione/integrazione-touch-point-dellec-con-checkout.md "mention")
* Chiarimenti sul tag _paymentNote_ in [#fase-di-attivazione](../ente-creditore/modalita-dintegrazione/best-practice.md#fase-di-attivazione "mention")
* Utilizzo del [#bollettino-postale-pa](../ente-creditore/modalita-dintegrazione/best-practice.md#bollettino-postale-pa "mention") in caso di [pagamento-presso-frontend-dellec.md](../casi-duso/pagamento-presso-frontend-dellec.md "mention")
* Chiarimenti sul [servizio-e.bollo.md](../ente-creditore/servizio-e.bollo.md "mention")
* Aggiunto[#backoffice-pagopa](../prestatore-di-servizi-di-pagamento/adesione.md#backoffice-pagopa "mention") in [adesione.md](../prestatore-di-servizi-di-pagamento/adesione.md "mention")dei PSP
* Rimossi i riferimenti alla whitelist in [#nodo-dei-pagamenti-client](../appendici/connettivita.md#nodo-dei-pagamenti-client "mention")
* Aggiornata definizione tag _paymentNote_ in [#pagetpayment](../appendici/primitive.md#pagetpayment "mention")
* Aggiunto tag _allCCP_ in [#activatepaymentnotice-versione-2](../appendici/primitive.md#activatepaymentnotice-versione-2 "mention") request
* Aggiunto tag _transferCategory_ in [#activatepaymentnotice-versione-2](../appendici/primitive.md#activatepaymentnotice-versione-2 "mention") response
* Aggiunti tag per [gestione-evoluta-commissioni.md](../appendici/gestione-evoluta-commissioni.md "mention") in [#pspnotifypayment-versione-2](../appendici/primitive.md#pspnotifypayment-versione-2 "mention") request
* Aggiunto tag _idSoggettoServizio_ in [#pademandpaymentnotice](../appendici/primitive.md#pademandpaymentnotice "mention")request
* Corretto tag identificativoDominio in [#nodochiedielencoflussirendicontazione](../appendici/primitive.md#nodochiedielencoflussirendicontazione "mention")
* Aggiunti campi _idCart_ e _allCCP_ in [#ec-checkout-api](../appendici/primitive.md#ec-checkout-api "mention")
* Definizione del servizio per la creazione di una opzione di pagamento ad-hoc in [#pagamento-spontaneo](../appendici/posizioni-debitorie/modello-dati.md#pagamento-spontaneo "mention")
* Aggiornata FSM in [#posizione-debitoria](../appendici/posizioni-debitorie/stati-della-posizione-debitoria.md#posizione-debitoria "mention")
* Aggiornate le modalità di pubblicazione in [#creazione-di-una-posizione-debitoria](../appendici/posizioni-debitorie/operazioni-disponibili.md#creazione-di-una-posizione-debitoria "mention")
* Aggiornata la gestione dei filtri in [#lettura-di-una-lista-di-posizioni-debitorie-e-di-una-singola-posizione-debitoria](../appendici/posizioni-debitorie/operazioni-disponibili.md#lettura-di-una-lista-di-posizioni-debitorie-e-di-una-singola-posizione-debitoria "mention")
* Aggiunte operazioni per le[#ricevute-di-pagamento](../appendici/posizioni-debitorie/operazioni-disponibili.md#ricevute-di-pagamento "mention") delle Posizioni Debitorie
* Chiarimenti sull'utilizzo del tag _touchPoint in_ [pos-fisici.md](../appendici/pos-fisici.md "mention")

### 3.3.1 (febbraio 2023)

* Corretto il link per la **Generazione e stampa degli avvisi**
* Corretti i wsdl/xsd in [https://github.com/pagopa/pagopa-api/tree/SANP3.3.1](https://github.com/pagopa/pagopa-api/tree/SANP3.3.1)
* Corretto il [giornale-degli-eventi.md](../appendici/giornale-degli-eventi.md "mention") con inserimento dei tempi di conservazione

### 3.3.0 (gennaio 2023)

* Aggiornato flusso in [ciclo-di-vita-di-un-pagamento.md](funzionamento-generale/ciclo-di-vita-di-un-pagamento.md "mention")
* Inserita nuova pagina [overview-delle-componenti.md](funzionamento-generale/overview-delle-componenti.md "mention") che rappresenta la macro architettura applicativa della piattaforma pagoPA
* Ampliata la descrizione del [catalogo-dei-servizi.md](../casi-duso/pagamento-spontaneo-presso-psp/catalogo-dei-servizi.md "mention")
* Attualizzazione dell'importo in [#title-text-2](../ente-creditore/modalita-dintegrazione/best-practice.md#title-text-2 "mention")
* Distinzione tra modalità di integrazione per gli EC in [integrazione-tramite-api-sincrone.md](../ente-creditore/modalita-dintegrazione/integrazione-tramite-api-sincrone.md "mention") e [integrazione-tramite-api-asincrone.md](../ente-creditore/modalita-dintegrazione/integrazione-tramite-api-asincrone.md "mention")
* Corretti i link alle linee guida in [generazione-dellidentificativo-univoco-di-versamento.md](../ente-creditore/generazione-dellidentificativo-univoco-di-versamento.md "mention")
* Aggiunta la sezione [Dati canale pagamento](http://localhost:5000/s/u6YdY319vyFX9MIvnKBa/dati-canale-pagamento "mention")in [Dizionario dei metadata](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/u6YdY319vyFX9MIvnKBa/ "mention")
* Nuova modalità di selezione del PSP per importi inferiori a 50 euro in [offrire-sistemi-di-pagamento-su-touch-point-di-pagopa-s.p.a..md](../prestatore-di-servizi-di-pagamento/modalita-di-integrazione/offrire-sistemi-di-pagamento-su-touch-point-di-pagopa-s.p.a..md "mention")
* Aggiunti dettagli in merito alla non modificabilità dell’outcome inviato dal PSP in [#fase-di-invio-dellesito-del-pagamento](../prestatore-di-servizi-di-pagamento/modalita-di-integrazione/integrazione-tramite-api.md#fase-di-invio-dellesito-del-pagamento "mention")
* Aggiornata la procedura in [#nodo-dei-pagamenti-server](../appendici/connettivita.md#nodo-dei-pagamenti-server "mention")
* Aggiornata la procedura in [#nodo-dei-pagamenti-client](../appendici/connettivita.md#nodo-dei-pagamenti-client "mention")
* [giornale-degli-eventi.md](../appendici/giornale-degli-eventi.md "mention")
* [stampa-avvisi-pagopa.md](../ente-creditore/stampa-avvisi-pagopa.md "mention")
* [adesione-ai-servizi-con-subscription-key.md](../appendici/adesione-ai-servizi-con-subscription-key.md "mention")
* [#recupero-receipt-per-enti-creditori](../ente-creditore/modalita-dintegrazione/integrazione-tramite-api-sincrone.md#recupero-receipt-per-enti-creditori "mention")
* [pos-fisici.md](../appendici/pos-fisici.md "mention")

### 3.2.2 (dicembre 2022)

* Corretti i riferimenti ai soggetti che possono connettersi direttamente alla piattaforma pagoPA nella sezione [connettivita.md](../appendici/connettivita.md "mention")
* Corretto il tag _denominazioneRicevente_ in _FlussoRiversamento\_1\_0\_4.xsd_

### 3.2.1 (novembre 2022)

* Aggiunti dettagli per il corretto utilizzo del tag _transferCategory_ in merito al [servizio-e.bollo.md](../ente-creditore/servizio-e.bollo.md "mention")
* Aggiornato lo swagger [#ec-checkout-api](../appendici/primitive.md#ec-checkout-api "mention")
* Aggiornati gli swagger in [operazioni-disponibili.md](../appendici/posizioni-debitorie/operazioni-disponibili.md "mention")

### 3.2.0 (ottobre 2022)

* Aggiornate le specifiche per [pagamento-presso-frontend-dellec.md](../casi-duso/pagamento-presso-frontend-dellec.md "mention")e [integrazione-touch-point-dellec-con-checkout.md](../ente-creditore/modalita-dintegrazione/integrazione-touch-point-dellec-con-checkout.md "mention")
* [servizio-e.bollo.md](../ente-creditore/servizio-e.bollo.md "mention")
* Aggiunti dettagli per il corretto utilizzo del [#title-text](../prestatore-di-servizi-di-pagamento/modalita-di-integrazione/best-practice.md#title-text "mention") in merito all'invocazione multipla della sendPaymentOutcome
* Modifica delle [primitive.md](../appendici/primitive.md "mention") per la Gestione Evoluta Commissioni

### 3.1.0 (luglio 2022)

* [integrazione-tramite-api-asincrone.md](../ente-creditore/modalita-dintegrazione/integrazione-tramite-api-asincrone.md "mention")
* Chiarimenti in merito alla gestione della chiave di idempotenza in [#title-text-2](../prestatore-di-servizi-di-pagamento/modalita-di-integrazione/best-practice.md#title-text-2 "mention")
* Chiarimenti in merito alla gestione della sessione di pagamento in [#title-text](../prestatore-di-servizi-di-pagamento/modalita-di-integrazione/best-practice.md#title-text "mention")
* Aggiunto esempio esempio di struttura dati del Flusso di Rendicontazione in [rendicontazione-e-cashflow.md](funzionamento-generale/rendicontazione-e-cashflow.md "mention")
* [gestione-evoluta-commissioni.md](../appendici/gestione-evoluta-commissioni.md "mention")
* [connettivita.md](../appendici/connettivita.md "mention")
* Chiarimenti in merito al [pagamento-spontaneo-presso-psp](../casi-duso/pagamento-spontaneo-presso-psp/ "mention")
* Aggiunto esempio di struttura dati in [catalogo-dei-servizi.md](../casi-duso/pagamento-spontaneo-presso-psp/catalogo-dei-servizi.md "mention")
* Aggiunto esempio di struttura dati in [bollo-auto.md](../casi-duso/pagamento-spontaneo-presso-psp/bollo-auto.md "mention")
* Casi d'uso specifici in [tributi-multi-beneficiario.md](../ente-creditore/tributi-multi-beneficiario.md "mention")
* [riconciliazione-contabile.md](../ente-creditore/riconciliazione-contabile.md "mention")
* [#title-text-1](../ente-creditore/modalita-dintegrazione/best-practice.md#title-text-1 "mention")

### 3.0.0 (maggio 2022)

* Major Release
* Revisione completa dell’impostazione
* Introdotta nuova modalità di connessione
* Evoluzione del pagamento presso l'EC
* Evoluzione del pagamento spontaneo presso il PSP
* Evoluzione del pagamento da Touchpoint PagoPA
* Dettagli sulla modalità di pubblicazione delle commissioni applicate dai PSP
* Nuovi indicatori di qualità per i soggetti aderenti

### 2.5.1 (gennaio 2022)

* Modificate e-mail dell’assistenza&#x20;
* Revisione scarico dei Flussi di Rendicontazione

{% embed url="https://docs.italia.it/italia/pagopa/pagopa-specifichepagamenti-docs/it/v2.5.1/index.html" %}

### 2.5.0 (ottobre 2021)

* Precisazioni sui riversamenti cumulativi

### 2.4.3 (settembre 2021)

* _pspInviaCarrelloRPTCarte_ deprecata
* Introduzione primitiva _pspNotifyPayment_ per pagamenti da Touch Point PagoPA.

### 2.4.2 (maggio 2021)

* Ulteriori chiarimenti sul nuovo processo di pagamento presso il PSP
* Chiarimenti sulla modalità d’uso dei conti correnti postali
* Revisione delle opzioni di pagamento.
* Precisazioni e chiarimenti sui FdR

### 2.4.1 (aprile 2021)

* Alcuni chiarimenti sul nuovo processo di pagamento presso il PSP
* Soluzione Canone Unico PagoPA SpA come Partner Tecnologico

### 2.4.0 (marzo 2021)

* Nuovo processo di pagamento presso il PSP
* Eliminate funzioni deprecate

### 2.3.0 (novembre 2020)

* Richiesta catalogo Dati (deprecato) RT push asincrona, Revoca e Storno (deprecato);
* Pagamento on-Line con codice convenzione

### 2.2.0 (gennaio 2020)

* Major release

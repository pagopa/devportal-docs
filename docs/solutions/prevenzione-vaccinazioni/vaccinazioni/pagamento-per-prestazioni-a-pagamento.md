# 6️⃣ Pagamento (per prestazioni a pagamento)

**Quando ha dovuto prenotare una vaccinazione a pagamento, Anna ha ricevuto su app IO un messaggio dettagliato** con l’importo dovuto e un collegamento diretto per saldare la prestazione tramite pagoPA. In pochi tap, ha completato il pagamento direttamente all’interno dell’app, senza necessità di stampare bollettini o accedere a portali esterni.

<figure><img src="../.gitbook/assets/image (11).png" alt="Immagine che mostra in cinque schermate di app IO il flusso di pagamento ove richiesto"><figcaption></figcaption></figure>

### **Cosa fa l'ente:**

*   Il sistema dell’ente crea una **posizione debitoria pagoPA**, associata al messaggio di conferma appuntamento.

    Nel messaggio IO, l'ente, tramite i propri sistemi, deve ricordarsi di inserire:

    * il campo [`payment_data`](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body#payment_data) per permettere al cittadino di pagare direttamente in app;
    * un oggetto chiaro e leggibile dal cittadino (es. “Campagna Vaccinale”);
    * le date di scadenza previste per il pagamento compilando il campo [`due_date`](https://docs.pagopa.it/sanp/appendici/primitive#pagetpayment) .

### **Cosa fa il cittadino:**

* Accede alla sezione pagamenti tramite App IO e salda l’importo dovuto prima di recarsi all'appuntamento.

## Migliora l'esperienza dall'inizio alla fine **💡**

* **Associa il pagamento alla specifica prestazione prenotata**: Il link deve essere univoco, con importo e causale già precompilati per evitare errori.
* **Comunica chiaramente costi, scadenze e modalità**: Specifica se il pagamento è anticipato o posticipato, se è obbligatorio e cosa succede in caso di mancato versamento.
* **Offri assistenza in caso di problemi**: Prevedi un contatto per eventuali errori, mancate ricevute o difficoltà tecniche, per evitare abbandoni del servizio.

## **Benefici per l’ente e per il cittadino** ✅

* **Pagamento semplice e immediato**: Il cittadino può saldare direttamente dall’app, senza dover stampare bollettini o recarsi in farmacia o sportello.
* **Tracciabilità completa del pagamento**: Il sistema PagoPA fornisce ricevuta digitale e rende il processo trasparente e sicuro.
* **Esperienza unificata**: Il cittadino percepisce un percorso digitale completo, dalla prenotazione al pagamento, fino alla prestazione e al certificato.


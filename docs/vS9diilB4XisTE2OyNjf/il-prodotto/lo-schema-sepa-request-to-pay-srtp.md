# Lo schema SEPA Request-To-Pay (SRTP)

Il servizio di Richiesta di Pagamento (RTP) di PagoPA si fonda sullo [**SEPA Request-To-Pay (SRTP)**](https://www.europeanpaymentscouncil.eu/what-we-do/other-schemes/sepa-request-pay), un'iniziativa dell'**European Payments Council (EPC)**. Non si tratta di uno strumento di pagamento, ma di un protocollo standardizzato per la tramitazione delle richieste di pagamento, progettato per funzionare in modo sicuro e tracciabile in tutta l'area SEPA.

Lo schema SRTP definisce un **modello a quattro angoli (four-corner model)**, in cui interagiscono quattro attori principali:

1. **Creditore (Creditor/Payee)**: Il soggetto che deve ricevere il pagamento e che avvia la richiesta.
2. **Debitore (Debtor/Payer)**: Il soggetto che deve effettuare il pagamento e che riceve la richiesta.
3. **Service Provider del Creditore**: Il partner tecnologico (come un PSP, un fornitore di servizi di fatturazione o altro) che aderisce allo schema SRTP e invia le richieste di pagamento per conto del creditore.
4. **Service Provider del Debitore**: Il partner tecnologico che, per conto del debitore, riceve le richieste di pagamento e le presenta all'utente finale sui propri canali (ad esempio, l'home banking).

<figure><img src="../.gitbook/assets/Screenshot 2025-07-23 alle 13.14.26.png" alt=""><figcaption></figcaption></figure>

Il Creditore, tramite il proprio Service Provider, invia la richiesta di pagamento al Service Provider del Debitore, che a sua volta la rende disponibile al Debitore.

Una caratteristica fondamentale dello schema è la sua flessibilità: l'EPC non impone le modalità tecniche di connessione tra i due Service Provider, lasciando ampia libertà di implementazione. Ad esempio, il processo di **attivazione** – con cui un debitore si "iscrive" per ricevere le richieste da un creditore – può avvenire tramite una procedura online o la scansione di un QR Code.

Una volta ricevuta la richiesta, il Debitore ha la facoltà di **accettarla** o **rifiutarla**. Lo schema prevede diverse combinazioni per la gestione della richiesta, riassunte nella tabella seguente:

|                                 | **PAY NOW** (Paga subito)                                                        | **PAY LATER** (Paga dopo)                                                     |
| ------------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **ACCEPT NOW** (Accetta subito) | Accetta e procede subito al pagamento.                                           | Accetta subito ma programma il pagamento a una data successiva.               |
| **ACCEPT LATER** (Accetta dopo) | Programma l'accettazione a una data successiva e, contestualmente, il pagamento. | Programma sia la data di accettazione che quella di esecuzione del pagamento. |

È importante sottolineare che lo schema SRTP **norma i processi di attivazione, invio, accettazione/rifiuto e cancellazione** della richiesta, **ma non la fase di pagamento successiva**. Proprio per questo motivo, i Service Provider non devono essere obbligatoriamente dei Prestatori di Servizi di Pagamento (PSP), ma possono essere anche solo fornitori tecnologici. Nonostante ciò, il disegno dell'EPC è chiaramente orientato al mondo bancario, dove lo strumento di pagamento ideale per completare l'operazione è il SEPA Credit Transfer Instant.

Lo schema è stato pensato per essere trasversale e applicabile a tutti i modelli di business (B2C, B2B, G2C, ecc.) e per funzionare a livello transfrontaliero in tutta l'area SEPA.

Per chi volesse approfondire gli aspetti tecnici dello standard, si raccomanda la lettura del [SEPA Request-To-Pay (SRTP) Scheme Rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/other-schemes/sepa-request-pay) sul sito ufficiale dell'EPC.

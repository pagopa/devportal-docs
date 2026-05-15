---
argomenti_correlati: []
funzione: il-prodotto
livello: principiante
prodotto:
  nome: PagoPA SRTP
  versione: v1.0.0
schema:
  '@context': https://schema.org
  '@type': TechArticle
  author:
    '@type': Organization
    name: PagoPA S.p.A.
  datePublished: '2023-11-15'
  description: >-
    Descrive lo schema SEPA Request-To-Pay (SRTP) dell'European Payments Council
    (EPC), un protocollo di messaggistica che standardizza l'invio e la gestione
    delle richieste di pagamento nell'area SEPA basandosi su un modello
    'four-corner'.
  keywords:
    - SEPA
    - Request-to-Pay
    - SRTP
    - EPC
    - four-corner model
  name: Lo Schema SEPA Request-to-Pay (EPC)
  proficiencyLevel: principiante
status: pubblicato
tecnologia:
  - SRTP
  - SEPA
  - EPC
utente:
  ruolo:
    - erogatore
    - fruitore
  tag:
    - SEPA
    - Request-to-Pay
    - SRTP
    - EPC
    - four-corner model
    - pagamenti
  tipo_ente: partner_tecnologico
---

# Lo Schema SEPA Request-to-Pay (EPC)

Il servizio si basa sullo schema **SEPA Request-To-Pay (SRTP)**, un'[iniziativa dell'European Payments Council (EPC)](https://www.europeanpaymentscouncil.eu/what-we-do/other-schemes/sepa-request-pay) che definisce un insieme di regole e messaggi standard per la tramitazione di richieste di pagamento in tutta l'area SEPA.

{% hint style="info" %}
È importante sottolineare che SRTP non è uno **strumento di pagamento**, ma un protocollo di messaggistica che standardizza il modo in cui una richiesta di pagamento viene inviata, ricevuta e gestita, facilitando la successiva fase di pagamento.
{% endhint %}

## **Il Modello Four-Corner**

Lo schema si fonda su un **"four-corner model"** (modello a quattro angoli), che prevede l'interazione tra quattro attori principali:

* **Creditore (Payee)**: Il soggetto che deve ricevere il pagamento e che avvia la richiesta.
* **Debitore (Payer)**: Il soggetto che deve effettuare il pagamento e che riceve la richiesta.
* **Service Provider del Creditore**: Il partner tecnologico che aderisce allo schema e invia le richieste SRTP per conto del Creditore.
* **Service Provider del Debitore**: Il partner tecnologico che aderisce allo schema, riceve le richieste SRTP e le presenta al Debitore sui propri canali.

<figure><img src="../../../../ehvH7YE5R9GDHFFfnCv1/.gitbook/assets/https___files.gitbook.com_v0_b_gitbook-x-prod.appspot.com_o_spaces/0IKhR8KIASBbcwgRZ2gC/uploads/x0tA2tUMUQkzb7ElGSaQ/image.avif" alt=""><figcaption></figcaption></figure>

## **Principi di Funzionamento**

Il flusso di base prevede che il Creditore, tramite il proprio Service Provider, invii una richiesta di pagamento al Service Provider del Debitore, che a sua volta la rende disponibile al Debitore. Una volta ricevuto il messaggio, il Debitore può **accettare o rifiutare** la richiesta.

Lo schema EPC definisce diverse modalità con cui un Debitore può gestire una richiesta, basate sulla combinazione di quando accetta e quando intende pagare:

|                  | **PAY NOW** (Paga subito)                                                        | **PAY LATER** (Paga dopo)                                                     |
| ---------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **ACCEPT NOW**   | Accetta e procede subito al pagamento.                                           | Accetta subito ma programma il pagamento a una data successiva.               |
| **ACCEPT LATER** | Programma l'accettazione a una data successiva e, contestualmente, il pagamento. | Programma sia la data di accettazione che quella di esecuzione del pagamento. |

Per maggiori informazioni, si rimanda al seguente [link.](https://www.europeanpaymentscouncil.eu/sites/default/files/kb/file/2023-12/EPC014-20%20v3.2%20SEPA%20RTP%20Scheme%20Rulebook.pdf)

## **Ambiti e Flessibilità**

Lo schema EPC è volutamente flessibile su alcuni aspetti per adattarsi a diversi contesti di mercato. Ad esempio, non impone le modalità tecniche di connessione tra i due Service Provider.

Lo standard copre i seguenti processi:

* Enrollment dei soggetti
* Attivazione del servizio
* Invio della richiesta
* Accettazione o rifiuto
* Cancellazione della richiesta

Tuttavia, lo schema **non norma la fase di pagamento successiva**. Per questo motivo, un Service Provider non è obbligatoriamente un Prestatore di Servizi di Pagamento (PSP), ma può essere un qualsiasi fornitore tecnologico che aderisce alle regole dello schema. Lo standard è inoltre progettato per essere applicabile a un'ampia gamma di modelli di business (B2C, B2B, G2C, ecc.) e per funzionare a livello transfrontaliero nell'area SEPA.

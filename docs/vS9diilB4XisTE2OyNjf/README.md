---
funzione: il-prodotto
obiettivo: comprensione
livello: principiante
tecnologia: []
utente: [partner_tecnologico, pubblica_amministrazione, gestore_servizi_pubblici]
tag: [introduzione, panoramica, srtp, rtp, psp]
status_contenuto: pubblicato
prodotto:
  nome_prodotto: Richiesta di Pagamento (RTP)
  versione_prodotto: v1.0.0
argomenti_correlati:
  - "/il-prodotto/schema-sepa-rtp"
---

# Introduzione al servizio

Il servizio **Richiesta di Pagamento (RTP)** è la soluzione offerta da PagoPA per evolvere le modalità con cui gli Enti Creditori notificano e incassano i pagamenti. Nasce per rispondere alla necessità di cittadini e imprese di ricevere richieste di pagamento (come tributi, bollette di pubblici servizi e altro) in modo digitale, semplice e immediato, direttamente sui canali con cui gestiscono le proprie finanze, come l'home banking.

Per raggiungere questo obiettivo, PagoPA ha lavorato in stretta collaborazione con il tavolo "incassi e pagamenti pubblici" del Comitato Pagamenti Italia (CPI) per implementare lo standard europeo SEPA Request-To-Pay (SRTP). Questo strumento permette di inviare una notifica di pagamento prima della transazione vera e propria, introducendo un nuovo livello di flessibilità e controllo nel processo.

L'adozione di questo standard, integrato nell'ecosistema pagoPA, porta vantaggi concreti per tutti gli attori coinvolti:

* **Per il cittadino:** Riceve le notifiche di pagamento direttamente sull'app della propria banca o sul canale preferito, con tutti i dati precompilati e pronti per il pagamento in pochi passaggi. Mantiene il pieno controllo, in quanto la richiesta è un invito al pagamento e non un addebito automatico.
* **Per gli Enti Creditori:** Utilizzano un canale digitale e strutturato per inviare le richieste, migliorando l'efficienza della riscossione e la trasparenza verso l'utente.
* **Per i PSP:** Rappresenta un'opportunità per offrire ai propri clienti un servizio innovativo e ad alto valore aggiunto. Aumenta il traffico sui canali digitali e rafforza il proprio ruolo nel contesto dei pagamenti pubblici, incrementando la fidelizzazione degli utenti.

{% hint style="info" %}
**Ruolo dell'Avviso di Pagamento**

È importante sottolineare che il servizio RTP agisce come un canale di notifica per un avviso di pagamento pagoPA preesistente.

La corretta generazione della Posizione Debitoria e del relativo Avviso di Pagamento da parte dell'Ente Creditore è una condizione necessaria per poter inviare la richiesta di pagamento tramite SRTP. La gestione delle Posizioni Debitorie è un processo a monte e non rientra nell'ambito di applicazione di questa documentazione.
{% endhint %}

In questo contesto, [Banca d'Italia ha individuato PagoPA ](https://www.bancaditalia.it/compiti/sispaga-mercati/comitato-pagamenti-italia/CPI-Tavolo-incassi-e-pagamenti-pubblici-RTP-PagoPA.pdf)come abilitatore del servizio per tutta la Pubblica Amministrazione.

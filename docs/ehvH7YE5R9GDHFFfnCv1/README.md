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
  about:
    '@type': Service
    name: PagoPA SRTP
    provider:
      '@type': Organization
      name: PagoPA S.p.A.
  author:
    '@type': Organization
    name: PagoPA S.p.A.
  description: Descrive il servizio Request to Pay (RTP) come canale digitale per
    ricevere richieste di pagamento, basato sullo standard europeo SEPA Request-To-Pay
    (SRTP) per la tramitazione sicura delle notifiche.
  keywords:
  - SRTP
  - RTP
  - SEPA
  - Request to Pay
  - PagoPA
  name: Introduzione al servizio SRTP
  proficiencyLevel: Beginner
status: pubblicato
tecnologia:
- SEPA Request-To-Pay
utente:
  ruolo: fruitore
  tag:
  - srtp
  - rtp
  - sepa
  - pagamenti-digitali
  tipo_ente: pubblica_amministrazione
---

# Introduzione al servizio SRTP

Il servizio Request to Pay (RTP) è un canale digitale che permette a cittadini e imprese di ricevere richieste di pagamento, come gli avvisi pagoPA, direttamente sui propri canali telematici abituali (ad esempio, l'home banking). La soluzione si basa sullo standard europeo **SEPA Request-To-Pay (SRTP)**, un'iniziativa dell'European Payments Council (EPC) per la tramitazione sicura e tracciabile delle richieste di pagamento.

L'obiettivo è superare le modalità tradizionali, rispondendo alla necessità di disporre di un'esperienza di pagamento più evoluta e semplice. Invece di dover recuperare e inserire manualmente i dati di un avviso, con RTP l'utente riceve una notifica precompilata da cui può verificare i dettagli e procedere al saldo in pochi passaggi.

{% hint style="info" %}
È importante sottolineare che la richiesta è un **invito al pagamento, non un addebito automatico**: l'utente mantiene sempre il pieno controllo su se, come e quando pagare.
{% endhint %}

L'adozione di questo servizio porta vantaggi concreti a tutti gli attori coinvolti:

* **Per l'utente finale**:
  * **Semplicità**: Riceve una notifica precompilata e paga direttamente dal canale del proprio PSP preferito, senza dover cercare o trascrivere codici.
  * **Controllo e Trasparenza**: Visualizza tutte le informazioni rilevanti (ente, oggetto, importo, scadenza) prima di decidere di pagare e mantiene il pieno controllo sul processo.
* **Per l'ecosistema dei pagamenti pubblici**:
  * **Efficienza**: Migliora la chiarezza, la puntualità e la tracciabilità dei pagamenti, garantendo maggiore efficienza per gli Enti Creditori.
  * **Standardizzazione e Automazione**: Semplifica e digitalizza le operazioni di pagamento e le successive attività di riconciliazione.

Nel contesto italiano, [Banca d'Italia ha individuato in PagoPA](https://www.bancaditalia.it/compiti/sispaga-mercati/comitato-pagamenti-italia/CPI-Tavolo-incassi-e-pagamenti-pubblici-RTP-PagoPA.pdf) l'abilitatore di questo strumento per i pagamenti verso la Pubblica Amministrazione. PagoPA fa leva sulla massa critica già raggiunta dalla propria piattaforma per minimizzare gli impatti tecnici di integrazione per le parti coinvolte e offrire una soluzione integrata e interoperabile.
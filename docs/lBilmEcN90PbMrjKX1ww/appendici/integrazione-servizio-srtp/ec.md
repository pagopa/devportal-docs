---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/appendici/integrazione-servizio-srtp/ec
---

# EC

Questa appendice descrive l’adozione del servizio SRTP (SEPA Request-To-Pay) dell’EPC (European Payments Council), nel contesto delle Specifiche Attuative Nodo dei Pagamenti (SANP). Tale documento, come di volta in volta aggiornato, costituisce parte integrante e sostanziale della documentazione contrattuale che disciplina i rapporti tra PagoPA S.p.A. e gli Enti Creditori.

#### **1. Cos’è l’SRTP e perché adottarlo**&#x20;

L’SRTP è un servizio europeo che consente ad un beneficiario (Ente Creditore) di inviare ad un debitore una richiesta di pagamento. Non è un ordine di pagamento, ma un invito a effettuare un pagamento con tutti i dati già disponibili, [utilizzando lo standard Europeo](https://www.europeanpaymentscouncil.eu/what-we-do/other-schemes/sepa-request-pay)  semplificando il processo di richiesta di incasso, riducendo errori e migliorando l’esperienza utente.

#### **2. Modalità di adesione e ruoli coinvolti**&#x20;

Il servizio SRTP è **facoltativo** per gli Enti Creditori che risultano possedere un codice IPA e che già operano su pagoPA tramite l’area riservata.&#x20;

**PagoPA S.p.A.** agisce come **Service Provider gratuito**, semplificando l’integrazione tecnica ed operativa con il circuito SRTP.&#x20;

L’Ente Creditore è tenuto ad alimentare correttamente GPD (Gestione Posizioni Debitorie) con i dati delle posizioni da incassare (cfr [SANP](https://developer.pagopa.it/pago-pa/guides/sanp/ente-creditore/modalita-dintegrazione/integrazione-tramite-api-asincrone)).&#x20;

Conseguentemente ed esclusivamente sulla base di tutto quanto presente in GPD, PagoPA S.p.A., in aderenza allo Standard EPC e [secondo le linee guida del comitato pagamenti Italia](https://www.bancaditalia.it/compiti/sispaga-mercati/comitato-pagamenti-italia/), si occupa tecnicamente di:

* generare e inoltrare le richieste SRTP al PSP del debitore;&#x20;
* gestire gli stati delle richieste (inviata, accettata/rifiutata, pagata);&#x20;
* coordinarsi con i PSP per le notifiche ai cittadini.

PagoPA S.p.A. agisce esclusivamente in qualità di Service Provider tecnico per l’instradamento automatico delle RTP secondo le regole definite, senza responsabilità sul contenuto delle richieste SRTP, il quale resta in capo esclusivo all’Ente Creditore.&#x20;

#### 3. Flusso pagamento RTP&#x20;

Il flusso di pagamento tramite SRTP segue i seguenti passaggi:

1. l’Ente Creditore carica una [posizione debitoria valida](https://developer.pagopa.it/pago-pa/guides/sanp/appendici/posizioni-debitorie/stati-della-posizione-debitoria) per il pagamento tramite [l’integrazione asincrona](https://developer.pagopa.it/pago-pa/guides/sanp/3.9.1/ente-creditore/modalita-dintegrazione/integrazione-tramite-api-asincrone);
2. PagoPA recupera i dati delle posizioni inserite dall’Ente Creditore e le reinterpreta secondo gli standard sopra menzionati e inoltra la richiesta SRTP al PSP del debitore;&#x20;
3. il PSP notifica la richiesta al cittadino (ad es. tramite app bancaria);&#x20;
4. il **pagatore notificato** **attraverso i touchpoint del PSP** decide se accettare la richiesta o rifiutarla. Il processo di pagamento seguirà le modalità operative e le strutture previste dalle SANP, in conformità con le regole di interazione con il Nodo dei Pagamenti.

Dal punto di vista tecnico, il sistema garantisce sicurezza, scalabilità per grandi volumi, gestione degli errori e piena interoperabilità con gli altri servizi pagoPA.&#x20;

#### 4. Impatti e benefici complessivi&#x20;

L’adozione dello standard porta vantaggi **per tutti gli attori coinvolti**:&#x20;

* **Enti Creditori:** processi automatizzati, minore complessità gestionale, incassi più rapidi e puntuali.&#x20;
* **Cittadini:** pagamenti immediati e possibilità di usare la propria app bancaria.
* **Sistema dei pagamenti:** maggiore allineamento agli standard europei e ulteriore evoluzione della piattaforma pagoPA.

#### 5. Privacy

Con riferimento al trattamento dei dati personali, l’Ente Creditore è titolare del trattamento dei dati personali della posizione debitoria e, salvo diversa indicazione da formalizzarsi per iscritto, ai fini del servizio SRTP (SEPA Request-To-Pay) fa proprio l’“Accordo sul trattamento dei dati personali da parte del responsabile del trattamento ai sensi dell’articolo 28 del Regolamento (UE) 2016/679”, nominando, pertanto, la PagoPA S.p.A. quale Responsabile del Trattamento. L'accordo è disponibile al seguente link:&#x20;

{% file src="../../.gitbook/assets/DPA_RTP_v.1.0.pdf" %}

Nel caso in cui l’Ente Creditore comunichi di non voler far proprio l’Accordo sul Trattamento dei Dati e/o sue successive eventuali modifiche e aggiornamenti, dovrà effettuare opt-out dal servizio fintanto che il trattamento dei dati personali non sia disciplinato da altro accordo ai sensi dell’art. 28 del Regolamento (UE) 2016/679.

---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/rendicontazione-e-cashflow
---

# Rendicontazione e Cashflow

Ogni PSP aderente alla piattaforma, in data **D+2**, rendiconta tramite il **flusso di rendicontazione** il dettaglio dei riversamenti effettuati nella giornata **D+1** verso i conti di accredito dei pagamenti avvenuti nella giornata operativa **D**, come definito nelle Linee Guida della piattaforma pagoPA, in particolare nelle [SACI. ](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/QdpcBdgV6Vin3SHiZyFM/)

PagoPA mette a disposizione degli EC/PSP delle [primitive](../../appendici/primitive/#nuova-gestione-flussi-di-rendicontazione) REST per la gestione di download/upload dei FdR.&#x20;

Gli EC ed i PSP potranno adeguare le chiamate alle primitive messe a disposizione dalla piattaforma pagoPA per poter gestire in maniera efficiente gli FdR.

Per poter usufruire delle API sarà necessario effettuare una sottoscrizione al prodotto che mette a disposizione le primitive di seguito elencate. Per maggiori informazioni su come richiedere una sottoscrizione ad un nuovo prodotto si può far riferimento ai manuali per la creazione di nuove API Key per [EC](https://developer.pagopa.it/it/pago-pa/guides/manuale-bo-ec/v1.0/readme/funzionalita/generazione-api-key) e [PSP](https://developer.pagopa.it/it/pago-pa/guides/manuale-bo-psp/v1.0/readme/funzionalita/generazione-api-key).

Vengono messi a disposizione due nuovi prodotti:

* **"FDR - Flussi di rendicontazione \[ORG]"** - API per gli Enti Creditori
* **"FDR - Flussi di rendicontazione \[PSP]"** - API per i PSP

Si riporta di seguito il diagramma del nuovo processo:

<figure><img src="../../.gitbook/assets/Screenshot 2025-12-15 alle 10.34.37.png" alt=""><figcaption></figcaption></figure>

Il processo prevede l'introduzione di diversi step, descritti nei paragrafi seguenti.

È importante, inoltre, sottolineare che tutti i riferimenti temporali si basano sulla timezone UTC.

In questa fase di transizione tra la vecchia gestione dei flussi di rendicontazione (SOAP) e la nuova (REST) vengono fatte le seguenti assunzioni durante il processo di traduzione:

| Flusso di rendicontazione SOAP                                                                                       | Flusso di rendicontazione REST                                                           |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Le date sono specificate utilizzando la timezone UTC (es. `<dataOraFlusso>2026-04-10T12:59:12.989Z</dataOraFlusso>`) | Le date sono mantenute con la stessa timezone UTC.                                       |
| Le date sono specificate senza timezone (es. `<dataOraFlusso>2026-04-10T12:59:12.989</dataOraFlusso>`)               | Si considera in modo implicito che la timezone di partenza sia CET e si converte in UTC. |
| Le date sono specificate con timezone (es. \<dataOraFlusso>2026-04-10T12:59:12.989+06:00\</dataOraFlusso>)           | Si converte nella timezone UTC.                                                          |

Gli esempi delle chiamate sono consultabili sul [developer portal.](https://developer.pagopa.it/pago-pa/api/flussi-di-rendicontazione)

#### **Azioni disponibili per l'invio e la gestione dei flussi di rendicontazione**

**Lato PSP :**

1. **Avvio del caricamento del flusso:**\
   Il PSP avvia il processo notificando al sistema l’intenzione di inviare un nuovo flusso di rendicontazione, il cui nome deve essere univoco nell’anno di riferimento delle operazioni di pagamento. In questo step, imposta tutte le informazioni caratteristiche del flusso, quali il totale rendicontato dal flusso, il numero di pagamenti inclusi nel flusso, l’ente ricevente e così via. Questa operazione è consentita solo se non esistono altri flussi con lo stesso nome già creati e in attesa di pubblicazione.
2. **Invio dei pacchetti:**\
   Il PSP provvede ad inviare al sistema i riferimenti dei pagamenti da includere nel flusso di rendicontazione. Il flusso può essere popolato suddividendo l’inserimento in più pacchetti di dimensioni entro un tetto massimo di 1000 pagamenti, inviati e gestiti autonomamente. Questa operazione può essere ripetuta fino al completamento del flusso. Nel caso in cui l’inserimento di un determinato pacchetto dovesse andare in errore, tutti i pagamenti inclusi in esso non vengono inseriti nel flusso di rendicontazione ed è pertanto possibile inviarlo nuovamente senza ottenere conflitti. Questa operazione è permessa solo se il flusso non è stato già pubblicato. Per garantire un utilizzo uniforme del traffico, a ciascun PSP viene applicato un limite di 50 richieste al secondo e 600 richieste al minuto.
3. **Eliminazione di un pacchetto:**\
   Il PSP, nel caso in cui un singolo pagamento o un pacchetto precedentemente inviato deve essere rimosso dal flusso di rendicontazione, può decidere di eliminarlo definitivamente. Nel caso in cui la cancellazione di un determinato pacchetto di pagamenti dovesse andare in errore, tutti i pagamenti inclusi in esso non vengono rimossi dal flusso di rendicontazione ed è pertanto possibile eseguire nuovamente l’operazione senza ottenere conflitti. Questa operazione è permessa solo se il flusso non è stato già pubblicato. Per garantire un utilizzo uniforme del traffico, a ciascun PSP viene applicato un limite di 50 richieste al secondo e 600 richieste al minuto.&#x20;
4. **Pubblicazione del flusso:**\
   ll PSP, dopo aver inviato tutti i pacchetti di pagamenti, può pubblicare il flusso di rendicontazione al fine di renderlo disponibile agli Enti Creditori (EC). Questa operazione è permessa solo se il flusso non è stato già pubblicato.
5. **Cancellazione dell'intero flusso:**\
   Il PSP, in alternativa alla pubblicazione, può decidere di eliminare un intero flusso e tutti i pacchetti di pagamenti ad esso associati. Nel caso in cui la cancellazione dovesse andare in errore, tutti i pagamenti inclusi in esso non vengono rimossi dal flusso di rendicontazione ed è pertanto possibile eseguire nuovamente l’operazione senza ottenere conflitti. Questa operazione è permessa solo se il flusso non è stato già pubblicato.

#### **Lato Ente Creditore:**

1. **Richiesta dell'elenco dei flussi disponibili:**\
   L’EC può richiedere l’elenco dei flussi di rendicontazione ad esso associati. E’ possibile recuperare unicamente i flussi di rendicontazione degli ultimi 30 giorni. Il servizio di lista è paginato ed è consentito richiedere al massimo 1000 elementi per pagina.
2. **Download di un flusso specifico:**\
   Dopo aver ottenuto l’elenco, l’EC può richiedere il download di un singolo flusso di rendicontazione. Se il flusso richiesto è molto grande, deve essere scaricato in forma paginata, recuperando i pagamenti suddivisi per blocchi. E’ possibile recuperare unicamente i flussi di rendicontazione degli ultimi 30 giorni.

### Revisioni dei Flussi di Rendicontazione

Un PSP ha la possibilità di sottomettere lo stesso flusso di rendicontazione utilizzando lo stesso identificativo. Questa funzionalità è utile nel caso in cui si voglia inviare una versione revisionata e corretta di un certo flusso di rendicontazione precedentemente pubblicato.&#x20;

Nel caso in cui il flusso di rendicontazione non sia ancora stato pubblicato, è invece necessario prima cancellare il flusso in stato di bozza, quindi ripetere l’intero processo: creazione, aggiunta dei pagamenti e pubblicazione. Questo consente di evitare la proliferazione di versioni errate del flusso di rendicontazione.&#x20;

Tutte le revisioni pubblicate da un PSP sono consultabili dall'EC destinatario, qualora ne avesse la necessità. L’API dedicata alla consultazione dei flussi di rendicontazione consente all’EC di ottenere, per ciascun flusso, le informazioni principali relative all’ultima revisione disponibile. Da lì, è possibile recuperare direttamente l’ultima versione pubblicata oppure ricercare tra le revisioni precedenti, specificando il numero di revisione. Poiché il sistema non registra quali flussi siano già stati scaricati dall’EC, spetta a quest’ultimo gestire autonomamente lo stato di elaborazione, distinguendo tra flussi già acquisiti e flussi ancora da recuperare. È importante considerare che un PSP potrebbe generare nuove revisioni di un determinato flusso, qualora necessario. Per una corretta gestione, l’EC deve quindi verificare e monitorare la revisione ed il contenuto del flusso ricevuto, tenendo conto che eventuali nuove versioni possono avvenire fino alle ore 00:00 della quarta giornata lavorativa (D+4) successiva alla ricezione dell’ordine di pagamento.

Un PSP può quindi inviare più volte un flusso con lo stesso identificativo (campo `fdr` della richiesta di creazione flusso), ma nel rispetto di regole precise. Il sistema accetta una nuova revisione dello stesso flusso di rendicontazione solo se la data ad esso associata (campo `fdrDate` della richiesta di creazione flusso) è successiva a quella dell’ultima versione pubblicata del flusso. La nuova revisione del flusso di rendicontazione è ritenuta valida se pubblicata entro e non oltre le ore 00:00 della quarta giornata lavorativa (D+4) successiva alla ricezione dell’ordine di pagamento.

![](../../.gitbook/assets/fdr_sovrascittura.png)

I PSP, gli EC, i Partner Tecnologici e gli Intermediari possono operare sui flussi di rendicontazione esclusivamente per i soggetti sui quali risultano abilitati o per i quali possiedono una delega valida.

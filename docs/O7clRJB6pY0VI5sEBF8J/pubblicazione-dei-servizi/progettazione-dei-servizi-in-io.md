# Progettazione dei servizi in IO

Al momento App IO può essere utilizzata per l’invio di:\


* **semplici notifiche** (messaggi di testo, possono riguardare un aggiornamento relativo ad esempio ad un nuovo documento disponibile o un’istanza presentata presso l’ente)
* **promemoria** (messaggi che contengono una data di scadenza o da ricordare, come il reminder della scadenza di un documento da rinnovare o la data entro cui iscriversi a un servizio) - per questo tipo di messaggi è necessario utilizzare il campo due\_date nel payload del messaggio.
* **avvisi di pagamento** (messaggi che contengono le informazioni relative a una posizione debitoria, con il promemoria della data di scadenza entro cui effettuare il pagamento e la funziona “paga” per poter procedere al pagamento) per questo tipo di messaggi è necessario inserire i campi relativi al payment\_data (IUV, importo da pagare, data di scadenza).

Per facilitare l’ente nell’elaborare i testi dei propri messaggi e configurare i servizi su app IO è possibile far riferimento a questo [template](https://io.italia.it/assets/download/it/onboarding/210729\_io\_onboarding\_enti-template\_messaggi\_e\_servizi.xlsx), che può essere utilizzato come linea-guida per:\


**tab 1)** definire una lista di servizi che l’ente è interessato a offrire tramite App IO;\
**tab 2)** definire una serie di messaggi che possono essere utilizzati per comunicare all’utenza, a seconda delle necessità di ciascun servizio;

**tab 3)** preparare i dati di descrizione di ciascun servizio, come illustrato in questa guida alla voce Compilazione delle schede.

La lista dei servizi, il contenuto dei messaggi e le informazioni riportate nella scheda servizio sono compilati in autonomia e sotto responsabilità, che si impegna a rispettare gli standard e le istruzioni offerte da PagoPA. Non è necessario trasmettere queste informazioni alla stessa PagoPA, ma è consigliato riferirsi ai canali di contatto dedicati agli enti in caso di dubbio, tenendo presente che il template costituisce una semplice guida da utilizzare come spunto e riferimento per la compilazione di messaggi e schede.

{% hint style="warning" %}
**Importante!**

Ogni servizio generato nel back-office (e relativa chiave API) corrisponde a un servizio su app IO, supportato da relativa scheda servizio (es. **servizi scolastici, servizio tributi, servizio anagrafe**, ecc.). Ogni servizio può inviare più tipologie di messaggi e comunicazioni a seconda delle necessità (es. un servizio anagrafe può inviare dei promemoria per la scadenza del proprio documento d’identità, l’avviso di pagamento per una specifica prestazione, il reminder dell’appuntamento per la richiesta della CIE, ecc,). Ogni servizio corrisponde a un ente specifico che lo eroga (che compare in app IO come mittente del messaggio). Ne consegue che non è necessario creare un nuovo servizio distinto per ciascun messaggio/categoria di comunicazione che si intende inviare.
{% endhint %}

{% hint style="info" %}
**Memo**

In ogni funzione di supporto e comunicazione all’utenza, App IO dà del “tu” e utilizza un linguaggio _gender neutral_, vale a dire che, ove possibile, evita appellativi e aggettivi riferiti all’utenza che sono specifici di un genere (es. “Ti diamo il benvenuto” invece di “Benvenuto”]),. Gli enti che utilizzano IO come canale sono invitati ad adeguare la propria comunicazione dal “lei” al “tu”, e adottare un tono di voce e stile di comunicazione semplice, chiaro, diretto e neutrale, limitando il più possibile l’utilizzo di acronimi, linguaggio tecnico.
{% endhint %}

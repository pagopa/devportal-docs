# Stati della posizione debitoria V1

Secondo il modello dati dell'API V1 di GPD, la **Posizione Debitoria** è rappresentata dall'entità _Payment Position_, che funge da aggregatore principale. Essa contiene una o più **Opzioni di Pagamento** _(Payment Option)_. Queste ultime sono utilizzate per rappresentare le singole istanze di pagamento, incluse le **Rate**.

### Payment Position FSM

Le transizioni contrassegnate dall'etichetta **API** indicano operazioni invocate esplicitamente dal client. Tutte le altre transizioni avvengono automaticamente in base a logiche interne (es. scadenze temporali) o sono scatenate dal ciclo di vita del pagamento.

<figure><img src="../../../pago-pa/sanp/3.11.0/.gitbook/assets/Screenshot 2026-01-14 alle 14.03.35.png" alt=""><figcaption></figcaption></figure>

**Creazione della posizione debitoria**

In fase di creazione della posizione debitoria, lo stato di partenza viene assegnato in base alla configurazione dei parametri `toPublish` e `validityDate`. La data di validità, se non valorizzata, viene impostata di default all'istante di elaborazione della richiesta.

1. Creazione in stato DRAFT: avviene quando la posizione è istanziata con il flag `toPublish` valorizzato a `false`.
2. Creazione in stato PUBLISHED: avviene quando la posizione è istanziata con il flag `toPublish=true` e `validityDate` valorizzata.
3. Creazione in stato VALID: avviene quando la posizione è istanziata con il flag `toPublish=true` e `validityDate=null`.

**Gestione della posizione debitoria**

4. Aggiornamenti (_API Update 4, 5, 6, 7_): È possibile spostare la posizione tra DRAFT, PUBLISHED e VALID modificando i campi `toPublish` e `validityDate`.

Se la richiesta presenta il flag `toPublish=true` senza specificare una data di validità (`validityDate=null`), il sistema porta automaticamente la Posizione Debitoria da uno degli stati DRAFT, PUBLISHED verso lo stato VALID.

Nel caso di aggiornamento su una posizione che si trova già nello stato VALID, se la `validityDate` non è specificata e il `toPublish=true`, il sistema mantiene inalterata la data di validità originaria.

**Pubblicazione della posizione debitoria**

8. L’operazione di pubblicazione via API determina la transizione di stato da DRAFT a PUBLISHED, con contestuale valorizzazione dell'attributo `publishDate` al timestamp corrente.

**Transizione automatica stato VALID**

9. Transizione Automatica: al raggiungimento della `validityDate`, fornita a livello di posizione debitoria, il sistema sposta automaticamente la posizione da PUBLISHED a VALID (_Time Trigger_).

**Pagamento e rendicontazione**

10. Transizione a PARTIALLY\_PAID: Il pagamento parziale di una parte delle opzioni di pagamento determina la transizione della posizione allo stato PARTIALLY\_PAID.
11. Transizione a PAID: Il saldo integrale dell'importo dovuto, derivante dal pagamento di tutte le opzioni di pagamento previste, innesca la transizione allo stato PAID.
12. Transizione a REPORTED: Stato raggiunto al termine della fase di rendicontazione, una volta riconciliati tutti i versamenti (_Transfer_) associati alle opzioni di pagamento.

**Scadenza della posizione debitoria**

Una posizione in stato EXPIRED non è pagabile.

13. Transizione automatica allo stato EXPIRED: Il superamento della data di scadenza (`dueDate`) massima tra tutte le opzioni di pagamento, in presenza del parametro `switchToExpired` attivo, determina la transizione automatica della posizione allo stato EXPIRED.
14. Ripristino dello stato VALID: L'aggiornamento dei dati della posizione mediante l'inserimento di una `dueDate` futura e valida innesca la transizione dallo stato EXPIRED allo stato VALID, rendendo la posizione nuovamente pagabile.

Qualora `switchToExpired` sia disabilitato, la posizione permane nello stato VALID anche se la `dueDate` massima è stata superata.

**Annullamento della posizione debitoria**

15. Transizione allo stato INVALID: L'annullamento della posizione debitoria determina la transizione allo stato INVALID. Tale stato sancisce la chiusura definitiva del ciclo di vita della posizione, rendendola non più pagabile.

#### Regole di Business <a href="#regole-di-business" id="regole-di-business"></a>

**Vincoli sulle date**

1. In fase di creazione, aggiornamento e pubblicazione, la data di scadenza (`dueDate`) deve essere strettamente successiva alla data di inizio validità (`validityDate`).
2. Il campo `retention``Date` non è gestito nella versione corrente (SANP-3.11.0).

**Tipologie di stati**

1. Gli stati _aggiornabili_ sono`DRAFT`, `PUBLISHED`, `VALID`, `EXPIRED`. È consentito aggiornare la Posizione Debitoria quando si trova in uno degli stati menzionati.
2. Gli stati _immutabili_ sono`PARTIALLY_PAID`, `PAID`, `REPORTED`. Non sono consentite modifiche via API alla Posizione Debitoria una volta raggiunti gli stati menzionati.
3. Gli stati _pagabili_ sono `VALID`, `PARTIALLY_PAID`: se la posizione si trova in questi stati sono ammesse operazioni di pagamento su una o più opzioni di pagamento.
   1. Nel caso di `VALID` sono pagabili tutte le opzioni attive, cioè nello stato `UNPAID`.
   2. Nel caso di `PARTIALLY_PAID` sono pagabili esclusivamente le opzioni (i.e. rate) residue relative alla modalità di pagamento già avviata.

**Logica del pagamento**

1. Pagamento Unico (`isPartialPayment = false`): Rappresenta il saldo in un'unica soluzione. Il pagamento dell'opzione unica determina la transizione della Posizione Debitoria allo stato **PAID**.
2. Pagamento Rateale (`isPartialPayment = true`): Rappresenta il pagamento frazionato (i.e. rate). La transizione allo stato **PAID** avviene _solo se e quando_ tutte le opzioni parziali risultano saldate. Fino al completamento totale, la Posizione Debitoria permane nello stato **PARTIALLY PAID**.
3. Mutua esclusione delle Opzioni di Pagamento: Le due modalità di pagamento sono alternative ed esclusive. Qualora venga effettuato un pagamento su un'opzione di tipo _Unica_, le opzioni di tipo _Parziale_ risulteranno non pagabili e viceversa. In particolare, in fase di verifica e attivazione dell’opzione alternativa sarà emesso il Fault Code `PAA_PAGAMENTO_SCONOSCIUTO`.

### Payment Option FSM

<figure><img src="../../../pago-pa/sanp/3.11.0/.gitbook/assets/Screenshot 2025-12-24 alle 11.52.18.png" alt=""><figcaption></figcaption></figure>

**Regole di business**

È lo stato della Posizione Debitoria a consentire l’aggiornamento o meno dell’Opzione di Pagamento: non è possibile aggiornare Opzioni di Pagamento la cui Posizione Debitoria è in uno stato non aggiornabile.

{% hint style="info" %}
L'unico meccanismo consentito per aggiornare puntualmente una singola Opzione di Pagamento è l'invocazione dell'endpoint:\
`POST /organizations/{organizationfiscalcode}/paymentoptions/paids/{nav}`.\
Questa operazione forza la transizione dell'opzione allo stato PAID, indipendentemente dallo stato corrente della Posizione Debitoria.
{% endhint %}

**Significato e gestione delle date in GPD (v1)**

All'interno del servizio GPD, le date sono distribuite su diverse entità (Posizione Debitoria, Opzione di Pagamento, Installment) e si dividono in due categorie logiche.

Le seguenti _**date**_ sono fornite dall’Ente e consentono di determinare il comportamento del ciclo di vita della posizione.

1. `validityDate` (Posizione Debitoria): Determina il vincolo temporale a partire dal quale le Opzioni di Pagamento diventano esigibili e la Posizione assume lo stato VALID.
2. `dueDate` (Opzione di Pagamento): Definisce la data di scadenza dell'opzione. In combinazione con il flag `switchToExpired` attivo, rende l'Opzione non più pagabile al superamento della data indicata.

Al contrario, vi sono _**date**_ generate e aggiornate automaticamente dal sistema, accessibili dall'Ente in modalità lettura.

1. `insertedDate` (Posizione Debitoria e Opzione di Pagamento): Timestamp di creazione tecnica dell'entità nel sistema.
2. `publishDate` (Posizione Debitoria): Data in cui la posizione ha assunto lo stato PUBLISHED.
3. `paymentDate` (Opzione di Pagamento): Data dell'effettivo pagamento, acquisita tramite la _Ricevuta_ generata dal Nodo dei Pagamenti.
4. `reportingDate` (Opzione di Pagamento): Data in cui l’opzione è stata completamente rendicontata (flusso dei _Transfer_ completato).
5. `last_updated_date`: Timestamp dell'ultima modifica effettuata sulla risorsa (sia via API che tramite processi di sistema).
6. `last_updated_date_notification_fee` (Opzione di Pagamento): Data dell'ultimo aggiornamento relativo alle spese di notifica.

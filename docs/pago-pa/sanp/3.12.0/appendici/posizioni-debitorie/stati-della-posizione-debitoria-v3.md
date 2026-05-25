---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/appendici/posizioni-debitorie/stati-della-posizione-debitoria-v3
---

# Stati della posizione debitoria V3

Secondo il modello dati dell'API V3 di GPD, la **Posizione Debitoria** è rappresentata dall'entità _Payment Position_, che funge da aggregatore principale. Essa contiene una o più **Opzioni di Pagamento** (_Payment Option_), le quali a loro volta sono strutturate in una o più **Rate** (_Installment_).

### Payment position FSM<br>

<figure><img src="../../.gitbook/assets/Screenshot 2026-01-19 alle 14.21.17.png" alt=""><figcaption></figcaption></figure>

**Creazione della posizione debitoria**

In fase di creazione della posizione debitoria, lo stato di partenza viene assegnato in base alla configurazione dei parametri `toPublish` e `validityDate`. La data di validità delle opzioni di pagamento aventi `validityDate=null` viene impostata di default all'istante di elaborazione della richiesta.

1. Creazione in stato DRAFT: avviene quando la posizione è istanziata con il flag `toPublish` valorizzato a `false`.
2. Creazione in stato PUBLISHED: avviene quando la posizione è istanziata con il flag `toPublish=true` e tutte le `validityDate` delle opzioni sono valorizzate.
3. Creazione in stato VALID: avviene quando la posizione è istanziata con il flag `toPublish=true` e almeno un'opzione contiene `validityDate=null`.

**Gestione della posizione debitoria**

4. Aggiornamenti (_API Update 4, 5, 6, 7_): È possibile spostare la posizione tra DRAFT, PUBLISHED e VALID modificando i campi `toPublish` e `validityDate`.

Se la richiesta presenta il flag `toPublish=true` senza specificare una data di validità (`validityDate=null`) per almeno un’opzione, il sistema porta automaticamente la posizione da uno degli stati DRAFT, PUBLISHED allo stato VALID.

Nel caso di aggiornamento su una posizione che si trova già nello stato VALID, qualora il flag `toPublish` sia `true`, il sistema mantiene inalterata la data di validità originaria per le opzioni esistenti con `validityDate=null`.

**Pubblicazione della posizione debitoria**

8. L’operazione di pubblicazione via API determina la transizione di stato da DRAFT a PUBLISHED, con contestuale valorizzazione dell'attributo `publishDate` al timestamp corrente.

**Transizione automatica stato VALID**

9. Transizione Automatica: al raggiungimento di una delle `validityDate`, fornite a livello di opzione di pagamento, il sistema sposta automaticamente la posizione da PUBLISHED a VALID (_Time Trigger_). È sufficiente che una delle opzioni sia _valida_.

**Flusso di Pagamento**

10. Transizione a PARTIALLY\_PAID: Il pagamento parziale di una parte degli Installment (i.e. _Rate_) determina la transizione della posizione allo stato PARTIALLY\_PAID.
11. Transizione a PAID: Il saldo integrale dell'importo dovuto, derivante dal pagamento di tutti gli Installment, previsti nell’Opzione di Pagamento scelta, innesca la transizione allo stato PAID.

**Scadenza della posizione debitoria**

Una posizione in stato UNPAYBLE non è pagabile a causa della scadenza.

12. Transizione automatica allo stato UNPAYBLE: Il sistema transita automaticamente la Posizione Debitoria dallo stato VALID a UNPAYABLE, inibendo il pagamento, al verificarsi congiunto di due condizioni su tutte le Opzioni di Pagamento:
    1. Il flag `switchToExpired` (impostato in input sulla Payment Option) risulta abilitato.
    2. È stata superata la data di scadenza (`dueDate`) massima tra tutti gli Installment relativi all’Opzione di Pagamento.
13. Ripristino dello stato VALID: L'aggiornamento dei dati della posizione mediante l'inserimento di una `dueDate` futura e valida innesca la transizione dallo stato EXPIRED allo stato VALID, rendendo la posizione nuovamente pagabile.

Qualora esista una Opzione di Pagamento avente almeno un Installment che non ha raggiunto la `dueDate` oppure avente il flag `switchToExpired` disabilitato, la Posizione Debitoria permane nello stato VALID.

#### Regole di Business <a href="#regole-di-business" id="regole-di-business"></a>

**Vincoli sulle date**

1. In fase di creazione, aggiornamento e pubblicazione la data di scadenza (`dueDate`) di ogni Installment deve essere strettamente successiva alla data di inizio validità (`validityDate`) dell’Opzione di Pagamento corrispondente.
2. Il campo `retentionDate` non è gestito nella versione corrente (SANP-3.11.0).

**Tipologie di stati**

1. Gli stati _aggiornabili_ sono`DRAFT`, `PUBLISHED`, `VALID`, `UNPAYABLE`. È consentito aggiornare la Posizione Debitoria quando si trova in uno degli stati menzionati.
2. Gli stati _immutabili_ sono`PARTIALLY_PAID`, `PAID`. Non sono consentite modifiche via API alla Posizione Debitoria una volta raggiunti gli stati menzionati.
3. Gli stati _pagabili_ sono `VALID`, `PARTIALLY_PAID`: se la posizione si trova in questi stati sono ammesse operazioni di pagamento su una o più Installment (i.e. _Rate_).
   1. Nel caso di `VALID` sono pagabili tutti gli Installment attivi, cioè nello stato `UNPAID`.
   2. Nel caso di `PARTIALLY_PAID` sono pagabili esclusivamente gli Installment (i.e. Rate) residui relativi alla modalità di pagamento già avviata.

**Logica del pagamento**

1. Pagamento Unico: Una Opzione di Pagamento con un’unica Rata.\
   Rappresenta il saldo in un'unica soluzione. Il pagamento dell'opzione con rata unica determina la transizione della Posizione Debitoria allo stato `PAID`.
2. Pagamento Rateale: Una Opzione di Pagamento con più Rate.\
   Rappresenta il pagamento frazionato (i.e. rate). La transizione allo stato `PAID` avviene _solo se e quando_ tutte le rate dell’opzione parziale (i.e. rateale) risultano saldate. Fino al completamento totale, la Posizione Debitoria permane nello stato `PARTIALLY PAID`.
3. Pagamento Multi-Rateale: Più Opzioni di Pagamento ognuna delle quali con più Rate.\
   Configurazione che prevede più Opzioni di Pagamento alternative, ciascuna articolata in più rate.\
   La transizione allo stato `PAID` avviene _solo se e quando_ risultano saldate tutte le rate appartenenti all'opzione prescelta dall’utente. Il pagamento incompleto delle rate mantiene la Posizione Debitoria nello stato `PARTIALLY PAID`.
4. Mutua esclusione delle Opzioni di Pagamento: Le due modalità di pagamento sono alternative ed esclusive.\
   È sempre possibile combinare _Opzioni_ _Uniche_ (con Rata singola) e _Opzioni Rateali (con più Rate, i.e. Installment)_ all’interno della stessa posizione debitoria. Qualora venga effettuato un pagamento su una Rata Unica, le Rate (i.e. Installment) contenute nelle Opzioni Rateali risulteranno non pagabili e viceversa.\
   In particolare, in fase di verifica e/o attivazione dell’opzione alternativa sarà emesso il Fault Code `PAA_PAGAMENTO_SCONOSCIUTO`.

#### Installment FSM

Malgrado gli stati `EXPIRED` e `UNPAYABLE` siano presenti nell’OpenAPI non esiste una transizione di stato nella versione dell’applicativo corrispondente alle **SANP-3.11.0**. Si riporta ugualmente il significato di questi stati.<br>

<figure><img src="../../.gitbook/assets/Screenshot 2025-12-24 alle 14.42.46 (1).png" alt=""><figcaption></figcaption></figure>

#### Regole di Business <a href="#regole-di-business.1" id="regole-di-business.1"></a>

L’aggiornabilità dell’Installment è dipendente dallo stato della Payment Position. È lo stato della Posizione Debitoria a consentire l’aggiornamento o meno dell’Installment (i.e. Rata): non è possibile aggiornare l’Installment la cui Posizione Debitoria è in uno stato non aggiornabile.

**Significato e gestione delle date in GPD (v3)**

All'interno del servizio GPD, le date sono distribuite su diverse entità (Posizione Debitoria, Opzione di Pagamento, Installment) e si dividono in due categorie logiche.

Le seguenti _**date**_ sono fornite dall’Ente e consentono di determinare il comportamento del ciclo di vita della posizione.

1. `validityDate` (Opzione di Pagamento): Definisce il momento a partire dal quale le Rate dell'opzione diventano pagabili, innescando la transizione della Posizione Debitoria allo stato VALID.
2. `dueDate` (Installment): Agisce in combinazione con il flag `switchToExpired`. Se il flag è attivo, la Rata non è più pagabile a decorrere da questa data.

Al contrario, vi sono _**date**_ generate e aggiornate automaticamente dal sistema, accessibili dall'Ente in modalità lettura.

1. `insertedDate` (Posizione Debitoria e Opzione di Pagamento): Timestamp di creazione tecnica dell'entità nel sistema.
2. `publishDate` (Posizione Debitoria): Data in cui la posizione ha assunto lo stato PUBLISHED.
3. `paymentDate` (Installment): Data dell'effettivo pagamento, acquisita tramite la _Ricevuta_ generata dal Nodo dei Pagamenti.
4. `reportingDate` (Installment): Data in cui la Rata è stata completamente rendicontata (flusso dei _Transfer_ completato).
5. `last_updated_date`: Timestamp dell'ultima modifica effettuata sulla risorsa (sia via API che tramite processi di sistema).
6. `last_updated_date_notification_fee` (Installment): Data dell'ultimo aggiornamento relativo alle spese di notifica.

Se una Posizione Debitoria è in stato VALID, ma il cittadino tenta di pagare una Rata la cui `validityDate` non è ancora stata raggiunta il sistema inibirà il pagamento restituendo l'errore `PAA_PAGAMENTO_SCONOSCIUTO`. Sebbene la Posizione Debitoria risulti formalmente nello stato VALID (poiché almeno un'altra Opzione di Pagamento ha raggiunto la propria validità), restano pagabili esclusivamente le Rate contenute nelle Opzioni che hanno effettivamente superato il vincolo temporale imposto dalla rispettiva `validityDate`.

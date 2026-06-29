# Attributi certificati discreti

### Che cosa sono

Gli attributi certificati discreti sono un nuovo tipo di attributo certificato, distinto dagli attributi certificati tradizionali e ad essi affiancato. A differenza degli attributi certificati standard — che hanno natura binaria (l'ente li possiede oppure no) — gli attributi certificati discreti sono caratterizzati da un **valore numerico** proveniente da fonti certificate esterne.

Il valore numerico associato a un attributo discreto può variare nel tempo, al variare del dato pubblicato dalla fonte certificatrice. Ad esempio, la popolazione residente di un comune cambia con ogni aggiornamento dei dati ISTAT.

La prima fonte disponibile è rappresentata dagli **open data ISTAT sulla popolazione residente dei comuni italiani**.

***

### Come viene assegnato a un ente

L'assegnazione degli attributi certificati discreti è **automatica**: un processo dedicato legge periodicamente i dati pubblicati dalla fonte certificatrice esterna e aggiorna i valori numerici associati a ciascun ente aderente a PDND Interoperabilità.

L'ente non deve compiere alcuna azione per ricevere o mantenere l'attributo: il sistema provvede autonomamente, sulla base delle informazioni fornite dalla fonte autoritativa.

Se il valore numerico dell'attributo viene aggiornato dalla fonte, la modifica viene recepita automaticamente dalla piattaforma. Qualora il nuovo valore risultasse incompatibile con le condizioni richieste da un erogatore in un e-service già attivo, gli agreement interessati verranno invalidati e sarà inviata una notifica all'erogatore.

#### Notifiche all'ente

L'ente riceve una notifica (in-app ed e-mail) nei seguenti casi:

* **Assegnazione** di un attributo certificato discreto;
* **Aggiornamento** del valore numerico dell'attributo;
* **Revoca** dell'attributo.

***

### Come si utilizza in un e-service

Durante la creazione o la modifica di un e-service, l'erogatore può aggiungere uno o più attributi certificati discreti come **requisiti di accesso alla fruizione**, affiancandoli agli attributi certificati tradizionali già disponibili.

Per ciascun attributo certificato discreto inserito, l'erogatore deve specificare:

* l'**attributo** da richiedere (es. _Popolazione residente — Comuni italiani_);
* un **operatore di confronto**: maggiore di (`>`), minore di (`<`), uguale a (`=`), maggiore o uguale a (`≥`), minore o uguale a (`≤`), diverso da (`≠`);
* una **soglia numerica** di riferimento.

Solo i fruitori il cui valore numerico per quell'attributo soddisfa la condizione specificata potranno presentare richiesta di fruizione dell'e-service.

**Esempio**: un erogatore configura il requisito _Popolazione residente — Comuni italiani_ `>` `10000`. Potranno richiedere la fruizione soltanto i comuni con più di 10.000 abitanti, secondo i dati ISTAT.

#### Composizione AND/OR

Gli attributi certificati discreti seguono le stesse logiche di raggruppamento già in uso per gli attributi certificati tradizionali:

* **AND** (gruppi distinti): il fruitore deve soddisfare la condizione per ciascun gruppo configurato.
* **OR** (attributi nello stesso gruppo): è sufficiente che il fruitore soddisfi la condizione di almeno uno degli attributi presenti nel gruppo.
* **Misto**: uno stesso gruppo può contenere sia attributi certificati tradizionali (verificati con logica binaria) che attributi certificati discreti (verificati con la condizione numerica). Il gruppo è soddisfatto se il fruitore possiede almeno un attributo nel gruppo che ne rispetti i requisiti.

#### Invalidazione della fruizione

Qualora, successivamente all'attivazione di un agreement, il valore numerico dell'attributo di un fruitore venga aggiornato e il nuovo valore non soddisfi più la condizione impostata dall'erogatore, l'agreement sarà automaticamente invalidato in modo asincrono. Il comportamento è coerente con quello già previsto per gli attributi certificati tradizionali in caso di revoca.

L'erogatore riceve una notifica che indica l'aggiornamento del valore numerico come causa dell'invalidazione.

***

### Come si utilizza in un e-service template

Gli attributi certificati discreti possono essere inseriti come requisiti di accesso anche all'interno di un **e-service template**, con le stesse modalità descritte per gli e-service. Al momento della creazione di un e-service a partire da un template, i requisiti discreti configurati nel template vengono ereditati dall'e-service.

***

### Fonte dei dati: ISTAT — Popolazione residente dei comuni italiani

Il primo attributo certificato discreto disponibile su PDND Interoperabilità è **Popolazione residente**, relativo ai comuni italiani. Il valore numerico è ricavato dagli open data ISTAT sulla popolazione residente e rappresenta la popolazione totale del comune alla data dell'ultimo aggiornamento disponibile.

L'associazione tra il comune aderente e il relativo dato ISTAT avviene tramite il codice ISTAT dell'ente, presente nell'anagrafe IPA. L'aggiornamento del valore segue la cadenza con cui ISTAT pubblica i propri open data.

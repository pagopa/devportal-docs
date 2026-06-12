# Relazione tra template e istanza

### Chi può creare i template? <a href="#chi-puo-creare-i-template" id="chi-puo-creare-i-template"></a>

Tutti gli aderenti autorizzati ad erogare in un certo ambiente potranno creare ed evolvere template e-service. Per creare un nuovo template, andare su _**Erogazione > I miei template e-service**_ e clicca _**Crea nuovo**_.

La creazione di un template è molto simile alla creazione di un e-service; di fatto un template contiene gli stessi campi di un e-service. L'unica variazione è che c'è un campo in più che contiene la **descrizione del template con eventuali note informative**, a beneficio dei potenziali enti interessati a derivare la propria istanza.

### Chi può istanziare gli e-service a partire dai template? <a href="#chi-puo-istanziare-gli-e-service-a-partire-dai-template" id="chi-puo-istanziare-gli-e-service-a-partire-dai-template"></a>

Anche in questo caso, tutti gli aderenti autorizzati ad erogare in un certo ambiente potranno creare istanze a partire da template. Per farlo, potranno andare sul catalogo disponibile in _**Erogazione >  Template e-service**_, selezionare il template di interesse, e cliccare su _**Usa template**_ per generare la propria istanza.

### Gestione dei requisiti di accesso (attributi) <a href="#gestione-dei-requisiti-di-accesso-attributi" id="gestione-dei-requisiti-di-accesso-attributi"></a>

Come descritto nella [sezione dedicata](ciclo-di-vita.md), **la definizione degli attributi è a discrezione del creatore del template**. L'ente che deriva la propria istanza dal template **non può modificarli** autonomamente. Se ritiene ci siano incongruenze, deve contattare il creatore del template che eventualmente provvederà alla rettifica.

Come per qualsiasi altro e-service, gli attributi dell'istanza sono quelli che verranno richiesti ai potenziali fruitori per poter presentare una richiesta di fruizione.

### Relazione tra gli stati <a href="#relazione-tra-gli-stati" id="relazione-tra-gli-stati"></a>

**Gli stati** di un template e degli e-service istanziati da esso **sono completamente indipendenti gli uni dagli altri**. Nel momento in cui un erogatore istanzia il proprio e-service a partire da un template, questo non subisce gli aggiornamenti di stato del template.

Ad esempio, se un template viene sospeso e l'e-service da esso istanziato è attivo, questo rimane attivo. Allo stesso modo, è possibile per l'erogatore archiviare la propria istanza di e-service senza che questo abbia alcun impatto sul template.

### Recepimento degli aggiornamenti a un template <a href="#recepimento-degli-aggiornamenti-a-un-template" id="recepimento-degli-aggiornamenti-a-un-template"></a>

Un template e-service può essere aggiornato nel tempo. Questi aggiornamenti si dividono in minori e critici.

**Gli aggiornamenti minori si propagano immediatamente** a tutte le istanze. Per fare un esempio: viene individuato e corretto un errore all'interno della descrizione del template. Il risultato sarà che quella stessa correzione sarà riportata automaticamente su tutte le istanze di e-service generate dal template.

**Gli aggiornamenti critici** sono quelli per i quali il creatore del template ha creato una nuova versione del template (es. modifiche strutturali all'interfaccia API). In questo caso, non è possibile aggiornare automaticamente l'e-service. Ogni ente che ha istanziato un e-service a partire da quel template dovrà **aggiornarlo manualmente** dopo aver effettuato tutti gli adeguamenti del caso.

Proprio per la sua criticità, questo aggiornamento si traduce in una nuova versione dell'istanza di e-service. **In cascata, tutti i fruitori dovranno quindi aggiornare la propria richiesta di fruizione** all'ultima versione dell'e-service dopo aver fatto le opportune verifiche e adeguamenti tecnici, come per qualsiasi altro e-service.

### Aggiornamento di un'istanza <a href="#aggiornamento-di-unistanza" id="aggiornamento-di-unistanza"></a>

È infine possibile il caso in cui un ente che ha pubblicato un istanza di e-service si trovi a doverla aggiornare a sua volta per una modifica critica. Ad esempio, potrebbe dover aggiornare l'URL dei propri server, o l'audience. Anche in questo caso, andrà prodotta una nuova versione dell'istanza di e-service, come per un qualsiasi altro e-service.

In questo particolare caso, la versione dell'istanza di e-service non sarà allineata con la versione del template (ad esempio, è possibile che il template e-service sia alla versione 2, mentre l'istanza alla versione 3).

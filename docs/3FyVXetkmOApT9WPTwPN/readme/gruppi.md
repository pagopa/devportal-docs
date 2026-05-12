# Gruppi

SEND permette di gestire diversi uffici o strutture all'interno dello stesso ente grazie alla segregazione per gruppi. Questa funzionalità garantisce che notifiche ed eventi siano visibili e gestiti esclusivamente dagli utenti autorizzati e associati a ciascun gruppo.

A ogni gruppo vengono assegnati un nome e un identificativo univoco (`GroupId`).

Il `GroupId` può essere utilizzato in fase di creazione di **notifiche**, **API key** e **stream**, per associarli correttamente al gruppo desiderato.

**Esempio:** un comune può creare due gruppi distinti per _Ufficio della Polizia Locale_ e _Ufficio Tributi_. In questo modo notifiche, stream e API key vengono configurati separatamente per ogni ufficio, mantenendo una gestione indipendente.

> **Nota:** una volta creata, una notifica non può essere trasferita a un gruppo diverso da quello indicato al momento della creazione. È quindi importante selezionare il gruppo corretto prima di procedere.

### Creare un gruppo

I gruppi possono essere creati dagli utenti con profilo amministratore all'interno dell'area riservata del portale mittenti, selezionando la voce di menu "Gruppi".

<figure><img src="../.gitbook/assets/image (11).png" alt=""><figcaption></figcaption></figure>

Nella pagina è possibile visualizzare i gruppi esistenti e crearne uno nuovo selezionando "Crea gruppo".

<figure><img src="../.gitbook/assets/image (13).png" alt=""><figcaption></figcaption></figure>

È necessario inserire il nome del gruppo, con una eventuale descrizione più estesa per identificarne l'utilizzo, e aggiungere gli utenti selezionando solo quelli appartenenti alla struttura corretta. Gli utenti appartenenti al gruppo potranno gestire e visualizzare esclusivamente le notifiche associate ai gruppi di cui fanno parte.

<figure><img src="../.gitbook/assets/image (17).png" alt=""><figcaption></figcaption></figure>

### Associare un gruppo a un'API key

Un'API key non associata ad alcun gruppo può operare su tutte le notifiche. Un'API key associata a uno o più gruppi può invece operare solo sulle notifiche associate ai gruppi di cui fa parte.

Per associare una API key a uno o più gruppi, è necessario selezionare il gruppo di riferimento durante la creazione della chiave, nella sezione dedicata.

NOTA: non è possibile modificare i gruppi associati ad una API key se non creandone una nuova.

<figure><img src="../.gitbook/assets/image (18).png" alt=""><figcaption></figcaption></figure>

Nella gestione delle API key, il nome del gruppo è affiancato da una funzione di copia rapida che consente di acquisire immediatamente l'ID del gruppo da utilizzare nella configurazione del client SEND utilizzato per il deposito delle notifiche e per la creazione degli stream.

<figure><img src="../.gitbook/assets/image (19).png" alt=""><figcaption></figcaption></figure>

### Segregazione degli stream per gruppi

Gli stream dalla versione 2.4 possono essere associati a uno o più gruppi, in modo da realizzare una segregazione tra gli eventi delle notifiche che appartengono solo ai gruppi associati allo stream. I gruppi specificati in fase di creazione o aggiornamento devono essere coerenti con quelli dell'API key. (ad esempio: per creare uno stream associato al gruppo A deve essere utilizzata una API key associata al gruppo A o una API Key non associata ad alcun gruppo).

Se uno stream non è associato a nessun gruppo riceverà gli eventi e i cambiamenti di stato di tutte le notifiche indipendentemente che queste siano associate ad un gruppo o meno.

Se uno stream è associato ad uno o più gruppi riceverà gli eventi e i cambiamenti di stato di tutte le sole notifiche che sono associate agli stessi gruppi.

La lettura di uno stream collegato a uno o più gruppi è possibile solo alle API key associate a tutti i gruppi a cui è associato lo stream o ad una API Key non associata ad alcun gruppo.\
(ad esempio: per leggere uno stream associato al gruppo A e al gruppo B deve essere utilizzata una API key associata al gruppo A e al gruppo B ed eventuali altri gruppi o una API Key non associata ad alcun gruppo).

#### Gestione degli stream con più Partner Tecnologici

In contesti architetturali in cui un Ente Mittente si avvale di molteplici Partner Tecnologici (PT), il sistema assicura la segregazione dei dati (Data Isolation) attraverso la funzionalità di Gestione per Gruppi. Questo meccanismo è progettato per garantire che ciascun PT intercetti esclusivamente gli eventi e gli aggiornamenti di stato pertinenti alle notifiche del proprio ambito di competenza.

L'implementazione si basa sull'istanza di stream di eventi dedicati e filtrati. Mappando logicamente le notifiche e le utenze su specifici gruppi—tipicamente rappresentativi dei vari uffici o dipartimenti dell'Ente—ogni Partner Tecnologico può configurare la propria ricezione vincolandola unicamente ai gruppi per i quali è autorizzato ad agire come intermediario.

**Esempio Applicativo** \
Nel caso di un Comune servito da due PT distinti, uno per il software in uso alla Polizia Locale (violazioni del Codice della Strada) e uno per il software dell'Ufficio Tributi, l'isolamento dei flussi viene gestito nel modo seguente:

* L'Ente Mittente definisce a sistema i gruppi logici `Polizia Locale` e `Tributi`.
* Il PT associato alla Polizia Locale configura il proprio stream per ricevere unicamente il payload degli eventi indirizzati al gruppo `Polizia Locale`.
* Il PT associato all'Ufficio Tributi effettua un'analoga configurazione, limitando la ricezione al gruppo `Tributi`.

Questa architettura garantisce un rigoroso partizionamento, assicurando che ogni Partner Tecnologico acceda esclusivamente al flusso di notifiche strettamente limitato al proprio perimetro operativo.

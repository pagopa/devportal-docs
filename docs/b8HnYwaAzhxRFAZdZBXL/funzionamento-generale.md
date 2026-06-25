# Funzionamento generale

## Le due modalità del back office

Il back office è organizzato attorno a due modalità: erogazione e fruizione. Se la tua utenza ha privilegi di amministrazione, le vedrai entrambe nel menù di sinistra. Ogni aderente della Pubblica Amministrazione può essere contemporaneamente erogatore di alcuni e-service e fruitore di altri. PDND Interoperabilità fornisce un'interfaccia per gestire tutte le operazioni di creazione, modifica, aggiornamento e archiviazione del ciclo di vita degli e-service sia per gli erogatori che per i fruitori. Allo stesso tempo, espone una API REST per eventuali necessità di automatizzazione dei flussi.

## Flusso minimo erogatore/fruitore

Quello spiegato di seguito è un flusso semplificato per dare grosso modo un'idea di come funziona la piattaforma. Vengono omessi alcuni passaggi importanti per brevità, che verranno descritti in dettaglio nelle sezioni dedicate.

<figure><img src=".gitbook/assets/interop-funzionamento-generale-02.png" alt="Un flusso minimo di funzionamento: dall&#x27;erogatore che pubblica un e-service sul catalogo ad un fruitore che accede alle informazioni attraverso la fruizione del servizio stesso"><figcaption><p>Un flusso minimo di funzionamento: dall'erogatore che pubblica un e-service sul catalogo ad un fruitore che accede alle informazioni attraverso la fruizione del servizio stesso</p></figcaption></figure>

### Flusso dell'erogatore

L'aderente che intende erogare un e-service potrà crearlo e gestirlo dalla voce di menù _Erogazione > I tuoi e-service_. Una volta pubblicato un [e-service](manuale-operativo/e-service.md#creare-un-nuovo-e-service), sarà reso disponibile sul _Catalogo e-service_, visualizzabile in modalità fruizione (_Fruizione > Catalogo e-service_). Gli aderenti interessati a fruire dell'e-service e in possesso dei requisiti minimi richiesti dall'erogatore (attributi), potranno iscriversi presentando una richiesta di fruizione. Ogni erogatore troverà le richieste di fruizione presentate dai Fruitori in _Erogazione > Richieste di fruizione_, dove potrà gestirle. Il fruitore potrà presentare delle finalità e iniziare a utilizzare l'e-service solo dopo che la richiesta è approvata.

{% hint style="info" %}
Per approfondire il funzionamento del flusso dell'erogatore si rimanda ai paragrafi successivi e alle voci [Client e materiale crittografico](manuale-operativo/client-e-materiale-crittografico.md) e [Utilizzare i voucher](manuale-operativo/utilizzare-i-voucher.md) di questa guida.
{% endhint %}

### Flusso del fruitore

L'aderente che intende fruire di un e-service potrà visualizzare tutti quelli disponibili andando su _Fruizione > Catalogo e-service_. Se possiede i requisiti minimi, visualizzerà un pulsante _Iscriviti_, attraverso il quale potrà "iscriversi all'e-service" presentando una richiesta di fruizione che l'erogatore valuterà. Una volta che la richiesta di fruizione viene approvata ed è attiva, il fruitore potrà creare delle finalità. In ogni finalità, dovrà indicare il dettaglio sull'accesso e l'utilizzo dei dati (chiamata _analisi del rischio_) e la _stima di carico_, la quantità di richieste che insisteranno sull'erogatore (definito in numero di chiamate API al giorno stimate). Se la stima di carico eccede la capacità dell'infrastruttura dell'erogatore, sarà necessaria la sua approvazione prima che il fruitore possa utilizzare quella finalità per accedere al e-service.

### Accesso al dato

Con una finalità attiva, il fruitore può implementare il flusso per ottenere un voucher spendibile presso l'API dell'erogatore. Per i dettagli implementativi, si rimanda alla [sezione dedicata](manuale-operativo/utilizzare-i-voucher.md) della guida.

## Operatività e sospensioni dei servizi

Per garantire agli aderenti di poter intervenire tempestivamente in caso di malfunzionamenti o eventuali usi malevoli, PDND Interoperabilità mette a disposizione la possibilità di sospendere il servizio in diversi punti del flusso. A scopo esemplificativo, osserva il seguente diagramma:

<figure><img src=".gitbook/assets/interop_funzionamento_generale_02.png" alt="Un diagramma che dettaglia le aree di sovrapposizione sulle operazioni. Gli e-service sono esclusiva competenza dell&#x27;erogatore, client e chiavi pubbliche del fruitore. Richieste di fruizione e finalità sono invece parti sulle quali entrambi gli attori possono agire"><figcaption><p>Un diagramma che dettaglia le aree di sovrapposizione sulle operazioni. Gli e-service sono esclusiva competenza dell'erogatore, client e chiavi pubbliche del fruitore. Richieste di fruizione e finalità sono invece parti sulle quali entrambi gli attori possono agire</p></figcaption></figure>

Esistono tre punti nei quali è possibile limitare l'operatività del flusso:&#x20;

1. in caso di emergenza, l'erogatore può unilateralmente sospendere una versione di e-service, di fatto impedendo l'accesso a tutte le richieste di fruizione ed alle finalità ad esse associate. È sua facoltà anche effettuare una sospensione per manutenzione dandone congruo preavviso ai fruitori;
2. sia l'erogatore che il fruitore possono sospendere unilateralmente una richiesta di fruizione, di fatto impedendo l'accesso a tutte le finalità ad essa associate. Una richiesta di fruizione può anche essere sospesa unilateramente da PDND Interoperabilità in alcuni casi eccezionali, come ad esempio la perdita di un attributo certificato da parte di un fruitore;
3. entrambe le parti possono sospendere unilateralmente una finalità, come descritto nell'immagine sopra.&#x20;

Ogni atto di sospensione prevede che non si possano più staccare voucher per quel particolare e-service, richiesta di fruizione o finalità neanche se tutte le restanti componenti del flusso sono attive e integrate correttamente.

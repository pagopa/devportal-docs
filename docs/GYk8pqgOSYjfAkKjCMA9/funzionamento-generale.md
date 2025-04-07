# Funzionamento generale

## Le due modalità del back office

Il back office è organizzato attorno a due modalità: erogazione e fruizione. Ogni aderente della Pubblica Amministrazione può essere contemporaneamente erogatore di alcuni e-service e fruitore di altri. PDND Interoperabilità fornisce un'interfaccia per gestire tutte le operazioni di creazione, modifica, aggiornamento e archiviazione del ciclo di vita degli e-service sia per gli erogatori che per i fruitori. Allo stesso tempo, espone un'API per eventuali necessità di automatizzazione dei flussi.

## Flusso minimo erogatore/fruitore

Di seguito è presentato un **flusso semplificato** per offrire una panoramica generale sul funzionamento della piattaforma. Alcuni passaggi fondamentali sono stati omessi per brevità, ma verranno approfonditi nelle sezioni specifiche.

<figure><img src=".gitbook/assets/interop-funzionamento-generale-02.png" alt="Un flusso minimo di funzionamento: dall&#x27;erogatore che pubblica un e-service sul catalogo ad un fruitore che accede alle informazioni attraverso la fruizione del servizio stesso"><figcaption><p>Un flusso minimo di funzionamento: dall'erogatore che pubblica un e-service sul catalogo ad un fruitore che accede alle informazioni attraverso la fruizione del servizio stesso</p></figcaption></figure>

## **Flusso dell'erogatore**

Un aderente che desidera **erogare un e-service** può crearlo e gestirlo attraverso la piattaforma. Una volta **pubblicato**, il servizio verrà reso disponibile nel **Catalogo degli e-service**, dove potrà essere visualizzato in modalità fruizione.

Gli aderenti interessati ad accedere all’e-service, se in possesso dei **requisiti minimi richiesti** dall’erogatore (attributi), potranno **inoltrare una richiesta di fruizione**. L’erogatore avrà la possibilità di **valutare e gestire** tali richieste.

Solo dopo l’approvazione della richiesta di fruizione, il fruitore potrà **presentare le proprie finalità** e iniziare a utilizzare l’e-service.

{% hint style="info" %}
Per approfondire il funzionamento del flusso dell'erogatore si rimanda ai paragrafi successivi e alle voci [Client e materiale crittografico](guida-tecnica/client-e-materiale-crittografico.md) e [Utilizzare i voucher](guida-tecnica/utilizzare-i-voucher/) di questa guida.
{% endhint %}

## **Flusso del fruitore**

Un aderente che desidera **fruire di un e-service** può consultare il **Catalogo degli e-service** per visualizzare quelli disponibili. Se possiede i **requisiti minimi richiesti**, potrà **richiedere l’iscrizione** presentando una **richiesta di fruizione**, che verrà valutata dall’erogatore.

Una volta che la richiesta è **approvata e attiva**, il fruitore potrà **creare delle finalità**, specificando:

* **Dettagli sull’accesso e l’utilizzo dei dati** (analisi del rischio).
* **Stima di carico**, ovvero il numero stimato di chiamate API giornaliere verso l’erogatore.

Se la stima di carico supera la capacità dell’infrastruttura dell’erogatore, sarà necessaria **un’ulteriore approvazione** prima che il fruitore possa utilizzare la finalità per accedere all’e-service.

Una volta che la finalità è attiva, il fruitore potrà **ottenere un voucher** da utilizzare per accedere all’API dell’erogatore. Per maggiori dettagli sull’implementazione tecnica, si rimanda alla **sezione dedicata della guida**.

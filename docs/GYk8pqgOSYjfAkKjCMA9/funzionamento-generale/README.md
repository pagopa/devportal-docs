# Funzionamento generale

Interoperabilità è un "ecosistema" composto da diverse parti. PDND Interoperabilità, un artefatto all'interno di Interoperabilità.

Per condividere i propri dati su PDND Interoperabilità l'ente deve seguire una serie di passaggi:

1. [effettuare l'adesione](https://docs.pagopa.it/interoperabilita-1/manuale-operativo/guida-alladesione) a PDND Interoperabilità;
2. accedere alla piattaforma per verificare le API già presenti sul catalogo;
3. scrivere un'API che rispetti il perimetro di sicurezza e gli standard del modello di interoperabilità (ModI), definito da AgID, che descrive il perimetro dell’interoperabilità tra pubbliche amministrazioni. Un'infarinatura teorica e pratica riguardante il ModI si può trovare [qui](https://developers.italia.it/it/news/interoperabilita.html);
4. aggiungere [un controllo](https://docs.pagopa.it/interoperabilita-1/manuale-operativo/utilizzare-i-voucher#verifica-di-un-voucher-da-parte-di-un-erogatore-di-e-service) all'API per verificare la legittimità e validità dei voucher (token JWT) di chi sta richiedendo i dati;
5. [pubblicare sul catalogo](https://docs.pagopa.it/interoperabilita-1/manuale-operativo/e-service) di PDND Interoperabilità l'API sotto forma di e-service, corredandola di tutte le informazioni di contorno e contesto necessarie ai casi d'uso.

## Le modalità di utilizzo della piattaforma

<mark style="background-color:blue;">Il back office ha due funzionalità: erogazione e fruizione.</mark>

Ogni aderente a PDND Interoperabilità della Pubblica Amministrazione può essere erogatore di e-service, fruitore o ricoprire contemporaneamente entrambe le funzioni.&#x20;

PDND Interoperabilità fornisce un'interfaccia per gestire tutte le operazioni di creazione, modifica, aggiornamento e archiviazione del ciclo di vita degli e-service sia per gli erogatori che per i fruitori. Inoltre, fornisce un'API per eventuali necessità di automatizzazione dei flussi.

## Flusso minimo erogatore/fruitore

Di seguito è presentato un **flusso semplificato** per offrire una panoramica generale sul funzionamento della piattaforma. Alcuni passaggi verranno approfonditi nelle sezioni specifiche.

<figure><img src="../.gitbook/assets/interop-funzionamento-generale-02.png" alt="Un flusso minimo di funzionamento: dall&#x27;erogatore che pubblica un e-service sul catalogo ad un fruitore che accede alle informazioni attraverso la fruizione del servizio stesso"><figcaption><p>Un flusso minimo di funzionamento: dall'erogatore che pubblica un e-service sul catalogo a un fruitore che accede alle informazioni attraverso la fruizione del servizio </p></figcaption></figure>

## **Flusso dell'erogatore**

Un aderente che desidera **erogare un e-service** può crearlo e gestirlo attraverso la piattaforma. Una volta **pubblicato**, il servizio verrà reso disponibile nel **Catalogo degli e-service**, dove potrà essere visualizzato in modalità fruizione.

Gli aderenti interessati ad accedere all’e-service, se in possesso dei **requisiti minimi richiesti** dall’erogatore (attributi), potranno **inoltrare una richiesta di fruizione**. L’erogatore avrà la possibilità di **valutare e gestire** tali richieste.

Solo dopo l’approvazione della richiesta di fruizione, il fruitore potrà **presentare le proprie finalità** e iniziare a utilizzare l’e-service.

## **Flusso del fruitore**

Un aderente che desidera **fruire di un e-service** può consultare il **Catalogo degli e-service** per visualizzare quelli disponibili. Se possiede i **requisiti minimi richiesti**, può **richiedere l’iscrizione** presentando una **richiesta di fruizione**, che verrà valutata dall’erogatore.

Una volta che la richiesta è **approvata e attiva**, il fruitore può **creare delle finalità**, specificando:

* **Dettagli sull’accesso e l’utilizzo dei dati** (analisi del rischio).
* **Stima di carico**, ovvero il numero stimato di chiamate API giornaliere verso l’erogatore.

Se la stima di carico supera la capacità dell’infrastruttura dell’erogatore, è necessaria **un’ulteriore approvazione** prima che il fruitore possa utilizzare la finalità per accedere all’e-service.

Una volta che la finalità è attiva, il fruitore può **ottenere un voucher** da PDND Interoperabilità da utilizzare per accedere all’API dell’erogatore. Per maggiori dettagli sull’implementazione tecnica, si rimanda alla **sezione dedicata della guida**.

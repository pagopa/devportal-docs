# Funzionamento generale

Quello dell'interoperabilità è un "ecosistema" composto da diverse componenti, protocolli e standard. PDND Interoperabilità è la piattaforma abilitante al centro dell'ecosistema.

Per condividere i propri dati su PDND Interoperabilità l'ente deve seguire una serie di passaggi:

1. solo una volta, [effettuare l'adesione](https://docs.pagopa.it/interoperabilita-1/manuale-operativo/guida-alladesione) a PDND Interoperabilità;
2. accedere alla piattaforma per verificare le API già presenti sul catalogo;
3. scrivere una API che rispetti il perimetro di sicurezza e gli standard del _Modello di Interoperabilità_ (ModI), definito da AgID, che descrive il perimetro dell’interoperabilità tra pubbliche amministrazioni. Alcuni riferimenti nella [sezione dedicata](../guida-tecnica/e-service/riferimenti-e-strumenti-a-supporto.md);
4. aggiungere [un controllo](../guida-tecnica/utilizzare-i-voucher/verifiche-sul-digest-da-parte-di-un-erogatore.md) sulla API per verificare la legittimità e validità dei voucher presentati da chi sta richiedendo i dati. Il voucher è valido solo se è rilasciato da PDND Interoperabilità, in corso di validità e per la risorsa corretta;
5. pubblicare sul Catalogo di PDND Interoperabilità l'API sotto forma di e-service, corredandola di tutte le informazioni di contorno e contesto necessarie ai casi d'uso.

## Le modalità di utilizzo della piattaforma

Il back office ha due modalità di utilizzo: erogazione e fruizione.

Ogni aderente a PDND Interoperabilità può essere solo erogatore di e-service, solo fruitore o ricoprire contemporaneamente entrambe le funzioni, erogando alcuni e-service e fruendo di altri.

PDND Interoperabilità fornisce un'interfaccia grafica (back-office) per gestire tutte le operazioni di creazione, modifica, aggiornamento e archiviazione del ciclo di vita degli e-service sia per gli erogatori che per i fruitori. Inoltre, fornisce un set di API per interagire con essa, automatizzando i processi.

## Flusso minimo erogatore/fruitore

Di seguito è presentato un **flusso semplificato** per offrire una panoramica generale sul funzionamento della piattaforma. Alcuni passaggi verranno approfonditi nelle sezioni specifiche.

<figure><img src="../.gitbook/assets/interop-funzionamento-generale-02.png" alt="Un flusso minimo di funzionamento: dall&#x27;erogatore che pubblica un e-service sul catalogo ad un fruitore che accede alle informazioni attraverso la fruizione del servizio stesso"><figcaption><p>Un flusso minimo di funzionamento: dall'erogatore che pubblica un e-service sul catalogo a un fruitore che accede alle informazioni attraverso la fruizione del servizio </p></figcaption></figure>

## **Flusso dell'erogatore**

Un aderente che desidera **erogare un e-service** può crearlo e gestirlo attraverso la piattaforma. Una volta **pubblicato**, il servizio verrà reso disponibile nel **Catalogo degli e-service**, dove potrà essere visualizzato in modalità fruizione.

Gli aderenti interessati ad accedere all’e-service, se in possesso dei **requisiti minimi richiesti** dall’erogatore (attributi), potranno **inoltrare una richiesta di fruizione**. L’erogatore avrà la possibilità di **valutare e gestire** tali richieste.

Solo dopo l’approvazione della richiesta di fruizione, il fruitore potrà **presentare le proprie finalità** e iniziare a fruire dell’e-service.

## **Flusso del fruitore**

Un aderente che desidera **fruire di un e-service** può consultare il **Catalogo degli e-service** per visualizzare quelli disponibili. Se possiede i **requisiti minimi richiesti**, può **richiedere l’iscrizione** presentando una **richiesta di fruizione**, che verrà valutata dall’erogatore.

Una volta che la richiesta è **approvata e attiva**, il fruitore può **creare delle finalità**, specificando:

* **Dettagli sull’accesso e trattamento dei dati** (analisi del rischio).
* **Stima di carico**, ovvero il numero stimato di chiamate API giornaliere verso l’erogatore.

Se la stima di carico supera la capacità dell’infrastruttura dell’erogatore, è necessaria **un’ulteriore approvazione tecnica** prima che il fruitore possa utilizzare la finalità per accedere all’e-service.

Una volta che la finalità è attiva, il fruitore può finalizzare la propria integrazione tecnica per **ottenere un voucher** da PDND Interoperabilità da utilizzare per accedere all’API dell’erogatore. Tutti questi aspetti verranno approfonditi nelle relative sezioni di questa guida.

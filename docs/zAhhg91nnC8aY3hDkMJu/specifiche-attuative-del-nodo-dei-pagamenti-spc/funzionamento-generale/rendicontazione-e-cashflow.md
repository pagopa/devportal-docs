# Rendicontazione e Cashflow

Ogni PSP aderente alla piattaforma in data D+2 rendiconta tramite il _**flusso di rendicontazione**_ il dettaglio dei riversamenti effettuati nella giornata D+1 verso i conti di accredito dei pagamenti avvenuti nella giornata operativa D, come definito nelle Linee Guida della piattaforma pagoPA, nello specifico nelle [SACI](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/E6d6iTzjBzUfzNoZjadZ/).

I PSP inviano ogni singolo flusso di rendicontazione alla piattaforma pagoPA tramite la primitiva [nodoInviaFlussoRendicontazione](../../appendici/primitive.md#nodoinviaflussorendicontazione); per la ricezione dei flussi di rendicontazione da parte degli EC le primitive da usare sono la [nodoChiediElencoFlussiRendicontazione](../../appendici/primitive.md#nodochiedielencoflussirendicontazione), per avere l'elenco dei flussi disponibili, e la [nodoChiediFlussoRendicontazione](../../appendici/primitive.md#nodochiediflussorendicontazione) per scaricare uno specifico flusso.

Per semplicità di “narrativa” negli schemi successivi ci si riferisce sempre:

* lato PSP → all’ invio di un singolo flusso
* lato EC → al recupero di molteplici flussi.

Questa scelta è data dalla natura della funzionalità lato EC che prevede:

1. Recupero di “lista di flussi”
2. Recupero del singolo flusso (menzionato precedentemente in lista)

Per i PSP esiste un unica modalità di invio di flussi rendicontazione alla piattaforma pagoPA:

* SOAP (Web Service)

Esistono, invece, 2 configurazioni possibili (mutuamente esclusive) per l’EC relativamente alla ricezione dei flussi di rendicontazione:

* SOAP (Web Service)
* SFTP

![](<../../.gitbook/assets/image (29).png>)

![](<../../.gitbook/assets/image (3).png>)

Per quanto riguarda la [nodoChiediElencoFlussiRendicontazione](../../appendici/primitive.md#nodochiedielencoflussirendicontazione) la piattaforma risponderà in maniera indipendente dalla configurazione dell'EC (SOAP o SFTP), in entrambi i casi infatti la piattaforma risponderà con un elenco di FdR. L’utilizzo della primitiva in caso di configurazione SFTP è opzionale e un possibile motivo per l’utilizzo riguarda finalità statistiche.

Per quanto riguarda la [nodoChiediFlussoRendicontazione](../../appendici/primitive.md#nodochiediflussorendicontazione) la piattaforma risponderà in maniera differente in base alla configurazione dell’EC:

* ricezione via _web service_ **SOAP** → file XML: flusso di rendicontazione in base64 binary
* ricezione via _server_ **SFTP** → a differenza della primitiva standard, non viene restituito in output alcun file XML

In caso di configurazione SFTP la chiamata in questione è opzionale, infatti, il deposito del file non avviene al momento della richiesta dell' EC con primitiva, ma avviene non appena il flusso è disponibile al Nodo.

Di seguito un esempio di xml del Flusso di Rendicontazione contenuto nel tag _xmlRendicontazione_ nel formato base64.

```xml
<FlussoRiversamento xmlns="http://www.digitpa.gov.it/schemas/2011/Pagamenti/">
    <versioneOggetto>1.0</versioneOggetto>
    <identificativoFlusso>2021-11-21ABI00000-AABB648200001295</identificativoFlusso>
    <dataOraFlusso>2021-11-22T00:37:32</dataOraFlusso>
    <identificativoUnivocoRegolamento>Bonifico SEPA-00000-AABB0</identificativoUnivocoRegolamento>
    <dataRegolamento>2021-11-21</dataRegolamento>
    <istitutoMittente>
        <identificativoUnivocoMittente>
            <tipoIdentificativoUnivoco>B</tipoIdentificativoUnivoco>
            <codiceIdentificativoUnivoco>ABI00000</codiceIdentificativoUnivoco>
        </identificativoUnivocoMittente>
        <denominazioneMittente>BANCO DI XXXXXXXX SPA</denominazioneMittente>
    </istitutoMittente>
    <istitutoRicevente>
        <identificativoUnivocoRicevente>
            <tipoIdentificativoUnivoco>G</tipoIdentificativoUnivoco>
            <codiceIdentificativoUnivoco>77777777777</codiceIdentificativoUnivoco>
        </identificativoUnivocoRicevente>
        <denominazioneRicevente>XXXXXXXXXXX</denominazioneRicevente>
    </istitutoRicevente>
    <numeroTotalePagamenti>1</numeroTotalePagamenti>
    <importoTotalePagamenti>1234.56</importoTotalePagamenti>
    <datiSingoliPagamenti>
        <identificativoUnivocoVersamento>12210209926737900</identificativoUnivocoVersamento>
        <identificativoUnivocoRiscossione>2130101502302932577</identificativoUnivocoRiscossione>
        <indiceDatiSingoloPagamento>1</indiceDatiSingoloPagamento>
        <singoloImportoPagato>1234.56</singoloImportoPagato>
        <codiceEsitoSingoloPagamento>0</codiceEsitoSingoloPagamento>
        <dataEsitoSingoloPagamento>2021-11-21</dataEsitoSingoloPagamento>
    </datiSingoliPagamenti>
</FlussoRiversamento>
```

## Gestione sovrascritture Flussi di Rendicontazione <a href="#title-text" id="title-text"></a>

Un PSP ha la possibilità di mandare più flussi allo stesso EC tramite la primitiva [nodoInviaFlussoRendicontazione](../../appendici/primitive.md#nodoinviaflussorendicontazione) con lo stesso _identificativoFlusso_ ma con _dataOraFlusso_ differente. Questa opzione permette al PSP di **sovrascrivere** un flusso già inviato, in caso un flusso già inviato necessitasse di correzioni.&#x20;

Si ricorda, inoltre, l'_identificativoFlusso_ deve essere univoco nell’ambito dell’anno di riferimento delle operazioni di pagamento cui si riferisce il flusso, di conseguenza lo stesso _identificativoFlusso_ può essere usato più di una volta nel corso dello stesso anno solo nel caso di invio di un flusso di sovrascrittura.

**Esempio:**

* Flusso **errato** _identificativoFlusso_ **=** abc**,** _dataOraFlusso_ **=** 2019-01-01T10:00:00
* Flusso **corretto** _identificativoFlusso_ **=** abc**,** _dataOraFlusso_ **=** 2019-01-01T14:00:00

Un PSP una volta inviato un flusso con un determinato _identificativoFlusso_, per sovrascriverlo deve inviare un flusso con lo stesso _identificativoFlusso_ ma con _dataOraFlusso_ **superiore** a quella inviata in precedenza.

Il flusso di sovrascrittura è ritenuto valido se inviato entro, e non oltre, le ore 24 della quarta giornata lavorativa successiva alla ricezione dell’ordine di pagamento (D+4).

### Comportamento del Nodo dei Pagamenti <a href="#comportamento-del-nodo-dei-pagamenti" id="comportamento-del-nodo-dei-pagamenti"></a>

Nei seguenti due esempi sono mostrati i comportamenti del Nodo dei pagamenti in caso di due invii successivi:

* Esempio 1
  * **Invio 1**: _identificativoFlusso_ **=** abc**,** _dataOraFlusso_ **=** 2019-01-01T**10**:00:00
  * **Invio 2**: _identificativoFlusso_ **=** abc**,** _dataOraFlusso_ **=** 2019-01-01T**14**:00:00

Al secondo invio, il nodo accetterà il flusso di rendicontazione.

* Esempio 2
  * **Invio 1**: _identificativoFlusso_ **=** abc**,** _dataOraFlusso_ **=** 2019-01-01T**10**:00:00,
  * **Invio 2**: _identificativoFlusso_ **=** abc**,** _dataOraFlusso_ **=** 2019-01-01T**07**:00:00

Al secondo invio il Nodo rifiuterà il flusso di rendicontazione (lo stesso accadrebbe anche se la seconda dataTora fosse identica alla prima).

## Richiesta dei Flussi di Rendicontazione da parte dell'Ente Creditore <a href="#richiesta-flussi-di-rendicontazione-da-parte-dellente-creditore" id="richiesta-flussi-di-rendicontazione-da-parte-dellente-creditore"></a>

### Elenco Flussi <a href="#elenco-flussi" id="elenco-flussi"></a>

Quando l’EC richiede l'elenco dei flussi ([nodoChiediElencoFlussiRendicontazione](../../appendici/primitive.md#nodochiedielencoflussirendicontazione)) il Nodo dei pagamenti deve rispondere, per un determinato _identificativoFlusso_, con il flusso più recente a disposizione, in riferimento al precedente esempio 1 e supponendo che la richiesta avvenga dopo la ricezione del secondo flusso da parte del nodo:

* _identificativoFlusso_ **=** abc**,** _dataOraFlusso_ **=** 2019-01-01T**14**:00:00

Ad ogni richiesta vengono restituiti gli elenchi dei flussi secondo la seguente logica sui parametri di input opzionali eventualmente inseriti nella _request_:

* _idDominio_
  * se specificato → la piattaforma restituisce l'elenco dell’EC specificato;
  * se non specificato → la piattaforma restituisce gli elenchi di tutti gli EC dell’Intermediario o Partner Tecnologico tramite cui è transitata la richiesta;
* _identificativoPSP_
  * se specificato → la piattaforma restituisce l'elenco del PSP specificato;
  * se non specificato → la piattaforma restituisce gli elenchi di tutti i PSP.

Attualmente il Nodo non tiene traccia dei flussi già scaricati dall’EC, per questo motivo vengono sempre restituiti tutti i flussi disponibili sulla piattaforma, rimane compito dell’EC comprendere quali flussi sono da richiedere e quali sono già stati elaborati, tenendo a mente che un PSP può sovrascrivere un flusso secondo le logiche sopra esposte.

Per una corretta gestione l'EC deve verificare ed eventualmente gestire il contenuto associato ad ogni singolo _identificativoFlusso_ inviato fino alla quarta giornata lavorativa (D+4) successiva alla ricezione dell’ordine di pagamento.

![](../../.gitbook/assets/fdr\_sovrascittura.png)

Non esistendo lato EC possibilità di filtrare, né temporalmente, né quantitativamente gli elementi restituiti, è stata definita una proprietà della piattaforma che permette di limitare l'intervallo temporale su cui basarsi per rispondere alla chiamata, la proprietà è unica per tutta la piattaforma e attualmente è impostata a 30 giorni.

### Singolo Flusso <a href="#singolo-flusso" id="singolo-flusso"></a>

L’EC, quindi, richiede il singolo flusso ([nodoChiediFlussoRendicontazione](../../appendici/primitive.md#nodoinviaflussorendicontazione)) fornendo in input esclusivamente _identificativoFlusso_ e non _dataOraFlusso_ (in riferimento alla richiesta di esempio qui sopra _identificativoFlusso_ **=** abc)\
Il Nodo deve rispondere coerentemente con quanto dichiarato nella primitiva precedente ([nodoChiediElencoFlussiRendicontazione](../../appendici/primitive.md#nodochiedielencoflussirendicontazione)) e fornire quindi il flusso più recente per quell'_identificativoFlusso_, in riferimento all'esempio precedente:

* _identificativoFlusso_ = abc, _dataOraFlusso_ = 2019-01-01T**14**:00:00

## Nuove primitive flussi di rendicontazione <a href="#richiesta-flussi-di-rendicontazione-da-parte-dellente-creditore" id="richiesta-flussi-di-rendicontazione-da-parte-dellente-creditore"></a>

PagoPA metterà a disposizione degli EC/PSP delle nuove [primitive](../../appendici/primitive.md#nuova-gestione-flussi-di-rendicontazione) per la gestione di download/upload dei FdR.&#x20;

L'introduzione dei nuovi servizi ha l’obiettivo di ottimizzare l’attuale flusso logico, gestendo in maniera ottimale tutte le fasi di gestione dei FdR, anche di dimensioni elevate.

Gli EC ed i PSP potranno adeguare le chiamate alle primitive messe a disposizione dalla piattaforma pagoPA per poter gestire in maniera efficiente gli FdR.

Per poter usufruire delle nuove API sarà necessario effettuare una sottoscrizione al nuovo prodotto che mette a disposizione le primitive di seguito elencate. Per maggiori informazioni su come richiedere una sottoscrizione ad un nuovo prodotto si può far riferimento alla guida riportata al link [connettivita.md](../../appendici/connettivita.md "mention").

Vengono messi a disposizione due nuovi prodotti:

* **"FDR - Flussi di rendicontazione \[ORG]"** - API per gli Enti Creditori
* **"FDR - Flussi di rendicontazione \[PSP]"** - API per i PSP

Si riporta di seguito il disegno del nuovo processo:

<figure><img src="../../.gitbook/assets/image (54).png" alt=""><figcaption></figcaption></figure>

Il nuovo processo prevede l'introduzione di tre nuove funzioni, descritte nei paragrafi seguenti.

Gli esempi delle chiamate sono consultabili nella sezione Primitive - Nuove primitive FdR.

### Invio del flusso da PSP <a href="#singolo-flusso" id="singolo-flusso"></a>

La nuova modalità di invio dei flussi introduce la possibilità di spezzettare un flusso di grandi dimensioni, in tanti piccoli pacchetti.

I PSP, che intendono caricare un flusso di rendicontazione, effettuano una prima chiamata con la _signature_:&#x20;

`POST`` `**`/psps/{pspId}/fdrs/{fdr}`**

Al termine della chiamata il nodo dei pagamenti è pronto a ricevere tutti i pacchetti che andranno a comporre l'intero flusso.

L'aggiunta dei pacchetti avviene tramite la chiamata client con la _signature_:&#x20;

`PUT`` `**`/psps/{pspId}/fdrs/{fdr}/payments/add`**

La chiamata può essere ripetuta tante volte fino all'invio dell'ultimo pacchetto che compone il flusso di Rendicontazione.&#x20;

Può essere utilizzata la chiamata con la _signature_:

`PUT`` `**`/psps/{pspId}/fdrs/{fdr}`**&#x20;

Per cancellare un pacchetto erroneamente caricato.

Quando tutti i pacchetti sono stati caricati, può essere publicato il flusso tramite la chiamata con _signature_:

`POST`` `**`/psps/{pspId}/fdrs/{fdr}/publish`**

Oppure si può decidere di eliminare i pacchetti inseriti tramite la chiamata con _signature_:

`DELETE`**`/psps/{pspId}/fdrs/{fdr}`**

### Chiedi Elenco flussi da EC <a href="#singolo-flusso" id="singolo-flusso"></a>

L'EC che intende scaricarsi l'elenco dei flussi di rendicontazione non ancora scaricati, può effettuarlo tramite _signature_:

`GET`` `**`/organizations/{organizationId}/fdrs`**

La primitiva restituisce i flussi secondo le logiche descritte nel paragrafo [Elenco Flussi](rendicontazione-e-cashflow.md#elenco-flussi)**.**

### Chiedi flusso da EC <a href="#singolo-flusso" id="singolo-flusso"></a>

L’EC, che intende richiedere un flusso contenuto nell'elenco dei flussi, può utilizzare la chiamata con _signature_:

`GET`**`/organizations/{organizationId}/fdrs/{fdr}/revisions/{revision}/psps/{pspId}`**

Se il flusso richiesto è di grandi dimensioni può essere scaricato tramite la _signature_:

`GET`**`/organizations/{organizationId}/fdrs/{fdr}/revisions/{revision}/psps/{pspId}/payments`**&#x20;

che recupera tutti i pagamenti paginati.


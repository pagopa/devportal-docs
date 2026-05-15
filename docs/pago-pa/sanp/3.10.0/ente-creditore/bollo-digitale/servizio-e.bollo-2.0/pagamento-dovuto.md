---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/ente-creditore/bollo-digitale/servizio-e.bollo-2.0/pagamento-dovuto
---

# Pagamento dovuto

Lo scenario descritto in questo use case è quello di un cittadino che accede al sito di un ente creditore EC per scaricare un documento su cui ha necessità di apporre una Marca da Bollo Digitale MBD.\
L’EC potrà indirizzare il cittadino sui sistemi PagoPA per il pagamento della MBD. Inoltre, a valle del processo di pagamento, avrà a disposizione due modalità di recupero della ricevuta della MBD con l’identificativo univoco da associare al documento più tutte le informazioni necessarie per poter eventualmente generare una ricevuta da inviare al cittadino.

## Come aderire al servizio

L'adesione al servizio _**@e.bollo 2.0 Pagamento Dovuto**_ avviene mediante l'apertura di un ticket al team Service Management & Operations SMO dell'area pagoPA, nella richiesta deve essere specificato il codice fiscale dell'EC aderente, il segregation code da utilizzare per la creazione delle posizioni debitorie e il servizio a cui si vuole aderire (nel nostro caso _**@e.bollo 2.0 Pagamento Dovuto**_).

{% hint style="warning" %}
Al fine di poter utilizzare le API descritte di seguito nel documento è necessario creare la relativa `subscription-key` mediante il portale Backoffice-pagoPA, per ulteriori dettagli è possibile fare riferimento al alla sezione [Generazione API Key](https://developer.pagopa.it/pago-pa/guides/manuale-bo-ec/manuale-operativo-back-office-pagopa-ente-creditore/funzionalita/generazione-api-key) del manuale.
{% endhint %}

## Flusso di pagamento MBD

Di seguito il diagramma che riporta il flusso completo del pagamento di una MBD:

<figure><img src="../../../.gitbook/assets/image (6).png" alt=""><figcaption></figcaption></figure>

Il flusso di pagamento parte dal sito dell'EC nel momento in cui si palesa la necessità di far pagare al cittadino una MBD da associare in modo univoco ad un documento digitale.\
A tale scopo _**@e.bollo 2.0**_ mette a disposizione dell'EC una API che consente predisporre il pagamento sui sistemi PagoPA e di ricevere una URL a cui indirizzare il cittadino per l'acquisto della MBD, di seguito i dettagli:

> _**POST**_ https://api.platform.pagopa.it/pagopa-mbd-service/v1/organizations/{EC\_FISCAL\_CODE}/mbd

il body della richiesta è di tipo `application/json` e deve contenere un document con i campi di seguito riportati:

```json
{
    "paymentNotices": [
        {
            "firstName": "mario",
            "lastName": "rossi",
            "fiscalCode": "MRRNSR75R05H501I",
            "email": "mario.rossi@mydomain.it",
            "amount": 1600,
            "province": "RM",
            "documentHash": "1trA5qyjSZNwiwtGG46dyjRpL16TFgGCFvnfFzQrFHbB"
        }
    ],
    "idCIService": "00005",
    "returnUrls": {
        "successUrl": "https://testok",
        "cancelUrl": "https://testcancel",
        "errorUrl": "https://testerror"
    }
}
```

Dettaglio dei campi di input:

* `paymentNotices.firstName` - nome utente
* `paymentNotices.lastName` - cognome utente
* `paymentNotices.fiscalCode` - codice fiscale utente
* `paymentNotices.email` - email utente
* `paymentNotices.amount` - importo MBD
* `paymentNotices.province` - provincia di riferimento per l'imposta di bollo
* `paymentNotices.documentHash` - hash del documento a cui associare/applicare la MBD
* `idCIService` - codice identificativo del servizio _**@e.bollo 2.0 Pagamento Dovuto**_ da valorizzare con `00005`
* `returnUrl.successUrl` - url scelta dall'EC su cui effettuare la redirect in caso di pagamento eseguito con successo
* `returnUrl.cancelUrl` - url scelta dall'EC su cui effettuare la redirect nel caso in cui l'utente cancelli/annulli l'operazione
* `returnUrl.errorUrl` - url scelta dall'EC su cui effettuare la redirect in caso di errore durante la fase di pagamento

Il servizio risponde all'EC con un response body del seguente tipo:

```json
{
    "checkoutRedirectUrl": "https://api.uat.platform.pagopa.it/ecommerce/checkout/v1/carts/537d6dff-b087-4ff1-96f6-c759a1ff6c3d/redirect?clientId=CHECKOUT_CART",
    "mbdDownloadLink": "https://api.uat.platform.pagopa.it/pagopa-mbd-service/v1/organizations/99999000013/receipt/348175498304559315",
    "nav": "348175498304559315"
}
```

Dettaglio dei campi in output:

* `checkoutRedirectUrl` - URL su cui effettuare la redirect per indirizzare il cittadino sul sito Checkout di pagoPA per il pagamento della MBD, l'utente dovrà confermare l'email e procedere con il pagamento:

<figure><img src="../../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

* `mbdDownloadLink` - link per il recupero dell ricevuta MBD (per i dettagli fare riferimento a [Servizio MBD receipt](pagamento-dovuto.md#servizio-mbd-receipt))
* `nav` - numero avviso afferente al pagamento della MBD

### Recupero ricevuta MBD

La ricevuta della MBD è nel formato `xml` la cui struttura è definita e consultabile sul [sito dell'Agenzia delle Entrate](https://www.agenziaentrate.gov.it/portale/archivio/archivioschedeadempimento/schede-adempimento-2018/pagamenti-e-rimborsi/imposta-di-bollo-per-le-istanze-trasmesse-alla-pa-ebollo/normativa-e-linee-guida-ebollo), lo schema `xsd` può essere scaricato dal [repository pagoPA](https://github.com/pagopa/pagopa-api/blob/master/xsd-common/MarcaDaBollo.xsd).\
Per il recupero della ricevuta sono disponibili due modalità descritte di seguito nel documento.

#### Servizio MBD receipt

E' disponibile un servizio che consente di recuperare il file `xml` relativo alla ricevuta della MBD:

> _**GET** https://api.platform.pagopa.it/pagopa-mbd-service/v1/organizations/{EC\_FISCAL\_CODE}/receipt/{NAV}_

La URL completa da utilizzare è presente all'interno del campo `mbdDownloadLink` in risposta al servizio di innesco del pagamento descritto in precedenza, in alternativa per costruire la URL si può utilizzare il campo `nav` che contiene il numero avviso associato al pagamento.\
Il servizio risponde con un response body `json` del seguente tipo:

```json
{
    "content": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48bWF..."
}
```

Il campo `content` contiene il file `xml` relativo alla ricevuta MBD codificato in Base64.

#### Stazione di broadcast

Un metodo alternativo per il recupero della receipt consiste nella configurazione di una stazione di broadcast, se presente il Nodo Dei Pagamenti NDP invocherà la primitiva `paSendRTV2` utilizzando l'endpoint configurato nella stazione, l'EC potrà recuperare la ricevuta della MBD dal campo [MBDAttachment](https://github.com/pagopa/pagopa-api/blob/05207a1759914675eb606316c2abcbe317f79f98/wsdl/xsd/paForNode.xsd#L389C24-L389C37) della receipt.

{% hint style="info" %}
Per per le specifiche complete delle API fare riferimento alla sezione [@e.bollo 2.0](../../../appendici/primitive/ente-creditore/api-rest/#e.bollo-2.0)
{% endhint %}

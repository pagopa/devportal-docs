---
description: >-
  Specifiche tecniche per l'invocazione dell'API per il recupero delle
  informazioni relative alle stazioni degli EC di cui il partner è
  intermediario.
---

# API stazioni EC

{% hint style="warning" %}
L' API descritta in questa sezione, non essendo stata ancora rilasciata, è soggetta ad alcuni cambiamenti che verranno descritti e terminati nelle prossime settimane.
{% endhint %}

## Descrizione

L'api descritta in questa sezione si occupa di collezionare tutte le informazioni descritte all’interno della tabella che segue e le restituirà in output all’interno di un file in formato `csv`.

&#x20;

<table data-header-hidden><thead><tr><th width="286.5"></th><th></th></tr></thead><tbody><tr><td><strong>Campo</strong></td><td><strong>Descrizione</strong></td></tr><tr><td><code>companyName</code></td><td>Ragione sociale EC</td></tr><tr><td><code>amministrativeCode</code></td><td>Codice catastale ente</td></tr><tr><td><code>taxCode</code></td><td>Codice fiscale/p.iva EC</td></tr><tr><td><code>intermediated</code></td><td>EC diretto/indiretto <code>true|false</code></td></tr><tr><td><code>brokerCompanyName</code></td><td>Ragione sociale intermediario/partner</td></tr><tr><td><code>brokerTaxCode</code></td><td>Codice fiscale intermediario/partner</td></tr><tr><td><code>model</code></td><td>Impostato fisso a <code>3</code></td></tr><tr><td><code>auxDigit</code></td><td>Aux Digit associato alla stazione</td></tr><tr><td><code>segregationCode</code></td><td>Codice segregazione associato alla stazione</td></tr><tr><td><code>applicationCode</code></td><td>Application code associato alla stazione</td></tr><tr><td><code>cbillCode</code></td><td>Codice CBILL Ente</td></tr><tr><td><code>stationId</code></td><td>Id stazione associata all’ente</td></tr><tr><td><code>stationState</code></td><td>Stato associazione attivo/disattivo</td></tr><tr><td><code>activationDate</code></td><td>Data stato attivazione della stazione</td></tr><tr><td><code>version</code></td><td>Versione della stazione</td></tr><tr><td><code>broadcast</code></td><td>Stazione di broadcast <code>true|false</code></td></tr></tbody></table>

## **Signature**

`GET /creditorinstitutions/{brokerId}/info/`

### **Path Parameters**

* `brokerId` - identificativo univoco intermediario che effettua il recupero delle informazioni

### **Headers**

* `X-Request-Id` - Identificativo univoco della chiamata (trackingId tracciato sui log), se non specificato ne viene generato uno random che viene poi restituito in output.
* `Content-Disposition` - `attachment; filename=export-enti-<BROKER_ID>-<YYYY-MM-DD>.csv`
* `Content-Type` - `application/octet-stream`
* `Content-Length` - grandezza del body in `byte`
* `Cache-Control` - `no-cache, no-store, must-revalidate`
* `Pragma` - `no-cache`
* `Expires` - `0`
* `Ocp-Apim-Subscription-Key` - subscription key mediante cui l'intermediario viene autenticato. La subscription key verrà autorizzata esclusivamente allo scarico delle informazioni relative all'intermediario owner della sottoscrizione

### **Errori**

* `400` Bad request
* `401` Unauthorized
* `403` Forbidden
* `429` Too many requests
* `500` Internal Server Error

### **Request**

Non è previsto alcun payload

### **Response**

File in formato`csv`, di seguito un esempio:

```csv
companyName,amministrativeCode,taxCode,intermediated,brokerCompanyName,brokerTaxCode,model,auxDigit,segregationCode,applicationCode,cbillCode,stationId,stationState,activationDate,version,broadcast
A.P.S.P. Anaunia,apspa,1839930227,true,Giugno2020-Partner1,90909090786,3,3,3,3,1eDRp,90909090786_01,active,2021-06-16,2,true
A.P.S.P. Anaunia,apspa,1839930227,true,Giugno2020-Partner1,90909090786,3,3,3,3,1eDRp,90909090786_01,active,2021-06-16,2,true
A.P.S.P. Anaunia,apspa,1839930227,true,Giugno2020-Partner1,90909090786,3,3,3,3,1eDRp,90909090786_01,active,2021-06-16,2,true
Accademia della Crusca,AC,81004890729,true,Unione Terra di Mezzo,02408320352,3,2,3,,17Dm9,02408320352_01,active,2019-06-22,1,false
Accademia della Crusca,AC,81004890729,true,Unione Terra di Mezzo,02408320352,3,2,3,,17Dm9,02408320352_01,inactive,2019-06-22,1,false
Accademia della Crusca,AC,81004890729,true,PARTNER TECN  6F - Donato,12345432129,3,2,3,0,17Dm9,12345432129_01,inactive,2022-05-09,2,true
```

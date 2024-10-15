# Primitive

Per la gestione degli errori fare riferimento a [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention").

{% hint style="info" %}
I campi contrassegnati con﹡sono obbligatori
{% endhint %}

Per i dettagli [https://github.com/pagopa/pagopa-api/tree/SANP3.8.0](https://github.com/pagopa/pagopa-api/tree/SANP3.8.0)

## paVerifyPaymentNotice <a href="#pagetpayment" id="pagetpayment"></a>

## paVerifyPaymentNotice

<mark style="color:green;">`POST`</mark>&#x20;

#### Request Body

| Name                                           | Type   | Description                                                        |
| ---------------------------------------------- | ------ | ------------------------------------------------------------------ |
| idPA<mark style="color:red;">\*</mark>         | String | codice fiscale della struttura che invia la richiesta di pagamento |
| idBrokerPA<mark style="color:red;">\*</mark>   | String | identificativo del soggetto che opera come intermediario per l'EC  |
| idStation<mark style="color:red;">\*</mark>    | String | identificativo della stazione dell'EC nel sistema pagoPa           |
| qrCode<mark style="color:red;">\*</mark>       | String | è composto da _fiscalCode_ e _noticeNumber_                        |
| fiscalCode<mark style="color:red;">\*</mark>   | String | codice fiscale dell'EC                                             |
| noticeNumber<mark style="color:red;">\*</mark> | String | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]            |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
  <soapenv:Envelope>
    <soapenv:Header />
    <soapenv:Body>
      <nod:paVerifyPaymentNoticeReq>
        <idPA>77777777777</idPA>
        <idBrokerPA>77777777777</idBrokerPA>
        <idStation>77777777777_01</idStation>
        <qrCode>
          <fiscalCode>77777777777</fiscalCode>
          <noticeNumber>311111111112222222</noticeNumber>
        </qrCode>
      </nod:paVerifyPaymentNoticeReq>
    </soapenv:Body>
  </soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Header />
  <soapenv:Body>
    <paf:paVerifyPaymentNoticeRes>
      <outcome>OK</outcome>
      <paymentList>
        <paymentOptionDescription>
          <amount>30.00</amount>
          <options>EQ</options>
          <dueDate>2021-12-31</dueDate>
          <detailDescription>test</detailDescription>
          <allCCP>false</allCCP>
        </paymentOptionDescription>
      </paymentList>
      <paymentDescription>payment</paymentDescription>
      <fiscalCodePA>77777777777</fiscalCodePA>
      <companyName>company EC</companyName>
      <officeName>office EC</officeName>
    </paf:paVerifyPaymentNoticeRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, da inserire obbligatoriamente in caso di _outcome_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* paymentList: struttura che contiene i dettagli del pagamento, al momento può contenere una sola _paymentOptionDescription_, da inserire obbligatoriamente in caso di _outcome_ OK
  * paymentOptionDescription﹡
    * amount﹡: importo in euro
    * options﹡: al momento deve essere valorizzato con _EQ_
    * dueDate: data di scadenza del pagamento secondo il formato ISO 8601 \[AAAA]-\[MM]-\[GG]
    * detailDescription: testo libero per descrivere l'oggetto del pagamento
    * allCCP﹡: se TRUE indica che tutti i bonifici sono associabili a IBAN postali
* paymentDescription: testo libero per descrivere l'oggetto del pagamento, da inserire obbligatoriamente in caso di _outcome_ OK
* fiscalCodePA: codice fiscale dell'EC, da inserire obbligatoriamente in caso di _outcome_ OK
* companyName: nome completo dell'EC, da inserire obbligatoriamente in caso di _outcome_ OK
* officeName: nome completo dell'ufficio dell'EC
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## paGetPayment <a href="#pagetpayment" id="pagetpayment"></a>

## paGetPayment versione 1

<mark style="color:green;">`POST`</mark>&#x20;

#### Request Body

| Name                                           | Type   | Description                                                                                                                                                                                            |
| ---------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| idPA<mark style="color:red;">\*</mark>         | String | Codice fiscale della struttura che invia la richiesta di pagamento.                                                                                                                                    |
| dueDate                                        | String | Data di scadenza del pagamento secondo il formato ISO 8601 \[AAAA]-\[MM]-\[GG].                                                                                                                        |
| transferType                                   | String | Valore ammesso: POSTAL.                                                                                                                                                                                |
| paymentNote                                    | String | Descrizione del pagamento. Valorizzato con _idCart_, nel caso il parametro  venisse valorizzato nel [pagamento-presso-frontend-dellec.md](../casi-duso/pagamento-presso-frontend-dellec.md "mention")  |
| amount                                         | String | Importo del pagamento in euro.                                                                                                                                                                         |
| noticeNumber<mark style="color:red;">\*</mark> | String | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]                                                                                                                                                |
| fiscalCode<mark style="color:red;">\*</mark>   | String | Codice fiscale dell'EC.                                                                                                                                                                                |
| qrCode<mark style="color:red;">\*</mark>       | String | E' composto da _fiscalCode_ e _noticeNumber._                                                                                                                                                          |
| idStation<mark style="color:red;">\*</mark>    | String | Identificativo della stazione dell'EC nel sistema pagoPa.                                                                                                                                              |
| idBrokerPA<mark style="color:red;">\*</mark>   | String | Identificativo del soggetto che opera come intermediario per l'EC.                                                                                                                                     |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
<soapenv:Envelope>
    <soapenv:Body>
      <pafn:paGetPaymentReq>
        <idPA>77777777777</idPA>
        <idBrokerPA>77777777777</idBrokerPA>
        <idStation>77777777777_01</idStation>
        <qrCode>
          <fiscalCode>77777777777</fiscalCode>
          <noticeNumber>311111111112222222</noticeNumber>
        </qrCode>
        <amount>30.00</amount>
      </pafn:paGetPaymentReq>
    </soapenv:Body>
  </soapenv:Envelope>    
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Header />
  <soapenv:Body>
    <paf:paGetPaymentRes>
      <outcome>OK</outcome>
      <data>
        <creditorReferenceId>11111111112222222</creditorReferenceId>
        <paymentAmount>30.00</paymentAmount>
        <dueDate>2021-12-31</dueDate>
        <retentionDate>2021-12-31T23:59:59</retentionDate>
        <lastPayment>0</lastPayment>
        <description>test</description>
        <companyName>company EC</companyName>
        <officeName>office EC</officeName>
        <debtor>
          <uniqueIdentifier>
            <entityUniqueIdentifierType>F</entityUniqueIdentifierType>
            <entityUniqueIdentifierValue>JHNDOE00A01F205N</entityUniqueIdentifierValue>
          </uniqueIdentifier>
          <fullName>John Doe</fullName>
          <streetName>street</streetName>
          <civicNumber>12</civicNumber>
          <postalCode>89020</postalCode>
          <city>city</city>
          <stateProvinceRegion>MI</stateProvinceRegion>
          <country>IT</country>
          <e-mail>john.doe@test.it</e-mail>
        </debtor>
        <transferList>
          <transfer>
            <idTransfer>1</idTransfer>
            <transferAmount>20.00</transferAmount>
            <fiscalCodePA>77777777777</fiscalCodePA>
            <IBAN>IT0000000000000000000000000</IBAN>
            <remittanceInformation>remittanceInformation1</remittanceInformation>
            <transferCategory>0101100IM</transferCategory>
          </transfer>
          <transfer>
            <idTransfer>2</idTransfer>
            <transferAmount>10.00</transferAmount>
            <fiscalCodePA>77777777778</fiscalCodePA>
            <IBAN>IT0000000000000000000000001</IBAN>
            <remittanceInformation>remittanceInformation2</remittanceInformation>
            <transferCategory>0201102IM</transferCategory>
          </transfer>
        </transferList>
        <metadata>
          <mapEntry>
            <key>keytest</key>
            <value>1</value>
          </mapEntry>
        </metadata>
      </data>
    </paf:paGetPaymentRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, da inserire obbligatoriamente in caso di _outcome_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* data: tutti i dettagli del pagamento, da inserire obbligatoriamente in caso di _outcome_ OK
  * _creditorReferenceId_﹡: **IUV** Identificativo Univoco Versamento
  * _paymentAmount_﹡: importo, deve essere uguale alle somme di _TransferAmount_ presenti nella _TransferList_
  * _dueDate_﹡: data di scadenza del pagamento secondo il formato ISO 8601 \[AAAA]-\[MM]-\[GG]
  * retentionDate: timestamp che indica la fine del periodo di ritenzione delle informazioni sul pagamento da parte del Nodo
  * lastPayment
  * description﹡: testo libero per descrivere l'oggetto del pagamento
  * companyName: nome completo dell'EC
  * officeName: nome completo dell'ufficio dell'EC
  * debtor﹡: individua il debitore a cui si riferisce la posizione debitoria
    * uniqueIdentifier﹡
      * entityUniqueIdentifierType﹡
        * **F** : Persona fisica
        * **G** : Persona giuridica
      * entityUniqueIdentifierValue﹡: codice fiscale o partita IVA, nel caso non siano disponibili è possibile utilizzare 'ANONIMO'
    * fullName﹡: nome completo del debitore
    * streetName: indirizzo
    * civicNumber: numero civico
    * postalCode: CAP
    * city: citta'
    * stateProvinceRegion: regione
    * country: stato
    * e-mail
  * transferList﹡: struttura che contiene i dettagli dei _transfer_, al momento possono essere inseriti fino a 5 _transfer_, deve essercene almeno _1_
    * transfer﹡
      * idTransfer﹡: indice della lista (da 1 a 5)
      * transferAmount﹡: importo
      * fiscalCodePA﹡: codice fiscale dell'EC
      * IBAN﹡: IBAN sul quale sarà effettuato il riversamento
      * remittanceInformation﹡: motivo del pagamento
      * transferCategory﹡: codice tassonomico, composto da _Codice tipo Ente Creditore + Progressivo macro area + Codice tipologia servizio + Motivo Giuridico_ ( ex. **0101002IM** )&#x20;
  * metadata: è un campo di archiviazione chiave/valore ad uso esclusivo dell'EC. I dati saranno inseriti nella _receipt_ (_paSendRT_)
    * mapEntry﹡
      * key﹡
      * value﹡
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## paGetPayment versione 2

<mark style="color:green;">`POST`</mark>&#x20;

**In questa versione è possibile inserire i metadata in ogni singolo **_**transfer**_**, inoltre è possibile gestire il servizio @e.bollo.**

#### Request Body

| Name                                           | Type   | Description                                                                                                                                                                                            |
| ---------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| idPA<mark style="color:red;">\*</mark>         | String | Codice fiscale della struttura che invia la richiesta di pagamento.                                                                                                                                    |
| idBrokerPA<mark style="color:red;">\*</mark>   | String | Identificativo del soggetto che opera come intermediario per l'EC.                                                                                                                                     |
| idStation<mark style="color:red;">\*</mark>    | String | Identificativo della stazione dell'EC nel sistema pagoPa.                                                                                                                                              |
| qrCode<mark style="color:red;">\*</mark>       | String | E' composto da _fiscalCode_ e _noticeNumber._                                                                                                                                                          |
| amount<mark style="color:red;">\*</mark>       | String | Importo del pagamento in euro                                                                                                                                                                          |
| paymentNote                                    | String | Descrizione del pagamento. Valorizzato con _idCart_, nel caso il parametro  venisse valorizzato nel [pagamento-presso-frontend-dellec.md](../casi-duso/pagamento-presso-frontend-dellec.md "mention")  |
| transferType                                   | String | <p>Valori ammessi</p><p>POSTAL</p><p>PAGOPA</p>                                                                                                                                                        |
| dueDate                                        | String | data di scadenza del pagamento secondo il formato ISO 8601 \[AAAA]-\[MM]-\[GG]                                                                                                                         |
| fiscalCode<mark style="color:red;">\*</mark>   | String | codice fiscale dell'EC                                                                                                                                                                                 |
| noticeNumber<mark style="color:red;">\*</mark> | String | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]                                                                                                                                                |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
<soapenv:Envelope>
    <soapenv:Body>
      <pafn:paGetPaymentReq>
        <idPA>77777777777</idPA>
        <idBrokerPA>77777777777</idBrokerPA>
        <idStation>77777777777_01</idStation>
        <qrCode>
          <fiscalCode>77777777777</fiscalCode>
          <noticeNumber>311111111112222222</noticeNumber>
        </qrCode>
        <amount>30.00</amount>
      </pafn:paGetPaymentReq>
    </soapenv:Body>
  </soapenv:Envelope>         
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Header />
  <soapenv:Body>
    <paf:paGetPaymentRes>
      <outcome>OK</outcome>
      <data>
        <creditorReferenceId>11111111112222222</creditorReferenceId>
        <paymentAmount>30.00</paymentAmount>
        <dueDate>2021-12-31</dueDate>
        <retentionDate>2021-12-31T23:59:59</retentionDate>
        <lastPayment>0</lastPayment>
        <description>test</description>
        <companyName>company EC</companyName>
        <officeName>office EC</officeName>
        <debtor>
          <uniqueIdentifier>
            <entityUniqueIdentifierType>F</entityUniqueIdentifierType>
            <entityUniqueIdentifierValue>JHNDOE00A01F205N</entityUniqueIdentifierValue>
          </uniqueIdentifier>
          <fullName>John Doe</fullName>
          <streetName>street</streetName>
          <civicNumber>12</civicNumber>
          <postalCode>89020</postalCode>
          <city>city</city>
          <stateProvinceRegion>MI</stateProvinceRegion>
          <country>IT</country>
          <e-mail>john.doe@test.it</e-mail>
        </debtor>
        <transferList>
          <transfer>
            <idTransfer>1</idTransfer>
            <transferAmount>20.00</transferAmount>
            <fiscalCodePA>77777777777</fiscalCodePA>
            <companyName>company EC</companyName>
            <IBAN>IT0000000000000000000000000</IBAN>
            <remittanceInformation>remittanceInformation1</remittanceInformation>
            <transferCategory>0101100IM</transferCategory>
            <metadata>
              <mapEntry>
                <key>keytest</key>
                <value>1</value>
              </mapEntry>
            </metadata>
          </transfer>
          <transfer>
            <idTransfer>2</idTransfer>
            <transferAmount>10.00</transferAmount>
            <fiscalCodePA>77777777778</fiscalCodePA>
            <companyName>company EC</companyName>
            <IBAN>IT0000000000000000000000001</IBAN>
            <remittanceInformation>remittanceInformation2</remittanceInformation>
            <transferCategory>0201102IM</transferCategory>
          </transfer>
        </transferList>
        <metadata>
          <mapEntry>
            <key>keytest</key>
            <value>1</value>
          </mapEntry>
        </metadata>
      </data>
    </paf:paGetPaymentRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, da inserire obbligatoriamente in caso di _outcome_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* data: tutti i dettagli del pagamento, da inserire obbligatoriamente in caso di _outcome_ OK
  * _creditorReferenceId_﹡: **IUV** Identificativo Univoco Versamento
  * _paymentAmount_﹡: importo, deve essere uguale alle somme di _TransferAmount_ presenti nella _TransferList_
  * _dueDate_﹡: indica la data di scadenza del pagamento secondo il formato ISO 8601 \[AAAA]-\[MM]-\[GG]
  * retentionDate: timestamp che indica la fine del periodo di ritenzione delle informazioni sul pagamento da parte del Nodo
  * lastPayment
  * description﹡: testo libero per descrivere l'oggetto del pagamento
  * companyName﹡: nome completo dell'EC
  * officeName: nome completo dell'ufficio dell'EC
  * debtor﹡: individua il debitore a cui si riferisce la posizione debitoria
    * uniqueIdentifier﹡
      * entityUniqueIdentifierType﹡
        * **F** : Persona fisica
        * **G** : Persona giuridica
      * entityUniqueIdentifierValue﹡: codice fiscale o partita IVA, nel caso non siano disponibili è possibile utilizzare 'ANONIMO'
    * fullName﹡: nome completo del debitore
    * streetName: indirizzo
    * civicNumber: numero civico
    * postalCode: CAP
    * city: citta'
    * stateProvinceRegion: regione
    * country: stato
    * e-mail
  * transferList﹡: struttura che contiene i dettagli dei _transfer_, al momento possono essere inseriti fino a 5 _transfer_, deve essercene almeno 1
    * transfer﹡
      * idTransfer﹡: indice della lista (da 1 a 5)
      * transferAmount﹡: importo in euro
      * fiscalCodePA﹡: codice fiscale dell'EC
      * companyName﹡: nome completo dell'EC
      * **CHOICE**\*
        * IBAN: IBAN sul quale sarà effettuato il riversamento
        * richiestaMarcaDaBollo: i dati della richiesta della marca da bollo
          * _tipoBollo_: tipologia del bollo
          * _hashDocumento_: contiene l’impronta informatica (digest), nel formato base64, del documento informatico o della segnatura di protocollo cui è associata la marca da bollo digitale
          * _provinciaResidenza_: sigla automobilistica della provincia di residenza del soggetto pagatore
      * remittanceInformation﹡: motivo del pagamento
      * transferCategory﹡: codice tassonomico, composto da _Codice tipo Ente Creditore + Progressivo macro area + Codice tipologia servizio + Motivo Giuridico_ ( ex. **0101002IM** )&#x20;
      * metadata: è un campo di archiviazione chiave/valore. I dati saranno inseriti nella _receipt_ (_paSendRT_)
        * mapEntry﹡
          * key﹡
          * value﹡
  * metadata: è un campo di archiviazione chiave/valore. I dati saranno inseriti nella _receipt_ (_paSendRT_)
    * mapEntry﹡
      * key﹡
      * value﹡
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## paSendRT <a href="#pasendrt" id="pasendrt"></a>

## paSendRT versione 1

<mark style="color:green;">`POST`</mark>&#x20;

#### Request Body

<table><thead><tr><th>Name</th><th width="223">Type</th><th>Description</th></tr></thead><tbody><tr><td>idPA<mark style="color:red;">*</mark></td><td>String</td><td>codice fiscale della struttura che invia la richiesta di pagamento</td></tr><tr><td>idBrokerPA<mark style="color:red;">*</mark></td><td>String</td><td>identificativo del soggetto che opera come intermediario per l'EC</td></tr><tr><td>idStation<mark style="color:red;">*</mark></td><td>String</td><td>identificativo della stazione dell'EC nel sistema pagoPa</td></tr><tr><td>receipt<mark style="color:red;">*</mark></td><td>String</td><td>la ricevuta di pagamento</td></tr><tr><td>receiptId<mark style="color:red;">*</mark></td><td>String</td><td>identificatore univoco della <em>receipt</em> contiene il <em>paymentToken</em> assegnato da pagoPa</td></tr><tr><td>noticeNumber<mark style="color:red;">*</mark></td><td>String</td><td>[auxDigit][segregationCode][IUVBase][IUVCheckDigit]</td></tr><tr><td>fiscalCode<mark style="color:red;">*</mark></td><td>String</td><td>codice fiscale dell'EC</td></tr><tr><td>outcome<mark style="color:red;">*</mark></td><td>String</td><td>il risultato dell'operazione che può contenere i codici OK o KO</td></tr><tr><td>creditorReferenceId<mark style="color:red;">*</mark></td><td>String</td><td><strong>IUV</strong> <em>Identificativo Univoco Versamento</em></td></tr><tr><td>paymentAmount<mark style="color:red;">*</mark></td><td>String</td><td>importo espresso in euro</td></tr><tr><td>description<mark style="color:red;">*</mark></td><td>String</td><td></td></tr><tr><td>companyName</td><td>String</td><td>nome completo dell'EC</td></tr><tr><td>officeName</td><td>String</td><td></td></tr><tr><td>debtor<mark style="color:red;">*</mark></td><td>String</td><td>individua il debitore a cui si riferisce la posizione debitoria</td></tr><tr><td>uniqueIdentifier<mark style="color:red;">*</mark></td><td>String</td><td></td></tr><tr><td>entityUniqueIdentifierType<mark style="color:red;">*</mark></td><td>String</td><td><p><strong>F</strong> : Persona fisica</p><p><strong>G</strong> : Persona giuridica</p></td></tr><tr><td>entityUniqueIdentifierValue<mark style="color:red;">*</mark></td><td>String</td><td>codice fiscale o partita IVA</td></tr><tr><td>e-mail</td><td>String</td><td></td></tr><tr><td>country</td><td>String</td><td></td></tr><tr><td>stateProvinceRegion</td><td>String</td><td></td></tr><tr><td>city</td><td>String</td><td></td></tr><tr><td>postalCode</td><td>String</td><td></td></tr><tr><td>civicNumber</td><td>String</td><td></td></tr><tr><td>streetName</td><td>String</td><td></td></tr><tr><td>fullName<mark style="color:red;">*</mark></td><td>String</td><td>nome completo del debitore</td></tr><tr><td>transferList<mark style="color:red;">*</mark></td><td>String</td><td>struttura che contiene i dettagli dei <em>transfer</em></td></tr><tr><td>transfer<mark style="color:red;">*</mark></td><td>String</td><td></td></tr><tr><td>idTransfer<mark style="color:red;">*</mark></td><td>String</td><td>indice della lista (da 1 a 5)</td></tr><tr><td>fiscalCodePA<mark style="color:red;">*</mark></td><td>String</td><td>codice fiscale dell'EC</td></tr><tr><td>transferAmount<mark style="color:red;">*</mark></td><td>String</td><td>importo</td></tr><tr><td>IBAN<mark style="color:red;">*</mark></td><td>String</td><td>IBAN sul quale sarà effettuato il riversamento</td></tr><tr><td>remittanceInformation<mark style="color:red;">*</mark></td><td>String</td><td>motivo del pagamento</td></tr><tr><td>transferCategory<mark style="color:red;">*</mark></td><td>String</td><td>codice tassonomico, composto da <em>Codice tipo Ente Creditore + Progressivo macro area + Codice tipologia servizio + Motivo Giuridico</em> ( ex. <strong>0101002IM</strong> )</td></tr><tr><td>idPSP<mark style="color:red;">*</mark></td><td>String</td><td>identificativo del PSP</td></tr><tr><td>pspFiscalCode</td><td>String</td><td></td></tr><tr><td>pspPartitaIVA</td><td>String</td><td></td></tr><tr><td>PSPCompanyName<mark style="color:red;">*</mark></td><td>String</td><td></td></tr><tr><td>idChannel<mark style="color:red;">*</mark></td><td>String</td><td></td></tr><tr><td>channelDescription<mark style="color:red;">*</mark></td><td>String</td><td></td></tr><tr><td>payer</td><td>String</td><td>individua il pagatore</td></tr><tr><td>uniqueIdentifier<mark style="color:red;">*</mark></td><td></td><td></td></tr><tr><td>entityUniqueIdentifierType<mark style="color:red;">*</mark></td><td>String</td><td><p><strong>F</strong> : Persona fisica</p><p><strong>G</strong> : Persona giuridica</p></td></tr><tr><td>entityUniqueIdentifierValue<mark style="color:red;">*</mark></td><td>String</td><td>codice fiscale o partita IVA</td></tr><tr><td>fullName<mark style="color:red;">*</mark></td><td>String</td><td>nome completo del debitore</td></tr><tr><td>streetName</td><td>String</td><td></td></tr><tr><td>civicNumber</td><td>String</td><td></td></tr><tr><td>postalCode</td><td>String</td><td></td></tr><tr><td>city</td><td>String</td><td></td></tr><tr><td>stateProvinceRegion</td><td>String</td><td></td></tr><tr><td>country</td><td>String</td><td></td></tr><tr><td>e-mail</td><td>String</td><td></td></tr><tr><td>paymentMethod</td><td>String</td><td></td></tr><tr><td>fee</td><td>String</td><td>importo della commissione espresso in euro</td></tr><tr><td>paymentDateTime</td><td>String</td><td>data e ora del pagamento</td></tr><tr><td>applicationDate</td><td>String</td><td>data applicativa</td></tr><tr><td>transferDate</td><td>String</td><td>data del riversamento</td></tr><tr><td>metadata</td><td>String</td><td></td></tr><tr><td>mapEntry<mark style="color:red;">*</mark></td><td></td><td></td></tr><tr><td>key<mark style="color:red;">*</mark></td><td>String</td><td></td></tr><tr><td>value<mark style="color:red;">*</mark></td><td>String</td><td>identificativo del PSP</td></tr><tr><td>standin</td><td>Boolean</td><td>true: pagamento avvenuto in Stand in</td></tr></tbody></table>

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
  <soapenv:Envelope>
    <soapenv:Body>
      <pafn:paSendRTReq>
        <idPA>77777777777</idPA>
        <idBrokerPA>77777777777</idBrokerPA>
        <idStation>77777777777_01</idStation>
        <receipt>
          <receiptId>c110729d258c4ab1b765fe902aae41d6</receiptId>
          <noticeNumber>311111111112222222</noticeNumber>
          <fiscalCode>77777777777</fiscalCode>
          <outcome>OK</outcome>
          <creditorReferenceId>11111111112222222</creditorReferenceId>
          <paymentAmount>30.00</paymentAmount>
          <description>test</description>
          <companyName>company EC</companyName>
          <officeName>office EC</officeName>
          <debtor>
            <uniqueIdentifier>
              <entityUniqueIdentifierType>F</entityUniqueIdentifierType>
              <entityUniqueIdentifierValue>JHNDOE00A01F205N</entityUniqueIdentifierValue>
            </uniqueIdentifier>
            <fullName>John Doe</fullName>
            <streetName>street</streetName>
            <civicNumber>12</civicNumber>
            <postalCode>89020</postalCode>
            <city>city</city>
            <stateProvinceRegion>MI</stateProvinceRegion>
            <country>IT</country>
            <e-mail>john.doe@test.it</e-mail>
          </debtor>
          <transferList>
            <transfer>
              <idTransfer>1</idTransfer>
              <transferAmount>20.00</transferAmount>
              <fiscalCodePA>77777777777</fiscalCodePA>
              <IBAN>IT0000000000000000000000000</IBAN>
              <remittanceInformation>remittanceInformation1</remittanceInformation>
              <transferCategory>0101100IM</transferCategory>
            </transfer>
            <transfer>
              <idTransfer>2</idTransfer>
              <transferAmount>10.00</transferAmount>
              <fiscalCodePA>77777777778</fiscalCodePA>
              <IBAN>IT0000000000000000000000001</IBAN>
              <remittanceInformation>remittanceInformation2</remittanceInformation>
              <transferCategory>0201102IM</transferCategory>
            </transfer>
          </transferList>
          <idPSP>88888888888</idPSP>
          <pspFiscalCode>88888888888</pspFiscalCode>
          <pspPartitaIVA>88888888888</pspPartitaIVA>
          <PSPCompanyName>PSP name</PSPCompanyName>
          <idChannel>88888888888_01</idChannel>
          <channelDescription>app</channelDescription>
          <payer>
            <uniqueIdentifier>
              <entityUniqueIdentifierType>F</entityUniqueIdentifierType>
              <entityUniqueIdentifierValue>JHNDOE00A01F205N</entityUniqueIdentifierValue>
            </uniqueIdentifier>
            <fullName>John Doe</fullName>
            <streetName>street</streetName>
            <civicNumber>12</civicNumber>
            <postalCode>89020</postalCode>
            <city>city</city>
            <stateProvinceRegion>MI</stateProvinceRegion>
            <country>IT</country>
            <e-mail>john.doe@test.it</e-mail>
          </payer>
          <paymentMethod>creditCard</paymentMethod>
          <fee>2.00</fee>
          <paymentDateTime>2021-10-01T17:48:22</paymentDateTime>
          <applicationDate>2021-10-01</applicationDate>
          <transferDate>2021-10-02</transferDate>
          <metadata>
            <mapEntry>
              <key>keytest</key>
              <value>1</value>
            </mapEntry>
          </metadata>
          <standin>false</standin>
        </receipt>
      </pafn:paSendRTReq>
    </soapenv:Body>
  </soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
    <paf:paSendRTRes>
      <outcome>OK</outcome>
    </paf:paSendRTRes>
  </soapenv:Body>
</soapenv:Envelope
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, da inserire obbligatoriamente in caso di _outcome_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## paSendRT versione 2

<mark style="color:green;">`POST`</mark>&#x20;

**In questa versione possono essere inseriti i metadata in ogni singolo **_**transfer**_** della **_**receipt,**_** inoltre sono gestite le informazioni ricavate da** [gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")**e il servizio @e.bollo.**

#### Request Body

| Name                                                          | Type    | Description                                                                                                                                                                                            |
| ------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| idPA<mark style="color:red;">\*</mark>                        | String  | codice fiscale della struttura che invia la richiesta di pagamento                                                                                                                                     |
| idBrokerPA<mark style="color:red;">\*</mark>                  | String  | identificativo del soggetto che opera come intermediario per l'EC                                                                                                                                      |
| idStation<mark style="color:red;">\*</mark>                   | String  | identificativo della stazione dell'EC nel sistema pagoPa                                                                                                                                               |
| receipt<mark style="color:red;">\*</mark>                     | String  | la ricevuta di pagamento                                                                                                                                                                               |
| receiptId<mark style="color:red;">\*</mark>                   | String  | identificatore univoco della _receipt_ contiene il _paymentToken_ assegnato da pagoPa                                                                                                                  |
| noticeNumber<mark style="color:red;">\*</mark>                | String  | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]                                                                                                                                                |
| fiscalCode<mark style="color:red;">\*</mark>                  | String  | codice fiscale dell'EC                                                                                                                                                                                 |
| outcome<mark style="color:red;">\*</mark>                     | String  | il risultato dell'operazione che può contenere i codici OK o KO                                                                                                                                        |
| creditorReferenceId<mark style="color:red;">\*</mark>         | String  | **IUV** _Identificativo Univoco Versamento_                                                                                                                                                            |
| paymentAmount<mark style="color:red;">\*</mark>               | String  | importo espresso in euro                                                                                                                                                                               |
| description<mark style="color:red;">\*</mark>                 | String  |                                                                                                                                                                                                        |
| companyName<mark style="color:red;">\*</mark>                 | String  | nome completo dell'EC                                                                                                                                                                                  |
| officeName                                                    | String  |                                                                                                                                                                                                        |
| debtor<mark style="color:red;">\*</mark>                      | String  | individua il debitore a cui si riferisce la posizione debitoria                                                                                                                                        |
| uniqueIdentifier<mark style="color:red;">\*</mark>            | String  |                                                                                                                                                                                                        |
| entityUniqueIdentifierType<mark style="color:red;">\*</mark>  | String  | <p><strong>F</strong> : Persona fisica</p><p><strong>G</strong> : Persona giuridica</p>                                                                                                                |
| entityUniqueIdentifierValue<mark style="color:red;">\*</mark> | String  | codice fiscale o partita IVA                                                                                                                                                                           |
| fullName<mark style="color:red;">\*</mark>                    | String  | nome completo del debitore                                                                                                                                                                             |
| streetName                                                    | String  |                                                                                                                                                                                                        |
| civicNumber                                                   | String  |                                                                                                                                                                                                        |
| postalCode                                                    | String  |                                                                                                                                                                                                        |
| city                                                          | String  |                                                                                                                                                                                                        |
| stateProvinceRegion                                           | String  |                                                                                                                                                                                                        |
| country                                                       | String  |                                                                                                                                                                                                        |
| e-mail                                                        | String  |                                                                                                                                                                                                        |
| transferList<mark style="color:red;">\*</mark>                | String  | struttura che contiene i dettagli dei _transfer_                                                                                                                                                       |
| transfer<mark style="color:red;">\*</mark>                    | String  |                                                                                                                                                                                                        |
| idTransfer<mark style="color:red;">\*</mark>                  | String  | indice della lista (da 1 a 5)                                                                                                                                                                          |
| transferAmount<mark style="color:red;">\*</mark>              | String  | importo                                                                                                                                                                                                |
| fiscalCodePA<mark style="color:red;">\*</mark>                | String  | codice fiscale dell'EC                                                                                                                                                                                 |
| companyName                                                   | String  | nome completo dell'EC                                                                                                                                                                                  |
| IBAN                                                          | String  | IBAN sul quale sarà effettuato il riversamento                                                                                                                                                         |
| remittanceInformation<mark style="color:red;">\*</mark>       | String  | motivo del pagamento                                                                                                                                                                                   |
| transferCategory<mark style="color:red;">\*</mark>            | String  | codice tassonomico, composto da _Codice tipo Ente Creditore + Progressivo macro area + Codice tipologia servizio + Motivo Giuridico_ ( ex. **0101002IM** )                                             |
| metadata                                                      | String  |                                                                                                                                                                                                        |
| mapEntry                                                      | String  |                                                                                                                                                                                                        |
| key                                                           | String  |                                                                                                                                                                                                        |
| value<mark style="color:red;">\*</mark>                       | String  |                                                                                                                                                                                                        |
| idPSP<mark style="color:red;">\*</mark>                       | String  | identificativo del PSP                                                                                                                                                                                 |
| pspFiscalCode                                                 | String  |                                                                                                                                                                                                        |
| pspPartitaIVA                                                 | String  |                                                                                                                                                                                                        |
| PSPCompanyName<mark style="color:red;">\*</mark>              | String  |                                                                                                                                                                                                        |
| idChannel<mark style="color:red;">\*</mark>                   | String  |                                                                                                                                                                                                        |
| channelDescription<mark style="color:red;">\*</mark>          | String  |                                                                                                                                                                                                        |
| payer                                                         | String  | individua il pagatore                                                                                                                                                                                  |
| uniqueIdentifier<mark style="color:red;">\*</mark>            | String  |                                                                                                                                                                                                        |
| entityUniqueIdentifierType<mark style="color:red;">\*</mark>  | String  | <p><strong>F</strong> : Persona fisica</p><p><strong>G</strong> : Persona giuridica</p>                                                                                                                |
| entityUniqueIdentifierValue<mark style="color:red;">\*</mark> | String  | codice fiscale o partita IVA                                                                                                                                                                           |
| fullName<mark style="color:red;">\*</mark>                    | String  | nome completo del debitore                                                                                                                                                                             |
| streetName                                                    | String  |                                                                                                                                                                                                        |
| civicNumber                                                   | String  |                                                                                                                                                                                                        |
| postalCode                                                    | String  |                                                                                                                                                                                                        |
| city                                                          | String  |                                                                                                                                                                                                        |
| stateProvinceRegion                                           | String  |                                                                                                                                                                                                        |
| country                                                       | String  |                                                                                                                                                                                                        |
| e-mail                                                        | String  |                                                                                                                                                                                                        |
| paymentMethod                                                 | String  |                                                                                                                                                                                                        |
| fee                                                           | String  | importo della commissione espresso in euro                                                                                                                                                             |
| primaryCiIncurredFee                                          | String  | importo della commissione a carico dell'EC espresso in euro ricavato da [gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")                                                   |
| idBundle                                                      | String  | identificativo del pacchetto di [gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")                                                                                           |
| idCiBundle                                                    | String  | identificativo degli attributi aggiunti dall'EC al pacchetto di [gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")                                                           |
| paymentDateTime                                               | String  | data e ora del pagamento                                                                                                                                                                               |
| applicationDate                                               | String  | data applicativa                                                                                                                                                                                       |
| transferDate                                                  | String  | data del riversamento                                                                                                                                                                                  |
| metadata                                                      | String  |                                                                                                                                                                                                        |
| mapEntry                                                      | String  |                                                                                                                                                                                                        |
| key                                                           | String  |                                                                                                                                                                                                        |
| value                                                         | String  |                                                                                                                                                                                                        |
| CHOICE<mark style="color:red;">\*</mark>                      | String  | Choice tra IBAN e marcaDaBollo                                                                                                                                                                         |
| tipoBollo                                                     | String  | Tipologia del bollo                                                                                                                                                                                    |
| marcaDaBollo                                                  | String  | I dati della marca da bollo digitale                                                                                                                                                                   |
| MBDAttachment                                                 | String  | Il documento XML che contiene la marca da bollo digitale, nel formato base64.                                                                                                                          |
| paymentNote                                                   | String  | Descrizione del pagamento. Valorizzato con _idCart_, nel caso il parametro  venisse valorizzato nel [pagamento-presso-frontend-dellec.md](../casi-duso/pagamento-presso-frontend-dellec.md "mention")  |
| standin                                                       | Boolean | true: pagamento avvenuto in Stand in                                                                                                                                                                   |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
  <soapenv:Envelope>
    <soapenv:Body>
      <pafn:paSendRTReq>
        <idPA>77777777777</idPA>
        <idBrokerPA>77777777777</idBrokerPA>
        <idStation>77777777777_01</idStation>
        <receipt>
          <receiptId>c110729d258c4ab1b765fe902aae41d6</receiptId>
          <noticeNumber>311111111112222222</noticeNumber>
          <fiscalCode>77777777777</fiscalCode>
          <outcome>OK</outcome>
          <creditorReferenceId>11111111112222222</creditorReferenceId>
          <paymentAmount>30.00</paymentAmount>
          <description>test</description>
          <companyName>company EC1</companyName>
          <officeName>office EC</officeName>
          <debtor>
            <uniqueIdentifier>
              <entityUniqueIdentifierType>F</entityUniqueIdentifierType>
              <entityUniqueIdentifierValue>JHNDOE00A01F205N</entityUniqueIdentifierValue>
            </uniqueIdentifier>
            <fullName>John Doe</fullName>
            <streetName>street</streetName>
            <civicNumber>12</civicNumber>
            <postalCode>89020</postalCode>
            <city>city</city>
            <stateProvinceRegion>MI</stateProvinceRegion>
            <country>IT</country>
            <e-mail>john.doe@test.it</e-mail>
          </debtor>
          <transferList>
            <transfer>
              <idTransfer>1</idTransfer>
              <transferAmount>20.00</transferAmount>
              <fiscalCodePA>77777777777</fiscalCodePA>
              <companyName>company EC1</companyName>
              <IBAN>IT0000000000000000000000000</IBAN>
              <remittanceInformation>remittanceInformation1</remittanceInformation>
              <transferCategory>0101100IM</transferCategory>
              <metadata>
                <mapEntry>
                  <key>keytest</key>
                  <value>1</value>
                </mapEntry>
              </metadata>            
            </transfer>
            <transfer>
              <idTransfer>2</idTransfer>
              <transferAmount>10.00</transferAmount>
              <fiscalCodePA>77777777778</fiscalCodePA>
              <companyName>company EC2</companyName>
              <IBAN>IT0000000000000000000000001</IBAN>
              <remittanceInformation>remittanceInformation2</remittanceInformation>
              <transferCategory>0201102IM</transferCategory>
            </transfer>
          </transferList>
          <idPSP>88888888888</idPSP>
          <pspFiscalCode>88888888888</pspFiscalCode>
          <pspPartitaIVA>88888888888</pspPartitaIVA>
          <PSPCompanyName>PSP name</PSPCompanyName>
          <idChannel>88888888888_01</idChannel>
          <channelDescription>app</channelDescription>
          <payer>
            <uniqueIdentifier>
              <entityUniqueIdentifierType>F</entityUniqueIdentifierType>
              <entityUniqueIdentifierValue>JHNDOE00A01F205N</entityUniqueIdentifierValue>
            </uniqueIdentifier>
            <fullName>John Doe</fullName>
            <streetName>street</streetName>
            <civicNumber>12</civicNumber>
            <postalCode>89020</postalCode>
            <city>city</city>
            <stateProvinceRegion>MI</stateProvinceRegion>
            <country>IT</country>
            <e-mail>john.doe@test.it</e-mail>
          </payer>
          <paymentMethod>creditCard</paymentMethod>
          <fee>2.00</fee>
          <primaryCiIncurredFee>0.50</primaryCiIncurredFee>
          <idBundle>1</idBundle>
          <idCiBundle>2</idCiBundle>
          <paymentDateTime>2021-10-01T17:48:22</paymentDateTime>
          <applicationDate>2021-10-01</applicationDate>
          <transferDate>2021-10-02</transferDate>
          <metadata>
            <mapEntry>
              <key>keytest</key>
              <value>1</value>
            </mapEntry>
          </metadata>
          <standin>false</standin>
        </receipt>
      </pafn:paSendRTReq>
    </soapenv:Body>
  </soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
    <paf:paSendRTRes>
      <outcome>OK</outcome>
    </paf:paSendRTRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, da inserire obbligatoriamente in caso di _outcome_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## verifyPaymentNotice

## verifyPaymentNotice

<mark style="color:green;">`POST`</mark>&#x20;

#### Request Body

| Name                                           | Type   | Description                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPSP<mark style="color:red;">\*</mark>        | String | <p>Identificativo del PSP, assegnato da PagoPA.</p><p>Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.</p><p>In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.</p> |
| idBrokerPSP<mark style="color:red;">\*</mark>  | String | <p>Identificativo dell'intermediario, assegnato da PagoPA.</p><p>Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.</p><p>Nota: l'intermediario/broker può coincidere con il PSP stesso.</p>                                        |
| idChannel<mark style="color:red;">\*</mark>    | String | <p>Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.</p><p>Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.</p>                         |
| qrCode<mark style="color:red;">\*</mark>       | String | è composto da _fiscalCode_ e _noticeNumber._                                                                                                                                                                                                                                                             |
| fiscalCode<mark style="color:red;">\*</mark>   | String | codice fiscale dell'EC.                                                                                                                                                                                                                                                                                  |
| noticeNumber<mark style="color:red;">\*</mark> | String | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]                                                                                                                                                                                                                                                  |
| password<mark style="color:red;">\*</mark>     | String | Password del canale, assegnata da PagoPA.                                                                                                                                                                                                                                                                |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
  <soapenv:Envelope>
    <soapenv:Body>
      <nod:verifyPaymentNoticeReq>
        <idPSP>88888888888</idPSP>
        <idBrokerPSP>88888888888</idBrokerPSP>
        <idChannel>88888888888_01</idChannel>
        <password>**********</password>
        <qrCode>
          <fiscalCode>77777777777</fiscalCode>
          <noticeNumber>311111111112222222</noticeNumber>
        </qrCode>
      </nod:verifyPaymentNoticeReq>
    </soapenv:Body>
  </soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
    <nfpsp:verifyPaymentNoticeRes>
      <outcome>OK</outcome>
      <paymentList>
        <paymentOptionDescription>
          <amount>30.00</amount>
          <options>EQ</options>
          <paymentNote>test</paymentNote>
        </paymentOptionDescription>
      </paymentList>
      <paymentDescription>payment</paymentDescription>
      <fiscalCodePA>77777777777</fiscalCodePA>
      <companyName>company EC</companyName>
      <officeName>office EC</officeName>
      <standin>false</standin>
    </nfpsp:verifyPaymentNoticeRes>
  </soapenv:Body>
</soapenv:Envelope> 
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _outcome_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* paymentList: struttura che contiene i dettagli del pagamento, al momento può contenere una sola _paymentOptionDescription_, dato valorizzato solo in caso di _outcome_ OK
  * paymentOptionDescription﹡
    * amount﹡: importo in euro
    * options﹡: al momento è valorizzato con _EQ_
    * dueDate: data di scadenza del pagamento secondo il formato ISO 8601 \[AAAA]-\[MM]-\[GG]
    * paymentNote: testo libero per descrivere l'oggetto del pagamento
* paymentDescription: testo libero per descrivere l'oggetto del pagamento, dato valorizzato solo in caso di _outcome_ OK
* fiscalCodePA: codice fiscale dell'EC, dato valorizzato solo in caso di _outcome_ OK
* companyName: nome completo dell'EC, dato valorizzato solo in caso di _outcome_ OK
* officeName: nome completo dell'ufficio dell'EC
* standin: true in caso di pagamento avvenuto in Stand in
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## verificaBollettino

## verificaBollettino

<mark style="color:green;">`POST`</mark>&#x20;

#### Request Body

| Name                                           | Type   | Description                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPSP<mark style="color:red;">\*</mark>        | String | <p>Identificativo del PSP, assegnato da PagoPA.</p><p>Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.</p><p>In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.</p> |
| idBrokerPSP<mark style="color:red;">\*</mark>  | String | <p>Identificativo dell'intermediario, assegnato da PagoPA.</p><p>Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.</p><p>Nota: l'intermediario/broker può coincidere con il PSP stesso.</p>                                        |
| idChannel<mark style="color:red;">\*</mark>    | String | <p>Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.</p><p>Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.</p>                         |
| ccPost<mark style="color:red;">\*</mark>       | String | conto corrente postale dell'EC.                                                                                                                                                                                                                                                                          |
| noticeNumber<mark style="color:red;">\*</mark> | String | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]                                                                                                                                                                                                                                                  |
| password<mark style="color:red;">\*</mark>     | String | Password del canale, assegnata da PagoPA.                                                                                                                                                                                                                                                                |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
  <soapenv:Envelope>
    <soapenv:Body>
      <nod:verificaBollettinoReq>
        <idPSP>88888888888</idPSP>
        <idBrokerPSP>88888888888</idBrokerPSP>
        <idChannel>88888888888_01</idChannel>
        <password>**********</password>
        <ccPost>012345678912</ccPost>
        <noticeNumber>311111111112222222</noticeNumber>
      </nod:verificaBollettinoReq>
    </soapenv:Body>
  </soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
    <nfpsp:verificaBollettinoRes>
      <outcome>OK</outcome>
      <paymentBollettinoList>
        <paymentOptionDescription>
          <amount>30.00</amount>
          <options>EQ</options>
          <dueDate>2021-12-31</dueDate>
          <paymentNote>test</paymentNote>
          <allCCP>true</allCCP>
        </paymentOptionDescription>
      </paymentBollettinoList>
      <paymentDescription>payment</paymentDescription>
      <fiscalCodePA>77777777777</fiscalCodePA>
      <noticeNumber>311111111112222222</noticeNumber>
      <companyName>company EC</companyName>
      <officeName>office EC</officeName>
      <standin>false</standin>
    </nfpsp:verificaBollettinoRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _outcome_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* paymentBollettinoList: struttura che contiene i dettagli del pagamento, al momento può contenere una sola _paymentOptionDescription_, dato valorizzato solo in caso di _outcome_ OK, dato valorizzato solo in caso di _outcome_ OK
  * paymentOptionDescription﹡
    * amount﹡: importo in euro
    * options﹡: al momento è valorizzato con _EQ_
    * dueDate: data di scadenza del pagamento secondo il formato ISO 8601 \[AAAA]-\[MM]-\[GG]
    * paymentNote: testo libero per descrivere l'oggetto del pagamento
    * allCCP﹡: se TRUE indica che tutti i bonifici sono associabili a IBAN postali
* paymentDescription: testo libero per descrivere l'oggetto del pagamento
* fiscalCodePA: codice fiscale dell'EC, dato valorizzato solo in caso di _outcome_ OK
* noticeNumber: \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit], dato valorizzato solo in caso di _outcome_ OK
* companyName: nome completo dell'EC, dato valorizzato solo in caso di _outcome_ OK
* officeName: nome completo dell'ufficio dell'EC
* standin: true in caso di pagamento avvenuto in Stand in
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## activatePaymentNotice <a href="#activatepaymentnotice" id="activatepaymentnotice"></a>

## activatePaymentNotice versione 1

<mark style="color:green;">`POST`</mark>&#x20;

#### Request Body

| Name                                           | Type   | Description                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPSP<mark style="color:red;">\*</mark>        | String | <p>Identificativo del PSP, assegnato da PagoPA.</p><p>Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.</p><p>In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.</p>                                                                   |
| idBrokerPSP<mark style="color:red;">\*</mark>  | String | <p>Identificativo dell'intermediario, assegnato da PagoPA.</p><p>Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.</p><p>Nota: l'intermediario/broker può coincidere con il PSP stesso.</p>                                                                                                          |
| idChannel<mark style="color:red;">\*</mark>    | String | <p>Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.</p><p>Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.</p>                                                                                           |
| qrCode<mark style="color:red;">\*</mark>       | String | E' composto da _fiscalCode_ e _noticeNumber._                                                                                                                                                                                                                                                                                                                              |
| fiscalCode<mark style="color:red;">\*</mark>   | String | Codice fiscale dell'EC.                                                                                                                                                                                                                                                                                                                                                    |
| noticeNumber<mark style="color:red;">\*</mark> | String | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]                                                                                                                                                                                                                                                                                                                    |
| password<mark style="color:red;">\*</mark>     | String | Password del canale, assegnata da PagoPA.                                                                                                                                                                                                                                                                                                                                  |
| idempotencyKey                                 |        | Chiave di idempotenza                                                                                                                                                                                                                                                                                                                                                      |
| expirationTime                                 | String | <p>Tempo di scadenza del token ( ms ), max 30 minuti.</p><p>La durata del token di pagamento può essere impostata in 2 modi:</p><p> - Implicitamente dalla piattaforma pagoPA, se non è impostato nella richiesta di activatePaymentNotice (valore di default durata = 30 minuti)</p><p> - Esplicitamente dal PSP, se impostato in richiesta all'activatePaymentNotice</p> |
| paymentNote                                    | String | Testo libero per descrivere l'oggetto del pagamento                                                                                                                                                                                                                                                                                                                        |
| dueDate                                        | String | data di scadenza del pagamento secondo il formato ISO 8601 \[AAAA]-\[MM]-\[GG]                                                                                                                                                                                                                                                                                             |
| amount<mark style="color:red;">\*</mark>       | String | Importo in euro                                                                                                                                                                                                                                                                                                                                                            |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
  <soapenv:Envelope>
    <soapenv:Body>
      <nod:activatePaymentNoticeReq>
        <idPSP>88888888888</idPSP>
        <idBrokerPSP>88888888888</idBrokerPSP>
        <idChannel>88888888888_01</idChannel>
        <password>**********</password>
        <idempotencyKey>70000000001_100149bdWB</idempotencyKey>
        <qrCode>
          <fiscalCode>77777777777</fiscalCode>
          <noticeNumber>311111111112222222</noticeNumber>
        </qrCode>
        <expirationTime>6000</expirationTime>
        <amount>30.00</amount>
      </nod:activatePaymentNoticeReq>
    </soapenv:Body>
  </soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
    <nfpsp:activatePaymentNoticeRes>
      <outcome>OK</outcome>
      <totalAmount>30.00</totalAmount>
      <paymentDescription>test</paymentDescription>
      <fiscalCodePA>77777777777</fiscalCodePA>
      <companyName>company EC</companyName>
      <officeName>office EC</officeName>
      <paymentToken>c110729d258c4ab1b765fe902aae41d6</paymentToken>
      <transferList>
        <transfer>
          <idTransfer>1</idTransfer>
          <transferAmount>20.00</transferAmount>
          <fiscalCodePA>77777777777</fiscalCodePA>
          <IBAN>IT0000000000000000000000000</IBAN>
          <remittanceInformation>remittanceInformation1</remittanceInformation>
        </transfer>
        <transfer>
          <idTransfer>2</idTransfer>
          <transferAmount>10.00</transferAmount>
          <fiscalCodePA>77777777778</fiscalCodePA>
          <IBAN>IT0000000000000000000000001</IBAN>
          <remittanceInformation>remittanceInformation2</remittanceInformation>
        </transfer>
      </transferList>
      <creditorReferenceId>11111111112222222</creditorReferenceId>
      <standin>false</standin>
    </nfpsp:activatePaymentNoticeRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _outcome_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* totalAmount: rappresenta la somma degli importi dei singoli transfer, dato valorizzato solo in caso di _outcome_ OK
* paymentDescription: testo libero per descrivere l'oggetto del pagamento, dato valorizzato solo in caso di _outcome_ OK
* fiscalCodePA: codice fiscale dell'EC, dato valorizzato solo in caso di _outcome_ OK
* companyName: nome completo dell'EC, dato valorizzato solo in caso di _outcome_ OK
* officeName: nome completo dell'ufficio dell'EC
* paymentToken: viene generato dal sistema durante la fase di attivazione del pagamento, è l'identificatore di correlazione da abbinare all'attivazione e all'esito del pagamento, dato valorizzato solo in caso di _outcome_ OK
* transferList: struttura che contiene i dettagli dei transfer pagamento, al momento i transfer possono essere al massimo 5, dato valorizzato solo in caso di _outcome_ OK
  * transfer﹡
    * idTransfer﹡: valori ammessi da 1 a 5
    * transferAmount﹡: importo in euro
    * fiscalCodePA﹡: codice fiscale dell'Ente beneficiario
    * IBAN﹡: IBAN sul quale verra riversato l'importo
    * remittanceInformation﹡: testo libero per descrivere l'oggetto del pagamento
* creditorReferenceId: **IUV** Identificativo Univoco Versamento, dato valorizzato solo in caso di _outcome_ OK
* standin: true in caso di pagamento avvenuto in Stand in
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## activatePaymentNotice versione 2

<mark style="color:green;">`POST`</mark>&#x20;

**In questa versione è possibile far transitare i metadata per ogni **_**payment**_** e in ogni singolo **_**transfer**_** della response, inoltre sono gestite le informazioni ricavate da** [gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention").

#### Request Body

| Name                                           | Type   | Description                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPSP<mark style="color:red;">\*</mark>        | String | <p>Identificativo del PSP, assegnato da PagoPA.</p><p>Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.</p><p>In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.</p>                                                                   |
| idBrokerPSP<mark style="color:red;">\*</mark>  | String | <p>Identificativo dell'intermediario, assegnato da PagoPA.</p><p>Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.</p><p>Nota: l'intermediario/broker può coincidere con il PSP stesso.</p>                                                                                                          |
| idChannel<mark style="color:red;">\*</mark>    | String | <p>Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.</p><p>Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.</p>                                                                                           |
| qrCode<mark style="color:red;">\*</mark>       | String | E' composto da _fiscalCode_ e _noticeNumber._                                                                                                                                                                                                                                                                                                                              |
| fiscalCode<mark style="color:red;">\*</mark>   | String | Codice fiscale dell'EC.                                                                                                                                                                                                                                                                                                                                                    |
| noticeNumber<mark style="color:red;">\*</mark> | String | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]                                                                                                                                                                                                                                                                                                                    |
| password<mark style="color:red;">\*</mark>     | String | Password del canale, assegnata da PagoPA.                                                                                                                                                                                                                                                                                                                                  |
| idempotencyKey                                 |        | Chiave di idempotenza                                                                                                                                                                                                                                                                                                                                                      |
| expirationTime                                 | String | <p>Tempo di scadenza del token ( ms ), max 30 minuti.</p><p>La durata del token di pagamento può essere impostata in 2 modi:</p><p> - Implicitamente dalla piattaforma pagoPA, se non è impostato nella richiesta di activatePaymentNotice (valore di default durata = 30 minuti)</p><p> - Esplicitamente dal PSP, se impostato in richiesta all'activatePaymentNotice</p> |
| paymentNote                                    | String | Testo libero per descrivere l'oggetto del pagamento                                                                                                                                                                                                                                                                                                                        |
| dueDate                                        | String | data di scadenza del pagamento secondo il formato ISO 8601 \[AAAA]-\[MM]-\[GG]                                                                                                                                                                                                                                                                                             |
| amount<mark style="color:red;">\*</mark>       | String | Importo in euro                                                                                                                                                                                                                                                                                                                                                            |
| allCCP                                         | String | ad uso interno per i servizi PagoPA                                                                                                                                                                                                                                                                                                                                        |
|                                                | String |                                                                                                                                                                                                                                                                                                                                                                            |
| paymentMethod                                  | String | metodo di pagamento                                                                                                                                                                                                                                                                                                                                                        |
| touchPoint                                     | String | touchpoint utilizzato per il pagamento (es. POS fisico, ATM, ..)                                                                                                                                                                                                                                                                                                           |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
  <soapenv:Envelope>
    <soapenv:Body>
      <nod:activatePaymentNoticeReq>
        <idPSP>88888888888</idPSP>
        <idBrokerPSP>88888888888</idBrokerPSP>
        <idChannel>88888888888_01</idChannel>
        <password>**********</password>
        <idempotencyKey>70000000001_100149bdWB</idempotencyKey>
        <qrCode>
          <fiscalCode>77777777777</fiscalCode>
          <noticeNumber>311111111112222222</noticeNumber>
        </qrCode>
        <expirationTime>6000</expirationTime>
        <amount>30.00</amount>
      </nod:activatePaymentNoticeReq>
    </soapenv:Body>
  </soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
    <nfpsp:activatePaymentNoticeRes>
      <outcome>OK</outcome>
      <totalAmount>30.00</totalAmount>
      <paymentDescription>test</paymentDescription>
      <fiscalCodePA>77777777777</fiscalCodePA>
      <companyName>company EC</companyName>
      <officeName>office EC</officeName>
      <paymentToken>c110729d258c4ab1b765fe902aae41d6</paymentToken>
      <transferList>
        <transfer>
          <idTransfer>1</idTransfer>
          <transferAmount>20.00</transferAmount>
          <fiscalCodePA>77777777777</fiscalCodePA>
          <companyName>Test EC</companyName>
          <IBAN>IT0000000000000000000000000</IBAN>
          <remittanceInformation>remittanceInformation1</remittanceInformation>
          <transferCategory>0101100IM</transferCategory>
          <metadata>
            <mapEntry>
              <key>keytest1</key>
              <value>1</value>
            </mapEntry>
          </metadata>        
        </transfer>
        <transfer>
          <idTransfer>2</idTransfer>
          <transferAmount>10.00</transferAmount>
          <fiscalCodePA>77777777778</fiscalCodePA>
          <companyName>Test EC 2</companyName>
          <IBAN>IT0000000000000000000000001</IBAN>
          <remittanceInformation>remittanceInformation2</remittanceInformation>
          <transferCategory>0201102IM</transferCategory>
        </transfer>
        <metadata>
          <mapEntry>
            <key>keytest2</key>
            <value>2</value>
          </mapEntry>
        </metadata> 
      </transferList>
      <creditorReferenceId>11111111112222222</creditorReferenceId>
      <suggestedUserFee>1.00</suggestedUserFee>
      <suggestedPaFee>0.50</suggestedPaFee>
      <suggestedIdBundle>1</suggestedIdBundle>
      <suggestedIdCiBundle>2</suggestedIdCiBundle>
      <standin>false</standin>
    </nfpsp:activatePaymentNoticeRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _outcome_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* totalAmount: rappresenta la somma degli importi dei singoli transfer, dato valorizzato solo in caso di _outcome_ OK
* paymentDescription: testo libero per descrivere l'oggetto del pagamento, dato valorizzato solo in caso di _outcome_ OK
* fiscalCodePA: codice fiscale dell'EC, dato valorizzato solo in caso di _outcome_ OK
* companyName: nome completo dell'EC, dato valorizzato solo in caso di _outcome_ OK
* officeName: nome completo dell'ufficio dell'EC
* paymentToken: viene generato dal sistema durante la fase di attivazione del pagamento, è l'identificatore di correlazione da abbinare all'attivazione e all'esito del pagamento, dato valorizzato solo in caso di _outcome_ OK
* transferList: struttura che contiene i dettagli dei transfer pagamento, al momento i transfer possono essere al massimo 5, dato valorizzato solo in caso di _outcome_ OK
  * transfer﹡
    * idTransfer﹡: valori ammessi da 1 a 5
    * transferAmount﹡: importo in euro
    * fiscalCodePA﹡: codice fiscale dell'Ente beneficiario
    * companyName: nome completo dell'EC, dato valorizzato solo in caso di _outcome_ OK
    * IBAN﹡: IBAN sul quale verra riversato l'importo
    * remittanceInformation﹡: testo libero per descrivere l'oggetto del pagamento
    * transferCategory﹡: codice tassonomico, composto da _Codice tipo Ente Creditore + Progressivo macro area + Codice tipologia servizio + Motivo Giuridico_ ( ex. **0101002IM** )&#x20;
    * metadata: è un campo di archiviazione chiave/valore.
      * mapEntry﹡
        * key﹡
        * value﹡
* creditorReferenceId: **IUV** Identificativo Univoco Versamento, dato valorizzato solo in caso di _outcome_ OK
* suggestedUserFee: importo della commissione espresso in euro ricavato da [gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")
* suggestedPaFee: importo della commissione a carico dell'EC espresso in euro ricavato da [gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")
* suggestedIdBundle: identificativo del pacchetto di [gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")
* suggestedIdCiBundle: identificativo degli attributi aggiunti dall'EC al pacchetto di [gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")
* standin: true in caso di pagamento avvenuto in Stand in
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## sendPaymentOutcome <a href="#sendpaymentoutcome" id="sendpaymentoutcome"></a>

## sendPaymentOutcome versione 1

<mark style="color:green;">`POST`</mark>&#x20;

#### Request Body

| Name                                                          | Type   | Description                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPSP<mark style="color:red;">\*</mark>                       | String | <p>identificativo del PSP, assegnato da PagoPA.</p><p>Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.</p><p>In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.</p> |
| details                                                       | String | Dettagli del risultato dell'operazione, da inserire obbligatoriamente in caso di _outcome_ OK                                                                                                                                                                                                            |
| outcome<mark style="color:red;">\*</mark>                     | String | <p></p><p> Il risultato dell'operazione che può contenere i seguenti codici</p><p><strong>OK</strong> : operazione eseguita con successo</p><p><strong>KO</strong> : operazione terminata con errore</p>                                                                                                 |
| paymentToken<mark style="color:red;">\*</mark>                | String | Viene generato dal sistema durante la fase di attivazione del pagamento, è l'identificatore di correlazione da abbinare all'attivazione e all'esito del pagamento.                                                                                                                                       |
| password<mark style="color:red;">\*</mark>                    | String | Password del canale, assegnata da PagoPA.                                                                                                                                                                                                                                                                |
| idChannel<mark style="color:red;">\*</mark>                   | String | <p>identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.</p><p>Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.</p>                         |
| idBrokerPSP<mark style="color:red;">\*</mark>                 | String | <p>identificativo dell'intermediario, assegnato da PagoPA.</p><p>Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.</p><p>Nota: l'intermediario/broker può coincidere con il PSP stesso.</p>                                        |
| payer                                                         | String | individua il pagatore                                                                                                                                                                                                                                                                                    |
| fee<mark style="color:red;">\*</mark>                         | String | importo della commissione pagata in euro                                                                                                                                                                                                                                                                 |
| paymentChannel                                                | String | <p>canale di pagamento</p><p>enum: "frontOffice" "atm" "onLine" "app" "other"</p>                                                                                                                                                                                                                        |
| paymentMethod<mark style="color:red;">\*</mark>               | String | <p>metodo di pagamento</p><p>enum: "cash" "creditCard" "bancomat" "other"</p>                                                                                                                                                                                                                            |
| transferDate<mark style="color:red;">\*</mark>                | String | data del riversamento verso l'EC                                                                                                                                                                                                                                                                         |
| applicationDate<mark style="color:red;">\*</mark>             | String | data applicativa del pagamento                                                                                                                                                                                                                                                                           |
| e-mail	                                                       | String |                                                                                                                                                                                                                                                                                                          |
| country                                                       | String |                                                                                                                                                                                                                                                                                                          |
| stateProvinceRegion                                           | String |                                                                                                                                                                                                                                                                                                          |
| city                                                          | String |                                                                                                                                                                                                                                                                                                          |
| postalCode                                                    | String |                                                                                                                                                                                                                                                                                                          |
| civicNumber                                                   | String |                                                                                                                                                                                                                                                                                                          |
| streetName                                                    | String |                                                                                                                                                                                                                                                                                                          |
| fullName<mark style="color:red;">\*</mark>                    | String | nome completo del pagatore                                                                                                                                                                                                                                                                               |
| uniqueIdentifier<mark style="color:red;">\*</mark>            | String |                                                                                                                                                                                                                                                                                                          |
| entityUniqueIdentifierValue<mark style="color:red;">\*</mark> | String | codice fiscale o partita IVA, nel caso non siano disponibili è possibile utilizzare 'ANONIMO'                                                                                                                                                                                                            |
| entityUniqueIdentifierType<mark style="color:red;">\*</mark>  | String | <p><strong>F</strong> : Persona fisica</p><p><strong>G</strong> : Persona giuridica</p>                                                                                                                                                                                                                  |
| idempotencyKey                                                | String | Chiave di idempotenza.                                                                                                                                                                                                                                                                                   |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
  <soapenv:Envelope>
    <soapenv:Body>
        <nod:sendPaymentOutcomeReq>
          <idPSP>88888888888</idPSP>
          <idBrokerPSP>88888888888</idBrokerPSP>
          <idChannel>88888888888_01</idChannel>
          <password>**********</password>
          <idempotencyKey>70000000001_100149bdWB</idempotencyKey>
          <paymentToken>c110729d258c4ab1b765fe902aae41d6</paymentToken>
          <outcome>OK</outcome>
          <details>
              <paymentMethod>creditCard</paymentMethod>
              <paymentChannel>app</paymentChannel>
              <fee>2.00</fee>
              <payer>
                <uniqueIdentifier>
                    <entityUniqueIdentifierType>F</entityUniqueIdentifierType>
                    <entityUniqueIdentifierValue>JHNDOE00A01F205N</entityUniqueIdentifierValue>
                </uniqueIdentifier>
                <fullName>John Doe</fullName>
                <streetName>street</streetName>
                <civicNumber>12</civicNumber>
                <postalCode>89020</postalCode>
                <city>city</city>
                <stateProvinceRegion>MI</stateProvinceRegion>
                <country>IT</country>
                <e-mail>john.doe@test.it</e-mail>
              </payer>
              <applicationDate>2021-10-01</applicationDate>
              <transferDate>2021-10-02</transferDate>
          </details>
        </nod:sendPaymentOutcomeReq>
    </soapenv:Body>
  </soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
    <nfpsp:sendPaymentOutcomeRes>
      <outcome>OK</outcome>
    </nfpsp:sendPaymentOutcomeRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, da inserire obbligatoriamente in caso di _outcome_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## sendPaymentOutcome versione 2

<mark style="color:green;">`POST`</mark>&#x20;

**Utilizzata per il pagamento attivato presso il frontend dell'EC, rispetto alla versione 1 permette di inviare l'outcome di più payment tokens contemporaneamente, inoltre sono gestite le informazioni ricavate da** [gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")**e il servizio @e.bollo.**

#### Request Body

| Name                                                          | Type   | Description                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPSP<mark style="color:red;">\*</mark>                       | String | <p>Identificativo del PSP, assegnato da PagoPA.</p><p>Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.</p><p>In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.</p> |
| details                                                       | String | dettagli del risultato dell'operazione, da inserire obbligatoriamente in caso di _outcome_ OK                                                                                                                                                                                                            |
| outcome<mark style="color:red;">\*</mark>                     | String | <p></p><p>il risultato dell'operazione che può contenere i seguenti codici</p><p><strong>OK</strong> : operazione eseguita con successo</p><p><strong>KO</strong> : operazione terminata con errore</p>                                                                                                  |
| paymentToken<mark style="color:red;">\*</mark>                | String | viene generato dal sistema durante la fase di attivazione del pagamento, è l'identificatore di correlazione da abbinare all'attivazione e all'esito del pagamento                                                                                                                                        |
| password<mark style="color:red;">\*</mark>                    | String | Password del canale, assegnata da PagoPA.                                                                                                                                                                                                                                                                |
| idChannel<mark style="color:red;">\*</mark>                   | String | <p>Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.</p><p>Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.</p>                         |
| idBrokerPSP<mark style="color:red;">\*</mark>                 | String | <p>Identificativo dell'intermediario, assegnato da PagoPA.</p><p>Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.</p><p>Nota: l'intermediario/broker può coincidere con il PSP stesso.</p>                                        |
| payer                                                         | String | individua il pagatore                                                                                                                                                                                                                                                                                    |
| fee<mark style="color:red;">\*</mark>                         | String | importo della commissione pagata in euro                                                                                                                                                                                                                                                                 |
| paymentChannel                                                | String | <p>canale di pagamento</p><p>enum: "frontOffice" "atm" "onLine" "app" "other"</p>                                                                                                                                                                                                                        |
| paymentMethod<mark style="color:red;">\*</mark>               | String | <p>metodo di pagamento</p><p>enum: "cash" "creditCard" "bancomat" "other"</p>                                                                                                                                                                                                                            |
| transferDate<mark style="color:red;">\*</mark>                | String | data del riversamento verso l'EC                                                                                                                                                                                                                                                                         |
| applicationDate<mark style="color:red;">\*</mark>             | String | data applicativa del pagamento                                                                                                                                                                                                                                                                           |
| e-mail	                                                       | String |                                                                                                                                                                                                                                                                                                          |
| country                                                       | String |                                                                                                                                                                                                                                                                                                          |
| stateProvinceRegion                                           | String |                                                                                                                                                                                                                                                                                                          |
| city                                                          | String |                                                                                                                                                                                                                                                                                                          |
| postalCode                                                    | String |                                                                                                                                                                                                                                                                                                          |
| civicNumber                                                   | String |                                                                                                                                                                                                                                                                                                          |
| streetName                                                    | String |                                                                                                                                                                                                                                                                                                          |
| fullName<mark style="color:red;">\*</mark>                    | String | nome completo del pagatore                                                                                                                                                                                                                                                                               |
| uniqueIdentifier<mark style="color:red;">\*</mark>            | String |                                                                                                                                                                                                                                                                                                          |
| entityUniqueIdentifierValue<mark style="color:red;">\*</mark> | String | codice fiscale o partita IVA, nel caso non siano disponibili è possibile utilizzare 'ANONIMO'                                                                                                                                                                                                            |
| entityUniqueIdentifierType<mark style="color:red;">\*</mark>  | String | <p><strong>F</strong> : Persona fisica</p><p><strong>G</strong> : Persona giuridica</p>                                                                                                                                                                                                                  |
| paymentTokens<mark style="color:red;">\*</mark>               | String | sequence che contiene tutti i tokens                                                                                                                                                                                                                                                                     |
| idempotencyKey                                                | String | Chiave di idempotenza                                                                                                                                                                                                                                                                                    |
| idCiBundle                                                    | String | identificativo degli attributi aggiunti dall'EC al pacchetto di [gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")                                                                                                                                                             |
| idBundle                                                      | String | identificativo del pacchetto di [gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")                                                                                                                                                                                             |
| primaryCiIncurredFee                                          | String | importo della commissione a carico dell'EC espresso in euro ricavato da [gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")                                                                                                                                                     |
| marcheDaBollo                                                 | String | La lista delle marche da bollo digitali gestite nella transazione di pagamento                                                                                                                                                                                                                           |
| paymentToken                                                  | String | Il paymentToken con cui è arrivata la richiesta di marca da bollo digitale                                                                                                                                                                                                                               |
| idTransfer                                                    | String | L'identificativo del transfer che contiene il dato _richiestaMarcaDaBollo_                                                                                                                                                                                                                               |
| MBDAttachment                                                 | String | Il documento XML che contiene la marca da bollo digitale, nel formato base64                                                                                                                                                                                                                             |
| marcaDaBollo                                                  | String | I dati di ogni singola marca da bollo digitale                                                                                                                                                                                                                                                           |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
  <soapenv:Envelope>
    <soapenv:Body>
        <nod:sendPaymentOutcomeReq>
          <idPSP>88888888888</idPSP>
          <idBrokerPSP>88888888888</idBrokerPSP>
          <idChannel>88888888888_01</idChannel>
          <password>**********</password>
          <idempotencyKey>70000000001_100149bdWB</idempotencyKey>
          <paymentTokens>
              <paymentToken>d221820d258c4ab1b765fe902aae6d14</paymentToken>
              <paymentToken>c110729d258c4ab1b765fe902aae41d6</paymentToken>
          </paymentTokens>
          <outcome>OK</outcome>
          <details>
              <paymentMethod>creditCard</paymentMethod>
              <paymentChannel>app</paymentChannel>
              <fee>2.00</fee>
              <primaryCiIncurredFee>0.50</primaryCiIncurredFee>
              <idBundle>1</idBundle>
              <idCiBundle>2</idCiBundle>
              <payer>
                <uniqueIdentifier>
                    <entityUniqueIdentifierType>F</entityUniqueIdentifierType>
                    <entityUniqueIdentifierValue>JHNDOE00A01F205N</entityUniqueIdentifierValue>
                </uniqueIdentifier>
                <fullName>John Doe</fullName>
                <streetName>street</streetName>
                <civicNumber>12</civicNumber>
                <postalCode>89020</postalCode>
                <city>city</city>
                <stateProvinceRegion>MI</stateProvinceRegion>
                <country>IT</country>
                <e-mail>john.doe@test.it</e-mail>
              </payer>
              <applicationDate>2021-10-01</applicationDate>
              <transferDate>2021-10-02</transferDate>
          </details>
        </nod:sendPaymentOutcomeReq>
    </soapenv:Body>
  </soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
    <nfpsp:sendPaymentOutcomeRes>
      <outcome>OK</outcome>
    </nfpsp:sendPaymentOutcomeRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, da inserire obbligatoriamente in caso di _outcome_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## pspNotifyPayment <a href="#pspnotifypayment" id="pspnotifypayment"></a>

## pspNotifyPayment versione 1

<mark style="color:green;">`POST`</mark>&#x20;

#### Request Body

| Name                                                    | Type    | Description                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fiscalCodePA<mark style="color:red;">\*</mark>          | String  | Codice fiscale dell'EC.                                                                                                                                                                                                                                                                                  |
| paymentToken<mark style="color:red;">\*</mark>          | String  | Viene generato dal sistema durante la fase di attivazione del pagamento, è l'identificatore di correlazione da abbinare all'attivazione e all'esito del pagamento.                                                                                                                                       |
| idPSP<mark style="color:red;">\*</mark>                 | String  | <p>Identificativo del PSP, assegnato da PagoPA.</p><p>Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.</p><p>In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.</p> |
| idChannel<mark style="color:red;">\*</mark>             | String  | <p>Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.</p><p>Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.</p>                         |
| creditorReferenceId<mark style="color:red;">\*</mark>   | String  | **IUV** Identificativo Univoco Versamento.                                                                                                                                                                                                                                                               |
| companyName<mark style="color:red;">\*</mark>           | String  | Nome completo dell'EC.                                                                                                                                                                                                                                                                                   |
| officeName                                              | String  | Nome completo dell'ufficio dell'EC.                                                                                                                                                                                                                                                                      |
| idBrokerPSP<mark style="color:red;">\*</mark>           | String  | <p>Identificativo dell'intermediario, assegnato da PagoPA.</p><p>Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.</p><p>Nota: l'intermediario/broker può coincidere con il PSP stesso.</p>                                        |
| debtAmount<mark style="color:red;">\*</mark>            | String  | Rappresenta la somma degli importi dei singoli transfer.                                                                                                                                                                                                                                                 |
| paymentDescription<mark style="color:red;">\*</mark>    | String  | Testo libero per descrivere l'oggetto del pagamento.                                                                                                                                                                                                                                                     |
| remittanceInformation<mark style="color:red;">\*</mark> | String  | Motivo del pagamento.                                                                                                                                                                                                                                                                                    |
| IBAN<mark style="color:red;">\*</mark>                  | String  | IBAN sul quale sarà effettuato il riversamento                                                                                                                                                                                                                                                           |
| fiscalCodePA<mark style="color:red;">\*</mark>          | String  | Codice fiscale dell'EC.                                                                                                                                                                                                                                                                                  |
| transferAmount<mark style="color:red;">\*</mark>        | String  | Importo                                                                                                                                                                                                                                                                                                  |
| idTransfer<mark style="color:red;">\*</mark>            | String  | Indice della lista (da 1 a 5).                                                                                                                                                                                                                                                                           |
| transfer<mark style="color:red;">\*</mark>              | String  |                                                                                                                                                                                                                                                                                                          |
| transferList<mark style="color:red;">\*</mark>          | String  | Struttura che contiene i dettagli dei transfer pagamento, al momento i transfer possono essere al massimo 5.                                                                                                                                                                                             |
| dati specifici del canale di pagamento                  | String  | Struttura dati specifica del canale di pagamento utilizzato.                                                                                                                                                                                                                                             |
| standin                                                 | Boolean | true se pagamento eseguito in standin                                                                                                                                                                                                                                                                    |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
    <soapenv:Envelope>
      <soapenv:Body>
          <pspfn:pspNotifyPaymentReq>
            <idPSP>88888888888</idPSP>
            <idBrokerPSP>88888888888</idBrokerPSP>
            <idChannel>88888888888_01</idChannel>
            <paymentDescription>test</paymentDescription>
            <fiscalCodePA>77777777777</fiscalCodePA>
            <companyName>company EC</companyName>
            <officeName>office EC</officeName>                        
            <paymentToken>ac6536ab9967401fb6cfa98bef88ccf0</paymentToken>
            <creditorReferenceId>11111111112222222</creditorReferenceId>
            <debtAmount>30.00</debtAmount>
            <transferList>
                <transfer>
                  <idTransfer>1</idTransfer>
                  <transferAmount>20.00</transferAmount>
                  <fiscalCodePA>77777777777</fiscalCodePA>
                  <IBAN>IT0000000000000000000000000</IBAN>
                  <remittanceInformation>info remittance</remittanceInformation>
                </transfer>
                <transfer>
                  <idTransfer>2</idTransfer>
                  <transferAmount>10.00</transferAmount>
                  <fiscalCodePA>77777777778</fiscalCodePA>
                  <IBAN>IT0000000000000000000000001</IBAN>
                  <remittanceInformation>info remittance</remittanceInformation>
                </transfer>
            </transferList>
            
            <!-- dati specifici del canale di pagamento -->
            
            <standin>false</standin>
          </pspfn:pspNotifyPaymentReq>
      </soapenv:Body>
    </soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
      <psp:pspNotifyPaymentRes>
        <outcome>OK</outcome>
      </psp:pspNotifyPaymentRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, da inserire obbligatoriamente in caso di _outcome_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endtab %}

{% tab title="Dati specifici del canale di pagamento " %}
Carta di credito (dismissione 30/04/2023)

```xml
<creditCardPayment>
    <rrn>11223344</rrn>
    <outcomePaymentGateway>00</outcomePaymentGateway>
    <totalAmount>31.00</totalAmount>
    <fee>1.00</fee>
    <timestampOperation>2021-07-09T17:06:03</timestampOperation>
    <authorizationCode>123456</authorizationCode>
</creditCardPayment>
```

Paypal

```xml
<paypalPayment> 
    <transactionId>11223344</transactionId>
    <pspTransactionId>00</pspTransactionId>
    <totalAmount>31.00</totalAmount>
    <fee>1.00</fee>
    <timestampOperation>2021-07-09T17:06:03</timestampOperation>
</paypalPayment>
```

Bancomat Pay

```xml
<bancomatpayPayment> 
    <transactionId>11223344</transactionId>
    <outcomePaymentGateway>00</outcomePaymentGateway>
    <totalAmount>31.00</totalAmount>
    <fee>1.00</fee>
    <timestampOperation>2021-07-09T17:06:03</timestampOperation>
    <authorizationCode>123456</authorizationCode>
    <paymentGateway></paymentGateway>
</bancomatpayPayment>
```

Altri canali di pagamento

```xml
<additionalPaymentInformations>
    <metadata>
        <mapEntry>
            <key>keytest</key>
            <value>1</value>
        </mapEntry>
    </metadata>
</additionalPaymentInformations>
```
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## pspNotifyPayment versione 2

<mark style="color:green;">`POST`</mark>&#x20;

**Utilizzata per il pagamento attivato presso il frontend dell'EC, rispetto alla precedente versione della pspNotifyPayment permette di inviare al PSP una lista di **_**payment**_**, inoltre, le informazioni specifiche del pagamento utilizzato sono inserite nella sezione **_**additionalPaymentInformations**_** che contiene una lista di metadata. E' possibile, inoltre, inserire i metadata per ogni **_**payment**_** e in ogni singolo **_**transfer**_** e gestire il servizio @e.bollo.**

#### Request Body

| Name                                                    | Type    | Description                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fiscalCodePA<mark style="color:red;">\*</mark>          | String  | Codice fiscale dell'EC.                                                                                                                                                                                                                                                                                  |
| paymentToken<mark style="color:red;">\*</mark>          | String  | Viene generato dal sistema durante la fase di attivazione del pagamento, è l'identificatore di correlazione da abbinare all'attivazione e all'esito del pagamento.                                                                                                                                       |
| idPSP<mark style="color:red;">\*</mark>                 | String  | <p>Identificativo del PSP, assegnato da PagoPA.</p><p>Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.</p><p>In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.</p> |
| idChannel<mark style="color:red;">\*</mark>             | String  | <p>Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.</p><p>Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.</p>                         |
| creditorReferenceId<mark style="color:red;">\*</mark>   | String  | **IUV** Identificativo Univoco Versamento.                                                                                                                                                                                                                                                               |
| companyName<mark style="color:red;">\*</mark>           | String  | Nome completo dell'EC.                                                                                                                                                                                                                                                                                   |
| officeName                                              | String  | Nome completo dell'ufficio dell'EC.                                                                                                                                                                                                                                                                      |
| idBrokerPSP<mark style="color:red;">\*</mark>           | String  | <p>Identificativo dell'intermediario, assegnato da PagoPA.</p><p>Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.</p><p>Nota: l'intermediario/broker può coincidere con il PSP stesso.</p>                                        |
| debtAmount<mark style="color:red;">\*</mark>            | String  | Rappresenta la somma degli importi dei singoli transfer.                                                                                                                                                                                                                                                 |
| paymentDescription<mark style="color:red;">\*</mark>    | String  | Testo libero per descrivere l'oggetto del pagamento.                                                                                                                                                                                                                                                     |
| remittanceInformation<mark style="color:red;">\*</mark> | String  | Motivo del pagamento.                                                                                                                                                                                                                                                                                    |
| IBAN                                                    | String  | IBAN sul quale sarà effettuato il riversamento                                                                                                                                                                                                                                                           |
| fiscalCodePA<mark style="color:red;">\*</mark>          | String  | Codice fiscale dell'EC.                                                                                                                                                                                                                                                                                  |
| transferAmount<mark style="color:red;">\*</mark>        | String  | Importo                                                                                                                                                                                                                                                                                                  |
| idTransfer<mark style="color:red;">\*</mark>            | String  | Indice della lista (da 1 a 5).                                                                                                                                                                                                                                                                           |
| transfer<mark style="color:red;">\*</mark>              | String  |                                                                                                                                                                                                                                                                                                          |
| transferList<mark style="color:red;">\*</mark>          | String  | Struttura che contiene i dettagli dei transfer pagamento, al momento i transfer possono essere al massimo 5.                                                                                                                                                                                             |
| payment<mark style="color:red;">\*</mark>               | String  |                                                                                                                                                                                                                                                                                                          |
| paymentList<mark style="color:red;">\*</mark>           | String  | Lista dei pagamenti.                                                                                                                                                                                                                                                                                     |
| additionalPaymentInformations                           | String  | Struttura che contiene i dati specifici del canale di pagamento utilizzato.                                                                                                                                                                                                                              |
| mapEntry<mark style="color:red;">\*</mark>              | String  |                                                                                                                                                                                                                                                                                                          |
| key<mark style="color:red;">\*</mark>                   | String  |                                                                                                                                                                                                                                                                                                          |
| value<mark style="color:red;">\*</mark>                 | String  |                                                                                                                                                                                                                                                                                                          |
| CHOICE<mark style="color:red;">\*</mark>                | String  | Choice tra IBAN e richiestaMarcaDaBollo                                                                                                                                                                                                                                                                  |
| provinciaResidenza                                      | String  | Sigla automobilistica della provincia di residenza del soggetto pagatore                                                                                                                                                                                                                                 |
| hashDocumento                                           | String  | Impronta informatica (digest), nel formato base64, del documento informatico o della segnatura di protocollo cui è associata la marca da bollo digitale                                                                                                                                                  |
| tipoBollo                                               | String  | Tipologia del bollo                                                                                                                                                                                                                                                                                      |
| richiestaMarcaDaBollo                                   | String  | I dati della richiesta della marca da bollo                                                                                                                                                                                                                                                              |
| transactionId<mark style="color:red;">\*</mark>         | String  | Identificativo dell'operazione di pagamento.                                                                                                                                                                                                                                                             |
| fee<mark style="color:red;">\*</mark>                   | String  | Importo della commissione.                                                                                                                                                                                                                                                                               |
| totalAmount<mark style="color:red;">\*</mark>           | String  | Rappresenta la somma pagata dall'utente, comprensiva di commissione.                                                                                                                                                                                                                                     |
| timestampOperation<mark style="color:red;">\*</mark>    | String  | Timestamp dell'operazione di pagamento.                                                                                                                                                                                                                                                                  |
| IdCiBundle                                              | String  | identificativo degli attributi aggiunti dall'EC al pacchetto associato a [gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")                                                                                                                                                    |
| IdBundle                                                | String  | identificativo del pacchetto associato a [gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")                                                                                                                                                                                    |
| primaryCiIncurredFee                                    | String  | importo della commissione a carico dell'EC espresso in euro associato a [gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")                                                                                                                                                     |
| standin                                                 | Boolean | true se pagamento eseguito in standin                                                                                                                                                                                                                                                                    |
| companyName                                             | String  | codice fiscale dell'EC                                                                                                                                                                                                                                                                                   |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
      <soapenv:Body>
          <pspfn:pspNotifyPaymentV2>
            <idPSP>CIPBITMM</idPSP>
            <idBrokerPSP>13212880150</idBrokerPSP>
            <idChannel>13212880150_02</idChannel>
            <transactionId>99910087308786</transactionId>
            <totalAmount>31.00</totalAmount>
            <fee>1.00</fee>
            <timestampOperation>2033-04-23T18:25:43Z</timestampOperation>
            <paymentList>
              <payment>
                <paymentDescription>test</paymentDescription>
                <fiscalCodePA>77777777777</fiscalCodePA>
                <companyName>company EC</companyName>
                <officeName>office EC</officeName>                        
                <paymentToken>ac6536ab9967401fb6cfa98bef88ccf0</paymentToken>
                <creditorReferenceId>11111111112222222</creditorReferenceId>
                <debtAmount>30.00</debtAmount>
                <transferList>
                  <transfer>
                    <idTransfer>1</idTransfer>
                    <transferAmount>20.00</transferAmount>
                    <fiscalCodePA>77777777777</fiscalCodePA>
                    <companyName>company EC1</companyName>
                    <IBAN>IT0000000000000000000000000</IBAN>
                    <remittanceInformation>info remittance</remittanceInformation>
                    <metadata>
                      <mapEntry>
                        <key>yyyy</key>
                        <value>abcde</value>
                      </mapEntry> 
                    </metadata>
                  </transfer>
                  <transfer>
                    <idTransfer>2</idTransfer>
                    <transferAmount>10.00</transferAmount>
                    <fiscalCodePA>77777777778</fiscalCodePA>
                    <companyName>company EC2</companyName>
                    <IBAN>IT0000000000000000000000001</IBAN>
                    <remittanceInformation>info remittance</remittanceInformation>
                  </transfer>
                </transferList> 
                <metadata>
                  <mapEntry>
                    <key>zzzz</key>
                    <value>g2f3</value>
                  </mapEntry> 
                </metadata>
              </payment>
            </paymentList>                       
            <additionalPaymentInformations>
              <mapEntry>
                <key>xxxx</key>
                <value>1234546</value>
              </mapEntry> 
            </additionalPaymentInformations>
            <standin>false</standin>
          </pspfn:pspNotifyPaymentV2>
      </soapenv:Body>
    </soapenv:Envelope>    
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
      <psp:pspNotifyPaymentV2Res>
        <outcome>OK</outcome>
      </psp:pspNotifyPaymentV2Res>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, da inserire obbligatoriamente in caso di _outcome_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## demandPaymentNotice

## demandPaymentNotice

<mark style="color:green;">`POST`</mark>&#x20;

#### Request Body

| Name                                                    | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| idPSP<mark style="color:red;">\*</mark>                 | String | <p>Identificativo del PSP, assegnato da PagoPA.</p><p>Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.</p><p>In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.</p>                                                                                               |
| datiSpecificiServizio<mark style="color:red;">\*</mark> | String | Sono censiti nel Catalogo dei Servizi, che è il repository che contiene l’elenco dei servizi generalizzati attivati dagli EC, inviati in formato base64. La struttura da inserire è definita dallo schema XSD il cui nome è riportato nell'elemento _xsdRiferimento_ del Catalogo dei Servizi ed è consultabile tramite [https://github.com/pagopa/pagopa-api](https://github.com/pagopa/pagopa-api) . |
| idSoggettoServizio<mark style="color:red;">\*</mark>    | String | Identificativo dell'associazione tra servizio e EC per cui si vuole attivare il pagamento. Corrisponde al tag elencoSoggettiEroganti.soggettoErogante.idSoggettoServizio del Catalogo dei Servizi.                                                                                                                                                                                                     |
| password<mark style="color:red;">\*</mark>              | String | Password del canale, assegnata da PagoPA.                                                                                                                                                                                                                                                                                                                                                              |
| idChannel<mark style="color:red;">\*</mark>             | String | <p>Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.</p><p>Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.</p>                                                                                                                       |
| idBrokerPSP<mark style="color:red;">\*</mark>           | String | <p>Identificativo dell'intermediario, assegnato da PagoPA.</p><p>Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.</p><p>Nota: l'intermediario/broker può coincidere con il PSP stesso.</p>                                                                                                                                      |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
<soap:Envelope>
  <soap:Body>
    <ns3:demandPaymentNoticeReq>
      <idPSP>88888888888</idPSP>
      <idBrokerPSP>88888888888</idBrokerPSP>
      <idChannel>88888888888_01</idChannel>
      <password>**********</password>
      <idSoggettoServizio>00003</idServizio>
      <datiSpecificiServizio>Dati del servizio base64 encoded</datiSpecificiServizio>
    </ns3:demandPaymentNoticeReq>
  </soap:Body>
</soap:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
    <ppt:demandPaymentNoticeRes>
      <outcome>OK</outcome>
      <qrCode>
        <fiscalCode>77777777778</fiscalCode>
        <noticeNumber>311111111112222222</noticeNumber>
      </qrCode>
      <paymentList>
        <paymentOptionDescription>
          <amount>30.00</amount>
          <options>EQ</options>
          <paymentNote>test</paymentNote>
        </paymentOptionDescription>
      </paymentList>
      <paymentDescription>payment</paymentDescription>
      <fiscalCodePA>77777777777</fiscalCodePA>
      <companyName>company EC</companyName>
      <officeName>office EC</officeName>
    </ppt:demandPaymentNoticeRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _outcome_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* qrCode: è composto da fiscalCode e noticeNumber, dato valorizzato solo in caso di _outcome_ OK
  * fiscalCode: codice fiscale dell'EC
  * noticeNumber: \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]
* paymentList: struttura che contiene i dettagli del pagamento, al momento può contenere una sola _paymentOptionDescription_, dato valorizzato solo in caso di _outcome_ OK
  * paymentOptionDescription﹡
    * amount﹡: importo in euro
    * options﹡: al momento è valorizzato con _EQ_
    * dueDate: data di scadenza del pagamento secondo il formato ISO 8601 \[AAAA]-\[MM]-\[GG]
    * paymentNote: testo libero per descrivere l'oggetto del pagamento
* paymentDescription: testo libero per descrivere l'oggetto del pagamento, dato valorizzato solo in caso di _outcome_ OK
* fiscalCodePA: codice fiscale dell'EC, dato valorizzato solo in caso di _outcome_ OK
* companyName: nome completo dell'EC, dato valorizzato solo in caso di _outcome_ OK
* officeName: nome completo dell'ufficio dell'EC
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## paDemandPaymentNotice

## paDemandPaymentNotice

<mark style="color:green;">`POST`</mark>&#x20;

#### Request Body

| Name                                                    | Type   | Description                                                                                                                                                                                        |
| ------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPA<mark style="color:red;">\*</mark>                  | String | Codice fiscale della struttura che invia la richiesta di pagamento.                                                                                                                                |
| datiSpecificiServizio<mark style="color:red;">\*</mark> | String | Sono censiti nel Catalogo dei Servizi, che è il repository che contiene l’elenco dei servizi generalizzati attivati dagli EC, inviati in formato base64.                                           |
| idServizio<mark style="color:red;">\*</mark>            | String | Identificativo del servizio per cui si vuole attivare il pagamento.                                                                                                                                |
| idStation<mark style="color:red;">\*</mark>             | String | Identificativo della stazione dell'EC nel sistema pagoPa.                                                                                                                                          |
| idBrokerPA<mark style="color:red;">\*</mark>            | String | Identificativo del soggetto che opera come intermediario per l'EC.                                                                                                                                 |
| idSoggettoServizio<mark style="color:red;">\*</mark>    | String | Identificativo dell'associazione tra servizio e EC per cui si vuole attivare il pagamento. Corrisponde al tag elencoSoggettiEroganti.soggettoErogante.idSoggettoServizio del Catalogo dei Servizi. |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
    <ppt:paDemandPaymentNoticeReq>
      <idPA>77777777777</idPA>
      <idBrokerPA>77777777777</idBrokerPA>
      <idStation>77777777777_01</idStation>
      <idServizio>00002</idServizio>
      <idSoggettoServizio>00003</idSoggettoServizio>       
      <datiSpecificiServizio>Dati del servizio base64 encoded</datiSpecificiServizio>
    </ppt:paDemandPaymentNoticeReq>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
  <soapenv:Body>
    <ns5:paDemandPaymentNoticeRes">
      <outcome>OK</outcome>
      <qrCode>
        <fiscalCode>77777777778</fiscalCode>
        <noticeNumber>311111111112222222</noticeNumber>
      </qrCode>
      <paymentList>
        <paymentOptionDescription>
          <amount>30.00</amount>
          <options>EQ</options>
          <paymentNote>test</paymentNote>
        </paymentOptionDescription>
      </paymentList>
      <paymentDescription>payment</paymentDescription>
      <fiscalCodePA>77777777777</fiscalCodePA>
      <companyName>company EC</companyName>
      <officeName>office EC</officeName>
    </ns5:paDemandPaymentNoticeRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _outcome_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* qrCode: è composto da fiscalCode e noticeNumber, dato valorizzato solo in caso di _outcome_ OK
  * fiscalCode: codice fiscale dell'EC
  * noticeNumber: \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]
* paymentList: struttura che contiene i dettagli del pagamento, al momento può contenere una sola _paymentOptionDescription_, dato valorizzato solo in caso di _outcome_ OK
  * paymentOptionDescription﹡
    * amount﹡: importo in euro
    * options﹡: al momento è valorizzato con _EQ_
    * dueDate: data di scadenza del pagamento secondo il formato ISO 8601 \[AAAA]-\[MM]-\[GG]
    * paymentNote: testo libero per descrivere l'oggetto del pagamento
* paymentDescription: testo libero per descrivere l'oggetto del pagamento, dato valorizzato solo in caso di _outcome_ OK
* fiscalCodePA: codice fiscale dell'EC, dato valorizzato solo in caso di _outcome_ OK
* companyName: nome completo dell'EC, dato valorizzato solo in caso di _outcome_ OK
* officeName: nome completo dell'ufficio dell'EC
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## nodoInviaFlussoRendicontazione

## nodoInviaFlussoRendicontazione

<mark style="color:green;">`POST`</mark>&#x20;

#### Request Body

| Name                                                             | Type   | Description                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identificativoPSP<mark style="color:red;">\*</mark>              | String | <p>Identificativo del PSP, assegnato da PagoPA.</p><p>Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.</p><p>In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.</p> |
| xmlRendicontazione<mark style="color:red;">\*</mark>             | String | Contenuto del Flusso di riversamento in formato base64.                                                                                                                                                                                                                                                  |
| dataOraFlusso<mark style="color:red;">\*</mark>                  | String | Data e ora del Flusso di Rendicontazione.                                                                                                                                                                                                                                                                |
| identificativoFlusso<mark style="color:red;">\*</mark>           | String | Identificativo del Flusso di Rendicontazione.                                                                                                                                                                                                                                                            |
| identificativoDominio<mark style="color:red;">\*</mark>          | String | Codice fiscale dell'EC.                                                                                                                                                                                                                                                                                  |
| password<mark style="color:red;">\*</mark>                       | String | Password del canale, assegnata da PagoPA.                                                                                                                                                                                                                                                                |
| identificativoCanale<mark style="color:red;">\*</mark>           | String | <p>Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.</p><p>Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.</p>                         |
| identificativoIntermediarioPSP<mark style="color:red;">\*</mark> | String | <p>Identificativo dell'intermediario, assegnato da PagoPA.</p><p>Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.</p><p>Nota: l'intermediario/broker può coincidere con il PSP stesso.</p>                                        |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
<soap:Envelope>
    <soap:Body>
        <ns5:nodoInviaFlussoRendicontazione>
            <identificativoPSP>88888888888</identificativoPSP>
            <identificativoIntermediarioPSP>88888888888</identificativoIntermediarioPSP>
            <identificativoCanale>88888888888_01</identificativoCanale>
            <password>**********</password>
            <identificativoDominio>77777777777</identificativoDominio>
            <identificativoFlusso>2021-11-2188888888888-AABB648200001295</identificativoFlusso>
            <dataOraFlusso>2021-11-22T00:37:32</dataOraFlusso>
            <xmlRendicontazione>Flusso di riversamento base64 encoded</xmlRendicontazione>
        </ns5:nodoInviaFlussoRendicontazione>
    </soap:Body>
</soap:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
    <soapenv:Body>
        <ppt:nodoInviaFlussoRendicontazioneRisposta>
            <esito>OK</esito>
        </ppt:nodoInviaFlussoRendicontazioneRisposta>
    </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _esito_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _esito_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## nodoChiediElencoFlussiRendicontazione

## nodoChiediElencoFlussiRendicontazione

<mark style="color:green;">`POST`</mark>&#x20;

#### Request Body

| Name                                                                    | Type   | Description                                                                                                                                                                                                                                                                                              |
| ----------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identificativoIntermediarioPA<mark style="color:red;">\*</mark>         | String | Identificativo del soggetto che opera come intermediario per l'EC.                                                                                                                                                                                                                                       |
| identificativoPSP                                                       | String | <p>Identificativo del PSP, assegnato da PagoPA.</p><p>Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.</p><p>In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.</p> |
| identificativoDominio                                                   | String | Codice fiscale dell'EC.                                                                                                                                                                                                                                                                                  |
| password<mark style="color:red;">\*</mark>                              | String | Password della stazione, assegnata da PagoPA.                                                                                                                                                                                                                                                            |
| identificativoStazioneIntermediarioPA<mark style="color:red;">\*</mark> | String | Identificativo della stazione dell'EC nel sistema pagoPa.                                                                                                                                                                                                                                                |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
<soap:Envelope>
    <soap:Body>
        <ns5:nodoChiediElencoFlussiRendicontazione>
            <identificativoIntermediarioPA>77777777777</identificativoIntermediarioPA>
            <identificativoStazioneIntermediarioPA>77777777777_01</identificativoStazioneIntermediarioPA>
            <password>**********</password>
            <identificativoDominio>77777777777</identificativoDominio>
            <identificativoPSP>88888888888</identificativoPSP>
        </ns5:nodoChiediElencoFlussiRendicontazione>
    </soap:Body>
</soap:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
    <soapenv:Body>
        <nodoChiediElencoFlussiRendicontazioneResponse>
            <esito>OK</esito>
            <elencoFlussiRendicontazione>
                <totRestituiti>1</totRestituiti>
                <idRendicontazione>
                    <identificativoFlusso>2021-11-2188888888888-AABB648200001295</identificativoFlusso>
                    <dataOraFlusso>2021-11-22T00:37:32</dataOraFlusso>
                </idRendicontazione>
            </elencoFlussiRendicontazione>
        </nodoChiediElencoFlussiRendicontazioneResponse>
    </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
* _esito_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _esito_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* elencoFlussiRendicontazione: elenco dei flussi di riversamento, dato valorizzato solo in caso di _esito_ OK
  * totRestituiti: numero dei flussi presenti nell'elenco
  * idRendicontazione
    * identificativoFlusso: identificativo del Flusso di Rendicontazione
    * dataOraFlusso: data e ora del Flusso di Rendicontazione
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## nodoChiediFlussoRendicontazione

## nodoChiediFlussoRendicontazione

<mark style="color:green;">`POST`</mark>&#x20;

#### Request Body

| Name                                                                    | Type   | Description                                                                                                                                                                                                                                                                                              |
| ----------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identificativoIntermediarioPA<mark style="color:red;">\*</mark>         | String | Identificativo del soggetto che opera come intermediario per l'EC.                                                                                                                                                                                                                                       |
| identificativoFlusso<mark style="color:red;">\*</mark>                  | String | Identificativo del Flusso di Rendicontazione.                                                                                                                                                                                                                                                            |
| identificativoPSP                                                       | String | <p>Identificativo del PSP, assegnato da PagoPA.</p><p>Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.</p><p>In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.</p> |
| identificativoDominio                                                   | String | Codice fiscale dell'EC.                                                                                                                                                                                                                                                                                  |
| password<mark style="color:red;">\*</mark>                              | String | Password della stazione, assegnata da PagoPA.                                                                                                                                                                                                                                                            |
| identificativoStazioneIntermediarioPA<mark style="color:red;">\*</mark> | String | Identificativo della stazione dell'EC nel sistema pagoPa.                                                                                                                                                                                                                                                |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
<soap:Envelope>
    <soap:Body>
        <nodoChiediElencoFlussiRendicontazione>
            <identificativoIntermediarioPA>77777777777</identificativoIntermediarioPA>
            <identificativoStazioneIntermediarioPA>77777777777_01</identificativoStazioneIntermediarioPA>
            <password>**********</password>
            <identificativoDominio>77777777777</identificativoDominio>
            <identificativoPSP>88888888888</identificativoPSP>
            <identificativoFlusso>2021-11-2188888888888-AABB648200001295</identificativoFlusso>
        </nodoChiediElencoFlussiRendicontazione>
    </soap:Body>
</soap:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
    <soapenv:Body>
        <nodoChiediFlussoRendicontazioneResponse>
            <esito>OK</esito>
            <xmlRendicontazione>Flusso di riversamento base64 encoded</xmlRendicontazione>
        </nodoChiediFlussoRendicontazioneResponse>
    </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _esito_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _esito_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* xmlRendicontazione: contenuto del flusso di riversamento in formato base64, dato valorizzato solo in caso di _esito_ OK
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## nodoChiediCatalogoServizi

## nodoChiediCatalogoServizi versione 2

<mark style="color:green;">`POST`</mark>&#x20;

#### Request Body

| Name                                                             | Type   | Description                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identificativoPSP<mark style="color:red;">\*</mark>              | String | <p>Identificativo del PSP, assegnato da PagoPA.</p><p>Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.</p><p>In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.</p> |
| identificativoDominio                                            | String | Codice fiscale dell'EC.                                                                                                                                                                                                                                                                                  |
| password<mark style="color:red;">\*</mark>                       | String | Password del canale, assegnata da PagoPA.                                                                                                                                                                                                                                                                |
| identificativoCanale<mark style="color:red;">\*</mark>           | String | <p>Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.</p><p>Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.</p>                         |
| identificativoIntermediarioPSP<mark style="color:red;">\*</mark> | String | <p>Identificativo dell'intermediario, assegnato da PagoPA.</p><p>Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.</p><p>Nota: l'intermediario/broker può coincidere con il PSP stesso.</p>                                        |
| categoria                                                        | String | Filtro in base alla categoria dei servizi.                                                                                                                                                                                                                                                               |
| commissione                                                      | String | Filtro in base al consiglio di applicare o meno le commissioni inserite dall'EC che ha creato il servizio.                                                                                                                                                                                               |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
<soap:Envelope>
    <soap:Body>
        <ns5:nodoChiediCatalogoServizi>
            <identificativoPSP>88888888888</identificativoPSP>
            <identificativoIntermediarioPSP>88888888888</identificativoIntermediarioPSP>
            <identificativoCanale>88888888888_01</identificativoCanale>
            <password>**********</password>
            <identificativoDominio>77777777777</identificativoDominio>
            <categoria>Donazioni</categoria>
            <commissione>N</commissione>
        </ns5:nodoChiediCatalogoServizi>
    </soap:Body>
</soap:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
    <soapenv:Body>
        <nodoChiediCatalogoServizi>
            <esito>OK</esito>
            <xmlCatalogoServizi>Catalogo dei servizi base64 encoded</xmlCatalogoServizi>
        </nodoChiediCatalogoServizi>
    </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _esito_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _esito_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* xmlCatalogoServizi: contenuto del catalogo dei servizi in formato base64, dato valorizzato solo in caso di _esito_ OK
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## nodoChiediTemplateInformativaPSP

## nodoChiediTemplateInformativaPSP

<mark style="color:green;">`POST`</mark>&#x20;

#### Request Body

| Name                                                             | Type   | Description                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identificativoPSP<mark style="color:red;">\*</mark>              | String | <p>Identificativo del PSP, assegnato da PagoPA.</p><p>Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.</p><p>In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.</p> |
| identificativoIntermediarioPSP<mark style="color:red;">\*</mark> | String | <p>Identificativo dell'intermediario, assegnato da PagoPA.</p><p>Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.</p><p>Nota: l'intermediario/broker può coincidere con il PSP stesso.</p>                                        |
| identificativoCanale<mark style="color:red;">\*</mark>           | String | <p>Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.</p><p>Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.</p>                         |
| password<mark style="color:red;">\*</mark>                       | String | Password del canale, assegnata da PagoPA.                                                                                                                                                                                                                                                                |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
<soap:Envelope>
    <soap:Body>
        <ns5:nodoChiediTemplateInformativaPSP>
            <identificativoPSP>88888888888</identificativoPSP>
            <identificativoIntermediarioPSP>88888888888</identificativoIntermediarioPSP>
            <identificativoCanale>88888888888_01</identificativoCanale>
            <password>**********</password>
        </ns5:nodoChiediTemplateInformativaPSP>
    </soap:Body>
</soap:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
    <soapenv:Body>
        <nodoChiediTemplateInformativaPSP>
            <esito>OK</esito>
            <xmlTemplateInformativa>Template informativa base64 encoded</xmlTemplateInformativa>
        </nodoChiediTemplateInformativaPSP>
    </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _esito_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _esito_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* xmlTemplateInformativa: template dell'informativa in formato base64, dato valorizzato solo in caso di _esito_ OK


{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## EC Checkout API

{% swagger src="../.gitbook/assets/checkout (5).yaml" path="/carts" method="post" %}
[checkout (5).yaml](<../.gitbook/assets/checkout (5).yaml>)
{% endswagger %}

## Nuove API - Gestione Flussi di Rendicontazione&#x20;

Per gli EC:

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_organization.yaml" path="/organizations/{organizationId}/fdrs/{fdr}/revisions/{revision}/psps/{pspId}" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_organization.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_organization.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_organization.yaml" path="/organizations/{organizationId}/fdrs/{fdr}/revisions/{revision}/psps/{pspId}/payments" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_organization.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_organization.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_organization.yaml" path="/organizations/{organizationId}/fdrs" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_organization.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_organization.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_organization.yaml" path="/info" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_organization.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_organization.yaml)
{% endswagger %}

Per i PSP:

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml" path="/info" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml" path="/psps/{pspId}/fdrs/{fdr}/payments/add" method="put" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml" path="/psps/{pspId}/fdrs/{fdr}/publish" method="post" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml" path="/psps/{pspId}/created/fdrs/{fdr}/organizations/{organizationId}" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml" path="/psps/{pspId}/published/fdrs/{fdr}/revisions/{revision}/organizations/{organizationId}/payments" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml" path="/psps/{pspId}/fdrs/{fdr}" method="post" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml" path="/psps/{pspId}/fdrs/{fdr}" method="delete" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml" path="/psps/{pspId}/published/fdrs/{fdr}/revisions/{revision}/organizations/{organizationId}" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml" path="/psps/{pspId}/created" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml" path="/psps/{pspId}/fdrs/{fdr}/payments/del" method="put" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml" path="/psps/{pspId}/created/fdrs/{fdr}/organizations/{organizationId}/payments" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml" path="/psps/{pspId}/published" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.1/openapi/fdr_psp.yaml)
{% endswagger %}

## getOrganizationReceipt

Recupero della ricevuta mediante il codice `IUR`

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/bizEvents.yaml" path="/organizations/{organizationfiscalcode}/receipts/{iur}" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/bizEvents.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/bizEvents.yaml)
{% endswagger %}

Recupero della ricevuta mediante i codici `IUV`

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/bizEvents.yaml" path="/organizations/{organizationfiscalcode}/receipts/{iur}/paymentoptions/{iuv}" method="get" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/bizEvents.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.7.0/openapi/bizEvents.yaml)
{% endswagger %}

## paCreatePosition

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.8.0/openapi/paCreatePosition.yaml" path="/paCreatePosition" method="post" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.8.0/openapi/paCreatePosition.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.8.0/openapi/paCreatePosition.yaml)
{% endswagger %}

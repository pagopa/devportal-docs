# Primitive

Per la gestione degli errori fare riferimento a [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention").

{% hint style="info" %}
I campi contrassegnati con﹡sono obbligatori
{% endhint %}

Per i dettagli [https://github.com/pagopa/pagopa-api/tree/SANP3.0.0](https://github.com/pagopa/pagopa-api/tree/SANP3.0.0)

## paVerifyPaymentNotice

<mark style="color:green;">`POST`</mark>&#x20;

[WSDL](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/ec/paForNode.wsdl#L85) - [XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/ec/paForNode.xsd#L731)

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
[XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/ec/paForNode.xsd#L732)

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

[WSDL](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/ec/paForNode.wsdl#L94) - [XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/ec/paForNode.xsd#L734)

#### Request Body

| Name                                           | Type   | Description                                                                     |
| ---------------------------------------------- | ------ | ------------------------------------------------------------------------------- |
| idPA<mark style="color:red;">\*</mark>         | String | Codice fiscale della struttura che invia la richiesta di pagamento.             |
| dueDate                                        | String | Data di scadenza del pagamento secondo il formato ISO 8601 \[AAAA]-\[MM]-\[GG]. |
| transferType                                   | String | Valore ammesso: POSTAL.                                                         |
| paymentNote                                    | String | Descrizione del pagamento.                                                      |
| amount                                         | String | Importo del pagamento in euro.                                                  |
| noticeNumber<mark style="color:red;">\*</mark> | String | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]                         |
| fiscalCode<mark style="color:red;">\*</mark>   | String | Codice fiscale dell'EC.                                                         |
| qrCode<mark style="color:red;">\*</mark>       | String | E' composto da _fiscalCode_ e _noticeNumber._                                   |
| idStation<mark style="color:red;">\*</mark>    | String | Identificativo della stazione dell'EC nel sistema pagoPa.                       |
| idBrokerPA<mark style="color:red;">\*</mark>   | String | Identificativo del soggetto che opera come intermediario per l'EC.              |

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
[XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/ec/paForNode.xsd#L735)

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
      * entityUniqueIdentifierValue﹡: codice fiscale o partita IVA
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

**In questa versione è possibile inserire i metadata in ogni singolo&#x20;**_**transfer**_**.**

[WSDL](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/ec/paForNode_2_0_0.wsdl#L111) - [XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/ec/paForNode_2_0_0.xsd#L234)

#### Request Body

| Name                                           | Type   | Description                                                                    |
| ---------------------------------------------- | ------ | ------------------------------------------------------------------------------ |
| idPA<mark style="color:red;">\*</mark>         | String | Codice fiscale della struttura che invia la richiesta di pagamento.            |
| idBrokerPA<mark style="color:red;">\*</mark>   | String | Identificativo del soggetto che opera come intermediario per l'EC.             |
| idStation<mark style="color:red;">\*</mark>    | String | Identificativo della stazione dell'EC nel sistema pagoPa.                      |
| qrCode<mark style="color:red;">\*</mark>       | String | E' composto da _fiscalCode_ e _noticeNumber._                                  |
| amount<mark style="color:red;">\*</mark>       | String | importo del pagamento in euro                                                  |
| paymentNote                                    | String | descrizione del pagamento                                                      |
| transferType                                   | String | valore ammesso: POSTAL                                                         |
| dueDate                                        | String | data di scadenza del pagamento secondo il formato ISO 8601 \[AAAA]-\[MM]-\[GG] |
| fiscalCode<mark style="color:red;">\*</mark>   | String | codice fiscale dell'EC                                                         |
| noticeNumber<mark style="color:red;">\*</mark> | String | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]                        |

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
[XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/ec/paForNode_2_0_0.xsd#L251)

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
  * companyName: nome completo dell'EC
  * officeName: nome completo dell'ufficio dell'EC
  * debtor﹡: individua il debitore a cui si riferisce la posizione debitoria
    * uniqueIdentifier﹡
      * entityUniqueIdentifierType﹡
        * **F** : Persona fisica
        * **G** : Persona giuridica
      * entityUniqueIdentifierValue﹡: codice fiscale o partita IVA
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
      * IBAN﹡: IBAN sul quale sarà effettuato il riversamento
      * remittanceInformation﹡: motivo del pagamento
      * transferCategory﹡: codice tassonomico, composto da _Codice tipo Ente Creditore + Progressivo macro area + Codice tipologia servizio + Motivo Giuridico_ ( ex. **0101002IM** )&#x20;
      * metadata: è un campo di archiviazione chiave/valore.
        * mapEntry﹡
          * key﹡
          * value﹡
  * metadata: è un campo di archiviazione chiave/valore ad uso esclusivo dell'EC. I dati saranno inseriti nella _receipt_ (_paSendRT_)
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

[WSDL](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/ec/paForNode_2_0_0.wsdl#L123) - [XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/ec/paForNode_2_0_0.xsd#L262)

#### Request Body

| Name                                                          | Type   | Description                                                                                                                                                |
| ------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPA<mark style="color:red;">\*</mark>                        | String | codice fiscale della struttura che invia la richiesta di pagamento                                                                                         |
| receiptId<mark style="color:red;">\*</mark>                   | String | identificatore univoco della _receipt_ contiene il _paymentToken_ assegnato da pagoPa                                                                      |
| outcome<mark style="color:red;">\*</mark>                     | String | il risultato dell'operazione che può contenere i codici OK o KO                                                                                            |
| receipt<mark style="color:red;">\*</mark>                     | String | la ricevuta di pagamento                                                                                                                                   |
| idStation<mark style="color:red;">\*</mark>                   | String | identificativo della stazione dell'EC nel sistema pagoPa                                                                                                   |
| idBrokerPA<mark style="color:red;">\*</mark>                  | String | identificativo del soggetto che opera come intermediario per l'EC                                                                                          |
| entityUniqueIdentifierType<mark style="color:red;">\*</mark>  | String | <p><strong>F</strong> : Persona fisica</p><p><strong>G</strong> : Persona giuridica</p>                                                                    |
| uniqueIdentifier<mark style="color:red;">\*</mark>            | String |                                                                                                                                                            |
| debtor<mark style="color:red;">\*</mark>                      | String | individua il debitore a cui si riferisce la posizione debitoria                                                                                            |
| officeName                                                    | String |                                                                                                                                                            |
| companyName<mark style="color:red;">\*</mark>                 | String | nome completo dell'EC                                                                                                                                      |
| description<mark style="color:red;">\*</mark>                 | String |                                                                                                                                                            |
| paymentAmount<mark style="color:red;">\*</mark>               | String | importo espresso in euro                                                                                                                                   |
| creditorReferenceId<mark style="color:red;">\*</mark>         | String | **IUV** _Identificativo Univoco Versamento_                                                                                                                |
| fiscalCode<mark style="color:red;">\*</mark>                  | String | codice fiscale dell'EC                                                                                                                                     |
| noticeNumber<mark style="color:red;">\*</mark>                | String | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]                                                                                                    |
| entityUniqueIdentifierValue<mark style="color:red;">\*</mark> | String | codice fiscale o partita IVA                                                                                                                               |
| e-mail                                                        | String |                                                                                                                                                            |
| country                                                       | String |                                                                                                                                                            |
| stateProvinceRegion                                           | String |                                                                                                                                                            |
| city                                                          | String |                                                                                                                                                            |
| postalCode                                                    | String |                                                                                                                                                            |
| civicNumber                                                   | String |                                                                                                                                                            |
| streetName                                                    | String |                                                                                                                                                            |
| fullName<mark style="color:red;">\*</mark>                    | String | nome completo del debitore                                                                                                                                 |
| transferCategory<mark style="color:red;">\*</mark>            | String | codice tassonomico, composto da _Codice tipo Ente Creditore + Progressivo macro area + Codice tipologia servizio + Motivo Giuridico_ ( ex. **0101002IM** ) |
| remittanceInformation<mark style="color:red;">\*</mark>       | String | motivo del pagamento                                                                                                                                       |
| IBAN<mark style="color:red;">\*</mark>                        | String | IBAN sul quale sarà effettuato il riversamento                                                                                                             |
| fiscalCodePA<mark style="color:red;">\*</mark>                | String | codice fiscale dell'EC                                                                                                                                     |
| transferAmount<mark style="color:red;">\*</mark>              | String | importo                                                                                                                                                    |
| idTransfer<mark style="color:red;">\*</mark>                  | String | indice della lista (da 1 a 5)                                                                                                                              |
| transfer<mark style="color:red;">\*</mark>                    | String |                                                                                                                                                            |
| transferList<mark style="color:red;">\*</mark>                | String | struttura che contiene i dettagli dei _transfer_                                                                                                           |
| channelDescription<mark style="color:red;">\*</mark>          | String |                                                                                                                                                            |
| idChannel<mark style="color:red;">\*</mark>                   | String |                                                                                                                                                            |
| PSPCompanyName<mark style="color:red;">\*</mark>              | String |                                                                                                                                                            |
| pspPartitaIVA                                                 | String |                                                                                                                                                            |
| pspFiscalCode                                                 | String |                                                                                                                                                            |
| idPSP<mark style="color:red;">\*</mark>                       | String | identificativo del PSP                                                                                                                                     |
| key<mark style="color:red;">\*</mark>                         | String |                                                                                                                                                            |
| mapEntry<mark style="color:red;">\*</mark>                    | String |                                                                                                                                                            |
| metadata                                                      | String |                                                                                                                                                            |
| transferDate                                                  | String | data del riversamento                                                                                                                                      |
| applicationDate                                               | String | data applicativa                                                                                                                                           |
| paymentDateTime                                               | String | data e ora del pagamento                                                                                                                                   |
| fee                                                           | String | importo della commissione espresso in euro                                                                                                                 |
| paymentMethod                                                 | String |                                                                                                                                                            |
| e-mail                                                        | String |                                                                                                                                                            |
| country                                                       | String |                                                                                                                                                            |
| stateProvinceRegion                                           | String |                                                                                                                                                            |
| city                                                          | String |                                                                                                                                                            |
| postalCode                                                    | String |                                                                                                                                                            |
| civicNumber                                                   | String |                                                                                                                                                            |
| streetName                                                    | String |                                                                                                                                                            |
| fullName<mark style="color:red;">\*</mark>                    | String | nome completo del debitore                                                                                                                                 |
| entityUniqueIdentifierValue<mark style="color:red;">\*</mark> | String | codice fiscale o partita IVA                                                                                                                               |
| entityUniqueIdentifierType<mark style="color:red;">\*</mark>  | String | <p><strong>F</strong> : Persona fisica</p><p><strong>G</strong> : Persona giuridica</p>                                                                    |
| uniqueIdentifier<mark style="color:red;">\*</mark>            | String |                                                                                                                                                            |
| payer                                                         | String | individua il pagatore                                                                                                                                      |
| value<mark style="color:red;">\*</mark>                       | String |                                                                                                                                                            |

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

{% tab title="Response schema" %}
[XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/ec/paForNode_2_0_0.xsd#L271)

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

**In questa versione possono essere inseriti i metadata in ogni singolo&#x20;**_**transfer**_**&#x20;della&#x20;**_**receipt.**_

[WSDL](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/ec/paForNode_2_0_0.wsdl#L123) - [XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/ec/paForNode_2_0_0.xsd#L262)

#### Request Body

| Name                                                          | Type   | Description                                                                                                                                                |
| ------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPA<mark style="color:red;">\*</mark>                        | String | codice fiscale della struttura che invia la richiesta di pagamento                                                                                         |
| receiptId<mark style="color:red;">\*</mark>                   | String | identificatore univoco della _receipt_ contiene il _paymentToken_ assegnato da pagoPa                                                                      |
| outcome<mark style="color:red;">\*</mark>                     | String | il risultato dell'operazione che può contenere i codici OK o KO                                                                                            |
| receipt<mark style="color:red;">\*</mark>                     | String | la ricevuta di pagamento                                                                                                                                   |
| idStation<mark style="color:red;">\*</mark>                   | String | identificativo della stazione dell'EC nel sistema pagoPa                                                                                                   |
| idBrokerPA<mark style="color:red;">\*</mark>                  | String | identificativo del soggetto che opera come intermediario per l'EC                                                                                          |
| entityUniqueIdentifierType<mark style="color:red;">\*</mark>  | String | <p><strong>F</strong> : Persona fisica</p><p><strong>G</strong> : Persona giuridica</p>                                                                    |
| uniqueIdentifier<mark style="color:red;">\*</mark>            | String |                                                                                                                                                            |
| debtor<mark style="color:red;">\*</mark>                      | String | individua il debitore a cui si riferisce la posizione debitoria                                                                                            |
| officeName                                                    | String |                                                                                                                                                            |
| companyName<mark style="color:red;">\*</mark>                 | String | nome completo dell'EC                                                                                                                                      |
| description<mark style="color:red;">\*</mark>                 | String |                                                                                                                                                            |
| paymentAmount<mark style="color:red;">\*</mark>               | String | importo espresso in euro                                                                                                                                   |
| creditorReferenceId<mark style="color:red;">\*</mark>         | String | **IUV** _Identificativo Univoco Versamento_                                                                                                                |
| fiscalCode<mark style="color:red;">\*</mark>                  | String | codice fiscale dell'EC                                                                                                                                     |
| noticeNumber<mark style="color:red;">\*</mark>                | String | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]                                                                                                    |
| entityUniqueIdentifierValue<mark style="color:red;">\*</mark> | String | codice fiscale o partita IVA                                                                                                                               |
| e-mail                                                        | String |                                                                                                                                                            |
| country                                                       | String |                                                                                                                                                            |
| stateProvinceRegion                                           | String |                                                                                                                                                            |
| city                                                          | String |                                                                                                                                                            |
| postalCode                                                    | String |                                                                                                                                                            |
| civicNumber                                                   | String |                                                                                                                                                            |
| streetName                                                    | String |                                                                                                                                                            |
| fullName<mark style="color:red;">\*</mark>                    | String | nome completo del debitore                                                                                                                                 |
| transferCategory<mark style="color:red;">\*</mark>            | String | codice tassonomico, composto da _Codice tipo Ente Creditore + Progressivo macro area + Codice tipologia servizio + Motivo Giuridico_ ( ex. **0101002IM** ) |
| remittanceInformation<mark style="color:red;">\*</mark>       | String | motivo del pagamento                                                                                                                                       |
| IBAN<mark style="color:red;">\*</mark>                        | String | IBAN sul quale sarà effettuato il riversamento                                                                                                             |
| fiscalCodePA<mark style="color:red;">\*</mark>                | String | codice fiscale dell'EC                                                                                                                                     |
| transferAmount<mark style="color:red;">\*</mark>              | String | importo                                                                                                                                                    |
| idTransfer<mark style="color:red;">\*</mark>                  | String | indice della lista (da 1 a 5)                                                                                                                              |
| transfer<mark style="color:red;">\*</mark>                    | String |                                                                                                                                                            |
| transferList<mark style="color:red;">\*</mark>                | String | struttura che contiene i dettagli dei _transfer_                                                                                                           |
| channelDescription<mark style="color:red;">\*</mark>          | String |                                                                                                                                                            |
| idChannel<mark style="color:red;">\*</mark>                   | String |                                                                                                                                                            |
| PSPCompanyName<mark style="color:red;">\*</mark>              | String |                                                                                                                                                            |
| pspPartitaIVA                                                 | String |                                                                                                                                                            |
| pspFiscalCode                                                 | String |                                                                                                                                                            |
| idPSP<mark style="color:red;">\*</mark>                       | String | identificativo del PSP                                                                                                                                     |
| key<mark style="color:red;">\*</mark>                         | String |                                                                                                                                                            |
| mapEntry<mark style="color:red;">\*</mark>                    | String |                                                                                                                                                            |
| metadata                                                      | String |                                                                                                                                                            |
| transferDate                                                  | String | data del riversamento                                                                                                                                      |
| applicationDate                                               | String | data applicativa                                                                                                                                           |
| paymentDateTime                                               | String | data e ora del pagamento                                                                                                                                   |
| fee                                                           | String | importo della commissione espresso in euro                                                                                                                 |
| paymentMethod                                                 | String |                                                                                                                                                            |
| e-mail                                                        | String |                                                                                                                                                            |
| country                                                       | String |                                                                                                                                                            |
| stateProvinceRegion                                           | String |                                                                                                                                                            |
| city                                                          | String |                                                                                                                                                            |
| postalCode                                                    | String |                                                                                                                                                            |
| civicNumber                                                   | String |                                                                                                                                                            |
| streetName                                                    | String |                                                                                                                                                            |
| fullName<mark style="color:red;">\*</mark>                    | String | nome completo del debitore                                                                                                                                 |
| entityUniqueIdentifierValue<mark style="color:red;">\*</mark> | String | codice fiscale o partita IVA                                                                                                                               |
| entityUniqueIdentifierType<mark style="color:red;">\*</mark>  | String | <p><strong>F</strong> : Persona fisica</p><p><strong>G</strong> : Persona giuridica</p>                                                                    |
| uniqueIdentifier<mark style="color:red;">\*</mark>            | String |                                                                                                                                                            |
| payer                                                         | String | individua il pagatore                                                                                                                                      |
| value<mark style="color:red;">\*</mark>                       | String |                                                                                                                                                            |
| value                                                         | String |                                                                                                                                                            |
| key                                                           | String |                                                                                                                                                            |
| mapEntry                                                      | String |                                                                                                                                                            |
| metadata                                                      | String |                                                                                                                                                            |

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
[XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/ec/paForNode_2_0_0.xsd#L271)

* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, da inserire obbligatoriamente in caso di _outcome_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## verifyPaymentNotice

<mark style="color:green;">`POST`</mark>&#x20;

[WSDL](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.wsdl#L221) - [XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.xsd#L260)

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
    </nfpsp:verifyPaymentNoticeRes>
  </soapenv:Body>
</soapenv:Envelope> 
```
{% endtab %}

{% tab title="Response schema" %}
[XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.xsd#L270)

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
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## verificaBollettino

<mark style="color:green;">`POST`</mark>&#x20;

[WSDL](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.wsdl#L209) - [XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.xsd#L227)

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
    </nfpsp:verificaBollettinoRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
[XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.xsd#L239)

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
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## activatePaymentNotice <a href="#activatepaymentnotice" id="activatepaymentnotice"></a>

## activatePaymentNotice versione 1

<mark style="color:green;">`POST`</mark>&#x20;

[WSDL](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp.wsdl#L126) - [XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp.xsd#L810)

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
    </nfpsp:activatePaymentNoticeRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
[XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp.xsd#L811)

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
    * fiscalCodePA﹡: al momento è valorizzato con _EQ_
    * IBAN﹡: IBAN sul quale verra riversata l'importo
    * remittanceInformation﹡: testo libero per descrivere l'oggetto del pagamento
* creditorReferenceId: **IUV** Identificativo Univoco Versamento, dato valorizzato solo in caso di _outcome_ OK
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## activatePaymentNotice versione 2

<mark style="color:green;">`POST`</mark>&#x20;

**In questa versione è possibile inserire i metadata in ogni singolo&#x20;**_**transfer**_**.**

[WSDL](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.wsdl#L233) - [XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.xsd#L290)

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
          <IBAN>IT0000000000000000000000001</IBAN>
          <remittanceInformation>remittanceInformation2</remittanceInformation>
        </transfer>
      </transferList>
      <creditorReferenceId>11111111112222222</creditorReferenceId>
    </nfpsp:activatePaymentNoticeRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
[XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.xsd#L309)

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
    * fiscalCodePA﹡: al momento è valorizzato con _EQ_
    * IBAN﹡: IBAN sul quale verra riversata l'importo
    * remittanceInformation﹡: testo libero per descrivere l'oggetto del pagamento
    * metadata: è un campo di archiviazione chiave/valore.
      * mapEntry﹡
        * key﹡
        * value﹡
* creditorReferenceId: **IUV** Identificativo Univoco Versamento, dato valorizzato solo in caso di _outcome_ OK
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## sendPaymentOutcome <a href="#sendpaymentoutcome" id="sendpaymentoutcome"></a>

## sendPaymentOutcome versione 1

<mark style="color:green;">`POST`</mark>&#x20;

[WSDL](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp.wsdl#L138) - [XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp.xsd#L812)

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
| entityUniqueIdentifierValue<mark style="color:red;">\*</mark> | String | codice fiscale o partita IVA                                                                                                                                                                                                                                                                             |
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
          <idempotencyKey>70000000001_100149bdWB</idempotencyKe
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
[XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp.xsd#L813)

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

**Utilizzata per il pagamento attivato presso il frontend dell'EC, rispetto alla versione 1 permette di inviare l'outcome di più payment tokens contemporaneamente.**

[WSDL](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.wsdl#L197) - [XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.xsd#L334)

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
| entityUniqueIdentifierValue<mark style="color:red;">\*</mark> | String | codice fiscale o partita IVA                                                                                                                                                                                                                                                                             |
| entityUniqueIdentifierType<mark style="color:red;">\*</mark>  | String | <p><strong>F</strong> : Persona fisica</p><p><strong>G</strong> : Persona giuridica</p>                                                                                                                                                                                                                  |
| paymentTokens<mark style="color:red;">\*</mark>               | String | sequence che contiene tutti i tokens                                                                                                                                                                                                                                                                     |
| idempotencyKey                                                | String | Chiave di idempotenza                                                                                                                                                                                                                                                                                    |

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
          <idempotencyKey>70000000001_100149bdWB</idempotencyKe
          <paymentTokens>
              <paymentToken>d221820d258c4ab1b765fe902aae6d14</paymentToken>
              <paymentToken>c110729d258c4ab1b765fe902aae41d6</paymentToken>
          </paymentTokens>
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
[XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.xsd#L350)

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

[WSDL](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/psp/pspForNode.wsdl#L10) - [XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/psp/pspForNode.xsd#L162)

#### Request Body

| Name                                                    | Type   | Description                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fiscalCodePA                                            | String | Codice fiscale dell'EC.                                                                                                                                                                                                                                                                                  |
| paymentToken<mark style="color:red;">\*</mark>          | String | Viene generato dal sistema durante la fase di attivazione del pagamento, è l'identificatore di correlazione da abbinare all'attivazione e all'esito del pagamento.                                                                                                                                       |
| idPSP<mark style="color:red;">\*</mark>                 | String | <p>Identificativo del PSP, assegnato da PagoPA.</p><p>Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.</p><p>In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.</p> |
| idChannel<mark style="color:red;">\*</mark>             | String | <p>Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.</p><p>Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.</p>                         |
| creditorReferenceId<mark style="color:red;">\*</mark>   | String | **IUV** Identificativo Univoco Versamento.                                                                                                                                                                                                                                                               |
| companyName<mark style="color:red;">\*</mark>           | String | Nome completo dell'EC.                                                                                                                                                                                                                                                                                   |
| officeName                                              | String | Nome completo dell'ufficio dell'EC.                                                                                                                                                                                                                                                                      |
| idBrokerPSP<mark style="color:red;">\*</mark>           | String | <p>Identificativo dell'intermediario, assegnato da PagoPA.</p><p>Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.</p><p>Nota: l'intermediario/broker può coincidere con il PSP stesso.</p>                                        |
| debtAmount<mark style="color:red;">\*</mark>            | String | Rappresenta la somma degli importi dei singoli transfer.                                                                                                                                                                                                                                                 |
| paymentDescription<mark style="color:red;">\*</mark>    | String | Testo libero per descrivere l'oggetto del pagamento.                                                                                                                                                                                                                                                     |
| remittanceInformation<mark style="color:red;">\*</mark> | String | Motivo del pagamento.                                                                                                                                                                                                                                                                                    |
| IBAN<mark style="color:red;">\*</mark>                  | String | IBAN sul quale sarà effettuato il riversamento                                                                                                                                                                                                                                                           |
| fiscalCodePA<mark style="color:red;">\*</mark>          | String | Codice fiscale dell'EC.                                                                                                                                                                                                                                                                                  |
| transferAmount<mark style="color:red;">\*</mark>        | String | Importo                                                                                                                                                                                                                                                                                                  |
| idTransfer<mark style="color:red;">\*</mark>            | String | Indice della lista (da 1 a 5).                                                                                                                                                                                                                                                                           |
| transfer<mark style="color:red;">\*</mark>              | String |                                                                                                                                                                                                                                                                                                          |
| transferList<mark style="color:red;">\*</mark>          | String | Struttura che contiene i dettagli dei transfer pagamento, al momento i transfer possono essere al massimo 5.                                                                                                                                                                                             |
| dati specifici del canale di pagamento                  | String | Struttura dati specifica del canale di pagamento utilizzato.                                                                                                                                                                                                                                             |

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
[XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/psp/pspForNode.xsd#L185)

* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, da inserire obbligatoriamente in caso di _outcome_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endtab %}

{% tab title="Dati specifici del canale di pagamento " %}
Carta di credito

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

**Utilizzata per il pagamento attivato presso il frontend dell'EC, rispetto alla precedente versione della pspNotifyPayment permette di inviare al PSP una lista di&#x20;**_**payment**_**, inoltre, le informazioni specifiche del pagamento utilizzato sono inserite nella sezione&#x20;**_**additionalPaymentInformations**_**&#x20;che contiene una lista di metadata.**

[WSDL](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/psp/pspForNode_2_0_0.wsdl#L30) - [XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/psp/pspForNode_2_0_0.xsd#L73)

#### Request Body

| Name                                                    | Type   | Description                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fiscalCodePA                                            | String | Codice fiscale dell'EC.                                                                                                                                                                                                                                                                                  |
| paymentToken<mark style="color:red;">\*</mark>          | String | Viene generato dal sistema durante la fase di attivazione del pagamento, è l'identificatore di correlazione da abbinare all'attivazione e all'esito del pagamento.                                                                                                                                       |
| idPSP<mark style="color:red;">\*</mark>                 | String | <p>Identificativo del PSP, assegnato da PagoPA.</p><p>Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.</p><p>In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.</p> |
| idChannel<mark style="color:red;">\*</mark>             | String | <p>Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.</p><p>Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.</p>                         |
| creditorReferenceId<mark style="color:red;">\*</mark>   | String | **IUV** Identificativo Univoco Versamento.                                                                                                                                                                                                                                                               |
| companyName<mark style="color:red;">\*</mark>           | String | Nome completo dell'EC.                                                                                                                                                                                                                                                                                   |
| officeName                                              | String | Nome completo dell'ufficio dell'EC.                                                                                                                                                                                                                                                                      |
| idBrokerPSP<mark style="color:red;">\*</mark>           | String | <p>Identificativo dell'intermediario, assegnato da PagoPA.</p><p>Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.</p><p>Nota: l'intermediario/broker può coincidere con il PSP stesso.</p>                                        |
| debtAmount<mark style="color:red;">\*</mark>            | String | Rappresenta la somma degli importi dei singoli transfer.                                                                                                                                                                                                                                                 |
| paymentDescription<mark style="color:red;">\*</mark>    | String | Testo libero per descrivere l'oggetto del pagamento.                                                                                                                                                                                                                                                     |
| remittanceInformation<mark style="color:red;">\*</mark> | String | Motivo del pagamento.                                                                                                                                                                                                                                                                                    |
| IBAN<mark style="color:red;">\*</mark>                  | String | IBAN sul quale sarà effettuato il riversamento                                                                                                                                                                                                                                                           |
| fiscalCodePA<mark style="color:red;">\*</mark>          | String | Codice fiscale dell'EC.                                                                                                                                                                                                                                                                                  |
| transferAmount<mark style="color:red;">\*</mark>        | String | Importo                                                                                                                                                                                                                                                                                                  |
| idTransfer<mark style="color:red;">\*</mark>            | String | Indice della lista (da 1 a 5).                                                                                                                                                                                                                                                                           |
| transfer<mark style="color:red;">\*</mark>              | String |                                                                                                                                                                                                                                                                                                          |
| transferList<mark style="color:red;">\*</mark>          | String | Struttura che contiene i dettagli dei transfer pagamento, al momento i transfer possono essere al massimo 5.                                                                                                                                                                                             |
| payment                                                 | String |                                                                                                                                                                                                                                                                                                          |
| paymentList                                             | String | Lista dei pagamenti.                                                                                                                                                                                                                                                                                     |
| additionalPaymentInformations                           | String | Struttura che contiene i dati specifici del canale di pagamento utilizzato.                                                                                                                                                                                                                              |
| metadata<mark style="color:red;">\*</mark>              | String |                                                                                                                                                                                                                                                                                                          |
| mapEntry<mark style="color:red;">\*</mark>              | String |                                                                                                                                                                                                                                                                                                          |
| key<mark style="color:red;">\*</mark>                   | String |                                                                                                                                                                                                                                                                                                          |
| value<mark style="color:red;">\*</mark>                 | String |                                                                                                                                                                                                                                                                                                          |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
<soapenv:Envelope>
      <soapenv:Body>
          <pspfn:pspNotifyPaymentReq>
            <idPSP>CIPBITMM</idPSP>
            <idBrokerPSP>13212880150</idBrokerPSP>
            <idChannel>13212880150_02</idChannel>
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
              </payment>
            </paymentList>                       
            <additionalPaymentInformations>
              <metadata>
                <mapEntry>
                  <key>xxxx</key>
                  <value>1234546</value>
                </mapEntry> 
              </metadata>
            </additionalPaymentInformations>
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
[XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/psp/pspForNode_2_0_0.xsd#L85)

* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, da inserire obbligatoriamente in caso di _outcome_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## demandPaymentNotice

<mark style="color:green;">`POST`</mark>&#x20;

WSDL - [XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.xsd#L194)

#### Request Body

| Name                                                    | Type   | Description                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPSP<mark style="color:red;">\*</mark>                 | String | <p>Identificativo del PSP, assegnato da PagoPA.</p><p>Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.</p><p>In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.</p> |
| datiSpecificiServizio<mark style="color:red;">\*</mark> | String | Sono censiti nel Catalogo dei Servizi, che è il repository che contiene l’elenco dei servizi generalizzati attivati dagli EC, inviati in formato base64.                                                                                                                                                 |
| idServizio<mark style="color:red;">\*</mark>            | String | Identificativo del servizio per cui si vuole attivare il pagamento.                                                                                                                                                                                                                                      |
| password<mark style="color:red;">\*</mark>              | String | Password del canale, assegnata da PagoPA.                                                                                                                                                                                                                                                                |
| idChannel<mark style="color:red;">\*</mark>             | String | <p>Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.</p><p>Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.</p>                         |
| idBrokerPSP<mark style="color:red;">\*</mark>           | String | <p>Identificativo dell'intermediario, assegnato da PagoPA.</p><p>Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.</p><p>Nota: l'intermediario/broker può coincidere con il PSP stesso.</p>                                        |

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
      <idServizio>001001002</idServizio> //identifica la codifica sul DB pagoPA per poter estrarre il destinatario
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
[XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.xsd#L207)

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

<mark style="color:green;">`POST`</mark>&#x20;

[WSDL](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/ec/paForNode_2_0_0.wsdl#L87) - [XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/ec/paForNode_2_0_0.xsd#L172)

#### Request Body

| Name                                                    | Type   | Description                                                                                                                                              |
| ------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPA<mark style="color:red;">\*</mark>                  | String | Codice fiscale della struttura che invia la richiesta di pagamento.                                                                                      |
| datiSpecificiServizio<mark style="color:red;">\*</mark> | String | Sono censiti nel Catalogo dei Servizi, che è il repository che contiene l’elenco dei servizi generalizzati attivati dagli EC, inviati in formato base64. |
| idServizio<mark style="color:red;">\*</mark>            | String | Identificativo del servizio per cui si vuole attivare il pagamento.                                                                                      |
| idStation<mark style="color:red;">\*</mark>             | String | Identificativo della stazione dell'EC nel sistema pagoPa.                                                                                                |
| idBrokerPA<mark style="color:red;">\*</mark>            | String | Identificativo del soggetto che opera come intermediario per l'EC.                                                                                       |

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
      <idServizio>001001002</idServizio>       
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
[XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/ec/paForNode_2_0_0.xsd#L184)

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

<mark style="color:green;">`POST`</mark>&#x20;

[WSDL](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.wsdl#L101) - [XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.xsd#L357)

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
[XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.xsd#L379)

* _esito_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _esito_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## nodoChiediElencoFlussiRendicontazione

<mark style="color:green;">`POST`</mark>&#x20;

[WSDL](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPa_2_0_0.wsdl#L56) - [XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPa_2_0_0.xsd#L38)

#### Request Body

| Name                                                                    | Type   | Description                                                                                                                                                                                                                                                                                              |
| ----------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identificativoIntermediarioPA<mark style="color:red;">\*</mark>         | String | Identificativo del soggetto che opera come intermediario per l'EC.                                                                                                                                                                                                                                       |
| identificativoPSP<mark style="color:red;">\*</mark>                     | String | <p>Identificativo del PSP, assegnato da PagoPA.</p><p>Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.</p><p>In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.</p> |
| identificativoDominio<mark style="color:red;">\*</mark>                 | String | Codice fiscale dell'EC.                                                                                                                                                                                                                                                                                  |
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
[XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPa_2_0_0.xsd#L53)

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

<mark style="color:green;">`POST`</mark>&#x20;

[WSDL](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPa_2_0_0.wsdl#L68) - [XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPa_2_0_0.xsd#L65)

#### Request Body

| Name                                                                    | Type   | Description                                                                                                                                                                                                                                                                                              |
| ----------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identificativoIntermediarioPA<mark style="color:red;">\*</mark>         | String | Identificativo del soggetto che opera come intermediario per l'EC.                                                                                                                                                                                                                                       |
| identificativoFlusso<mark style="color:red;">\*</mark>                  | String | Identificativo del Flusso di Rendicontazione.                                                                                                                                                                                                                                                            |
| identificativoPSP<mark style="color:red;">\*</mark>                     | String | <p>Identificativo del PSP, assegnato da PagoPA.</p><p>Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.</p><p>In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.</p> |
| identificativoDominio<mark style="color:red;">\*</mark>                 | String | Codice fiscale dell'EC.                                                                                                                                                                                                                                                                                  |
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
[XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPa_2_0_0.xsd#L81)

* _esito_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _esito_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* xmlRendicontazione: contenuto del flusso di riversamento in formato base64, dato valorizzato solo in caso di _esito_ OK
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## nodoChiediInformativaPA

<mark style="color:green;">`POST`</mark>&#x20;

[WSDL](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.wsdl#L120) - [XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.xsd#L391)

#### Request Body

| Name                                                             | Type   | Description                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identificativoPSP<mark style="color:red;">\*</mark>              | String | <p>Identificativo del PSP, assegnato da PagoPA.</p><p>Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.</p><p>In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.</p> |
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
        <ns5:nodoChiediInformativaPA>
            <identificativoPSP>88888888888</identificativoPSP>
            <identificativoIntermediarioPSP>88888888888</identificativoIntermediarioPSP>
            <identificativoCanale>88888888888_01</identificativoCanale>
            <password>**********</password>
            <identificativoDominio>77777777777</identificativoDominio>
        </ns5:nodoChiediInformativaPA>
    </soap:Body>
</soap:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
    <soapenv:Body>
        <ppt:nodoChiediInformativaPARisposta>
            <esito>OK</esito>
            <xmlInformativa>Informativa base64 encoded</xmlInformativa>
        </ppt:nodoChiediInformativaPARisposta>
    </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
[XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.xsd#L405)

* _esito_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _esito_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* xmlInformativa: contenuto dell'informativa in formato base64, dato valorizzato solo in caso di _esito_ OK
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## nodoChiediCatalogoServizi

<mark style="color:green;">`POST`</mark>&#x20;

[WSDL](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.wsdl#L128) - [XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.xsd#L445)

#### Request Body

| Name                                                             | Type   | Description                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identificativoPSP<mark style="color:red;">\*</mark>              | String | <p>Identificativo del PSP, assegnato da PagoPA.</p><p>Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.</p><p>In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.</p> |
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
        <ns5:nodoChiediCatalogoServizi>
            <identificativoPSP>88888888888</identificativoPSP>
            <identificativoIntermediarioPSP>88888888888</identificativoIntermediarioPSP>
            <identificativoCanale>88888888888_01</identificativoCanale>
            <password>**********</password>
            <identificativoDominio>77777777777</identificativoDominio>
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
[XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.xsd#L464)

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

<mark style="color:green;">`POST`</mark>&#x20;

[WSDL](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.wsdl#L111) - [XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.xsd#L405)

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
[XSD](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/nodo/nodeForPsp_2_0_0.xsd#L418)

* _esito_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _esito_ KO [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* xmlTemplateInformativa: template dell'informativa in formato base64, dato valorizzato solo in caso di _esito_ OK


{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

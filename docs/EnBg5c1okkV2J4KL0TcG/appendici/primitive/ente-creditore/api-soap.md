# API SOAP

Per la gestione degli errori fare riferimento a [Gestione degli errori](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention").

{% hint style="info" %}
I campi contrassegnati con﹡sono obbligatori
{% endhint %}

Per i dettagli [https://github.com/pagopa/pagopa-api/tree/SANP3.11.0](https://github.com/pagopa/pagopa-api/tree/SANP3.11.0)

## paVerifyPaymentNotice

<mark style="color:green;">`POST`</mark>

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

<mark style="color:green;">`POST`</mark>

#### Request Body

<table><thead><tr><th width="370">Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>idPA<mark style="color:red;">*</mark></td><td>String</td><td>Codice fiscale della struttura che invia la richiesta di pagamento.</td></tr><tr><td>dueDate</td><td>String</td><td><p>Se presente, rappresenta la data di scadenza del pagamento secondo il formato ISO 8601 [AAAA]-[MM]-[GG].</p><p>Per maggiori informazioni, consulta le <a href="../../../ente-creditore/modalita-dintegrazione/best-practice.md">Best Practice.</a></p></td></tr><tr><td>transferType</td><td>String</td><td>Valore ammesso: POSTAL.</td></tr><tr><td>paymentNote</td><td>String</td><td>Descrizione del pagamento. Valorizzato con <em>idCart</em>, nel caso il parametro venisse valorizzato nel <a data-mention href="../../../casi-duso/pagamento-presso-frontend-dellec.md">pagamento-presso-frontend-dellec.md</a></td></tr><tr><td>amount</td><td>String</td><td>Importo del pagamento in euro.</td></tr><tr><td>noticeNumber<mark style="color:red;">*</mark></td><td>String</td><td>[auxDigit][segregationCode][IUVBase][IUVCheckDigit]</td></tr><tr><td>fiscalCode<mark style="color:red;">*</mark></td><td>String</td><td>Codice fiscale dell'EC.</td></tr><tr><td>qrCode<mark style="color:red;">*</mark></td><td>String</td><td>E' composto da <em>fiscalCode</em> e <em>noticeNumber.</em></td></tr><tr><td>idStation<mark style="color:red;">*</mark></td><td>String</td><td>Identificativo della stazione dell'EC nel sistema pagoPa.</td></tr><tr><td>idBrokerPA<mark style="color:red;">*</mark></td><td>String</td><td>Identificativo del soggetto che opera come intermediario per l'EC.</td></tr></tbody></table>

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
      * transferCategory﹡: codice tassonomico, composto da _Codice tipo Ente Creditore + Progressivo macro area + Codice tipologia servizio + Motivo Giuridico_ ( ex. **0101002IM** )
  * metadata: è un campo di archiviazione chiave/valore ad uso esclusivo dell'EC. I dati saranno inseriti nella _receipt_ (_paSendRT_)
    * mapEntry﹡
      * key﹡
      * value﹡
{% endtab %}
{% endtabs %}
{% endtab %}
{% endtabs %}

## paGetPayment versione 2

<mark style="color:green;">`POST`</mark>

**In questa versione è possibile inserire i metadata in ogni singolo&#x20;**_**transfer**_**, inoltre è possibile gestire il servizio @e.bollo.**

#### Request Body

| Name                                           | Type   | Description                                                                                                                                                                                                                                               |
| ---------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPA<mark style="color:red;">\*</mark>         | String | Codice fiscale della struttura che invia la richiesta di pagamento.                                                                                                                                                                                       |
| idBrokerPA<mark style="color:red;">\*</mark>   | String | Identificativo del soggetto che opera come intermediario per l'EC.                                                                                                                                                                                        |
| idStation<mark style="color:red;">\*</mark>    | String | Identificativo della stazione dell'EC nel sistema pagoPa.                                                                                                                                                                                                 |
| qrCode<mark style="color:red;">\*</mark>       | String | E' composto da _fiscalCode_ e _noticeNumber._                                                                                                                                                                                                             |
| amount<mark style="color:red;">\*</mark>       | String | Importo del pagamento in euro                                                                                                                                                                                                                             |
| paymentNote                                    | String | Descrizione del pagamento. Valorizzato con _idCart_, nel caso il parametro venisse valorizzato nel [pagamento-presso-frontend-dellec.md](../../../casi-duso/pagamento-presso-frontend-dellec.md "mention")                                                |
| transferType                                   | String | <p>Valori ammessi</p><p>POSTAL</p><p>PAGOPA</p>                                                                                                                                                                                                           |
| dueDate                                        | String | <p>Se presente, rappresenta la data di scadenza del pagamento secondo il formato ISO 8601 [AAAA]-[MM]-[GG].</p><p>Per maggiori informazioni, consulta le <a href="../../../ente-creditore/modalita-dintegrazione/best-practice.md">Best Practice</a>.</p> |
| fiscalCode<mark style="color:red;">\*</mark>   | String | codice fiscale dell'EC                                                                                                                                                                                                                                    |
| noticeNumber<mark style="color:red;">\*</mark> | String | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]                                                                                                                                                                                                   |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
<soapenv:Envelope>
    <soapenv:Body>
      <pafn:paGetPaymentV2Request>
        <idPA>77777777777</idPA>
        <idBrokerPA>77777777777</idBrokerPA>
        <idStation>77777777777_01</idStation>
        <qrCode>
          <fiscalCode>77777777777</fiscalCode>
          <noticeNumber>311111111112222222</noticeNumber>
        </qrCode>
        <amount>30.00</amount>
      </pafn:paGetPaymentV2Request>
    </soapenv:Body>
  </soapenv:Envelope>         
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Header />
  <soapenv:Body>
    <paf:paGetPaymentV2Response>
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
    </paf:paGetPaymentV2Response>
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
      * transferCategory﹡: codice tassonomico, composto da _Codice tipo Ente Creditore + Progressivo macro area + Codice tipologia servizio + Motivo Giuridico_ ( ex. **0101002IM** )
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

<mark style="color:green;">`POST`</mark>

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

<mark style="color:green;">`POST`</mark>

**In questa versione possono essere inseriti i metadata in ogni singolo&#x20;**_**transfer**_**&#x20;della&#x20;**_**receipt,**_**&#x20;inoltre sono gestite le informazioni ricavate da** [gestione-evoluta-commissioni.md](../../gestione-evoluta-commissioni.md "mention")**e il servizio @e.bollo.**

#### Request Body

| Name                                                          | Type    | Description                                                                                                                                                                                                |
| ------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idPA<mark style="color:red;">\*</mark>                        | String  | codice fiscale della struttura che invia la richiesta di pagamento                                                                                                                                         |
| idBrokerPA<mark style="color:red;">\*</mark>                  | String  | identificativo del soggetto che opera come intermediario per l'EC                                                                                                                                          |
| idStation<mark style="color:red;">\*</mark>                   | String  | identificativo della stazione dell'EC nel sistema pagoPa                                                                                                                                                   |
| receipt<mark style="color:red;">\*</mark>                     | String  | la ricevuta di pagamento                                                                                                                                                                                   |
| receiptId<mark style="color:red;">\*</mark>                   | String  | identificatore univoco della _receipt_ contiene il _paymentToken_ assegnato da pagoPa                                                                                                                      |
| noticeNumber<mark style="color:red;">\*</mark>                | String  | \[auxDigit]\[segregationCode]\[IUVBase]\[IUVCheckDigit]                                                                                                                                                    |
| fiscalCode<mark style="color:red;">\*</mark>                  | String  | codice fiscale dell'EC                                                                                                                                                                                     |
| outcome<mark style="color:red;">\*</mark>                     | String  | il risultato dell'operazione che può contenere i codici OK o KO                                                                                                                                            |
| creditorReferenceId<mark style="color:red;">\*</mark>         | String  | **IUV** _Identificativo Univoco Versamento_                                                                                                                                                                |
| paymentAmount<mark style="color:red;">\*</mark>               | String  | importo espresso in euro                                                                                                                                                                                   |
| description<mark style="color:red;">\*</mark>                 | String  |                                                                                                                                                                                                            |
| companyName<mark style="color:red;">\*</mark>                 | String  | nome completo dell'EC                                                                                                                                                                                      |
| officeName                                                    | String  |                                                                                                                                                                                                            |
| debtor<mark style="color:red;">\*</mark>                      | String  | individua il debitore a cui si riferisce la posizione debitoria                                                                                                                                            |
| uniqueIdentifier<mark style="color:red;">\*</mark>            | String  |                                                                                                                                                                                                            |
| entityUniqueIdentifierType<mark style="color:red;">\*</mark>  | String  | <p><strong>F</strong> : Persona fisica</p><p><strong>G</strong> : Persona giuridica</p>                                                                                                                    |
| entityUniqueIdentifierValue<mark style="color:red;">\*</mark> | String  | codice fiscale o partita IVA                                                                                                                                                                               |
| fullName<mark style="color:red;">\*</mark>                    | String  | nome completo del debitore                                                                                                                                                                                 |
| streetName                                                    | String  |                                                                                                                                                                                                            |
| civicNumber                                                   | String  |                                                                                                                                                                                                            |
| postalCode                                                    | String  |                                                                                                                                                                                                            |
| city                                                          | String  |                                                                                                                                                                                                            |
| stateProvinceRegion                                           | String  |                                                                                                                                                                                                            |
| country                                                       | String  |                                                                                                                                                                                                            |
| e-mail                                                        | String  |                                                                                                                                                                                                            |
| transferList<mark style="color:red;">\*</mark>                | String  | struttura che contiene i dettagli dei _transfer_                                                                                                                                                           |
| transfer<mark style="color:red;">\*</mark>                    | String  |                                                                                                                                                                                                            |
| idTransfer<mark style="color:red;">\*</mark>                  | String  | indice della lista (da 1 a 5)                                                                                                                                                                              |
| transferAmount<mark style="color:red;">\*</mark>              | String  | importo                                                                                                                                                                                                    |
| fiscalCodePA<mark style="color:red;">\*</mark>                | String  | codice fiscale dell'EC                                                                                                                                                                                     |
| companyName                                                   | String  | nome completo dell'EC                                                                                                                                                                                      |
| IBAN                                                          | String  | IBAN sul quale sarà effettuato il riversamento                                                                                                                                                             |
| remittanceInformation<mark style="color:red;">\*</mark>       | String  | motivo del pagamento                                                                                                                                                                                       |
| transferCategory<mark style="color:red;">\*</mark>            | String  | codice tassonomico, composto da _Codice tipo Ente Creditore + Progressivo macro area + Codice tipologia servizio + Motivo Giuridico_ ( ex. **0101002IM** )                                                 |
| metadata                                                      | String  |                                                                                                                                                                                                            |
| mapEntry                                                      | String  |                                                                                                                                                                                                            |
| key                                                           | String  |                                                                                                                                                                                                            |
| value<mark style="color:red;">\*</mark>                       | String  |                                                                                                                                                                                                            |
| idPSP<mark style="color:red;">\*</mark>                       | String  | identificativo del PSP                                                                                                                                                                                     |
| pspFiscalCode                                                 | String  |                                                                                                                                                                                                            |
| pspPartitaIVA                                                 | String  |                                                                                                                                                                                                            |
| PSPCompanyName<mark style="color:red;">\*</mark>              | String  |                                                                                                                                                                                                            |
| idChannel<mark style="color:red;">\*</mark>                   | String  |                                                                                                                                                                                                            |
| channelDescription<mark style="color:red;">\*</mark>          | String  |                                                                                                                                                                                                            |
| payer                                                         | String  | individua il pagatore                                                                                                                                                                                      |
| uniqueIdentifier<mark style="color:red;">\*</mark>            | String  |                                                                                                                                                                                                            |
| entityUniqueIdentifierType<mark style="color:red;">\*</mark>  | String  | <p><strong>F</strong> : Persona fisica</p><p><strong>G</strong> : Persona giuridica</p>                                                                                                                    |
| entityUniqueIdentifierValue<mark style="color:red;">\*</mark> | String  | codice fiscale o partita IVA                                                                                                                                                                               |
| fullName<mark style="color:red;">\*</mark>                    | String  | nome completo del debitore                                                                                                                                                                                 |
| streetName                                                    | String  |                                                                                                                                                                                                            |
| civicNumber                                                   | String  |                                                                                                                                                                                                            |
| postalCode                                                    | String  |                                                                                                                                                                                                            |
| city                                                          | String  |                                                                                                                                                                                                            |
| stateProvinceRegion                                           | String  |                                                                                                                                                                                                            |
| country                                                       | String  |                                                                                                                                                                                                            |
| e-mail                                                        | String  |                                                                                                                                                                                                            |
| paymentMethod                                                 | String  |                                                                                                                                                                                                            |
| fee                                                           | String  | importo della commissione espresso in euro                                                                                                                                                                 |
| primaryCiIncurredFee                                          | String  | importo della commissione a carico dell'EC espresso in euro ricavato da [gestione-evoluta-commissioni.md](../../gestione-evoluta-commissioni.md "mention")                                                 |
| idBundle                                                      | String  | identificativo del pacchetto di [gestione-evoluta-commissioni.md](../../gestione-evoluta-commissioni.md "mention")                                                                                         |
| idCiBundle                                                    | String  | identificativo degli attributi aggiunti dall'EC al pacchetto di [gestione-evoluta-commissioni.md](../../gestione-evoluta-commissioni.md "mention")                                                         |
| paymentDateTime                                               | String  | data e ora del pagamento                                                                                                                                                                                   |
| applicationDate                                               | String  | data applicativa                                                                                                                                                                                           |
| transferDate                                                  | String  | data del riversamento                                                                                                                                                                                      |
| metadata                                                      | String  |                                                                                                                                                                                                            |
| mapEntry                                                      | String  |                                                                                                                                                                                                            |
| key                                                           | String  |                                                                                                                                                                                                            |
| value                                                         | String  |                                                                                                                                                                                                            |
| CHOICE<mark style="color:red;">\*</mark>                      | String  | Choice tra IBAN e marcaDaBollo                                                                                                                                                                             |
| tipoBollo                                                     | String  | Tipologia del bollo                                                                                                                                                                                        |
| marcaDaBollo                                                  | String  | I dati della marca da bollo digitale                                                                                                                                                                       |
| MBDAttachment                                                 | String  | Il documento XML che contiene la marca da bollo digitale, nel formato base64.                                                                                                                              |
| paymentNote                                                   | String  | Descrizione del pagamento. Valorizzato con _idCart_, nel caso il parametro venisse valorizzato nel [pagamento-presso-frontend-dellec.md](../../../casi-duso/pagamento-presso-frontend-dellec.md "mention") |
| standin                                                       | Boolean | true: pagamento avvenuto in Stand in                                                                                                                                                                       |

{% tabs %}
{% tab title="200: OK " %}
{% tabs %}
{% tab title="Request example" %}
```xml
  <soapenv:Envelope>
    <soapenv:Body>
      <pafn:paSendRTV2Request>
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
      </pafn:paSendRTV2Request>
    </soapenv:Body>
  </soapenv:Envelope>
```
{% endtab %}

{% tab title="Response example" %}
```xml
<soapenv:Envelope>
  <soapenv:Body>
    <paf:paSendRTV2Response>
      <outcome>OK</outcome>
    </paf:paSendRTV2Response>
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

## paDemandPaymentNotice

<mark style="color:green;">`POST`</mark>

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

## nodoChiediElencoFlussiRendicontazione

<mark style="color:green;">`POST`</mark>

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

<mark style="color:green;">`POST`</mark>

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

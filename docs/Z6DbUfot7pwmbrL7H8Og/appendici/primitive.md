# Primitive

Per la gestione degli errori fare riferimento a [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention").

{% hint style="info" %}
I campi contrassegnati con﹡sono obbligatori
{% endhint %}

Per i dettagli [https://github.com/pagopa/pagopa-api/tree/SANP3.3.1](https://github.com/pagopa/pagopa-api/tree/SANP3.3.1)

{% swagger method="post" path="" baseUrl="" summary="paVerifyPaymentNotice" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="idPA" required="true" %}
codice fiscale della struttura che invia la richiesta di pagamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idBrokerPA" required="true" %}
identificativo del soggetto che opera come intermediario per l'EC
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idStation" required="true" %}
identificativo della stazione dell'EC nel sistema pagoPa
{% endswagger-parameter %}

{% swagger-parameter in="body" name="qrCode" required="true" %}
è composto da 

_fiscalCode_

 e 

_noticeNumber_
{% endswagger-parameter %}

{% swagger-parameter in="body" name="fiscalCode" required="true" %}
codice fiscale dell'EC
{% endswagger-parameter %}

{% swagger-parameter in="body" name="noticeNumber" required="true" %}
\[auxDigit][segregationCode][IUVBase][IUVCheckDigit]
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
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
* _fault_: tutti i dettagli dell'errore, da inserire obbligatoriamente in caso di _outcome_ KO [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
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
{% endswagger-response %}
{% endswagger %}

## paGetPayment <a href="#pagetpayment" id="pagetpayment"></a>

{% swagger method="post" path="" baseUrl="" summary="paGetPayment versione 1" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="idPA" required="true" %}
Codice fiscale della struttura che invia la richiesta di pagamento.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idBrokerPA" required="true" %}
Identificativo del soggetto che opera come intermediario per l'EC.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idStation" required="true" %}
Identificativo della stazione dell'EC nel sistema pagoPa.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="qrCode" required="true" %}
E' composto da 

_fiscalCode_

 e 

_noticeNumber._
{% endswagger-parameter %}

{% swagger-parameter in="body" name="fiscalCode" required="true" %}
Codice fiscale dell'EC.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="noticeNumber" required="true" %}
\[auxDigit][segregationCode][IUVBase][IUVCheckDigit]
{% endswagger-parameter %}

{% swagger-parameter in="body" name="amount" %}
Importo del pagamento in euro.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="paymentNote" %}
Descrizione del pagamento.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="transferType" %}
Valore ammesso: POSTAL.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="dueDate" %}
Data di scadenza del pagamento secondo il formato ISO 8601 [AAAA]-[MM]-[GG].
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
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
* _fault_: tutti i dettagli dell'errore, da inserire obbligatoriamente in caso di _outcome_ KO [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
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
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="" baseUrl="" summary="paGetPayment versione 2" %}
{% swagger-description %}
**In questa versione è possibile inserire i metadata in ogni singolo **

_**transfer**_

**, inoltre è possibile gestire il servizio @e.bollo.**
{% endswagger-description %}

{% swagger-parameter in="body" name="idPA" required="true" %}
Codice fiscale della struttura che invia la richiesta di pagamento.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idBrokerPA" required="true" %}
Identificativo del soggetto che opera come intermediario per l'EC.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idStation" required="true" %}
Identificativo della stazione dell'EC nel sistema pagoPa.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="qrCode" required="true" %}
E' composto da 

_fiscalCode_

 e 

_noticeNumber._
{% endswagger-parameter %}

{% swagger-parameter in="body" name="fiscalCode" required="true" %}
codice fiscale dell'EC
{% endswagger-parameter %}

{% swagger-parameter in="body" name="noticeNumber" required="true" %}
\[auxDigit][segregationCode][IUVBase][IUVCheckDigit]
{% endswagger-parameter %}

{% swagger-parameter in="body" name="amount" required="true" %}
importo del pagamento in euro
{% endswagger-parameter %}

{% swagger-parameter in="body" name="paymentNote" %}
descrizione del pagamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="transferType" %}
valore ammesso: POSTAL
{% endswagger-parameter %}

{% swagger-parameter in="body" name="dueDate" %}
data di scadenza del pagamento secondo il formato ISO 8601 [AAAA]-[MM]-[GG]
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
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
* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, da inserire obbligatoriamente in caso di _outcome_ KO [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
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
      * **CHOICE**\*
        * IBAN: IBAN sul quale sarà effettuato il riversamento
        * richiestaMarcaDaBollo: i dati della richiesta della marca da bollo
          * _tipoBollo_: tipologia del bollo
          * _hashDocumento_: contiene l’impronta informatica (digest), nel formato base64, del documento informatico o della segnatura di protocollo cui è associata la marca da bollo digitale
          * _provinciaResidenza_: sigla automobilistica della provincia di residenza del soggetto pagatore
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
{% endswagger-response %}
{% endswagger %}

## paSendRT <a href="#pasendrt" id="pasendrt"></a>

{% swagger method="post" path="" baseUrl="" summary="paSendRT versione 1" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="idPA" required="true" %}
codice fiscale della struttura che invia la richiesta di pagamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idBrokerPA" required="true" %}
identificativo del soggetto che opera come intermediario per l'EC
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idStation" required="true" %}
identificativo della stazione dell'EC nel sistema pagoPa
{% endswagger-parameter %}

{% swagger-parameter in="body" name="receipt" required="true" %}
la ricevuta di pagamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="outcome" required="true" %}
il risultato dell'operazione che può contenere i codici OK o KO
{% endswagger-parameter %}

{% swagger-parameter in="body" name="receiptId" required="true" %}
identificatore univoco della 

_receipt_

 contiene il 

_paymentToken_

 assegnato da pagoPa
{% endswagger-parameter %}

{% swagger-parameter in="body" name="noticeNumber" required="true" %}
\[auxDigit][segregationCode][IUVBase][IUVCheckDigit]
{% endswagger-parameter %}

{% swagger-parameter in="body" name="fiscalCode" required="true" %}
codice fiscale dell'EC
{% endswagger-parameter %}

{% swagger-parameter in="body" name="creditorReferenceId" required="true" %}
**IUV**

 

_Identificativo Univoco Versamento_
{% endswagger-parameter %}

{% swagger-parameter in="body" name="paymentAmount" required="true" %}
importo espresso in euro
{% endswagger-parameter %}

{% swagger-parameter in="body" name="description" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="companyName" required="true" %}
nome completo dell'EC
{% endswagger-parameter %}

{% swagger-parameter in="body" name="officeName" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="debtor" required="true" %}
individua il debitore a cui si riferisce la posizione debitoria
{% endswagger-parameter %}

{% swagger-parameter in="body" name="uniqueIdentifier" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="entityUniqueIdentifierType" required="true" %}
**F** : Persona fisica

**G** : Persona giuridica
{% endswagger-parameter %}

{% swagger-parameter in="body" name="entityUniqueIdentifierValue" required="true" %}
codice fiscale o partita IVA
{% endswagger-parameter %}

{% swagger-parameter in="body" name="fullName" required="true" %}
nome completo del debitore
{% endswagger-parameter %}

{% swagger-parameter in="body" name="streetName" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="civicNumber" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="postalCode" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="city" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="stateProvinceRegion" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="country" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="e-mail" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="transferList" required="true" %}
struttura che contiene i dettagli dei 

_transfer_
{% endswagger-parameter %}

{% swagger-parameter in="body" name="transfer" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="idTransfer" required="true" %}
indice della lista (da 1 a 5)
{% endswagger-parameter %}

{% swagger-parameter in="body" name="transferAmount" required="true" %}
importo
{% endswagger-parameter %}

{% swagger-parameter in="body" name="fiscalCodePA" required="true" %}
codice fiscale dell'EC
{% endswagger-parameter %}

{% swagger-parameter in="body" name="IBAN" required="true" %}
IBAN sul quale sarà effettuato il riversamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="remittanceInformation" required="true" %}
motivo del pagamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="transferCategory" required="true" %}
codice tassonomico, composto da 

_Codice tipo Ente Creditore + Progressivo macro area + Codice tipologia servizio + Motivo Giuridico_

 ( ex. 

**0101002IM**

 )
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idPSP" required="true" %}
identificativo del PSP
{% endswagger-parameter %}

{% swagger-parameter in="body" name="pspFiscalCode" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="pspPartitaIVA" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="PSPCompanyName" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="idChannel" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="channelDescription" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="payer" %}
individua il pagatore
{% endswagger-parameter %}

{% swagger-parameter in="body" name="uniqueIdentifier" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="entityUniqueIdentifierType" required="true" %}
**F** : Persona fisica

**G** : Persona giuridica
{% endswagger-parameter %}

{% swagger-parameter in="body" name="entityUniqueIdentifierValue" required="true" %}
codice fiscale o partita IVA
{% endswagger-parameter %}

{% swagger-parameter in="body" name="fullName" required="true" %}
nome completo del debitore
{% endswagger-parameter %}

{% swagger-parameter in="body" name="streetName" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="civicNumber" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="postalCode" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="city" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="stateProvinceRegion" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="country" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="e-mail" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="paymentMethod" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="fee" %}
importo della commissione espresso in euro
{% endswagger-parameter %}

{% swagger-parameter in="body" name="paymentDateTime" %}
data e ora del pagamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="applicationDate" %}
data applicativa
{% endswagger-parameter %}

{% swagger-parameter in="body" name="transferDate" %}
data del riversamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="metadata" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="mapEntry" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="key" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="value" required="true" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
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
</soapenv:Envelope
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, da inserire obbligatoriamente in caso di _outcome_ KO [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endtab %}
{% endtabs %}
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="" baseUrl="" summary="paSendRT versione 2" %}
{% swagger-description %}
**In questa versione possono essere inseriti i metadata in ogni singolo **

_**transfer**_

** della **

_**receipt,**_

** inoltre sono gestite le informazioni ricavate da**

 

[gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")

**e il servizio @e.bollo.**
{% endswagger-description %}

{% swagger-parameter in="body" name="idPA" required="true" %}
codice fiscale della struttura che invia la richiesta di pagamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idBrokerPA" required="true" %}
identificativo del soggetto che opera come intermediario per l'EC
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idStation" required="true" %}
identificativo della stazione dell'EC nel sistema pagoPa
{% endswagger-parameter %}

{% swagger-parameter in="body" name="receipt" required="true" %}
la ricevuta di pagamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="outcome" required="true" %}
il risultato dell'operazione che può contenere i codici OK o KO
{% endswagger-parameter %}

{% swagger-parameter in="body" name="receiptId" required="true" %}
identificatore univoco della 

_receipt_

 contiene il 

_paymentToken_

 assegnato da pagoPa
{% endswagger-parameter %}

{% swagger-parameter in="body" name="noticeNumber" required="true" %}
\[auxDigit][segregationCode][IUVBase][IUVCheckDigit]
{% endswagger-parameter %}

{% swagger-parameter in="body" name="fiscalCode" required="true" %}
codice fiscale dell'EC
{% endswagger-parameter %}

{% swagger-parameter in="body" name="creditorReferenceId" required="true" %}
**IUV**

 

_Identificativo Univoco Versamento_
{% endswagger-parameter %}

{% swagger-parameter in="body" name="paymentAmount" required="true" %}
importo espresso in euro
{% endswagger-parameter %}

{% swagger-parameter in="body" name="description" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="companyName" required="true" %}
nome completo dell'EC
{% endswagger-parameter %}

{% swagger-parameter in="body" name="officeName" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="debtor" required="true" %}
individua il debitore a cui si riferisce la posizione debitoria
{% endswagger-parameter %}

{% swagger-parameter in="body" name="uniqueIdentifier" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="entityUniqueIdentifierType" required="true" %}
**F** : Persona fisica

**G** : Persona giuridica
{% endswagger-parameter %}

{% swagger-parameter in="body" name="entityUniqueIdentifierValue" required="true" %}
codice fiscale o partita IVA
{% endswagger-parameter %}

{% swagger-parameter in="body" name="fullName" required="true" %}
nome completo del debitore
{% endswagger-parameter %}

{% swagger-parameter in="body" name="streetName" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="civicNumber" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="postalCode" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="city" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="stateProvinceRegion" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="country" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="e-mail" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="transferList" required="true" %}
struttura che contiene i dettagli dei 

_transfer_
{% endswagger-parameter %}

{% swagger-parameter in="body" name="transfer" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="idTransfer" required="true" %}
indice della lista (da 1 a 5)
{% endswagger-parameter %}

{% swagger-parameter in="body" name="transferAmount" required="true" %}
importo
{% endswagger-parameter %}

{% swagger-parameter in="body" name="fiscalCodePA" required="true" %}
codice fiscale dell'EC
{% endswagger-parameter %}

{% swagger-parameter in="body" name="CHOICE" required="true" %}
Choice tra IBAN e marcaDaBollo
{% endswagger-parameter %}

{% swagger-parameter in="body" name="IBAN" required="false" %}
IBAN sul quale sarà effettuato il riversamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="marcaDaBollo" %}
I dati della marca da bollo digitale
{% endswagger-parameter %}

{% swagger-parameter in="body" name="tipoBollo" %}
Tipologia del bollo
{% endswagger-parameter %}

{% swagger-parameter in="body" name="MBDAttachment" %}
Il documento XML che contiene la marca da bollo digitale, nel formato base64.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="remittanceInformation" required="true" %}
motivo del pagamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="transferCategory" required="true" %}
codice tassonomico, composto da 

_Codice tipo Ente Creditore + Progressivo macro area + Codice tipologia servizio + Motivo Giuridico_

 ( ex. 

**0101002IM**

 )
{% endswagger-parameter %}

{% swagger-parameter in="body" name="metadata" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="mapEntry" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="key" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="value" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="idPSP" required="true" %}
identificativo del PSP
{% endswagger-parameter %}

{% swagger-parameter in="body" name="pspFiscalCode" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="pspPartitaIVA" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="PSPCompanyName" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="idChannel" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="channelDescription" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="payer" %}
individua il pagatore
{% endswagger-parameter %}

{% swagger-parameter in="body" name="uniqueIdentifier" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="entityUniqueIdentifierType" required="true" %}
**F** : Persona fisica

**G** : Persona giuridica
{% endswagger-parameter %}

{% swagger-parameter in="body" name="entityUniqueIdentifierValue" required="true" %}
codice fiscale o partita IVA
{% endswagger-parameter %}

{% swagger-parameter in="body" name="fullName" required="true" %}
nome completo del debitore
{% endswagger-parameter %}

{% swagger-parameter in="body" name="streetName" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="civicNumber" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="postalCode" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="city" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="stateProvinceRegion" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="country" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="e-mail" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="paymentMethod" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="fee" %}
importo della commissione espresso in euro
{% endswagger-parameter %}

{% swagger-parameter in="body" name="primaryCiIncurredFee" %}
importo della commissione a carico dell'EC espresso in euro ricavato da 

[gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")


{% endswagger-parameter %}

{% swagger-parameter in="body" name="idBundle" %}
identificativo del pacchetto di 

[gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")


{% endswagger-parameter %}

{% swagger-parameter in="body" name="idCiBundle" %}
identificativo degli attributi aggiunti dall'EC al pacchetto di 

[gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")


{% endswagger-parameter %}

{% swagger-parameter in="body" name="paymentDateTime" %}
data e ora del pagamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="applicationDate" %}
data applicativa
{% endswagger-parameter %}

{% swagger-parameter in="body" name="transferDate" %}
data del riversamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="metadata" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="mapEntry" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="key" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="value" required="true" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
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
* _fault_: tutti i dettagli dell'errore, da inserire obbligatoriamente in caso di _outcome_ KO [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endtab %}
{% endtabs %}
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="" baseUrl="" summary="verifyPaymentNotice" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="idPSP" required="true" %}
Identificativo del PSP, assegnato da PagoPA.

Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.

In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idBrokerPSP" required="true" %}
Identificativo dell'intermediario, assegnato da PagoPA.

Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.

Nota: l'intermediario/broker può coincidere con il PSP stesso.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idChannel" required="true" %}
Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.

Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="password" required="true" %}
Password del canale, assegnata da PagoPA.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="qrCode" required="true" %}
è composto da 

_fiscalCode_

 e 

_noticeNumber._
{% endswagger-parameter %}

{% swagger-parameter in="body" name="fiscalCode" required="true" %}
codice fiscale dell'EC. 
{% endswagger-parameter %}

{% swagger-parameter in="body" name="noticeNumber" required="true" %}
\[auxDigit][segregationCode][IUVBase][IUVCheckDigit]
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
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
* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _outcome_ KO [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
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
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="" baseUrl="" summary="verificaBollettino" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="idPSP" required="true" %}
Identificativo del PSP, assegnato da PagoPA.

Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.

In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idBrokerPSP" required="true" %}
Identificativo dell'intermediario, assegnato da PagoPA.

Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.

Nota: l'intermediario/broker può coincidere con il PSP stesso.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idChannel" required="true" %}
Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.

Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="password" required="true" %}
Password del canale, assegnata da PagoPA.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="ccPost" required="true" %}
conto corrente postale dell'EC. 
{% endswagger-parameter %}

{% swagger-parameter in="body" name="noticeNumber" required="true" %}
\[auxDigit][segregationCode][IUVBase][IUVCheckDigit]
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
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
* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _outcome_ KO [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
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
{% endswagger-response %}
{% endswagger %}

## activatePaymentNotice <a href="#activatepaymentnotice" id="activatepaymentnotice"></a>

{% swagger method="post" path="" baseUrl="" summary="activatePaymentNotice versione 1" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="idPSP" required="true" %}
Identificativo del PSP, assegnato da PagoPA.

Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.

In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idBrokerPSP" required="true" %}
Identificativo dell'intermediario, assegnato da PagoPA.

Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.

Nota: l'intermediario/broker può coincidere con il PSP stesso.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idChannel" required="true" %}
Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.

Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="password" required="true" %}
Password del canale, assegnata da PagoPA.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idempotencyKey" type="" %}
Chiave di idempotenza
{% endswagger-parameter %}

{% swagger-parameter in="body" name="qrCode" required="true" %}
E' composto da 

_fiscalCode_

 e 

_noticeNumber._
{% endswagger-parameter %}

{% swagger-parameter in="body" name="fiscalCode" required="true" %}
Codice fiscale dell'EC. 
{% endswagger-parameter %}

{% swagger-parameter in="body" name="noticeNumber" required="true" %}
\[auxDigit][segregationCode][IUVBase][IUVCheckDigit]
{% endswagger-parameter %}

{% swagger-parameter in="body" name="expirationTime" %}
Tempo di scadenza del token ( ms ), max 30 minuti.

La durata del token di pagamento può essere impostata in 2 modi:

&#x20;\- Implicitamente dalla piattaforma pagoPA, se non è impostato nella richiesta di activatePaymentNotice (valore di default durata = 30 minuti)

&#x20;\- Esplicitamente dal PSP, se impostato in richiesta all'activatePaymentNotice
{% endswagger-parameter %}

{% swagger-parameter in="body" name="amount" required="true" %}
Importo in euro
{% endswagger-parameter %}

{% swagger-parameter in="body" name="dueDate" %}
data di scadenza del pagamento secondo il formato ISO 8601 [AAAA]-[MM]-[GG]
{% endswagger-parameter %}

{% swagger-parameter in="body" name="paymentNote" %}
Testo libero per descrivere l'oggetto del pagamento
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
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
* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _outcome_ KO [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
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
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="" baseUrl="" summary="activatePaymentNotice versione 2" %}
{% swagger-description %}
**In questa versione è possibile far transitare i metadata per ogni **

_**payment**_

** e in ogni singolo **

_**transfer**_

** della response, inoltre sono gestite le informazioni ricavate da**

 

[gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")

.
{% endswagger-description %}

{% swagger-parameter in="body" name="idPSP" required="true" %}
Identificativo del PSP, assegnato da PagoPA.

Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.

In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idBrokerPSP" required="true" %}
Identificativo dell'intermediario, assegnato da PagoPA.

Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.

Nota: l'intermediario/broker può coincidere con il PSP stesso.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idChannel" required="true" %}
Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.

Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="password" required="true" %}
Password del canale, assegnata da PagoPA.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idempotencyKey" type="" %}
Chiave di idempotenza
{% endswagger-parameter %}

{% swagger-parameter in="body" name="qrCode" required="true" %}
E' composto da 

_fiscalCode_

 e 

_noticeNumber._
{% endswagger-parameter %}

{% swagger-parameter in="body" name="fiscalCode" required="true" %}
Codice fiscale dell'EC. 
{% endswagger-parameter %}

{% swagger-parameter in="body" name="noticeNumber" required="true" %}
\[auxDigit][segregationCode][IUVBase][IUVCheckDigit]
{% endswagger-parameter %}

{% swagger-parameter in="body" name="expirationTime" %}
Tempo di scadenza del token ( ms ), max 30 minuti.

La durata del token di pagamento può essere impostata in 2 modi:

&#x20;\- Implicitamente dalla piattaforma pagoPA, se non è impostato nella richiesta di activatePaymentNotice (valore di default durata = 30 minuti)

&#x20;\- Esplicitamente dal PSP, se impostato in richiesta all'activatePaymentNotice
{% endswagger-parameter %}

{% swagger-parameter in="body" name="amount" required="true" %}
Importo in euro
{% endswagger-parameter %}

{% swagger-parameter in="body" name="dueDate" %}
data di scadenza del pagamento secondo il formato ISO 8601 [AAAA]-[MM]-[GG]
{% endswagger-parameter %}

{% swagger-parameter in="body" name="paymentNote" %}
Testo libero per descrivere l'oggetto del pagamento
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
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
              <key>keytest1</key>
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
    </nfpsp:activatePaymentNoticeRes>
  </soapenv:Body>
</soapenv:Envelope>
```
{% endtab %}

{% tab title="Response schema" %}
* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _outcome_ KO [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
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
* suggestedUserFee: importo della commissione espresso in euro ricavato da [gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")
* suggestedPaFee: importo della commissione a carico dell'EC espresso in euro ricavato da [gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")
* suggestedIdBundle: identificativo del pacchetto di [gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")
* suggestedIdCiBundle: identificativo degli attributi aggiunti dall'EC al pacchetto di [gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")
{% endtab %}
{% endtabs %}
{% endswagger-response %}
{% endswagger %}

## sendPaymentOutcome <a href="#sendpaymentoutcome" id="sendpaymentoutcome"></a>

{% swagger method="post" path="" baseUrl="" summary="sendPaymentOutcome versione 1" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="idPSP" required="true" %}
identificativo del PSP, assegnato da PagoPA.

Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.

In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idBrokerPSP" required="true" %}
identificativo dell'intermediario, assegnato da PagoPA.

Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.

Nota: l'intermediario/broker può coincidere con il PSP stesso.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idChannel" required="true" %}
identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.

Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="password" required="true" %}
Password del canale, assegnata da PagoPA.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idempotencyKey" %}
Chiave di idempotenza.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="paymentToken" required="true" %}
Viene generato dal sistema durante la fase di attivazione del pagamento, è l'identificatore di correlazione da abbinare all'attivazione e all'esito del pagamento.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="outcome" required="true" %}


&#x20;Il risultato dell'operazione che può contenere i seguenti codici

**OK** : operazione eseguita con successo

**KO** : operazione terminata con errore
{% endswagger-parameter %}

{% swagger-parameter in="body" name="details" %}
Dettagli del risultato dell'operazione, da inserire obbligatoriamente in caso di 

_outcome_

 OK
{% endswagger-parameter %}

{% swagger-parameter in="body" name="paymentMethod" required="true" %}
metodo di pagamento

enum: "cash" "creditCard" "bancomat" "other"
{% endswagger-parameter %}

{% swagger-parameter in="body" name="paymentChannel" %}
canale di pagamento

enum: "frontOffice" "atm" "onLine" "app" "other"
{% endswagger-parameter %}

{% swagger-parameter in="body" name="fee" required="true" %}
importo della commissione pagata in euro
{% endswagger-parameter %}

{% swagger-parameter in="body" name="payer" %}
individua il pagatore
{% endswagger-parameter %}

{% swagger-parameter in="body" name="uniqueIdentifier" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="entityUniqueIdentifierType" required="true" %}
**F** : Persona fisica

**G** : Persona giuridica
{% endswagger-parameter %}

{% swagger-parameter in="body" name="entityUniqueIdentifierValue" required="true" %}
codice fiscale o partita IVA, nel caso non siano disponibili è possibile utilizzare 'ANONIMO'
{% endswagger-parameter %}

{% swagger-parameter in="body" name="fullName" required="true" %}
nome completo del pagatore
{% endswagger-parameter %}

{% swagger-parameter in="body" name="streetName" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="civicNumber" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="postalCode" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="city" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="stateProvinceRegion" required="false" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="country" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="e-mail	" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="applicationDate" required="true" %}
data applicativa del pagamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="transferDate" required="true" %}
data del riversamento verso l'EC
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
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
* _fault_: tutti i dettagli dell'errore, da inserire obbligatoriamente in caso di _outcome_ KO [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endtab %}
{% endtabs %}
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="" baseUrl="" summary="sendPaymentOutcome versione 2" %}
{% swagger-description %}
**Utilizzata per il pagamento attivato presso il frontend dell'EC, rispetto alla versione 1 permette di inviare l'outcome di più payment tokens contemporaneamente, inoltre sono gestite le informazioni ricavate da**

 

[gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")

**e il servizio @e.bollo.**
{% endswagger-description %}

{% swagger-parameter in="body" name="idPSP" required="true" %}
Identificativo del PSP, assegnato da PagoPA.

Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.

In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idBrokerPSP" required="true" %}
Identificativo dell'intermediario, assegnato da PagoPA.

Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.

Nota: l'intermediario/broker può coincidere con il PSP stesso.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idChannel" required="true" %}
Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.

Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="password" required="true" %}
Password del canale, assegnata da PagoPA.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idempotencyKey" %}
Chiave di idempotenza
{% endswagger-parameter %}

{% swagger-parameter in="body" name="paymentTokens" required="true" %}
sequence che contiene tutti i tokens
{% endswagger-parameter %}

{% swagger-parameter in="body" name="paymentToken" required="true" %}
viene generato dal sistema durante la fase di attivazione del pagamento, è l'identificatore di correlazione da abbinare all'attivazione e all'esito del pagamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="outcome" required="true" %}


il risultato dell'operazione che può contenere i seguenti codici

**OK** : operazione eseguita con successo

**KO** : operazione terminata con errore
{% endswagger-parameter %}

{% swagger-parameter in="body" name="details" %}
dettagli del risultato dell'operazione, da inserire obbligatoriamente in caso di 

_outcome_

 OK
{% endswagger-parameter %}

{% swagger-parameter in="body" name="paymentMethod" required="true" %}
metodo di pagamento

enum: "cash" "creditCard" "bancomat" "other"
{% endswagger-parameter %}

{% swagger-parameter in="body" name="paymentChannel" %}
canale di pagamento

enum: "frontOffice" "atm" "onLine" "app" "other"
{% endswagger-parameter %}

{% swagger-parameter in="body" name="fee" required="true" %}
importo della commissione pagata in euro
{% endswagger-parameter %}

{% swagger-parameter in="body" name="primaryCiIncurredFee" %}
importo della commissione a carico dell'EC espresso in euro ricavato da 

[gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")


{% endswagger-parameter %}

{% swagger-parameter in="body" name="idBundle" %}
identificativo del pacchetto di 

[gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")


{% endswagger-parameter %}

{% swagger-parameter in="body" name="idCiBundle" %}
identificativo degli attributi aggiunti dall'EC al pacchetto di 

[gestione-evoluta-commissioni.md](gestione-evoluta-commissioni.md "mention")


{% endswagger-parameter %}

{% swagger-parameter in="body" name="payer" %}
individua il pagatore
{% endswagger-parameter %}

{% swagger-parameter in="body" name="uniqueIdentifier" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="entityUniqueIdentifierType" required="true" %}
**F** : Persona fisica

**G** : Persona giuridica
{% endswagger-parameter %}

{% swagger-parameter in="body" name="entityUniqueIdentifierValue" required="true" %}
codice fiscale o partita IVA, nel caso non siano disponibili è possibile utilizzare 'ANONIMO'
{% endswagger-parameter %}

{% swagger-parameter in="body" name="fullName" required="true" %}
nome completo del pagatore
{% endswagger-parameter %}

{% swagger-parameter in="body" name="streetName" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="civicNumber" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="postalCode" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="city" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="stateProvinceRegion" required="false" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="country" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="e-mail	" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="applicationDate" required="true" %}
data applicativa del pagamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="transferDate" required="true" %}
data del riversamento verso l'EC
{% endswagger-parameter %}

{% swagger-parameter in="body" name="marcheDaBollo" %}
La lista delle marche da bollo digitali gestite nella transazione di pagamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="marcaDaBollo" %}
I dati di ogni singola marca da bollo digitale
{% endswagger-parameter %}

{% swagger-parameter in="body" name="paymentToken" %}
Il paymentToken con cui è arrivata la richiesta di marca da bollo digitale
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idTransfer" %}
L'identificativo del transfer che contiene il dato 

_richiestaMarcaDaBollo_
{% endswagger-parameter %}

{% swagger-parameter in="body" name="MBDAttachment" %}
Il documento XML che contiene la marca da bollo digitale, nel formato base64
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
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
* _fault_: tutti i dettagli dell'errore, da inserire obbligatoriamente in caso di _outcome_ KO [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endtab %}
{% endtabs %}
{% endswagger-response %}
{% endswagger %}

## pspNotifyPayment <a href="#pspnotifypayment" id="pspnotifypayment"></a>

{% swagger method="post" path="" baseUrl="" summary="pspNotifyPayment versione 1" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="idPSP" required="true" %}
Identificativo del PSP, assegnato da PagoPA.

Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.

In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idBrokerPSP" required="true" %}
Identificativo dell'intermediario, assegnato da PagoPA.

Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.

Nota: l'intermediario/broker può coincidere con il PSP stesso.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idChannel" required="true" %}
Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.

Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="paymentToken" required="true" %}
Viene generato dal sistema durante la fase di attivazione del pagamento, è l'identificatore di correlazione da abbinare all'attivazione e all'esito del pagamento.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="paymentDescription" required="true" %}
Testo libero per descrivere l'oggetto del pagamento.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="fiscalCodePA" required="true" %}
Codice fiscale dell'EC. 
{% endswagger-parameter %}

{% swagger-parameter in="body" name="companyName" required="true" %}
Nome completo dell'EC.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="officeName" %}
Nome completo dell'ufficio dell'EC.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="creditorReferenceId" required="true" %}
**IUV**

 Identificativo Univoco Versamento.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="debtAmount" required="true" %}
Rappresenta la somma degli importi dei singoli transfer.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="transferList" required="true" %}
Struttura che contiene i dettagli dei transfer pagamento, al momento i transfer possono essere al massimo 5.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="transfer" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="idTransfer" required="true" %}
Indice della lista (da 1 a 5).
{% endswagger-parameter %}

{% swagger-parameter in="body" name="transferAmount" required="true" %}
Importo
{% endswagger-parameter %}

{% swagger-parameter in="body" name="fiscalCodePA" required="true" %}
Codice fiscale dell'EC.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="IBAN" required="true" %}
IBAN sul quale sarà effettuato il riversamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="remittanceInformation" required="true" %}
Motivo del pagamento.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="dati specifici del canale di pagamento" required="false" %}
Struttura dati specifica del canale di pagamento utilizzato.
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
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
* _outcome_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, da inserire obbligatoriamente in caso di _outcome_ KO [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
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
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="" baseUrl="" summary="pspNotifyPayment versione 2" %}
{% swagger-description %}
**Utilizzata per il pagamento attivato presso il frontend dell'EC, rispetto alla precedente versione della pspNotifyPayment permette di inviare al PSP una lista di **

_**payment**_

**, inoltre, le informazioni specifiche del pagamento utilizzato sono inserite nella sezione **

_**additionalPaymentInformations**_

** che contiene una lista di metadata. E' possibile, inoltre, inserire i metadata per ogni **

_**payment**_

** e in ogni singolo **

_**transfer**_

** e gestire il servizio @e.bollo.**
{% endswagger-description %}

{% swagger-parameter in="body" name="idPSP" required="true" %}
Identificativo del PSP, assegnato da PagoPA.

Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.

In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idBrokerPSP" required="true" %}
Identificativo dell'intermediario, assegnato da PagoPA.

Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.

Nota: l'intermediario/broker può coincidere con il PSP stesso.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idChannel" required="true" %}
Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.

Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="transactionId" required="true" %}
Identificativo dell'operazione di pagamento.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="totalAmount" required="true" %}
Rappresenta la somma pagata dall'utente, comprensiva di commissione.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="fee" required="true" %}
Importo della commissione.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="timestampOperation" required="true" %}
Timestamp dell'operazione di pagamento.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="paymentList" required="true" %}
Lista dei pagamenti.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="payment" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="paymentToken" required="true" %}
Viene generato dal sistema durante la fase di attivazione del pagamento, è l'identificatore di correlazione da abbinare all'attivazione e all'esito del pagamento.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="paymentDescription" required="true" %}
Testo libero per descrivere l'oggetto del pagamento.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="fiscalCodePA" required="true" %}
Codice fiscale dell'EC. 
{% endswagger-parameter %}

{% swagger-parameter in="body" name="companyName" required="true" %}
Nome completo dell'EC.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="officeName" %}
Nome completo dell'ufficio dell'EC.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="creditorReferenceId" required="true" %}
**IUV**

 Identificativo Univoco Versamento.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="debtAmount" required="true" %}
Rappresenta la somma degli importi dei singoli transfer.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="transferList" required="true" %}
Struttura che contiene i dettagli dei transfer pagamento, al momento i transfer possono essere al massimo 5.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="transfer" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="idTransfer" required="true" %}
Indice della lista (da 1 a 5).
{% endswagger-parameter %}

{% swagger-parameter in="body" name="transferAmount" required="true" %}
Importo
{% endswagger-parameter %}

{% swagger-parameter in="body" name="fiscalCodePA" required="true" %}
Codice fiscale dell'EC.
{% endswagger-parameter %}

{% swagger-parameter in="body" required="true" name="CHOICE" %}
Choice tra IBAN e richiestaMarcaDaBollo
{% endswagger-parameter %}

{% swagger-parameter in="body" name="IBAN" required="false" %}
IBAN sul quale sarà effettuato il riversamento
{% endswagger-parameter %}

{% swagger-parameter in="body" name="richiestaMarcaDaBollo" %}
I dati della richiesta della marca da bollo
{% endswagger-parameter %}

{% swagger-parameter in="body" name="tipoBollo" %}
Tipologia del bollo
{% endswagger-parameter %}

{% swagger-parameter in="body" name="hashDocumento" %}
Impronta informatica (digest), nel formato base64, del documento informatico o della segnatura di protocollo cui è associata la marca da bollo digitale
{% endswagger-parameter %}

{% swagger-parameter in="body" name="provinciaResidenza" %}
Sigla automobilistica della provincia di residenza del soggetto pagatore
{% endswagger-parameter %}

{% swagger-parameter in="body" name="remittanceInformation" required="true" %}
Motivo del pagamento.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="additionalPaymentInformations" %}
Struttura che contiene i dati specifici del canale di pagamento utilizzato.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="additionalPaymentList" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="mapEntry" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="key" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="value" required="true" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
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
* _fault_: tutti i dettagli dell'errore, da inserire obbligatoriamente in caso di _outcome_ KO [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endtab %}
{% endtabs %}
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="" baseUrl="" summary="demandPaymentNotice" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="idPSP" required="true" %}
Identificativo del PSP, assegnato da PagoPA.

Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.

In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idBrokerPSP" required="true" %}
Identificativo dell'intermediario, assegnato da PagoPA.

Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.

Nota: l'intermediario/broker può coincidere con il PSP stesso.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idChannel" required="true" %}
Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.

Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="password" required="true" %}
Password del canale, assegnata da PagoPA.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idSoggettoServizio" required="true" %}
Identificativo dell'associazione tra servizio e EC per cui si vuole attivare il pagamento. Corrisponde al tag elencoSoggettiEroganti.soggettoErogante.idSoggettoServizio del Catalogo dei Servizi.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="datiSpecificiServizio" required="true" %}
Sono censiti nel Catalogo dei Servizi, che è il repository che contiene l’elenco dei servizi generalizzati attivati dagli EC, inviati in formato base64. La struttura da inserire è definita dallo schema XSD il cui nome è riportato nell'elemento 

_xsdRiferimento_

 del Catalogo dei Servizi ed è consultabile tramite 

[https://github.com/pagopa/pagopa-api](https://github.com/pagopa/pagopa-api)

 .
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
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
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _outcome_ KO [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
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
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="" baseUrl="" summary="paDemandPaymentNotice" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="idPA" required="true" %}
Codice fiscale della struttura che invia la richiesta di pagamento.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idBrokerPA" required="true" %}
Identificativo del soggetto che opera come intermediario per l'EC.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idStation" required="true" %}
Identificativo della stazione dell'EC nel sistema pagoPa.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="idServizio" required="true" %}
Identificativo del servizio per cui si vuole attivare il pagamento.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="datiSpecificiServizio" required="true" %}
Sono censiti nel Catalogo dei Servizi, che è il repository che contiene l’elenco dei servizi generalizzati attivati dagli EC, inviati in formato base64.
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
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
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _outcome_ KO [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
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
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="" baseUrl="" summary="nodoInviaFlussoRendicontazione" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="identificativoPSP" required="true" %}
Identificativo del PSP, assegnato da PagoPA.

Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.

In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="identificativoIntermediarioPSP" required="true" %}
Identificativo dell'intermediario, assegnato da PagoPA.

Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.

Nota: l'intermediario/broker può coincidere con il PSP stesso.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="identificativoCanale" required="true" %}
Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.

Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="password" required="true" %}
Password del canale, assegnata da PagoPA.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="identificativoDominio" required="true" %}
Codice fiscale dell'EC. 
{% endswagger-parameter %}

{% swagger-parameter in="body" name="identificativoFlusso" required="true" %}
Identificativo del Flusso di Rendicontazione.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="dataOraFlusso" required="true" %}
Data e ora del Flusso di Rendicontazione.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="xmlRendicontazione" required="true" %}
Contenuto del Flusso di riversamento in formato base64.
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
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
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _esito_ KO [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
{% endtab %}
{% endtabs %}
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="" baseUrl="" summary="nodoChiediElencoFlussiRendicontazione" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="identificativoIntermediarioPA" required="true" %}
Identificativo del soggetto che opera come intermediario per l'EC.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="identificativoStazioneIntermediarioPA" required="true" %}
Identificativo della stazione dell'EC nel sistema pagoPa.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="password" required="true" %}
Password della stazione, assegnata da PagoPA.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="identificativoDominio" required="true" %}
Codice fiscale dell'EC. 
{% endswagger-parameter %}

{% swagger-parameter in="body" name="identificativoPSP" required="true" %}
Identificativo del PSP, assegnato da PagoPA.

Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.

In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
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
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _esito_ KO [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* elencoFlussiRendicontazione: elenco dei flussi di riversamento, dato valorizzato solo in caso di _esito_ OK
  * totRestituiti: numero dei flussi presenti nell'elenco
  * idRendicontazione
    * identificativoFlusso: identificativo del Flusso di Rendicontazione
    * dataOraFlusso: data e ora del Flusso di Rendicontazione
{% endtab %}
{% endtabs %}
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="" baseUrl="" summary="nodoChiediFlussoRendicontazione" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="identificativoIntermediarioPA" required="true" %}
Identificativo del soggetto che opera come intermediario per l'EC.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="identificativoStazioneIntermediarioPA" required="true" %}
Identificativo della stazione dell'EC nel sistema pagoPa.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="password" required="true" %}
Password della stazione, assegnata da PagoPA.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="identificativoDominio" required="false" %}
Codice fiscale dell'EC. 
{% endswagger-parameter %}

{% swagger-parameter in="body" name="identificativoPSP" required="false" %}
Identificativo del PSP, assegnato da PagoPA.

Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.

In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="identificativoFlusso" required="true" %}
Identificativo del Flusso di Rendicontazione.
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
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
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _esito_ KO [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* xmlRendicontazione: contenuto del flusso di riversamento in formato base64, dato valorizzato solo in caso di _esito_ OK
{% endtab %}
{% endtabs %}
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="" baseUrl="" summary="nodoChiediInformativaPA" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="identificativoPSP" required="true" %}
Identificativo del PSP, assegnato da PagoPA.

Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.

In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="identificativoIntermediarioPSP" required="true" %}
Identificativo dell'intermediario, assegnato da PagoPA.

Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.

Nota: l'intermediario/broker può coincidere con il PSP stesso.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="identificativoCanale" required="true" %}
Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.

Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="password" required="true" %}
Password del canale, assegnata da PagoPA.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="identificativoDominio" required="true" %}
Codice fiscale dell'EC. 
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
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
* _esito_﹡_:_ il risultato dell'operazione che può contenere i seguenti codici
  * **OK** : operazione eseguita con successo
  * **KO** : operazione terminata con errore
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _esito_ KO [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* xmlInformativa: contenuto dell'informativa in formato base64, dato valorizzato solo in caso di _esito_ OK
{% endtab %}
{% endtabs %}
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="" baseUrl="" summary="nodoChiediCatalogoServizi versione 2" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="identificativoPSP" required="true" %}
Identificativo del PSP, assegnato da PagoPA.

Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.

In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="identificativoIntermediarioPSP" required="true" %}
Identificativo dell'intermediario, assegnato da PagoPA.

Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.

Nota: l'intermediario/broker può coincidere con il PSP stesso.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="identificativoCanale" required="true" %}
Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.

Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="password" required="true" %}
Password del canale, assegnata da PagoPA.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="identificativoDominio" required="false" %}
Codice fiscale dell'EC. 
{% endswagger-parameter %}

{% swagger-parameter in="body" name="categoria" %}
Filtro in base alla categoria dei servizi.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="commissione" %}
Filtro in base al consiglio di applicare o meno le commissioni inserite dall'EC che ha creato il servizio.
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
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
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _esito_ KO [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* xmlCatalogoServizi: contenuto del catalogo dei servizi in formato base64, dato valorizzato solo in caso di _esito_ OK
{% endtab %}
{% endtabs %}
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="" baseUrl="" summary="nodoChiediTemplateInformativaPSP" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="identificativoPSP" required="true" %}
Identificativo del PSP, assegnato da PagoPA.

Il codice è generalmente rappresentato dal codice BIC (Bank Identifier Code) del PSP.

In assenza del codice BIC, o per gestire situazioni particolari, può essere utilizzato un altro codice, purché identifichi in modo univoco il PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="identificativoIntermediarioPSP" required="true" %}
Identificativo dell'intermediario, assegnato da PagoPA.

Identificazione dell'intermediario/broker del PSP che fornisce l'accesso (canale) al PSP per l'erogazione del servizio.

Nota: l'intermediario/broker può coincidere con il PSP stesso.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="identificativoCanale" required="true" %}
Identificativo del canale, identifica una categoria di servizio di pagamento e attraverso la quale viene effettuata la transazione.

Un identificatore di canale appartiene a un solo intermediario/broker PSP e di conseguenza deve essere univoco rispetto al PSP.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="password" required="true" %}
Password del canale, assegnata da PagoPA.
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
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
* _fault_: tutti i dettagli dell'errore, dato valorizzato solo in caso di _esito_ KO [Gestione degli errori](http://localhost:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention")
* xmlTemplateInformativa: template dell'informativa in formato base64, dato valorizzato solo in caso di _esito_ OK


{% endtab %}
{% endtabs %}
{% endswagger-response %}
{% endswagger %}

## EC Checkout API

{% swagger src="https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.3.0/openapi/checkout.yaml" path="/carts" method="post" %}
[https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.3.0/openapi/checkout.yaml](https://raw.githubusercontent.com/pagopa/pagopa-api/SANP3.3.0/openapi/checkout.yaml)
{% endswagger %}

## getOrganizationReceipt

{% swagger src="../.gitbook/assets/bizEvents.yaml" path="/organizations/{organizationfiscalcode}/receipts/{iur}/paymentoptions/{iuv}" method="get" %}
[bizEvents.yaml](../.gitbook/assets/bizEvents.yaml)
{% endswagger %}

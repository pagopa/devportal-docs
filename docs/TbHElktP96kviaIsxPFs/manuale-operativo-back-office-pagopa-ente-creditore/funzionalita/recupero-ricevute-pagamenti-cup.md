# Recupero ricevute pagamenti CUP

La seguente funzionalità mostra come recuperare le ricevute di pagamento del Canone Unico Patrimoniale.

{% hint style="info" %}
Il Referente dei Pagamenti dei vari EC per cui è stato nominato per poter recuperare le ricevute deve accedere allo specifico EC.
{% endhint %}

Il sistema mostra tutti i pagamenti CUP

<figure><img src="../../.gitbook/assets/Screenshot 2024-04-17 alle 11.44.56.png" alt=""><figcaption></figcaption></figure>

Per ciascuno dei pagamenti della lista vengono mostrati:

* L’Identificativo Univoco Versamento;&#x20;
* Il Codice Fiscale dell’Azienda (CORPORATE) che ha versato il tributo.
* La data del pagamento

Per ogni elemento della lista il Referente dei Pagamenti può scaricare la “Ricevuta” utilizzando l’unica azione disponibile (tasto “Scarica ricevuta”). Ogni ricevuta scaricata è costituita da un file in formato xml la cui nomenclatura è:&#x20;

ricevuta\_\<IUV>.xml

Nel file in formato xml le informazioni di interesse (alcune necessarie alla riconciliazione del pagamento con gli importi riversati sull’IBAN di accredito) sono le seguenti:

**\<noticeNumber>** Numero o Codice Avviso&#x20;

**\<fiscalCode>** Codice Fiscale dell’Ente beneficiario&#x20;

**\<creditorReferenceId>** Identificativo Univoco di Versamento&#x20;

**\<paymentAmount>** Importo del Pagamento&#x20;

**\<description>** Descrizione del Pagamento&#x20;

**\<entityUniqueIdentifierValue>** Codice Fiscale del debitore (CORPORATE)&#x20;

**\<fullName>** Descrizione (ragione sociale) del debitore (CORPORATE)&#x20;

**\<IBAN>** IBAN sul quale viene accreditato il pagamento&#x20;

**\<transferCategory>** Codice tassonomico&#x20;

**\<transferDate>** Data di riversamento del pagamento

Questo un esempio di un file di ricevuta:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<paSendRTReq>
<idPA>00856930102</idPA>
<idBrokerPA>15376371009</idBrokerPA>
<idStation>15376371009_01</idStation>
<receipt>
<receiptId>c3f5e9b121114e578bfc09752b385eb8</receiptId>
<noticeNumber>347164923022221054</noticeNumber>
<fiscalCode>00856930102</fiscalCode>
<outcome>OK</outcome>
<creditorReferenceId>47164923022221054</creditorReferenceId>
<paymentAmount>777.59</paymentAmount>
<description>Canone Unico Patrimoniale - CORPORATE</description>
<companyName>Comune di Genova</companyName>
<officeName>NA</officeName>
<debtor>
<uniqueIdentifier>
<entityUniqueIdentifierType>G</entityUniqueIdentifierType>
<entityUniqueIdentifierValue>42272531325</entityUniqueIdentifierValue>
</uniqueIdentifier>
<fullName>AZIENDA S.P.A.</fullName>
<e-mail>email@pec.azienda.it</e-mail>
</debtor>
<transferList>
<transfer>
<idTransfer>1</idTransfer>
<transferAmount>777.59</transferAmount>
<fiscalCodePA>00856930102</fiscalCodePA>
<IBAN>IT23X0000100001000000000999</IBAN>
<remittanceInformation>Canone Unico Patrimoniale -
CORPORATE</remittanceInformation>
<transferCategory>0201138TS</transferCategory>
</transfer>
</transferList>
<idPSP>PPAYITR1XXX</idPSP>
<PSPCompanyName>Postepay</PSPCompanyName>
<idChannel>06874351007_07</idChannel>
<channelDescription>WISP</channelDescription>
<paymentMethod>CP</paymentMethod>
<fee>1.00</fee>
<paymentDateTime>2022-04-06T12:35:26</paymentDateTime>
<applicationDate>2022-04-06</applicationDate>
<transferDate>2022-04-07</transferDate>
</receipt>
</paSendRTReq>
```


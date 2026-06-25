### Custom


{% tabs %} {% tab title="200: OK " %} {% tab title="Request example" %}
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
{% endtabs %}

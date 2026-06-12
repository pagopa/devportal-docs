### Custom

{% include "../.gitbook/includes/banner-promemoria-automatici.md" %}middle{% endinclude %}

{% include "../.gitbook/includes/banner-promemoria-automatici.md" %}This is a test\n \n \n test test\n\n test{% endinclude %}

{% include "dir3/subdir1/testo-incluso-2.md" %}Questo è testo incluso da 2\n \n \n test test\n\n test{% endinclude %}

{% hint style="info" %}
	Testo di informazione hint
{% endhint %}

{% swagger src="index.yaml" path="/p" method="post" %}{% endswagger %}

{% swagger src="my-example.yaml" path="/dir1" method="post" %}{% endswagger %}

{% swagger src="" path="/p" method="post" %}\nText\n{% endswagger %}

{% code title="Titolo codice con lineNumbers" overflow="wrap" lineNumbers="true" %}\n' + code + '{% endcode %}'

{% code title="Titolo codice senza lineNumbers" overflow="wrap" %}\n' + code + '{% endcode %}

{% file src="p/a-src.jpg" %}{% endfile %}

{% file src="a-src.jpg" %}\nCaption\n{% endfile %}


{% file src="dir1/img-test-jpg2.jpg" %}{% endfile %}

{% file src="img-test-jpg.jpg" %}\nCaption\n{% endfile %}




{% tabs %}

 {% tab title="Tab 1" %}
 Tab 1 Testo del primo Tab
 {% endtab %}

 {% tab title="Tab 2" %}
 Tab 2 Testo del secondo Tab
 {% endtab %}

{% endtabs %}

{% tabs %}\n{% tab title="Tab 1" %}\n{% hint style="info" %}\nTEsto tab1 hint1\n{% endhint %}\n{% hint style="info" %}\nTesto tab1 hint2\n{% endhint %}\n{% endtab %}\n\n{% tab title="Tab 2" %}\nTesto del Tab2 senza hint\n{% endtab %}\n{% endtabs %}

{% embed url="https://www.pagopa.it/" %}
      'This is a caption'
 {% endembed %}


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
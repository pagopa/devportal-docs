# Redirect

{% tabs %}
{% tab title="Key" %}
`tipoVersamento`
{% endtab %}

{% tab title="Tipo" %}
Stringa di 4 byte con possibili valori

`RBPR` : Conto BancoPosta Retail

`RBPB` : Conto BancoPosta Impresa

`RBPP` : Paga con Postepay

`RPIC` : Pago in Conto Intesa

`RBPS` : SCRIGNO Internet Banking

`RICO` : Conto ICONTO
{% endtab %}

{% tab title="Dimensioni" %}
N/A
{% endtab %}

{% tab title="Obbligatorio" %}
Sì
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Key" %}
`idTransaction`
{% endtab %}

{% tab title="Tipo" %}
Stringa
{% endtab %}

{% tab title="Dimensioni" %}
N/A
{% endtab %}

{% tab title="Obbligatorio" %}
Sì
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Key" %}
`idPSPTransaction`
{% endtab %}

{% tab title="Tipo" %}
Stringa
{% endtab %}

{% tab title="Dimensioni" %}
N/A
{% endtab %}

{% tab title="Obbligatorio" %}
Sì
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Key" %}
`totalAmount`
{% endtab %}

{% tab title="Tipo" %}
Decimal
{% endtab %}

{% tab title="Dimensioni" %}
Max 999999999.99
{% endtab %}

{% tab title="Obbligatorio" %}
Sì
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Key" %}
`fee`
{% endtab %}

{% tab title="Tipo" %}
Decimal
{% endtab %}

{% tab title="Dimensioni" %}
Max 999999999.99
{% endtab %}

{% tab title="Obbligatorio" %}
Sì
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Key" %}
`timestampOperation`
{% endtab %}

{% tab title="Tipo" %}
DateTime
{% endtab %}

{% tab title="Dimensioni" %}
N/A
{% endtab %}

{% tab title="Obbligatorio" %}
Sì
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Key" %}
`authorizationCode`
{% endtab %}

{% tab title="Tipo" %}
Stringa
{% endtab %}

{% tab title="Dimensioni" %}
N/A
{% endtab %}

{% tab title="Obbligatorio" %}
Sì
{% endtab %}
{% endtabs %}

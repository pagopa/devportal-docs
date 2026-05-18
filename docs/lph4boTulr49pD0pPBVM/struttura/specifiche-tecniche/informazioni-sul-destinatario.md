---
description: È la sezione che contiene i dati di chi riceve l'avviso di pagamento.
---

# Informazioni sul Destinatario

![Dettaglio della sezione "Informazioni sul Destinatario" all'interno dell'avviso di pagamento pagoPA.](<../../.gitbook/assets/Ente e Destinatario.png>)

### `DESTINATARIO.CF` <a href="#destinatario-cf" id="destinatario-cf"></a>

{% tabs %}
{% tab title="Definizione" %}
Codice Fiscale (o, in assenza, Partiva IVA) del soggetto pagatore
{% endtab %}

{% tab title="Tipo" %}
Stringa
{% endtab %}

{% tab title="Dimensioni" %}
Massimo 16 caratteri
{% endtab %}

{% tab title="Formato" %}
TUTTO MAIUSCOLO
{% endtab %}
{% endtabs %}

### `DESTINATARIO.NOMECOMPLETO` <a href="#destinatario-nomecompleto" id="destinatario-nomecompleto"></a>

{% tabs %}
{% tab title="Definizione" %}
Nome e cognome del soggetto pagatore
{% endtab %}

{% tab title="Tipo" %}
Stringa
{% endtab %}

{% tab title="Dimensioni" %}
Massimo 35 caratteri
{% endtab %}

{% tab title="Formato" %}
Iniziali Maiuscole
{% endtab %}

{% tab title="Note" %}
Nel caso di una sola riga, l’allineamento deve essere al bordo superiore.
{% endtab %}
{% endtabs %}

### `DESTINATARIO.INDIRIZZO` <a href="#destinatario-indirizzo" id="destinatario-indirizzo"></a>

{% tabs %}
{% tab title="Definizione" %}
Indirizzo del soggetto pagatore
{% endtab %}

{% tab title="Tipo" %}
Stringa
{% endtab %}

{% tab title="Dimensioni" %}
Massimo 140 caratteri
{% endtab %}

{% tab title="Note" %}
Nel caso di una sola riga, l’allineamento deve essere al bordo superiore.
{% endtab %}
{% endtabs %}

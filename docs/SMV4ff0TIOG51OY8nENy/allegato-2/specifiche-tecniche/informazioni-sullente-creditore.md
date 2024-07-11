---
description: È la sezione che contiene i dati di chi ha emesso l'avviso di pagamento.
---

# Informazioni sull'Ente Creditore

![Dettaglio della sezione "Informazioni sull'Ente Creditore" all'interno dell'avviso di pagamento pagoPA.](<../../.gitbook/assets/Ente e Destinatario.png>)

### `ENTE.CF` <a href="#ente-cf" id="ente-cf"></a>

{% tabs %}
{% tab title="Definizione" %}
Codice Fiscale o Partita IVA dell'Ente Creditore
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

### `ENTE.NOME` <a href="#ente-nome" id="ente-nome"></a>

{% tabs %}
{% tab title="Definizione" %}
Denominazione dell'Ente Creditore
{% endtab %}

{% tab title="Tipo" %}
Stringa
{% endtab %}

{% tab title="Dimensioni" %}
Massimo 50 caratteri
{% endtab %}

{% tab title="Formato" %}
Iniziali Maiuscole
{% endtab %}

{% tab title="Note" %}
Nel caso di una sola riga, l’allineamento deve essere al bordo superiore.
{% endtab %}
{% endtabs %}

### `ENTE.SETTORE` <a href="#ente-settore" id="ente-settore"></a>

{% tabs %}
{% tab title="Definizione" %}
Denominazione dell'unità organizzativa che gestisce il pagamento.
{% endtab %}

{% tab title="Tipo" %}
Stringa
{% endtab %}

{% tab title="Dimensioni" %}
Massimo 50 caratteri
{% endtab %}

{% tab title="Formato" %}
Iniziale maiuscola
{% endtab %}

{% tab title="Note" %}
Nel caso di una sola riga, l’allineamento deve essere al bordo superiore.
{% endtab %}
{% endtabs %}

### `ENTE.INFO` <a href="#ente-info" id="ente-info"></a>

{% tabs %}
{% tab title="Definizione" %}
Riferimenti dei canali di contatto dell'Ente Creditore destinati ai cittadini, come ad esempio sito web, call center o email dedicata.
{% endtab %}

{% tab title="Tipo" %}
Stringa
{% endtab %}

{% tab title="Dimensioni" %}
Massimo 100 caratteri
{% endtab %}

{% tab title="Formato" %}
Iniziale maiuscola
{% endtab %}

{% tab title="Note" %}
* Nel caso di una sola riga, l’allineamento deve essere al bordo superiore.
* Se devi inserire più elementi, puoi usare come separatore il [punto mediano](https://it.wikipedia.org/wiki/Punto\_mediano) `·`&#x20;
{% endtab %}
{% endtabs %}

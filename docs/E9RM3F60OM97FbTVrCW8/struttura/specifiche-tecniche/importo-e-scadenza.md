---
description: >-
  È la sezione che contiene le informazioni sul quanto pagare, in che modalità e
  con le relative scadenze.
---

# Importo e scadenza

![Dettaglio della sezione "Importo e scadenza" all'interno dell'avviso di pagamento pagoPA.](<../../.gitbook/assets/Importo e Dove.png>)

### `AVVISO.IMPORTO` <a href="#avviso-importo" id="avviso-importo"></a>

{% tabs %}
{% tab title="Definizione" %}
Importo del pagamento
{% endtab %}

{% tab title="Tipo" %}
Valore massimo 999.999.999,99
{% endtab %}

{% tab title="Formato" %}
In italiano e tedesco, le migliaia sono separate dal punto, i decimali sono separati dalla virgola (es.: 1.020,99).

In inglese, le migliaia sono separate dalla virgola, i decimali sono separati dal punto (es.: 1,020.99).
{% endtab %}
{% endtabs %}

### `AVVISO.DATA` <a href="#avviso-data" id="avviso-data"></a>

{% tabs %}
{% tab title="Definizione" %}
Data di scadenza del pagamento
{% endtab %}

{% tab title="Tipo" %}
Data
{% endtab %}

{% tab title="Formato" %}
dd/mm/yyyy
{% endtab %}

{% tab title="Note" %}
Se non è prevista una data di scadenza, vedi la variante [avviso-senza-scadenza.md](../../allegato-1/varianti/avviso-senza-scadenza.md "mention")
{% endtab %}
{% endtabs %}

### `AVVISO.RATE.INFO` <a href="#avviso-rate-info" id="avviso-rate-info"></a>

{% tabs %}
{% tab title="Definizione" %}
Eventuale testo fisso che spiega la possibilità di pagare anche a rate.
{% endtab %}

{% tab title="Tipo" %}
Array
{% endtab %}

{% tab title="Valori" %}
* <mark style="color:red;">`null`</mark>
* `Puoi pagare per intero oppure in`<mark style="color:purple;">`Avviso.Rate.Totale`</mark>`rate`
* `Puoi pagare in`<mark style="color:purple;">`Avviso.Rate.Totale`</mark>`rate`
{% endtab %}

{% tab title="Note" %}
Il testo viene mostrato solo se `<numero_rate>` è maggiore o uguale a 2.
{% endtab %}
{% endtabs %}

### `AVVISO.RATE.TOTALE` <a href="#avviso-rate-totale" id="avviso-rate-totale"></a>

{% tabs %}
{% tab title="Definizione" %}
Se previsto, indica il numero totale delle rate disponibili.
{% endtab %}

{% tab title="Tipo" %}
Numero
{% endtab %}

{% tab title="Valori" %}
Numero intero maggiore di 1
{% endtab %}

{% tab title="Note" %}
Variabile da utilizzare in [#avviso.rate.info](importo-e-scadenza.md#avviso.rate.info "mention")
{% endtab %}
{% endtabs %}

---
description: >-
  L'intestazione dell'avviso è l'area che permette di capire a colpo d'occhio
  l'oggetto del pagamento e la compatibilità con la piattaforma pagoPA.
---

# Intestazione

{% hint style="info" %}
Se l'avviso è composto da più pagine, mostra sempre l'intestazione per ciascuna pagina.
{% endhint %}

![Dettaglio della sezione "Intestazione" all'interno dell'avviso di pagamento pagoPA.](../../.gitbook/assets/Intestazione.png)

### `AVVISO.OGGETTO` <a href="#avviso-oggetto" id="avviso-oggetto"></a>

{% tabs %}
{% tab title="Definizione" %}
Definisce cosa bisogna pagare, con un testo chiaro e significativo per chi riceve l'avviso.
{% endtab %}

{% tab title="Tipo" %}
Stringa
{% endtab %}

{% tab title="Dimensioni" %}
Massimo 90 caratteri, spazi compresi.

{% hint style="info" %}
Puoi contare i caratteri con un [qualsiasi strumento online](https://www.charactercountonline.com/).
{% endhint %}
{% endtab %}

{% tab title="Formato" %}
Iniziale maiuscola

{% hint style="success" %}
**Pagamento retta scolastica**
{% endhint %}

{% hint style="danger" %}
~~**PAGAMENTO RETTA SCOLASTICA**~~

(L'uso delle maiuscole compromette la leggibilità non solo sull'avviso di pagamento, ma anche nelle interfacce digitali (es.: app IO, ricevuta via email).
{% endhint %}
{% endtab %}
{% endtabs %}

### `ENTE.LOGO` <a href="#ente-logo" id="ente-logo"></a>

{% tabs %}
{% tab title="Definizione" %}
Logo dell'Ente Creditore che incasserà il tributo.
{% endtab %}

{% tab title="Tipo" %}
Immagine
{% endtab %}

{% tab title="Dimensioni" %}
30×30mm
{% endtab %}

{% tab title="Formato" %}
Il logo deve essere vettoriale e su fondo trasparente o bianco.

{% hint style="info" %}
Un logo vettoriale risulta leggibile a qualsiasi dimensione. I formati di un file vettoriale sono ad esempio SVG o EPS. In alternativa, prevedi un file PNG trasparente (o JPG con sfondo bianco) con una risoluzione di 300dpi adatta alle dimensioni richieste.
{% endhint %}


{% endtab %}

{% tab title="Note" %}
Il logo, se sviluppato in orizzontale, deve essere appoggiato all’angolo superiore destro dell’area prevista.
{% endtab %}
{% endtabs %}

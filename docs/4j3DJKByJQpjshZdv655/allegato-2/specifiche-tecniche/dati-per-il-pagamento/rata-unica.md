---
description: >-
  Usa questa porzione per indicare i dettagli relativi al pagamento in un'unica
  soluzione, se prevista.
---

# Rata unica

{% hint style="warning" %}
Se l'Ente Creditore dispone di un conto corrente postale per gli incassi, è necessario includere, subito dopo questa porzione, anche il [bollettino-postale-pa.md](bollettino-postale-pa.md "mention").&#x20;
{% endhint %}

![Dettaglio della sezione "Rata unica" all'interno dell'avviso di pagamento pagoPA.](<../../../.gitbook/assets/Rata Unica.png>)

### `AVVISO.QRCODE` <a href="#avviso-qrcode" id="avviso-qrcode"></a>

{% tabs %}
{% tab title="Definizione" %}
Codice a barre bidimensionale
{% endtab %}

{% tab title="Tipo" %}
Immagine
{% endtab %}

{% tab title="Dimensioni" %}
25×25mm
{% endtab %}

{% tab title="Formato" %}
Il codice QR deve essere vettoriale, monocromatico, su fondo trasparente o bianco.
{% endtab %}

{% tab title="Note" %}
Per le regole di generazione, vedi [codice-qr.md](codice-qr.md "mention")
{% endtab %}
{% endtabs %}

### `AVVISO.CODICE` <a href="#avviso-codice" id="avviso-codice"></a>

{% tabs %}
{% tab title="Definizione" %}
Codice Avviso
{% endtab %}

{% tab title="Tipo" %}
Numero
{% endtab %}

{% tab title="Dimensioni" %}
22 caratteri spazi compresi&#x20;
{% endtab %}

{% tab title="Formato" %}
Le cifre sono raggruppate a gruppi di 4 separate da uno spazio.
{% endtab %}

{% tab title="Note" %}
Per le regole di generazione, vedi [codice-qr.md](codice-qr.md "mention")
{% endtab %}
{% endtabs %}

### `ENTE.CBILL` <a href="#ente-cbill" id="ente-cbill"></a>

{% tabs %}
{% tab title="Definizione" %}
Codice interbancario dell’Ente Creditore, conosciuto anche come Codice SIA.
{% endtab %}

{% tab title="Tipo" %}
Stringa
{% endtab %}

{% tab title="Formato" %}
TUTTO MAIUSCOLO
{% endtab %}

{% tab title="Note" %}
La lista dei codici CBILL è disponibile sul [sito di CBILL](https://www.cbill.it/chi-puoi-pagare).
{% endtab %}
{% endtabs %}

#### Vedi Anche

* [#avviso-data](../importo-e-scadenza.md#avviso-data "mention")
* [#avviso-oggetto](../intestazione.md#avviso-oggetto "mention")
* [#destinatario-nomecompleto](../informazioni-sul-destinatario.md#destinatario-nomecompleto "mention")
* [#ente-cbill](rata-unica.md#ente-cbill "mention")
* [#ente-cf](../informazioni-sullente-creditore.md#ente-cf "mention")

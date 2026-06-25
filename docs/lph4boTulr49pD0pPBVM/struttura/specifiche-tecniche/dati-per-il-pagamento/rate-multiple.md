---
description: >-
  Usa questa porzione per indicare i dettagli relativi al pagamento rateizzato,
  se previsto.
---

# Rate multiple

{% hint style="info" %}
**Novità:** ora è possibile inserire le rate anche nella prima pagina!
{% endhint %}

{% hint style="warning" %}
Se l'Ente Creditore dispone di un conto corrente postale per gli incassi, è necessario includere, subito dopo questa porzione, anche il [bollettino-postale-pa.md](bollettino-postale-pa.md "mention").
{% endhint %}

Questo modello raggruppa le rate per 2 o per 3, in modo che sia sempre possibile realizzare un avviso per qualsiasi frazionamento del pagamento, minimizzando il numero di pagine.

## Layout con multipli di 2

![Dettaglio della sezione "Dati per il pagamento (Rate in multipli di 2)" all'interno dell'avviso di pagamento pagoPA.](<../../../.gitbook/assets/2 Rate.png>)

### `AVVISO.RATE.`<mark style="color:red;">`n`</mark>`.IMPORTO`

{% tabs %}
{% tab title="Definizione" %}
Importo della rata
{% endtab %}

{% tab title="Tipo" %}
Numero
{% endtab %}

{% tab title="Dimensioni" %}
Valore massimo 999.999.999,99
{% endtab %}

{% tab title="Note" %}
In italiano, le migliaia sono separate dal punto, i decimali sono separati dalla virgola.
{% endtab %}
{% endtabs %}

### `AVVISO.RATE.`<mark style="color:red;">`n`</mark>`.DATA`

{% tabs %}
{% tab title="Definizione" %}
Data di scadenza della rata
{% endtab %}

{% tab title="Tipo" %}
Data
{% endtab %}

{% tab title="Formato" %}
dd/mm/yyyy
{% endtab %}
{% endtabs %}

### `AVVISO.RATE.`<mark style="color:red;">`n`</mark>`.CODICE`

{% tabs %}
{% tab title="Definizione" %}
Codice avviso della rata
{% endtab %}

{% tab title="Tipo" %}
Numero
{% endtab %}

{% tab title="Dimensioni" %}
22 caratteri spazi compresi
{% endtab %}

{% tab title="Formato" %}
Le cifre sono raggruppate a gruppi di 4 separate da uno spazio.
{% endtab %}

{% tab title="Note" %}
Per le regole di generazione, vedi [codice-qr.md](codice-qr.md "mention")
{% endtab %}
{% endtabs %}

### `AVVISO.RATE.`<mark style="color:red;">`n`</mark>`.QRCODE`

{% tabs %}
{% tab title="Definizione" %}
Codice a barre bidimensionale della rata
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

#### Vedi Anche

* [#ente-cf](../informazioni-sullente-creditore.md#ente-cf "mention")
* [#ente-cbill](rata-unica.md#ente-cbill "mention")
* [#destinatario-nomecompleto](../informazioni-sul-destinatario.md#destinatario-nomecompleto "mention")
* [#avviso-oggetto](../intestazione.md#avviso-oggetto "mention")

## Layout con multipli di 3

![Dettaglio della sezione "Dati per il pagamento (Rate in multipli di 3)" all'interno dell'avviso di pagamento pagoPA.](<../../../.gitbook/assets/3 Rate.png>)

{% hint style="info" %}
Se necessario per motivi di spazio, puoi omettere la voce **Destinatario**.
{% endhint %}

## Altri casi

Se il numero di rate non è divisibile né per 2 né per 3, è possibile scegliere liberamente uno dei due layout previsti—ripetendo lo stesso modulo all'interno della stessa pagina, come mostrato nello schema seguente:

![Ripeti lo stesso layout all'interno dello stesso foglio (Esempio A). Non mescolare moduli differenti all'interno dello stesso foglio (Esempi B e C).](<../../../.gitbook/assets/7 rate.png>)

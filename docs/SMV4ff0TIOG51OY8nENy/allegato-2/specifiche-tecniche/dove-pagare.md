---
description: >-
  È la sezione che presenta i diversi canali dove poter pagare un avviso pagoPA,
  online e sul territorio.
---

# Dove pagare

{% hint style="info" %}
**Novità:** presta attenzione ai nuovi testi di questa versione, ora più facili da implementare e più semplici e inclusivi per gli utenti.
{% endhint %}

![Dettaglio della sezione "Dove pagare" all'interno dell'avviso di pagamento pagoPA.](<../../.gitbook/assets/Importo e Dove.png>)

## Sezione canali digitali

Usa una delle due varianti proposte a seconda che sia possibile pagare dal sito dell'Ente Creditore o meno. **Non alterare il resto del testo.**

{% tabs %}
{% tab title="Se non si può pagare dal sito dell'Ente" %}
```markdown
**PAGA CON L'APP IO**
oppure dal tuo Home Banking, con la tua app di pagamento o con gli altri canali abilitati.
```
{% endtab %}

{% tab title="Se si può pagare dal sito dell'Ente" %}
```markdown
**PAGA CON L'APP IO**
oppure [sul sito di <Ente.Nome>, ]dal tuo Home Banking, con la tua app di pagamento o con gli altri canali abilitati.
```

Il testo racchiuso tra parentesi quadre mostrato nell'esempio segue le regole di [#ente-canale](dove-pagare.md#ente-canale "mention").
{% endtab %}
{% endtabs %}

{% hint style="warning" %}
Hai bisogno di inserire il sito dell'Ente? Non alterare questo testo, ma usa il segnaposto [#ente-info](informazioni-sullente-creditore.md#ente-info "mention")
{% endhint %}

<details>

<summary>Testo alternativo per Gestori di Pubblici Servizi</summary>

I Gestori di Pubblici Servizi, se lo desiderano, possono promuovere i loro canali digitali utilizzando la seguente variante:

```markdown
**PAGA ONLINE**
con l'app IO, [sul sito di <Ente.Nome>, ]dal tuo Home Banking, con la tua app di pagamento o con gli altri canali abilitati.
```

Il testo racchiuso tra parentesi quadre mostrato nell'esempio segue le regole di [#ente-canale](dove-pagare.md#ente-canale "mention").

</details>

### `ENTE.CANALE.ONLINE` <a href="#ente-canale" id="ente-canale"></a>

{% tabs %}
{% tab title="Definizione" %}
Eventuale testo fisso che elenca il sito (o app) dell'Ente Creditore tra i canali disponibili, se consente di effettuare il pagamento dell'avviso.
{% endtab %}

{% tab title="Tipo" %}
Array
{% endtab %}

{% tab title="Valori" %}
* <mark style="color:red;">`null`</mark>
* `sul sito di`[`Ente.Nome`](informazioni-sullente-creditore.md#ente-nome)`,`&#x20;
* `sull'app di`[`Ente.Nome`](informazioni-sullente-creditore.md#ente-nome)`,`&#x20;
* `sul sito o app di`[`Ente.Nome`](informazioni-sullente-creditore.md#ente-nome)`,`&#x20;
{% endtab %}

{% tab title="Note" %}
Variabile da utilizzare all'interno del testo di spiegazione dei canali digitali, come descritto in [#sezione-canali-digitali](dove-pagare.md#sezione-canali-digitali "mention").
{% endtab %}
{% endtabs %}

## Sezione canali fisici

Usa una delle due varianti proposte a seconda che sia possibile o no pagare presso canali fisici dell'Ente Creditore o meno, ad esempio le casse automatiche di un ospedale. **Non alterare il resto del testo.**

{% tabs %}
{% tab title="Se non si può pagare presso l'Ente" %}
```markdown
**PAGA SUL TERRITORIO**
presso Banche e Sportelli ATM, negli Uffici Postali e Punti Postali, nei Bar, Edicole, Ricevitorie, Supermercati, Tabaccherie, e altri Esercenti Convenzionati.
```
{% endtab %}

{% tab title="Se si può pagare presso l'Ente " %}
```markdown
**PAGA SUL TERRITORIO**
<Ente.Canale.Fisico>, presso Banche e Sportelli ATM, negli Uffici Postali e Punti Postali, nei Bar, Edicole, Ricevitorie, Supermercati, Tabaccherie e altri Esercenti Convenzionati.
```
{% endtab %}
{% endtabs %}

### `ENTE.CANALE.FISICO`

{% tabs %}
{% tab title="Definizione" %}
Eventuale testo che menziona il canale fisico dell'Ente Creditore, se consente di effettuare il pagamento dell'avviso.
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
Non inserire rimandi a risorse esterne o siti internet. Per informazioni di questo tipo usa il segnaposto [#ente-info](informazioni-sullente-creditore.md#ente-info "mention").
{% endtab %}
{% endtabs %}

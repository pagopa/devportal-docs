---
description: >-
  Se l'Ente Creditore dispone di un conto corrente postale per gli incassi, è
  necessario includere anche il Bollettino Postale PA.
---

# Bollettino Postale PA

## Rata unica

Il Bollettino Postale PA va inserito dopo la porzione [rata-unica.md](rata-unica.md "mention"), come mostrato nell'esempio:

![Dettaglio della sezione "Bollettino Postale PA (Rata unica)" all'interno dell'avviso di pagamento pagoPA.](<../../../.gitbook/assets/Poste rata unica.png>)

## Rate multiple

Le diverse rate vanno inserite dopo la porzione [rate-multiple.md](rate-multiple.md "mention"), come mostrato negli esempi.

### Layout con multipli di 2

![Dettaglio della sezione "Bollettino Postale PA (Rate in multipli di 2)" all'interno dell'avviso di pagamento pagoPA.](<../../../.gitbook/assets/2 Rate.png>)

### Layout con multipli di 3

![Dettaglio della sezione "Bollettino Postale PA (Rate in multipli di 3)" all'interno dell'avviso di pagamento pagoPA.](<../../../.gitbook/assets/Completo - 3 Rate.png>)

## Specifiche e testi segnaposto

{% hint style="info" %}
Per le specifiche consulta il _Manuale della stampa in proprio_ di Poste Italiane, consultabile sul sito [poste.it](bollettino-postale-pa.md#rata-unica)
{% endhint %}

### `<numero_cc_postale>`

{% tabs %}
{% tab title="Definizione" %}
Numero del conto corrente postale
{% endtab %}

{% tab title="Tipo" %}
Numero
{% endtab %}

{% tab title="Dimensioni" %}
Massimo 20 caratteri
{% endtab %}
{% endtabs %}

### `<intestatario_conto_corrente_postale>`

{% tabs %}
{% tab title="Definizione" %}
Intestazione del c/c postale dell’Ente Creditore
{% endtab %}

{% tab title="Tipo" %}
Stringa
{% endtab %}

{% tab title="Dimensioni" %}
Massimo 50 caratteri
{% endtab %}
{% endtabs %}

### `<data_matrix>`

{% tabs %}
{% tab title="Definizione" %}
Codice a barre bidimensionale a matrice
{% endtab %}

{% tab title="Tipo" %}
Immagine
{% endtab %}

{% tab title="Dimensioni" %}
25×25mm
{% endtab %}

{% tab title="Formato" %}
Il data matrix deve essere vettoriale, monocromatico e su sfondo bianco.
{% endtab %}

{% tab title="Note" %}
Per le specifiche del datamatrix si rimanda al Manuale della stampa in proprio di Poste Italiane, consultabile sul sito [poste.it](https://www.poste.it).
{% endtab %}
{% endtabs %}

### `<autorizzazione>`

{% tabs %}
{% tab title="Definizione" %}
Autorizzazione di Poste Italiane alla stampa in proprio
{% endtab %}

{% tab title="Tipo" %}
Stringa
{% endtab %}

{% tab title="Valori" %}
```
AUT. DB/xxxx/xxx xxxxx DEL xx/xx/xxxx
```
{% endtab %}

{% tab title="Note" %}
Il colore del testo non è nero pieno, ma al 70% di densità. L’autorizzazione deve essere richiesta a Poste Italiane così come definito nel "Manuale della stampa in proprio", consultabile sul sito [poste.it](https://www.poste.it).
{% endtab %}
{% endtabs %}

### `<nome_cognome_destinatario>`

Vedi [#destinatario-nomecompleto](../informazioni-sul-destinatario.md#destinatario-nomecompleto "mention").

### `<oggetto_del_pagamento>`

Vedi [#avviso-oggetto](../intestazione.md#avviso-oggetto "mention").

### `<codice_avviso>`

Vedi [#avviso-codice](rata-unica.md#avviso-codice "mention").

### `<cf_ente>`

Vedi [#ente-cf](../informazioni-sullente-creditore.md#ente-cf "mention").

### `<importo>`

Vedi [#avviso-importo](../importo-e-scadenza.md#avviso-importo "mention")


---
description: >-
  Questa pagina definisce la struttura della stringa da codificare all'interno
  del codice QR
---

# Codice QR

La sezione [.](./ "mention") prevede l'utilizzo del codice QR per rendere l'esperienza di pagamento più immediata, evitando cioè di dover inserire a mano i dati dell'avviso.

Il codice QR è definito dallo standard [ISO/IEC 18004:2015](https://www.iso.org/standard/62021.html).

### Struttura della stringa

La stringa deve obbligatoriamente seguire la seguente struttura:

```xml
<CODICE IDENTIFICATIVO>|<VERSIONE>|<CODICE AVVISO>|<CODICE FISCALE ENTE CREDITORE>|<IMPORTO>
```

Le varie porzioni sono separate dal simbolo `|`

### Esempio

```
PAGOPA|002|000000000000000000|00000000000|9999
```

{% hint style="info" %}
Online trovi numerosi servizi per generare e testare i codici QR.
{% endhint %}

## Specifiche

### Codice identificativo

{% tabs %}
{% tab title="Contenuto" %}
PAGOPA
{% endtab %}

{% tab title="Tipo" %}
Testo fisso
{% endtab %}

{% tab title="Lunghezza" %}
6 caratteri
{% endtab %}
{% endtabs %}

### Versione

{% tabs %}
{% tab title="Contenuto" %}
002
{% endtab %}

{% tab title="Tipo" %}
Testo fisso
{% endtab %}

{% tab title="Lunghezza" %}
3 caratteri
{% endtab %}
{% endtabs %}

### Codice Avviso

{% tabs %}
{% tab title="Contenuto" %}
Codice Avviso, composto dalla concatenazione di AUX Digit, Application Code e Codice IUV
{% endtab %}

{% tab title="Tipo" %}
Stringa
{% endtab %}

{% tab title="Lunghezza" %}
18 caratteri
{% endtab %}
{% endtabs %}

### Codice Fiscale Ente Creditore

{% tabs %}
{% tab title="Contenuto" %}
Codice Fiscale dell'Ente Creditore
{% endtab %}

{% tab title="Tipo" %}
Stringa
{% endtab %}

{% tab title="Lunghezza" %}
11 caratteri
{% endtab %}
{% endtabs %}

### Importo

{% tabs %}
{% tab title="Contenuto" %}
Importo del pagamento, in centesimi di euro
{% endtab %}

{% tab title="Tipo" %}
Stringa
{% endtab %}

{% tab title="Lunghezza" %}
Minimo 2, massimo 11 caratteri
{% endtab %}
{% endtabs %}

## Caratteristiche tecniche

Nella tabella sottostante sono riportate le caratteristiche tecniche che devono essere applicate nella generazione del codice QR.

| Caratteristica | Valore da utilizzare          |
| -------------- | ----------------------------- |
| Symbol version | 4                             |
| Modules        | 33x33                         |
| Modules width  | 3 pixels                      |
| ECC level      | M (correzione errore max 15%) |
| Character set  | UTF-8                         |


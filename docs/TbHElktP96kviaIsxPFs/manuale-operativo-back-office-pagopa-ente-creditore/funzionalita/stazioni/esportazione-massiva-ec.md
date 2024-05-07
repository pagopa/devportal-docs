---
description: >-
  Questa funzionalità consente l'esportazione massiva dei dati degli EC in
  formato csv.
---

# Esportazione Massiva EC

{% hint style="warning" %}
I dati esportati riguardano esclusivamente gli Enti che sono associati alle stazioni. Pertanto un EC registrato al Nodo ma non associato ad alcuna stazione non verrà preso in considerazione nell'export csv.
{% endhint %}

{% hint style="success" %}
La funzionalità è garantita sia agli EC che intermediano altri EC sia ai PT di EC.
{% endhint %}

Per accedere alla funzionalità è necessario posizionarsi nella sezione "Panoramica" all'interno della quale nel riquadro "Sezione download" è visibile il pulsante "Scarica lista EC"

<figure><img src="../../../.gitbook/assets/Screenshot 2024-01-25 alle 09.09.55.png" alt=""><figcaption><p>Sezione Download</p></figcaption></figure>

{% hint style="danger" %}
I dati esportati fanno riferimento a tutte le modifiche intercorse il giorno precedente fino alle 23:59. Eventuali variazioni che dovessero intercorrere durante il giorno in cui si effettua il download non verranno considerate nell'esportazione.
{% endhint %}

I dati che vengono esportati sono i seguenti:

| Nome Campo        | Descrizione                                         |
| ----------------- | --------------------------------------------------- |
| companyName       | Ragione sociale EC                                  |
| taxCode           | Codice fiscale/p.iva EC                             |
| intermediated     | EC diretto/indiretto true\|false                    |
| brokerCompanyName | Ragione sociale intermediario/partner               |
| brokerTaxCode     | Codice fiscale intermediario/partner                |
| model             | Impostato fisso a 3                                 |
| auxDigit          | Aux Digit associato alla stazione                   |
| segregationCode   | Codice segregazione associato alla stazione         |
| applicationCode   | Application code associato alla stazione            |
| cbillCode         | Codice CBILL Ente                                   |
| stationId         | Id stazione associata all’ente                      |
| stationState      | Stato associazione attivo/disattivo                 |
| activationDate    | Data stato attivazione della stazione               |
| version           | Versione della stazione                             |
| broadcast         | Stazione di broadcast true\|false                   |
| PSPpayment        | Flag che indica se EC permette pagamento presso PSP |

Un esempio di file csv prodotto è il seguente:

{% file src="../../../.gitbook/assets/export-enti.csv" %}

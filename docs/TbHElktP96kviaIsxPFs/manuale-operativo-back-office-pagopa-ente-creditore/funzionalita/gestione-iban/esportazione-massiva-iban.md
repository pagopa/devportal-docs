---
description: >-
  Questa funzionalità consente l'esportazione massiva dei dati degli IBAN
  inseriti dagli EC in formato csv.
---

# Esportazione Massiva IBAN

{% hint style="success" %}
La funzionalità è garantita sia agli EC che intermediano altri EC sia ai PT di EC.
{% endhint %}

Per accedere alla funzionalità è necessario posizionarsi nella sezione "Panoramica" all'interno della quale nel riquadro "Sezione download" è visibile il pulsante "Scarica lista IBAN"

<figure><img src="../../../.gitbook/assets/Screenshot 2024-01-15 alle 12.48.07.png" alt=""><figcaption></figcaption></figure>

{% hint style="danger" %}
I dati esportati fanno riferimento a tutte le modifiche intercorse il giorno precedente fino alle 23:59. Eventuali variazioni che dovessero intercorrere durante il giorno in cui si effettua il download non verranno considerate nell'esportazione.
{% endhint %}

I dati che vengono esportati sono i seguenti:

| Nome Campo          | Descrizione                                                      |
| ------------------- | ---------------------------------------------------------------- |
| denominazioneEnte   | denominazione dell'Ente Creditore                                |
| codiceFiscale       | codice fiscale dell'Ente Creditore                               |
| iban                | IBAN                                                             |
| stato               | stato di attivazione dell'IBAN                                   |
| dataAttivazioneIban | data di attivazione dell'IBAN                                    |
| descrizione         | eventuale descrizione dell'IBAN                                  |
| etichetta           | etichetta che identifica se l'IBAN è di tipo "Stand IN" o "CUP". |

Un esempio di file csv prodotto è il seguente:

{% file src="../../../.gitbook/assets/export-ibans esempio.csv" %}

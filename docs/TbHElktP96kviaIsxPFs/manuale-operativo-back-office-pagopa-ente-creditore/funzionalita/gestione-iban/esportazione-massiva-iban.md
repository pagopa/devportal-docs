---
description: >-
  Questa funzionalità consente l'esportazione massiva dei dati degli IBAN
  inseriti dagli EC in formato csv.
---

# Esportazione Massiva IBAN

{% hint style="warning" %}
La funzionalità al momento è disponibile in "preview". Ciò vuol dire che durante l'esportazione all'interno del file csv prodotto vengono inseriti soltanto un sottoinsieme di IBAN e non la totalità. Entro il 31/01/24 verrà rilasciata la versione definitiva.&#x20;
{% endhint %}

{% hint style="success" %}
La funzionalità è garantita sia agli EC che intermediano altri EC sia ai PT di EC.
{% endhint %}

Per accedere alla funzionalità è necessario posizionarsi nella sezione "Panoramica" all'interno della quale nel riquadro "Sezione download" è visibile il pulsante "Scarica lista IBAN"

<figure><img src="../../../.gitbook/assets/Screenshot 2023-12-18 alle 17.12.18.png" alt=""><figcaption></figcaption></figure>

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

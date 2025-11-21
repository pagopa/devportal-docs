---
description: >-
  In questa sezione (detta anche "Allegato 2") puoi trovare le indicazioni
  specifiche per la produzione di un avviso di pagamento in tutte le casistiche
  previste.
---

# 📐 Specifiche Tecniche

{% hint style="info" %}
Stai cercando i materiali per realizzare gli esecutivi di stampa? Visita la sezione [elementi-di-design](../elementi-di-design/ "mention")!
{% endhint %}

## Formato della pagina

Le specifiche sono pensate per garantire la riproducibilità in un formato A4 adatto alla stampa. Nella sezione [varianti](../../allegato-1/varianti/ "mention") puoi trovare altri formati, come ad esempio quello adatto agli scontrini delle stampanti a trasferimento termico portatili.

## Codifica dei testi

È obbligatorio usare la codifica di caratteri UTF-8, che supporta tutti i caratteri Unicode, inclusi quelli estesi delle lingue come lo sloveno (č, š, ž) e il tedesco (ä, ö, ü, ß). Questo garantisce la corretta visualizzazione e gestione di testi multilingue.

## Struttura della pagina

L'avviso di pagamento è composto da diversi moduli. Alcuni sono fissi e altri variabili, in funzione della tipologia del pagamento e del modo in cui l'Ente Creditore gestisce gli incassi.

{% hint style="info" %}
Quando componi il tuo modello, rispetta l'ordine d'inserimento dei moduli descritto in questa pagina—ma pensa sempre alla composizione in maniera _dinamica_: se il tuo pagamento non prevede una rata unica, puoi inserire i dettagli delle rate già a pagina 1.
{% endhint %}

| Ordine | Nome                                                                               |
| ------ | ---------------------------------------------------------------------------------- |
| 1      | [intestazione.md](intestazione.md "mention")                                       |
| 2.1    | [informazioni-sullente-creditore.md](informazioni-sullente-creditore.md "mention") |
| 2.2    | [informazioni-sul-destinatario.md](informazioni-sul-destinatario.md "mention")     |
| 3.1    | [importo-e-scadenza.md](importo-e-scadenza.md "mention")                           |
| 3.2    | [dove-pagare.md](dove-pagare.md "mention")                                         |
| 4      | [dati-per-il-pagamento](dati-per-il-pagamento/ "mention")                          |

## Variabili e testi segnaposto <a href="#variabili" id="variabili"></a>

Nelle varie pagine che descrivono i moduli vengono utilizzati dei testi segnaposto, identificati da chiavi secondo la sintassi `proprietà1.proprietà2`, come ad esempio [#avviso-importo](importo-e-scadenza.md#avviso-importo "mention") o [#destinatario-cf](informazioni-sul-destinatario.md#destinatario-cf "mention").

Le immagini, invece, vengono mostrate con blocchi grigi—identificati sempre con una variabile (es.:   [#avviso-qrcode](dati-per-il-pagamento/rata-unica.md#avviso-qrcode "mention")).

Il modello dati che comprende tutte le possibili variabili utilizzate all'interno dell'avviso è il seguente:

```yaml
avviso:
    oggetto: TARI 2021
    importo: 150,00
    data: 31/01/2022
    codice: 0000 0000 0000 0000 00
    qrcode: PAGOPA|002|000000000000000000|01199250158|0000015000
    rate:
        totale: 3
        info: "Puoi pagare per intero oppure in 3 rate"
        1:
            importo: 50,00
            data: 31/12/2021
            codice: 0000 0000 0000 0000 00
            qrcode: PAGOPA|002|000000000000000000|01199250158|0000015000
        2:
            importo: 50,00
            data: 31/01/2022
            codice: 0000 0000 0000 0000 00
            qrcode: PAGOPA|002|000000000000000000|01199250158|0000015000
        3:
            importo: 50,00
            data: 28/02/2022
            codice: 0000 0000 0000 0000 00
            qrcode: PAGOPA|002|000000000000000000|01199250158|0000015000
ente:
    cf: 01199250158
    cbill: A0EDT
    nome: Comune di Milano
    settore: Tributi locali
    info: "Per informazioni www.comune.milano.it/TARI · tel. 02 0202"
    logo: logo-ente.png
    canale: 
        online: "sul sito del Comune di Milano"
        fisico: ""
destinatario:
    cf: RSSMRA60D20F205R
    nomecompleto: Mario Rossi
    indirizzo: Vicolo Corto 12 20133 Milano MI
```

## Testi fissi

I testi non modificabili sono raccolti nella sezione [#stringhe-dei-testi-fissi](../../allegato-1/varianti/traduzioni/#stringhe-dei-testi-fissi "mention").

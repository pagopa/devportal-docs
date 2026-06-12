# Riconciliazione contabile

L’EC per poter imputare gli importi ricevuti alle corrette voci di bilancio, in modo da poter fare le reversali e concludere la procedura di riconciliazione contabile, deve far transitare sulla piattaforma pagoPA le informazioni utili tramite la struttura dei _metadata._

L’idea di base è stabilire diverse tipologie di “logiche di funzionamento”, battezzando fin da subito quelle note, ma anche predisponendosi per un meccanismo in grado di evolvere nel corso del tempo.

Per ciascuna tipologia stabilire un set di informazioni standard che siano appunto uguali per tutti ed utilizzabili quindi prima dai partner tecnologici e poi dai sistemi contabili.

## Strutturazione di base dell'xml

Si assume che un singolo transfer può avere _n_ dettagli contabili, non essendo possibile creare un XML a diversi livelli è necessario aggiungere un indice come suffisso di ogni _key_.

Ad ogni _key_ sarà associato un _value_ con formato _stringa_ di massimo 140 caratteri, spazi compresi

### Esempio xml strutturato

```xml
<metadata>
  <mapEntry>
    <key>RC_TIP_1</key>
    <value>CORRISPETTIVO_DL118</value>
  </mapEntry>
  <mapEntry>
    <key>RC_AC_1</key>
    <value>2023</value>
  </mapEntry>
  <mapEntry>
    <key>RC_CAP_1</key>
    <value>123245666</value>
  </mapEntry>
  <mapEntry>
    <key>RC_ACC_1</key>
    <value>2023/1233</value>
  </mapEntry>
  <mapEntry>
    <key>RC_IMP_1</key>
    <value>100.50</value>
  </mapEntry>
</metadata>
```

## Proposta operativa

Concettualmente si prevedono 2 tipologie di informazioni:

* tipologia di contabilizzazione;
* dettaglio contabile.

In taluni casi, infatti, può succedere che la stessa informazione/tag possa avere significati diversi a seconda del contesto ed è pertanto necessario dichiarare anche il contesto ovvero la tipologia di contabilizzazione.

### Tipologie di contabilizzazione

Come detto in premessa il fatto di dichiarare una tipologia predispone il sistema anche ad esigenze future, le prime _tipologie_ potrebbero essere le seguenti:

{% content-ref url="corrispettivo_dl118.md" %}
[corrispettivo\_dl118.md](corrispettivo\_dl118.md)
{% endcontent-ref %}

{% content-ref url="incasso_tipico.md" %}
[incasso\_tipico.md](incasso\_tipico.md)
{% endcontent-ref %}

{% content-ref url="civilistico.md" %}
[civilistico.md](civilistico.md)
{% endcontent-ref %}

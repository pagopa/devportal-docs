# Gestione Evoluta Commissioni

{% hint style="info" %}
Questa sezione descrive tutte le funzionalità previste per la Gestione Evoluta Commissioni, così come decritto nelle [SANP](https://docs.pagopa.it/sanp/appendici/gestione-evoluta-commissioni).
{% endhint %}

## Marketplace

E' lo strumento che permette agli EC di convenzionarsi a determinati pacchetti ("su richiesta" o "su invito") esposti dai PSP o a completare con ulteriori attributi (commissioni a proprio carico e tassonomia) i pacchetti "Per tutti".

Ogni PSP può definire 3 tipologie di pacchetto commissionale

* "Per tutti" → disponibile per i pagamenti di qualsiasi EC;
* "Su richiesta" → disponibile solo per i pagamenti degli EC che hanno attivato una “convenzione” tramite marketplace;
* "Su invito" → disponibile solo per i pagamenti degli EC che hanno attivato una “convenzione” tramite marketplace su invito del PSP;

{% hint style="warning" %}
E' possibile creare pacchetti che sono contigui. In tal caso il pacchetto che viene preso in considerazione durante il pagamento è quello con il limite inferiore.

Esempio.

Pacchetto 1 -> Importo minimo 0€ - Importo massimo 50€

Pacchetto 2 -> Importo minimo 50€ - Importo massimo 1000€\
\
Nel caso di pagamento di un avviso di 50€ il pacchetto che verrebbe preso in considerazione è il Pacchetto 1.
{% endhint %}


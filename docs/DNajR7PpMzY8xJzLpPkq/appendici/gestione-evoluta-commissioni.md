# Gestione evoluta commissioni

PagoPA S.p.A ha implementato questo servizio che introduce un motore di regole che funge da condizioniere per tutte le operazioni di pagamento della piattaforma, dando la possibilità ai PSP di creare pacchetti commissionali ad hoc per specifici pagamenti che garantiscono maggiore flessibilità in base a

* commissioni diverse rispetto ad EC
* touchpoint
* tassonomia della posizione debitoria
* importo
* strumento di pagamento scelto
* periodo

ogni EC ha la possibilità, per ogni pacchetto commissionale di tipo "Su richiesta" e "Su invito", di impostare la quota di cui si fa carico, potendo anche associarla a determinate tassonomie.

## Marketplace

E' lo strumento che permette agli EC di convenzionarsi a determinati pacchetti ("su richiesta" o "su invito") esposti dai PSP potendo inoltre completare i pacchetti con le informazioni circa le commissioni a proprio carico.

Ogni PSP può definire 3 tipologie di pacchetto commissionale

* "Per tutti" → disponibile per i pagamenti di qualsiasi EC;
* "Su richiesta"  → disponibile solo per i pagamenti degli EC che hanno attivato una “convenzione” tramite marketplace;
* "Su invito" → disponibile solo per i pagamenti degli EC che hanno attivato una “convenzione” tramite marketplace su invito del PSP;

<figure><img src="../.gitbook/assets/image (55).png" alt=""><figcaption></figcaption></figure>

### Casi d'uso

* Ogni PSP ha a disposizione delle interfacce CRUD per gestire un pacchetto per ogni commissione;
* ogni PSP può definire un importo per ogni pacchetto;
* ogni PSP può definire una fascia di importo della transazione per ogni pacchetto;
* ogni PSP può associare un metodo di pagamento ad ogni pacchetto;
* ogni PSP può associare un touchpoint ad ogni pacchetto;
* ogni PSP può associare un codice tassonomico ad ogni pacchetto;
* ogni PSP può associare un periodo di validità ad ogni pacchetto;
* ogni PSP può offrire i propri pacchetti "su invito" agli EC;
* ogni PSP può accettare le richieste di adesione degli EC ai propri pacchetti "su richiesta";
* ogni PSP può accettare le modifiche di adesione degli EC ai propri pacchetti "su richiesta";
* ogni EC ha a disposizione delle interfacce CRUD per gestire i pacchetti a cui ha accesso;
* ogni EC può farsi carico di una quota commissionale per ogni pacchetto "su richiesta" o "su invito" a cui ha accesso;
* ogni EC può associare un filtro per codice tassonomico per la quota commissionale di cui vuole farsi carico;
* ogni EC può richiedere di aderire a un pacchetto "su richiesta";
* ogni EC può modificare l’adesione a un pacchetto "su richiesta";
* ogni EC può accettare o rifiutare l’offerta di un pacchetto "su invito".

Per maggiori informazioni circa l'utilizzo delle funzionalità fare riferimento a:

Manuale per gli EC -> [https://developer.pagopa.it/pago-pa/guides/manuale-bo-ec/manuale-operativo-back-office-pagopa-ente-creditore/funzionalita/gestione-evoluta-commissioni](https://developer.pagopa.it/pago-pa/guides/manuale-bo-ec/manuale-operativo-back-office-pagopa-ente-creditore/funzionalita/gestione-evoluta-commissioni)

Manuale per i PSP -> [https://developer.pagopa.it/pago-pa/guides/manuale-bo-psp/manuale-operativo-pagamenti-pagopa-prestatore-di-servizi-di-pagamento/funzionalita/gestione-evoluta-commissioni](https://developer.pagopa.it/pago-pa/guides/manuale-bo-psp/manuale-operativo-pagamenti-pagopa-prestatore-di-servizi-di-pagamento/funzionalita/gestione-evoluta-commissioni)

# Gestione evoluta commissioni

PagoPA S.p.A ha implementato questo servizio che introduce un motore di regole che funge da condizioniere per tutte le operazioni di pagamento della piattaforma, dando la possibilità ai PSP di creare pacchetti commissionali ad hoc per specifici pagamenti che garantiscono maggiore flessibilità in base a

* commissioni diverse rispetto ad EC
* touchpoint
* tassonomia della posizione debitoria
* importo
* strumento di pagamento scelto
* periodo

ogni EC ha la possibilità, per ogni pacchetto commissionale, di impostare la quota di cui si fa carico, potendo anche associarla a determinate tassonomie.

Tale servizio è alternativo all'utilizzo del **Catalogo Dati Informativi.**

## Marketplace

E' lo strumento che permette agli EC di convenzionarsi a determinati pacchetti (pubblici o privati) esposti dai PSP o a completare con ulteriori attributi (commissioni a proprio carico e tassonomia) i pacchetti globali.

Ogni PSP può definire 3 tipologie di pacchetto commissionale

* globale → disponibile per i pagamenti di qualsiasi EC;
* pubblico → disponibile solo per i pagamenti degli EC che hanno attivato una “convenzione” tramite marketplace;
* privato → disponibile solo per i pagamenti degli EC che hanno attivato una “convenzione” tramite marketplace su invito del PSP;

![](<../.gitbook/assets/image (30).png>)

### Casi d'uso

* Ogni PSP ha a disposizione delle interfacce CRUD per gestire un pacchetto per ogni commissione;
* ogni PSP può definire un importo per ogni pacchetto;
* ogni PSP può definire una fascia di importo della transazione per ogni pacchetto;
* ogni PSP può associare un metodo di pagamento ad ogni pacchetto;
* ogni PSP può associare un touchpoint ad ogni pacchetto;
* ogni PSP può associare un codice tassonomico ad ogni pacchetto;
* ogni PSP può associare un periodo di validità ad ogni pacchetto;
* ogni PSP può offrire i miei pacchetti privati agli EC;
* ogni PSP può accettare le richieste di adesione degli EC ai miei pacchetti pubblici;
* ogni PSP può accettare le modifiche di adesione degli EC ai miei pacchetti pubblici;
* ogni EC ha a disposizione delle interfacce CRUD per gestire i pacchetti a cui ho accesso;
* ogni EC può farsi carico di una quota commissionale per ogni pacchetto a cui ho accesso;
* ogni EC può associare un filtro per codice tassonomico per la quota commissionale di cui voglio farmi carico;
* ogni EC può richiedere di aderire a un pacchetto pubblico;
* ogni EC può modificare l’adesione a un pacchetto pubblico;
* ogni EC può accettare l’offerta di un pacchetto privato.

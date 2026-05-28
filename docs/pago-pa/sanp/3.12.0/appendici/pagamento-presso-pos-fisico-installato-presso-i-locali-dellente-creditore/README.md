# Pagamento presso POS fisico installato presso i locali dell'Ente Creditore

Questa sezione descrive lo specifico caso d'uso del pagamento pagoPA tramite POS fisico installato presso i locali dell'Ente Creditore (EC).

A differenza dei pagamenti effettuati tramite POS fisici installati presso i canali dei Prestatori di Servizi di Pagamento (PSP), come tabaccherie e/o sportelli bancari (che rientrano nel caso d’uso: [Pagamento di un avviso presso PSP](https://developer.pagopa.it/it/pago-pa/guides/sanp/casi-duso/pagamento-di-un-avviso-presso-psp)), questo caso d’uso si caratterizza principalmente per due tratti distintivi:

* il POS fisico è installato direttamente presso i locali dell'Ente Creditore;
* il terminale è dedicato all'incasso di dovuti emessi dall'Ente Creditore presso cui è installato il POS.

I casi d'uso tipici che questa soluzione intende abilitare riguardano i pagamenti a sportello contestuali alla fruizione di un servizio. Ne sono un esempio il cittadino che salda una prestazione sanitaria presso gli sportelli della ASL, o il visitatore che acquista il biglietto d'ingresso direttamente alla biglietteria fisica di un museo.

L’ente può scegliere liberamente la modalità di integrazione maggiormente confacente alle proprie esigenze, optando tra:

* [Integrazione diretta Gestionale-POS](pos-fisici.md)
* [Integrazione con POS Gateway pagoPA](integrazione-con-pos-gateway-pagopa/) (modalità attualmente in fase di definizione, che si aggiungerà a quella diretta)

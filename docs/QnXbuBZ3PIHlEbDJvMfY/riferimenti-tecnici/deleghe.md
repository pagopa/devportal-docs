# Deleghe

Il meccanismo di **delega** permette a un ente (**Delegante**) di autorizzare un altro ente aderente (**Delegato**) a gestire per suo conto le operazioni amministrative relative all'erogazione o alla fruizione di un e-service. Questa funzionalità è pensata per centralizzare la gestione in organizzazioni complesse o per affidare le operazioni a partner tecnologici.

È fondamentale sottolineare che la delega riguarda esclusivamente la funzione amministrativa sulla piattaforma. La responsabilità legale e amministrativa nei confronti di terzi, così come gli aspetti tecnici dell'implementazione delle API, rimangono sempre in capo all'ente Delegante.

### Fasi e Ciclo di Vita di una Delega

Il processo di delega si articola in più fasi e attraversa un ciclo di vita ben definito.

#### Fasi del Processo

1. **Disponibilità**: Un ente A si rende disponibile a ricevere deleghe.
2. **Inoltro**: Un ente B inoltra una richiesta di delega all'ente A per uno specifico e-service.
3. **Valutazione**: L'ente A valuta la richiesta e può accettarla o rifiutarla.
4. **Gestione**: Se la delega è attiva, l'ente A gestisce le operazioni per conto dell'ente B.
5. **Revoca**: In qualsiasi momento, l'ente B può revocare la delega, riprendendo il controllo.

#### Stati della Delega

* **In attesa di approvazione**: La richiesta è stata inoltrata al potenziale Delegato.
* **Attiva**: Il Delegato ha accettato e ha preso in gestione l'attività.
* **Rifiutata**: Il potenziale Delegato ha rifiutato la richiesta, fornendo una motivazione.
* **Revocata**: Il Delegante ha ritirato la delega, che non è più attiva.

### Responsabilità nella Delega per l'Erogazione

In questo scenario, il Delegante affida al Delegato la gestione amministrativa di un proprio e-service.

#### Compiti del Delegato (Erogazione)

* Crea e gestisce le versioni dell'e-service.
* Inoltra le nuove versioni al Delegante per l'approvazione finale alla pubblicazione.
* Valuta e gestisce le richieste di fruizione pervenute.
* Valuta e gestisce le finalità e le relative analisi del rischio.

#### Compiti e Limiti del Delegante (Erogazione)

* Mantiene la visibilità sull'e-service e su tutte le richieste e finalità collegate, ma **non può operarvi direttamente**.
* Ha il compito esclusivo di **approvare o rifiutare** la pubblicazione di ogni nuova versione di e-service proposta dal Delegato.
* Mantiene la gestione esclusiva del **Portachiavi erogatore** associato all'e-service per la firma delle risposte.

La revoca di una delega in erogazione non ha impatto sui Fruitori già attivi; il Delegante riprende semplicemente il pieno controllo gestionale dell'e-service.

### Responsabilità nella Delega per la Fruizione

In questo scenario, il Delegante affida al Delegato la gestione di una richiesta di fruizione verso un e-service di un terzo Erogatore. Questa opzione è disponibile solo se l'Erogatore l'ha esplicitamente consentita per il proprio e-service.

#### Compiti del Delegato (Fruizione)

* Presenta e gestisce l'intera richiesta di fruizione per conto del Delegante.
* Crea e gestisce le proprie finalità e analisi del rischio.
* Può associare i **propri client** alle finalità create in delega solo se l'Erogatore lo consente espressamente.

#### Compiti e Limiti del Delegante (Fruizione)

* Mantiene la visibilità sulla richiesta di fruizione e sulle finalità create dal Delegato, ma non può modificarle.
* Può creare **autonomamente le proprie finalità** per la richiesta di fruizione gestita dal Delegato. Queste finalità non sono visibili al Delegato.
* Può sempre associare i **propri client** sia alle finalità create dal Delegato sia a quelle create da sé.

La revoca di una delega in fruizione comporta l'archiviazione automatica della richiesta di fruizione e di tutte le finalità ad essa collegate, interrompendone l'utilizzo.

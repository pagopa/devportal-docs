# FAQ su Interoperabilità

### Cosa dovrò fare con i comandi che ottengo durante la fase di generazione del Voucher?

I comandi che sono descritti durante la generazione del Voucher dovranno essere utilizzati in modalità M2M ed integrati nel processo di chiamata delle API B2B di Piattaforma Notifiche; inoltre andrà implementato un meccanismo che effettui il refresh del Voucher quando si è in prossimità della scadenza. Infatti non è necessario generare un Voucher ogni volta che si effettua una chiamata ai servizi di Piattaforma Notifiche ma si può utilizzare lo stesso più volte fino a che non scade.

### Dove devo utilizzare il Voucher che genero in ambiente di Collaudo di Interoperabilità?

Il Voucher generato in ambiente di Collaudo di Interoperabilità può essere utilizzato nelle chiamate effettuate verso le API B2B di Piattaforma Notifiche in ambiente UAT con baseUrl:  [https://api.uat.notifichedigitali.it](https://api.uat.notifichedigitali.it) ed andrà inserito nell' Header come Authorization: `"Authorization: Bearer <PDNDVoucher>"`assieme all'APIKey generata in ambiente UAT (accessibile con le stesse credenziali ottenute in fase di Onboarding).

### Posso usare lo stesso Voucher sia sui servizi di inserimento notifica che su quelli delle streams?

Si, sarà sufficiente generare un unico Voucher ed un'unica key per accedere ad entrambi i servizi di inserimento notifica e streams

### Come posso configurare le autorizzazioni su PDND Interoperabilità?

In **PDND Interoperabilità Collaudo** si consiglia di creare per l'operatore tecnico un unico utente come amministratore, che possa creare la richiesta di fruizione, la finalità ed il client per poter concludere in modo semplice e rapido la fase di test; questo utente avrà infatti accesso **SOLO** all'ambiente di **PDND Interoperabilità Collaudo.**&#x20;

In **PDND Interoperabilità Produzione** la creazione del client con relativo inserimento del personale tecnico e l'associazione del client alle varie finalità sono operazioni esclusive degli amministratori, mentre tutti i livelli di permesso permettono di caricare chiavi pubbliche all'interno dei client a patto che l'operatore tecnico sia stato aggiunto al client di riferimento (anche se amministratore). \
La strategia di creazione e associazione delle finalità, creazione dei client e inserimento degli operatori all'interno dei client rientra nel piano organizzativo e dipende strettamente dai processi interni dell'ente. Si consiglia di mappare le proprie finalità, censire il proprio personale tecnico e creare i client applicando come best-practice l'assegnazione del minimo dei permessi necessari al minimo delle persone che devono averne (least privilege); si sconsiglia invece la creazione di un solo client nel quale vengono inseriti tutti gli operatori, poichè associando quel client a tutte le finalità, si dà di fatto a tutti gli operatori accesso a tutti gli e-service ai quali l'ente è iscritto. \
Si evidenzia infine che sarà comunque possibile in ogni momento modificare la composizione degli operatori che fanno parte di un client e anche dei client che sono associati ad una specifica finalità.

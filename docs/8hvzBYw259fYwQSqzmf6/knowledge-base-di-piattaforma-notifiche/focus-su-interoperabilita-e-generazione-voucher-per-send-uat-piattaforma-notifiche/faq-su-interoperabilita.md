# FAQ su Interoperabilità

### Cosa dovrò fare con i comandi che ottengo durante la fase di generazione del Voucher?

I comandi che sono descritti durante la generazione del Voucher dovranno essere utilizzati in modalità M2M ed integrati nel processo di chiamata delle API B2B di Piattaforma Notifiche; inoltre andrà implementato un meccanismo che effettui il refresh del Voucher quando si è in prossimità della scadenza. Infatti non è necessario generare un Voucher ogni volta che si effettua una chiamata ai servizi di Piattaforma Notifiche ma si può utilizzare lo stesso più volte fino a che non scade.

### Dove devo utilizzare il Voucher (o Access Token) che genero in ambiente di Collaudo di Interoperabilità?

Il Voucher generato in ambiente di Collaudo di Interoperabilità può essere utilizzato nelle chiamate effettuate verso le API B2B di Piattaforma Notifiche in ambiente UAT con baseUrl:  [https://api.uat.notifichedigitali.it](https://api.uat.notifichedigitali.it) ed andrà inserito nell' Header come Authorization toke: `"Authorization: Bearer <accessToken>"`assieme all'APIKey generata in ambiente UAT (accessibile con le stesse credenziali ottenute in fase di Onboarding) &#x20;

### Posso usare lo stesso Voucher sia sui servizi di inserimento notifica che su quelli delle streams?

Si, sarà sufficiente generare un unico Voucher ed un'unica key per accedere ad entrambi i servizi di inserimento notifica e streams

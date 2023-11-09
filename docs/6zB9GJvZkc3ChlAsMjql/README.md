# Perchè la modalità Redirect?

La modalità di pagamento in _redirect_ verso soluzioni fornite dai singoli PSP o terze parti da loro convenzionate, per facilitare l’introduzioni di pagamenti su conto corrente e similari per i cittadini ed imprese, è studiata secondo le seguenti stelle polari:

* _principio di neutralità_: la piattaforma pagoPA **deve** mettere a disposizione di tutti i PSP le medesime interfacce ed integrazioni tecnologiche senza alcuna customizzazione, é chiesto quindi a tutti i PSP che oggi hanno soluzioni custom di adeguarsi alla nuova modalità, unica disponibile per il modello unico di pagamento obbligatorio sulla piattaforma pagoPA a partire da ottobre 2023;&#x20;
* _compliance PSD2_: come oggi resta responsabilità del PSP, che mette a disposizione lo strumento di pagamento (direttamente o per il tramite di terzi), garantire il rispetto della normativa vigente in termini di sicurezza, autenticazione (SCA) e best practise bancarie;
* _regole chiare descritte nelle SANP_: è scelta della società PagoPA SpA declinare quali modalità di pagamento permettere di veicolare dentro la modalità di _redirect_, secondo principi che devono essere chiari e descritti nelle SANP.

NB: le modalità di pagamento, anche se per pagamenti su conto corrente (es: mybank, BBPay, ecc…), nativamente integrate con il payment gateway di pagoPA, non possono essere integrate in modalità _redirect_.

Precondizione del PSP per abilitare tutti gli altri strumenti di pagamento disponibili, fra cui la _redirect_, è l’integrazione al Nodo dei pagamenti secondo le specifiche del modello unico e la valorizzazione del catalogo dati informativo per il tramite del backoffice pagoPA fruibile dall’area riservata.

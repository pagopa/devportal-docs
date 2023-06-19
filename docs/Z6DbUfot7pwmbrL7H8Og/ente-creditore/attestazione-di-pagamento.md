# Attestazione di pagamento

Ogni operazione di pagamento è attestata con la generazione (e consegna) all’EC di una _ricevuta_ generata dalla piattaforma a fronte dell’attività di validazione eseguita da PagoPA delle informazioni acquisite dai soggetti interessati (EC e PSP).

L’EC deve rendere disponibile la _ricevuta_, su richiesta dell’Utilizzatore finale, sia sotto forma di duplicato informatico che sotto forma di copia analogica dello stesso.

Le copie analogiche prodotte devono necessariamente contenere, oltre al logo del sistema pagoPA, almeno le seguenti informazioni:

* _data e ora dell’operazione:_ si intende la data e l’ora in cui l’utente finale ha iniziato l’operazione di pagamento sulla piattaforma ed è utile ai fini liberatori dell’utente;
* _data Applicativa:_ si intende la data in cui il pagamento è stato registrato all’interno del PSP selezionato per il pagamento e determina la giornata operativa (cfr. Linee Guida e relativa definizione presente nelle SACI) in cui ricade l’operazione di pagamento;
* codice fiscale dell'EC (_fiscalCodePA_)
* denominazione dell’EC (_companyName_)
* identificativo univoco versamento, identificativo univoco assegnato dall’EC (_creditorReferenceId_)
* identificativo del PSP (almeno ragione sociale e codice fiscale)
* numero univoco del pagamento (_paymentToken_)
* importo dell’operazione (_totalAmount_)
* causale del versamento (_paymentDescription_)

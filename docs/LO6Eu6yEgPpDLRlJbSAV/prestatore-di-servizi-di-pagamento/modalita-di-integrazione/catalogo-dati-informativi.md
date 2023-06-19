# Catalogo Dati Informativi

Il Catalogo Dati Informativi è lo strumento con il quale il PSP comunica ai propri potenziali clienti, utilizzatori della piattaforma pagoPA, le condizioni di utilizzo relative ai servizi che rende disponibili ed il costo di commissione massimo che potrà essere applicato.&#x20;

Per ogni servizio attivato (canale) il PSP produce le informazioni che la piattaforma pagoPA rende disponibili ai pagatori tramite il proprio sito di prodotto e, in fase di pagamento, tramite la componente _Checkout_.&#x20;

Il PSP è autonomo nel mantenimento di tali informazioni, purché renda disponibile un catalogo semanticamente corretto che superi i controlli applicativi previsti in base alla struttura [https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/general/CatalogoDatiInformativiPSP.xsd](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/general/CatalogoDatiInformativiPSP.xsd).

Il PSP è responsabile dell'esatta corrispondenza tra ciò che dichiara nel Catalogo Dati Informativi e quello che mette a disposizione dell'utente in fase di pagamento.

I dati su cui porre particolare attenzione, oltre a quelli relativi alle [commissioni.md](../commissioni.md "mention"), sono:

* _urlInformativaPSP_ che contiene il link ai fogli informativi del PSP che viene pubblicato sul sito di prodotto di piattaforma pagoPA, affinché siano disponibili le informative pre o post contrattuali all'operazione di pagamento sulla piattaforma pagoPA;
* _urlConvenzioniPSP_ che contiene il link alla pagina che espone le eventuali convenzioni tra il PSP e gli EC, se presente, tale link viene pubblicato sul sito di prodotto di piattaforma pagoPA.

![](<../../.gitbook/assets/image (19).png>)

I PSP possono richiedere un template del Catalogo Dati Informativi tramite una chiamata alla [nodoChiediTempateInformativaPSP](../../appendici/primitive.md#nodochieditemplateinformativapsp), in risposta ricevono un xml con la struttura sopra citata e con alcuni campi precompilati sulla base delle informazioni già a disposizione del Nodo.

Gli aggiornamenti delle informazioni fornite dal PSP sono rese disponibili dalla data di validità specificata, purché non inferiore al giorno successivo all’invio, e devono essere inviati a PagoPA S.p.A. al Servizio di Assistenza di I Livello scrivendo all'indirizzo [pagamenti@assistenza.pagopa.it](mailto:pagamenti@assistenza.pagopa.it) oppure aprendo relativa segnalazione sul Portale di Assistenza dedicato ai PSP.

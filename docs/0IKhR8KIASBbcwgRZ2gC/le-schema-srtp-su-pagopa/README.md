# Le schema SRTP su pagoPA

La soluzione per l'implementazione della SRTP per la notifica di richieste di pagamento relativa ad avvisi di pagamento pagoPA si basa sui seguenti principi :&#x20;

* l’adozione dello schema è conforme allo standard europeo; i service provider che aderiscono al servizio avvieranno le procedure di omologazione presso l’EPC entro l'anno 2026<mark style="color:blue;">;</mark>
* l’adesione allo schema avviene su base volontaria del singolo SRTP service provider;
* il ruolo di SRTP service provider può essere rivestito da ogni soggetto aderente allo schema stesso;
* Ogni Service Provider verrà identificato attraverso il proprio Bank Identifier Code (**BIC**) o il proprio codice fiscale.
* Il pagamento della richiesta di pagamento, dovrà essere eseguito in conformità alle linee guida del nodo dei pagamenti. Sarà responsabilità del Service Provider SRTP del Debitore che ricevere la notifica di pagamento garantire la trasmissione ad un PSP aderente la piattaforma pagoPA le informazioni necessarie per l'esecuzione del pagamento.
* lo stato di una RTP non influenza lo stato dell'avviso di pagamento veicolato tramite la richiesta di pagamento.
* L’IBAN veicolato all’interno dei messaggi, è un IBAN fittizio, che non dovrà essere usato durante la fase di pagamento.
* E' previsto un unico modello di funzionamento basato sulla tipologia 4 "Accept Later / Pay Later" prevista dallo schema SRTP dell'EPC. In particolare entrambe le date di accettazione della notifica che di pagamento coincideranno con la data di scadenza presente all'interno dell'avviso di pagamento
* L'accettazione della SRTP può , a discrezione del Service Provider , assumere due distinti significati :
  * effettiva esecuzione del pagamento:  in questo scenario l'accettazione della SRTP avviene successivamente al pagamento dell'avviso di pagamento
  * accettazione della richiesta:  in questo scenario l'accettazione della SRTP è slegata dalle operazioni di pagamento ed il debitore si impegna, tramite il suo service provider ed effettuare il pagamento entro la data richiesta.



\

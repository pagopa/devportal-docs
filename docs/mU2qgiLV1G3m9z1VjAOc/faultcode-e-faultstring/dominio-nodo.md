# Dominio Nodo

| faultCode                                            | faultString                                                                                               |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| PPT\_AUTENTICAZIONE                                  | Errore di autenticazione                                                                                  |
| PPT\_AUTORIZZAZIONE                                  | Il richiedente non ha i diritti per l’operazione                                                          |
| PPT\_CANALE\_DISABILITATO                            | Canale conosciuto ma disabilitato da configurazione                                                       |
| PPT\_CANALE\_ERR\_PARAM\_PAG\_IMM                    | Parametri restituiti dal Canale per identificare il pagamento non corretti                                |
| PPT\_CANALE\_ERRORE                                  | Errore restituito dal Canale                                                                              |
| PPT\_CANALE\_ERRORE\_RESPONSE                        | La response ricevuta dal Canale è vuota o non corretta sintatticamente o semanticamente                   |
| PPT\_CANALE\_INDISPONIBILE                           | Nessun canale utilizzabile e abilitato                                                                    |
| PPT\_CANALE\_IRRAGGIUNGIBILE                         | Errore di connessione verso il Canale                                                                     |
| PPT\_CANALE\_NONRISOLVIBILE                          | Il canale non è specificato, e nessun canale risulta utilizzabile secondo configurazione                  |
| PPT\_CANALE\_SCONOSCIUTO                             | Canale sconosciuto                                                                                        |
| PPT\_CANALE\_SERVIZIO\_NONATTIVO                     | Il Servizio Applicativo del Canale non è attivo                                                           |
| PPT\_CANALE\_TIMEOUT                                 | Timeout risposta dal Canale                                                                               |
| PPT\_CODIFICA\_PSP\_SCONOSCIUTA                      | Valore di codificaInfrastruttura PSP non censito                                                          |
| PPT\_DOMINIO\_DISABILITATO                           | Dominio disabilitato                                                                                      |
| PPT\_DOMINIO\_SCONOSCIUTO                            | IdentificativoDominio sconosciuto                                                                         |
| PPT\_ERRORE\_EMESSO\_DA\_PAA                         | Errore restituito dall’Ente Creditore                                                                     |
| PPT\_ERRORE\_FORMATO\_BUSTA\_FIRMATA                 | Formato busta di firma errato o non corrispondente al tipoFirma                                           |
| PPT\_FIRMA\_INDISPONIBILE                            | Impossibile firmare                                                                                       |
| PPT\_IBAN\_NON\_CENSITO                              | Il codice IBAN indicato dal EC non è presente nella lista degli IBAN comunicati al sistema pagoPA         |
| PPT\_ID\_CARRELLO\_DUPLICATO                         | Identificativo Carrello RPT duplicato                                                                     |
| PPT\_ID\_FLUSSO\_SCONOSCIUTO                         | Identificativo flusso sconosciuto                                                                         |
| PPT\_ISCRIZIONE\_NON\_PRESENTE                       | Iscrizione non presente in archivio                                                                       |
| PPT\_OPER\_NON\_REVOCABILE                           | Operazione non revocabile                                                                                 |
| PPT\_OPER\_NON\_STORNABILE                           | Operazione non stornabile                                                                                 |
| PPT\_PSP\_DISABILITATO                               | PSP conosciuto ma disabilitato da configurazione                                                          |
| PPT\_PSP\_SCONOSCIUTO                                | PSP sconosciuto                                                                                           |
| PPT\_RPT\_DUPLICATA                                  | RPT duplicata                                                                                             |
| PPT\_RPT\_NON\_INOLTRABILE                           | La RPT richiesta e fornita dalla PA non può essere inoltrata in quanto non corretta formalmente           |
| PPT\_RPT\_SCONOSCIUTA                                | RPT sconosciuta                                                                                           |
| PPT\_RT\_DUPLICATA                                   | La RT inviata dal PSP è già stata inviata (RT push)                                                       |
| PPT\_RT\_NONDISPONIBILE                              | RT non ancora pronta                                                                                      |
| PPT\_RT\_SCONOSCIUTA                                 | RT sconosciuta                                                                                            |
| PPT\_SEMANTICA                                       | Errore semantico                                                                                          |
| PPT\_SINTASSI\_EXTRAXSD                              | Errore di sintassi extra XSD                                                                              |
| PPT\_SINTASSI\_XSD                                   | Errore di sintassi XSD                                                                                    |
| PPT\_STAZIONE\_INT\_PA\_DISABILITATA                 | Stazione disabilitata                                                                                     |
| PPT\_STAZIONE\_INT\_PA\_IRRAGGIUNGIBILE              | Errore di connessione verso la Stazione                                                                   |
| PPT\_STAZIONE\_INT\_PA\_SCONOSCIUTA                  | IdentificativoStazioneRichiedente sconosciuto                                                             |
| PPT\_STAZIONE\_INT\_PA\_SERVIZIO\_NONATTIVO          | Il Servizio Applicativo della Stazione non è attivo                                                       |
| PPT\_STAZIONE\_INT\_PA\_TIMEOUT                      | Timeout risposta dalla Stazione                                                                           |
| PPT\_SUPERAMENTOSOGLIA                               | Una qualche soglia fissata per PPT è temporaneamente superata e la richiesta è quindi rifiutata           |
| PPT\_SYSTEM\_ERROR                                   | Errore generico                                                                                           |
| PPT\_TIPOFIRMA\_SCONOSCIUTO                          | Il campo tipoFirma non corrisponde ad alcun valore previsto                                               |
| PPT\_ULTERIORE\_ISCRIZIONE                           | Ulteriore iscrizione precedentemente censita                                                              |
| PPT\_WISP\_SESSIONE\_SCONOSCIUTA                     | La tripletta idDominio+keyPA+keyWISP non corrisponde ad alcuna sessione memorizzata nella componente WISP |
| PPT\_WISP\_TIMEOUT\_RECUPERO\_SCELTA                 | La tripletta idDominio+keyPA+keyWISP è relativa ad una scelta effettuata scaduta                          |
| PPT\_INTERMEDIARIO\_PSP\_SCONOSCIUTO                 | Identificativo intermediario psp sconosciuto                                                              |
| PPT\_INTERMEDIARIO\_PSP\_DISABILITATO                | Intermediario psp disabilitato                                                                            |
| PPT\_INTERMEDIARIO\_PA\_DISABILITATO                 | Intermediario dominio disabilitato                                                                        |
| PPT\_STAZIONE\_INT\_PA\_ERRORE\_RESPONSE             | Errore di risposta dalla stazione                                                                         |
| PPT\_RR\_DUPLICATA                                   | RR duplicata                                                                                              |
| PPT\_RT\_IN\_GESTIONE                                | La gestione della RT è in corso                                                                           |
| PPT\_PAGAMENTO\_DUPLICATO                            | Pagamento in attesa risulta concluso al sistema pagoPA                                                    |
| PPT\_PAGAMENTO\_IN\_CORSO                            | Pagamento in attesa risulta in corso al sistema pagoPA                                                    |
| PPT\_ESITO\_GIA\_ACQUISITO                           | L'esito del pagamento risulta già acquisito dal sistema pagoPA                                            |
| PPT\_MULTI\_BENEFICIARIO                             | La chiamata non è compatibile con il nuovo modello PSP                                                    |
| PPT\_SERVIZIO\_NONATTIVO                             | Servizio non attivo                                                                                       |
| PPT\_SOAPACTION\_ERRATA                              | SOAPAction errata                                                                                         |
| PPT\_TOKEN\_SCONOSCIUTO                              | unknown token                                                                                             |
| <p>PPT_TOKEN_SCADUTO/</p><p>PPT_TOKEN_SCADUTO_KO</p> | paymentToken is expired                                                                                   |

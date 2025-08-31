# DS-11 Inter-RTP Service Provider RfC of the  RTP Dataset

Una Richiesta di Cancellazione ( RfC) è iniziata da parte del Creditore a seguito dei possibili scenari :&#x20;

* avvenuto pagamento di un avviso pagoPA precedentemente inviato tramite SRTP presso un PSP diverso da quello associato al Service Provider a cui è stata inviata la SRTP. (AT-R106 = PAID)
* duplicazione di SRTP ( AT-R106 = DRTP )
* annullamento di un avviso di pagamento  ( AT-R106= MODT )

Il Service Provider del Creditore ha anch'esso la possibilità di inviare una RfC, ad esempio nei casi di :&#x20;

* duplicazione di una SRTP ( AT-R106 = DRTP)
* Errori Tecnici (AT-R106 = TECH)

Le principali caratteristiche di una RfC sono :&#x20;

* Il messaggio di RfC è inviato al medesimo destinatario ( Service Provider ) dove è stata trasmessa inizialmente la richiesta di pagamento
* Viene inclusa una copia dei dati pertinenti relativi all'SRTP iniziale, sufficiente a garantire una traccia di audit, senza alcuna modifica dei dati contenuti nell'SRTP iniziale.
* Il messaggio contiene un codice che identifica ma motivazione della richiesta di cancellazione ( attributo AT-R106 )&#x20;
* la richiesta può essere effettuata sino alla data di Expiry Date/Time della SRTP, a meno che la SRTP sia stata già rigettata,rifiutata o cancellata
* La SRTP a cui fa riferimento la richiesta di cancellazione è identificata dall'attributo AT-S011&#x20;
* Prima di inoltrare la richiesta di cancellazione, il Service Provider del Creditore deve verificare la&#x20;



| ID Campo | EPC Description                                                                                                                               |    |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -- |
| R001     | Type of response or “R” message (M)                                                                                                           | Si |
| R002     | Identification of the party initiating the response or “R” message (M)                                                                        | Si |
| R106     | Reason code for the RfC of the RTP (M)                                                                                                        | Si |
| R108     | Specific reference of the Payee’s RTP Service Provider for the RfC of the RTP (M)                                                             | Si |
| R107     | Additional Information to AT-R106 Reason code for the RfC of the RTP(C)                                                                       | No |
| R109     | Date and Time Stamp of the RfC (M)                                                                                                            | Si |
| S013     | Placeholder for charges (O                                                                                                                    | No |
|          | A copy of the mandatory attributes as well as AT-T009 (if included) of the original RTP (DS-01/DS-02) which the RfC of the RTP relates to (M) | Si |


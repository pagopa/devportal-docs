# Operazione di trasferimento fondi

Per l’operazione di trasferimento dei fondi a ogni EC il PSP utilizza unicamente lo strumento SEPA Credit Transfer. Le operazioni di trasferimento sono cadenzate temporalmente in ogni giornata operativa del Nodo dei Pagamenti-SPC secondo quanto meglio specificato nel paragrafo successivo. In coerenza con gli articoli 15 e 20 del D. lgs n. 11/2010 il PSP del pagatore deve effettuare il riversamento delle somme incassate in modalità cumulativa.

Il PSP è quindi tenuto ad effettuare un unico, e solo, bonifico che contenga l'importo cumulativo di tutte e sole le operazioni di pagamento inviate nel Flusso di Rendicontazione indicato nell'attributo _identificativoFlusso_ del campo _Remittance Information_ dello schema SCT. Le modalità di riconciliazione e quadratura sono descritte nel paragrafo [riconciliazione-del-flusso-di-riversamento.md](riconciliazione-del-flusso-di-riversamento.md "mention").

Per l’esecuzione dell’operazione devono essere utilizzati gli schemi previsti del SEPA Credit Transfer (cfr [SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/sepa-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) pubblicato da EPC ).

La Tabella 3 indica come valorizzare gli attributi dello schema di un SCT:

#### Tabella 3 - Valorizzazione schema SCT

<table><thead><tr><th width="150">ID</th><th width="150">Nome</th><th width="228.33065595716198">Valore</th><th data-type="checkbox">Opzionale</th></tr></thead><tbody><tr><td>AT-02</td><td>Ordinante</td><td>&#x3C;Ragione Sociale PSP> Servizio pagoPA</td><td>false</td></tr><tr><td>AT-04</td><td>Amount</td><td>&#x3C;Importo></td><td>false</td></tr><tr><td>AT-05</td><td>Remittance Information</td><td>/PUR/LGPE-RIVERSAMENTO/TXT/&#x3C;prog>/URI/&#x3C;identificativoFlusso></td><td>false</td></tr><tr><td>AT-10</td><td>Codice Identificativo Ordinante</td><td>&#x3C;Codice Fiscale Ordinante></td><td>true</td></tr><tr><td>AT-20</td><td>Iban Beneficiario</td><td>&#x3C;IBAN Beneficiario></td><td>false</td></tr><tr><td>AT-24</td><td>Codice Indentificativo Beneficiario</td><td>&#x3C;Codice Fiscale Beneficiario></td><td>true</td></tr><tr><td>AT-41</td><td>Referenza Ordinante</td><td>&#x3C;EndToEndID></td><td>true</td></tr></tbody></table>

Legenda:

* \<prog>_:_ è un progressivo ad una cifra compreso fra 0 e 9, con
  * 0 -> SCT ordinario;
  * 1-9 -> SCT integrativi nella giornata a seguito di anomalie tecniche;
* \<Importo>: importo totale SCT, ovvero la somma dei singoli importi delle transazioni inserite nel Flusso di Rendicontazione associato, identificabile tramite \<identificativoFlusso>;
* \<IBAN Beneficiario>: Il PSP attinge tale dato dalle richieste di pagamento eseguite;
* \<Codice Fiscale Beneficiario>: Il PSP attinge tale dato dalle richieste di pagamento eseguite;
* \<identificativoFlusso>: specifica il dato relativo all’informazione identificativoFlusso presente nel flusso di rendicontazione descritto nel successivo [flusso-di-rendicontazione.md](flusso-di-rendicontazione.md "mention");
* \<EndToEndID>: riferimento assegnato dal PSP all’operazione di trasferimento fondi.

Alcune precisazioni:

* per ogni FdR deve essere predisposto un unico SCT, solo in caso di anomalie tecniche possono essere eseguiti degli SCT integrativi;
* non è consentito eseguire SCT puntuali per ogni singola operazione di pagamento;
* al fine di effettuare una riconciliazione automatica del versamento le informazioni dell’attributo AT-05 sono state composte secondo la struttura proposta dall’Associazione Europea dei Tesorieri di Impresa (EACT) nel documento [EACT FORMATTING RULES OF SEPA “UNSTRUCTURED” 140 CHRS FIELD FOR REMITTANCE INFORMATION](https://eact.eu/Core/Documents/Wordpress\_Old/docs/EACT\_Standard\_for\_Remittance\_Info.pdf) e finalizzata al trattamento automatizzato delle informazioni tra partner commerciali. In particolare le stringhe “/PUR/”, "/TXT/" e “/URI/” sono tag costanti il cui significato è definito dallo standard EACT
  * **PUR** _purpose of payment, coded_
  * **TXT** _free text, to be used in combination with other structured elements_
  * **URI** _identification of a Remittance Advice which is sent separately_

## Giornata operativa ed invio del SEPA Credit Transfer

In coerenza con quanto previsto all’articolo 20 del D. lgs n. 11/2010, il PSP del pagatore assicura che l'importo dell'operazione venga accreditato sul conto dell’EC entro la fine della giornata operativa successiva a quella indicata nella relativa ricevuta telematica.

Al fine di assicurare l’applicazione uniforme dei tempi di esecuzione massima delle operazioni e tenendo altresì conto dei diversi modelli operativi adottati dai PSP, indipendentemente dal termine della giornata operativa stabilito da ciascun PSP, il termine della giornata operativa per la ricezione delle operazioni di pagamento da effettuarsi tramite il Nodo dei Pagamenti è stabilito in via generale per ciascun PSP alle ore 13:00 (la cosiddetta “giornata operativa del Nodo dei Pagamenti”), l'orario indicato si riferisce a quello italiano in vigore al momento dell'operazione di pagamento e si applica il calendario italiano.

In particolare, appartengono alla giornata operativa del Nodo dei Pagamenti-SPC (D) tutte le operazioni derivanti da una Richiesta di pagamento ove sia indicata la giornata D in abbinamento ad un orario sino alle ore 13:00 incluse, mentre appartengono alla giornata operativa del Nodo dei Pagamenti-SPC successiva (D+1) tutte le operazioni derivanti da una richiesta di pagamento ove sia indicata la giornata D ma in abbinamento ad un orario dalle 13:01 sino alle 13:00 del giorno lavorativo successivo.&#x20;

Ai fini dell’adempimento dell’obbligazione dell’utilizzatore finale nei confronti dell’EC fa fede la data e l'ora indicata nella ricevuta telematica (elemento _paymentDateTime_ della _receipt)_, indipendentemente dall’effettiva ora o giornata operativa di accredito del pagamento in favore dell’EC.

Dallo scadere del termine per l’esecuzione dell’accredito sul conto dell’EC dell’importo dell’operazione di pagamento decorrono gli interessi legali moratori pari al tasso BCE maggiorato di otto punti percentuali.

Nell’eventualità in cui il PSP per causa a lui imputabile non accrediti sul conto dell’EC l'importo dell'operazione entro la fine della giornata operativa del Nodo dei Pagamenti-SPC successiva a quella del pagamento (la data della giornata di accredito è esplicitata nel campo _transferDate_ della _receipt)_, ferma restando la debenza degli interessi moratori nella misura di cui sopra, il PSP risulterà, altresì, responsabile di ogni danno arrecato all’EC e/o all'utilizzatore finale per effetto del ritardo nell’accredito dell'importo dell'operazione, ivi inclusi i danni connessi all’applicazione di sanzioni in capo all’EC stabilite da una specifica normativa di riferimento. A titolo esemplificativo e non esaustivo, per gli EC che svolgono il servizio di riscossione, si segnalano le sanzioni stabilite all’articolo 47 del Decreto legislativo del 13 aprile 1999, n. 112.

## Rifiuto del SEPA Credit Transfer

Qualora il SEPA Credit Transfer venga restituito con messaggio di REJECT al PSP che lo ha inviato, quest’ultimo dovrà darne immediata comunicazione al servizio operativo di gestione del sistema pagoPA attraverso i canali messi a disposizione indicando le informazioni della Tabella 4.

#### Tabella 4 - **Dati da inviare da parte del PSP in caso di REJECT del SCT**

| Dato                               | Contenuto                                              |
| ---------------------------------- | ------------------------------------------------------ |
| Identificativo del PSP             |                                                        |
| Denominazione del PSP              |                                                        |
| Codice Fiscale dell’Ente Creditore |                                                        |
| Denominazione dell’Ente Creditore  |                                                        |
| IBAN di accredito del SCT          | attributo AT-20 IBAN of the account of the Beneficiary |
| Importo del SCT                    | attributo AT-04 Amount                                 |
| Causale del SCT                    | attributo AT-05 Remittance Information                 |
| TRN del SCT                        | attributo AT-43 Originator Bank’s reference number     |
| Motivo del messaggio di REJECT     | attributo AT-R3 reason code for non-acceptance         |
| Note                               | a cura del PSP                                         |

Sulla base delle indicazioni ricevute dal servizio operativo di gestione del sistema pagoPA, l’EC ed il PSP si attivano per rimuovere le cause del rifiuto e per il successivo completamento dell’operazione di trasferimento fondi.

Una volta completata tale operazione l’EC dovrà darne immediata comunicazione al servizio operativo di gestione del sistema pagoPA attraverso i canali messi a disposizione, nel quale dovrà indicare le stesse informazioni sopra riportate.

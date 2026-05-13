# PSP

La presente appendice integra le "Specifiche Attuative del Nodo dei Pagamenti" (SANP),  fornendo una guida dettagliata per i Prestatori di Servizi di Pagamento (PSP) sull'integrazione dello schema [SEPA Request-To-Pay (SRTP) dell'European Payments Council](https://www.europeanpaymentscouncil.eu/what-we-do/other-schemes/sepa-request-pay) (EPC) nell’ecosistema PagoPA.&#x20;

L'RTP rappresenta un'evoluzione strategica per i pagamenti pubblici in Italia, migliorando l'efficienza e l'esperienza utente. Questo documento illustra i fondamenti del  modello di funzionamento definito dalla Banca d'Italia per il contesto PagoPA e le implicazioni tecniche e operative per i PSP.

#### 1. Il contesto: Il Comitato Pagamenti Italia (CPI) e il Suo Mandato

Il Comitato Pagamenti Italia (CPI), istituito dalla Banca d'Italia nel 2015, mira a rafforzare l'industria italiana dei pagamenti e a coordinarsi con le iniziative europee come l'Euro Retail Payments Board (ERPB). Il "Tavolo pagamenti pubblici" del CPI ha elaborato il documento "[Request To Pay in ambito PagoPA: Modello di funzionamento e istruzioni applicative](https://www.bancaditalia.it/compiti/sispaga-mercati/comitato-pagamenti-italia/CPI-Tavolo-Incassi-Pagamenti-Pubblici-RTP-PagoPA-ver-1.2.pdf)", fornendo istruzioni per l'implementazione dell'RTP che garantiscono l'aderenza allo schema EPC e il coordinamento con le funzionalità della piattaforma PagoPA.

Maggiori dettagli  sono descritti nella sezione del CPI [nella sezione tavoli del CPI](https://www.bancaditalia.it/compiti/sispaga-mercati/comitato-pagamenti-italia/).

#### 2.  Modalità di adesione

Per aderire al sistema PagoPA e offrire servizi SRTP, i PSP devono seguire un processo strutturato che combina requisiti formali e tecnici.

Il primo passo formale per un PSP è la sottoscrizione dell'**Accordo di servizio con PagoPA** che prevede i seguenti passi:

1. **Adesione allo Schema EPC SRTP:** i PSP che intendono agire come Fornitori di Servizi SRTP (SRTPSP) devono aderire allo schema EPC SRTP. Questo implica l'accettazione dei diritti e degli obblighi definiti nel Regolamento dello Schema SRTP dell'EPC.
2. **Processo di Omologazione:** L'adesione allo schema EPC SRTP richiede il superamento di un processo di omologazione. Questo processo, gestito da un organismo di omologazione indipendente nominato dall'EPC, valuta le capacità tecniche, operative, di sicurezza e di continuità aziendale del PSP. Esistono diverse tipologie di omologazione, incluse quelle semplificate per i PSP che utilizzano un Fornitore di Soluzioni Tecniche Referenziato (RTSP). L'EPC Secretariat mantiene un registro pubblico dei partecipanti omologati. &#x20;
3. **Piani di Test Tecnici:** Una volta completata l'adesione formale e l'omologazione, i PSP devono superare specifici piani di test per l'avvio operativo. La documentazione relativa ai piani di test è fornita da pagoPA post adesione formale.
4. **Integrazione Tecnica e API:** L'implementazione tecnica richiede l'adozione di un approccio basato su API disponibili sul [DevPortal PagoPA](https://developer.pagopa.it/srtp/api).

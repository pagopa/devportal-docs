# Come diventare Partner Tecnologico di PagoPA

### Introduzione

Un Ente Creditore,  ferma restando la responsabilità che ha assunto con l’adesione nei confronti di PagoPA S.p.A., può delegare ad un  Partner Tecnologico  le attività tecniche ed operative che sovrintendono al dialogo tecnico con la stessa a una diversa imprenditoriale. &#x20;

In sostanza, il Partner Tecnologico è un soggetto privato che fornisce servizi di  supporto agli enti aderenti a a PagoPA (come IO, pagoPA pagamenti, Interoperabilità, Piattaforma Notifiche, ecc.) nelle loro attività quotidiane.

Il rapporto fra PagoPA e Partner Tecnologico non è diretto, ma mediato esclusivamente da un preesistente accordo fra lo stesso e un ente creditore:

* Si assume il ruolo di partner tecnologici, e censiti nella relativa anagrafica PagoPA, solo a valle di una formale indicazione di almeno un EC
* si mantiene il ruolo di PT solo se sussiste almeno un rapporto contrattuale con un EC
* si decade dal ruolo di PT allorché sono estinti tutti i rapporti con gli enti creditori instaurati in precedenza

Si diventa Partner Tecnologici Qualificati  superando una procedura di qualificazione e firmando un accordo con PagoPA che attesta l’impegno a mantenere nel tempo lo  status.\


{% hint style="info" %}
L'abilitazione di un Partner Tecnologico richiede la collaborazione di almeno un Ente "pilota" aderente a pagoPA, con il quale vengono eseguite le attività di test. Se l'Ente "pilota" scelto non è ancora aderente, deve completare l'adesione e indicare il Partner Tecnologico coinvolto.
{% endhint %}



### Tutorial&#x20;

In questo tutorial dettaglieremo tutti i passaggi per l’accreditamento di un soggetto come Partner Tecnologico&#x20;

1. **Censimento del soggetto nell’anagrafica** dei **Partner Tecnologici** e **Nomina del Referente Tecnico**\
   a cura di PagoPA. Per censire un Partner Tecnologico sul **Portale delle Adesioni** (**PdA**) è necessario disporre delle seguenti informazioni (in **grassetto** quelle mandatorie):\
   **Ragione** **Sociale**; **Cod. Fiscale/P. IVA;** **email PEC**; Provincia; Città; Indirizzo; CAP.
2. **Nomina del Referente Tecnico** a cura di PagoPA. Per censire un Referente Tecnico è necessario indicare le seguenti informazioni (in **grassetto** quelle mandatorie):\
   **email**; **Nome**; **Cognome**; Qualifica/Posizione; Recapito Telefonico; Recapito Cellulare; **Codice Fiscale;** Provincia; Città; Indirizzo; CAP.

\
Una volta forniti delle anagrafiche e nel momento in cui PagoPA inserisce i dati, il sistema provvederà ad inviare le credenziali per l’accesso al Portale delle Adesioni (PdA) al Referente Tecnico designato.

3. **Definizione Tavolo Operativo** a cura del Referente Tecnico. Il Referente Tecnico, secondo le disposizioni delle SANP (Specifiche Attuative del Nodo dei Pagamenti), deve inserire su PdA i dettagli del **Tavolo Operativo** del Partner Tecnologico. Questi dettagli includono un indirizzo email e un numero di telefono, che fungono da "punto unico di contatto" (SPoC). Questo permette l'interazione tra PagoPA e il personale tecnico del Partner Tecnologico, se necessario.\

4.  **Configurazione ambiente di Test Esterno**: accedendo con le proprie credenziali al PdA, il Referente Tecnico del Partner Tecnologico dovrà richiedere a PagoPA:&#x20;

    * la configurazione di un collegamento fisico di Collaudo;
    * la configurazione di una stazione di Collaudo.

    Una volta che le configurazioni richieste saranno state attivate da pagoPA, il Referente Tecnico del Partner Tecnologico procederà a:&#x20;

    * configurare sulla stazione di Collaudo l’Ente “pilota”, indicando aux digit = 3 (obbligatorio) e codice di segregazione (a scelta tra 00 e 48);
    * fornire l’Informativa Conto Accredito per indicare gli IBAN di accredito che l’Ente intende utilizzare in fase di Collaudo (vedi Template ICA).


5.  **Esecuzione procedure di test in ambiente di Test Esterno**: il Partner Tecnologico deve eseguire le procedure di test indicate nel Piano (vedi Piano di Test) e dopo averlo compilato nelle modalità richieste, deve procedere con l’invio alle seguenti caselle di posta elettronica: helpdesk@pagopa.it e operations@pagopa.it .\




    {% hint style="info" %}
    Qualora il Referente Tecnico del Partner Tecnologico disponga già dell'utenza di “segnalatore”, con essa deve accedere a ServiceNow e aprire un CASE al quale allegare il documento compilato con le evidenze dei test eseguiti.
    {% endhint %}





    {% hint style="info" %}
    In caso di attivazione del modello di pagamento presso il PSP (Pagamento con Avviso) il Piano di Test prevede che venga fornito un esempio di Avviso di Pagamento, così che se ne possa verificare la rispondenza con gli standard previsti.
    {% endhint %}




6.  **Configurazione ambiente di Pre-Esercizio**: accedendo con le proprie credenziali al PdA, il Referente Tecnico del Partner Tecnologico dovrà richiedere a PagoPA:

    * la configurazione di un collegamento fisico di Esercizio;
    * la configurazione di una stazione di Esercizio.

    Una volta che le configurazioni richieste saranno state attivate dal Personale specialistico pagoPA, il Referente Tecnico deve procedere a:

    * Configurare sulla stazione di Esercizio l’Ente “pilota”, indicando aux digit = 3 (obbligatorio) e codice di segregazione (a scelta tra 00 e 48);
    * Fornire l’Informativa Conto Accredito per indicare gli IBAN di accredito che l’Ente intende utilizzare in fase di Pre-Esercizio (vedi Template ICA).\

7.  **Esecuzione procedure di test in ambiente di Pre-Esercizio:** il Partner Tecnologico deve eseguire le procedure di test indicate nel Piano (vedi Piano di Test) e dopo averlo compilato nelle modalità richieste, deve procedere con l’invio alle seguenti caselle di posta elettronica: helpdesk@pagopa.it e operations@pagopa.it . \
    \


    {% hint style="info" %}
    Qualora il Referente Tecnico del Partner Tecnologico disponga già dell'utenza di “segnalatore”, con essa deve accedere a _ServiceNow_ e aprire un CASE al quale allegare il documento compilato con le evidenze dei test eseguiti.
    {% endhint %}





    {% hint style="info" %}
    In caso di attivazione del modello di pagamento presso il PSP (Pagamento con Avviso) il Piano di Test prevede che venga fornito un esempio di Avviso di Pagamento, così che se ne possa verificare la rispondenza con gli standard previsti.
    {% endhint %}


8. **Manleva (garanzia) per abilitazione all'Esercizio**: completate tutte le attività, sia in ambiente di Test Esterno che di Pre-Esercizio, il Referente Tecnico dovrà compilare debitamente e firmare digitalmente il documento di Manleva che gli verrà fornito da PagoPA. \
   Il Referente Tecnico provvederà ad inviare, alla casella di posta elettronica operations@pagopa.it il documento di Manleva completato come richiesto.

### Riferimenti utili

* [Template ICA](https://github.com/pagopa/pagopa-api/blob/master/xsd-common/InformativaContoAccredito\_1\_2\_1.xsd)
* [Piano di Test](https://github.com/pagopa/lg-pagopa-docs/raw/master/documentazione\_tecnica\_collegata/adesione/Piano\_test\_EC.docx)
* [Checklist (PDF 51Kb)](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F0daUnj7noyDC76EK6Bii%2Fuploads%2FvK72slLVISGfTAVIRvQh%2FChecklist%20-%20Partner%20Tecnologico%20PagoPA.pdf?alt=media\&token=507ce3b9-e755-434b-9617-233ebfd29442)

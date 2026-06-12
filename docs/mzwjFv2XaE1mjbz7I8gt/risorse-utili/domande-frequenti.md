# ❓ Domande frequenti

## Posso cancellare un servizio? <a href="#_83y14hsjdn6v" id="_83y14hsjdn6v"></a>

No, al momento non è possibile cancellare un servizio. Rinomina il servizio aggiungendo nel **`service_name`** il prefisso **`DELETED_`**.

## Posso visualizzare un servizio non ancora visibile in app? <a href="#_qdyx5in7ehzu" id="_qdyx5in7ehzu"></a>

Sì, attraverso la procedura descritta in [provare-un-servizio-in-test.md](../funzionalita/pubblicare-un-servizio/provare-un-servizio-in-test.md "mention").

## Posso inviare messaggi al mio Codice Fiscale? <a href="#_j7qvd8w3m7d3" id="_j7qvd8w3m7d3"></a>

Sì, se ti occupi di sviluppo puoi richiedere l'abilitazione all’invio di messaggi al tuo Codice Fiscale attraverso la procedura descritta in [test-con-codici-fiscali-reali.md](../abilitazioni/test-con-codici-fiscali-reali.md "mention").

## Perché ci sono due api-key per servizio? <a href="#_yh37o49fdqms" id="_yh37o49fdqms"></a>

Chiave primaria e secondaria sono equivalenti e sono duplicate per poter effettuare il cambio delle chiavi senza interruzione del servizio.

## È possibile pagare avvisi pagoPA con IO? <a href="#_988rdlxl8epv" id="_988rdlxl8epv"></a>

Sì, IO si interfaccia direttamente al sistema di pagamento pagoPA.&#x20;

## Cosa succede se l’ente creditore modifica l’importo dell’avviso pagoPA? <a href="#_5aw10uhddmcy" id="_5aw10uhddmcy"></a>

IO è collegata al sistema di pagamento pagoPA e prima di avviare il flusso di pagamento in app verifica e aggiorna l’importo dell’avviso di pagamento.

## Posso verificare le persone che utilizzano IO?

Sì, tramite l'API [get-a-user-profile-using-post.md](../api/api-messaggi/get-a-user-profile-using-post.md "mention").

## A cosa serve l'indirizzo IP nella scheda servizio e come si configura?

È un parametro ulteriore di sicurezza che permette di assegnare uno o più indirizzi IP autorizzati all'uso dell'invio di messaggi per il servizio. È importante utilizzare IP esterni, cioè che effettivamente fanno la chiamata verso le API di IO. Si possono configurare più IP o range di IP utilizzando la notazione di maschere di sotto reti in formato [CIDR](https://it.wikipedia.org/wiki/Maschera\_di\_sottorete).

## Come posso variare il mio Referente e/o i miei Delegati?

Se l'Ente ha necessità di aggiungere, rimuovere o modificare le informazioni richieste per il Delegato/i o variare l'indicazione del Referente, deve:

1. Recuperare e compilare l'allegato 4 del [contratto di adesione](https://io.italia.it/assets/download/it/accordo-di-adesione-IO-2.4.zip) con i dati aggiornati in sostituzione integrale dell'Allegato precedentemente inviato
2. Sottoscriverlo digitalmente&#x20;
3. Inviarlo tramite PEC all'indirizzo [adesioni-io@pec.pagopa.it](mailto:adesioni-io@pec.pagopa.it)  indicando come oggetto “_ADESIONE IO - VARIAZIONE DELEGATI_ ”

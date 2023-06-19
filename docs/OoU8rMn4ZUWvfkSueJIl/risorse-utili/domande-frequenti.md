# ❓ Domande frequenti

## Posso cancellare un servizio? <a href="#_83y14hsjdn6v" id="_83y14hsjdn6v"></a>

No, al momento non è possibile cancellare un servizio. Rinominare il servizio aggiungendo nel **`service_name`** il prefisso **`DELETED_`**.

## Posso visualizzare un servizio di test ancora non visibile in IO? <a href="#_qdyx5in7ehzu" id="_qdyx5in7ehzu"></a>

Sì, attraverso la procedura descritta in [come-visualizzare-un-servizio-in-test.md](../funzionalita/creare-un-servizio/come-visualizzare-un-servizio-in-test.md "mention").

## Posso inviare i messaggi al mio codice fiscale? <a href="#_j7qvd8w3m7d3" id="_j7qvd8w3m7d3"></a>

Sì, se ti occupi di sviluppo puoi richiedere l'abilitazione all’invio di messaggi al proprio codice fiscale attraverso la procedura descritta in [test-con-codici-fiscali-reali.md](../abilitazioni/test-con-codici-fiscali-reali.md "mention").

## Perché ci sono due api-key per servizio? <a href="#_yh37o49fdqms" id="_yh37o49fdqms"></a>

Chiave primaria e secondaria sono equivalenti e sono duplicate per poter effettuare il cambio delle chiavi senza interruzione del servizio.

## È possibile pagare avvisi pagoPA con IO? <a href="#_988rdlxl8epv" id="_988rdlxl8epv"></a>

Sì, IO si interfaccia direttamente al sistema di pagamento pagoPA.&#x20;

## Cosa succede se l’ente creditore modifica l’importo dell’avviso pagoPA? <a href="#_5aw10uhddmcy" id="_5aw10uhddmcy"></a>

IO è collegata al sistema di pagamento pagoPA e prima di avviare il flusso di pagamento in app verifica ed attualizza l’importo dell’avviso di pagamento.

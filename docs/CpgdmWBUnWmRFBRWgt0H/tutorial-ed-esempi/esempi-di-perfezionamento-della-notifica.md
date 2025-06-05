# Processo di notificazione: Esempi di perfezionamento

* AAR inviato con successo via PEC in data 1 dicembre. Il destinatario visualizza la notifica in piattaforma in data 5 dicembre. La notifica si perfeziona il 5 dicembre.
* AAR inviato con successo via PEC in data 1 dicembre. Il destinatario non visualizza la notifica in piattaforma. La notifica si perfeziona l'8 dicembre (7 giorni dopo la consegna dell'AAR elettronico, risultante dalla ricevuta che il gestore della casella pec del destinatario trasmette alla Piattaforma)
* AAR non consegnato via PEC in data 1 dicembre con contestuale generazione e deposito in piattaforma dell'Avviso di Mancato Recapito. Il destinatario non visualizza la notifica in piattaforma. La notifica si perfeziona il 16 dicembre (15 giorni dopo il deposito dell'Avviso di Mancato Recapito).
* In modalità analogica, il postino consegna l’AAR in data 1 dicembre al destinatario. Il destinatario visualizza la notifica in piattaforma in data 5 dicembre. La notifica si perfeziona il 5 dicembre.
* In modalità analogica, il postino consegna l’AAR in data 1 dicembre al destinatario. Il destinatario non visualizza la notifica in piattaforma. La notifica si perfeziona l'11 dicembre (10 giorni dopo la consegna della raccomandata).
* In modalità analogica, il destinatario è risultato irreperibile (per cause diverse dalla temporanea assenza o dal rifiuto proprio o delle altre persone alle quali può essere consegnato il plico contenente l’avviso di avvenuta ricezione della relativa notifica) in data 1 dicembre. La notifica si perfeziona 10 giorni dopo che, accertata l'irreperibilità nei termini sopra esposti, il Gestore deposita l'AAR in piattaforma e lo rende disponibile al destinatario.
* In modalità analogica, il destinatario non ha ritirato la raccomandata presso il punto di giacenza entro i 10 giorni, in scadenza il 1 dicembre, decorrenti dalla messa a disposizione per il ritiro presso il punto di giacenza. La notifica si perfeziona l'11 dicembre (10 giorni dopo il mancato ritiro al punto di giacenza).
* In modalità analogica, la raccomandata viene consegnata presso il punto di giacenza in data 1 dicembre. Il destinatario la ritira in data 5 dicembre. La notifica si perfeziona il 15 dicembre.



### Esempi di Perfezionamento:

1. **Notifica con singolo destinatario consegnata con successo in modalità digitale in data 01/01 e visualizzata dal destinatario in data 10/01.**\
   Sul destinatario si verifica il Perfezionamento per decorrenza termini dopo 7 giorni dalla consegna della notifica in modalità digitale, alla data del 08/01. La presa visione della notifica avvenuta in data 10/01 non comporta Perfezionamento, ma viene comunque registrato nella Timeline l'evento **NOTIFICATION\_VIEWED** e si genera l'**Attestazione opponibile a terzi: avvenuto accesso**.
2. **Notifica con singolo destinatario consegnata con successo in modalità analogica in data 01/01 e visualizzata dal destinatario in data 05/01.**\
   Sul destinatario si verifica il Perfezionamento per Presa Visione alla data del 05/01, con relativa registrazione dell'evento **NOTIFICATION\_VIEWED** nella Timeline e generazione delll'**Attestazione opponibile a terzi: avvenuto accesso;** infatti il destinatario prende visione della notifica prima che avvenga il Perfezionamento per decorrenza termini dopo 10 giorni dalla consegna dell’AAR in modalità cartacea.
3. **Notifica con singolo destinatario inviata in modalità analogica in data 01/01 ma tutti i tentativi di consegna falliscono.**\
   Sul destinatario si verifica il Perfezionamento per decorrenza termini alla data del 11/01 dopo 10 giorni dalla mancata consegna dell’AAR in modalità cartacea, con relativa registrazione dell'evento **REFINEMENT** nella Timeline.
4. **Notifica con 2 destinatari: il destinatario1 riceve con successo la notifica in modalità digitale in data 01/01 e la visualizza in data 02/01.** \
   **Il destinatario2 riceve con successo la notifica in modalità analogica in data 12/01 ma non la visualizza.**\
   Sul destinatario1 si verifica il Perfezionamento per Presa Visione alla data del 02/01, con relativa registrazione dell'evento **NOTIFICATION\_VIEWED** nella Timeline e generazione delll'**Attestazione opponibile a terzi: avvenuto accesso,** poiché questo prende visione della notifica prima che avvenga il Perfezionamento per decorrenza termini dopo 7 giorni dalla consegna dell’AAR in modalità digitale.\
   Sul destinatario2 si verifica il Perfezionamento per decorrenza termini dopo 10 giorni dalla consegna dell’AAR in modalità cartacea, alla data del 22/01 con relativa registrazione dell'evento **REFINEMENT** nella Timeline.\
   Dopo la data del 02/01 su Piattaforma Notifiche sarà possibile visualizzare la dicitura "Visualizzata" in corrispondenza di questa notifica, tuttavia questa informazione di stato sintetica non incide sul perfezionamento, il quale avviene in modo indipendente per ogni destinatario e nelle modalità espresse.

# ❓ Domande e risposte sui Messaggi

## Messaggi di test

<details>

<summary>Posso inviare messaggi al mio Codice Fiscale?</summary>

Sì, segui la procedura descritta in [Come spedire il mio primo Messaggio di test](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/T5AOsA09QUENq5DmNudG/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-spedire-il-mio-primo-messaggio-di-test)

</details>

## Invio dei messaggi

<details>

<summary>Come posso essere sicuro che il mio messaggio sia stato recapitato?</summary>

Segui il [tutorial](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-sapere-se-un-messaggio-e-stato-recapitato) che abbiamo preparato su questo tema.

</details>

## IO Premium

<details>

<summary>La mia Organizzazione ha aderito all'offerta Premium, l'API di integrazione è cambiata rispetto al passato?</summary>

Per usufruire delle caratteristiche Premium legate ai messaggi dovrai aggiungere informazioni all'interfaccia che stai già usando, la retro compatibilità è garantita.

Ecco una sintesi delle novità:

* in fase di [invio di un messaggio](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-inviare-un-messaggio), potrai indicare se questo sia un messaggio standard oppure un messaggio per il quale la tua Organizzazione beneficerà delle [caratteristiche Premium](https://docs.pagopa.it/kb-enti-messaggi/domande-frequenti/domande-e-risposte-sui-messaggi#che-vantaggi-avranno-i-miei-messaggi-se-aderisco-a-io-premium)
* in fase di recupero delle informazioni su un messaggio precedentemente inviato, potrai ricavarne lo [stato di lettura](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-sapere-se-un-messaggio-e-stato-letto-funzionalita-premium) e [quello di pagamento](https://docs.pagopa.it/kb-enti-pagamenti/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-sapere-se-lavviso-di-un-messaggio-e-stato-pagato-funzionalita-premium) per l'eventuale avviso associato
* se la tua Organizzazione intende spedire allegati con i messaggi, dovrai implementare la relativa [integrazione](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-allegare-documenti-a-un-messaggio-funzionalita-premium)

</details>

<details>

<summary>Cos'è il Reminder per i messaggi Premium?</summary>

IIl "Reminder" è un componente dell'infrastruttura di IO in grado di reagire alla presenza di un messaggio Premium generando opportuni promemoria per il suo destinatario secondo regole studiate per massimizzare l'efficacia delle comunicazioni all'utenza.

:dart: **Obiettivo** del Reminder è infatti **ridurre il tempo di incasso per la tua Organizzazione**, cioè l’intervallo di tempo tra la data di invio dell’avviso di pagamento e il pagamento da parte dell'utente finale.

La periodicità di invio per i promemoria di pagamento seguirà la logica qui di seguito descritta.

Per i **messaggi con avviso di pagamento e data di scadenza** **dichiarata dall’ente all'interno della posizione debitoria**, si conteranno i giorni a ritroso dalla data per consentire l’invio di fino a quattro promemoria con una frequenza pari a 3 giorni.

*   Esempio: il Cittadino riceve un messaggio Premium con avviso di pagamento dotato di scadenza, ma non lo paga. Riceverà fino a quattro promemoria 13, 10, 7 e 4 giorni prima della scadenza del tipo _“Hai un avviso da pagare. Entra nell'app e paga l'avviso emesso da \[nome dell'Ente creditore]”_<br>

    <figure><img src="../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

Tieni presente alcuni aspetti importanti:

* assicurati di far corrispondere la [data di scadenza del messaggio](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal_code-in-the-request-body#due_date) con quella della posizione debitoria associata, in modo da garantire un'esperienza coerente al destinatario; ricorda che i dati presenti nel messaggio e nella posizione debitoria sono inseriti sotto tua cura e responsabilità
* se il destinatario salda l'avviso di pagamento, l'invio di promemoria si interrompe (anche se ha usato un canale di pagamento diverso dall'app IO)
* i promemoria sono inviati automaticamente per i [messaggi Premium](https://docs.pagopa.it/manuale-servizi/v2.0-1/che-cosa-puo-fare-un-servizio-su-io/inviare-messaggi#funzionalita-premium) e non sono configurabili
* è importante pianificare correttamente l'invio dei messaggi rispetto alle scadenze delle posizioni debitorie al fine di garantire un'esperienza coerente al destinatario dei messaggi e delle relative notifiche push

:information\_source: I promemoria push verranno inviati nella fascia oraria che va **dalle 8:00 alle 20:00**.

</details>

<details>

<summary>Come si aggiungono allegati a un messaggio?</summary>

Segui il [tutorial](indice-dei-tutorial-e-dei-casi-duso/come-allegare-documenti-a-un-messaggio-funzionalita-premium.md) che abbiamo preparato su questo tema.

</details>

<details>

<summary>Che vantaggi avranno i miei Messaggi se aderisco a IO Premium?</summary>

* Puoi sapere se un determinato messaggio sia stato **letto** dal Cittadino cui è destinato
* Puoi sapere se l'eventuale avviso di pagamento che hai associato al messaggio sia stato **saldato** (in app o in qualsiasi altro modo supportato da pagoPA)
* Puoi aggiungere [**allegati**](indice-dei-tutorial-e-dei-casi-duso/come-allegare-documenti-a-un-messaggio-funzionalita-premium.md) al tuo messaggio
* Per ciascun messaggio Premium il Cittadino riceverà discreti **promemoria** se deve pagare un avviso con scadenza
* Puoi mandare più messaggi nello stesso tempo, ti garantiamo un **accesso più rapido** alle funzionalità di integrazione via API

Ma questo è solo l'inizio, presto saremo in grado di offrirti ulteriori caratteristiche avanzate per incrementare il valore e le performance dei tuoi Messaggi su IO.

</details>

<details>

<summary>Che tipi di allegati posso inviare coi miei Messaggi Premium?</summary>

Puoi allegare file in formato PDF. Per garantire una accessibilità e sicurezza ai tuoi utenti, utilizza il formato [PDF/A-1a](https://it.wikipedia.org/wiki/PDF/A).

</details>

<details>

<summary>Esiste un limite per la dimensione degli allegati a un Messaggio Premium?</summary>

Così come avviene per il contenuto dei messaggi, anche gli eventuali allegati sono trasmessi all'utenza della tua Organizzazione sotto la sua propria responsabilità: in quest'ottica, è bene prevedere documenti di dimensione compatibile con una loro fruizione su un dispositivo mobile e con la trasmissione in tempo reale tramite rete dati.

</details>

# ❓ Domande e risposte sui Messaggi

## Messaggi di test

<details>

<summary>Posso inviare messaggi al mio Codice Fiscale?</summary>

Sì, se ti occupi di sviluppo puoi richiedere l'abilitazione all’invio di messaggi al tuo Codice Fiscale attraverso la procedura descritta in [Test con Codici Fiscali reali](https://docs.pagopa.it/io-guida-tecnica/abilitazioni/test-con-codici-fiscali-reali).

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

Il "Reminder" è un componente dell'infrastruttura di IO in grado di reagire alla presenza di un messaggio Premium generando opportuni promemoria per il suo destinatario secondo regole studiate per massimizzare l'efficacia delle comunicazioni all'utenza.

:dart: Gli **obiettivi** del Reminder sono infatti:

* **ridurre il tempo di reazione dell'utenza nei confronti delle comunicazioni della tua Organizzazione**, cioè l’intervallo di tempo tra la data di invio del messaggio e la sua fruizione da parte dell'utente finale;
* **ridurre il tempo di incasso per la tua Organizzazione**, cioè l’intervallo di tempo tra la data di invio dell’avviso di pagamento e il pagamento da parte dell'utente finale.

</details>

<details>

<summary>Come funziona il Reminder per i messaggi non letti?</summary>

La periodicità di invio per i **promemoria di lettura** segue la logica di seguito illustrata:

* la configurazione prevede una frequenza pari a 3 giorni per i promemoria di mancata lettura. È previsto l’invio fino a 3 promemoria del tipo «_“Leggi il messaggio di \[nome Ente]“ + oggetto_».
  *   Esempio: il Cittadino riceve un messaggio Premium, ma non lo legge. Riceverà fino a tre promemoria al 3°, al 6° e al 9° giorno (la lettura del messaggio interromperà la sequenza)\


      <figure><img src="https://lh4.googleusercontent.com/IQJUVa6BPQmFvp_2VG5ZQZ8CIM8oOeFaxYxHbZshcFw7xgVgSJ4pAnbl1Ijkr0jwgDAWfKfYM70hDihjE5vc9dNzmkFwHXqDbEa8W-Kx38ti-QE4NJH-69bgJ339PDa63ANxxz5FoHOxqKJSToH-wjA" alt=""><figcaption></figcaption></figure>

:information\_source: I promemoria verranno inviati nella fascia oraria che va **dalle 8:00 alle 20:00**.

</details>

<details>

<summary>Come funziona il Reminder per i messaggi con avvisi non pagati?</summary>

La periodicità di invio per i promemoria di pagamento seguirà **logiche differenti a seconda della presenza di una** [**data di scadenza**](https://docs.pagopa.it/manuale-servizi/comunicare-un-servizio/scadenze-importanti):

* Per i **messaggi con avviso di pagamento senza scadenza**, si manderanno fino a quattro promemoria di pagamento del tipo «_“Hai un avviso da pagare” + oggetto_» con frequenza pari a 3 giorni. L’invio dei promemoria non dipenderà dall’apertura del messaggio, per cui non saranno inviati promemoria di lettura.
  *   Esempio: il Cittadino riceve un messaggio Premium con avviso di pagamento senza scadenza, ma non lo paga. Riceverà fino a quattro promemoria al 3°, 6°, 9° e 12° giorno (l'avvenuto pagamento dell'avviso interromperà la sequenza)\


      <figure><img src="../.gitbook/assets/image (9).png" alt=""><figcaption></figcaption></figure>
* Per i **messaggi con avviso di pagamento e data di scadenza** dichiarata dall’ente, si conteranno i giorni a ritroso dalla data per consentire l’invio di fino a quattro promemoria con una frequenza pari a 3 giorni. Anche in questo caso non saranno inviati promemoria di lettura.
  *   Esempio: il Cittadino riceve un messaggio Premium con avviso di pagamento dotato di scadenza, ma non lo paga. Riceverà fino a quattro promemoria 13, 10, 7 e 4 giorni prima della scadenza del tipo «_“Hai un avviso da pagare” + oggetto_» (l'avvenuto pagamento dell'avviso interromperà la sequenza)\


      <figure><img src="../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

:information\_source: I promemoria verranno inviati nella fascia oraria che va **dalle 8:00 alle 20:00**.

</details>

<details>

<summary>Come si aggiungono allegati a un messaggio?</summary>

Segui il [tutorial](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-allegare-documenti-a-un-messaggio-premium) che abbiamo preparato su questo tema.

</details>

<details>

<summary>Che vantaggi avranno i miei Messaggi se aderisco a IO Premium?</summary>

* Puoi sapere se un determinato messaggio sia stato **letto** dal Cittadino cui è destinato
* Puoi sapere se l'eventuale avviso di pagamento che hai associato al messaggio sia stato **saldato** (in app o in qualsiasi altro modo supportato da pagoPA)
* Puoi aggiungere [**allegati**](https://docs.pagopa.it/kb-enti-messaggi/tutorial-e-casi-duso/indice-dei-tutorial-e-dei-casi-duso/come-allegare-documenti-a-un-messaggio-premium) al tuo messaggio
* Per ciascun messaggio Premium il Cittadino riceverà discreti **promemoria** nel caso tardi a leggerlo oppure se deve pagare un avviso
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

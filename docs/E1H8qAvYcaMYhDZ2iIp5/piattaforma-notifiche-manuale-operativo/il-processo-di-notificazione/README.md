# Il processo di notificazione

Il processo di notificazione inizia con la PA mittente che richiede a Piattaforma Notifiche (PN) di prendere in carico l’effettuazione di una notifica.

Questa operazione avviene in tre fasi: caricamento dei documenti, creazione della notifica, verifica dei dati forniti.

Nella prima fase, la PA fornisce a PN gli atti da notificare unitamente, se del caso, a quanto necessario per il pagamento da parte del destinatario. E' obbligatorio fornire l'avviso pagoPA. Nel caso sia disponibile il pagamento attraverso modello F24, la PA fornisce tutti i dati necessari alla compilazione di tale modello.

Nella seconda fase, la PA genera la richiesta di creazione della notifica, fornendo i dati del destinatario (CF, indicazione del tipo di persona fisica o giuridica, nome e cognome o ragione sociale, indirizzo fisico del domicilio noto alla PA, domicilio digitale speciale, Codice Avviso e Codice Fiscale dell’Ente creditore relativi all’avviso pagoPA), un numero di protocollo, modalità da adottare per l’eventuale spedizione analogica (890/AR), importo e data di scadenza del pagamento (se presente), la lista dei documenti facenti parte della notifica (attraverso gli identificativi forniti da PN nella precedente fase) e l'hash SHA-256 dei documenti stessi. PN ricevute queste informazioni, verifica che siano sintatticamente corrette e che non ci siano stati utilizzati combinazioni di numero di protocollo/ID della PA/idempotence token oppure Codice Avviso/Codice Fiscale dell’Ente creditore già utilizzati in altre notifiche non annullate. Nel caso in cui le verifiche abbiano successo restituisce al mittente un token che servirà alla PA stessa per ricevere l’esito delle successive attività di verifica poste in atto da PN.

Nella terza ed ultima fase, PN verifica che lo SHA-256 fornito dalla PA coincida con quello calcolato da PN a partire dai documenti allegati, che ciascun CF fornito esista veramente e che esista un indirizzo fisico noto per ciascun destinatario (quest’ultima verifica per garantire la possibilità di notificare al destinatario). Se le verifiche hanno successo, PN genera lo IUN che viene restituito alla PA mittente unitamente al token generato all’atto di creazione della notifica. Questo perfeziona la notifica per la PA mittente. La data di perfezionamento è quella della creazione della notifica stessa, corrispondente all’inizio della seconda fase del processo. Nel caso in cui, invece, le verifiche non abbiano successo, PN informa la PA della presenza di errori nella richiesta inoltrata inviando un codice di errore unitamente al token generato all’atto di creazione della notifica.

I documenti allegati devono essere in formato PDF e conformi a quanto richiesto dagli articoli 20 e 21 del CAD, perciò firmati digitalmente dalla PA mittente. I documenti prodotti dalla PA vengono conservati per 120 giorni a partire dalla data di perfezionamento della notifica per il destinatario. PN genera un’attestazione opponibile ai terzi contenenti le informazioni relative alla data e all’ora di ricezione della richiesta di creazione della notifica da parte del mittente ed agli indirizzi forniti dal mittente per raggiungere il destinatario. La messa a disposizione di questo atto viene notificato alla PA a conferma dell’inizio delle operazioni di notificazione.

Nel caso in cui la PA mittente non sia in grado di determinare se un Codice Fiscale appartenga ad una persona fisica o ad una persona giuridica, consigliamo che la stessa assuma che il Codice Fiscale appartenga alla persona fisica.

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

Una volta che una notifica è stata correttamente creata dalla PA, PN genera l’Avviso di Avvenuta Ricezione (AAR) che contiene le informazioni relative all’esistenza della notifica, il suo IUN e le indicazioni sulle modalità che il destinatario può utilizzare per accedere agli atti notificati. PN a questo punto verifica se è possibile effettuare la notificazione attraverso canali digitali. Questo è possibile se la PA mittente ha fornito un domicilio digitale (speciale), oppure se esiste negli archivi di PN un domicilio digitale (di piattaforma) collegato al destinatario oppure, infine, se è possibile reperire un domicilio digitale (generale) nei registri pubblici (IniPEC o INAD). Nel caso in cui i registri pubblici restituiscano più di un domicilio digitale riconducibile al destinatario, come persona fisica o giuridica così come indicato dalla PA mittente, PN utilizzerà solamente il primo indirizzo restituito.

Se non è possibile determinare alcun domicilio digitale, la notificazione avverrà attraverso canali analogici.

In entrambi i casi, se il destinatario ha configurato un recapito digitale (es. un numero di cellulare al quale inviare SMS o un indirizzo e-mail o l’abilitazione su app IO degli avvisi di cortesia di PN), verrà generato un Avviso di cortesia che, pur non avendo di per sé valore legale, permette al destinatario di accedere all’atto anche prima di aver ricevuto la notifica attraverso i canali di comunicazione a valore legale.

L’Avviso di cortesia viene inviato su tutti i recapiti disponibili.

Nel caso sia stato possibile inviare l’avviso di cortesia ad un cittadino da raggiungere con notificazione analogica, la notificazione viene ritardata di 5 giorni per permettere eventualmente al cittadino di accedere alla notifica su PN e perfezionare di conseguenza la stessa. In questo caso la spedizione dell’AAR cartaceo non avviene ed il cittadino ne risparmia i costi.

Una volta che il destinatario ha ricevuto l’AAR, questi può accedere su Piattaforma Notifiche agli atti notificati ed ai relativi atti opponibili a terzi con le seguenti modalità:

* effettuando direttamente l’accesso sul portale di PN, utilizzando la propria identità digitale, e poi selezionando la notifica in base al rispettivo IUN e quindi accedendo agli atti oggetto di notifica aventi ciascuno un link fornito dal portale. Accedendo alla timeline della notifica, il destinatario avrà anche accesso ai relativi atti opponibili ai terzi;
* attraverso l’app IO, nel caso sia stata abilitata la ricezione degli avvisi di cortesia di PN. Selezionando il messaggio si accede al dettagli della notifica che permette di accedere agli atti e, attraverso la timeline, ai relativi atti opponibili ai terzi;
* utilizzando il link di accesso rapido presente nell’AAR, accedendo alla timeline della notifica, il destinatario avrà anche accesso ai relativi atti opponibili ai terzi;
* per il tramite di una persona a ciò delegata dal destinatario, previa ogni opportuna attività di delega tramite la specifica funzione sul portale di PN;
* con le modalità descritte per l’accesso a PN tramite i servizi forniti dagli Uffici Postali.

In ogni caso, se anteriormente a quanto previsto dalle modalità descritte nelle sezioni relative alla notificazione digitale e analogica, il destinatario o il suo delegato accedono alla notifica attraverso le modalità precedentemente descritte, la notificazione è perfezionata per presa visione anche in via anticipata. PN genera un’attestazione opponibile ai terzi indicante la data e l’ora di presa visione della notifica.

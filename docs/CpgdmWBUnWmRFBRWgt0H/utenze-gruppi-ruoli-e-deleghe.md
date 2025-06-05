# Utenze: Gruppi, Ruoli e Deleghe

## Gruppi

I gruppi permettono la segregazione degli accessi alle notifiche inviate da una PA mittente: i gruppi sono un insieme di utenti (p.e. di uno stesso ufficio/dipartimento) che vengono etichettati con un “Nome” a cui si affida la gestione delle notifiche etichettate con quel nome.

### PA Mittente

I gruppi permettono la segregazione degli accessi alle notifiche inviate da una PA mittente: i gruppi sono un insieme di utenti (p.e. di uno stesso ufficio/dipartimento) che vengono etichettati con un “Nome” a cui si affida la gestione delle notifiche etichettate con quel nome.

### Persone Giuridiche

La configurazione dei gruppi permette alla PG di suddividere gli Operatori nominati in Piattaforma in categorie di appartenenza, così da riflettere la sua struttura organizzativa. I gruppi permettono di segregare l'accesso alle notifiche ricevute dalla PG e di definire chi può accedere alle notifiche destinate alla PG.

## Ruoli&#x20;

### Persone giuridiche

Le persone giuridiche sono entità che possono avere una struttura organizzativa complessa. Per questo motivo viene permesso alle persone giuridiche di gestire i permessi di accesso a PN in modo simile alle PA mittenti. Per le persone giuridiche sono definiti i seguenti ruoli:

* **Amministratore/Referente Amministrativo:** può effettuare qualsiasi operazione su PN relativa alla persona giuridica e può accedere alle notifiche inviate alla persona giuridica in qualità di destinatario. Può anche accedere a tutte le notifiche delegate alla persona giuridica. Accetta le deleghe ricevute dalla persona giuridica e le assegna ai gruppi
* **Referente Tecnico/Operatore:** può visualizzare tutte le notifiche delegate alla persona giuridica
* **Amministratore/Referente Amministrativo di gruppo:** gestisce l’accesso a PN per persone che appartengono al suo stesso gruppo. Può visualizzare notifiche delegate alla persona giuridica co**n deleghe assegnate al suo gruppo.**
* **Referente Tecnico/Operatore di gruppo:** può visualizzare notifiche delegate alla persona giuridica con deleghe assegnate al suo gruppo

Utenti non associati a gruppi possono essere gestiti solamente da utenti amministratori.

Il legale rappresentante può inizialmente assegnare il ruolo di amministratore ad altri utenti che potranno quindi creare i gruppi rappresentanti le entità interne alla persona giuridica ed assegnare amministratori di tali gruppi. Questi potranno quindi estendere l’accesso al personale tecnico.

Selezionando la voce “Ruoli”, l’utente amministratore visualizza la lista di tutti gli utenti configurati per la persona giuridica.

Selezionando la voce “Ruoli”, l’utente amministratore di gruppo visualizza la lista di tutti gli utenti configurati per la persona giuridica e che appartengono ai gruppi che gestisce.

## Deleghe

Le persone fisiche possono delegare altre persone fisiche o persone giuridiche ad accedere alle proprie notifiche per proprio conto.

Il processo parte dal delegante che crea una delega per un delegato e prosegue con il delegato che accetta la delega. La delega ha un periodo di validità che determina quali notifiche possono essere visualizzate dal delegato, ovvero quelle che hanno data di creazione all’interno del periodo di validità.

La data di inizio validità è posta a 120 giorni prima della creazione della delega. La data di fine validità è posta in un qualsiasi istante successivo alla data di creazione.

La delega può essere associata ad una particolare PA mittente in modo tale da restringere il campo di validità della delega stessa. Se non specificata, la delega permette l’accesso alle notifiche generate da tutte le PA.

La delega viene accettata dal delegato inserendo in PN un codice che viene fornito dal delegante e che era stato a sua volta fornito da PN in fase di creazione della delega.

La delega può essere in qualsiasi momento revocata dal delegante o rifiutata dal delegato.

Delegante e delegato possono avere una sola delega attiva in un dato istante. Se il delegante vuole cambiare/aggiungere gli enti per il quale ha fornito la delega (o la data di scadenza ad esempio), deve revocare la delega già attiva e crearne una nuova con le informazioni aggiornate.

Una delega assume uno dei seguenti stati: in attesa di conferma, attiva, revocata, rifiutata, conclusa.

Per tutta la durata di validità di una delega attiva, il delegato potrà accedere a PN e decidere di agire per conto del delegante, potendo in tal senso effettuare qualunque operazione che il delegante avrebbe potuto effettuare sulle proprie notifiche.

Periodicamente PN verifica le deleghe presenti a sistema e rimuove quelle con data di fine validità precedente all’istante corrente.

# Come utilizzare correttamente servizi e messaggi in app IO

Servizi e messaggi in app IO hanno funzioni diverse, e soltanto utilizzandoli nel modo corretto potrai migliorare le tue comunicazioni con i cittadini, ed evitare la proliferazione di servizi non necessari che potrebbero complicare inutilmente il tuo lavoro.  Ne parliamo in questo tutorial, cominciando dalle basi: **cos’è un servizio e cos’è un messaggio?**

### Cos’è un servizio?

Un servizio veicolato tramite IO è **la versione digitale o l'estensione di un servizio già digitalizzato** erogato da un ente – pubblico, privato, centrale o locale – e destinato a uno o più gruppi di cittadini.

Un servizio è definito da:

* **una o più funzionalità**, a seconda della sua tipologia e di quanto viene offerto dall'ente tramite canali digitali (iscrizione, promemoria, pagamento, informazioni).&#x20;
* un **pubblico di riferimento** – per esempio tutti i cittadini caratterizzati da attributi specifici come età, professione o residenza;
* un **attore** che lo eroga;
* un **argomento** – per esempio "Servizi anagrafici e civici", "Educazione e Formazione", "Vita lavorativa", "Tempo libero e sport";
* un’**area geografica di competenza** – per esempio tutto il territorio nazionale, il Comune, la Regione.

### Cos’è un messaggio?

Un messaggio è invece la comunicazione inviata al cittadino da un servizio. Ad esempio:

* un **messaggio informativo**: un messaggio di testo che può riguardare un aggiornamento relativo, ad esempio, a un nuovo documento disponibile o a un’istanza presentata all’ente;
* un **messaggio che veicola un pagamento**: un messaggio che contiene informazioni relative a una posizione debitoria, con il promemoria della data di scadenza entro cui effettuare il pagamento e il pulsante “Vedi avviso” per procedere al pagamento. Per questo tipo di messaggi è necessario inserire i campi relativi al `payment_data` (Codice Avviso, importo da pagare, data di scadenza);
* un **messaggio che veicola una scadenza**: un messaggio che contiene una data di scadenza o da ricordare (come il promemoria della scadenza di un documento da rinnovare o la data entro cui iscriversi a un servizio). Per questo tipo di messaggi è necessario utilizzare il campo `due_date` nel payload del messaggio.

Come vedi, **un servizio non coincide con il messaggio o con la tipologia di messaggio che l’ente invia ai cittadini**. Creare un servizio distinto per ciascun messaggio o categoria di comunicazione che si intende inviare **è sbagliato**. Un servizio è una prestazione complessa che può mandare messaggi diversi – informativi, di pagamento, di promemoria – o generare situazioni diverse – effettuare un pagamento, procedere con un'iscrizione – a seconda della propria natura. Creare un servizio ad hoc per ciascun messaggio che desideri inviare, oltre ad essere disorientante per il cittadino, crea anche confusione e difficoltà di manutenzione nel tuo lavoro quotidiano.

### Un esempio: la TARI

{% hint style="danger" %}
Nella tabella che segue trovi un esempio sbagliato, con un numero inutilmente elevato di servizi relativi alla TARI:
{% endhint %}

| SERVIZIO                                                 | MESSAGGIO                                 |
| -------------------------------------------------------- | ----------------------------------------- |
| ❌  TRIBUTI - TARI - Notifica sollecito                   | Notifica sollecito TARI                   |
| ❌  TRIBUTI - TARI - Notifica provvedimento ordinario     | Notifica provvedimento ordinario TARI     |
| ❌  TRIBUTI - TARI - Notifica provvedimento sanzionatorio | Notifica provvedimento sanzionatorio TARI |

In realtà, **l’unico servizio è la TARI**, e **da questo unico servizio dovrai inviare tutti i messaggi relativi al suo ciclo di vita**, come ad esempio:

* inviare un messaggio informativo che ricorda ai destinatari che è il momento di fare la dichiarazione di occupazione, nel caso in cui debbano farla;
* inviare uno o più messaggi sullo stato della richiesta di occupazione;
* inviare un messaggio con l'avviso di pagamento;
* inviare promemoria in prossimità della scadenza di un pagamento.&#x20;

{% hint style="info" %}
**Un servizio veicolato tramite IO è la versione digitale o l'estensione di un servizio già digitalizzato**, risulterà quindi poco utile, e anche controproducente, creare più servizi in app IO che fanno riferimento ad un unico servizio pubblico. \

{% endhint %}

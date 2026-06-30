# Changelog 2026

#### 2.20.0 (30 giugno)

* [Archiviazione manuale](../../riferimenti-tecnici/e-service/archiviazione.md): possibilità di archiviare forzatamente una e-service o una versione di e-serivce. Una volta che un servizio è archiviato in tutte le sue versioni, viene ritirato dal catalogo degli e-service.
* [Attributi certificati discreti](../../riferimenti-tecnici/attributi/attributi-certificati-discreti.md): gestione degli attributi che hanno un valore numerico. Ad esempio, l'attributo "Popolazione residente" può essere utilizzato per aprire un e-service solamente agli enti che posseggono una certa popolazione. Questa funzionalità è attualmente disponibile solo in ambiente di Collaudo.
* Operatore valutatore e consultatore: due nuovi ruoli legati ad operatori che possono compilare (valutatore) e visualizzare (consultatore) le analisi del rischio, con un flusso di gestione dedicato. &#x20;

#### 2.19.0 (17 giugno)

* Possibilità di associare un template e-service a un template di finalità agevolata
* [Scambi asincroni/massivi](../../riferimenti-tecnici/e-service/scambi-di-dati-asincroni.md): possibilità di creare un e-service che preveda uno scambio di informazione con flusso asincrono, utile anche in contesti di richieste massive
* Aggiornamento Dev tools per DPoP e scambi asincroni: lo strumento di simulazione ottenimento voucher funziona ora anche per i token di tipo DPoP e i flussi asincroni. Inoltre, debugger viene aggiornato per gestire a sua volta il debug di voucher legati a flussi asincroni.
* API v. 3: gestione via API delle soglie differenziate per requisito di accesso rilasciate nella [2.17.0](changelog-2026.md#id-2.17.0-27-aprile)

#### 2.18.0 (19 maggio)

* Debugger per i token DPoP: è possibile debuggare in autonomia il mancato rilascio di un voucher DPoP attraverso lo strumento di debug presente in _Tool per lo sviluppo > Debug Client Assertion._
* Mantenimento preferenza della lingua: la preferenza su Area Riservata viene mantenuta anche su PDND Interoperabilità. Per PDND, sono attualmente disponibili le lingue italiana e inglese.
* [API v. 3](https://www.interop.pagopa.it/news/api-v3): aggiunto endpoint relativo agli eventi sui template di finalità agevolata.

#### 2.17.0 (27 aprile)

* [Soglie di chiamate API/giorno per requisito di accesso](../../riferimenti-tecnici/e-service/soglie-e-approvazioni.md): l'erogatore può impostare diverse soglie per attributo certificato (es. 5.000 chiamate API/giorno per Comuni, 20.000 per Regioni)
* Attivazione deleghe su e-service già pubblicati: l'erogatore può gestire la preferenza se accettare o meno deleghe per la fruizione per il proprio e-service. La preferenza può essere aggiornata in qualsiasi momento. Non è comunque retroattiva: tutte le deleghe attive rimangono attive anche dopo la disattivazione della preferenza. Da quel momento in poi, non sarà più possibile dare nuove deleghe
* [Nuovi attributi certificati per i privati](../../riferimenti-tecnici/attributi/gli-attributi-piu-utilizzati.md#privati): due attributi certificati vengono assegnati ad alcune categorie di privato all'atto dell'adesione a PDND, in particolare
  * adesione come "Privato": attributo certificato _Adesione dal Registro Imprese;_
  * adesione come "SCP - Società a Controllo Pubblico": sia l'attributo _Adesione dal Registro Imprese_ che l'attributo _Società a Controllo Pubblico - Registro Imprese_
* [API v. 3](https://www.interop.pagopa.it/news/api-v3): aggiunte le operazioni relative a client e portachiavi

#### 2.16.1 (18 marzo)

* [API v. 3](https://www.interop.pagopa.it/news/api-v3): API di PDND con tutte le operazioni di piattaforma disponibili, incluse operazioni su operatori e chiavi. Si accede con sicurezza avanzata

#### 2.16.0 (12 marzo)

* Suffissi template e-service: possibilità di istanziare e-service dallo stesso template più volte inserendo una parola identificativa per permettere di distinguere tra le istanze
* Bug fixing

#### 2.15.0 (9 marzo)

* Digest: possibilità di ricevere le notifiche sotto forma di email di riassunto settimanale
* Spostamento simulatore ottenimento voucher: ora si trova sotto _Tool per lo sviluppo_
* Bug fixing

#### 2.14.0 (16 febbraio)

* API v. 2: filtrare `GET /clients/{clientId}/purposes` per `eserviceId`
* Inserimento logo dell'ente nella card della scheda e-service
* Modificato il nome del file di interfaccia scaricabile, inserendo il nome dell'e-service e la versione
* Introduzione di un componente UI per aumentare il numero di elementi visibili nelle tabelle
* Aggiornamento di alcuni componenti di UI
* Bug fixing

#### 2.13.0 (28 gennaio)

* [Notifiche](https://www.interop.pagopa.it/news/notifiche): aderenti ed utenti possono ricevere notifiche in-app e via mail per i propri servizi e le proprie fruizioni.
* Bug fixing

#### 2.12.0 (15 gennaio)

* Apertura della PDND ai privati: la piattaforma è aperta a tutte le imprese iscritte al Registro Imprese
* Modifica default attivazione deleghe: quando si crea un nuovo e-service, l'impostazione per permettere ai fruitori di iscriversi all'e-service tramite delega è attivata di default

#### 2.11.5 (12 gennaio)

* Bug fixing: correzione di test

***

Pagina successiva [→ Changelog 2025](changelog-2025.md)

# Attributi

Gli **attributi** sono un meccanismo di controllo degli accessi fondamentale in PDND Interoperabilità. Permettono a un Erogatore di definire dei requisiti specifici che un Fruitore deve possedere per poter accedere a un determinato e-service. Un attributo rappresenta una qualifica, un'iscrizione a un albo, uno status giuridico o qualsiasi altra caratteristica che possa essere verificata o certificata.

Questo sistema garantisce che l'accesso ai dati avvenga in modo selettivo e conforme alla normativa, consentendo l'accesso solo agli enti che ne hanno titolo. La gestione degli attributi è quindi un pilastro della governance e della sicurezza dell'intero ecosistema.

### Le Tre Tipologie di Attributi

Esistono tre diverse tipologie di attributi, che si differenziano per il livello di garanzia che offrono e per le modalità di assegnazione e verifica.

#### 1. Attributi Certificati (Certified)

Sono gli attributi con il più alto livello di affidabilità. Vengono creati e assegnati a un ente esclusivamente da un altro ente, detto **Ente Certificatore**, che ha il mandato legale e istituzionale per attestarne la validità.

* **Esempio**: L'attributo "Iscrizione all'Albo Nazionale dei Medici" può essere certificato solo dalla Federazione Nazionale degli Ordini dei Medici Chirurghi e degli Odontoiatri (FNOMCeO).
* **Assegnazione**: L'Ente Certificatore assegna l'attributo a un altro ente tramite il proprio back-office. Il Fruitore non deve fare nulla.

#### 2. Attributi Verificati (Verified)

Questi attributi richiedono una verifica da parte dell'Erogatore. Il Fruitore, durante la richiesta di fruizione, dichiara di possedere l'attributo e carica della documentazione a supporto per provarlo.

* **Esempio**: Un e-service richiede l'attributo "Ente accreditato per la formazione". Il Fruitore dichiara di possederlo e carica il decreto di accreditamento.
* **Assegnazione**: L'Erogatore esamina la documentazione fornita dal Fruitore e, se la ritiene valida, approva l'attributo contestualmente all'approvazione della richiesta di fruizione.

#### 3. Attributi Dichiarati (Declared)

Sono gli attributi con il livello di garanzia più basso, basati sull'autocertificazione. Il Fruitore si limita a dichiarare di possedere il requisito richiesto, senza dover fornire alcuna prova documentale.

* **Esempio**: Un e-service richiede l'attributo "Adesione alla convenzione X". Il Fruitore spunta una casella per dichiarare di aver aderito.
* **Assegnazione**: La dichiarazione del Fruitore durante la richiesta di fruizione è sufficiente.

### Ciclo di Vita di un Attributo

Un attributo, una volta associato a un ente, segue un proprio ciclo di vita:

* **Attivo (Active)**: L'attributo è valido e l'ente può utilizzarlo per soddisfare i requisiti degli e-service.
* **Sospeso (Suspended)**: L'associazione tra l'ente e l'attributo è temporaneamente sospesa.
* **Archiviato (Archived)**: L'associazione è terminata in modo definitivo.

### Revoca degli Attributi e Conseguenze

La revoca è l'azione con cui un Ente Certificatore (per gli attributi certificati) o un Erogatore (per quelli verificati) rimuove un attributo a un ente che non soddisfa più i requisiti.

**La revoca di un attributo ha conseguenze immediate e critiche:**

1. **Sospensione delle Fruizioni**: Tutte le richieste di fruizione (agreement) attive che richiedevano quell'attributo come requisito vengono **immediatamente e automaticamente sospese** dalla piattaforma.
2. **Blocco dell'Accesso**: Di conseguenza, tutti i voucher richiesti per le finalità collegate a quelle fruizioni vengono invalidati. L'ente Fruitore non potrà più accedere agli e-service fino a quando la situazione non verrà sanata.
3. **Notifica**: Sia il Fruitore che l'Erogatore dell'e-service sospeso ricevono una notifica riguardo la revoca e la conseguente sospensione.

Per ripristinare l'accesso, il Fruitore dovrà dimostrare nuovamente di possedere l'attributo o presentare una nuova richiesta di fruizione se le condizioni sono cambiate.

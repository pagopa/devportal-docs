# Navigazione del servizio su Prod e Collaudo

## Panoramica

Dopo aver effettuato l'accesso e selezionato l'ambiente di lavoro, l'utente viene indirizzato alla sezione **Panoramica**, che rappresenta la pagina principale del BackOffice Messaggi di Cortesia.

La struttura della pagina è identica sia in ambiente di **Collaudo (UAT)** sia in ambiente di **Produzione**. L'unica differenza è rappresentata dalla presenza, nel solo ambiente di Collaudo, di un banner informativo che riporta "Dati per ambiente di collaudo"

Si raccomanda pertanto di utilizzare esclusivamente dati di test durante le attività svolte in ambiente UAT.

La navigazione all'interno del BackOffice avviene tramite il menu laterale sinistro, che consente l'accesso alle principali funzionalità del servizio:

* **Panoramica**
* **Credenziali**
* **Utenti**
* **Gruppi**

Se il PSP risulta già registrato al servizio, la pagina Panoramica mostra il riepilogo della configurazione attualmente censita e rende disponibili le operazioni di gestione e aggiornamento della configurazione.

Da questa schermata il PSP può:

* verificare l'ambiente attualmente selezionato (**UAT** o **Produzione**);
* consultare lo stato della configurazione del servizio;
* visualizzare i parametri configurati;
* accedere alle funzionalità di modifica della configurazione;
* gestire le credenziali utilizzate per l'integrazione con il servizio.

<figure><img src="../.gitbook/assets/Panoramica_UAT_registrato.png" alt=""><figcaption></figcaption></figure>

<p align="center"><em><strong>Figura - Panoramica ambiente collaudo servizio già registrato</strong></em></p>

#### Visualizzazione e modifica Endpoint e deep link

Dalla pagina Panoramica è possibile aggiornare la configurazione tecnica selezionando l'azione "**Modifica"** presente nel riquadro dedicato alla configurazione endpoint oppure nel riquadro dedicato alla configurazione deep link.

La maschera di modifica espone i valori già configurati e consente all'utente di aggiornarli. I campi contrassegnati con asterisco sono obbligatori e devono essere valorizzati prima del salvataggio

<figure><img src="../.gitbook/assets/UAT_modifica_endpoint-deep.png" alt=""><figcaption></figcaption></figure>

<p align="center"><em>Figura - Maschera Visualizzazione e Modifica endpoint e deeplink</em></p>



In caso di aggiornamento, dopo avere modificato i campi, per confermare le modifiche è necessario cliccare sul pulsante "**Salva**". Il pulsante Annulla consente invece di uscire dalla maschera senza registrare le variazioni inserite.

Durante il salvataggio il sistema effettua i controlli formali sui dati compilati. In presenza di campi obbligatori non valorizzati, formati non ammessi o informazioni non coerenti, il sistema impedisce il salvataggio e richiede la correzione dei dati.

#### Visualizzazione e Modifica e Credenziali

La gestione delle credenziali è disponibile dal menu laterale selezionando la voce Credenziali oppure dal pulsante Gestisci credenziali presente nella pagina Panoramica. La sezione consente di visualizzare le chiavi di accesso e le credenziali necessarie per collegarsi ai sistemi pagoPA e per ricevere i messaggi di cortesia sui sistemi del PSP.

La pagina Credenziali presenta le informazioni organizzate in blocchi funzionali:

* **Credenziali PagoPA**
* **TPP ID**
* **Credenziali TPP**
* **Parametri aggiuntivi.**&#x20;

I campi esposti possono prevedere funzioni di copia, visualizzazione del valore nascosto e accesso alla modifica, in base alla tipologia di informazione.



<figure><img src="../.gitbook/assets/UAT_modifca_credenziali.png" alt=""><figcaption></figcaption></figure>

<p align="center"><em>Figura - Maschera Visualizzazione e Modifica credenziali</em></p>

#### Conferma o annullamento della modifica

Al termine della compilazione, l'utente puo confermare l'operazione selezionando Salva. Il sistema registra i nuovi valori e aggiorna la configurazione associata al PSP per l'ambiente in uso.

Se l'utente seleziona Annulla, la maschera viene chiusa senza applicare le modifiche. In questo caso rimangono validi i valori precedentemente configurati.

#### Controlli e messaggi di errore

In fase di salvataggio il sistema verifica la presenza dei campi obbligatori e la correttezza formale delle informazioni inserite. Se uno o piu controlli non vengono superati, l'operazione non viene completata e l'utente deve correggere i campi segnalati prima di procedere nuovamente al salvataggio.

In caso di errore, l'utente deve verificare:

che tutti i campi obbligatori siano stati valorizzati;

che gli URL siano completi e coerenti con l'ambiente selezionato;

che le credenziali siano state inserite senza spazi o caratteri non previsti;

che i parametri aggiuntivi siano coerenti con quanto richiesto dai sistemi del PSP;

che non siano stati utilizzati dati reali in ambiente di Collaudo.

#### Esito della modifica

A seguito del salvataggio con esito positivo, il sistema aggiorna la configurazione e rende disponibili i nuovi valori nella pagina di riepilogo. L'utente puo tornare alla Panoramica o alla sezione Credenziali per verificare che i dati visualizzati corrispondano alla configurazione appena aggiornata.

La modifica e valida esclusivamente per l'ambiente in cui e stata effettuata. Qualora sia necessario aggiornare anche l'altro ambiente, l'utente deve accedere nuovamente al prodotto, selezionare l'ambiente di riferimento e ripetere il flusso di modifica.

#### Indicazioni operative per il PSP

Prima di modificare una configurazione gia attiva, il PSP deve verificare con i propri referenti tecnici la correttezza dei nuovi valori da inserire e l'eventuale impatto sui sistemi integrati. Le modifiche a endpoint, deeplink o credenziali possono incidere sulla capacita del servizio di ricevere, autenticare e instradare correttamente i messaggi verso l'app bancaria o il canale web.

Si raccomanda di eseguire preventivamente le verifiche in ambiente di Collaudo e di procedere all'aggiornamento in Produzione solo dopo aver validato la configurazione tecnica.

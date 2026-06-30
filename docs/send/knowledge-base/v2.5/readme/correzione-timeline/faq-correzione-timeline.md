---
description: Domande frequenti sulla funzionalità di correzione timeline
---

# FAQ Correzione Timeline

## Attivazione della Correzione di Timeline

#### Le correzioni della timeline viene fatta esclusivamente da PagoPA?

_L'attivazione della funzione di "Correzione di timeline" avviene esclusivamente da parte del servizio di supporto SEND. Non esistono API o altri metodi per cui un soggetto esterno al supporto SEND possa avviare l'iter di correzione._

#### Chi si accorge dell’errore? Chi lo segnala e con quali modalità operative?

L'errore può essere segnalato al supporto da chiunque abbia rilevato l'anomalia (ad esempio potrebbe essere il mittente, il destinatario, l'addetto al recapito). La segnalazione deve essere effettuata direttamente al supporto tecnico SEND che provederà ad avviare le analisi preliminari e, qualora lo ritenga necessario, avvia il processo di correzione.

#### Dopo quanto tempo possono arrivare gli eventi correttivi?

Poichè le segnalazioni non hanno un limite temporale, ma possono avvenire in qualsiasi momento, non esiste un tempo massimo entro cui è possibile applicare una correzione.

## Atti conseguenti

Quale potrebbe essere l’impatto della correzione timeline sugli **atti conseguenti** eventualmente già prodotti dal mittente?

_La funzionalità di correzione timeline è necessaria per correggere l’iter notificatorio seguito da una notifica trasmessa tramite SEND, facendo salvi per l’ente mittente gli effetti interruttivi decorrenti dal momento dell’emissione dell’attestazione di presa in carico da parte di SEND. Nel caso in cui la notifica impattata riguardi un atto presupposto, le modifiche intervenute per effetto della correzione si riverbereranno sugli atti conseguenti. Es. se l'esito dell’iter notificatorio dell’atto presupposto viene modificato (es. la data rettificata di perfezionamento dell’atto presupposto risulta posticipata), per gli atti conseguenti si dovrà fare riferimento alle evidenze sopravvenute e, per l’effetto, alla data come rettificata._

## Aggiornamento API

#### Le API aggiornate consentiranno di ricevere un warning di avviso sulle notifiche con timeline corretta per procedere con atti correttivi successivi?

Le API nuove riportano il nuovo elemento di timeline con category _NOTIFICATION\_TIMELINE\_REWORKED che indica l'avvio del processo di correzione di timeline. Gli eventi che seguono la correzione di timeline saranno presenti anche sulle API delle versioni precedenti._

#### A livello di element ID e di attempt, **come riconosciamo questo ulteriore tentativo** di invio analogico?

_A seguito della correzione di timeline gli elementId degli eventi successivi possono riportare il suffisso REWORK\_\<n> per differenziarsi da quelli già presenti nella timeline conseguenti all’errore corretto. Non presentano tale suffisso gli elementi successivi alla correzione che non hanno già un elemento analogo (della stessa category) tra gli elementi marcati come non validi._

#### Quando può avvenire la **modifica della data di perfezionamento**?

_La rettifica della data di perfezionamento può avvenire in entrambi i casi. Ad esempio se una raccomandata era stata indicata come destinatario irreperibile ed invece viene corretta con una consegna la data di perfezionamento potrebbe essere anticipata._

#### C’è modo di discriminare il **motivo** per cui viene effettuata una correzione di timeline? Se è relativo a imbustamento errato o a rendicontazione errata della cartolina?

_Sì, lo si può dedurre dalla tipologia degli eventi invalidati. Se l’oggetto di correzione contiene l’evento di SEND\_ANALOG\_DOMICILE significa che è stata annullata la spedizione, mentre nel caso di correzione dell’esito non sarà presente e non viene effettuata una nuova spedizione, a meno di una correzione dell’esito del primo tentativo che scatena un secondo invio._

#### Questa funzionalità, richiede un **aggiornamento della versione dello stream**?&#x20;

_E’ necessario aggiornare la versione dello stream di timeline per recepire il nuovo elemento di timeline con category NOTIFICATION\_TIMELINE\_REWORKED. Gli stream non aggiornati non riceveranno questo elemento, ma riceveranno comunque gli eventi successivi e conseguenti alla correzione._

#### Può essere effettuata una sola correzione per notifica o una notifica può essere soggetta a **più correzioni**?&#x20;

_La soluzione tecnica individuata permette più correzioni sulla stessa timline. In linea teorica possono esserci più correzioni ma la probabilità che questo accada è trascurabile._&#x20;

## Costi di notifica e data di perfezionamento

#### La chiamata all'api che indica i costi della notifica risponderà solo con i costi "base", senza quelli di correzione?

La chiamata alla API retrieveNotificationPrice a seguito di una correzione di timeline, riporterà solo i costi relativi agli invii cartacei che seguono l'operazione di correzione, mentre non sono presi in considerazione i costi collegati alle raccomandate oggetto di errore.

#### In fase di pagamento quindi per essere certi di avere l'importo corretto bisogna sempre richiamare la retrieveNotificationPrice anche nel caso di notifiche già perfezionate?

Nell'integrazione sincrona con pagoPA è sempre necessario eseguire la chiamata alla API retrieveNotificationPrice per recuperare il corretto importo dei costi di notifica, che riporteranno solo i costi della workflow corretto.

#### Se il pagamento è stato già effettuato come si conciliano i nuovi costi a seguito della correzione di timeline?

Se il pagamento dell'atto relativo alla notifica è già stato effettuato la correzione di timeline non viene applicata.

## Atti opponibili

#### Come cambiano gli atti opponibili già generati ?

Gli atti opponibili già generati non possono essere modificati per la natura immutabile della timeline e dei documenti firmati in modo digitale. Rimangonoin visualizzazione collegati agli eventi marcati come "Non Validi" per trasparenza verso l'utente.

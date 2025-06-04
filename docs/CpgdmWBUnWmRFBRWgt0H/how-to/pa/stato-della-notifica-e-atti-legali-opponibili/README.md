# Stato della notifica e atti legali opponibili

## Visualizzazione notifiche da parte del mittente

Selezionando la voce _**Notifiche**_ si accede alla pagina di visualizzazione delle notifiche inviate dalla PA.

L’utente visualizza e ha accesso:

* alle notifiche etichettate con gruppi a cui appartiene
* alle notifiche non etichettate, che sono accessibili a tutti gli utenti abilitati.

La visualizzazione mostra le notifiche, a partire dalla più recente, in forma tabellare con indicazioni relative a:

* data di invio della notifica
* Codice Fiscale destinatario/i
* oggetto della notifica
* codice IUN
* gruppi (se etichettata)
* stato della notifica.

L’utente può impostare dei filtri per modificare la visualizzazione dell’elenco, i filtri disponibili sono:&#x20;

* CF/Partita Iva destinatario
* Codice IUN
* intervallo temporale&#x20;
* stato della notifica.

Le notifiche sono presentate in pagine da 10, 20, 50 elementi ciascuna. La dimensione della pagina è selezionabile dell’utente.\


<figure><img src="../../../.gitbook/assets/image (136).png" alt=""><figcaption></figcaption></figure>

Nel dettaglio di una notifica viene visualizzata la lista dei Documenti allegati alla notifica. Non sono invece forniti i dati e documenti relativi al pagamento se non il codice avviso.

Ciascun elemento contiene un link che permette di scaricare il documento.

PN mantiene i documenti per 120 giorni a partire dalla data di perfezionamento della notifica per il destinatario, passati i quali i link non saranno più disponibili.

***

Nel dettaglio di una notifica viene visualizzata la timeline della notifica.

Gli eventi sono organizzati nel riquadro Stato della notifica e ordinati temporalmente e con indicazione dell’istante di occorrenza dell’evento e la descrizione dell’evento stesso.

Nel caso in cui all’evento sia associato un documento, sia esso un’attestazione opponibile ai terzi o un documento relativo alla notificazione analogica o digitale, è presente un link che permette all’utente di scaricare tale documento

***

Selezionando nella pagina di visualizzazione delle notifiche inviate dalla PA una specifica notifica si accede alla visualizzazione del suo dettaglio.

Questa pagina mostra le informazioni visualizzate precedentemente nella tabella con l’aggiunta del nome e cognome destinatario/i e data di invio e del Codice Avviso di pagamento.



<figure><img src="../../../.gitbook/assets/image (65).png" alt=""><figcaption></figcaption></figure>

## Stato della notifica

La notifica segue un ciclo di vita che prevede una serie di stati tracciati e visualizzati sul portale di PN nella sezione Stato della notifica disponibile visualizzando il Dettaglio della notifica.

&#x20;

<figure><img src="../../../.gitbook/assets/image (84).png" alt=""><figcaption></figcaption></figure>

La timeline presenta inizialmente solamente gli eventi che determinano un cambiamento di stato della notifica (vedi paragrafo [Informazione di stato sintetica](./)). Eventi secondari (esempio i diversi tentativi di invio di una PEC) sono disponibili aprendo le sezioni “Mostra di più”. Eventuali documenti collegati agli eventi secondari sono disponibili anche attraverso i link presenti negli eventi principali.

Gli stati attraversati differiscono a seconda del percorso di notificazione utilizzato descritti nei paragrafi successivi.&#x20;

Per i diversi stati attraversati dalla notifica sono disponibili attraverso link i relativi atti opponibili ai terzi aventi valore legale.

{% hint style="info" %}
**ATTENZIONE**: in alcuni casi più di un evento può fare riferimento alla stessa attestazione opponibile ai terzi. Ad esempio, tutti i vari tentativi di inoltro della PEC, come descritto nel [Processo di notificazione](../../../la-guida-tecnica/processo-di-notificazione.md) sono raggruppati in una singola attestazione opponibile ai terzi.
{% endhint %}

## Stati della notifica

Gli stati del processo di notificazione sono i seguenti:

* **Notifica depositata**: quando la notifica risulta correttamente creata su PN dalla PA; tale stato iniziale determina il perfezionamento della notifica per il mittente e genera l'attestazione opponibile ai terzi di presa in carico
* **Invio in corso**: quando è in corso il processo di spedizione del’AAR per almeno un destinatario; tale stato raccoglie quindi i diversi elementi di timeline relativi ai singoli tentativi d'invio
* **Notifica Consegnata**: quando il processo di spedizione è terminato per tutti i destinatari ed almeno uno di essi è stato raggiunto e genera l'attestazione opponibile ai terzi di notifica digitale
* **Notifica Irreperibile:** quando non è stato possibile raggiungere nessuno dei destinatari, ovvero quando tutti i destinatari che dovevano essere raggiunti con raccomandata AR/890 non erano conosciuti all'indirizzo utilizzato per la spedizione (irreperibilità totale) ed i destinatari che dovevano essere raggiunti con PEC/SERCQ avevano i recapiti legali saturi, inattivi o invalidi.
* **Resa al mittente**: quando il recapitista dichiara il destinatario della notifica deceduto. Solo se non ci sono altri destinatari della notifica per i quali il workflow ha un altro esito.
* **Perfezionata per decorrenza termini**: quando la notifica si è perfezionata per decorrenza termini (a norma di legge) per almeno un destinatario e se nessuno dei destinatari ha preso visione della notifica stessa.
* **Avvenuto accesso**: quando almeno un destinatario, entro o oltre i termini di decorrenza, ha acceduto agli atti della notifica.
* **Notifica Annullata:** nel caso la notifica sia stata annullata della PA mittente.

I termini di perfezionamento previsti per legge (art. 26 DL 76/2020) sono i seguenti:&#x20;

1\) il settimo giorno successivo alla data di consegna dell'avviso di avvenuta ricezione in formato elettronico, risultante dalla ricevuta che il gestore  della  casella  di  posta  elettronica certificata o del servizio elettronico di recapito certificato qualificato del destinatario trasmette alla piattaforma. Se l'avviso di avvenuta ricezione è consegnato al destinatario dopo le ore 21.00, il termine di sette giorni si computa a decorrere dal giorno successivo;

2\) nei casi di casella postale satura, non valida o non attiva, il quindicesimo giorno successivo alla data del deposito dell'Avviso di mancato recapito in piattaforma (Attestazione di mancato recapito digitale);

3\) il decimo giorno successivo al perfezionamento della notificazione dell'avviso di avvenuta ricezione in formato cartaceo;

In ogni caso, se anteriormente a quanto previsto e descritto per il perfezionamento per decorrenza termini, il destinatario o il suo delegato accedono alla notifica tramite la piattaforma, la notificazione è **perfezionata per presa visione**. PN genera l’Attestazione opponibile ai terzi indicante la data e l’ora di avvenuto accesso alla notifica e lo Stato della notifica in time line è quello di "Avvenuto accesso".

{% hint style="info" %}
**ATTENZIONE**: **Nel caso di destinatari multipli**, lo stato aggregato ha solamente valenza informativa sullo stato complessivo della notifica. In particolare, lo stato di perfezionamento può non corrispondere all'effettiva data di perfezionamento per ogni diverso destinatario.
{% endhint %}

| **Stato**                  | **Label Stato UI**                         | **Descrizione**                                                                                                |
| -------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| `IN_VALIDATION`            | \*                                         | notifica depositata in attesa di validazione.                                                                  |
| `ACCEPTED`                 | Depositata                                 | L'ente ha depositato la notifica con successo                                                                  |
| `REFUSED`                  | \*                                         | Notifica rifiutata a seguito della fallita validazione                                                         |
| `DELIVERING`               | Invio in corso                             | L'invio della notifica è in corso                                                                              |
| `DELIVERED`                | Consegnata                                 | La notifica è stata consegnata ad almeno un destinatari al termine del ciclo di tutti i tentativi di notifica. |
| `VIEWED`                   | Avvenuto accesso                           | Il destinatario ha fatto accesso alla notifica.                                                                |
| `EFFECTIVE_DATE`           | Perfezionata per decorrenza termini        | Il destinatario non ha letto la notifica entro il termine stabilito                                            |
| `UNREACHABLE`              | Destinatario irreperibile                  | Il destinatario non è reperibile                                                                               |
| `CANCELLED`\*\*            | Notifica annullata                         | La transita in questo stato a seguito dell’annullamento da parte del mittente.                                 |
| `RETURNED_TO_SENDER`\*\*\* | La notifica è stata restituita al mittente | Resa al mittente per destinatario dichiarato deceduto                                                          |

\* la notifica non è visibile fino a validazione completata

\*\* disponibile dalla versione GA2.0

\*\*\*disponibile dalla versione GA2.5

## **Descrizione di stato sintetica della notifica nei casi di invio Multi-destinatario** <a href="#descrizione-di-stato-sintetica-della-notifica-nei-casi-di-invio-multi-destinatario" id="descrizione-di-stato-sintetica-della-notifica-nei-casi-di-invio-multi-destinatario"></a>

* La descrizione di stato sintetica della notifica passa a `DELIVERED` quando si concludono tutti i tentativi di invio della notifica per tutti i destinatari ed almeno un destinatario è stato raggiunto (per via digitale o per via cartacea).
* La descrizione di stato sintetica della notifica passa a `UNREACHABLE` quando tutti i destinatari non sono raggiungibili.
* La descrizione di stato sintetica della notifica passa a `EFFECTIVE_DATE` se la notifica è stata consegnata ad almeno uno dei destinatari (`DELIVERED`) oppure quando tutti i destinatari non sono raggiungibili (`UNREACHABLE`) ed è trascorso il tempo necessario al perfezionamento per decorrenza termini per almeno uno di questi.&#x20;

{% hint style="info" %}
**NOTA**: _Si evidenzia che il passaggio della descrizione a_ `EFFECTIVE_DATE` _NON influenza in alcun modo il grado di perfezionamento degli altri destinatari. Infatti il Perfezionamento è una caratteristica tipica del destinatario e non è impattata in alcun modo da come viene descritto lo stato sintetico della notifica._
{% endhint %}

* La descrizione di stato sintetica della notifica passa a `VIEWED` quando almeno uno dei destinatari ha fatto accesso alla notifica.&#x20;

{% hint style="info" %}
**NOTA**: _destinatari differenti possono, entrando sul dettaglio della notifica, vedere descrizioni diverse (Perfezionata per presa visione/Visualizzata) in dipendenza del momento di prima visualizzazione sia precedente o successivo alla decorrenza termini._
{% endhint %}

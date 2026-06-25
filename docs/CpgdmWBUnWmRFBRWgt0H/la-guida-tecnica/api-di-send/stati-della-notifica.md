# Stati della notifica

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

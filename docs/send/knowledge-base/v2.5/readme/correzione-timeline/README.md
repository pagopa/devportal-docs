---
description: >-
  Funzionalità per correzione degli errori individuati nella produzione o nel
  recapito delle raccomandate (rilascio in UAT il 24/06/2026, in PROD il
  02/07/2026)
---

# Correzione Timeline

## Introduzione

SEND garantisce che l’iter notificatorio venga espletato nel rispetto della normativa di riferimento. La complessità della filiera fisica degli invii cartacei (stampa, recapito e rendicontazione esito) può risentire di anomalie e/o errori materiali legati all’attività di recapito e rendicontazione che, ad oggi, si sono verificati in percentuali infinitesimali (dall’inizio del servizio fino a giugno 2026 minore dello 0,01%).

La funzionalità "Correzione Timeline" è concepita per intervenire su eventuali anomalie correlate all’attività di recapito, quali quelle legate alla stampa e imbustamento della notifica o di incoerenza del metadato rispetto a quanto riportato nella dematerializzazione dell'esito trasmesso dai recapitisti e dando evidenza a mittente e destinatari di tutto l'iter di correzione.

## Iter di correzione

L'intervento di correzione viene avviato su segnalazione (es. da parte del mittente, dei destinatari e/o degli addetti al recapito) che viene gestito in modo puntuale e controllato dal Supporto Tecnico SEND, al fine di preservare, in favore del mittente, i benefici derivanti dal deposito della notifica su SEND.

L'avvio del correzione di timeline avviene dopo l'analisi effettuata dal supporto tecnico di SEND per verificare che la notifica:

* non sia stata visualizzata o pagata dal destinatario
* non sia stata annullata del mittente
* necessiti, effettivamente, di interventi correttivi per ripristinare il corretto iter notificatorio

Iter suddiviso nelle seguenti fasi:

1. **Segnalazione** di errore es. da parte di mittente/destinatari/servizio di recapito
2. **Analisi** e definizione del perimetro della correzione
3. **Avvio della correzione** per marcare come non validi gli eventi errati e tutti quelli che sono stati generati per diretta conseguenza&#x20;
4. **Ripresa del workflow** della notifica dal nuovo evento di correzione

### Invalidazione Logica

Per garantire la totale tracciabilità e inalterabilità della timeline, l'operazione di correzione non elimina fisicamente gli eventi di timeline oggetto di correzione.

Il nuovo elemento con category `NOTIFICATION_TIMELINE_REWORKED` riporta nel campo `details.invalidatedTimelineAndStatusHistory` la lista completa di tutti gli eventi che sono stati invalidati dall’operazione di correzione.&#x20;

Gli elementi di timeline generati successivamente (prendendo come riferimento il campo injestionTimestamp) all’elemento NOTIFICATION\_TIMELINE\_REWORKED saranno da considerarsi eventi di rettifica dei precedenti. Gli eventi di rettifica hanno la stessa struttura e category dei precedenti, ma possono riportare il suffisso \_REWORK\_\<n> nel campo elementId per rispettare l’univocità.

A livello di interfaccia utente gli eventi oggetto di correzione riporteranno una label "EVENTO NON VALIDO", mentre i nuovi eventi che correggono l'errore saranno marcati con l'etichetta "EVENTO RETTIFICATO".

Esempio: l'evento di consegna è stato invalidato a causa di un errore

<figure><img src="../../.gitbook/assets/image (23).png" alt="" width="375"><figcaption></figcaption></figure>

Esempio: l'evento di Perfezionamento per decorrenza termini è quello corretto.

<figure><img src="../../.gitbook/assets/image (24).png" alt="" width="375"><figcaption></figcaption></figure>

### Costi di notifica

​Contestualmente alla correzione della timeline, SEND interverrà con le modalità sotto descritte sui costi di notifica per gli utenti che non abbiano ancora effettuato il pagamento affinché corrispondano l’importo corretto, decurtando eventuali costi dovuti a spedizioni di raccomandate eseguite indebitamente per effetto dell’anomalia.

La API di recupero dei costi di notifica restituisce sempre il costo attuale da imputare al destinatario in base ai dati forniti dal mittente (`paFee` e `vat`) stornando eventuali costi dovuti a spedizioni di raccomandate che sono incorse nell'errore.

### Data di Perfezionamento

A seguito di una correzione di timeline la data di perfezionamento iniziale potrebbe subire una variazione. La correzione di un atto presupposto si riverbera sugli atti conseguenti. Es. se l'esito dell’iter notificatorio dell’atto presupposto viene modificato (es. la data rettificata di perfezionamento dell’atto presupposto risulta posticipata), per gli atti conseguenti si dovrà fare riferimento alle evidenze sopravvenute e, per l’effetto, alla data come rettificata.

È rimessa al mittente la gestione degli eventuali rapporti con il destinatario, anche in relazione alla eventuale modifica della data di perfezionamento (es: valutazioni in ordine ad eventuale rimessione in termini).

## Tipologia delle Anomalie

Gli errori materiali oggetto di correzione possono essere di due tipi:

* [Errore di stampa e/o imbustamento](./#errore-di-stampa-e-o-imbustamento)
* [Errore di rendicontazione esito](./#errore-di-rendicontazione-esito)



<br>

<br>

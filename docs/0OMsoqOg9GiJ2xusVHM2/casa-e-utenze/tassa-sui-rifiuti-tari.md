# Tassa sui rifiuti (TARI)

Erogare il servizio tramite l'app IO permette agli enti di:

* fornire ai cittadini comunicazioni puntuali sullo stato della TARI, coprendo l’intero ciclo di vita del servizio;
* rappresentare per i cittadini un riferimento per la ricezione delle comunicazioni riguardanti la TARI su uno o più immobili, situati in diversi Comuni.

[**Scopri tutti i benefici di integrarsi con IO →**](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo)

| **Nome servizio**            | Tassa sui rifiuti (TARI)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Argomento**                | Casa e utenze                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Descrizione del servizio** | <p>Il servizio riguarda la Tassa sui rifiuti (TARI).</p><p>Tramite IO potrai:</p><ul><li>ricevere conferma della dichiarazione di occupazione di un immobile domestico e non domestico al fine della TARI;</li><li>ricevere avvisi di pagamento relativi alla TARI e pagarli in app;</li><li>ricevere aggiornamenti su eventuali proroghe alla data di scadenza;</li><li>ricevere conferma della dichiarazione di cessazione di occupazione di un immobile;</li><li>ricevere altre comunicazioni.</li></ul> |
| **Pulsante**                 | Vai al servizio                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

## **Ciclo di vita del servizio**

<figure><img src="../.gitbook/assets/image (117).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio TARI</strong></p></figcaption></figure>

## **Messaggi del servizio**

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio, può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando versioni del servizio sempre più complete.
{% endhint %}

### Comunicazioni

<details>

<summary>Dichiarazione di occupazione</summary>

**🖋 Titolo del messaggio:** Dichiarazione di `<inizio/variazione>` occupazione immobile

🗒 **Testo del messaggio**: Ti diamo il benvenuto nel Comune di `<Comune>`.

Ricevi questo messaggio perché potresti avere recentemente cambiato residenza, acquistato un immobile o sottoscritto un contratto di affitto.

Se non lo hai già fatto, effettua o aggiorna la tua dichiarazione di occupazione ai fini TARI (Tassa sui Rifiuti). Per farlo, \[visita questo sito]\(URL).

Inoltre, se vuoi conoscere meglio il servizio offerto \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: I cittadini che hanno recentemente cambiato residenza, acquistato un immobile o completato un contratto di affitto superiore a sei mesi.

**Quando inviarlo**: Quando l'ente riscontra aggiornamenti su cambi residenza, acquisto immobili o contratti d'affitto.

**User story**: Come cittadino voglio ricevere informazioni su come funziona la TARI nel Comune.

</details>

### Dichiarazione nuova abitazione

<details>

<summary>Dichiarazione di occupazione: accolta</summary>

**🖋 Titolo del messaggio:** La tua dichiarazione è stata accolta

🗒 **Testo del messaggio**: Abbiamo ricevuto la tua dichiarazione di `<inizio/variazione>` occupazione di un immobile. Ecco i dettagli:

**Indirizzo**: `<indirizzo>` - `<piano ed interno immobile>`\
**Occupato da**: `<nome cognome>`\
**A partire dal**: `<gg/mm/aa>`

\[A questo sito]\(URL) trovi maggiori informazioni su come funziona il calcolo TARI e sulle eventuali esenzioni di cui puoi beneficiare.

**🪄 Pulsante**: n/a

***

**Destinatari**: I cittadini che hanno completato la dichiarazione di inizio o variazione occupazione di un immobile.

**Quando inviarlo**: Alla conclusione della registrazione della dichiarazione.

**User story**: Come cittadino voglio ricevere conferma che la dichiarazione di occupazione è stata processata correttamente.

</details>

### Pagamento a rate con avviso di pagamento

Quando il pagamento è suddiviso per rate e l'ente vuole permettere al cittadino di pagare la rata direttamente su IO, potrà inviare un messaggio con l'avviso di pagamento per ogni rata prevista [come consigliato sul manuale dei servizi.](https://docs.pagopa.it/manuale-servizi/che-cosa-puo-fare-un-servizio-su-io/inviare-messaggi/messaggi-che-veicolano-un-pagamento/soluzioni-per-pagamenti-a-rate)

<details>

<summary>Avviso di pagamento TARI</summary>

{% include "../.gitbook/includes/promemoria-di-pagamento.md" %}

***

**🖋 Titolo del messaggio:** Nuovo avviso di pagamento

🗒 **Testo del messaggio**: C'è un avviso da pagare intestato a `<nome cognome>` e relativo alla `<rata unica/prima rata/seconda rata>` della Tassa sui rifiuti (TARI) per l'immobile situato in `<indirizzo>` - `<piano ed interno immobile>`.

**Devi pagare**: <00,00> €

**Entro il**: `<gg/mm/aaaa>`

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che devono pagare la TARI.

**Quando inviarlo**: Al momento in cui l'avviso è pagabile da parte del cittadino.

**User story**: Come cittadino voglio essere avvisato quando devo pagare la TARI.

</details>

{% include "../.gitbook/includes/banner-promemoria-automatici.md" %}

<details>

<summary>Avviso di pagamento TARI: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio:**

Il tuo pagamento per `<causale>` sta per scadere.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che devono pagare la TARI.

**Quando inviarlo**: Quando il pagamento è prossimo alla scadenza.

**User story**: Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

### Pagamento a rate con allegato

Quando il pagamento è suddiviso per rate e l'ente vuole comunicare al cittadino tutti i pagamenti in un unico messaggio su IO, potrà inviare un messaggio con un documento allegato che riassume tutte le rate e i relativi avvisi da pagare.

<details>

<summary>Istruzioni sul pagamento della rata</summary>

{% include "../.gitbook/includes/allegati.md" %}

***

**🖋 Titolo del messaggio:** Nuovo pagamento

🗒 **Testo del messaggio**:

Dal `<gg/mm/aaaa>` sarà possibile pagare la Tassa sui rifiuti (TARI) intestato a `<nome cognome>` per l'immobile situato in `<indirizzo>` - `<piano ed interno immobile>`.

\[Solo per messaggi con allegato] Trovi i pagamenti previsti in allegato a questo messaggio.

Per avere maggiori informazioni sul pagamento, \[visita il sito]\(URL).

**🪄 Pulsante**: n/a

**📎&#x20;**<mark style="color:blue;">**Allegato:**</mark> `<documento con gli avvisi di pagamento delle rate previste>`

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che devono pagare la TARI.

**Quando inviarlo**: Al momento in cui l'avviso è pagabile da parte del cittadino.

**User story**: Come cittadino voglio essere avvisato quando devo pagare la TARI.

***

<mark style="color:purple;">ℹ️</mark> In caso di pagamenti su più rate, [consultare questa sezione del manuale dei servizi dedicata.](https://docs.pagopa.it/manuale-servizi/che-cosa-puo-fare-un-servizio-su-io/inviare-messaggi/messaggi-che-veicolano-un-pagamento/soluzioni-per-pagamenti-a-rate)

</details>

### Proroga scadenza

<details>

<summary>Proroga scadenza del pagamento</summary>

**🖋 Titolo del messaggio:** Proroga scadenza del pagamento

🗒 **Testo del messaggio**: È stata prorogata la data di scadenza dell'avviso intestato a `<nome cognome>` e relativo a `<casuale>`.

**Devi pagare**: <00,00> €

**Entro il**: `<gg/mm/aaaa>`

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante**: Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari:** Tutti i cittadini residenti nell’area geografica di azione del servizio che devono pagare la TARI.

**Quando inviarlo:** Se la scadenza del pagamento viene prorogata.

**User story:** Come cittadino voglio essere avvisato se la scadenza del pagamento è stata prorogata.

</details>

### Interruzione

<details>

<summary>Conferma di avvenuta cessazione di occupazione immobile</summary>

**🖋 Titolo del messaggio:** Conferma di avvenuta cessazione di occupazione immobile

🗒 **Testo del messaggio**: Abbiamo ricevuto la tua dichiarazione di cessazione occupazione immobile.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

**🪄 Pulsante**: n/a

***

**Destinatari:** I cittadini che dichiarano la cessazione di occupazione di un immobile.

**Quando inviarlo:** Al ricevimento della dichiarazione di cessazione.

**User story:** Come cittadino voglio sapere se la mia dichiarazione di cessazione occupazione immobile è stata ricevuta.

</details>

## Qualche suggerimento

Al fine di arricchire le comunicazioni con informazioni che abbiano valore per il cittadino, consigliamo di:

* inserire nelle comunicazioni uno o più dati di **riferimento dell’immobile** per permettere all’utente di identificare l’oggetto del messaggio e differenziarlo nel caso di più proprietà.
* inserire uno o più link che riportino alle **informazioni sulla gestione dello smaltimento rifiuti** e su come operare una corretta raccolta differenziata.

***

{% hint style="success" %}
**Lo sapevi?**\
IO è integrata con SEND - Servizio Notifiche Digitale, per l'invio di comunicazioni a valore legale.

[**Scopri di più su SEND**](https://notifichedigitali.pagopa.it/) [**->**](https://www.pagopa.it/it/prodotti-e-servizi/piattaforma-notifiche-digitali)
{% endhint %}

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere o modificare il contenuto a seconda delle esigenze.

Il modello è uno esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Gli enti che desiderino utilizzarli devono, quindi, modificarli a seconda delle loro esigenze. Gli enti mittenti sono i soli responsabili del contenuto dei messaggi che inviano. La scelta di una soluzione di pagamento a rate e la conseguente gestione degli avvisi di pagamento rimane di esclusiva competenza e responsabilità dell’ente.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:

{% file src="../.gitbook/assets/IO - Template servizi - Tassa sui rifiuti (TARI).xlsx" %}
{% endhint %}

# Multe per violazione codice della strada

Erogare il servizio "Multe per violazioni al Codice della Strada" tramite IO permette agli enti di:

* **aggiornare in tempo reale** i cittadini e quindi consentirgli di agire con tempestività sul pagamento di violazioni al codice della strada;
* **ridurre i tempi** e i costi del processo di notifica e consegna della contravvenzione;
* **velocizzare i tempi** di riscossione delle multe;
* **informare sugli avvisi in scadenza**, riducendo la possibilità dei cittadini di incorrere in sanzioni aggiuntive.

[**Scopri tutti i benefici di integrarsi con IO →**  ](../../cose-io-e-qual-e-il-suo-obiettivo.md#perche-integrarsi-con-io)

## Scheda servizio e attributi

| **Nome servizio**            | Multe per violazioni al Codice della Strada                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Argomento**                | Mobilità e trasporti                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Descrizione del servizio** | <p>Il servizio riguarda le multe per violazioni al Codice della Strada per i veicoli intestati a te.</p><p></p><p>Tramite IO potrai:</p><ul><li>ricevere il preavviso di accertamento e pagarlo in app;</li><li>ricevere un messaggio che ti informa se un verbale di contestazione è stato inviato al tuo indirizzo di residenza;</li><li>ricevere un messaggio che ti informa che il pagamento è in scadenza;</li><li>ricevere altre comunicazioni.</li></ul> |

## **Ciclo di vita del servizio**

<figure><img src="../../.gitbook/assets/Multe-x.png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio multe per violazione del Codice della Strada</strong></p></figcaption></figure>

## Messaggio del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio, può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando versioni del servizio sempre più complete.
{% endhint %}

### Emissione preavviso di accertamento

<details>

<summary>Emissione preavviso di accertamento</summary>

:sparkles: <mark style="color:blue;">**Messaggio Premium**</mark> — Se hai un contratto Premium, ti consigliamo di configurare questo messaggio con promemoria Premium: i destinatari verranno avvisati dell‘avvicinarsi della scadenza tramite notifica push.

***

**🖋 Titolo del messaggio:** Preavviso di accertamento

🗒 **Testo del messaggio**: Il \<gg/mm/aaaa> alle \<hh:mm> in \<indirizzo>, la persona alla guida del veicolo targato \<numero targa> ha commesso queste violazioni:

**• \<tipologia di violazione> - art. \<numero>**

**Accertamento numero**: \<numero accertamento>

\[Vedi accertamento]\(URL)

**Da pagare**: <00,00> €, già scontato del 30% se paghi entro il \<gg/mm/aaaa>

**Cosa succede se non pago entro il \<gg/mm/aa>?** Riceverai il verbale di contravvenzione in base a quanto previsto dal Codice della Strada e potranno essere addebitate le spese di notifica.&#x20;

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄  Pulsante**: Vedi avviso

***

**Destinatari**: Tutti i cittadini residenti nell'area geografica di azione del servizio che hanno commesso una violazione del Codice della Strada

**Quando inviarlo**: Quando è stata commessa la violazione

**User story**: Come cittadino voglio ricevere comunicazione della violazione commessa

</details>

### Emissione verbale di contestazione

<details>

<summary>Avvenuta spedizione del verbale </summary>

**🖋 Titolo del messaggio:** Invio del verbale

🗒 **Testo del messaggio**: In base al Codice della Strada, ti abbiamo inviato il verbale di contestazione \<numero verbale>. Lo riceverai nei prossimi giorni.&#x20;

L’importo del verbale potrà comprendere spese di notifica. Per maggiori informazioni, visita \[questo sito]\(URL).

**🪄  Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini che hanno ricevuto una contravvenzione e non l'hanno pagata

**Quando inviarlo**: Quando sono trascorsi i giorni previsti per pagare la contravvenzione in misura ridotta

**User story**: Come cittadino voglio ricevere comunicazione della violazione commessa

</details>

***

{% hint style="success" %}
**Lo sapevi?**\
IO è integrata con SEND - Servizio Notifiche Digitale, per l'invio di comunicazioni a valore legale.

[**Scopri di più su SEND**](https://www.pagopa.it/it/prodotti-e-servizi/piattaforma-notifiche-digitali) [**->**](https://www.pagopa.it/it/prodotti-e-servizi/piattaforma-notifiche-digitali)
{% endhint %}

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.&#x20;

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da [questo documento](https://docs.google.com/spreadsheets/d/1UHvSOKM6SDvGh5tU2VRrLLOx7GNv-4TlVJKH\_PTthDQ/edit#gid=538647580).
{% endhint %}

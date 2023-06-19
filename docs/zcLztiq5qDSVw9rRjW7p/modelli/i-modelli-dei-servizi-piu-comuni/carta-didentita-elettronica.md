# Carta d'Identità Elettronica

Erogare il servizio "Carta d'Identità Elettronica" tramite IO permette agli enti di:

* fornire ai cittadini comunicazioni puntuali sugli stati della Carta d'Identità Elettronica (CIE), coprendo **l’intero ciclo di vita del servizio**, dall’inizio alla fine;
* integrare le comunicazioni, evitando una duplicazione delle notifiche relative allo stato di scadenza della CIE, gestite da ANPR.&#x20;

[**Scopri tutti i benefici di integrarsi con IO →**  ](../../cose-io-e-qual-e-il-suo-obiettivo.md#perche-integrarsi-con-io)

### Scheda servizio e attributi

| **Nome servizio**            | Carta d'Identità Elettronica                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Topic**                    | Servizi anagrafici e civici                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Sub-topic**                | Anagrafe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Descrizione del servizio** | <p>Questo servizio riguarda la richiesta, l'emissione e la scadenza della tua Carta d'Identità Elettronica.</p><p></p><p>Tramite IO, potrai:</p><ul><li>richiedere un appuntamento per l'erogazione o la sostituzione della tua Carta d'Identità;</li><li>ricevere un promemoria che ti ricorda dell'appuntamento;</li><li>pagare l'importo da riconoscere per l'emissione della carta;</li><li>ricevere un messaggio che ti informa della scadenza della Carta;</li><li>ricevere eventuali informazioni e comunicazioni aggiuntive.</li></ul><p>Per maggiori informazioni sulla Carta d'Identità Elettronica, visita <a href="https://www.cartaidentita.interno.gov.it/">questo sito</a>.</p> |
| **Call to action**           | Richiedi appuntamento                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

### **Ciclo di vita del servizio**

<figure><img src="../../.gitbook/assets/Template - SERVIZI.png" alt="Ciclo di vita ed eventi del servizio Carta d&#x27;Identità Elettronica"><figcaption><p><strong>Ciclo di vita ed eventi del servizio Carta d'Identità Elettronica</strong></p></figcaption></figure>

### **Messaggi del servizio**

Ecco la lista dei diversi messaggi che il servizio può inviare, con le relative regole di invio.&#x20;

{% hint style="success" %}
L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio, può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando versioni del servizio sempre più complete.
{% endhint %}

<details>

<summary><strong>Conferma appuntamento</strong></summary>

**🖋 Titolo del messaggio:** Il tuo appuntamento con \<ufficio>

🗒 **Testo del messaggio**:&#x20;

Ti ricordiamo l'appuntamento presso l'\<ufficio> situato in \<indirizzo> fissato per il giorno \<gg/mm/aaaa> alle ore [hh:mm](hh:mm).

Ti invitiamo a presentarti con almeno 15 minuti di anticipo e di portare con te tutti i documenti necessari. Per maggiori informazioni su quali documenti ti serviranno, visita il sito di [CIE](https://www.cartaidentita.interno.gov.it/cittadini/rilascio-e-rinnovo-in-italia/).

Puoi disdire l'appuntamento online, sul sito \[nome sito]\(URL).

**🪄 Call to action**: Aggiungi promemoria

**---**

**Destinatari**: I cittadini che hanno terminato con successo una prenotazione sul sito dell'Ente

**Trigger**: Alla conclusione del flusso di prenotazione

**User story**: <mark style="color:purple;">Come cittadino voglio ricevere la conferma con i dettagli del mio appuntamento</mark>

</details>

<details>

<summary><strong>Disdetta appuntamento</strong></summary>

**🖋 Titolo del messaggio:** Disdetta appuntamento con \<ufficio>

🗒 **Testo del messaggio**:&#x20;

Il tuo appuntamento presso l'\<ufficio> situato in \<indirizzo> fissato per il giorno \<gg/mm/aaaa> alle ore [hh:mm](hh:mm) è stato cancellato per \<descrizione motivazione>.

Se desideri prenotare un nuovo appuntamento online, puoi utilizzare il \[servizio di prenotazione]\(URL) del tuo Comune o recarti all'ufficio Anagrafe più comodo per le tue esigenze.

**🪄 Call to action**: n/a

**---**

**Destinatari**: I cittadini il cui appuntamento è stato cancellato per scelta dei cittadini o esigenze del Comune

**Trigger**: Al momento della cancellazione dellla prenotazione

**User story**: <mark style="color:purple;">Come cittadino voglio essere avvisato della cancellazione di un appuntamento</mark>

</details>

<details>

<summary><strong>Pagamento</strong></summary>

**🖋 Titolo del messaggio:** Pagamento Carta d'Identità

🗒 **Testo del messaggio**:&#x20;

Da oggi puoi procedere al pagamento dell'importo necessario per l'emissione della Carta di Identità Elettronica.

Instestatario: \<nome e cognome> \
Importo: \<xx,xx> \
Causale: \<causale>

Puoi pagare direttamente dall'app, oppure direttamente allo sportello il giorno dell'appuntamento. Se vuoi scegliere un'altra modalità di pagamento, visita la sezione **pagoPA** \[https://www.comune..cr.it/servizi/pago-pa] del sito di \[nome ente]\(URL).

**🪄 Call to action**: Vedi Avviso

**---**

**Destinatari**: I cittadini che devono pagare il documento

**Trigger**: Prima dell'appuntamento in Comune

**User story**: <mark style="color:purple;">Come cittadino voglio pagare la mia Carta d'Identità online</mark>

</details>

<details>

<summary>Avviso di scadenza della CIE</summary>

**🖋 Titolo del messaggio:** Scadenza Carta d'Identità

🗒 **Testo del messaggio**:&#x20;

Oggi \<gg/mm/aaaa> è scaduta la tua Carta d'Identità \<numero>.

Se non l'hai ancora fatto, puoi prenotare un appuntamento per il rinnovo, direttamente online online, al sito \[nome sito]\(URL), oppure presentarti all'Ufficio Anagrafe più vicino a te, verificando giorni e orari di apertura sul sito del tuo Comune.

**🪄 Call to action**: n/a

**---**

**Destinatari**: Cittadini in possesso di una Carta d'Identità

**Trigger**: Il giorno della scadenza

**User story**: <mark style="color:purple;">Come cittadino voglio essere avvisato quando scadrà il mio documento</mark>

<mark style="color:purple;">**---**</mark>

<mark style="color:purple;">ℹ️</mark> <mark style="background-color:yellow;">Il messaggio di preavviso della scadenza (a 180, 90 e 30 giorni) viene mandato dal servizio nazionale di ANPR. Si sconsiglia di duplicare l'invio con le stesse informazioni.</mark>

</details>

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.

Puoi copiare i testi dei messaggi da personalizzare da [questo documento](https://docs.google.com/spreadsheets/d/1ekUsPJ4a-86W27AiQERynWc1Xti9uqsoXVbrHDGvJt0/edit#gid=1221000797).
{% endhint %}

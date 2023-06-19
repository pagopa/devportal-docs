# Rimozione veicoli

Erogare il servizio "Rimozione veicoli" tramite IO permette agli enti di:

* **aggiornare in tempo reale** i cittadini e quindi consentirgli di agire con tempestività sul pagamento di rimozioni o blocchi dei loro veicoli;
* **ridurre i tempi** e i costi del processo di notifica e consegna della contravvenzione;
* **velocizzare i tempi** di recupero della vettura in caso di blocco o rimozione.

[**Scopri tutti i benefici di integrarsi con IO →**  ](../../cose-io-e-qual-e-il-suo-obiettivo.md#perche-integrarsi-con-io)

### Scheda servizio e attributi

| **Nome servizio**            | Rimozione veicoli                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Topic**                    | Mobilità e trasporti                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Sub-topic**                | Veicoli di proprietà                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Descrizione del servizio** | <p>Questo servizio riguarda la rimozione e il blocco di veicoli intestati a te.</p><p></p><p>Tramite IO potrai:</p><ul><li>ricevere un messaggio che ti informa che il tuo veicolo è stato bloccato, rimosso o segnalato come abbandonato;</li><li>ricevere un messaggio che ti informa che il deposito del veicolo è in scadenza;</li><li>ricevere un messaggio che ti informa che il tuo veicolo può tornare in circolazione.</li></ul> |

### **Ciclo di vita del servizio**

<figure><img src="../../.gitbook/assets/Rimozioni.png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio rimozione veicoli</strong></p></figcaption></figure>

### Messaggio del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio, può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando versioni del servizio sempre più complete.
{% endhint %}

<details>

<summary>Avvenuto blocco del veicolo</summary>

**🖋 Titolo del messaggio:** Il tuo veicolo è stato bloccato

🗒 **Testo del messaggio**:&#x20;

Il \<gg/mm/aaaa> alle hh:mm, in \<indirizzo>, il veicolo targato \<targa> è stato bloccato con le ganasce per queste violazioni:&#x20;

**• \<tipologia di violazione> - art. \<numero>**

**Accertamento numero**: \<numero accertamento>

\[Vedi accertamento]\(link)

\<Inserire indicazioni su cosa deve fare il destinatario, per es. "Contatta la polizia locale al numero">. Per maggiori informazioni visita \[questo sito]\(URL).

**🪄 Call to action**: n/a

**---**

**Destinatari**: Tutti i cittadini residenti nell'area geografica di azione del servizio, che hanno l'app IO e che hanno effettuato una violazione del Codice della Strada

**Trigger**: Quando è commessa la violazione e il blocco è stato applicato

**User story**: <mark style="color:purple;">Come cittadino voglio ricevere notifica immediata della violazione commessa e del blocco apposto</mark>&#x20;

<mark style="color:purple;">ℹ️</mark> Questo messaggio arriva sempre insieme ad un [messaggio di preavviso di accertamento](multe-per-violazione-codice-della-strada.md#emissione-preavviso-di-accertamento), puoi decidere di mandare un messaggio unico. &#x20;

</details>

<details>

<summary>Avvenuta rimozione del veicolo</summary>

**🖋 Titolo del messaggio:** Il tuo veicolo è stato rimosso&#x20;

🗒 **Testo del messaggio**:  Il \<gg/mm/aaaa> alle hh:mm, in \<indirizzo>, il veicolo targato \<targa> è stato rimosso per queste violazioni:

* **\<tipologia di violazione> - art. \<numero>**

**Accertamento numero**: \<numero accertamento>

\[Vedi accertamento]\(link)

Il tuo veicolo si trova presso il deposito in \<indirizzo>.\
\
\<Inserire indicazioni su cosa deve fare il destinatario, per es. "Hai tempo fino al \<gg/mm/aa> per ritirarlo>. Per maggiori informazioni visita \[questo sito]\(URL) o contatta \<ente da contattare>\<modalità di contatto>.

**🪄 Call to action**: n/a

**---**

**Destinatari**: Tutti i cittadini residenti nell'area geografica di azione del servizio, che hanno l'app IO e che hanno effettuato una violazione del Codice della Strada

**Trigger**: Quando è commessa la violazione e la rimozione è stata effettuata

**User story**: <mark style="color:purple;">Come cittadino voglio ricevere notifica immediata della violazione commessa e della rimozione avvenuta</mark>&#x20;

<mark style="color:purple;">ℹ️</mark> Questo messaggio arriva sempre insieme ad un [messaggio di preavviso di accertamento](multe-per-violazione-codice-della-strada.md#emissione-preavviso-di-accertamento), puoi decidere di mandare un messaggio unico. &#x20;

</details>

<details>

<summary>Avviso di deposito in scadenza</summary>

**🖋 Titolo del messaggio:** Il deposito del tuo veicolo è in scadenza

🗒 **Testo del messaggio**:  Hai tempo fino al \<gg/mm/aaaa> per ritirare il veicolo targato \<numero targa> presso il deposito in \<indirizzo>.&#x20;

Potrai ritirarlo solo dopo avere pagato i costi di servizio e deposito. Se non lo ritiri entro il termine stabilito, \<inserire cosa succede>.&#x20;

Per maggiori informazioni visita \[questo sito]\(URL) o contatta \<ente da contattare>\<modalità di contatto>.

**🪄 Call to action**: n/a

**---**

**Destinatari**: Tutti i cittadini che hanno subito una rimozione della propria vettura e non sono andati a ritirarla&#x20;

**Trigger**: Quando la scadenza del deposito si avvicina

**User story**: <mark style="color:purple;">Come cittadino voglio ricevere notifica immediata delle prossime scadenze</mark>

</details>

<details>

<summary>Dichiarazione di vettura in stato di abbandono</summary>

**🖋 Titolo del messaggio:** Il tuo veicolo risulta abbandonato

🗒 **Testo del messaggio**: Il veicolo targato \<targa> in \<indirizzo> è considerato in stato in abbandono.&#x20;

\<Inserire indicazioni su cosa deve fare il destinatario, per es. "Hai tempo fino al \<gg/mm/aa> per contattare \<nome ente>...>. Per maggiori informazioni visita \[questo sito]\(URL) o contatta \<ente da contattare>\<modalità di contatto>.

**🪄 Call to action**: n/a

**---**

**Destinatari**: Tutti i cittadini che hanno abbandonato un veicolo per strada o non lo hanno mai ritirato dal deposito a fronte di una rimozione&#x20;

**Trigger**: Quando il mezzo è ritrovato oppure il termine del deposito è scaduto

**User story**: <mark style="color:purple;">Come cittadino voglio ricevere notifica immediata se il mio veicolo sta per essere considerato abbandonato</mark>&#x20;

</details>

### In arrivo: Piattaforma Notifiche&#x20;

{% hint style="info" %}
**Cosa potrò fare con Piattaforma Notifiche?**

IO sarà presto integrata con il nuovo servizio di Piattaforma Notifiche per permettere l'invio di notifiche a valore legale come i verbali di contestazione. \
[**Scopri di più su Piattaforma Notifiche →** ](https://www.pagopa.it/it/prodotti-e-servizi/piattaforma-notifiche-digitali)



Qui riportiamo alcuni esempi di messaggi che sarà possibile implementare con la futura integrazione di Piattaforma Notifiche:&#x20;

<details>

<summary>Avvenuto sequestro amministrativo del veicolo</summary>

**User story**: Come cittadino voglio ricevere notifica immediata dell'avvenuto sequestro

</details>

<details>

<summary>Disposizione di dissequestro amministrativo</summary>

**User story**: Come cittadino voglio ricevere notifica immediata per sapere quando posso usare regolarmente il mio veicolo

</details>

<details>

<summary>Conferma di presentazione ricorso</summary>

**User story**: Come cittadino voglio ricevere notifica della corretta ricezione del mio ricorso

<mark style="color:purple;">ℹ️</mark> Questo messaggio è in capo all'ente di riferimento e non al Comune &#x20;

</details>

<details>

<summary>Invalidazione presentazione ricorso</summary>

**User story**: Come cittadino voglio sapere perché il mio ricorso non è stato correttamente presentato

<mark style="color:purple;">ℹ️</mark> Questo messaggio è in capo all'ente di riferimento e non al Comune &#x20;

</details>

<details>

<summary>Esito ricorso e aggiornamento verbale</summary>

**User story**: Come cittadino voglio ricevere notifica dell’esito del mio ricorso&#x20;

<mark style="color:purple;">ℹ️</mark> Questo messaggio è in capo all'ente di riferimento e non al Comune &#x20;

</details>
{% endhint %}

Il template di **Rimozione veicoli** è connesso con quello di [**Multe per violazione Codice della Strada**](multe-per-violazione-codice-della-strada.md)**,** secondo il seguente ciclo di vita:

<figure><img src="../../.gitbook/assets/Template - Multe + rimozioni.png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio multe per violazione Codice della Strada e rimozione veicoli</strong> </p></figcaption></figure>

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.

Puoi copiare i testi dei messaggi da personalizzare da [questo documento](https://docs.google.com/spreadsheets/d/1GAzs1VkxTd67xeQXyzv-WCilwYkN96sq7XPnWZyDXDc/edit#gid=538647580).
{% endhint %}

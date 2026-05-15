# Rimozioni veicoli

Erogare il servizio "Rimozione veicoli" tramite IO permette agli enti di:

* **aggiornare in tempo reale** i cittadini e quindi consentirgli di agire con tempestività sul pagamento di rimozioni o blocchi dei loro veicoli;
* **ridurre i tempi** e i costi del processo di notifica e consegna della contravvenzione;
* **velocizzare i tempi** di recupero della vettura in caso di blocco o rimozione.

[**Scopri tutti i benefici di integrarsi con IO →**](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo)

| **Nome servizio**            | Rimozione veicoli                                                                                                                                                                                                                                                                                                                                                       |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Argomento**                | Mobilità e trasporti                                                                                                                                                                                                                                                                                                                                                    |
| **Descrizione del servizio** | <p>Il servizio riguarda la rimozione e il blocco di veicoli intestati a te.</p><p>Tramite IO potrai:</p><ul><li>ricevere un messaggio che ti informa che il tuo veicolo è stato bloccato, rimosso o segnalato come abbandonato;</li><li>ricevere un messaggio che ti informa che il deposito del veicolo è in scadenza;</li><li>ricevere altre comunicazioni.</li></ul> |

## **Ciclo di vita del servizio**

<figure><img src="../../../app-io/modelli-servizi/v1.0/.gitbook/assets/Mobilità e trasporti_Rimozione veicoli_X (1).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio rimozione veicoli</strong></p></figcaption></figure>

## Messaggio del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio, può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando versioni del servizio sempre più complete.
{% endhint %}

### Abbandono in strada

<details>

<summary>Dichiarazione di vettura in stato di abbandono</summary>

**🖋 Titolo del messaggio:** Il tuo veicolo risulta abbandonato

🗒 **Testo del messaggio**: Il veicolo targato `<targa>` in `<indirizzo>` è considerato in stato in abbandono.

Per maggiori informazioni visita \[questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Il cittadino che ha abbandonato un veicolo per strada.

**Quando inviarlo**: Quando il veicolo è stato ritrovato o segnalato.

**User story**: Come cittadino voglio ricevere notifica immediata se il mio veicolo sta per essere considerato abbandonato.

</details>

### Rimozione del veicolo

<details>

<summary>Avvenuta rimozione del veicolo</summary>

**🖋 Titolo del messaggio:** Il tuo veicolo è stato rimosso

🗒 **Testo del messaggio**: Il `<gg/mm/aaaa>` alle `<hh:mm>`, in `<indirizzo>`, il veicolo targato `<targa>` è stato rimosso.

Il tuo veicolo si trova presso il deposito in `<indirizzo>`.

Per maggiori informazioni visita \[questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Il cittadino a cui è stato rimosso il veicolo in seguito a violazione del codice della strada.

**Quando inviarlo**: Quando è commessa la violazione del codice della strada e la rimozione è stata effettuata.

**User story**: Come cittadino voglio ricevere notifica immediata della violazione commessa e della rimozione avvenuta.

</details>

### Deposito in scadenza

<details>

<summary>Avviso di deposito in scadenza</summary>

**🖋 Titolo del messaggio:** Il deposito del tuo veicolo è in scadenza

🗒 **Testo del messaggio**: Hai tempo fino al `<gg/mm/aaaa>` per ritirare il veicolo targato `<numero targa>` presso il deposito in `<indirizzo>`.

Potrai ritirarlo solo dopo avere pagato i costi di servizio e deposito.

Per maggiori informazioni visita \[questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Il cittadino a cui è stato bloccato o rimosso il veicolo in seguito a violazione del codice della strada e non è andato a ritirarlo.

**Quando inviarlo**: Quando la scadenza del deposito si avvicina.

**User story**: Come cittadino voglio ricevere notifica immediata delle prossime scadenze.

</details>

### Abbandono in deposito

<details>

<summary>Dichiarazione di vettura in stato di abbandono</summary>

**🖋 Titolo del messaggio:** Il tuo veicolo risulta abbandonato

🗒 **Testo del messaggio**: Il veicolo targato `<targa>` in `<indirizzo>` è considerato in stato in abbandono.

Per maggiori informazioni visita \[questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Il cittadino che ha abbandonato un veicolo per strada o non lo ha mai ritirato dal deposito a fronte di una rimozione.

**Quando inviarlo**: Quando il veicolo è ritrovato oppure il termine del deposito è scaduto.

**User story**: Come cittadino voglio ricevere notifica immediata se il mio veicolo sta per essere considerato abbandonato.

</details>

***

{% hint style="success" %}
**Lo sapevi?**\
IO è integrata con SEND - Servizio Notifiche Digitale, per l'invio di comunicazioni a valore legale.

[**Scopri di più su SEND**](https://notifichedigitali.pagopa.it/) [**-->**](https://www.pagopa.it/it/prodotti-e-servizi/piattaforma-notifiche-digitali)
{% endhint %}

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:

{% file src="../../../app-io/modelli-servizi/v1.0/.gitbook/assets/IO - Template servizi - Rimozione veicoli.xlsx" %}
{% endhint %}

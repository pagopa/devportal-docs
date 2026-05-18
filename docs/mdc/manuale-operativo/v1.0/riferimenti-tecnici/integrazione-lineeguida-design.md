---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/UdBZLK0IXWx2yqcEv6ks/riferimenti-tecnici/integrazione-lineeguida-design
---

# Integrazione con le linee guida di design

In basso saranno descritte le linee guida da rispettare per il mapping delle informazioni contenute nel messaggio all'interno della UX/UI. Per la parte UX/UI far sempre riferimento all'ultima versione pubblicata delle [Linee Guida di Design](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/gCHOYTnMNSuUjwLmQkud/).

## Fruizione

Dopo aver attivato il servizio, ogni volta che l’utente riceve una comunicazione a valore legale su SEND a lui indirizzata, gli viene inviato un Messaggio di cortesia (in basso i due tipi di messaggi che vengono inviati dal BackEnd del PSP in modalità push alle loro app) direttamente nell’app del PSP. Se l’utente ha attivato le notifiche push, potrà visualizzare un'anteprima del messaggio direttamente nella schermata principale del proprio dispositivo (**ved. immagine "Messaggio PUSH ricevuto"**), facilitando l’accesso rapido alle informazioni. Questo messaggio lo avvisa e lo invita a visualizzare la comunicazione.

Il dettaglio della comunicazione, veicolato da SEND, cambia a seconda che l'utente abbia eletto ("messaggio contenuto Digitale") o meno un domicilio digitale ("Messaggio contenuto Analogico").

### Esempio di un messaggio con contenuto **Digitale**:

```json
{
  "messageId": "XXX-XXXX-XXXX-202603-V-1_7e1a813c-97ce-4ca1-b407-f1e6482e45d8",
  "recipientId": "GRBGPP87L04L741X",
  "triggerDateTime": "2026-03-14T12:09:13.951983763Z",
  "senderDescription": "Comune di Bologna",
  "messageUrl": "https://cittadini.notifichedigitali.it/nuova-notifica-send",
  "originId": "XXXX-XXXX-XXXX-202603-V-1",
  "title": "Hai una comunicazione a valore legale su SEND",
  "content": "Ciao,  \nhai ricevuto una notifica SEND, cioè una comunicazione a valore legale emessa da un’amministrazione.\n\nPer leggerla e conoscere tutti i dettagli, accedi al sito web di SEND direttamente da questo messaggio.\n\n**La notifica risulterà legalmente consegnata a te dopo 7 giorni dalla ricezione sul tuo domicilio digitale,** anche se non la apri o non la leggi.",*
  "associatedPayment": true,
  "workflowType": "DIGITAL"*
}
```

### Esempio di un messaggio con contenuto **Analogico**:

```json
{
  "messageId": "XXXX-XXXX-XXXX-202603-V-1_2d269359-cff4-47d1-b6c5-4f1b95fc08d8",
  "recipientId": "GRBGPP87L04L741X",
  "triggerDateTime": "2026-03-25T16:27:18.572832125Z",
  "senderDescription": "Regione Lombardia",
  "messageUrl": "https://cittadini.notifichedigitali.it/nuova-notifica-send",
  "originId": "XXXX-XXXX-XXXX-202603-V-1",
  "title": "Hai una comunicazione a valore legale su SEND",
  "content": "Ciao,  \nhai ricevuto una notifica SEND, cioè una comunicazione a valore legale emessa da un’amministrazione.\n\nPer leggerla e conoscere tutti i dettagli, accedi al sito web di SEND direttamente da questo messaggio **entro il 30/03/2026 alle 18:27**: eviterai una raccomandata cartacea e i relativi costi.",
  "associatedPayment": false,
  "analogSchedulingDate": "2026-03-30T16:27:18.319Z",
  "workflowType": "ANALOG"
}
```

L'unica differenza tra il messaggio digitale ed analogico è l'informazione presente nell'attributo **content**. Gli altri attributi che si differenziano sono la presenza o meno dell'attributo **analogSchedulingDate** e l'attributo **workflowType**.

***

### Elementi obbligatori messaggio PUSH ricevuto sull'app

* Per la parte riguardante la UX/UI far riferimento alle indicazioni presenti nell'ultima versione della documentazione [Linee Guida di Design](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/gCHOYTnMNSuUjwLmQkud/)
* Riferimento esplicito a SEND
* Parlare di Comunicazioni a valore legale e NON di notifiche
* Il titolo del messaggio deve essere il contenuto del campo **title** presente nel messaggio ricevuto come da questo stralcio di messaggio _**title: "Hai una comunicazione a valore legale su SEND"**_

![Messaggio PUSH ricevuto](../.gitbook/assets/titolo_msg_push.png)

***

### Elementi obbligatori dettaglio messaggio ricevuto sull'app

* Per la parte riguardante la UX/UI far riferimento alle indicazioni presenti nell'ultima versione della documentazione [Linee Guida di Design](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/gCHOYTnMNSuUjwLmQkud/)
* Riferimento esplicito a SEND - Servizio Notifiche Digitali
* Esplicitare qual è l'Ente mittente il cui valore è presente nell'attributo **senderDescription**.
* Il dettaglio della comunicazione è presente nell'attributo **content**.
* Riportare il codice IUN (codice alfanumerico univoco della comunicazione a valore legale) il cui valore è presente nell'attributo **originId**
* Una call-to-action che inviti l'utente a leggere la comunicazione il cui URL sarà costruito con la concatenazione dell'attributo **messageUrl** ed il valore (\*retrievalId) ottenuto dalla chiamata all'API POST **/retrievalTokens**. Per esempio: `https://cittadini.notifichedigitali.it/nuova-notifica-send?retrievalId=<<valore ottenuto dalla POST - retrievalId>>`

***

{/\* Primo Blocco \*/} ![Dettaglio messaggio analogico ricevuto](../.gitbook/assets/dettaglio_msg_analogico.png) Dettaglio messaggio analogico ricevuto

{/\* Secondo Blocco \*/} Dettaglio messaggio di cortesia con domicilio digitale non attivo

![DDettaglio messaggio digitale ricevuto](../.gitbook/assets/dettaglio_msg_digitale.png) Dettaglio messaggio digitale ricevuto

***

{% hint style="warning" %}
É fondamentale veicolare correttamente il messaggio all'utente: quello che sta visualizzando è il messaggio di cortesia e NON la comunicazione a valore legale. Per leggere quest'ultima dovrà accedere a SEND.
{% endhint %}

{% hint style="danger" %}
Il dettaglio del messaggio dovrà essere visualizzato implementando il formato \*\*markdown\*\*.
{% endhint %}

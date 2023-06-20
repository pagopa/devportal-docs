# 🗂 Linee guida di utilizzo

I comportamenti del Pulsante Firma con IO possono essere scelti dall’Ente nella fase di integrazione. Di seguito elenchiamo alcuni possibili scenari da gestire e conseguenti consigli sulla gestione.

### Flusso di firma terminato con successo tramite il pulsante Firma con IO <a href="#flusso-di-firma-cta-terminato-con-successo" id="flusso-di-firma-cta-terminato-con-successo"></a>

1. L’utente si trova nell’area a lui riservata sul portale del proprio Ente, sceglie di procedere alla firma di un documento, dunque clicca il pulsante Firma con IO
2. Il click sul pulsante avvierà una richiesta di firma per quell’utente, che dunque dovrà attendere da min. 30 secondi a max 1 minuto per poter proseguire.

{% hint style="success" %}
È stato previsto lato UI per il pulsante Firma con IO una modale con **loading di attesa** in questa fase.
{% endhint %}

&#x20;3\.  Al termine del caricamento, l’utente atterra su app IO attraverso l’_universal link._

&#x20;4\. L’utente procede su app IO e firma

### **Firma in corso (da completare)**

L’utente accede al flusso per la firma, poi lo interrompe prima di concluderlo. A questo punto torna a cliccare la CTA Firma con IO per completare la firma.

{% hint style="info" %}
Si consiglia in questo caso all’Ente di[ verificare lo stato della firma](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/AdBuOCmwur7AhLlgfCeG/\~/changes/87/verificare-lo-stato-di-una-firma) e, in caso di **richiesta di firma in corso (WAIT\_FOR\_SIGNATURE)**, di consentire tramite la CTA all’utente di riaprire la stessa richiesta di firma e completare il processo.
{% endhint %}

### **Firma già effettuata**

L’utente dopo aver completato il processo di firma, torna a cliccare la CTA firma con IO.

{% hint style="info" %}
Si consiglia in questo caso all’Ente di [verificare lo stato della firma](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/AdBuOCmwur7AhLlgfCeG/\~/changes/87/verificare-lo-stato-di-una-firma) e, in caso di **firma già effettuata dall’utente (SIGNED)**, evitare che al nuovo click sulla CTA parta un nuovo processo di firma. La soluzione migliore potrebbe essere quella di eliminare/inibire la CTA e il pulsante Firma con IO e offrire all’utente una thank you page sul canale che ringrazia della firma effettuata.
{% endhint %}

### **Firma in corso (completate lato utente ma in corso di firma lato QTSP)**

{% hint style="info" %}
Si consiglia in questo caso all’Ente di [verificare lo stato della firma](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/AdBuOCmwur7AhLlgfCeG/\~/changes/87/verificare-lo-stato-di-una-firma) e, **in caso di firma in corso di completamento (WAIT\_FOR\_QTSP)** di offrire all’utente un’information page che lo rimanda all’app IO per verificare lo stato della Firma.
{% endhint %}

<figure><img src="../.gitbook/assets/Screenshot 2023-03-28 alle 17.42.12.png" alt=""><figcaption></figcaption></figure>

### **Errore di firma (problemi sui documenti)**

L’utente procede correttamente con la firma in app, ma al termine del flusso firma riceve un messaggio di errore che lo informa che non è stato possibile procedere con la firma dei documenti. A questo punto torna a cliccare la CTA Firma con IO.

Se non è stato possibile completare la firma, la ragione è legata a problemi tecnici nel/i documento/i inviato/i dall’Ente.&#x20;

{% hint style="info" %}
Si consiglia in questo caso all’Ente di [verificare lo stato della firma](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/AdBuOCmwur7AhLlgfCeG/\~/changes/87/verificare-lo-stato-di-una-firma) e, in caso di firma rigettata **(REJECTED)**, non consentire all’utente di avviare una nuova richiesta di firma con quella stessa CTA. Si consiglia di inibire/eliminare la CTA oppure di sostituirla con una legata a documenti corretti. Prima della presa in carico, si consiglia di prevedere una error page informativa.
{% endhint %}

<figure><img src="../.gitbook/assets/Screenshot 2023-03-28 alle 17.40.30.png" alt=""><figcaption></figcaption></figure>

NB: agli Enti è messo a disposizione un endpoint per la validazione dei documenti prima dell’invio della richiesta di firma per evitare che questo problema si verifichi il più delle volte.

### **Errore di firma (problemi temporanei sull’APP IO)**

L’utente clicca sulla CTA Firma con IO ma l’APP IO temporaneamente non risponde.

{% hint style="info" %}
Si consiglia in questo caso all’Ente di inserire un error page temporanea che consiglia all’utente di tornare a firmare tra qualche minuto.
{% endhint %}

<figure><img src="../.gitbook/assets/Screenshot 2023-03-28 alle 17.41.10.png" alt=""><figcaption></figcaption></figure>



![](blob:https://pagopa.atlassian.net/6835ec2b-5567-453d-97c7-ccff5ae1b911#media-blob-url=true\&id=3e8028d1-e253-459c-82bb-b30301319d69\&collection=contentId-633110911\&contextId=633110911\&height=82\&width=333\&alt=)

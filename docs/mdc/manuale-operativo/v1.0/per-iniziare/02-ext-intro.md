# Flusso Operativo Completo

Il Flusso Operativo Completo prevede:

* **PagoPA**: la società con sede legale in Roma, Piazza Colonna n. 370, c.f., P.I. e iscrizione al Registro delle Imprese di Roma n. 15376371009.
* **Prestatori di Servizi di Pagamento (PSP)**: Per PSP si intende il soggetto che mette a disposizione dei propri Utenti, tramite la propria app bancaria il servizio “Messaggi di Cortesia”.
* **SEND**: SEND è la piattaforma che si occupa dell’invio ai destinatari, per via digitale o analogica, delle notifiche a valore legale, gestendo l’intero processo di notificazione per conto dell’amministrazione mittente, che si limita a depositare l’atto da notificare.
* **EMD**: L'_Enterprise Message Dispatcher_ è il _layer_ di gestione dei messaggi avente lo scopo di armonizzare sia le interfacce esposte dalle piattaforme erogatrici, che le logiche di canale.
* **Utente**: è colui che dopo aver effettuato l’attivazione del servizio tramite l'app bancaria del PSP riceve sullo stesso, una comunicazione (ossia un messaggio di cortesia) che lo informa che su SEND è presente una notifica a valore legale a suo carico.

{% hint style="info" %}
Si precisa che, nel contesto di questo documento, qualora venga menzionato l'Attore TPP (terza parte), si intende il PSP (Prestatore di Servizi di Pagamento) o ulteriori soggetti che potrebbero aggiungersi in fasi successive.
{% endhint %}

### Descrizione del Servizio

Messaggi di Cortesia è un Servizio che permette agli Utenti di attivare e ricevere i messaggi di cortesia di SEND direttamente sull’app bancaria dei Prestatori di Servizi di Pagamento (PSP).

Inoltre, al fine di migliorare l’esperienza utente, il servizio include la possibilità, nel caso in cui alla notifica sia associato un avviso di pagamento pagoPA, di **effettuare il pagamento direttamente nell'app bancaria del PSP**. Questo semplifica il processo di pagamento e favorisce un'esperienza più fluida per gli Utenti.\
Grazie all'integrazione con le app bancarie dei PSP, gli Utenti possono scegliere il canale per ricevere gli avvisi di cortesia, **aumentando così la probabilità di ricezione e presa visione delle comunicazioni in tempi brevi**. È importante precisare che i messaggi di cortesia inviati sono **di natura puramente informativa** e pertanto non hanno valore legale. Per perfezionare la notifica, l'Utente dovrà accedere alla piattaforma SEND e potrà farlo tramite il link contenuto all'interno del messaggio di cortesia che lo indirizzerà direttamente in piattaforma.

{% hint style="warning" %}
I messaggi di cortesia veicolati riguarderanno esclusivamente le persone fisiche maggiorenni e **non le persone giuridiche.**
{% endhint %}

## Prerequisito: Attivazione dell'Utente

L'intero processo può avvenire solo se l'utente ha preventivamente deciso di aderire al Servizio, e quindi di ricevere i messaggi di cortesia tramite l'app bancaria del proprio PSP, come descritto nel processo di **Attivazione**.

{% hint style="warning" %}
È onere del **PSP** fornire all'Utente informazioni chiare sulle modalità di attivazione e disattivazione del Servizio.
{% endhint %}

Nell'immagine in basso è descritto il modello operativo che va dalla fase di attivazione sino al pagamento

![Modello Operativo](../.gitbook/assets/mdc_overview.png)

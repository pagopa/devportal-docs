# Come comunicare una richiesta di pagamento

Nella comunicazione di una richiesta di pagamento, è consigliabile sfruttare i diversi touchpoint bancari. Gli utenti, infatti, si aspettano di ricevere comunicazioni su più canali (email, SMS, notifiche push) per avere la certezza di verificarne l'autenticità.&#x20;

## Scelta dei canali e modalità di utilizzo

* **Notifiche push**: sfruttale per la prima segnalazione, per ingaggiare velocemente l'utente che ha questa funzionalità attiva.
* **Notifiche In-App/Web Banking**: La richiesta di pagamento può apparire come una notifica "temporanea" nella homepage o in pagine specifiche del tuo portale.  Valuta anche la presenza di un "centro notifiche" dedicato ai pagamenti pagoPA, da includere nella sezione pagamenti o in un'area dedicata agli avvisi pagoPA.
* **Email:** Puoi sfruttare l'email come canale aggiuntivo di promemoria. Inoltre, il suo uso è consigliato per la conferma delle operazioni di pagamento e per l'invio delle ricevute.&#x20;
* **Sms:** Anche l'sms può essere utilizzato come canale aggiuntivo di promemoria, ma non come singolo canale di notifica: in questo modo è più facile verificare l'autenticità della comunicazione.

## Informazioni da comunicare

Nel comunicare una richiesta di pagamento, è importante rendere subito chiaro all'utente **qual è l'azione richiesta** e **l'oggetto della richiesta**.

L'**ente creditore/mittente** e il **motivo del pagamento** sono due informazioni fondamentali per l'utente perché determinano la comprensione della comunicazione e influenzano la scelta di proseguire o meno con il pagamento richiesto.

### Notifiche push

{% tabs %}
{% tab title="✅ Da fare" %}
* Rendi sempre chiaro lo scopo della notifica: in questo caso deve comunicare la presenza di una richiesta di pagamento a nome dell'utente.
* Includi sempre l'oggetto della richiesta: gli utenti si fidano solo di ciò che sanno/si aspettano di dover pagare
{% endtab %}

{% tab title="❌ Da evitare " %}
* Evita di inserire già l'importo nella notifica: è un'informazione essenziale per dettagliare il pagamento, ma per questa modalità di notifica (notifica push) può creare emergenza nell'utente ed essere fuorviante, soprattutto in assenza di una causale chiara.
{% endtab %}
{% endtabs %}

#### Esempi

{% columns %}
{% column width="50%" %}
❌ **Da evitare**

<figure><img src="../../.gitbook/assets/image (15).png" alt=""><figcaption></figcaption></figure>

Manca l'oggetto del pagamento e lo scopo della notifica non è immediatamente chiaro.&#x20;

<figure><img src="../../.gitbook/assets/image (31).png" alt=""><figcaption></figcaption></figure>

Il mittente è errato e il contesto della notifica non è chiaro
{% endcolumn %}

{% column width="50%" %}
✅  **Corretti**

<figure><img src="../../.gitbook/assets/image (12).png" alt=""><figcaption></figcaption></figure>

Il titolo specifica lo scopo della notifica e l'oggetto rende subito chiaro di cosa si tratta.
{% endcolumn %}
{% endcolumns %}



### Email

Il canale email permette di intercettare l'utente che utilizza meno il portale bancario e che potrebbe non avere attive le notifiche push.&#x20;

Tramite l'email è possibile fornire maggiori informazioni di dettaglio. Tuttavia, questo canale va inteso come entry point all'home-banking, dove l'utente troverà la richiesta di pagamento completa.

{% hint style="success" %}
* Includi il nome del destinatario nel corpo di testo della mail: la personalizzazione delle comunicazioni aiuta a ridurre il rischio di phishing migliorando la credibilità del messaggio.
* Prevedi sempre una CTA che permetta di visualizzare la richiesta di pagamento nell'home-banking. Oltre a indirizzare l'utente verso il pagamento della richiesta, renderai più robusto il servizio in ottica anti-phishing.
{% endhint %}

<figure><img src="../../.gitbook/assets/image (16).png" alt="Una notifica o un&#x27;email che informa l&#x27;utente di una nuova richiesta di pagamento. Il titolo è &#x22;Nuova richiesta di pagamento da parte di [Nome Ente]&#x22;. La comunicazione include i dettagli essenziali della richiesta: Mittente (Comune di Ipazia), Oggetto del pagamento (Tari 2025), Importo (249,90 €), e la Data di scadenza (Entro il: 15/09/2025). Vengono forniti anche il Codice Avviso e il Codice Fiscale Ente. Il corpo del messaggio invita l&#x27;utente a visualizzare e completare il pagamento tramite il proprio portale bancario e include un pulsante &#x22;Visualizza la richiesta di pagamento&#x22;. La nota finale specifica che la comunicazione è ricevuta in qualità di [persona fisica] che ha aderito al servizio di ricezione delle richieste di pagamento sui canali bancari."><figcaption></figcaption></figure>

#### Suggerimenti sul tono di voce

{% tabs %}
{% tab title="✅ Da fare" %}
* **Sii sempre cortese e professionale**, anche se il tono di voce del tuo prodotto si rivolge ad un pubblico molto giovane.
* **Usa un oggetto chiaro**, specifico e istituzionale (es. "Richiesta di pagamento da parte di Comune di Ipazia"). Questo garantisce trasparenza e fiducia.
* **Fornisci tutti i dati ufficiali** di identificazione come l'ente mittente, l'oggetto specifico, l'importo e la scadenza. La chiarezza dei dettagli rassicura il destinatario.
* **Indica chiaramente come agire** (es. "Visualizza la richiesta" e "accedendo al tuo portale bancario"). Questo direziona l'utente verso canali sicuri.
{% endtab %}

{% tab title="❌ Da evitare " %}
* Non usare un linguaggio **eccessivamente urgente** o intimidatorio come "PAGA ORA" o puntare troppo sull'imminenza della scadenza. Un tono aggressivo è spesso usato nel phishing per indurre panico e reazioni impulsive.
* **Non includere allegati non richiesti o link a servizi sconosciuti** per completare il pagamento. Inviare un link generico, non specifico o con un dominio sospetto può far scambiare l'email per phishing.
* **Non usare saluti impersonali** o vaghi come "Gentile Cliente/Utente" senza specificare il nome del destinatario, se possibile. Un saluto troppo generico o un indirizzo email del mittente non ben definito sono bandiere rosse per il phishing.
{% endtab %}
{% endtabs %}

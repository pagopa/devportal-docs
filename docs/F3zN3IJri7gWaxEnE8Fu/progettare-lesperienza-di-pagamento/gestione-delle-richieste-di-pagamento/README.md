# 📂 Gestione delle richieste di pagamento

## **Casi d'uso**

Quando l'utente riceve una richiesta di pagamento può decidere se **pagare** oppure **ignorare** la richiesta ed eventualmente eseguire il pagamento su altri canali.&#x20;

Di conseguenza, le **casistiche** che possono verificarsi sono le seguenti:<br>

* L'utente visualizza la richiesta e paga subito
* L'utente visualizza la richiesta ma la riconsulta e paga in un secondo momento
* L'utente programma il pagamento
* L'utente ignora la richiesta di pagamento fino a farla scadere
* L'utente paga il dovuto su altri canali

{% hint style="success" %}
Per approfondire tutti gli scenari e conoscere le migliori pratiche da adottare nelle diverse casistiche, consulta [Gli stati di una richiesta di pagamento](gli-stati-di-una-richiesta-di-pagamento.md).
{% endhint %}

## **Disclaimer sull'importo del pagamento**

Dato che l'importo della richiesta di pagamento può subire variazioni in relazione alla natura e alle condizioni stabilite, questa eventualità deve essere esplicitata chiaramente all'utente. La comunicazione trasparente è indispensabile per prevenire dubbi o una percezione di scarsa affidabilità, fattori che impatterebbero negativamente sul tasso di completamento delle operazioni.

{% tabs %}
{% tab title="✅ Testo suggerito" %}
_In fase di pagamento l’importo potrebbe subire aumenti (per sanzioni, interessi, costi di notifica o altro) o riduzioni (per sgravi o note di credito)._
{% endtab %}
{% endtabs %}

## **Conferma del pagamento**&#x20;

Al termine del pagamento è importante fornire un feedback all'utente sull'esito dell'operazione e rendergli disponibili tutti i documenti e le informazioni che permettono di dimostrare l'avvenuto pagamento.

### **Conferma dell'esito**

{% tabs %}
{% tab title="✅ Da fare" %}
* Prevedi un feedback al termine del pagamento.
* Aggiorna in automatico la lista delle richieste di pagamento (e la richiesta stessa), così da poter mostrare chiaramente lo stato "Pagata".
* Rafforza il feedback prevedendo l'invio della conferma di pagamento su altri canali (es. email)
{% endtab %}
{% endtabs %}

### Ottenimento della ricevuta

{% tabs %}
{% tab title="✅ Da fare" %}
* Prevedi un collegamento rapido per recuperare la ricevuta a partire dalle richieste di pagamento già completate.
* Prevedi all'interno della tua architettura dell'informazione una sezione chiara in cui poter recuperare tutte le ricevute di pagamento.
* La ricevuta deve contenere tutte le informazioni necessarie per dimostrare chi ha pagato e quale dovuto.
{% endtab %}
{% endtabs %}

### Esempi

<figure><img src="../../../srtp/linee-guida-ux/1.0/.gitbook/assets/image (62).png" alt=""><figcaption><p>                        Schermata di feedback                                                                    Pagina di dettaglio della richiesta di pagamento</p></figcaption></figure>








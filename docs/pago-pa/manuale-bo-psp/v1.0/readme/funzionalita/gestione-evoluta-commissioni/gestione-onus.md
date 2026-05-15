# Gestione "onUS"

{% hint style="info" %}
Questa parte del documento descrive il concetto di pacchetto "onUS" e come deve essere configurato sul Backoffice pagoPA
{% endhint %}

Un bundle con flag `onUS` identifica un pacchetto commissionale la cui validità si applica a tutti quei pagamenti eseguiti con Carte di Credito rilasciate dallo stesso Istituto di Credito con il quale eseguire il pagamento.

Ad esempio sulla pagina "[Trasparenza costi](https://www.pagopa.gov.it/it/cittadini/trasparenza-costi/)"  un pacchetto commissionale con flag "onUS" equivale ad una scheda simile:\
![](<../../../.gitbook/assets/Screenshot 2025-03-17 alle 11.46.34.png>)

Per gestire un pacchetto di questo tipo all'interno della gestione evoluta commissioni di Backoffice pagoPA è opportuno valorizzare il nuovo flag "onUS" che si trova vicino la sezione "Commissioni" così come descritto nella figura seguente.

{% hint style="warning" %}
Il flag è attivabile soltanto se il metodo di pagamento selezionato è di tipo "Carte"
{% endhint %}

<figure><img src="../../../.gitbook/assets/image (297).png" alt=""><figcaption><p>Flag onUS non attivabile - Tipo pagamento diverso da Carte</p></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (17) (1).png" alt=""><figcaption><p>Flag onUS  attivabile - Tipo pagamento uguale a Carte</p></figcaption></figure>



Una volta creato il pacchetto è possibile poi visualizzare il dettaglio del flag nella barra a destra come da immagine seguente

<figure><img src="../../../.gitbook/assets/image (19) (1).png" alt=""><figcaption></figcaption></figure>

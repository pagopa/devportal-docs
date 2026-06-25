# Visibilità del servizio

Quando un servizio viene approvato puoi gestire la sua visibilità in app IO.

{% hint style="info" %}
Un servizio **approvato** può essere **attivato** (e quindi reso _pubblico)_ o **disattivato** (e quindi reso _privato_) tutte le volte che si vuole.&#x20;
{% endhint %}

{% hint style="warning" %}
È necessario ripassare dal processo di revisione ogni volta che si vuole apportare una modifica alla scheda servizio.
{% endhint %}

### **Attivazione**

#### Tramite Developer Portal

Ogni servizio per cui è stata [richiesta la revisione](revisione-del-servizio.md) tramite Developer Portal viene automaticamente attivato.

#### Tramite Area Riservata

Ogni servizio per cui è stata [richiesta la revisione](revisione-del-servizio.md) tramite l'Area Riservata viene automaticamente attivato.

#### Tramite API

Hai due metodi a disposizione:

* Quando stai inviando una richiesta di revisione puoi richiedere l'auto pubblicazione e in caso di approvazione verrà eseguita automaticamente.
* Puoi usare l'[API specifica `service release`](../../api/api-servizi/manage-service-release.md) per pubblicare un servizio approvato.



### Disattivazione

Puoi disattivare un servizio che precedentemente è stato attivato in IO.

#### Tramite Developer Portal

<details>

<summary><mark style="color:blue;">Step 1</mark> - Accedi e identifica il servizio</summary>

1. [**Accedi**](https://developer.io.italia.it/) al Developer Portal;
2. Nella colonna sinistra, seleziona **“Servizi”**;
3. Nella lista dei tuoi servizi identifica il servizio che vuoi controllare e clicca sul box.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Disattiva il servizio</summary>

1. Scorri la scheda servizio fino in fondo;
2. Nel box "Go Live!" clicca sul bottone "Disattiva Servizio".

</details>

#### Tramite Area Riservata

<details>

<summary><mark style="color:blue;">Step 1</mark> - Accedi e identifica il servizio</summary>

1. [Accedi](https://selfcare.pagopa.it) all'Area Riservata con spid o cie;
2. Seleziona l'ente per il quale vuoi operare;
3. Nella zona centrale della pagina, individua i prodotti abilitati;
4. Clicca sul box IO;
5. Nella colonna di sinistra, seleziona "**Servizi**";
6. Nella lista dei tuoi servizi identifica il servizio che vuoi controllare e clicca sul box.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Disattiva il servizio</summary>

1. Scorri la scheda servizio fino in fondo;
2. Nel box "Go Live!" clicca sul bottone "Disattiva Servizio".

</details>



#### Tramite API

{% hint style="info" %}
Puoi usare solo la chiave apposita denominata [`manage`](chiave-manage.md)
{% endhint %}

<details>

<summary><mark style="color:blue;">Step 1</mark> - identifica il servizio</summary>

Assicurati di recuperare il `service id` del servizio che vuoi rendere non visible in IO

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Effettua la chiamata</summary>

1. Effettua la chiamata all'api per [disattivare il servizio](../../api/api-servizi/manage-service-unpublish.md)

</details>

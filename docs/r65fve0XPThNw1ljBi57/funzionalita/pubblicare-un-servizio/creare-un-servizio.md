# Creare un servizio

Ecco quali sono gli step da seguire per creare un servizio.

{% hint style="info" %}
Il tuo ente è ancora sul Developer Portal? non appena disponibile, riceverai una comunicazione con le istruzioni per accedere alla nuova Area Riservata.&#x20;
{% endhint %}

#### Tramite Developer Portal

<details>

<summary><mark style="color:blue;">Step 1</mark> - Crea il servizio</summary>

1. [**Accedi**](https://developer.io.italia.it/) al Developer Portal;
2. Nella colonna sinistra, seleziona **“Servizi”**;
3. Verifica che i **campi precompilati** siano corretti e modificali se necessario;
4. Seleziona "**Aggiungi sottoscrizione**" per creare il servizio in bozza;
5. Visualizza e salva le **API key** associate al servizio.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Inserisci i dati richiesti</summary>

Per pubblicare il servizio in produzione, devi inserire i dati che trovi alla sezione[dati-obbligatori](dati-obbligatori/ "mention").&#x20;

</details>

#### Tramite Area Riservata

{% hint style="warning" %}
Al momento non disponibile per gli enti aggregatori o aggregati.
{% endhint %}

<details>

<summary><mark style="color:blue;">Step 1</mark> - Crea il servizio</summary>

1. [**Accedi**](https://selfcare.pagopa.it/) all'Area Riservata;
2. Seleziona l'ente per il quale vuoi operare dalla lista che ti viene mostrata;
3. Tra i prodotti attivi cerca App IO e clicca su "**Gestisci**";
4. Nella colonna sinistra, seleziona "**Servizi**";
5. Clicca su "**Crea un nuovo servizio**";
6. Scrivi nel campo "**Nome servizio**" il nome che il cittadino vedrà in app: [sceglilo con cura](https://docs.pagopa.it/manuale-operativo-dei-servizi/come-si-crea-un-servizio/la-scheda-servizio/nome-del-servizio)! Compila anche il campo "Dipartimento";
7. Clicca "**Aggiungi sottoscrizione**" per creare il servizio in bozza;
8. Visualizza e salva le **API key** associate al servizio.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Inserisci i dati richiesti</summary>

Per pubblicare il servizio in produzione, devi inserire i dati che trovi alla sezione[dati-obbligatori](dati-obbligatori/ "mention").&#x20;

</details>

#### Tramite API

<details>

<summary><mark style="color:blue;">Step 1</mark> - Recupera api-key apposita</summary>

1. Entra nel Developer Portal o nella sezione di IO nell'Area Riservata
2. Se [abilitato alla gestione dei servizi](../../abilitazioni/gestione-dei-servizi.md), in alto troverai un box con la chiave `manage`, subito sotto le informazioni relative all'account
3. Visualizza e copia la chiave per poterla usare nella tua integrazione

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Prepara la scheda servizio</summary>

1. Recupera le [specifiche API ](https://docs.pagopa.it/io-guida-tecnica/api/api-servizi/create-service)relative e leggi con attenzione i consigli
2. Prepara il payload relativo alla scheda servizio che vuoi creare
3. Assicurati di aver impostato `is_visible` a `false`
4. Aggiungi la tua chiave `manage`

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark> - Esegui la chiamata API</summary>

Effettua la chiamata e assicurati di gestire correttamente le chiavi restituite nella `response`, queste sono associate al servizio e saranno le uniche che ti permetteranno di utilizzarlo e inviare messaggi.

</details>


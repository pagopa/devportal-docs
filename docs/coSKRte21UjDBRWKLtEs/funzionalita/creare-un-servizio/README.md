# 📦 Creare un servizio

Un servizio su IO è la **versione digitale**, o l'**estensione di un servizio già digitalizzato**, erogato da un ente – pubblico o privato, centrale o locale – e destinato a uno o più gruppi di cittadini.

Ecco quali sono gli step da seguire per creare un servizio.

<details>

<summary><mark style="color:blue;">Step 1</mark> - Crea il servizio</summary>

1. **Accedi** al Developer Portal;
2. Nella colonna sinistra, seleziona **“Servizi”**;
3. Verifica che i **campi precompilati** siano corretti e modificali se necessario;
4. Seleziona "**Aggiungi sottoscrizione**" per creare il servizio in bozza;
5. Visualizza e salva le **API key** associate al servizio.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Inserisci i dati richiesti</summary>

Per pubblicare il servizio in produzione, devi inserire i dati che trovi alla sezione[dati-obbligatori](dati-obbligatori/ "mention").&#x20;

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark> - Testa il servizio</summary>

Prima di pubblicare il servizio in app, visualizza la scheda servizio in app per assicurarti che tutto sia corretto. Per farlo, leggi [visualizzare-un-servizio-in-test.md](visualizzare-un-servizio-in-test.md "mention")

**Importante**: Per i servizi di test, la proprietà `is_visible` deve sempre essere impostata come `false`.

</details>

<details>

<summary><mark style="color:blue;">Step 4</mark> - Invia un messaggio di test</summary>

Se vuoi, puoi anche inviare un messaggio di test. Per saperne di più sui messaggi e su come si inviano dei messaggi di testi, leggi come [inviare-un-messaggio](../inviare-un-messaggio/ "mention") e inviare [messaggi-di-test.md](../inviare-un-messaggio/messaggi-di-test.md "mention")

</details>

<details>

<summary><mark style="color:blue;">Step 5</mark> - Pubblica il servizio</summary>

Se è tutto pronto, metti il servizio in produzione impostando la proprietà `is_visible` su `true` e chiedi [l'abilitazione](../../abilitazioni/) per inviare messaggi ai cittadini reali e sbloccare tutte le API.

</details>

{% hint style="info" %}
**È la prima volta che crei un servizio sull'app IO?** Prima di procedere con la guida tecnica, leggi il [**manuale dei servizi**](https://docs.pagopa.it/manuale-servizi/): contiene indicazioni su come creare un servizio e scrivere i messaggi che questo invia. Al suo interno, trovi anche dei modelli di servizi pronti all'utilizzo.
{% endhint %}

# API Key manage

L'API Key `manage` è la chiave con cui potrai gestire i servizi tramite API e quindi fare qualsiasi operazione relativa ai servizi.

Attualmente esistono due tipi di chiavi `manage`:

* **master**: ne esiste solo una per ente e non ha alcune restrizioni di visibilità sui servizi;
* **di gruppo**: può essere utilizzata solo per gestire i servizi associati al gruppo di appartenenza.

{% hint style="info" %}
Sono le **uniche api-key** che potrai usare con le API appartenenti alla categoria `manage`, riconoscibili sia dal tag nella specifica openAPI che nel path.
{% endhint %}

## Recupera la chiave `manage`

#### Tramite Developer Portal

1. [**Accedi**](https://developer.io.italia.it/) al Developer Portal;
2. Nella colonna sinistra, seleziona **“Servizi”**;
3. Se sei abilitato, in alto troverai un box con la chiave `manage`, subito sotto le informazioni relative all'account;
4. Visualizza e copia la chiave per poterla usare nella tua integrazione.

{% hint style="warning" %}
Per utilizzare questa api-key tramite Developer Portal, è necessario avere l'[abilitazione alla gestione dei servizi](../../../abilitazioni/gestione-dei-servizi.md).
{% endhint %}

#### Tramite Area Riservata

1. [**Accedi**](https://selfcare.pagopa.it/) all'Area Riservata;
2. Seleziona l'ente per il quale vuoi operare dalla lista che ti viene mostrata;
3. Tra i prodotti attivi cerca App IO e clicca sul box relativo;
4. Nella **Panoramica** troverai subito le API Key manage che puoi copiare;
5. Se vuoi gestire le API Key manage, puoi selezionare la voce di menù **"API Key"** per poterle copiare o ruotare.

## Sezione "I tuoi Enti"

Se sei il delegato di un Ente Aggregatore troverai disponibile la sezione "I tuoi Enti". In essa potrai visualizzare e gestire le chiavi `manage` degli Enti. Nello specifico:

* puoi ricercare un Ente specifico utilizzando la funzionalità di ricerca "Cerca per nome"
* puoi visualizzare l'API key `manage` primaria e/o l'API key `manager` secondaria di uno specifico Ente
* puoi copiare l'API key `manage` primaria e/o l'API key `manager` secondaria di uno specifico Ente
* puoi rigenerare l'API key `manage` primaria e/o l'API key `manager` secondaria di uno specifico Ente

È inoltre a disposizione una funzionalità di esportazione massiva di tutte le API Key `manage` degli enti presenti in lista. Puoi attivarla utilizzando il pulsante "**Genera file .json**". Nello specifico:

* questa funzionalità esporta un file JSON, protetto da password di tua scelta
* il file conterrà tutte le API Key `manage` primaria e secondaria degli Enti che vedi in lista
* la password deve essere di almeno 12 caratteri, con almeno una maiuscola ed un numero. Non è possibile recuperare tale password, quindi assicurati di ricordartela prima di utilizzarla
* la generazione del file non è immediata. A seconda del numero di Enti presente in lista, ci possono volere da qualche secondo a svariati minuti
* durante la generazione, non è possibile richiedere una nuova generazione ed è necessario attendere che l'operazione in corso sia completata
* ad operazione completata, potrai scaricare il file (protetto dalla password da te scelta) utilizzando il pulsante "**Scarica file .json**"
* il file rimarrà a disposizione per un massimo di 24 ore, dopodiché non sarà più possibile scaricarlo
* in qualsiasi momento rimane possibile richiedere una nuova generazione, a patto che non ce ne sia già una precedente in corso
* se il processo di generazione dovesse incorrere in qualche errore, sarai notificato mediante un messaggio in cima alla pagina

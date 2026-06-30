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

#### Tramite Area Riservata

Se sei il delegato di un Ente Aggregatore troverai disponibile la sezione "I tuoi Enti". Qui potrai visualizzare e gestire le chiavi `manage` degli Enti. Nello specifico:

* puoi ricercare un Ente specifico utilizzando la funzionalità "Cerca per nome"
* puoi visualizzare l'API key `manage` primaria e/o l'API key `manager` secondaria di uno specifico Ente
* puoi copiare l'API key `manage` primaria e/o l'API key `manager` secondaria di uno specifico Ente
* puoi rigenerare l'API key `manage` primaria e/o l'API key `manager` secondaria di uno specifico Ente

È inoltre a disposizione una funzionalità di esportazione massiva di tutte le API Key `manage` degli enti presenti in lista. Puoi attivarla utilizzando il pulsante "**Genera file .json**". Nello specifico:

* questa funzionalità esporta un file JSON, protetto da password di tua scelta
* il file conterrà tutte le API Key `manage` primarie e secondarie degli Enti che vedi in lista
* la password deve essere di almeno 12 caratteri e deve contenere almeno una lettera maiuscola ed un numero (non sarà possibile recuperare tale password, quindi assicurati di ricordartela prima di impostarla)
* la generazione del file non è immediata, a seconda del numero di Enti presente in lista ci possono volere da qualche secondo ad alcuni minuti
* durante la generazione del file non è possibile richiederne una nuova ed è necessario attendere che l'operazione in corso sia completata
* ad operazione completata potrai scaricare il file (protetto dalla password da te scelta) utilizzando il pulsante "**Scarica file .json**"
* il file rimarrà a disposizione per un massimo di 24 ore, dopodiché non sarà più possibile scaricarlo
* in qualsiasi momento rimane possibile richiedere una nuova generazione, a patto che non ce ne sia già una precedente in corso
* se il processo di generazione dovesse incorrere in qualche errore, sarai notificato mediante un messaggio in cima alla pagina

{% hint style="danger" %}
## **Responsabilità e sicurezza nell’utilizzo delle API Key manage.**

Ricorda che la sezione “I tuoi Enti” è accessibile esclusivamente ai soggetti legittimamente abilitati dall’Ente Aggregatore, secondo i ruoli e i permessi attribuiti. L’Ente Aggregatore è responsabile della corretta attribuzione, gestione e revoca delle abilitazioni dei propri Delegati, nonché dell’utilizzo delle API Key `manage` degli Enti aggregati da parte degli stessi.&#x20;

Le API Key `manage` devono essere utilizzate esclusivamente per finalità connesse alla gestione tecnica dei Servizi degli Enti aggregati sull'app IO e devono essere custodite adottando misure adeguate a prevenirne l’accesso, la diffusione o l’utilizzo non autorizzati. È vietata la condivisione delle chiavi con soggetti non autorizzati o il loro utilizzo per finalità diverse da quelle consentite.&#x20;

Le operazioni di visualizzazione, copia, rigenerazione, esportazione e download delle API Key `manage` potranno essere tracciate da PagoPA per finalità di sicurezza, audit, prevenzione di utilizzi non autorizzati e gestione di eventuali incidenti o contestazioni.

La rigenerazione di una API Key `manage` può incidere sul funzionamento delle integrazioni tecniche dell’Ente aggregato. Il Delegato è pertanto tenuto a procedere solo se autorizzato e previa verifica degli impatti tecnici dell’operazione.&#x20;

L’esportazione massiva delle API Key `manage` deve essere effettuata solo ove strettamente necessario. Il file esportato deve essere conservato in modo sicuro, accessibile esclusivamente a soggetti autorizzati e non trasmesso tramite canali non sicuri.&#x20;

In caso di cessazione o modifica del rapporto di aggregazione, l’Ente Aggregatore è tenuto a non utilizzare ulteriormente le API Key `manage` riferite agli Enti non più gestiti e ad adottare le misure tecniche e organizzative necessarie alla relativa protezione.
{% endhint %}

---
description: Questa pagina descrive la procedura operativa per creare uno stream.
---

# Creazione di uno stream

Lo stream raccoglie gli eventi e i cambiamenti di stato prodotti dalle notifiche del mittente.

**NOTA**: La registrazione degli eventi inizia a partire dal momento della creazione dello stream.

## Creazione di uno stream attraverso comando curl

Creare lo stream andando a configurare l'**eventType** con uno dei seguenti:

* **STATUS:** per registrare gli eventi di cambiamento di stato delle notifiche
* **TIMELINE:** per registrare gli eventi di timeline.

Nel campo **groups** dovranno essere inseriti uno o più gruppi tramite il l'id del gruppo, in modo da realizzare una segregazione tra gli eventi delle notifiche che appartengono solo ai gruppi specificati.

All'interno del **filterValues** è possibile inserire un array di eventi di tipo **STATUS/TIMELINE** che verranno utilizzati per filtrare e registrare nello stream solo questi eventi; se invece si inserisce un array con il valore `DEFAULT`, andranno riportati gli eventi che hanno ripercussione sul cambiamento di stato del workflow o che riportano dati di interesse per il mittente. Qui è possibile vedere quali eventi verranno restituiti: [Stream di timeline 2.4](stream-di-timeline/).

Lanciare il seguente comando:

```bash
curl --location 'https://<baseurlAmbiente>/delivery-progresses/v2.8/streams' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-api-key: <apiKey>' \
--header 'Authorization: Bearer <PDNDVoucher>' \
--data '{
    "title": "<title>",
    "eventType": "<eventType>",
    "groups": [
        "<groupId>"
    ],
    "filterValues": [
        "<filterValues>"
    ],
    "replacedStreamId" :"<replacedStreamId>"
}'
```

**NOTA:** sostituire i seguenti:

* **`<baseurlAmbiente>`:** inserire la url dell'ambiente di riferimento, nel caso di UAT è il seguente: **https://api.uat.notifichedigitali.it**
* **`<apiKey>`:** inserire la apiKey dell'Ente di riferimento, precedentemente generata su PND
* **`<PDNDVoucher>`:** inserire inserire il Voucher generato su **PDND Interoperabilità,** assicurandosi che non sia scaduto
* **`<title>`:** inserire un titolo da attribuire a questo stream
* **`<groupId>`:** Id del gruppo per ottenere la segregazione tra gli eventi delle notifiche che appartengono solo ai gruppi specificati
* **`<eventType>`:** inserire la tipologia di stream a scelta tra **STATUS** e **TIMELINE**
* **`<filterValues>`:** inserire un array di eventi che verranno utilizzati come filtro. Se valorizzato con array vuoto: `DEFAULT` lo stream registrerà tutti gli eventi eventi che hanno ripercussione sul cambiamento di stato del workflow o che riportano dati di interesse per il mittente
* **`<replacedStreamId>`:** campo opzionale, serve per sostituire lo stream indicato tramite streamId da quello che verrà creato.

Nella response di questo servizio, si otterrà il seguente payload:

```json
{
    "title": "<title>",
    "eventType": "<eventType>",
    "groups": [
        "<groupId>"
    ],
    "filterValues": [
        "<filterValues>"
    ],
    "streamId": "<streamId>",
    "activationDate": "<activationDate>",
    "disabledDate": null,
    "version": "<version>"
}
```

* **`<streamId>`:** id dello stream che viene autogenerato dal servizio
* **`<activationDate>`:** data di attivazione dello stream autogenerata dal servizio
* **`<version>`:** versione dello stream creato

**NOTA:** Una volta creata la stream verranno registrati tutti gli eventi emessi dalle notifiche a seguito della loro creazione, di conseguenza si consiglia di creare le stream prima di inserire le notifiche.

## Creazione di uno stream attraverso Postman

**NOTA:** prima di procedere con l'inserimento e la creazione dello stream utilizzando Postman, assicurarsi di aver correttamente importato le definizioni delle API su Postman ed aver configurato l'ambiente di test seguendo i passaggi descritti al seguente link:

{% content-ref url="../generazione-client-e-definizioni-delle-api.md" %}
[generazione-client-e-definizioni-delle-api.md](../generazione-client-e-definizioni-delle-api.md)
{% endcontent-ref %}

Creare lo stream andando a configurare l'**eventType** con uno dei seguenti:

* **STATUS:** per registrare gli eventi di cambiamento di stato delle notifiche
* **TIMELINE:** per registrare gli eventi di timeline.

Nel campo **groups** dovranno essere inseriti uno o più gruppi tramite il l'id del gruppo, in modo da realizzare una segregazione tra gli eventi delle notifiche che appartengono solo ai gruppi specificati.

All'interno del **filterValues** è possibile inserire un array di eventi di tipo **STATUS/TIMELINE** che verranno utilizzati per filtrare e registrare nello stream solo questi eventi; se invece si inserisce un array con il valore `DEFAULT`, vanno riportati gli eventi che hanno ripercussione sul cambiamento di stato del workflow o che riportano dati di interesse per il mittente. Qui è possibile vedere quali eventi verranno restituiti: [Stream di timeline 2.4](stream-di-timeline/).

\
Aprire la scheda **Crea nuovo stream di eventi** ed inserire nel body il seguente payload:

<figure><img src="../../../send/knowledge-base/v2.5/.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>

**-NOTA:** sostituire i seguenti:

* **`<baseurlAmbiente>`:** inserire la url dell'ambiente di riferimento, nel caso di UAT è il seguente: **https://api.uat.notifichedigitali.it**
* **`<apiKey>`:** inserire la apiKey dell'Ente di riferimento, precedentemente generata su PND
* **`<PDNDVoucher>`:** inserire inserire il Voucher generato su **PDND Interoperabilità,** assicurandosi che non sia scaduto
* **`<title>`:** inserire un titolo da attribuire a questo stream
* **`<groupId>`:** Id del gruppo per ottenere la segregazione tra gli eventi delle notifiche che appartengono solo ai gruppi specificati
* **`<eventType>`:** inserire la tipologia di stream a scelta tra **STATUS** e **TIMELINE**
* **`<filterValues>`:** inserire un array di eventi che verranno utilizzati come filtro. Se valorizzato con array vuoto: `DEFAULT` lo stream registrerà tutti gli eventi eventi che hanno ripercussione sul cambiamento di stato del workflow o che riportano dati di interesse per il mittente
* **`<replacedStreamId>`:** campo opzionale, serve per sostituire lo stream indicato tramite streamId da quello che verrà creato.

Nella response di questo servizio, si otterrà il seguente payload:\\

<figure><img src="../../../send/knowledge-base/v2.5/.gitbook/assets/image (52).png" alt=""><figcaption></figcaption></figure>

* **`<streamId>`:** id dello stream che viene autogenerato dal servizio
* **`<activationDate>`:** data di attivazione dello stream autogenerata dal servizio

**NOTA:** Una volta creata la stream verranno registrati tutti gli eventi emessi dalle notifiche a seguito della loro creazione, di conseguenza si consiglia di creare le stream prima di inserire le notifiche.

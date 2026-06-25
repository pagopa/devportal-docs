# Cosa mostrare in una richiesta di pagamento

La schermata della richiesta di pagamento è la più importante dell’esperienza: è il **momento in cui l’utente valuta l’urgenza e la natura del pagamento**.&#x20;

Una presentazione incompleta, ambigua o poco chiara può compromettere la fiducia nel servizio e ridurre il tasso di completamento.&#x20;

Di seguito si elencano gli elementi minimi da includere e le buone pratiche per una presentazione efficace.

## Dettagli della richiesta di pagamento

{% hint style="info" %}
**Perché è importante avere un oggetto del pagamento chiaro e completo?**\
A differenza di un avviso già noto, una nuova richiesta di pagamento richiede massima chiarezza sull'oggetto della spesa. Solo una descrizione precisa permette all'utente di verificare l'importo e procedere con fiducia al pagamento.
{% endhint %}

{% hint style="info" %}
Per gli aspetti tecnici, [consulta anche il manuale operativo](https://developer.pagopa.it/srtp/guides/manuale-operativo-srtp/guida-tecnica/riferimento-ai-messaggi-dataset-iso-20022).
{% endhint %}

### Nome dell'Ente creditore

{% tabs %}
{% tab title="Descrizione" %}
Nome completo e riconoscibile dell'ente.
{% endtab %}

{% tab title="Esempio" %}
Comune di Milano
{% endtab %}

{% tab title="Dove trovare l'informazione" %}
All'interno del JSON, usa il campo `Document.CdtrPmtActvtnReq.PmtInf.CdtTrfTx.Cdtr.Nm`
{% endtab %}
{% endtabs %}

### Importo

{% tabs %}
{% tab title="Descrizione" %}
L'importo del dovuto.

{% hint style="warning" %}
Eventuali commissioni per il pagamento vanno mostrate nei passaggi successivi, indicando chiaramente che non sono legate né all'Ente creditore né alla piattaforma pagoPA.
{% endhint %}
{% endtab %}

{% tab title="Esempio" %}
150,00€
{% endtab %}

{% tab title="Dove trovare l'informazione" %}
All'interno del JSON, usa il campo `Document.CdtrPmtActvtnReq.PmtInf.CdtTrfTx.Amt.InstdAmt`
{% endtab %}
{% endtabs %}

### Scadenza

{% tabs %}
{% tab title="Descrizione" %}
Se applicabile, indica la data ultima entro cui poter pagare il debito.
{% endtab %}

{% tab title="Esempio" %}
Da pagare entro il 31/07/2026
{% endtab %}

{% tab title="Dove trovare l'informazione" %}
All'interno del JSON, usa il campo `Document.CdtrPmtActvtnReq.PmtInf[0].XpryDt.Dt`  per recuperare la data.
{% endtab %}
{% endtabs %}

### Oggetto del pagamento

{% tabs %}
{% tab title="Descrizione" %}
Motivazione chiara e comprensibile del perché c'è un pagamento atteso.
{% endtab %}

{% tab title="Esempio" %}
Tari 2025 - Prima rata
{% endtab %}

{% tab title="Dove trovare l'informazione" %}
All'interno del JSON, usa il campo `Document.CdtrPmtActvtnReq.PmtInf.CdtTrfTx.RmtInf.Ustrd`&#x20;
{% endtab %}
{% endtabs %}

### Codice avviso

{% tabs %}
{% tab title="Descrizione" %}
Il codice univoco dell'avviso di pagamento pagoPA, di 18 cifre. Può essere utile in caso di assistenza.
{% endtab %}

{% tab title="Esempio" %}
123456789012345678
{% endtab %}

{% tab title="Dove trovare l'informazione" %}
All'interno del JSON, usa il campo `Document.CdtrPmtActvtnReq.PmtInf.CdtTrfTx.PmtId.EndToEndId`
{% endtab %}
{% endtabs %}

### Codice Fiscale Ente Creditore

{% tabs %}
{% tab title="Descrizione" %}
Il Codice Fiscale o Partita IVA dell'Ente Creditore, di 11 cifre. Può essere utile in caso di assistenza.
{% endtab %}

{% tab title="Esempio" %}
15376371009
{% endtab %}

{% tab title="Dove trovare l'informazione" %}
All'interno del JSON, usa il campo `Document.CdtrPmtActvtnReq.PmtInf.CdtTrfTx.Cdtr.Id.OrgId.Othr.Id`
{% endtab %}
{% endtabs %}

***

## Contenuti dinamici e azioni richieste

Lo stato del pagamento deve essere ben visibile e le azioni che l'utente può compiere devono essere determinate proprio da quest'ultimo.&#x20;

Per esempio: una richiesta in stato "da pagare" avrà la CTA di pagamento ben visibile; una richiesta "già pagata" permetterà all'utente di scaricare la ricevuta.

{% hint style="success" %}
Consulta gli [Stati di una richiesta di pagamento](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/F3zN3IJri7gWaxEnE8Fu/~/changes/4/progettare-lesperienza-di-pagamento/gestione-delle-richieste-di-pagamento/gli-stati-di-una-richiesta-di-pagamento) per approfondire questo tema.
{% endhint %}

## Contatti dell'ente

{% hint style="info" %}
Siamo al lavoro per definire un'anagrafica dei canali di assistenza ufficiali forniti dagli Enti creditori.
{% endhint %}

Spiega all'utente che in caso di dati incongruenti o contesto mancante, è bene rivolgersi direttamente all'ente creditore che ha inviato la richiesta di pagamento—perché né l'assistenza di pagoPA né quella della banca possono fornire informazioni in merito.&#x20;

***

## Errori da evitare

* Mostrare solo il codice dell'avviso senza contesto.
* Utilizzare diciture tecniche o poco comprensibili (es. “codice fiscale dell’ente erogatore”).
* Nascondere all’utente informazioni sulla provenienza della richiesta.

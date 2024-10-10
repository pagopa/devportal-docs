# Dati obbligatori

Per poter pubblicare un **servizio in produzione** è **obbligatorio** inserire queste informazioni:

1. [`name`](attributi.md#service\_name)
2. [`description`](service-metadata.md#description)
3. `organization`
   1. [`organization_name`](attributi.md#organization\_name)
   2. [`organization_fiscal_code`](attributi.md#organization\_fiscal\_code)
4. [`service_metadata`](service-metadata.md)
   1. [`scope`](service-metadata.md#scope)
   2. [`privacy_url`](service-metadata.md#privacy\_url)
   3. almeno uno o più canali di contatto diretto a cui i cittadini possono chiedere assistenza ([`phone`](service-metadata.md#phone), [`email`](service-metadata.md#email), [`pec`](service-metadata.md#pec), [`support_url`](service-metadata.md#support\_url))

È inoltre **obbligatorio** [caricare il logo dell’organizzazione](../../../api-e-specifiche/api-servizi/upload-organization-logo.md). Questo deve:

* avere una dimensione di **300x300**;
* essere in **formato png**;
* avere **sfondo bianco o trasparente**.

{% hint style="warning" %}
Qualora il servizio non abbia tutti i dati obbligatori, sarà presente nella lista di IO con la dicitura “in arrivo”. I servizi in questo stato non possono inviare messaggi ai cittadini.
{% endhint %}

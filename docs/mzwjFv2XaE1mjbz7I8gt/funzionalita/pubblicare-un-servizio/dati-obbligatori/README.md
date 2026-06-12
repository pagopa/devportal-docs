# Dati obbligatori

Per poter pubblicare un **servizio in produzione** è **obbligatorio** inserire queste informazioni:

1. [`service_name`](attributi.md#service\_name)
2. [`organization_name`](attributi.md#organization\_name)
3. [`organization_fiscal_code`](attributi.md#organization\_fiscal\_code)
4. [`department_name`](attributi.md#department\_name)
5. [`authorized_cidrs`](attributi.md#authorized\_cidrs)
6. [`is_visible`](attributi.md#is\_visible)
7. [`max_allowed_payment_amount`](attributi.md#max\_allowed\_payment\_amount) (solo per servizi che prevedono l’invio di avvisi pagoPA)
8. [`service_metadata`](service-metadata.md)
   1. [`scope`](service-metadata.md#scope)
   2. [`privacy_url`](service-metadata.md#privacy\_url)
   3. [`description`](service-metadata.md#description)
   4. almeno uno o più canali di contatto diretto a cui i cittadini possono chiedere assistenza ([`phone`](service-metadata.md#phone), [`email`](service-metadata.md#email), [`pec`](service-metadata.md#pec), [`support_url`](service-metadata.md#support\_url))

È inoltre **obbligatorio** [caricare il logo dell’organizzazione](../../../api/api-servizi/upload-organization-logo.md). Questo deve:

* avere una dimensione di **300x300**;
* essere in **formato png**;
* avere **sfondo bianco o trasparente**.

{% hint style="warning" %}
Qualora il servizio non abbia tutti i dati obbligatori, sarà presente nella lista di IO con la dicitura “in arrivo”. I servizi in questo stato non possono inviare messaggi ai cittadini.
{% endhint %}

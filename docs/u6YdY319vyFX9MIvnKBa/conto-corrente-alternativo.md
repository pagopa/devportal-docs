# Conto corrente alternativo

Il PSP per gestire l’operazione di pagamento può utilizzare un IBAN di un conto corrente alternativo al conto di accredito indicato nel tag _IBAN_ di ogni _transfer_.

La scelta di utilizzare il conto alternativo a quello di accredito è demandata al PSP in base alle proprie necessità operative, purché preventivamente dichiarate nella propria configurazione e purché la scelta rimanga coerente per tutti i singoli versamenti.

In un caso d’uso notevole nella prassi tali campi sono valorizzati con l'IBAN del conto corrente postale, in alternativa a quello del conto bancario specificato nel tag _IBAN_ di ogni _transfer_.&#x20;

Nel _transfer_ il dato è facoltativo per gestire il caso in cui l’EC effettivamente non disponga di un conto corrente alternativo; viceversa, se presente, il conto corrente deve essere censito sulla piattaforma pagoPA, per essere gestito correttamente in fase di pagamento.

Di seguito i dettagli per inserire l'informazione del conto corrente alternativo, che deve essere associata al _transfer_

### `IBANAPPOGGIO`

{% tabs %}
{% tab title="Key" %}
`IBANAPPOGGIO`
{% endtab %}

{% tab title="Definizione" %}
IBAN del conto corrente alternativo al conto di accredito
{% endtab %}

{% tab title="Tipo" %}
Stringa
{% endtab %}

{% tab title="Dimensioni" %}
Massimo 140 caratteri, spazi compresi.
{% endtab %}

{% tab title="Obbligatorio" %}
No
{% endtab %}
{% endtabs %}

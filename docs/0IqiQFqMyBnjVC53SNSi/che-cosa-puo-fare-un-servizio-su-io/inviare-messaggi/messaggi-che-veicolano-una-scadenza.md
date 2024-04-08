# Messaggi che veicolano una scadenza

Questi messaggi contengono una **data di scadenza o da ricordare**, come il promemoria della scadenza di un documento da rinnovare o la data entro cui si può richiedere un bonus. Per questo tipo di messaggi bisogna utilizzare il campo `due_date` nel payload del messaggio. Il formato data supportato dal sistema è UTC (ISO 8601).

Oltre alla possibilità di conversione manuale, esistono alcuni siti che permettono di **convertire automaticamente** le date nel formato desiderato, come ad esempio [DenCode Converter](https://dencode.com/date/iso8601) o [Timestamp Converter](https://www.timestamp-converter.com/).&#x20;

{% hint style="warning" %}
**Attenzione alla data impostata**

Se la data di scadenza non prevede un orario specifico, solitamente si fa riferimento alla fine della giornata.

**Esempio:**

✅ 12 gennaio (23:59:59) --> L'utente può pagare entro la giornata del 12 gennaio

❌ 12 gennaio (00:00:01) --> L'utente può pagare entro la giornata dell'11 gennaio
{% endhint %}

{% hint style="info" %}
Per maggiori informazioni sul formato della data, consulta la sezione dedicata nella [Guida tecnica](https://docs.pagopa.it/io-guida-tecnica/api-e-specifiche/api-messaggi/submit-a-message-passing-the-user-fiscal\_code-in-the-request-body#due\_date) di IO.&#x20;
{% endhint %}

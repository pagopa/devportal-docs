# Gestione degli errori

In questa sezione sono elencate le casistiche più comuni che impediscono di pagare un avviso a partire dalla richiesta di pagamento e la tipologia di errore che è necessario restituire all'utente.

## **Errori relativi agli enti creditori**

{% hint style="info" %}
Questi errori vengono restituiti dalla piattaforma pagoPA, dopo che l'utente ha deciso di procedere con il pagamento dell'avviso.
{% endhint %}

<div align="left"><figure><img src="../../../.gitbook/assets/image (53).png" alt="" width="375"><figcaption><p>Esempio di come mostrare agli utenti gli errori restituiti dalla piattaforma pagoPA.</p></figcaption></figure></div>

### L'Ente creditore non risponde

{% tabs %}
{% tab title="Titolo" %}
**L'ente creditore sta avendo problemi nella risposta**
{% endtab %}

{% tab title="Azione suggerita" %}
Invitare l'utente ad attendere, o a rivolgersi all'Ente creditore
{% endtab %}

{% tab title="Errori legati a questo caso d'uso" %}
`PPT_STAZIONE_INT_PA_IRRAGGIUNGIBILE`\
`PPT_STAZIONE_INT_PA_TIMEOUT`\
`PPT_STAZIONE_INT_PA_ERRORE_RESPONSE`\
`PPT_IBAN_NON_CENSITO`\
`PAA_SINTASSI_EXTRAXSD`\
`PAA_SINTASSI_XSD`\
`PAA_ID_DOMINIO_ERRATO`\
`PAA_ID_INTERMEDIARIO_ERRATO`\
`PAA_STAZIONE_INT_ERRATA`\
`PAA_ATTIVA_RPT_IMPORTO_NON_VALIDO PPT_ERRORE_EMESSO_DA_PAA`\
`PAA_SYSTEM_ERROR`
{% endtab %}
{% endtabs %}

### C'è già un tentativo di pagamento in corso

{% tabs %}
{% tab title="Titolo" %}
**C'è già un pagamento in corso, riprova più tardi**
{% endtab %}

{% tab title="Azione suggerita" %}
Invitare l'utente ad attendere fino a 15 minuti e, se il problema persiste, contattare l'assistenza del PSP
{% endtab %}

{% tab title="Errori legati a questo caso d'uso" %}
`PAA_PAGAMENTO_IN_CORSO`

`PPT_PAGAMENTO_IN_CORSO`
{% endtab %}
{% endtabs %}

### L'avviso è scaduto

{% tabs %}
{% tab title="Titolo" %}
**L'avviso è scaduto e non è più possibile pagarlo**
{% endtab %}

{% tab title="Azione suggerita" %}
Invitare l'utente a rivolgersi all'Ente creditore
{% endtab %}

{% tab title="Errori legati a questo caso d'uso" %}
`PAA_PAGAMENTO_SCADUTO`
{% endtab %}
{% endtabs %}

### L'avviso è stato revocato dall'ente

{% tabs %}
{% tab title="Titolo" %}
**L'Ente Creditore ha revocato questo avviso**
{% endtab %}

{% tab title="Azione suggerita" %}
Invitare l'utente a rivolgersi all'Ente creditore
{% endtab %}

{% tab title="Errori legati a questo caso d'uso" %}
`PAA_PAGAMENTO_ANNULLATO`
{% endtab %}
{% endtabs %}

### L'avviso è stato già pagato

{% tabs %}
{% tab title="Titolo" %}
**Questo avviso è stato già pagato**
{% endtab %}

{% tab title="Azione suggerita" %}
Se il pagamento è avvenuto sul canale del PSP, invitare l'utente a consultare la sezione relativa alle ricevute di pagamento.
{% endtab %}

{% tab title="Errori legati a questo caso d'uso" %}
`PAA_PAGAMENTO_DUPLICATO`  <br>

`PPT_PAGAMENTO_DUPLICATO`
{% endtab %}
{% endtabs %}

### L'avviso non è stato trovato

{% tabs %}
{% tab title="Titolo" %}
**Non riusciamo a trovare l'avviso pagoPA**
{% endtab %}

{% tab title="Azione suggerita" %}
Invitare l'utente a rivolgersi all'Ente creditore
{% endtab %}

{% tab title="Errori legati a questo caso d'uso" %}
`PAA_PAGAMENTO_SCONOSCIUTO`
{% endtab %}
{% endtabs %}

### I dati dell'avviso non sono corretti

{% tabs %}
{% tab title="Titolo" %}
**I dati dell'avviso pagoPA non sono corretti**
{% endtab %}

{% tab title="Azione suggerita" %}
Invitare l'utente a rivolgersi all'Ente creditore
{% endtab %}

{% tab title="Errori legati a questo caso d'uso" %}
`PPT_SINTASSI_EXTRAXSD`\
`PPT_SINTASSI_XSD`\
`PPT_DOMINIO_SCONOSCIUTO`\
`PPT_STAZIONE_INT_PA_SCONOSCIUTA`
{% endtab %}
{% endtabs %}

### Altri errori

{% tabs %}
{% tab title="Titolo" %}
**C'è un problema tecnico con questo avviso**
{% endtab %}

{% tab title="Azione suggerita" %}
Invitare l'utente ad aprire una segnalazione sui canali di assistenza del Service Provider.
{% endtab %}

{% tab title="Errori legati a questo caso d'uso" %}
`PPT_PSP_SCONOSCIUTO`\
`PPT_PSP_DISABILITATO`\
`PPT_INTERMEDIARIO_PSP_SCONOSCIUTO`\
`PPT_INTERMEDIARIO_PSP_DISABILITATO`\
`PPT_CANALE_SCONOSCIUTO`\
`PPT_CANALE_DISABILITATO`\
`PPT_AUTENTICAZIONE`\
`PPT_AUTORIZZAZIONE`\
`PPT_DOMINIO_DISABILITATO`\
`PPT_INTERMEDIARIO_PA_DISABILITATO`\
`PPT_STAZIONE_INT_PA_DISABILITATA`\
`PPT_CODIFICA_PSP_SCONOSCIUTA`\
`PPT_SEMANTICA`\
`PPT_SYSTEM_ERROR`\
`PAA_SEMANTICA`
{% endtab %}
{% endtabs %}


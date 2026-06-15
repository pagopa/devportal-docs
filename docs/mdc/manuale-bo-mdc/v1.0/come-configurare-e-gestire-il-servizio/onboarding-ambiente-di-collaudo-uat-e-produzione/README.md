# Onboarding Ambiente di Collaudo (UAT) e Produzione

L'onboarding in ambiente UAT è il primo passo operativo e permette di verificare la configurazione tecnica prima di replicarla in produzione. Si tratta di un ambiente di test. \
Per procedere con l'accesso alla configurazione del Servizio è necessario disporre di:&#x20;

{% stepper %}
{% step %}
<mark style="color:blue;">Accesso all’Area Riservata pagoPA</mark>
{% endstep %}

{% step %}
<mark style="color:blue;">Profilo autorizzato alla gestione del servizio</mark>
{% endstep %}

{% step %}
<mark style="color:blue;">Endpoint applicativi forniti dal team tecnico del PSP</mark>
{% endstep %}

{% step %}
<mark style="color:blue;">Credenziali OAuth2 (Client ID e Client Secret)</mark>
{% endstep %}

{% step %}
<mark style="color:blue;">Deep Link applicativi per Android, iOS e Web</mark>
{% endstep %}
{% endstepper %}

## Configurazione del servizio

La sezione "**Configurazione del Servizio**" viene attivata nel momento in cui un Ente/PSP accede per la prima volta al BackOffice in un determinato ambiente (Collaudo o Produzione) e non risulta ancora registrato.&#x20;

La maschera consente di configurare gli endpoint necessari alla ricezione dei Messaggi di Cortesia e gli eventuali deep link utilizzati per il reindirizzamento dell’utente verso l’applicazione di pagamento. \
La configurazione è suddivisa in due step, visibili nella barra di progressione in alto nella pagina:

* [**1  - Configurazione Endpoint e deep link**](endpoint-e-deep-link.md)
* [**2  - Credenziali**](credenziali.md)

<figure><img src="../../.gitbook/assets/onboarding_UAT_MDC_confg.servizio.png" alt=""><figcaption></figcaption></figure>




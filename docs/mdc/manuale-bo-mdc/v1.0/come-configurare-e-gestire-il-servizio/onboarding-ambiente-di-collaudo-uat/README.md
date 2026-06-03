# Onboarding Ambiente di Collaudo (UAT)

L'onboarding in ambiente UAT è il primo passo operativo e permette di verificare la configurazione tecnica prima di replicarla in produzione. Si tratta di un ambiente di test. \
Per procedere con l'accesso alla configurazione del servizio è necessario disporre di:&#x20;

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

### &#x20;<mark style="color:red;">Panoramica del Servizio</mark>

<mark style="color:red;">La pagina Panoramica rappresenta il punto di ingresso al servizio. Da questa schermata il PSP può verificare lo stato della configurazione, identificare l’ambiente selezionato (UAT o Produzione) e avviare la procedura di configurazione tramite il pulsante 'Configura il servizio'.</mark>\
\ <mark style="color:red;">Il menu laterale consente l’accesso alle principali funzionalità:</mark> <mark style="color:red;"></mark><mark style="color:red;">**Panoramica**</mark><mark style="color:red;">,</mark> <mark style="color:red;"></mark><mark style="color:red;">**Configurazione del Servizio**</mark> <mark style="color:red;"></mark><mark style="color:red;">e</mark> <mark style="color:red;"></mark><mark style="color:red;">**Credenziali**</mark><mark style="color:red;">.</mark>

{% hint style="warning" %}
In ambiente di Collaudo (UAT) è sempre presente un banner in cima alla pagina con il messaggio 'Attenzione: i dati non devono essere reali'. Utilizzare esclusivamente dati di test.
{% endhint %}

## Configurazione del servizio

La sezione "**Configurazione del Servizio**" viene attivata nel momento in cui un Ente/PSP accede per la prima volta al BackOffice in un determinato ambiente (Collaudo o Produzione) e non risulta ancora registrato.&#x20;

La maschera consente di configurare gli endpoint necessari alla ricezione dei Messaggi di Cortesia e gli eventuali deep link utilizzati per il reindirizzamento dell’utente verso l’applicazione di pagamento. \
La configurazione è suddivisa in due step, visibili nella barra di progressione in alto nella pagina:

* **1  - Configurazione Endpoint e deep link**
* **2  - Credenziali**

<figure><img src="../../.gitbook/assets/onboarding_UAT_MDC_confg.servizio.png" alt=""><figcaption></figcaption></figure>



<mark style="background-color:red;">(qui si può linkare la sottopagina)</mark>




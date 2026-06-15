# Endpoint e Deep link

### Configurazione Endpoint

La sezione "**Endpoint e Deep link”** rappresenta il primo step della configurazione del Servizio "**Messaggi di Cortesia**"  e permette di configurare gli URL che PagoPA S.p.A. utilizzerà per l’invio dei messaggi di cortesia destinati agli Utenti.

La schermata permette di definire:

* URL per ricezione messaggi di cortesia (webhook)
* URL di autenticazione
* Tipo di autenticazione (OAuth2)

Deep Link:

* Android
* iOS
* Web

#### Endpoint

<figure><img src="../../.gitbook/assets/FireShot Capture 011 - mdc backoffice - [mdc.uat.cstar.pagopa.it] (1).png" alt=""><figcaption></figcaption></figure>

<p align="center"><em>Figura- Configurazione Endpoint ambiente collaudo</em></p>

{% tabs %}
{% tab title="URL per ricezione messaggi di cortesia (webhook) *" %}
**Descrizione**\
Campo obbligatorio che identifica l’endpoint HTTPS esposto dal PSP per la ricezione dei messaggi di cortesia tramite meccanismo webhook.

**Formato atteso**

* URL HTTPS valido
* Endpoint pubblicamente raggiungibile
* Certificato TLS valido

**Esempio**

```
https://api.psp.it/mdc/webhook
```

**Controlli effettuati**

* presenza del protocollo HTTPS;
* validità sintattica URL;
* obbligatorietà del campo.

**Possibili errori**

* “Campo obbligatorio”
* URL non valido
* Endpoint non raggiungibile
{% endtab %}

{% tab title="URL di autenticazione *" %}
**Descrizione**\
Campo obbligatorio utilizzato per configurare l’endpoint OAuth2 necessario all’autenticazione delle chiamate verso il PSP.

**Formato atteso**

* URL HTTPS valido
* Endpoint OAuth2 accessibile

**Esempio**

```
https://auth.psp.it/oauth/token
```

**Controlli effettuati**

* validazione sintattica URL;
* verifica presenza protocollo HTTPS.

**Possibili errori**

* “Campo obbligatorio”
* URL non valido
{% endtab %}

{% tab title="Tipo di autenticazione" %}
**Descrizione**\
Campo informativo che indica il protocollo di autenticazione utilizzato dal sistema.

**Valore previsto**

```
OAuth2
```

**Nota operativa**\
Il valore risulta preconfigurato e non modificabile dall’utente.
{% endtab %}
{% endtabs %}

### Deep link

La configurazione del Deep link è necessaria per reindirizzare l'utente all'app del PSP per il pagamento. Sono disponibili due modalità selezionabili con il radio button.

<figure><img src="../../.gitbook/assets/FireShot Capture 013 - mdc backoffice - [mdc.uat.cstar.pagopa.it] (1).png" alt=""><figcaption></figcaption></figure>

<p align="center"><em>Figura- Configurazione Deep link ambiente collaudo</em></p>

{% hint style="info" %}
Se il PSP non ha un'app mobile, lasciare la checkbox deselezionata e procedere al passo successivo.
{% endhint %}

La sezione **“Configurazione deep link app”** consente di configurare i deep link utilizzati per reindirizzare l’utente verso l’applicazione del PSP durante il processo di pagamento.

È possibile configurare:

* deep link universale;
* deep link specifico per sistema operativo.

#### Deep link universale

**Descrizione**\
Opzione utilizzata per definire un unico schema di redirect valido per tutti i sistemi operativi supportati.

**Comportamento**

* il medesimo URL viene utilizzato indipendentemente dalla piattaforma utente;
* semplifica la gestione delle configurazioni multi-device.

#### Deep link specifico per SO

**Descrizione**\
Opzione che consente di definire deep link differenti in funzione del sistema operativo utilizzato dall’utente.

**Sistemi supportati**

* Android
* iOS
* Web

**Nota** \
Nella schermata in esame risulta selezionata l’opzione:

```
Deep link specifico per SO
```

#### Configurazione Android e iOS

{% tabs %}
{% tab title="Versione fallbackLink" %}
**Descrizione**\
Campo utilizzato per identificare la versione/configurazione del fallback link Android.

**Nota**\
Il campo può essere valorizzato secondo le convenzioni applicative del PSP.
{% endtab %}

{% tab title="URL Redirect *" %}
**Descrizione**\
URL utilizzato per il redirect dell’utente verso l’applicazione Android del PSP.

**Esempio**

```
pspapp://payment o pspappios://payment
```

oppure

```
https://app.psp.it/android/payment o https://app.psp.it/ios/payment
```

**Possibili errori**

* URL non valido
* Schema deeplink non riconosciuto
{% endtab %}

{% tab title="Versione" %}
**Descrizione**\
Funzione che consente di aggiungere ulteriori configurazioni/versioni del deep link Android o iOS
{% endtab %}
{% endtabs %}

Dopo aver compilato tutti i campi necessari, cliccando sul pulsante "Continua", il sistema valida i dati inseriti e avanza alla fase successiva di compilazione della wizard successiva relativa alle&#x20;

Il pulsante **“Continua”** consente di:

* validare i dati inseriti;
* salvare la configurazione dello step corrente;
* accedere allo step successivo “Credenziali”.

#### Comportamento atteso

In caso di validazione corretta:

* il sistema salva la configurazione;
* viene aperta la sezione successiva del wizard.

#### Possibili anomalie

* presenza campi obbligatori non valorizzati;
* URL non conformi;
* errori di validazione lato applicativo.

Di seguito un lista di valori come esempio:

| Campo                                            | Valore                                               |
| ------------------------------------------------ | ---------------------------------------------------- |
| URL per ricezione messaggi di cortesia (webhook) | https://uat-api.psp-demo.it/mdc/v1/messages/webhook  |
| URL di autenticazione                            | https://uat-auth.psp-demo.it/oauth2/token            |
| Tipo di autenticazione                           | OAuth2                                               |
| Android - Versione fallbackLink                  | 1.0.0                                                |
| Android - URL Redirect                           | https://uat-app.psp-demo.it/android/payment/callback |
| iOS - Versione fallbackLink                      | 1.0.0                                                |
| iOS - URL Redirect:                              | https://uat-app.psp-demo.it/ios/payment/callback     |
| Web - Versione fallbackLink:                     | 1.0.0                                                |
| Web - URL Redirect:                              | https://uat-pay.psp-demo.it/payment/redirect         |

# Copy of Onboarding Ambiente di Collaudo (UAT)

L'onboarding in ambiente UAT è il primo passo operativo e permette di verificare la configurazione tecnica prima da replicarla in produzione. Si tratta di un ambiente di test: tutti i dati inseriti NON devono essere reali.

{% hint style="warning" %}
In ambiente di Collaudo (UAT) è sempre presente un banner in cima alla pagina con il messaggio 'Attenzione: i dati non devono essere reali'. Utilizzare esclusivamente dati di test.
{% endhint %}

### Configurazione del servizio - Endopoint e Deep Link

La sezione "**Configurazione del Servizio**" viene attivata nel momento in cui un Ente/PSP accede per la prima volta al BackOffice in un determinato ambiente (Collaudo o Produzione) e non risulta ancora registrato.&#x20;

La maschera consente di configurare gli endpoint necessari alla ricezione dei Messaggi di Cortesia e gli eventuali deep link utilizzati per il reindirizzamento dell’utente verso l’applicazione di pagamento. La configurazione è suddivisa in due step, visibili nella barra di progressione in alta nella pagina:

* **Step 1  - Configurazione Endpoint**
* **Step 2  - Configurazione Deep link**

<figure><img src="../.gitbook/assets/Backoffice_uat_config-deeplink.png" alt=""><figcaption></figcaption></figure>

### Step 1 -  Configurazione Endpoint

La sezione **“Configurazione endpoint”** permette di configurare gli URL che pagoPA utilizzerà per l’invio dei messaggi di cortesia destinati agli utent.

<mark style="color:$info;">**URL per ricezione messaggi di cortesia (webhook) \***</mark>

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

***

<mark style="color:purple;">**URL di autenticazione \***</mark>

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

***

<mark style="color:purple;">**Tipo di autenticazione**</mark>

**Descrizione**\
Campo informativo che indica il protocollo di autenticazione utilizzato dal sistema.

**Valore previsto**

```
OAuth2
```

**Nota operativa**\
Il valore risulta preconfigurato e non modificabile dall’utente.

### Step 2 -  Configurazione Deep link

La configurazione del Deep link è necessaria per reindirizzare l'utente all'app del PSP per il pagamento. Sono disponibili due modalità selezionabili con il radio button.

{% hint style="info" %}
Se il PSP non ha un'app mobile, lasciare la checkbox deselezionata e procedere al passo successivo.
{% endhint %}

La sezione **“Configurazione deep link app”** consente di configurare i deep link utilizzati per reindirizzare l’utente verso l’applicazione del PSP durante il processo di pagamento.

È possibile configurare:

* deep link universale;
* deep link specifico per sistema operativo.

#### <mark style="color:purple;background-color:purple;">Deep link universale</mark>

**Descrizione**\
Opzione utilizzata per definire un unico schema di redirect valido per tutti i sistemi operativi supportati.

**Comportamento**

* il medesimo URL viene utilizzato indipendentemente dalla piattaforma utente;
* semplifica la gestione delle configurazioni multi-device.

***

#### <mark style="color:purple;">Deep link specifico per SO</mark>

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

***

#### <mark style="color:purple;">Configurazione Android</mark>

<mark style="color:purple;">Versione fallbackLink</mark>

**Descrizione**\
Campo utilizzato per identificare la versione/configurazione del fallback link Android.

**Nota**\
Il campo può essere valorizzato secondo le convenzioni applicative del PSP.

***

#### <mark style="color:purple;">URL Redirect \*</mark>

**Descrizione**\
URL utilizzato per il redirect dell’utente verso l’applicazione Android del PSP.

**Esempio**

```
pspapp://payment
```

oppure

```
https://app.psp.it/android/payment
```

**Possibili errori**

* URL non valido
* Schema deeplink non riconosciuto

***

#### Aggiungi versione

**Descrizione**\
Funzione che consente di aggiungere ulteriori configurazioni/versioni del deep link Android.

### Configurazione iOS

#### Versione fallbackLink

Campo equivalente alla configurazione Android per ambiente iOS.

***

#### URL Redirect \*

URL utilizzato per il redirect verso l’applicazione iOS del PSP.

**Esempio**

```
pspappios://payment
```

***

#### Aggiungi versione

Consente di aggiungere ulteriori configurazioni/versioni del deep link iOS.

***

**Configurazione Web**

#### Versione fallbackLink

Campo utilizzato per identificare la configurazione fallback web.

#### URL Redirect

URL utilizzato per il redirect dell’utente verso applicazioni o pagine web del PSP.

**Esempio**

```
https://pay.psp.it/payment
```

***

#### Aggiungi versione

Consente di aggiungere configurazioni aggiuntive per il canale Web.

***

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

### Configurazione del servizio - Credenziali

La sezione **“Credenziali”** rappresenta il secondo step della configurazione del servizio "Messaggi di Cortesia" e consente al PSP di configurare i parametri necessari all’autenticazione delle chiamate verso i propri sistemi applicativi. La schermata permette di definire:

* credenziali OAuth2;
* grant type utilizzato;
* parametri aggiuntivi nel body della richiesta;
* parametri aggiuntivi nell’URL di autenticazione.




# Configurazione Servizio - Credenziali

### Credenziali di accesso

La sezione **“Credenziali di accesso”** contiene i parametri necessari affinché pagoPA possa autenticarsi verso i sistemi del PSP in modalità sicura.

{% tabs %}
{% tab title="Client ID *" %}
**Descrizione**

Campo obbligatorio che identifica il client applicativo utilizzato durante il processo di autenticazione OAuth2.

**Formato atteso**

* stringa alfanumerica;
* valore univoco associato al PSP;
* case sensitive.

**Esempio**

```
mdc-psp-client-uat
```

#### Controlli effettuati

* presenza del valore;
* validazione formato stringa.

#### Possibili errori

* “Campo obbligatorio”
* Formato non valido
{% endtab %}

{% tab title="Client Secret *" %}
**Descrizione**

Campo obbligatorio contenente il secret associato al `Client ID`, utilizzato per autenticare le richieste verso l’endpoint OAuth2 del PSP.

**Formato atteso**

* stringa alfanumerica;
* lunghezza conforme alle policy del PSP;
* valore riservato/confidenziale.

#### Esempio

```
X7f9!kLmP2#Qa8
```

#### Comportamento applicativo

* il valore viene mascherato in fase di inserimento;
* l’icona “occhio” consente di mostrare/nascondere il valore inserito.

#### Possibili errori

* “Campo obbligatorio”
*
{% endtab %}

{% tab title="Grant type" %}
**Descrizione**

Campo informativo che identifica il flusso OAuth2 utilizzato per l’autenticazione.

**Valore previsto**

```
client_credentials
```

Note

Il valore risulta preconfigurato e non modificabile dall’utente.
{% endtab %}
{% endtabs %}

<figure><img src="../../.gitbook/assets/UAT_conf.servizio_credenziali.png" alt=""><figcaption></figcaption></figure>



## 7.X.2 Parametri aggiuntivi (Body)

La sezione **“Parametri aggiuntivi (Body)”** consente di configurare eventuali parametri personalizzati richiesti dal sistema del PSP durante la richiesta di rilascio del token OAuth2.

I parametri vengono inviati nel body della richiesta HTTP verso l’endpoint di autenticazione.

***

### Nome

#### Descrizione

Nome del parametro custom richiesto dal provider OAuth2.

#### Esempi

```
scope
```

```
audience
```

***

### Valore

#### Descrizione

Valore associato al parametro custom.

#### Esempi

```
messages.write
```

```
mdc-api
```

***

### Aggiungi parametro body

#### Descrizione

Funzione che consente di aggiungere ulteriori parametri custom nel body della richiesta OAuth2.

#### Comportamento

Ad ogni selezione viene aggiunta una nuova riga configurabile.

***

## 7.X.3 Parametri aggiuntivi (URL)

La sezione **“Parametri aggiuntivi (URL)”** consente di configurare parametri extra da aggiungere all’URL dell’endpoint di autenticazione.

I parametri vengono inviati come query parameter della chiamata HTTP.

***

### Nome

#### Descrizione

Nome del parametro URL richiesto dal provider OAuth2.

#### Esempio

```
tenant_id
```

***

### Valore

#### Descrizione

Valore associato al parametro URL.

#### Esempio

```
tenant-mdc-uat
```

***

### Aggiungi parametro URL

#### Descrizione

Funzione che consente di aggiungere ulteriori parametri URL.

#### Comportamento

Ad ogni selezione viene aggiunta una nuova riga configurabile.

***

## 7.X.4 Azione “Completa configurazione”

Il pulsante **“Completa configurazione”** consente di:

* validare i dati inseriti;
* salvare la configurazione credenziali;
* completare il wizard di configurazione del servizio.

***

### Comportamento atteso

In caso di validazione corretta:

* la configurazione viene salvata;
* il servizio risulta configurato;
* il sistema rende disponibili le funzionalità operative del servizio Messaggi di Cortesia.

***

### Possibili anomalie

| Anomalia                          | Descrizione                                         |
| --------------------------------- | --------------------------------------------------- |
| Campi obbligatori mancanti        | Uno o più campi richiesti non risultano valorizzati |
| Credenziali non valide            | Client ID / Secret non accettati dal sistema OAuth2 |
| Endpoint OAuth non raggiungibile  | Timeout o errore connessione                        |
| Parametri OAuth errati            | Scope o parametri custom non validi                 |
| Errore salvataggio configurazione | Problema applicativo/runtime                        |

***

## 7.X.5 Azione “Indietro”

Il pulsante **“Indietro”** consente di:

* ritornare allo step precedente “Endpoint e deep link”;
* modificare la configurazione precedentemente inserita;
* mantenere i dati già valorizzati nella sessione corrente.

mi generi anche per questa maschera dei campi validi che posso utilizzare per procedere

### Valori di esempio validi – Configurazione Credenziali

Di seguito vengono riportati alcuni esempi di valori validi utilizzabili in ambiente di collaudo/UAT per completare la configurazione delle credenziali del servizio Messaggi di Cortesia.

> Nota: i valori riportati sono esclusivamente esempi documentali e non devono essere utilizzati in ambiente di produzione.

***

## 1. Credenziali di accesso

| Campo         | Valore di esempio    |
| ------------- | -------------------- |
| Client ID     | `mdc-psp-client-uat` |
| Client Secret | `X7f9!kLmP2#Qa8`     |
| Grant type    | `client_credentials` |

***

## 2. Parametri aggiuntivi (Body)

### Esempio 1 — Scope OAuth2

| Nome  | Valore           |
| ----- | ---------------- |
| scope | `messages.write` |

***

### Esempio 2 — Audience API

| Nome     | Valore    |
| -------- | --------- |
| audience | `mdc-api` |

***

### Esempio 3 — Environment

| Nome        | Valore |
| ----------- | ------ |
| environment | `uat`  |

***

## 3. Parametri aggiuntivi (URL)

### Esempio 1 — Tenant identificativo

| Nome       | Valore           |
| ---------- | ---------------- |
| tenant\_id | `tenant-mdc-uat` |

***

### Esempio 2 — Realm OAuth

| Nome  | Valore       |
| ----- | ------------ |
| realm | `pagopa-uat` |

***

### Esempio 3 — Versione API

| Nome        | Valore |
| ----------- | ------ |
| api-version | `v1`   |

***

## 4. Esempio completo compilazione schermata

```
Client ID:mdc-psp-client-uatClient Secret:X7f9!kLmP2#Qa8Grant type:client_credentials
```

***

### Parametri aggiuntivi (Body)

| Nome        | Valore         |
| ----------- | -------------- |
| scope       | messages.write |
| audience    | mdc-api        |
| environment | uat            |

***

### Parametri aggiuntivi (URL)

| Nome        | Valore         |
| ----------- | -------------- |
| tenant\_id  | tenant-mdc-uat |
| realm       | pagopa-uat     |
| api-version | v1             |

***

## 5. Esempio realistico richiesta OAuth2 risultante

### Endpoint autenticazione

```
https://uat-auth.psp-demo.it/oauth2/token?tenant_id=tenant-mdc-uat&realm=pagopa-uat&api-version=v1
```

***

### Body HTTP

```
{  "grant_type": "client_credentials",  "client_id": "mdc-psp-client-uat",  "client_secret": "X7f9!kLmP2#Qa8",  "scope": "messages.write",  "audience": "mdc-api",  "environment": "uat"}
```

# Come aderire alla PDND e configurare l'ambiente

PDND è la piattaforma su cui l'AS espone i dati: l'adesione costituisce la porta d'ingresso tecnica dell'intero percorso. In questa fase si definiscono inoltre gli utenti dell'Ente e i relativi permessi — scelta da effettuare con cura sin dall'inizio, al fine di separare i compiti tecnici (e-service, materiale crittografico) e garantire la continuità operativa.

**Prerequisiti.** → [Verificare i prerequisiti tecnici e amministrativi](../per-iniziare/verificare-i-prerequisiti-tecnici-e-amministrativi.md)

## Il flusso di adesione

L'adesione si avvia dal portale di onboarding di PagoPA e si perfeziona con la sottoscrizione dell'**Accordo di Adesione**. In sintesi:

{% stepper %}
{% step %}
### **Avviare l'onboarding**&#x20;

Avviare l'onboarding sul [portale Self Care (prod-interop)](https://selfcare.pagopa.it/onboarding/prod-interop) autenticandosi con **SPID o CIE di livello 2**. Il processo può essere avviato anche da un operatore diverso dal Legale Rappresentante: la legittimità è garantita dalla trasmissione dell'Accordo al **domicilio digitale istituzionale** (PEC su IPA)
{% endstep %}

{% step %}
### **Selezionare la tipologia di organizzazione e l'ente**

In questo passaggio è necessario verificare la correttezza e l'aggiornamento dei **dati su IPA**
{% endstep %}

{% step %}
### Indicare il Legale Rappresentante

Procedere all'indicazione del legale rappresentante **nominando anche almeno due Amministratori** (nome, cognome, codice fiscale, email professionale). Gli Amministratori sono gli utenti principali del back office.
{% endstep %}

{% step %}
### Scaricare l'Accordo di Adesione

Scaricare in PDF **l'Accordo di Adesione** precompilato generato dalla piattaforma, sottoporlo alla firma digitale del Legale Rappresentante (**FEQ CAdES**), ricaricarlo e finalizzare.
{% endstep %}

{% step %}
### Assegnazione degli attributi certificati dell'ente

A seguito dell'adesione, gli **attributi certificati** dell'ente (es. _Regione_, _Regione Lazio_) sono assegnati dalle fonti autoritative (IPA): l'operazione può richiedere **fino a 24 ore**.
{% endstep %}
{% endstepper %}

> **\[Screenshot — PDND/Self Care]** _Form di onboarding: selezione dell'ente da IPA e nomina degli Amministratori._

> **\[Screenshot — PDND/Self Care]** _Schermata di caricamento dell'Accordo di Adesione firmato (FEQ CAdES) e finalizzazione._

{% hint style="info" %}
**Approfondimento PDND.** Procedura passo-passo: [Guida all'adesione](https://developer.pagopa.it/pdnd-interoperabilita/guides/manuale-operativo-pdnd-interoperabilita/v1.0/per-iniziare/guida-alladesione). Inquadramento dell'ecosistema e del flusso erogatore/fruitore: [Come funziona: il flusso operativo](https://developer.pagopa.it/pdnd-interoperabilita/guides/manuale-operativo-pdnd-interoperabilita/v1.0/per-iniziare/funzionamento-generale)
{% endhint %}

## Primo accesso, utenti e ruoli

L'accesso all'Area Riservata avviene tramite SPID/CIE. Gli **attributi certificati** dell'ente determinano gli e-service a cui esso potrà eventualmente iscriversi in qualità di fruitore.

PDND prevede tre ruoli utente, da assegnare secondo il principio del minimo privilegio:

<table><thead><tr><th width="229.76171875">Ruolo</th><th>Ambito operativo</th></tr></thead><tbody><tr><td><strong>Amministratore</strong></td><td>Controllo completo del back office: gestione di utenti, e-service, finalità e richieste di fruizione, materiale crittografico (client e chiavi)</td></tr><tr><td><strong>Operatore di Sicurezza</strong></td><td>Gestione del <strong>materiale crittografico</strong> (es. caricamento chiavi pubbliche). Non gestisce utenti né e-service</td></tr><tr><td><strong>Operatore API</strong></td><td>Gestione degli <strong>e-service</strong> e degli aspetti tecnici delle finalità. Non gestisce utenti né materiale crittografico</td></tr></tbody></table>

La gestione delle utenze avviene dal menu **Utenti** (riservato agli Amministratori), che rimanda alla piattaforma **Area Riservata (Self Care)**.

> **\[Screenshot — PDND]** _Menu «Utenti»: aggiunta di un utente e assegnazione del ruolo (Amministratore / Operatore API / Operatore di Sicurezza)._

{% hint style="info" %}
**Approfondimento PDND.** [Primo accesso e configurazione iniziale](https://developer.pagopa.it/pdnd-interoperabilita/guides/manuale-operativo-pdnd-interoperabilita/v1.0/per-iniziare/primo-accesso-e-configurazione-iniziale); [Gestione delle utenze](https://developer.pagopa.it/pdnd-interoperabilita/guides/pdnd-manuale-operativo/manuale-operativo/utenze).
{% endhint %}

## Ambienti operativi

PDND mette a disposizione più ambienti. Per l'AS sono rilevanti:

* **Collaudo** — ambiente di test (sostitutivo del precedente «Test»), nel quale l'e-service è pubblicato e verificato prima della produzione (Step 2–3).
* **Produzione** — ambiente reale (Step 4).
* _(Attestazione — ambiente dedicato alle verifiche di sicurezza/firma; rilevante per i test crittografici avanzati.)_

> <mark style="color:yellow;">**Da verificare.**</mark> <mark style="color:yellow;"></mark><mark style="color:yellow;">Workflow PEC; adempimenti OpenID Federation dell'AS; ruolo e recapiti di DTD/PagoPA/IPZS e «Sito Vetrina»</mark>.

Perfezionata l'adesione e predisposto l'ambiente, si procede alla [creazione del servizio](come-pubblicare-e-configurare-le-service-in-collaudo.md).&#x20;

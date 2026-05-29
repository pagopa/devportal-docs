# Come testare la conformita del Relying Party

**Obiettivo**: confermare che il Relying Party rispetta la specifica IT-Wallet v1.3.3 prima della messa in esercizio, eseguendo la suite di conformance test automatici di PagoPA e successivamente un test end-to-end manuale con app IO in ambiente di pre-produzione.

**Prerequisiti**: §2.5 completato.

**Durata indicativa**: mezza giornata di lavoro.

{% stepper %}
{% step %}
### Eseguire la suite di conformance test PagoPA

Il tool `wallet-conformance-test` simula un Wallet Instance, esegue il flusso di presentazione contro il Relying Party e produce un report HTML con l'esito di ogni test (caso felice e casi di errore).

L'esecuzione tipica avviene **in locale**, con il tool sulla stessa macchina del Relying Party in sviluppo. In questa modalità non è necessario che il Relying Party sia raggiungibile da Internet.

```bash
wct test:presentation \
  --presentation-authorize-uri https://localhost:3000/request_uri \
  --unsafe-tls
```

In alternativa, il tool può essere eseguito **contro un Relying Party esposto su Internet** ma non ancora registrato nella Trust Chain IPZS. Il flag `--unsafe-tls` disabilita la verifica del certificato TLS e la validazione della Trust Chain; l'uso è ammesso solo in fase di test, mai in produzione.

```bash
wct test:presentation \
  --presentation-authorize-uri https://relying-party.example.org/request_uri \
  --unsafe-tls
```

Per le istruzioni complete di installazione e configurazione, consultare il [repository del tool](https://github.com/pagopa/wallet-conformance-test).

#### Criteri di superamento

* Tutti i test della categoria _happy flow_ devono concludersi con esito positivo.
* I test di sicurezza devono restituire gli errori attesi (validazione corretta dei casi negativi).
* Nessun fallimento è ammesso nei test della categoria **mandatory**.
{% endstep %}

{% step %}
### Attivare la modalità sviluppatore in app IO

L'ambiente di pre-produzione IT-Wallet è accessibile dall'app IO previa attivazione di un flag nascosto.

1. Aprire l'app IO su una qualsiasi schermata principale.
2. Toccare l'icona **⚙️ Impostazioni** in alto a destra.
3. Nella schermata Impostazioni, scorrere fino alla label **Versione x.x.x** in fondo alla pagina.
4. Toccare la label **5 volte consecutive** entro 2 secondi per tap. Al completamento, l'app mostra il toast **Modalità sviluppatore attivata**.
5. La sezione **Sviluppatori** appare ora in fondo alla schermata Impostazioni.
{% endstep %}

{% step %}
### Spostare l'app IO sull'ambiente di pre-produzione IT-Wallet

L'ambiente IT-Wallet dell'app IO è gestito indipendentemente dal backend generale dell'applicazione.

1. Dalla sezione **Sviluppatori**, toccare **Documenti su IO** sotto Playground.
2. Aprire la tab **Environment**.
3. Selezionare **Imposta l'ambiente su PRE** e confermare l'alert.

Effetti del cambio di ambiente:

* Lo stato IT-Wallet viene resettato; le credenziali precedentemente salvate vengono eliminate.
* La funzionalità _Documenti su IO_ viene disattivata automaticamente e deve essere riattivata manualmente.
* Un banner giallo (_"Ti trovi nell'ambiente di test dell'app dedicato a IT-Wallet"_) rimane visibile finché l'app è in PRE.
{% endstep %}

{% step %}
### Riattivare _Documenti su IO_ e ottenere un PID di test

1. Andare nella sezione **Documenti** dell'app IO.
2. Riattivare la funzionalità **Documenti su IO** seguendo il flusso guidato.
3. Aggiungere il **PID** (Documento d'Identità Digitale). I dati saranno fittizi perché l'ambiente è di pre-produzione.
{% endstep %}

{% step %}
### Eseguire il flusso Cross-Device

1. Aprire il proprio Relying Party da un browser desktop e avviare una sessione di presentazione.
2. Il Relying Party mostra il QR Code.
3. Scansionare il QR Code dall'app IO utilizzando il lettore integrato.
4. L'app IO presenta la schermata di consenso con il nome e il logo del Relying Party e i claim richiesti.
5. Confermare il consenso. L'app invia il `vp_token` al `response_uri` del Relying Party.
6. Il Relying Party esegue la sequenza di verifica e restituisce l'esito.
{% endstep %}

{% step %}
### Eseguire il flusso Same-Device

1. Aprire il proprio Relying Party dal browser dello smartphone su cui è installata l'app IO e avviare una sessione di presentazione.
2. Il Relying Party redirige all'Universal Link del Wallet oppure a `openid4vp://` / `haip-vp://`.
3. Il sistema operativo apre automaticamente l'app IO.
4. Confermare il consenso. L'app invia la risposta al `response_uri`.
5. L'app reindirizza il browser al `redirect_uri` del Relying Party.
{% endstep %}
{% endstepper %}

## ✅ Verifica

Il Tutorial si considera superato quando ricorrono tutte le condizioni seguenti.

* [ ] Il report dei conformance test non riporta fallimenti nella categoria _mandatory_.
* [ ] Il banner di pre-produzione è visibile nell'app IO al momento del test.
* [ ] Il QR Code (Cross-Device) e l'Universal Link (Same-Device) attivano correttamente l'app IO.
* [ ] L'app IO mostra il nome del Relying Party e il logo SVG nella schermata di consenso.
* [ ] L'utente completa la presentazione senza errori.
* [ ] Il `response_uri` riceve il `vp_token` e risponde con HTTP 200.
* [ ] Il `vp_token` decifrato contiene i claim richiesti con valori coerenti con il PID di test.
* [ ] La verifica crittografica della credenziale si conclude senza errori.
* [ ] Nel flusso Same-Device, il redirect al `redirect_uri` del Relying Party completa correttamente la sessione.

Il superamento di tutti i controlli abilita il passaggio alla fase di promozione in produzione (_cfr. §5.2_).

## Problemi comuni

| Sintomo                                       | Causa probabile                                                                                                                                                      |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| L'app IO non si apre dopo la scansione del QR | `authorization_endpoint` della Wallet Instance non corrisponde a un Universal Link registrato sul sistema operativo.                                                 |
| L'app IO non mostra il logo del Relying Party | `logo_uri` non è un file SVG oppure non è raggiungibile da rete mobile.                                                                                              |
| Il `response_uri` non riceve la POST          | `response_uris` nell'Entity Configuration non contiene l'URL esatto, oppure il `response_uri` indicato nel Request Object non coincide con uno degli URL registrati. |
| Il JWE non si decifra                         | La Protocol Key utilizzata dal Wallet per cifrare la risposta non corrisponde a quella esposta in `openid_credential_verifier.jwks` dell'Entity Configuration.       |
| Errore di firma sul KB-JWT                    | `cnf.jwk` nell'Issuer-Signed-JWT non corrisponde alla chiave utilizzata dal Wallet per firmare il KB-JWT.                                                            |

Per la trattazione estesa dei sintomi più frequenti e delle azioni correttive, _cfr. §5.4 Diagnosticare e risolvere errori comuni_.

## Riferimenti

* §3.6 Endpoint del Relying Party
* §3.7 Procedura di verifica della credenziale
* §5.2 Promuovere il Relying Party da pre-produzione a produzione
* §5.4 Diagnosticare e risolvere errori comuni

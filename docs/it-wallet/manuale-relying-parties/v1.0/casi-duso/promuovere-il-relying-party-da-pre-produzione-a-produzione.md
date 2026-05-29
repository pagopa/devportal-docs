# Promuovere il Relying Party da pre-produzione a produzione

## Scenario

L'integrazione del Relying Party è stata completata in pre-produzione, i conformance test e il test end-to-end con app IO sono stati superati (cfr. §2.6). Il Relying Party deve ora essere reso operativo verso utenti reali, in ambiente di produzione.

La promozione consiste nella replica della procedura di onboarding e di esposizione dei metadati su un'infrastruttura distinta, con riferimenti aggiornati al Trust Anchor di produzione e con i dati operativi reali al posto dei dati di test.

## Sequenza

{% stepper %}
{% step %}
### Provisioning del dominio di produzione

Pubblicare un dominio HTTPS distinto da quello di pre-produzione (ad esempio `relying-party.example.org` per la produzione, in contrapposizione a `pre.relying-party.example.org` per la pre-produzione). Il dominio deve essere raggiungibile da Internet con certificato TLS valido.
{% endstep %}

{% step %}
### Generazione di nuove chiavi

Generare Federation Key e Protocol Key dedicate all'ambiente di produzione (cfr. §2.1, passi 1-2). Le chiavi di pre-produzione non vengono riutilizzate in produzione, per garantire separazione crittografica fra i due ambienti.
{% endstep %}

{% step %}
### Pubblicazione dell'Entity Configuration iniziale

Pubblicare un Entity Configuration iniziale sul dominio di produzione, all'endpoint `/.well-known/openid-federation`, con `iss` e `sub` valorizzati con il nuovo dominio (cfr. §2.1, passo 4).
{% endstep %}

{% step %}
### Richiesta di onboarding a IPZS

Inviare una PEC a `identitadigitale@pec.ipzs.it` con i dati di onboarding (cfr. §2.1, passo 5), specificando esplicitamente che la richiesta è per l'ambiente di produzione. L'Entity Identifier dichiarato è quello del nuovo dominio.
{% endstep %}

{% step %}
### Completamento dell'onboarding di produzione

Al ricevimento del Registration Number, recuperare il Subordinate Statement dal `federation_fetch_endpoint` del Trust Anchor **di produzione** (`https://ta.wallet.ipzs.it`) e aggiornare l'Entity Configuration con `authority_hints`, `x5c` e Trust Mark di produzione (cfr. §2.1, passi 6-7).
{% endstep %}

{% step %}
### Replica dell'implementazione applicativa

Replicare in produzione gli endpoint di presentazione (`request_uri`, `response_uri`, `erasure_endpoint`) e la logica di costruzione e verifica della credenziale. Il codice applicativo è lo stesso della pre-produzione; cambiano esclusivamente le configurazioni:

| Parametro         | Valore in pre-produzione                                    | Valore in produzione                                    |
| ----------------- | ----------------------------------------------------------- | ------------------------------------------------------- |
| Trust Anchor      | `https://pre.ta.wallet.ipzs.it`                             | `https://ta.wallet.ipzs.it`                             |
| Entity Identifier | `https://pre.relying-party.example.org`                     | `https://relying-party.example.org`                     |
| Trust Mark type   | `https://pre.ta.wallet.ipzs.it/openid_relying_party/public` | `https://ta.wallet.ipzs.it/openid_relying_party/public` |
| Conformance test  | flag `--unsafe-tls` ammesso                                 | flag `--unsafe-tls` **vietato**                         |
{% endstep %}

{% step %}
### Test di produzione

Eseguire un test funzionale su produzione utilizzando l'app IO **senza modalità sviluppatore** (ambiente PROD di default) con un PID reale dell'operatore di test. Validare che la presentazione si concluda senza errori e che i dati ricevuti siano coerenti con il documento di identità reale dell'operatore.
{% endstep %}

{% step %}
### Mantenimento parallelo dei due ambienti

La pre-produzione viene mantenuta attiva anche dopo la promozione in produzione, per consentire i test di future modifiche prima della loro applicazione in produzione.
{% endstep %}
{% endstepper %}

## Punti di attenzione

{% hint style="warning" %}
* **Dati reali e principio di minimizzazione**. In produzione la query DCQL richiede solo i claim strettamente necessari al servizio. Aggiungere claim in produzione "per sicurezza" è una violazione del principio di minimizzazione del GDPR.
* **Hardening TLS**. La produzione richiede una configurazione TLS robusta (cipher suite moderne, HSTS, OCSP stapling, redirect HTTP→HTTPS). Il `--unsafe-tls` dei conformance test non ha equivalenti operativi in produzione: l'intero flusso deve essere coperto da certificati validi e da Trust Chain risolvibili.
* **Comunicazione preventiva a IPZS**. Eventuali modifiche significative all'integrazione successive alla promozione (rotazione chiavi, cambio di dominio, modifica del logo) richiedono comunicazione preventiva a IPZS.

> **`TBD` — Controlli aggiuntivi di produzione**: la specifica IT-Wallet v1.3.3 non prescrive controlli operativi aggiuntivi per la produzione oltre a quelli già documentati (TLS hardening, dati reali, no `--unsafe-tls`). Eventuali requisiti su SLA, retention dei log, monitoraggio, audit di sicurezza, certificazioni — se previsti — saranno specificati in iterazioni successive delle linee guida operative IPZS/PagoPA.
{% endhint %}

## Riferimenti

* §2.1 Onboardare il Relying Party nella federazione IPZS
* §2.6 Testare la conformità del Relying Party
* §3.1.1 Trust Anchor IPZS

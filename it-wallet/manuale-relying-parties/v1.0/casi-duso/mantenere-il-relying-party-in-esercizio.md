# Mantenere il Relying Party in esercizio

## Scenario

Il Relying Party è attivo in produzione e funziona regolarmente. La manutenzione ricorrente include la rotazione delle chiavi crittografiche, la gestione delle richieste di cancellazione e il monitoraggio delle scadenze dei materiali crittografici e degli attestati.

I tre flussi che seguono coprono le operazioni più frequenti del ciclo di vita di un Relying Party in esercizio.

## 5.3.1 Ruotare le chiavi crittografiche

La rotazione delle chiavi è prevista periodicamente per ragioni di sicurezza, oppure in modo straordinario in caso di sospetta compromissione. La procedura segue il modello di OpenID Federation 1.0 § 11.2: la nuova chiave viene aggiunta al JWK Set in coesistenza con la vecchia per una finestra temporale che consente la propagazione, poi la vecchia chiave viene rimossa.

### Sequenza per la rotazione di una Federation Key

{% stepper %}
{% step %}
#### Generazione della nuova Federation Key

Generare una nuova coppia di chiavi EC P-256 e calcolarne il JWK Thumbprint (cfr. §2.1, passi 1-2). Preparare la CSR.
{% endstep %}

{% step %}
#### Notifica preventiva a IPZS

Inviare una PEC a `identitadigitale@pec.ipzs.it` comunicando l'intenzione di ruotare la chiave e allegando la nuova CSR. IPZS emette un nuovo Subordinate Statement che certifica anche la nuova chiave.

> **`TBD` — Tempistiche di comunicazione preventiva**: la finestra temporale standard fra notifica della rotazione e attivazione della nuova chiave non è documentata nelle linee guida operative v1.3.3.
{% endstep %}

{% step %}
#### Aggiunta della nuova chiave al JWK Set

Aggiornare l'Entity Configuration aggiungendo la nuova chiave nell'array `jwks.keys`, **mantenendo** la vecchia chiave. Il blocco assume la forma:

```json
"jwks": {
  "keys": [
    {
      "kid": "<kid_chiave_corrente>",
      "kty": "EC", "crv": "P-256",
      "x": "...", "y": "...",
      "x5c": ["<vecchio_cert>"]
    },
    {
      "kid": "<kid_chiave_nuova>",
      "kty": "EC", "crv": "P-256",
      "x": "...", "y": "...",
      "x5c": ["<nuovo_cert>"]
    }
  ]
}
```

Pubblicare l'Entity Configuration aggiornato.
{% endstep %}

{% step %}
#### Periodo di coesistenza

Mantenere entrambe le chiavi nel JWK Set per una finestra temporale concordata con IPZS. Durante questa finestra, l'Entity Configuration viene firmato con la **nuova chiave**, ma le altre entità della federazione possono ancora validare materiale firmato con la vecchia chiave grazie alla sua presenza nel JWK Set.
{% endstep %}

{% step %}
#### Rimozione della vecchia chiave

Al termine della finestra di coesistenza, rimuovere la vecchia chiave dal JWK Set e ripubblicare l'Entity Configuration. La chiave privata corrispondente viene cancellata dai sistemi del Relying Party.
{% endstep %}
{% endstepper %}

### Procedura per la rotazione di una Protocol Key

La rotazione della Protocol Key segue lo stesso modello, ma agisce sul blocco `metadata.openid_credential_verifier.jwks` anziché sul blocco `jwks` top-level. La Protocol Key vecchia continua a decifrare le risposte in arrivo dei flussi avviati prima del cambio chiave, mentre la nuova firma i Request Object emessi dopo il cambio.

## 5.3.2 Gestire una richiesta di cancellazione (erasure)

Il Relying Party che richiede claim identificativi univoci (es. `tax_id_code`) espone l'`erasure_endpoint` per consentire al Wallet di cancellare i dati ricevuti in presentazione.

### Sequenza

{% stepper %}
{% step %}
#### Ricezione della richiesta

Il Wallet contatta l'`erasure_endpoint` del Relying Party in `GET`, con un parametro identificativo della credenziale o della sessione di presentazione.
{% endstep %}

{% step %}
#### Correlazione lato Relying Party

Il Relying Party correla la richiesta entrante ai dati memorizzati internamente. La logica di correlazione dipende dall'implementazione del RP.

> **`TBD` — Meccanismo di correlazione**: il modello con cui il Relying Party associa la richiesta di erasure entrante ai dati della sessione di presentazione (claim utilizzato come chiave, identificativo opaco emesso dal RP, riferimento alla sessione) non è prescritto dalle specifiche IT-Wallet v1.3.3.
{% endstep %}

{% step %}
#### Cancellazione effettiva

Eliminare dai sistemi del Relying Party tutti i dati riconducibili alla credenziale cancellata, in conformità con la propria policy GDPR. La cancellazione include eventuali copie di backup, log applicativi e basi dati operative.
{% endstep %}

{% step %}
#### Risposta al Wallet

Restituire `HTTP 204 No Content` in caso di successo. Restituire `HTTP 404 Not Found` se l'identificativo non corrisponde a dati memorizzati.
{% endstep %}
{% endstepper %}

## 5.3.3 Monitorare le scadenze dei materiali crittografici

Tre elementi del Relying Party hanno scadenze indipendenti che devono essere monitorate.

| Elemento             | Scadenza dichiarata in                    | Conseguenza dello scadere                                                                      |
| -------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Entity Configuration | claim `exp` del JWT firmato               | L'EC viene considerato non valido dalle altre entità; il flusso di presentazione si interrompe |
| Trust Chain          | minimo dei `exp` dei due JWT della catena | Il Wallet rifiuta i Request Object con Trust Chain scaduta                                     |
| Trust Mark           | claim `exp` del JWT del Trust Mark        | Il Relying Party non è più considerato trusted per il proprio ruolo                            |
| Certificati X.509    | campo `Not After` del certificato         | La firma dell'EC viene considerata non valida                                                  |

### Raccomandazioni operative

* **Allarmare con anticipo**. Configurare allarmi nel sistema di monitoring per ciascuna scadenza, con preavviso di almeno 14 giorni rispetto alla scadenza effettiva.
* **Ripubblicare l'Entity Configuration prima della scadenza**. Aggiornare `iat` ed `exp` e ripubblicare il JWT firmato. La frequenza tipica di ripubblicazione è giornaliera.
* **Rinnovare la Trust Chain**. Quando il Subordinate Statement si avvicina alla scadenza, recuperare un nuovo Subordinate Statement dal `federation_fetch_endpoint` e aggiornare l'Entity Configuration con la nuova `trust_chain`.
* **Richiedere un nuovo Trust Mark a IPZS**. La procedura di rinnovo del Trust Mark è gestita da IPZS.

> **`TBD` — Procedura di rinnovo del Trust Mark**: la modalità operativa di rinnovo del Trust Mark (automatica su iniziativa IPZS, su richiesta del RP, ricarica periodica) non è documentata nelle linee guida operative v1.3.3.

## Riferimenti

* §2.1 Onboardare il Relying Party nella federazione IPZS
* §3.1.2 Trust Chain
* §3.1.3 Trust Mark
* §3.2.4 Ciclo di vita dell'Entity Configuration
* §3.3.5 Ciclo di vita delle chiavi

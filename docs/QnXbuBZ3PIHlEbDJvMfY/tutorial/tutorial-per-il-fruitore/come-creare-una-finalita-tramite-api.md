# Come creare una finalità tramite API

Dopo che la tua richiesta di fruizione è stata approvata e si trova in stato "Attiva", il passo successivo per un'integrazione completamente automatizzata è la creazione di una **finalità** tramite API. Questa operazione ti permette di definire programmaticamente lo scopo specifico di utilizzo e di fornire la relativa analisi del rischio, senza necessità di interventi manuali sul back-office.

Automatizzare la creazione della finalità è essenziale per i partner tecnologici e per gli enti che devono gestire dinamicamente l'accesso a più e-service, consentendo di completare l'intero processo di configurazione via software in modo rapido e scalabile.

### Prerequisiti

* Avere una richiesta di fruizione (`agreement`) in stato **"Attiva"**.
* Avere a disposizione l'`eserviceId` e il `consumerId` (l'ID del tuo ente).
* Aver creato un client per le API di PDND Interoperabilità e essere in grado di ottenere un token JWT (voucher) valido per l'autenticazione.
* L'operazione deve essere eseguita da un utente con ruolo di **Amministratore** o **Operatore API**.

### Riferimenti API

Il processo di creazione di una finalità (`purpose`) si articola in due chiamate: la prima per la creazione in bozza e la seconda per l'attivazione.

**Creazione della finalità**

| Proprietà           | Valore                                                                     |
| ------------------- | -------------------------------------------------------------------------- |
| **Metodo HTTP**     | `POST`                                                                     |
| **Endpoint**        | `/purposes`                                                                |
| **Corpo Richiesta** | Oggetto JSON contenente i dettagli della finalità e l'analisi del rischio. |
| **Autenticazione**  | `Bearer [VOUCHER]`                                                         |

**Attivazione della finalità**

| Proprietà           | Valore                           |
| ------------------- | -------------------------------- |
| **Metodo HTTP**     | `POST`                           |
| **Endpoint**        | `/purposes/{purposeId}/activate` |
| **Corpo Richiesta** | Vuoto                            |
| **Autenticazione**  | `Bearer [VOUCHER]`               |

### Procedura

#### Step 1: Ottenere un voucher di autenticazione

Richiedi un token JWT (voucher) valido, assicurandoti di utilizzare l'`audience` corretta per le API di servizio di PDND Interoperabilità.

#### Step 2: Preparare il corpo della richiesta di creazione\*\*

Costruisci l'oggetto JSON da inviare nel corpo della richiesta. L'elemento più importante è l'oggetto `riskAnalysisForm`, che deve essere compilato secondo il modello fornito dalla piattaforma.

Ecco un esempio di corpo della richiesta:

```json
{
  "eserviceId": "f8922621-039c-49e0-8bd4-5bab82859a89",
  "consumerId": "d0a0e5b0-8f6b-4b1e-9b0a-9e1b2c3d4e5f",
  "title": "Finalità per Servizio Anagrafico",
  "description": "Utilizzo per la verifica dei requisiti per bonus X.",
  "riskAnalysisForm": {
    "version": "1.0",
    "answers": {
      "purpose": "Finalità istituzionale per l'erogazione del servizio X...",
      "legalBasis": [ "CONSENT" ],
      // ... tutti gli altri campi dell'analisi del rischio ...
    }
  }
}
```

#### Step 3: Eseguire la chiamata API di creazione

Effettua una chiamata `POST` all'endpoint `/purposes`.

```bash
curl -X POST \
  'https://api.interop.pagopa.it/v2/purposes' \
  --header 'Authorization: Bearer [IL_TUO_VOUCHER]' \
  --header 'Content-Type: application/json' \
  --data '{ ... }' # Il corpo JSON dello Step 2
```

Se la chiamata ha successo, il server risponderà con `201 Created` e restituirà l'oggetto finalità appena creato, con il suo `id` univoco e in stato `DRAFT`. Conserva questo `id`.

#### Step 4: Eseguire la chiamata API di attivazione

Utilizza l'`id` della finalità ottenuto al passo precedente per effettuare la seconda chiamata, questa volta per attivarla.

```bash
# Sostituisci [PURPOSE_ID] con l'ID della finalità creata
PURPOSE_ID="b5a5c1a2-12f2-45d6-a4f6-16986baf131d"

curl -X POST \
  "https://api.interop.pagopa.it/v2/purposes/${PURPOSE_ID}/activate" \
  --header 'Authorization: Bearer [IL_TUO_VOUCHER]'
```

#### Step 5: Verificare la risposta

Se l'attivazione ha successo, il server risponderà con `200 OK` e restituirà l'oggetto finalità completo, con lo stato aggiornato ad `ACTIVE`.

La tua finalità è ora creata, attiva e pronta per essere associata a un client.

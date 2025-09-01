---
argomenti_correlati:
- /docs/pagopa-srtp/guida-tecnica/api-endpoints
funzione: guida-tecnica
livello: intermedio
prodotto:
  nome: PagoPA SRTP
  versione: v1.0.0
schema:
  '@context': https://schema.org
  '@type': TechArticle
  author:
    '@type': Organization
    name: PagoPA S.p.A.
  datePublished: '2024-05-21'
  dependencies: Standard EPC133-22 - SEPA Request-to-Pay (SRTP)
  description: Guida dettagliata alla struttura dei messaggi ISO 20022 utilizzati
    nel servizio SRTP, con focus sui campi chiave da interpretare per le richieste
    in entrata e da costruire per le risposte di stato.
  keywords:
  - ISO 20022
  - EPC133-22
  - pain.013.001.10
  - camt.055.001.08
  - pain.014.001.07
  - SEPA Request-to-Pay
  - SRTP
  - IUV
  name: Riferimento ai messaggi del Dataset ISO-20022 per SRTP
  proficiencyLevel: Intermediate
status: pubblicato
tecnologia:
- ISO-20022
- EPC133-22
- API
utente:
  ruolo: partner_tecnologico
  tag:
  - messaggistica
  - ISO 20022
  - pain.013
  - pain.014
  - camt.055
  - SRTP
  tipo_ente: partner_tecnologico
---

# Riferimento ai messaggi (Dataset ISO-20022)

A differenza del Servizio di Attivazione, l'interazione tra Service Provider per lo scambio di richieste di pagamento si basa sullo standard [EPC133-22](https://www.europeanpaymentscouncil.eu/document-library/guidance-documents/default-srtp-related-api-specifications) Questo standard prevede che le chiamate API contengano nel corpo della richiesta un oggetto risorsa (es. `SepaRequestToPayRequestResource`) che incapsula un messaggio conforme allo standard **ISO 20022**.

Questa sezione fornisce una guida dettagliata alla struttura di questi messaggi, distinguendo tra quelli che, in qualità di Service Provider del Debitore, dovrai **interpretare** (in entrata) e quelli che dovrai **costruire** (in uscita). Per la struttura completa e definitiva di ogni campo, si rimanda alla specifica OpenAPI ufficiale dell'EPC.

## Messaggi Ricevuti (da Interpretare)

### 1. Messaggio di Richiesta di Pagamento (`pain.013.001.10`)

Questo è il messaggio che ricevi quando ti viene inoltrata una nuova richiesta di pagamento. È contenuto all'interno dell'oggetto `SepaRequestToPayRequestResource` inviato all'endpoint `POST /sepa-request-to-pay-requests`.

#### **Campi Chiave da Interpretare:**

| Percorso Campo (semplificato)                                | Descrizione                                                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| `Document.CdtrPmtActvtnReq.PmtInf.CdtTrfTx.PmtId.EndToEndId` | L'**Identificativo Univoco di Versamento (IUV)**, ovvero il Numero Avviso a 18 cifre. |
| `Document.CdtrPmtActvtnReq.PmtInf.CdtTrfTx.Amt.InstdAmt`     | L'**importo** del pagamento.                                                          |
| `Document.CdtrPmtActvtnReq.PmtInf.XpryDt`                    | La **data di scadenza** della richiesta.                                              |
| `Document.CdtrPmtActvtnReq.PmtInf.CdtTrfTx.RmtInf.Ustrd`     | La **causale** o l'oggetto del pagamento da mostrare all'utente.                      |
| `Document.CdtrPmtActvtnReq.PmtInf.Cdtr.Nm`                   | Il **nome dell'Ente Creditore** (beneficiario).                                       |
| `Document.CdtrPmtActvtnReq.GrpHdr.MsgId`                     | L'ID univoco del messaggio, da conservare per le successive correlazioni.             |
| `callbackUrl`                                                | L'**URL di callback** a cui dovrai inviare la risposta di stato asincrona.            |

### 2. Messaggio di Richiesta di Cancellazione (`camt.055.001.08`)

Questo è il messaggio che ricevi quando una SRTP deve essere annullata. È contenuto nell'oggetto `SepaRequestToPayCancellationRequestResource` inviato all'endpoint `POST /sepa-request-to-pay-requests/{id}/cancellation-requests`.

#### **Campi Chiave da Interpretare:**

| Percorso Campo (semplificato)                                              | Descrizione                                                                  |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `Document.CstmrPmtCxlReq.Undrlyg.OrgnlPmtInfAndCxl.TxInf.OrgnlEndToEndId`  | Lo **IUV** della richiesta originale da cancellare, per correlazione.        |
| `Document.CstmrPmtCxlReq.Undrlyg.OrgnlPmtInfAndCxl.TxInf.CxlRsnInf.Rsn.Cd` | Il **codice** che indica il motivo della cancellazione (es. `PAID`, `MODT`). |

***

## Messaggi Inviati (da Costruire)

### 3. Messaggio di Risposta di Stato (`pain.014.001.07`)

Questo è il messaggio che devi costruire e inviare all'URL di `callback` per notificare l'esito (accettazione o rifiuto) di una richiesta da parte dell'utente. È contenuto nell'oggetto `AsynchronousSepaRequestToPayResponseResource`.

#### **Campi Chiave da Costruire:**

| Percorso Campo (semplificato)                                                    | Descrizione                                                                                                                                                                                                                                 |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Document.CdtrPmtActvtnReqStsRpt.OrgnlGrpInfAndSts.OrgnlMsgId`                   | L'ID del messaggio `pain.013` originale a cui stai rispondendo.                                                                                                                                                                             |
| `Document.CdtrPmtActvtnReqStsRpt.OrgnlPmtInfAndSts.TxInfAndSts.OrgnlEndToEndId`  | Lo **IUV** della richiesta originale.                                                                                                                                                                                                       |
| `Document.CdtrPmtActvtnReqStsRpt.OrgnlPmtInfAndSts.TxInfAndSts.TxSts`            | <p>Lo <strong>stato</strong> della richiesta, da valorizzare con: - <code>ACCP</code> → accettato dall'utente<br><code>ACTC</code> → accettato dal service provider<br><code>RJCT</code> → rifiutato dall'utente o dal service provider</p> |
| `Document.CdtrPmtActvtnReqStsRpt.OrgnlPmtInfAndSts.TxInfAndSts.StsRsnInf.Rsn.Cd` | In caso di rifiuto, il codice che ne specifica il motivo.                                                                                                                                                                                   |
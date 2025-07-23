# Modelli di Dati e Schemi Comuni

Questa sezione descrive i principali modelli di dati utilizzati nei corpi delle richieste e delle risposte API.

## **Oggetto `ActivationReq` (Creazione Attivazione)**

<table><thead><tr><th width="210.71875">Campo</th><th width="150.42578125">Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>payer</code></td><td>Payer</td><td>Oggetto contenente i dati del pagatore da attivare.</td></tr></tbody></table>

## **Oggetto `Payer` (Pagatore per Attivazione)**

<table><thead><tr><th width="215.51953125">Campo</th><th width="135.4609375">Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>fiscalCode</code></td><td>string</td><td>Il Codice Fiscale del pagatore.</td></tr><tr><td><code>rtpSpId</code></td><td>string</td><td>L'identificativo (BIC o P.IVA) del PSP che sta registrando l'attivazione.</td></tr></tbody></table>

## **Oggetto `CreateRtp` (Creazione SRTP)**

<table><thead><tr><th width="212.78515625">Campo</th><th width="164.796875">Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>payee</code></td><td>Payee</td><td>Oggetto contenente i dati del beneficiario (Ente Creditore).</td></tr><tr><td><code>payer</code></td><td>Payer</td><td>Oggetto contenente i dati del pagatore.</td></tr><tr><td><code>paymentNotice</code></td><td>PaymentNotice</td><td>Oggetto con i dettagli dell'avviso pagoPA.</td></tr></tbody></table>

## **Oggetto `PaymentNotice` (Avviso di Pagamento)**

<table><thead><tr><th width="213.20703125">Campo</th><th width="168.8828125">Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>noticeNumber</code></td><td>string</td><td>Il Numero Avviso (IUV) a 18 cifre.</td></tr><tr><td><code>amount</code></td><td>number</td><td>L'importo in centesimi di Euro.</td></tr><tr><td><code>description</code></td><td>string</td><td>Descrizione dell'avviso pagoPA.</td></tr><tr><td><code>subject</code></td><td>string</td><td>L'oggetto del pagamento (es. TARI 2025).</td></tr><tr><td><code>expiryDate</code></td><td>string (date)</td><td>La data di scadenza dell'avviso in formato YYYY-MM-DD.</td></tr></tbody></table>

# Codici di errore dell'e-service

Per ciascun codice si imposta l'applicabilità e, per i codici obbligatori, la causa, l'azione utente e le note.

| Codice  | Esito                    | Tipo         |
| ------- | ------------------------ | ------------ |
| **200** | Attestato valido         | Obbligatorio |
| **400** | Bad Request              | Obbligatorio |
| **401** | Unauthorized             | Obbligatorio |
| **404** | Not found                | Obbligatorio |
| **429** | Too Many Requests        | Obbligatorio |
| **500** | Errore generico interno  | Obbligatorio |
| **503** | Servizio non disponibile | Obbligatorio |

Le risposte di errore seguono il formato **ProblemDetails** (RFC 9457, `application/problem+json`, campi `title`, `status`, `detail`). Per il `401` è atteso l'header `WWW-Authenticate` in schema **`DPoP`**; per i `5xx` l'header `Retry-After`; per il `429` gli header `RateLimit-*`.

**Logica di erogazione.** In fase di **emissione** l'e-service restituisce **solo i dataset in stato `VALID`**. A seguito di una notifica **Signal Hub**, il fruitore richiede lo specifico `object_id` e ne riceve il dataset **indipendentemente dallo stato** (`INVALID`, `SUSPENDED`, …), così da rilevare la variazione effettiva.&#x20;

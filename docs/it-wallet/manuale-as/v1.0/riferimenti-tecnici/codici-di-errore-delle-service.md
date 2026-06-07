# Codici di errore dell'e-service

Per ciascun codice si imposta l'applicabilità e, per i codici obbligatori, la causa, l'azione utente e le note.

| Codice  | Esito                             | Tipo         |
| ------- | --------------------------------- | ------------ |
| **200** | Attestato valido                  | Obbligatorio |
| **400** | Bad Request                       | Obbligatorio |
| **401** | Unauthorized                      | Obbligatorio |
| **404** | Not found                         | Obbligatorio |
| **429** | Too Many Requests                 | Obbligatorio |
| **500** | Errore generico interno           | Obbligatorio |
| **503** | Servizio non disponibile          | Obbligatorio |
| **540** | EAA non esistente presso l'AS     | Opzionale    |
| **541** | EAA in stato non valido o sospeso | Opzionale    |

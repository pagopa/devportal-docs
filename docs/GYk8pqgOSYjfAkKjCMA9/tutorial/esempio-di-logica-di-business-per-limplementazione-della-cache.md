# Esempio di logica di business per l'implementazione della cache

Utilizzando l'endpoint `/events/keys` è possibile chiamare puntualmente l'endpoint `/keys/{kid}` per recuperare tutte le chiavi nuove che vengono aggiunte (quelle con `eventType == "ADDED"`).&#x20;

Quelle chiavi per le quali l'evento è `DELETED` vanno rimosse dalla propria cache. Se si vuole ottenere una controprova, anche qui è possibile chiamare l'endpoint `/keys/{kid}` con il `kid` della chiave che si è riscontrato essere stata cancellata, e il sistema restituirà uno status code `404 - Not Found`.

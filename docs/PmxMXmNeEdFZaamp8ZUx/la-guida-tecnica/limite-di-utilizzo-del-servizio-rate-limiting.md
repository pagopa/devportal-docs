# Limite di utilizzo del servizio: rate limiting

Per garantire agli utenti affidabilità e disponibilità del servizio, è previsto un sistema di _rate limiting_ che pone un limite al numero di richieste che possono essere effettuate entro uno specifico intervallo di tempo.

**Il&#x20;**_**rate limit**_**&#x20;è impostato a 25 richieste per secondo, per ente aderente**, sia in deposito sia in recupero segnali.

Le informazioni sul _rate limiting_ sono disponibili come intestazioni della risposta HTTP e sono applicate **per singolo aderente** (produttore o consumatore di segnali). Ad esempio, le seguenti intestazioni

`x-rate-limit-interval: 1000`\
`x-rate-limit-limit: 25`\
`x-rate-limit-remaining: 24`\
`x-rate-limit-reset: 1733419765156`

significano che:

* l’intervallo di tempo è di 1000 millisecondi (1 secondo)
* il numero massimo di richieste a disposizione per l'intervallo di tempo è 25
* il numero di richieste a disposizione del chiamante per l'intervallo di tempo è 24
* il successivo intervallo di tempo (e quindi l'azzeramento del contatore di richieste), calcolato a partire dalla prima richiesta dell’ente aderente effettuata il 5 dicembre 2024 18:29:24.156 GMT+01:00, scatterà il 5 dicembre 2024 18:29:25.156 GMT+01:00 (espresso in epoch unix timestamp msec).

Il fatto che il _rate limiting_ si applichi a livello di aderente significa che saranno conteggiate tutte le richieste effettuate dall’aderente, a prescindere dal numero di client api m2m che verranno utilizzati. Quindi se un aderente invoca il servizio con 2 client api m2m (client “A”, client “B”) il numero di richieste “spese” per singolo intervallo di tempo sarà la somma di (client “A”, client “B”).

Superato il limite di richieste per intervallo di tempo, il servizio restituirà un errore (HTTP Status Code `429`).


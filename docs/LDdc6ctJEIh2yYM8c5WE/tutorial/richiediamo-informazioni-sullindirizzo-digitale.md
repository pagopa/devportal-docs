# Richiediamo informazioni sull'indirizzo digitale

L’e-service “Attestazione - Digital Address” pubblicato sul catalogo, consente **di verificare la presenza e la correttezza di un determinato indirizzo digitale**, simulando un ente che possiede tutte le informazioni anagrafiche legate agli indirizzi digitali dei soggetti.

In questo tutorial vedremo un caso reale di applicazione di questo servizio.

## Il caso d'uso

Come fruitore, ho la necessità **di arricchire la mia base dati aggiungendo gli indirizzi digitali** dei soggetti.  Per procedere, dovrò effettuare la sottoscrizione all’e-service qs“Attestazione - Digital Address”  che permette di effettaure anche un’estrazione massiva, grazie all’invocazione del seguente set di API:

`POST /digital-address-verification/list`

`GET /digital-address-verification/list/state/{id}`

`GET /digital-address-verification/list/response/{id}`

I metodi sopra esposti permettono di effettuare un’estrazione massiva degli indirizzi, a partire dagli id soggetto indicati all’interno della request.

_aggiungere qui  le differenze tra le tre API: nel resto della documentazione le due GET sono delle POST, cosa è corretto?_



## Data preparation

La prima cosa da fare, come abbiamo visto, è la configurazione dei dati. Procediamo dunque, per la prima volta, alla fase di Data Preparation.

Facendo riferimento al problema sopra esposto, supponiamo di avere la seguente base dati all’interno della nostra applicazione

| ID               | Nome  | Cognome | Pec  |
| ---------------- | ----- | ------- | ---- |
| RSSMRA80A01H501U | Mario | Rossi   | NULL |
| LGUBCH80A01H501B | Luigi | Bianchi | NULL |

In accordo a questa effettuiamo la data preparation simulando il seguente scenario:

●     L’id **RSSMRA80A01H501U** è un soggetto noto a cui è associata una pec ancora valida

●     L’id **LGUBCH80A01H501B** è un soggetto noto a cui è associata una pec non più valida

Replichiamo la configurazione desiderata nel seguente modo:

`POST /digital-address-verification/data-preparation`

**Header**:

```
Content-Type: application/json
Authorization: Bearer {{bearerToken}}
x-correlation-id: {{myUniqueCorrelationId}}
apikey: {{apikey}}
```

**Payload**:

```json
application/json
{
    "idSubject": "RSSMRA80A01H501U",
    "from": "2017-07-21T17:32:28Z",
    "digitalAddress": [
        {
            "digitalAddress": "example_1@pec.it",
            "profession": "Doctor",
            "information": {
                "reason": "CESSAZIONE_UFFICIO",
                "endDate": "2999-12-31T17:32:28Z"
            }
        }
    ]
}
```

**Response**:

```
application/json
```

"_aggiungere qui la response mancante_".

**Status codes:**

●     **201** - Configurazione salvata con successo

●     **400** - Errore formato dati input

Abbiamo configurato il primo soggetto, procediamo alla configurazione del secondo

**Header:**

```json
Content-Type: application/json
Authorization: Bearer {{bearerToken}}
x-correlation-id: {{myUniqueCorrelationId}}
apikey: {{apikey}}
```

**Payload:**

```json
application/json
{
    "idSubject": "LGUBCH80A01H501B",
    "from": "2017-07-21T17:32:28Z",
    "digitalAddress": [
        {
            "digitalAddress": "example_2@pec.it",
            "profession": "Doctor",
            "information": {
                "reason": "CESSAZIONE_VOLONTARIA",
                "endDate": "2004-12-31T17:32:28Z"
            }
        }
    ]
}
```

**Response:**

```
// Some code
```

"_aggiungere qui la response mancante_".

Status codes:

●     **201** - Configurazione salvata con successo

●     **400** - Errore formato dati input

Abbiamo configurato anche il secondo soggetto, specificando che la data di fina validità della pec è antecedente alla data odierna.

Procediamo a questo punto all’invocazione delle API messe a disposizione dell’e-service.



## Invocazione e-service per estrazione massiva

Effettuo la seguente chiamata per l’id soggetto di Mario Rossi e e Lugi Bianchi.

`POST /digital-address-verification/list`

```bash
curl --location '{host}/digital-address-verification/list' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-correlation-id: 123456' \
--header 'Authorization: Bearer xxx' \
--data '{
  "idSubjects": [
    "RSSMRA80A01H501U",
    "LGUBCH80A01H501B"
  ],
  "idRequest": "00001"
}'
```

Response:

```json
application/json
{
    "state": "PRESA_IN_CARICO",
    "message": "PRESA_IN_CARICO",
    "id": "20d0c1e1-b9c2-460b-8f8a-c8c6f264bb81",
    "requestTimestamp": "2024-10-15T14:36:24.028Z"
}
```

Status codes:

●     200 - Richiesta effettuata con successo

La response ci indica che la nostra richiesta di estrazione massiva è stata presa in carico. Utilizzeremo l’id presente all’interno della response, per invocare la successiva api.



## Invocazione e-service per  Verifica stato esortazione massiva

Effettuiamo la seguente chiamata, utilizzando l’id ricevuto nella precedente

`POST /digital-address-verification/list/state/:id`

{% code overflow="wrap" %}
```bash
curl --location '{host}/digital-address-verification/list/state/20d0c1e1-b9c2-460b-8f8a-c8c6f264bb81' \
--header 'Accept: application/json' \
--header 'x-correlation-id: 1' \
--header 'Authorization: Bearer xxx'
```
{% endcode %}

Response:

```json
application/json
{
    "status": "IN_ELABORAZIONE",
    "message": "IN_ELABORAZIONE"
}
```

Status codes:

●     200 - Richiesta effettuata con successo

La response ci indica che la nostra richiesta di estrazione massiva è ancora in fase di elaborazione.



## Invocazione e-service per  Verifica stato esrtazione massiva

Effettuo dunque la chiamata nuovamente, finchè non ricevo una response che mi indica che l’estrazione è terminata con successo.

Non appena il campo “status” presente all’interno della respons è DISPONIBILE, procedo con la successiva invocazione.



Effettuiamo la seguente chiamata, utilizzando l’id ricevuto nella richiesta di estrazione massiva

`POST /digital-address-verification/list/response/:id`

{% code overflow="wrap" %}
```bash
curl --location 'host}/digital-address-verification/list/response/20d0c1e1-b9c2-460b-8f8a-c8c6f264bb81' \
--header 'Accept: application/json' \
--header 'x-correlation-id: 1' \
--header 'Authorization: Bearer xxx'

```
{% endcode %}

Response:

```json
application/json
{
    "list": [
        {
            "idSubject": "RSSMRA80A01H501U",
            "from": "2017-07-21T17:32:28Z",
            "digitalAddress": [
                {
                    "digitalAddress": "example_1@pec.it",
                    "profession": "Doctor",
                    "information": {
                        "reason": "CESSAZIONE_UFFICIO",
                        "endDate": "2999-12-31T17:32:28Z"
                    }
                }
            ]
        },
        {
            "idSubject": "LGUBCH80A01H501B",
            "from": "2017-07-21T17:32:28Z",
            "digitalAddress": [
                {
                    "digitalAddress": "example_2@pec.it",
                    "profession": "Doctor",
                    "information": {
                        "reason": "CESSAZIONE_VOLONTARIA",
                        "endDate": "2004-12-31T17:32:28Z"
                    }
                }
            ]
        }
    ]
}

```

Status codes:

●     200 - Richiesta effettuata con successo

La response ci restituisce i dati presenti nella base dati dell’ente.

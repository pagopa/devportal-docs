# Richiediamo informazioni sullo stato di famiglia

L’e-service “Attestazione - Family Status” pubblicato sul catalogo, offre un servizio mediante il quale è possibile verificare la correttezza delle informazioni legate allo stato di famiglia simulando un ente che possiede le informazioni aggiornate e centralizzate legate allo stato di famiglia.

In questo tutorial vedremo un caso reale di applicazione di questo servizio.

## **Il caso d'uso**

Come fruitore, ho la necessità di **verificare le informazioni** presenti sulla mia base dati e **legate allo stato di famiglia dei soggetti.** Per procedere, dovrò effettuare  la sottoscrizione all’e-service “Attestazione - Family status” che perme di recuperare questi dati grazie all’invocazione della seguente  API:

`POST /family-status`

## Data Preparation

La prima cosa da fare, come abbiamo visto, è la configurazione dei dati. Procediamo dunque, per la prima volta, alla fase di Data Preparation.

Facendo riferimento al problema sopra esposto, supponiamo di avere la seguente base dati all’interno della nostra applicazione

| ID               | Nome  | Cognome | Stato civile | Data inizio relazione | Data fine relazione |
| ---------------- | ----- | ------- | ------------ | --------------------- | ------------------- |
| RSSMRA80A01H501U | Mario | Rossi   | CONIUGATO    | 01/01/2022            | NULL                |
| LGUBCH80A01H501B | Luigi | Bianchi | CELIBE       | 01/06/1988            | NULL                |

In accordo a questa effettuiamo la data preparation simulando il seguente scenario:

●     L’id **RSSMRA80A01H501U** è un soggetto per il quale è noto lo stato di famiglia come CONIUGATO

●     L’id **LGUBCH80A01H501B** è un soggetto per il quale è noto lo stato di famiglia come CELIBE

Replichiamo la configurazione desiderata nel seguente modo:

`POST /family-status`

**Header:**

```
Content-Type: application/json
Authorization: Bearer {{bearerToken}}
x-correlation-id: {{myUniqueCorrelationId}}
```

**Payload:**

```json
application/json
{
    "subject": {
        "subjectId": "RSSMRA80A01H501U",
        "id": "123",
        "surname": "Rossi",
        "name": "Mario",
        "gender": "M",
        "birthDate": {
            "eventDate": "1970-11-15",
            "placeOfBirth": {
                "municipality": {
                    "nameMunicipality": "Roma",
                    "istatCode": "123456",
                    "acronymIstatProvince": "RM",
                    "placeDescription": "N/D"
                },
                "place": {
                    "placeDescription": "N/D",
                    "countryDescription": "N/D",
                    "codState": "ITA",
                    "provinceCounty": "N/D"
                }
            }
        }
    },
    "subjectLink": {
        "relationshipType": "Coniuge",
        "startDate": "2021-11-15",
        "relationshipCode": "CONIUGE",
        "memberSequence": "01",
        "startDateRelationship": "2022-01-01"
    }
}
```

**Response:**

```json
application/json
{
    "uuid": "2c41e733-e9ae-4b69-9243-6217d4cf26e3"
}
```

**Status codes:**

●     200 - Configurazione salvata con successo

Procediamo con il censimento anche del secondo soggetto, simulando che l’erogatore sia a conoscenza dell’indirizzo.

**Header:**

```
Content-Type: application/json
Authorization: Bearer {{bearerToken}}
x-correlation-id: {{myUniqueCorrelationId}}
```

**Payload:**

```
application/json
{
    "subject": {
        "subjectId": "LGUBCH80A01H501B",
        "id": "1234",
        "surname": "Luigi",
        "name": "Bianchi",
        "gender": "M",
        "birthDate": {
            "eventDate": "1988-06-01",
            "placeOfBirth": {
                "municipality": {
                    "nameMunicipality": "Roma",
                    "istatCode": "123456",
                    "acronymIstatProvince": "RM",
                    "placeDescription": "N/D"
                },
                "place": {
                    "placeDescription": "N/D",
                    "countryDescription": "N/D",
                    "codState": "ITA",
                    "provinceCounty": "N/D"
                }
            }
        }
    },
    "subjectLink": {
        "relationshipType": "Coniuge",
        "startDate": "2023-07-01",
        "relationshipCode": "CONIUGE",
        "memberSequence": "01",
        "startDateRelationship": "1988-06-01"
    }
}
```

**Response:**

```
application/json
{
    "uuid": "2456398c-e932-4e97-a7b9-f9f15e9c343f"
}
```

**Status codes:**

●     200 - Configurazione salvata con successo

Dato il nostro scenario abbiamo completato la fase di configurazione.

Procediamo a questo punto all’invocazione delle API messe a disposizione dell’e-service.

## Invocazione e-service

Completata la fase di configurazione non resta che procedere all’invocazione del servizio effettuando la verifica per i due soggetti presenti nella mia base dati.

Nello specifico, andremo a verificare la correttezza delle informaizoni invocando la seguente API

`POST /family-status`

che ci permette di recuperare le informazioni a partire dall’id del soggetto.

Prima di procedere all’invocazione dei suddetti è importante sapere che l’e-service in questione prevede un ulteriore livello di sicurezza. Le api prevedono, infatti, l’invio di due header aggiuntivi:

●     [Agid-JWT-TrackingEvidence](broken-reference)

●     [Agid-JWT-Signature](broken-reference)



Dopo aver generato correttamente i token di cui sopra e il Voucher, possiamo procedere con le seguenti request.

Invochiamo prima di tutto l’eservice per il soggetto “Mario Rossi”

```bash
curl --location '{host}/family-status' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-correlation-id: 123' \
--header 'agid-jwt-signature: zzz' \
--header 'agid-jwt-trackingevidence: yyy' \
--header 'Authorization: Bearer xxx' \
--data '{
  "operationId": "001",
  "criteria": {
    "subjectId": "RSSMRA80A01H501U"
  },
  "requestData": {
    "dateOfRequest": "2024-11-13",
    "useCase": "Verifica",
    "motivation": "Verifica informaizoni"
  }
}'
```

Response:

```json
application/json
{
    "idOp": "001",
    "subjects": {
        "subject": [
            {
                "generality": {
                    "subjectId": {
                        "subjectId": "RSSMRA80A01H501U",
                        "subjectIdValidity": "",
                        "dataAttributionValidity": ""
                    },
                    "surname": "Rossi",
                    "noSurname": "false",
                    "name": "Mario",
                    "noName": "false",
                    "gender": "M",
                    "birthDate": "1970-11-15",
                    "noDay": "",
                    "noMonth": "",
                    "placeOfBirth": {
                        "municipality": {
                            "nameMunicipality": "Roma",
                            "istatCode": "123456",
                            "acronymIstatProvince": "RM",
                            "placeDescription": "N/D"
                        },
                        "place": {
                            "placeDescription": "N/D",
                            "countryDescription": "N/D",
                            "codState": "ITA",
                            "provinceCounty": "N/D"
                        }
                    },
                    "AIRESubject": "",
                    "yearExpatriation": "",
                    "idSubjectData": "",
                    "note": ""
                },
                "subjectLink": {
                    "relationshipType": "Coniuge",
                    "startDate": "2021-11-15",
                    "relationshipCode": "CONIUGE",
                    "memberSequence": "01",
                    "startDateRelationship": "2022-01-01"
                }
            }
        ]
    }
}
```

**Status codes:**

●     **200** - Richiesta effettuata con successo

Procediamo adesso per “Luigi Bianchi”

```bash
curl --location '{host}/family-status' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-correlation-id: 123' \
--header 'agid-jwt-signature: zzz' \
--header 'agid-jwt-trackingevidence: yyy' \
--header 'Authorization: Bearer xxx' \
--data '{
  "operationId": "002",
  "criteria": {
    "subjectId": "LGUBCH80A01H501B"
  },
  "requestData": {
    "dateOfRequest": "2024-11-13",
    "useCase": "Verifica",
    "motivation": "Verifica informaizoni"
  }
}'
```

**Response:**

```json
application/json
{
    "idOp": "002",
    "subjects": {
        "subject": [
            {
                "generality": {
                    "subjectId": {
                        "subjectId": "LGUBCH80A01H501B",
                        "subjectIdValidity": "",
                        "dataAttributionValidity": ""
                    },
                    "surname": "Luigi",
                    "noSurname": "false",
                    "name": "Bianchi",
                    "noName": "false",
                    "gender": "M",
                    "birthDate": "1988-06-01",
                    "noDay": "",
                    "noMonth": "",
                    "placeOfBirth": {
                        "municipality": {
                            "nameMunicipality": "Roma",
                            "istatCode": "123456",
                            "acronymIstatProvince": "RM",
                            "placeDescription": "N/D"
                        },
                        "place": {
                            "placeDescription": "N/D",
                            "countryDescription": "N/D",
                            "codState": "ITA",
                            "provinceCounty": "N/D"
                        }
                    },
                    "AIRESubject": "",
                    "yearExpatriation": "",
                    "idSubjectData": "",
                    "note": ""
                },
                "subjectLink": {
                    "relationshipType": "Coniuge",
                    "startDate": "2023-07-01",
                    "relationshipCode": "CONIUGE",
                    "memberSequence": "01",
                    "startDateRelationship": "1988-06-01"
                }
            }
        ]
    }
}
```

Status codes:

●     200 - Richiesta effettuata con successo

Le response ricevute ci permettono di aggiornare coerentemente la nostra base dati.

## Esito finale

Dopo aver interrogato l’e-service possiamo procedere all’aggiornamento della nostra base dati in base alle informazioni che abbiamo recuperato.

Di seguito una panoramica della situazione a seguito dell’aggiornamento

| ID               | Nome  | Cognome | Stato civile | Data inizio relazione | Data fine relazione |
| ---------------- | ----- | ------- | ------------ | --------------------- | ------------------- |
| RSSMRA80A01H501U | Mario | Rossi   | CONIUGATO    | 01/01/2022            | NULL                |
| LGUBCH80A01H501B | Luigi | Bianchi | CONIUGATO    | 01/07/2023            | NULL                |

La nostra base dati è stata correttamente aggiornata. Nello specifico è stata confermata che l’informazione per il soggetto RSSMRA80A01H501U è corretto, mentre per il secondo soggetto è stata aggiornata la relazione legata al suo stato di famiglia.

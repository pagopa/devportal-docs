# Verifichiamo la correttezza delle informazioni di residenza

L’e-service “Attestazione - Residence Verification”, pubblicato sul catalogo, consente di **verificare la presenza e la correttezza di un determinato indirizzo fisico** simulando un ente che possiede le informazioni aggiornate e centralizzate di tutti gli indirizzi di residenza/domicili fisici dei soggetti.

In questo tutorial vedremo un caso reale di applicazione di questo servizio.

## **Il caso d'uso**

Come fruitore, ho la necessità di **verificare la correttezza delle informazioni presenti sulla mia base dati** relative agli indirizzi fisici dei soggetti.  Per procedere, dovrò effettuare la sottoscrizione all’e-service “Attestazione - Residence Verification”, che consente di recuperare questi dati grazie all’invocazione del seguente set di API:

`POST /residence-verification`

`POST /residence-verification/check`

## Data preparation

La prima cosa da fare è la configurazione dei dati. Procediamo dunque, per la prima volta, alla fase di Data Preparation.

Facendo riferimento al problema sopra esposto, supponiamo di avere la seguente base dati all’interno della nostra applicazione

<table data-header-hidden><thead><tr><th width="235">ID</th><th width="96">Nome</th><th width="143">Cognome</th><th>CAP</th><th>Città</th></tr></thead><tbody><tr><td>RSSMRA80A01H501U</td><td>Mario</td><td>Rossi</td><td>00100</td><td>Roma</td></tr><tr><td>LGUBCH80A01H501B</td><td>Luigi</td><td>Bianchi</td><td>NULL</td><td>NULL</td></tr></tbody></table>

In accordo a questa effettuiamo la data preparation simulando il seguente scenario:

1. L’id **RSSMRA80A01H501U** è un soggetto noto a cui è associato l’indirizzo di residenza ed è ancora valido
2. L’id **LGUBCH80A01H501B** è un soggetto noto per il quale però non siamo a conoscenza dell’attuale indirizzo di residenza.

Replichiamo la configurazione desiderata nel seguente modo:

`POST /residence-verification/data-preparation`

**Header:**

```sh
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
        "gender": "M"
       
    },
    "address": {
        "addressType": "Via",
        "noteaddress": "N/D",
        "address": {
            "cap": "00100",
            "municipality": {
                "nameMunicipality": "Roma",
                "istatCode": "123456",
                "acronymIstatProvince": "RM",
                "placeDescription": "N/D"
            }
        },
        "addressStartDate": "2024-01-01"
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

**`200`**` ``- Configurazione salvata con successo`

Procediamo con il censimento anche del secondo soggetto, simulando che l’erogatore sia a conoscenza dell’indirizzo.

**Header:**

```
Content-Type: application/json
Authorization: Bearer {{bearerToken}}
x-correlation-id: {{myUniqueCorrelationId}}
```

**Payload:**

<pre class="language-json"><code class="lang-json"><strong>application/json
</strong><strong>{
</strong>    "subject": {
        "subjectId": "LGUBCH80A01H501B",
        "id": "1234",
        "surname": "Bianchi",
        "name": "Luigi",
        "gender": "M"
       
    },
    "address": {
        "addressType": "Via",
        "noteaddress": "N/D",
        "address": {
            "cap": "10024",
            "municipality": {
                "nameMunicipality": "Torino",
                "istatCode": "123456",
                "acronymIstatProvince": "TO",
                "placeDescription": "N/D"
            }
        },
        "addressStartDate": "2024-01-01"
    }
}
</code></pre>

**Response:**

```
application/json
{
    "uuid": "bc830947-4772-44ce-94eb-7c8c538f785c"
}
```

**Status codes:**

**`200`**` ``- Configurazione salvata con successo`

Dato il nostro scenario abbiamo completato la fase di configurazione.

## Generazione dei Token Agid

### Agid-JWT-TrackingEvidence

Per poter procedere all’invocazione delle API, l'utente deve presentare anche il token di audit "Agid-JWT-TrackingEvidence", come richiesto dal pattern "AUDIT\_REST\_01"

Il pattern garantisce i seguenti punti:

* L'autenticità della comunicazione tra il servizio erogato e ciascun utente è assicurata tramite la sicurezza a livello di messaggio, seguendo il pattern "ID\_AUTH\_REST\_01 via PDND".
* Le informazioni di audit necessarie al fornitore per identificare l'origine specifica di ogni richiesta di accesso ai dati effettuata dall'utente sono incluse in un token di audit conforme al pattern "AUDIT\_REST\_01". Queste informazioni vengono trasmesse dall'applicazione dell'utente attraverso l'header HTTP.

Di seguito riportiamo le linee guida utili alla generazione del suddetto token:

1. Utilizzare una libreria JWT: a seconda del linguaggio di programmazione scelto è possibile utilizzare differenti librerie. Per fare un esempio è possibile usare una libreria come jsonwebtoken per Node.js oppure Java, pyjwt per Python, o altre librerie JWT disponibili nei vari linguaggi di programmazione.
2. Definire il payload del token: Il payload del JWT deve contenere le informazioni richieste dal pattern "AUDIT\_REST\_01":
   * **iat** (Issued At): la data e l'ora in cui il token è stato emesso, espressa in secondi.
   * **exp** (Expiration): la data e l'ora di scadenza del token.
   * **sub** (Subject): l'identificativo del soggetto, ovvero il clientId censito su PDND.
   * **iss**(Issuer): l'identificativo del soggetto, ovvero il clientId censito su PDND.
   * **aud**(Audience): l'identificativo dell'audience, reperibile sempre nella sezione dedicata al tuo client;
   * &#x20;**purposeId**: rappresenta l’id della finalità
   * &#x20;**jti** (JWT ID): un identificativo univoco del token.
3. Firmare il token: Dopo aver creato il payload, è necessario firmare il token con la chiave privata caricata sulla PDND in fase di registazione del client (riferimento al paragrafo[ ](https://pagopa.atlassian.net/wiki/spaces/ADA/pages/1289945113/Guida+Operativa+Ambiente+Attestazione#3.4.1-Come-generare-il-Voucher)[https://pagopa.atlassian.net/wiki/spaces/ADA/pages/1289945113/Guida+Operativa+Ambiente+Attestazione#3.4.1-Come-generare-il-Voucher](https://pagopa.atlassian.net/wiki/spaces/ADA/pages/1289945113/Guida+Operativa+Ambiente+Attestazione#3.4.1-Come-generare-il-Voucher)).\
   &#x20;La firma deve essere generata utilizzando un algoritmoRS256 (RSA con SHA-256) e chiave privata PKCS#8. La chiave privata utilizzata per la firma deve essere quella associata alla chiave pubblica registrata sulla PDND.
4. Generare il JWT: Una volta preparati il payload e la firma, non resta che utilizzare la libreria JWT per la creazione del token.
5. Includere il token nell'header della richiesta: Una volta generato, il token "Agid-JWT-TrackingEvidence" va inserito nell'header HTTP della richiesta.

Se tutti i passaggi sopra riportati sono stati eseguiti correttamente l’erogatore verificherà correttamente il token e risponderà con successo alla richiesta.

### Agid-JWT-Signature

L'AgID-JWT-Signature, in maniera analoga al precedente è un token JSON Web Token (JWT).

Lo scopo di tale token è quello di garantire l'integrità e l'autenticità delle comunicazioni, in conformità con le linee guida dettate dall'Agenzia per l'Italia Digitale (AgID).

Nello specifico, implementa il pattern model “INTEGRITY\_REST\_02”.

Di seguito riportiamo le linee guida utili alla generazione del suddetto token:

1. **Utilizzare una libreria JWT:** a seconda del linguaggio di programmazione scelto è possibile utilizzare differenti librerie. Per fare un esempio è possibile usare una libreria come jsonwebtoken per Node.js oppure Java, pyjwt per Python, o altre librerie JWT disponibili nei vari linguaggi di programmazione.
2. **Definire il payload del token:** Il payload del JWT deve contenere le informazioni richieste dal pattern "AUDIT\_REST\_01":
   * **iat (Issued At):** la data e l'ora in cui il token è stato emesso, espressa in secondi.
   * **exp (Expiration):** la data e l'ora di scadenza del token.
   * **sub (Subject):** l'identificativo del soggetto, ovvero il clientId censito su PDND.
   * **iss(Issuer):** l'identificativo del soggetto, ovvero il clientId censito su PDND.
   * **aud(Audience):** l'identificativo dell'audience, reperibile sempre nella sezione dedicata al tuo client;
   * **kid:** l'id della chiave che si usa per firmare l'asserzion&#x65;_,_ reperibile all’interno del tuo client, sotto la sezione _“Client assertion”_
   * **jti (JWT ID):** un identificativo univoco del token.
   * **signed\_header:** contiene il digest del contenuto (hash dei dati) calcolato con l'algoritmo SHA-256 e il tipo di contenuto, impostato (ad esempio application/json).\
     Relativamente a questo campo, riportiamo di seguito uno snippet di codice esplicativo per la sua valorizzazione

**Esempio in Java:**

```java
import java.security.MessageDigest;
import java.util.Base64;
import java.util.HashMap;
import java.nio.charset.StandardCharsets;
 
// jsonInputString è la request su cui calcolo il digest
String jsonInputString = "My request";
 
try {
    // Calcolo del digest utilizzando SHA-256
    MessageDigest digest = MessageDigest.getInstance("SHA-256");
    byte[] hash = digest.digest(jsonInputString.getBytes(StandardCharsets.UTF_8));
    String encodedBody = Base64.getEncoder().encodeToString(hash);
 
    // Costruzione delle due mappe da settare come claims
    HashMap<String, String> m = new HashMap<String, String>();
    // Setto la request sopra calcolata
    m.put("digest", "SHA-256=" + encodedBody);
 
    HashMap<String, String> m2 = new HashMap<String, String>();
    // Setto il content type della richiesta
    m2.put("content-type", "application/json");
 
    // Valorizzo il claim con le mappe sopra valorizzate
    HashMap<String, Object> claims = new HashMap<String, Object>();
    claims.put("signed_headers", new Object[] {m, m2});
 
    // Stampa per verificare il contenuto dei claims
    System.out.println("Claims: " + claims);
   
} catch (Exception e) {
    e.printStackTrace();
    }
```

Il payload ottenuto a seguito di questo step avrà una forma simile alla seguente:

{% code overflow="wrap" %}
```json
{
  "aud": "https://{{host}}/residence-verification",
  "sub": "8532de2b-386f-4aac-adfc-e46d334d3ad0",
  "nbf": 1729853626,
  "iss": "8532de2b-386f-4aac-adfc-e46d334d3ad0",
  "signed_headers": [
    {
      "digest": "SHA-256=fb1kol0gIrP3ZxA9k0B/Z8Yt9hDBBVhWRVGU8ilWe8Q="
    },
    {
      "content-type": "application/json"
    }
  ],
  "exp": 1730453626,
  "iat": 1729853626,
  "jti": "dd37e0e6-e22d-40c1-a23f-081a8abe123a"
}
```
{% endcode %}

3. **Firmare il token:** Dopo aver creato il payload, è necessario firmare il token con la chiave privata caricata sulla PDND in fase di registazione del client (riferimento al paragrafo[ ](https://pagopa.atlassian.net/wiki/spaces/ADA/pages/1289945113/Guida+Operativa+Ambiente+Attestazione#3.4.1-Come-generare-il-Voucher)[https://pagopa.atlassian.net/wiki/spaces/ADA/pages/1289945113/Guida+Operativa+Ambiente+Attestazione#3.4.1-Come-generare-il-Voucher](https://pagopa.atlassian.net/wiki/spaces/ADA/pages/1289945113/Guida+Operativa+Ambiente+Attestazione#3.4.1-Come-generare-il-Voucher)).\
   &#x20;La firma deve essere generata utilizzando un algoritmoRS256 (RSA con SHA-256)
4. **Generare il JWT:** Una volta preparati il payload e la firma, non resta che utilizzare la libreria JWT per la creazione del token.
5. **Includere il token nell'header della richiesta:** Una volta generato, il token "Agid-JWT-Signature" va inserito nell'header HTTP della richiesta.

Se tutti i passaggi sopra riportati sono stati eseguiti correttamente l’erogatore verificherà correttamente il token e risponderà con successo alla richiesta.

## Invocazione e-service per verifica informazioni

Adesso che abbiamo generato tutti i token previsti dai controlli di sicurezza del servizio, possiamo procedere alla verifica delle informazioni presenti sulla nostra base dati. Per il soggetto “**Mario Rossi**”, del quale conosciamo già l’indirizzo di residenza e dobbiamo verificare la corrispondenza delle informazioni, invochiamo la seguente API:

`POST /residence-verification/check`

```bash
curl --location '{host}/residence-verification/check' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-correlation-id: {{myUniqueCorrelationId}}' \
--header 'Agid-JWT-Signature: {{AgidJWTSignature}}' \
--header 'Agid-JWT-TrackingEvidence: {{AgidJWTTrackingEvidence}}' \
--header 'Authorization: Bearer {{bearerToken}}' \
--data '{
    "operationId": "123",
    "criteria": {
        "subjectId": "RSSMRA80A01H501U",
        "id": "123",
        "surname": "Rossi",
        "name": "Mario",
        "gender": "M"
    },
    "requestData": {
        "dateOfRequest": "2024-01-01",
        "useCase": "my test",
        "motivation": "Check information"
    },
    "check": {
        "address": {
            "addressType": "Via",
            "address": {
                "cap": "00100",
                "municipality": {
                    "nameMunicipality": "Roma",
                    "istatCode": "123456",
                    "acronymIstatProvince": "RO",
                    "placeDescription": "N/D"
                }
            }
        }
    }
}'

```

**Response:**

```json
application/json
{
    "idOp": "123",
    "subjects": {
        "infoSubject": [
            {
                "infoInstitution": [
                    {
                        "id": "94cfacfe-7beb-4c8f-bf4b-3c71207903c7",
                        "chiave": "addressType",
                        "valore": "S",
                        "valoreTesto": "Via",
                        "valoreData": "2024-9-5",
                        "dettaglio": "-"
                    },
                    {
                        "id": "faf003f7-3e2f-4b5d-967c-d9ad404d198e",
                        "chiave": "address",
                        "valore": "N",
                        "valoreTesto": {
                            "cap": "00100",
                            "municipality": {
                                "nameMunicipality": "Roma",
                                "istatCode": "123456",
                                "acronymIstatProvince": "RM",
                                "placeDescription": "N/D"
                            },
                            "fraction": "",
                            "toponym": {
                                "codType": "",
                                "type": "",
                                "originType": "",
                                "toponymCod": "",
                                "toponymDenomination": "",
                                "toponymSource": ""
                            },
                            "civicNumber": {
                                "civicCod": "",
                                "civicSource": "",
                                "civicNumber": "",
                                "metric": "",
                                "progSNC": "",
                                "letter": "",
                                "exponent1": "",
                                "color": "",
                                "internalCivic": {
                                    "court": "",
                                    "stairs": "",
                                    "internal1": "",
                                    "espInternal1": "",
                                    "internal2": "",
                                    "espInternal2": "",
                                    "externalStairs": "",
                                    "secondary": "",
                                    "floor": "",
                                    "nui": "",
                                    "isolated": ""
                                }
                            }
                        },
                        "valoreData": "2024-9-5",
                        "dettaglio": "-"
                    }
                ]
            }
        ]
    }
}

```

Status codes:

**`200`**` ``- Richiesta effettuata con successo`

Dalla response ricevuta deduciamo che le informazioni presenti sulla nostra base dati sono effettivamente coerenti con quanto detenuto dall’erogatore

## Invocazione e-service per richiesta informazioni

Per il soggetto “Luigi Bianchi”, del quale non conosciamo l’indirizzo di residenza, invochiamo la seguente API:

`POST /residence-verification`

```json
curl --location '{{
  "operationId": "1",
  "criteria": {
    "subjectId": "LGUBCH80A01H501B",
    "id": "1234"
  },
  "requestData": {
    "dateOfRequest": "2024-11-01",
    "useCase": "my test",
    "motivation": "retrieve information"
  }
}'
```

**Response:**

```json
application/json
{
    "idOp": "1",
    "subjects": {
        "subject": [
            {
                "generality": {
                    "subjectId": {
                        "subjectId": "LGUBCH80A01H501B",
                        "subjectIdValidity": "",
                        "dataAttributionValidity": ""
                    },
                    "surname": "Bianchi",
                    "noSurname": "false",
                    "name": "Luigi",
                    "noName": "false",
                    "gender": "M",
                    "birthDate": "",
                    "noDay": "",
                    "noMonth": "",
                    "birthPlace": {
                        "exceptionalPlace": "",
                        "municipality": {
                            "nameMunicipality": "",
                            "istatCode": "",
                            "acronymIstatProvince": "",
                            "placeDescription": ""
                        },
                        "place": {
                            "placeDescription": "",
                            "countryDescription": "",
                            "codState": "",
                            "provinceCounty": ""
                        }
                    },
                    "AIRESubject": "",
                    "yearExpatriation": "",
                    "idSubjectData": "",
                    "note": ""
                },
                "address": [
                    {
                        "addressType": "Via",
                        "noteaddress": "N/D",
                        "address": {
                            "cap": "10024",
                            "municipality": {
                                "nameMunicipality": "Torino",
                                "istatCode": "123456",
                                "acronymIstatProvince": "TO",
                                "placeDescription": "N/D"
                            },
                            "fraction": "",
                            "toponym": {
                                "codType": "",
                                "type": "",
                                "originType": "",
                                "toponymCod": "",
                                "toponymDenomination": "",
                                "toponymSource": ""
                            },
                            "civicNumber": {
                                "civicCod": "",
                                "civicSource": "",
                                "civicNumber": "",
                                "metric": "",
                                "progSNC": "",
                                "letter": "",
                                "exponent1": "",
                                "color": "",
                                "internalCivic": {
                                    "court": "",
                                    "stairs": "",
                                    "internal1": "",
                                    "espInternal1": "",
                                    "internal2": "",
                                    "espInternal2": "",
                                    "externalStairs": "",
                                    "secondary": "",
                                    "floor": "",
                                    "nui": "",
                                    "isolated": ""
                                }
                            }
                        },
                        "foreignState": {
                            "foreignAddress": {
                                "cap": "",
                                "place": {
                                    "placeDescription": "",
                                    "countryDescription": "",
                                    "countryState": "",
                                    "provinceCounty": ""
                                },
                                "toponym": {
                                    "denomination": "",
                                    "civicNumber": ""
                                }
                            },
                            "consulate": {
                                "consulateCod": "",
                                "consulateDescription": ""
                            }
                        },
                        "presso": "",
                        "addressStartDate": "2024-01-01"
                    }
                ]
            }
        ]
    }
}
```

Status codes:

**`200`**` ``- Richiesta effettuata con successo`

Dalla response ricevuta possiamo arricchire la nostra base dati con le informaizoni ricevute.

## Esito Finale

Dopo aver interrogato l’e-service possiamo procedere all’aggiornamento della nostra base dati in base alle informazioni che abbiamo recuperato.

Di seguito una panoramica della situazione a seguito dell’aggiornamento

<table data-header-hidden><thead><tr><th width="259">ID</th><th width="97">Nome</th><th>Cognome</th><th>CAP</th><th>Città</th></tr></thead><tbody><tr><td>RSSMRA80A01H501U</td><td>Mario</td><td>Rossi</td><td>00100</td><td>Roma</td></tr><tr><td>LGUBCH80A01H501B</td><td>Luigi</td><td>Bianchi</td><td>10024</td><td>Torino</td></tr></tbody></table>

La nostra base dati è stata correttamente aggiornata e abbiamo arricchito il soggetto Luigi Bianchi con le informazioni mancanti.

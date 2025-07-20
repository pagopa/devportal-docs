# Come fruire di un DPoP

### Step 1 - C**lient assertion**

Il fruitore crea una client assertion secondo il processo standard (vedi [sezione dedicata](https://developer.pagopa.it/pdnd-interoperabilita/guides/pdnd-manuale-operativo/manuale-operativo/utilizzare-i-voucher#id-1.-generazione-client-assertion)).

## **Step 2 - Costruisce una prima DPoP**

Il fruitore procede alla costruzione della DPoP destinata al server autorizzativo di PDND, vale a dire un JWT conHeader:

```
{
  "typ": "dpop+jwt",
  "alg": "ES256",
  "jwk": "{CHIAVE_PUBBLICA_CHIAMANTE}"
}
```

Payload:

```
{
  "htm": "POST",
  "htu": "https://auth.interop.pagopa.it/token.oauth2",
  "iat": 1747406361,
  "jti": "b60203a7-6f31-4d08-a3d1-f69ba308eee0"
}
```

Ecco nel dettaglio i campi sopra indicati:

| Nome campo | Significato                                                                                                                                                                                                                                    |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| typ        | deve essere impostato a dpop+jwt                                                                                                                                                                                                               |
| alg        | indica l'algoritmo usato per la firma della DPoP. L'algoritmo consigliato è ES256                                                                                                                                                              |
| jwk        | la chiave pubblica in formato JWK corrispondente alla chiave privata utilizzata per firmare la DPoP                                                                                                                                            |
| htm        | indica il metodo HTTP che si sta invocando. Per l'ottenimento di un voucher da PDND Interoperabilità, il metodo è POST                                                                                                                         |
| htu        | indica l'URL che si sta invocando. Per l'ottenimento di un voucher da PDND Interoperabilità in ambiente di produzione è https://auth.interop.pagopa.it/token.oauth2 (per gli ambienti di attestazione e collaudo va inserita quella specifica) |
| iat        | l'issued at, il timestamp riportante data e ora in cui viene creata la DPoP, espresso in [UNIX epoch](https://datatracker.ietf.org/doc/html/rfc3339) (valore numerico, non stringa)                                                            |
| jti        | identificativo univoco della DPoP. Deve essere cura del fruitore assicurarsi che l'id di questo token sia unico e non venga riutilizzato                                                                                                       |

## **Step 3 - Richiedere un voucher a PDND**

Generate la DPoP e la client assertion, il fruitore può richiedere un voucher al server autorizzativo di PDND Interoperabilità secondo il processo standard ([vedi sezione dedicata](https://developer.pagopa.it/pdnd-interoperabilita/guides/pdnd-manuale-operativo/manuale-operativo/utilizzare-i-voucher#id-2.-richiesta-voucher-a-pdnd)), semplicemente aggiungendo nell'intestazione della richiesta l’header DPoP valorizzato con la DPoP prodotta:DPoP: \<DPoP\_proof>

## **Step 4 - Il server di PDND verifica e rilascia il voucher**

Il server autorizzativo di PDND Interoperabilità effettua le verifiche necessarie, in particolare:

* verifica la client-assertion secondo i controlli già previsti;
* verifica la firma della DPoP utilizzando la chiave pubblica indicata nel campo jwk contenuto nel header;
* controlla che i campi htm e htu corrispondano ai valori attesi per la richiesta in corso;
* considera temporalmente valida una proof presentata entro 60 secondi dalla data di emissione della proof stessa (iat);
* verifica che il valore del campo jti non sia già stato utilizzato per un'altra chiamata verso il server autorizzativo di PDND Interoperabilità.

Il server autorizzativo di PDND Interoperabilità, validata la DPoP, restituisce un voucher di tipo DPoP (campo token\_type) firmato come JWT con header di tipo "typ": "at+jwt" e contenente un claim cnf.jkt.La risposta che il server autorizzativo di PDND Interoperabilità restituisce è la seguente:

```
{
  "access_token": "eyJ0eXAiOiJhdCtqd3QiLC...",
  "expires_in": 600,
  "token_type": "DPoP"
}
```

Se decodifichiamo il campo dedicato all'access\_token, troviamoHeader:

```
{
  "typ": "at+jwt",
  "alg": "RS256",
  "use": "sig",
  "kid": "{KID_CHIAVE_PDND}"
}
```

Payload:

```
{
  "iss": "interop.pagopa.it", 
  "nbf": 1747408537,
  "iat": 1747408537,
  "exp": 1747409537,
  "jti": "12297ac1-c192-4573-8350-207a4213e5ac",
  "aud": "https://eservice.pa.it/api/v1",
  "sub": "9b361d49-33f4-4f1e-a88b-4e12661f2309",
  "client_id": "9b361d49-33f4-4f1e-a88b-4e12661f2309",
  "purposeId": "1b361d49-33f4-4f1e-a88b-4e12661f2300",
  "producerId" : "0e9e2dab-2e93-4f24-ba59-38d9f11198ca",
  "consumerId" : "69e2865e-65ab-4e48-a638-2037a9ee2ee7",
  "eserviceId" : "b8c6d7ad-93fc-4eaf-9018-3cd8bf98163f",
  "descriptorId": "9525a54b-9157-4b46-8976-ec66f20b7d7e",
  "cnf": {
    "jkt" : "L5TP6x6ved3p_jmIAtCiHMcNJeRrGWAusNnQkTTrnLY"
  }
}
```

dove il campo cnf.jkt contiene il thumbprint della chiave pubblica in formato JWK ([RFC 7638](https://datatracker.ietf.org/doc/html/rfc7638)) utilizzata nella DPoP inviata dal fruitore (client) verso PDND Interoperabilità (server autorizzativo).

## **Step 5 - Costruitre una seconda DPoP**

Il fruitore costruisce una seconda DPoP, che questa volta è destinata all'API dell'e-service dell'erogatore. Questa seconda DPoP è simile a quella prodotta nel secondo passaggio, con due differenze:

* i campi htm e htu devono essere valorizzati con la risorsa che verrà chiamata sul server dell'erogatore indicata nel file di interfaccia API, invece che fare riferimento al server autorizzativo di PDND Interoperabilità;
* va inserito un altro campo, ath .

Il campo ath contiene l'hash del voucher rilasciato da PDND Interoperabilità. Questo hash è ottenuto usando SHA256 e deve essere codificato in Base64URL, con la seguente formula:

```
BASE64URL(SHA-256(access_token_bytes))
```

Questa seconda DPoP deve essere firmata con la stessa chiave privata utilizzata per la prima DPoP al secondo passaggio e destinata al server autorizzativo di PDND Interoperabilità.

**Step 6 - Richiedere dati all'erogatore**

Il fruitore può a questo punto procedere alla richiesta verso l'API dell'e-service. L'header Authorization, che in una chiamata standard sarebbe valorizzato con

```
Authorization: Bearer <voucher_rilasciato_da_PDND>
```

è invece valorizzato con

```
Authorization: DPoP <voucher_rilasciato_da_PDND>
```

Inoltre, il fruitore deve inserire anche un altro header, in particolareDPoP: \<DPoP\_proof\_generata\_al\_passaggio\_precedente>


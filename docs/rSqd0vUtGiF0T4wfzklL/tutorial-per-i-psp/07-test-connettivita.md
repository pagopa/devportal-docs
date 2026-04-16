---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/UdBZLK0IXWx2yqcEv6ks/tutorial-per-i-psp/07-test-connettivita
---

# Come effettuare un test di connettività

Questo tutorial guida attraverso il processo tecnico per verificare la correttezza delle credenziali ottenute in fase di onboarding. Questa operazione è fondamentale sia per la verifica delle credenziali ma anche per verificare la raggiungibilità dei servizi per i rispettivi ambienti di Collaudo (UAT) o Produzione.

## Step 1: Recuperare credenziali ottenute durante la fase di onboarding:

1 - client\_id\
2 - client\_secret\
3 - grant\_type

## Step 2: Recuperare l'URL di riferimento per l'ambiente che si vuol verificare

Gli URL da utilizzare per il test sono i seguenti:

* UAT --> https://api-emd.uat.cstar.pagopa.it
* PROD --> https://api-emd.cstar.pagopa.it

## Step 3: Eseguire test

1. Generare il token di UAT/PROD usando la `tokenUrl` e le credenziali fornite.

```curl
cURL: curl --location 'https://api-mcshared.uat.cstar.pagopa.it/auth/token' 
--header 'Content-Type: application/x-www-form-urlencoded' 
--data-urlencode 'client_secret=xxxxxxxx-xxxx-....' 
--data-urlencode 'client_id=xxxxxxx-....' 
--data-urlencode 'grant_type=client_credentials'
```

2. Inserire il token nell'header di `Authorization`.
3. Effettuare una chiamata **GET** al seguente endpoint:

```http
GET https://api-emd.uat.cstar.pagopa.it/emd/mil/tpp/network/connection/{tppName}
```

oppure eseguire il comando:

```curl
curl --location 'https://api-emd.uat.cstar.pagopa.it/emd/mil/tpp/network/connection/BancaX' \
--header 'Accept-Language: it-IT' \
--header 'Accept: application/json' \
--header 'Authorization: ••••••'
```

il cui risultato in caso di \*\* Response 200 \*\* sarà:

```response
{
  "code": "PAGOPA_NETWORK_TEST",
  "message": "BancaX ha raggiunto i nostri sistemi"
}
```

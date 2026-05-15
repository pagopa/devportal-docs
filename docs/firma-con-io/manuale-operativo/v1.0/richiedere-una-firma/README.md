# ✍ Richiedere una firma

Una volta preparati i documenti in uno dei formati supportati e inseriti i campi firma, segui questi step per richiedere la firma all'utente:

<details>

<summary><mark style="color:blue;">Step 1</mark>: Crea un Dossier</summary>

[Per scoprire come farlo, vai qui ](../creare-il-dossier.md)

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark>: Recupera l'ID del cittadino</summary>

[Per scoprire come farlo, vai qui ](recupero-id-del-cittadino.md)

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark>: Crea una <strong>Signature Request</strong></summary>

[Per scoprire come farlo, vai qui ](creazione-di-una-signature-request.md)

</details>

<details>

<summary><mark style="color:blue;">Step 4</mark>: Carica i documenti</summary>

[Per scoprire come farlo, vai qui ](upload-dei-documenti.md)

</details>

<details>

<summary><mark style="color:blue;">Step 5</mark>: Invia la richiesta di firma </summary>

[Per scoprire come farlo, vai qui](invio-della-richiesta-di-firma/)&#x20;

</details>

Ecco un diagramma di sequenza che delinea il processo di creazione di una "Richiesta di Firma", una volta ottenuti "Signer ID" e "Dossier ID"

```mermaid
sequenceDiagram
    autonumber
    participant E as Ente
    participant API as Firma con IO (API)
    participant ST as Firma con IO (Storage)
    actor CIT as Cittadino

    E ->> API: Richiede la creazione di una SIGNATURE REQUEST
    API -->> E: Restituisce la SIGNATURE REQUEST, in stato DRAFT

    loop Per ogni file PDF da caricare
        E ->> API: Richiede UPLOAD_URL per il documento
        API -->> E: Restituisce UPLOAD_URL
        E ->> ST: Carica file PDF tramite UPLOAD URL
        ST -->> E: Restituisce esito upload
    end

    E ->> API: Imposta SIGNATURE REQUEST come READY
    API -->> E: Restituisce SIGNATURE REQUEST con QRCODE

    alt Inoltro QRCODE 
        E ->> CIT: Manda il QRCODE usando i propri canali
    else Invio Messaggio su App IO 
        E ->> API: Richiede NOTIFICATION per SIGNATURE_REQUEST
        API -->> E: Se CITTADINO ha i Messaggi su IO abilitati, prende in carico la richiesta
        API ->> CIT: Inoltra Messaggio su IO con SIGNATURE REQUEST
    end
```


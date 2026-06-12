# E-service con funzionalità "portachiavi"

L'e-service “Attestazione - Demo Portachiavi” pubblicato sul catalogo offre un servizio mediante il quale è possibile **vedere in azione la funzione del portachiavi.**

{% hint style="info" %}
Si tratta di un servizio che non aggiunge business logic alla response inviata, ma permette di avere evidenza immediata di quali informazioni aggiuntive l'erogatore che implementa la funzione invia verso il fruitore.
{% endhint %}

**Invocazione dell'e-service**

Dopo aver fatto la sottoscrizione al servizio in oggetto possiamo subito procedere alla generazione del Voucher e quindi all'invocazione delle API.

La prima chiamata che andremo a effettuare è la seguente:

```
GET /keychain-mock/signature
```

<details>

<summary><strong>Input</strong></summary>

#### **Header:**

```
Content-Type: application/json
Authorization: Bearer {{bearerToken}}
x-correlation-id: {{myUniqueCorrelationId}}
```

</details>

<details>

<summary><strong>Output</strong></summary>

#### **Header:**

```
x-payload-signature: {{signature}}
x-payload-signature-kid: {{kid}}
x-payload-signature-algorythm: SHA256withRSA
```

#### **Payload:**

{% code lineNumbers="true" %}
```json
{
    "message": "risposta generata con successo"
}
```
{% endcode %}

</details>

Come si evince dall'output ottenuto, l'erogatore invia in risposta non solo il body della response, ma anche degli header aggiuntivi calcolati sulla base della chiave pubblica collegata al portachiavi.

{% hint style="danger" %}
Si ricorda che questa è solo una delle modalità in cui le informazioni possono essere inviate.

Nello specifico la modalità di invio delle informazioni e la quantità delle stesse è a carico dell'erogatore.
{% endhint %}

Il fruitore che riceve gli header aggiunti ha la possibilità di effettuare la verifica di integrità della risposta.

Di seguito viene fornito un esempio degli step che è possibile effettuare per la verifica.

#### Recupero della chiave pubblica legata al portachiavi

Mediante il valore contenuto all'interno dell'header x-payload-signature-kid è possibile procedere al recupero della chiave pubblica.

A tal proposito è possibile invocare le API messe a disposizione da interoperabilità e nello specifico

```
GET /keys/:kid
```

Valorizzando il parametro :kid con il valore ottenuto nell'header.

L'API risponderà con la chiave pubblica associata.

#### **Verifica della signature**

Grazie alla chiave pubblica recuperata e ai restanti header è possibile procedere con la verifica.

Per la verifica è necessario recuperare il valore associato a x-payload-signature e applicare l'algoritmo indicato in _x-payload-signature-algorythm_ sulla signature.

Di seguito uno stralcio di codice solo a titolo esplicativo

{% code lineNumbers="true" %}
```python
# Carica la chiave pubblica
public_key = load_pem_public_key(public_key_pem)

# Verifica la firma
try:
    public_key.verify(
        signature,
        payload,
        padding.PKCS1v15(),
        hashes.SHA256()
    )
    print("Firma valida!")
except Exception as e:
    print("Firma non valida:", e)
```
{% endcode %}

Se l'algoritmo viene correttamente eseguito, la verifica di integrità è corretta.

#### Invio feedback

L'e-service espone un'ulteriore API che permette di inviare verso l'erogatore il feedback a seguito della verifica della signature.

A tal proposito il fruitore potrà inviare i dettagli effettuando la seguente richiesta:

```
POST /keychain-mock/verify
```

<details>

<summary><strong>Input</strong></summary>

#### **Header:**

```
Content-Type: application/json
Authorization: Bearer {{bearerToken}}
x-correlation-id: {{myUniqueCorrelationId}}
x-payload-signature: {{signature}}
```

#### **Payload:**

{% code lineNumbers="true" %}
```json
{
  "message": "Check Successful"
}
```
{% endcode %}

</details>

<details>

<summary><strong>Output</strong></summary>

#### **Payload:**

{% code lineNumbers="true" %}
```json
{
    "status": "OK",
    "message": "X-Payload-Signature verificata"
}
```
{% endcode %}

</details>

In questo modo l'erogatore recepisce che il flusso di chiamate è stato concluso correttamente.

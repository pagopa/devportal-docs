# Verificare i prerequisiti

Prima di avviare l'integrazione, è necessario verificare la disponibilità dei requisiti elencati nelle tabelle che seguono.

## Prerequisiti organizzativi

Questi dati identificano l'organizzazione presso IPZS e compaiono nei metadati dell'Entity Configuration. Devono coincidere con quelli risultanti dai registri ufficiali (Registro delle Imprese, Indice IPA).

| Dato                                | Esempio                                              | Note                                                                              |
| ----------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------- |
| Denominazione legale                | `Acme S.p.A.`                                        | Come da registro imprese.                                                         |
| PEC ufficiale                       | `protocollo@pec.example.it`                          | Utilizzata per la comunicazione con IPZS e nella CSR.                             |
| Identificativo fiscale              | `01234567890`                                        | Codice Fiscale o Partita IVA per entità private; Codice IPA per entità pubbliche. |
| Entity Identifier (URL base del RP) | `https://relying-party.example.org`                  | Dominio pubblico HTTPS dell'integrazione, distinto per ciascun ambiente.          |
| Logo dell'organizzazione            | `https://relying-party.example.org/logo.svg`         | **Formato SVG obbligatorio**, esposto su URL pubblico.                            |
| Logo compatto                       | `https://relying-party.example.org/compact-logo.svg` | Versione ridotta, utilizzata dall'app Wallet nelle viste di consenso.             |
| Privacy Policy URL                  | `https://relying-party.example.org/privacy`          | URL pubblico della policy applicabile al trattamento dei dati raccolti dal RP.    |

## Prerequisiti tecnici

<table><thead><tr><th width="245.9375">Requisito</th><th>Specifica</th></tr></thead><tbody><tr><td>Dominio pubblico HTTPS</td><td>Un dominio per pre-produzione e uno per produzione, entrambi raggiungibili da Internet con certificato TLS valido.</td></tr><tr><td>Capacità di firma JWT</td><td>Disponibilità di una libreria JOSE in grado di firmare e verificare JWT con algoritmo ES256 su curva P-256.</td></tr><tr><td>Capacità di cifratura JWE</td><td>Supporto a JWE con algoritmo <code>A256GCM</code> per la decifratura della risposta del Wallet.</td></tr><tr><td>Endpoint pubblici</td><td>Capacità di esporre gli endpoint <code>/.well-known/openid-federation</code>, <code>request_uri</code>, <code>response_uri</code> ed <code>erasure_endpoint</code> (quest'ultimo obbligatorio se la richiesta include attributi identificativi univoci come <code>tax_id_code</code>).</td></tr><tr><td>Pagina web di presentazione</td><td>Pagina lato Relying Party che ospita il QR Code per il flusso Cross-Device e il pulsante o Universal Link per il flusso Same-Device.</td></tr></tbody></table>

## Strumenti consigliati

I seguenti strumenti facilitano l'integrazione e il debugging. Sono solamente strumenti operativi, non dipendenze obbligatorie del flusso.

| Strumento                                     | Utilizzo                                                                            |
| --------------------------------------------- | ----------------------------------------------------------------------------------- |
| [jwt.io](https://jwt.io/)                     | Decodifica, ispezione e verifica della firma di JWT e JWS.                          |
| [sdjwt.org](https://sdjwt.org/)               | Analisi e decodifica di SD-JWT con visualizzazione delle Disclosure.                |
| [CyberChef](https://gchq.github.io/CyberChef) | Operazioni di codifica e decodifica Base64url, calcolo SHA-256, manipolazione byte. |
| `curl`                                        | Test degli endpoint HTTP dalla riga di comando.                                     |
| `jq`                                          | Parsing e filtraggio JSON da shell.                                                 |
| `openssl`                                     | Generazione chiavi, CSR e ispezione di certificati X.509.                           |

## Librerie JOSE per linguaggio

| Linguaggio | Libreria raccomandata                                              |
| ---------- | ------------------------------------------------------------------ |
| Node.js    | [`jose`](https://github.com/panva/jose)                            |
| Python     | [`python-jose`](https://python-jose.readthedocs.io/)               |
| Java       | [Nimbus JOSE+JWT](https://connect2id.com/products/nimbus-jose-jwt) |

{% hint style="info" %}
Le dimensioni delle chiavi e gli algoritmi crittografici devono rispettare raccomandazioni note di settore quali NIST SP 800-131A e BSI TR-02102-1. Per il profilo italiano IT-Wallet v1.3.3, l'algoritmo di firma obbligatorio è ES256 su curva P-256.
{% endhint %}

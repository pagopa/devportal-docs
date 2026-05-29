# Strumenti e librerie consigliate

## 3.8.1 Strumenti operativi

| Strumento                                           | Utilizzo                                                                           |
| --------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [jwt.io](https://jwt.io/)                           | Decodifica, ispezione e verifica della firma di JWT e JWS                          |
| [sdjwt.org](https://sdjwt.org/)                     | Analisi e decodifica di SD-JWT con visualizzazione delle Disclosure e del KB-JWT   |
| [CyberChef](https://gchq.github.io/CyberChef)       | Operazioni di codifica e decodifica Base64url, calcolo SHA-256, manipolazione byte |
| [ssl-tools.net](https://ssl-tools.net/certificates) | Analisi di certificati X.509 nel browser                                           |
| `curl`                                              | Test degli endpoint HTTP dalla riga di comando                                     |
| `jq`                                                | Parsing e filtraggio JSON da shell                                                 |
| `openssl`                                           | Generazione chiavi, CSR e ispezione di certificati X.509                           |

## 3.8.2 Librerie JOSE per linguaggio

| Linguaggio | Libreria        | Repository                                                                                 |
| ---------- | --------------- | ------------------------------------------------------------------------------------------ |
| Node.js    | `jose`          | [github.com/panva/jose](https://github.com/panva/jose)                                     |
| Python     | `python-jose`   | [python-jose.readthedocs.io](https://python-jose.readthedocs.io/)                          |
| Java       | Nimbus JOSE+JWT | [connect2id.com/products/nimbus-jose-jwt](https://connect2id.com/products/nimbus-jose-jwt) |

## 3.8.3 Tool di conformance

| Tool                      | Scopo                                                  | Repository                                                                                     |
| ------------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| `wallet-conformance-test` | Suite di conformance test automatici per Relying Party | [github.com/pagopa/wallet-conformance-test](https://github.com/pagopa/wallet-conformance-test) |

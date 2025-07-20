# Contenuto di un voucher

A titolo esemplificativo, di seguito un esempio di contenuto di voucher deserializzato.

Header:

```
{
  "alg": "RS256",
  "kid": "ZmYxZGE2YjQtMzY2Yy00NWI5LThjNGItMDJmYmQyZGIyMmZh",
  "typ": "at+jwt"
}
```

Payload:

```
{
  "iss": "interop.pagopa.it", 
  "nbf": 1616170668,
  "iat": 1616170068,
  "exp": 1616170668,
  "jti": "12297ac1-c192-4573-8350-207a4213e5ac",
  "aud": "https://erogatore.example/ente-example/v1",
  "sub": "9b361d49-33f4-4f1e-a88b-4e12661f2309",
  "purposeId": "1b361d49-33f4-4f1e-a88b-4e12661f2300",
  "client_id": "9b361d49-33f4-4f1e-a88b-4e12661f2309"
}
```

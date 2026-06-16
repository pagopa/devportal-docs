# Data model: attributi e stati dell'EAA

## Struttura della credenziale

Tre blocchi, in **ordine fisso** nel contratto OpenAPI:

<table><thead><tr><th width="203.29296875">Blocco</th><th>Contenuto</th></tr></thead><tbody><tr><td><code>userClaims</code></td><td>Dati anagrafici/identità dell'utente: <code>given_name</code>, <code>family_name</code>, <code>birth_date</code>, <code>birth_place</code> e almeno uno tra <code>tax_id_code</code> e <code>personal_administrative_number</code></td></tr><tr><td><code>attributeClaims</code></td><td>Array di dataset; ogni elemento contiene <code>object_id</code>, <code>status</code> (<code>VALID/INVALID/SUSPENDED</code>), <code>last_updated</code> (ISO 8601) e gli attributi specifici del dataset</td></tr><tr><td><code>metadataClaims</code></td><td>Array di metadati per dataset: <code>object_id</code> (obbligatorio), <code>issuance_date</code> ed <code>expiry_date</code> (opzionali)</td></tr></tbody></table>

### Esempio di risposta

La risposta in caso di successo (HTTP `200`) restituisce l'oggetto `CredentialClaimsResponse`. Il Content-Type è `application/jwt` (token firmato il cui payload è il JSON seguente). Esempio con dati fittizi.

json

```json
{
  "userClaims": {
    "given_name": "Mario",
    "family_name": "Rossi",
    "birth_date": "1980-01-10",
    "birth_place": "Roma",
    "tax_id_code": "TINIT-RSSMRA80A01H501Z",
    "personal_administrative_number": "12345A123A"
  },
  "attributeClaims": [
    {
      "object_id": "6F9619FF-8B86-D011-B42D-00C04FC964FF",
      "status": "VALID",
      "last_updated": "2025-09-15T10:30:00Z",
      "institute_name": "Nome Istituto Universitario",
      "programme_type_name": "Laurea Magistrale",
      "degree_course_name": "Computer Science - Informatica",
      "academic_qualification_date": "2025-06-25",
      "...": ""
    },
    {
      "object_id": "7A0720AB-9C97-E122-C53E-11D05FD075GG",
      "status": "VALID",
      "last_updated": "2023-01-10T08:00:00Z",
      "institute_name": "Nome Istituto Universitario",
      "programme_type_name": "Laurea Triennale",
      "degree_course_name": "Informatica",
      "academic_qualification_date": "2022-11-27",
      "...": ""
    }
  ],
  "metadataClaims": [
    {
      "object_id": "6F9619FF-8B86-D011-B42D-00C04FC964FF",
      "issuance_date": "2025-06-25"
    },
    {
      "object_id": "7A0720AB-9C97-E122-C53E-11D05FD075GG",
      "issuance_date": "2022-11-27"
    }
  ]
}
```

In sintesi:

* **userClaims**: dati anagrafici dell'utente; almeno uno tra `tax_id_code` e `personal_administrative_number` è richiesto se si forniscono user claims.
* **attributeClaims**: array di dataset; ogni elemento DEVE contenere `object_id`, `status` (`VALID` | `INVALID` | `SUSPENDED`), `last_updated` (ISO 8601), più gli attributi specifici del dataset (es. `nationality`, `residence_address`).
* **metadataClaims**: array di metadati per dataset (`object_id` obbligatorio; `issuance_date` ed `expiry_date` opzionali).
* **interval**: obbligatorio se nella richiesta non è presente il parametro `claims`; indica i secondi da attendere prima di ripetere la richiesta (es. `864000` = 10 giorni) — meccanismo della risposta **differita** (_deferred_).

Gli stati `INVALID/SUSPENDED` viaggiano nel campo status di una risposta 200. In emissione l'e-service restituisce i soli dataset `VALID`; gli stati `INVALID/SUSPENDED` si ottengono richiedendo uno specifico `object_id` a seguito di una notifica Signal Hub (vedi → [Codici di errore dell'e-service](https://docs.google.com/document/d/18nAfn-SZOHaIalsCsJaeWuxAH33wyuNw7FxIraP0Dg8/edit)  e → [Signal Hub](signal-hub-soglie-di-carico-probing-e-tracing.md))<br>

## Stati e ciclo di vita

| Stato (progettazione) | Significato                                       | `status` OpenAPI                  |
| --------------------- | ------------------------------------------------- | --------------------------------- |
| **Valido**            | Utilizzabile, entro scadenza                      | `VALID`                           |
| **Sospeso**           | Temporaneamente non valido, reversibile           | `SUSPENDED`                       |
| **Non Valido**        | Non più valido, irreversibile                     | `INVALID`                         |
| **Scaduto**           | Scadenza amministrativa (definita dall'Ente)      | `VALID` con scadenza, o `INVALID` |
| **Da aggiornare**     | Scadenza tecnica (definita dall'Issuer, ≤ 1 anno) | da metadati/claim                 |

L'invalidazione del documento fisico invalida l'EAA; la rimozione dell'EAA dal portafoglio non incide sul documento fisico. Durata massima generale: **un anno**.

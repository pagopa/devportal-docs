# Come ottenere le informazioni crittografiche

### Requisiti <a href="#requisiti" id="requisiti"></a>

Si assume che il consumatore di segnali sia un aderente fruitore e che possa accedere all’e-service di interesse (vedi i [requisiti per l’uso](../how-to/prerequisiti.md) di Signal Hub).

### Recupero informazioni crittografiche <a href="#recupero-informazioni-crittografiche" id="recupero-informazioni-crittografiche"></a>

Il consumatore, fruitore dell’e-service di interesse, richiama l’operazione di lettura delle informazioni riguardanti l'algoritmo di pseudonimizzazione con seme e i parametri per la sua esecuzione. Ad esempio:

`curl -X 'GET' "https://some.api.it/pseudonymization" -H "Authorization: Bearer eyJhbGciOi..."`

`{`\
`"seed": "f3a7f54e-8e57-4a06-8bca-ac1857b6b045",`\
`"cryptoHashFunction": "sha256"`\
`}`

Il consumatore conserverà queste informazioni in modo da garantirne la riservatezza.

Ottenute le informazioni crittografiche, il consumatore è in grado di calcolare gli pseudonimi per i soli soggetti per cui esiste un procedimento amministrativo attivo che richiede il costante aggiornamento degli stati e dei fatti.

Esempio:

`codiceFiscale= RSSMRA80A01H501U`\
`cryptoHashFunction = sha256`\
`seed = f3a7f54e-8e57-4a06-8bca-ac1857b6b045`

\
`pseudonimo(codiceFiscale, cryptoHashFunction, seed) = 82e98709e2f96ef...`

A questo punto il consumatore di segnali è in grado di associare a ciascun soggetto uno pseudonimo, da confrontare con gli pseudonimi che si trovano nei segnali ricevuti.

| **identificativo interno** | **identificativo in chiaro** | **identificativo** **pseudonimizzato** |
| -------------------------- | ---------------------------- | -------------------------------------- |
| 1                          | `RSSMRA80A01H501U`           | `82e98709e2f96efd...`                  |
| 2                          | `FNTPPL62H44D643P`           | `F5e0f94f36a5eea4...`                  |
| 3                          | `FLZCRN65R02E202N`           | `701c4489d6ac7fdb7...`                 |


# Come esporre le informazioni crittografiche - pseudonimizzazione

### Esposizione delle informazioni crittografiche

L’erogatore espone un’operazione di lettura delle informazioni crittografiche, in modo che il fruitore possa usarle per la lettura dei segnali e così garantire la riservatezza delle informazioni. La pseudonimizzazione è obbligatoria per i dati personali.

Il produttore individua l’algoritmo di pseudonimizzazione con seme e i parametri per la sua esecuzione (seme). Tale scelta deve essere proporzionale alla tipologia di dati personali o alla riservatezza delle informazioni oggetto degli stati e dei fatti cui le variazioni possono riferirsi.

Il valore di algoritmo e seme è univoco per e-service: tutti i consumatori otterranno lo stesso algoritmo e lo stesso seme. Il consumatore deve mantenere riservate le informazioni ricevute.

### Scelta dell'algoritmo e del seme

Sulla scelta dell’algoritmo e del seme, e come riferimento per aggiornamenti ed evoluzioni, si faccia riferimento a:

* \[LG PDND 4] "7.1.1. Algoritmo di pseudonimizzazione"
* [le indicazioni in materia di protezione dei dati personali consultabili sul sito web del Garante per la protezione dei dati personali](https://www.garanteprivacy.it/temi/pseudonimizzazione)
* [le indicazioni rese dall’Agenzia per la Cybersicurezza Nazionale](https://www.acn.gov.it/portale/documents/20119/85999/ACN_LineeGuida_Hash.pdf/e1d36f5c-c75e-06b7-9c5f-aa535ed39b33?version=1.0\&t=1704377457344\&download=true)

Si riportano di seguito le raccomandazioni delle \[LG PDND 4] "7.1.1. Algoritmo di pseudonimizzazione".

#### Scelta dell'algoritmo

Gli algoritmi di pseudonimizzazione raccomandati, o funzioni crittografiche di hashing, sono:&#x20;

* SHA-2: insieme di funzioni crittografiche di hashing progettato dalla NSA (National Security Agency) per migliorare le proprietà di sicurezza del predecessore SHA-1
  * SHA-256&#x20;
  * SHA-512/256
  * SHA-384&#x20;
  * SHA-512
* SHA-3: insieme di funzioni crittografiche di hashing progettato dal NIST (National Institute of Standards and Technology) per migliorare le proprietà di sicurezza del predecessore SHA-2:
  * SHA3-256&#x20;
  * SHA3-384&#x20;
  * SHA3-512&#x20;
  * SHAKE128
  * SHAKE256

#### Scelta del seme

Gli algoritmi di pseudonimizzazione raccomandati al precedente paragrafo devono essere rinforzati con l’utilizzo di un secret.

In merito al secret di raccomanda di:

* effettuare una rotazione dello stesso ad intervalli di tempo regolari, di seguito indichiamo con rs il numero di giorni della rotazione del secreto;
* assicurare un livello di entropia dello stesso consono, di seguito indichiamo con be il numero di caratteri del secret (assunto come set di caratteri \[A-Za-z0-9]).

In quanto segue si riportano della raccomandazione per il produttore in considerazione alla tipologia dei dati oggetto degli e-service.

| tipologia dei dati                                                                                                                                                                         | versione algoritmo                                                                                            | gg rotazione seme | dimensione seme |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | ----------------- | --------------- |
| Dati che permettono l'identificazione indiretta della persona fisica                                                                                                                       | Nessuna raccomandazione specifica                                                                             |                   |                 |
| Dati che permettono l'identificazione diretta della persona fisica                                                                                                                         | Nessuna raccomandazione specifica                                                                             | <= 120 gg         | >= 16 caratteri |
| Dati sensibili della persona fisica (origine razziale o etnica, convinzioni religiose, filosofiche, opinioni politiche, appartenenza sindacale, relativi alla salute o alla vita sessuale) | <ul><li>SHA-384</li><li>SHA-512</li><li>SHA3-384</li><li>SHA3-512</li><li>SHAKE128</li><li>SHAKE256</li></ul> | <= 80 gg          | >= 32 caratteri |
| Dati giudiziari della persona fisica (esistenza di determinati provvedimenti giudiziari soggetti ad iscrizione nel casellario giudiziale)                                                  | <ul><li>SHA-512</li><li>SHA3-512</li><li>SHAKE128</li><li>SHAKE256</li></ul>                                  | <= 60 gg          | >= 64 caratteri |
| Altri dati della persona fisica (relativi alle comunicazioni elettroniche e che consentono la geolocalizzazione)                                                                           | Nessuna raccomandazione specifica                                                                             | <= 120 gg         | >= 16 caratteri |

### Implementazione della condivisione delle informazioni crittografiche

Il produttore comunica al consumatore la scelta dell'algoritmo di pseudonimizzazione e dei parametri per la sua esecuzione tramite l’esposizione di un’operazione specifica sull’e-service erogato.

Il produttore deve mettere il consumatore nelle condizioni di poter calcolare lo stesso _digest_ a partire dall'applicazione della _hash function_ sulla concatenazione della _stringa in input_ e _seed_.

Sarà opportuno comunicare (attraverso la documentazione) l’ordine con cui concatenare _input_ e _seed_.&#x20;

Il produttore espone un endpoint di questo tipo (si fornisce un'operazione esemplificativa e non di riferimento per l'implementazione) per condividere le informazioni crittografiche:

```
  /pseudonymization:
    get:
      summary: Gets a pseudonymization info
      description: Info about crypto hash function and seed
      responses:
        "200":
          description: Success
          content:
            application/json:
              schema:
                type: object
                properties:
                  seed:
                    example: 3b9942ce-1f07-4512-8f34-f31b1a7b0061
                    type: string
                  cryptoHashFunction:
                    example: sha256
                    type: string
                required:
                  - seed
                  - cryptoHashFunction
                description: Success
```

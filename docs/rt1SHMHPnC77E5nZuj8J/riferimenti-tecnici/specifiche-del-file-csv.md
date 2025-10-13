# Specifiche del file CSV

Il caricamento massivo dei prodotti sulla piattaforma avviene tramite file in formato **CSV** (_Comma-Separated Values_). È fondamentale che la struttura del file rispetti rigorosamente le specifiche descritte in questo documento per garantire una corretta elaborazione.

Esistono **due formati distinti**, a seconda che i prodotti da caricare siano registrati o meno sulla banca dati europea **EPREL**.

**Regole generali:**

* Il file deve utilizzare la codifica **UTF-8**.
* Il separatore di campo deve essere la **virgola** (`,`).
* La **prima riga** del file deve sempre contenere l'intestazione con i nomi dei campi, esattamente come specificato di seguito.

***

#### Formato 1: Prodotti registrati su EPREL

Questo formato deve essere utilizzato per tutti i prodotti presenti nella banca dati europea EPREL.

**Struttura dei campi**

<table><thead><tr><th width="222.6640625">Nome Campo</th><th width="124.60546875">Obbligatorio</th><th width="110.8984375">Formato</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>Codice EPREL</code></td><td>Sì</td><td>Stringa</td><td>Il codice identificativo univoco del prodotto assegnato dalla banca dati EPREL.</td></tr><tr><td><code>Codice GTIN/EAN</code></td><td>Sì</td><td>Stringa</td><td>Il codice univoco del prodotto (es. codice a barre). <strong>È la chiave primaria</strong> che identifica il prodotto sulla piattaforma.</td></tr><tr><td><code>Codice Prodotto</code></td><td>Sì</td><td>Stringa</td><td>Il codice identificativo interno utilizzato dal Produttore.</td></tr><tr><td><code>Categoria</code></td><td>Sì</td><td>Stringa</td><td>La categoria merceologica del prodotto (es. "Lavatrice").</td></tr><tr><td><code>Paese di Produzione</code></td><td>Sì</td><td>Stringa</td><td>Il codice ISO 3166-1 alpha-2 del paese di produzione (es. "IT" per l'Italia).</td></tr></tbody></table>

**Esempio di file**

```csv
Codice EPREL,Codice GTIN/EAN,Codice Prodotto,Categoria,Paese di Produzione
2416717,8003437042311,PE01,Lavatrice,IT
2416729,8003437042328,PE02,Lavatrice,DE
```

***

#### Formato 2: Prodotti non registrati su EPREL

Questo formato deve essere utilizzato per i prodotti che, per normativa, non richiedono la registrazione sulla banca dati EPREL.

**Struttura dei campi**

| Nome Campo            | Obbligatorio | Formato | Descrizione                                                                                                                 |
| --------------------- | ------------ | ------- | --------------------------------------------------------------------------------------------------------------------------- |
| `Codice GTIN/EAN`     | Sì           | Stringa | Il codice univoco del prodotto (es. codice a barre). **È la chiave primaria** che identifica il prodotto sulla piattaforma. |
| `Codice Prodotto`     | Sì           | Stringa | Il codice identificativo interno utilizzato dal Produttore.                                                                 |
| `Categoria`           | Sì           | Stringa | La categoria merceologica del prodotto (es. "Piano cottura").                                                               |
| `Paese di Produzione` | Sì           | Stringa | Il codice ISO 3166-1 alpha-2 del paese di produzione (es. "IT" per l'Italia).                                               |
| `Marca`               | Sì           | Stringa | La marca commerciale del prodotto.                                                                                          |
| `Modello`             | Sì           | Stringa | Il modello specifico del prodotto.                                                                                          |

**Esempio di file**

```csv
Codice GTIN/EAN,Codice Prodotto,Categoria,Paese di Produzione,Marca,Modello
8016361989012,PC01,Piano cottura,IT,Marca01,Modello01
8016361989029,PC02,Piano cottura,TR,Marca02,Modello02
```

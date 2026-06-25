---
argomenti_correlati:
  - /docs/pari/come-caricare-prodotti
funzione: guida-tecnica
livello: intermedio
prodotto:
  nome: PARI - Bonus Elettrodomestici - Manuale per il Produttore
  versione: v1.0.0
schema:
  '@context': https://schema.org
  '@type': TechArticle
  about:
    - '@type': Thing
      name: CSV (Comma-Separated Values)
    - '@type': Thing
      name: EPREL (European Product Registry for Energy Labelling)
    - '@type': Thing
      name: GTIN (Global Trade Item Number)
  author:
    '@type': Organization
    name: PagoPA S.p.A.
  datePublished: '2023-11-15'
  description: >-
    Specifica tecnica dettagliata del formato CSV richiesto per il caricamento
    massivo dei prodotti sulla piattaforma, con le strutture dei campi per
    prodotti registrati e non registrati su EPREL.
  keywords:
    - CSV
    - EPREL
    - GTIN
    - formato file
    - caricamento massivo
    - specifiche tecniche
  name: Specifiche del file CSV per il caricamento prodotti
  proficiencyLevel: intermedio
status: pubblicato
tecnologia:
  - CSV
  - UTF-8
utente:
  ruolo: erogatore
  tag:
    - CSV
    - upload
    - caricamento massivo
    - prodotti
    - EPREL
    - GTIN
  tipo_ente: partner_tecnologico
---

# Specifiche del file CSV

Il caricamento massivo dei prodotti sulla piattaforma avviene tramite file in formato CSV. È fondamentale che la struttura del file rispetti rigorosamente le specifiche descritte in questo documento per garantire una corretta elaborazione.

Esistono **due formati distinti**, a seconda che i prodotti da caricare siano registrati o meno sulla banca dati europea EPREL.

**Requisiti per entrambi i formati:**

* il file deve utilizzare la codifica **UTF-8**
* il separatore di campo deve essere il <mark style="background-color:yellow;">**punto e virgola**</mark> <mark style="background-color:yellow;"></mark><mark style="background-color:yellow;">(;)</mark>
* la **prima riga** del file deve sempre contenere l'intestazione con i nomi dei campi, come specificato di seguito
* un file CSV può contenere prodotti appartenenti ad **una** sola **categoria**
* un file CSV può contenere al massimo **100** prodotti.

{% hint style="warning" %}
Se usi un software come Excel o Google Fogli, imposta il formato "Testo" per tutte le celle contenenti stringhe, così da evitare errori di caricamento CSV.
{% endhint %}

***

### Formato 1: Prodotti registrati su EPREL

Questo formato deve essere utilizzato per tutti i prodotti presenti nella banca dati europea EPREL.

#### **Struttura dei campi**

<table><thead><tr><th width="167.59765625">Nome Campo</th><th width="127.7265625">Obbligatorio</th><th width="152.65234375">Formato</th><th>Descrizione</th></tr></thead><tbody><tr><td>Codice EPREL</td><td>Sì</td><td>Numero</td><td>Il codice identificativo univoco del prodotto assegnato dalla banca dati EPREL</td></tr><tr><td>Codice GTIN/EAN</td><td>Sì</td><td>Stringa alfanumerica, max 14 caratteri. Non sono ammessi caratteri speciali come &#x26;, "", ', &#x3C;, >, %, $, : , ;, = o i caratteri con accenti</td><td>Il codice univoco del prodotto (es. codice a barre). <strong>È la chiave primaria</strong> che identifica il prodotto sulla piattaforma</td></tr><tr><td>Codice Prodotto</td><td>Sì</td><td>Stringa alfanumerica, max 100 caratteri. Non sono ammessi caratteri speciali come &#x26;, "", ', &#x3C;, >, %, $, : , ;, = o i caratteri con accenti</td><td>Il codice identificativo interno utilizzato dal Produttore</td></tr><tr><td>Categoria</td><td>Sì</td><td>Stringa.<br>Valori ammessi:<br><em>Apparecchio di refrigerazione,</em><br><em>Asciugatrice,</em><br><em>Cappa da cucina,</em><br><em>Forno,</em><br><em>Lavasciuga,</em><br><em>Lavastoviglie,</em><br><em>Lavatrice</em></td><td><p>La categoria merceologica del prodotto (es. "Lavatrice")</p><p><br></p></td></tr><tr><td>Paese di Produzione</td><td>Sì</td><td>Stringa, 2 caratteri</td><td>Il codice ISO 3166-1 alpha-2 del paese di produzione (es. "IT" per l'Italia)</td></tr></tbody></table>

#### **Esempio di file**

```csv
Codice EPREL,Codice GTIN/EAN,Codice Prodotto,Categoria,Paese di Produzione
2416717,8003437042311,PE01,Lavatrice,IT
2416729,8003437042328,PE02,Lavatrice,DE
```

***

### Formato 2: Prodotti non registrati su EPREL

Questo formato deve essere utilizzato per i prodotti che, per normativa, non richiedono la registrazione sulla banca dati EPREL.

#### **Struttura dei campi**

<table><thead><tr><th>Nome Campo</th><th width="142.109375">Obbligatorio</th><th>Formato</th><th>Descrizione</th></tr></thead><tbody><tr><td>Codice GTIN/EAN</td><td>Sì</td><td>Stringa alfanumerica, max 14 caratteri. Non sono ammessi caratteri speciali come &#x26;, "", ', &#x3C;, >, %, $, : , ;, = o i caratteri con accenti</td><td>Il codice univoco del prodotto (es. codice a barre). <strong>È la chiave primaria</strong> che identifica il prodotto sulla piattaforma.</td></tr><tr><td>Codice Prodotto</td><td>Sì</td><td>Stringa alfanumerica, max 100 caratteri. Non sono ammessi caratteri speciali come &#x26;, "", ', &#x3C;, >, %, $, : , ;, = o i caratteri con accenti</td><td>Il codice identificativo interno utilizzato dal Produttore.</td></tr><tr><td>Categoria</td><td>Sì</td><td><p>Stringa.</p><p>Valore fisso: <em>Piano cottura</em></p></td><td>La categoria merceologica del prodotto.</td></tr><tr><td>Paese di Produzione</td><td>Sì</td><td>Stringa, 2 caratteri</td><td>Il codice ISO 3166-1 alpha-2 del paese di produzione (es. "IT" per l'Italia).</td></tr><tr><td>Marca</td><td>Sì</td><td>Stringa alfanumerica, max 100 caratteri</td><td>La marca commerciale del prodotto.</td></tr><tr><td>Modello</td><td>Sì</td><td>Stringa alfanumerica, max 100 caratteri</td><td>Il modello specifico del prodotto.</td></tr></tbody></table>

#### **Esempio di file**

```csv
Codice GTIN/EAN,Codice Prodotto,Categoria,Paese di Produzione,Marca,Modello
8016361989012,PC01,Piano cottura,IT,Marca01,Modello01
8016361989029,PC02,Piano cottura,TR,Marca02,Modello02
```

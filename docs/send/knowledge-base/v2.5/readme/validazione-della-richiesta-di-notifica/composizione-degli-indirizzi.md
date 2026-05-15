---
description: In questa pagina viene indicata la corretta formattazione degli indirizzi.
---

# Composizione degli indirizzi

## Premessa

La corretta composizione di un indirizzo di destinazione, per il recapito di una corrispondenza cartacea, passa attraverso il soddisfacimento di due aspetti fondamentali per gli operatori postali:

* Completezza del contenuto
* Rispetto della struttura

## Definizioni e regole sulla lunghezza

SEND fornisce campi specifici per gli Enti mittenti al fine di gestire le notifiche, consentendo di inserire tutti gli elementi necessari per il recapito al destinatario. È essenziale interpretare e compilare correttamente questi campi per la corretta accettazione della notifica e per assicurare il successo della consegna al destinatario.

* **`denomination` (obbligatorio):** denominazione principale del destinatario (nome e cognome per persone fisiche, ragione sociale per persone giuridiche). La lunghezza massima accettata dalla piattaforma è **88** caratteri. La suddivisione del contenuto su più righe nella stampa dell'indirizzo sulla raccomandata è demandata al sistema di postalizzazione, secondo le specifiche previste e descritte in [logiche-di-stampa-indirizzo.md](logiche-di-stampa-indirizzo.md "mention").
* **`at`** : denominazione secondaria, ed è destinato a contenere informazioni aggiuntive per identificare con maggiore precisione il destinatario, come "presso" o "alla c.a.".\
  La lunghezza massima accettata dalla piattaforma è **88** caratteri.
* **`municipality` (obbligatorio):** Comune di destinazione.
* **`municipalityDetails` :** nome secondario della località di destinazione (frazione/località).
* **`address` \* (obbligatorio):** indirizzo del domicilio fisico. **Attenzione**: in quest'ultimo caso va popolato anche il campo `addressDetails` con la denominazione dell'ufficio postale in cui è ubicata la Casella, preceduta dalla dicitura "UFFICIO".
* **`addressDetails`**: dedicato alle informazioni aggiuntive sull'ubicazione (es. scala, palazzina, isolato, stabile...) che facilitano l'identificazione del punto di recapito, specialmente per unità abitative complesse.
* **`zip` (obbligatorio):** ripartizione territoriale postale del Paese di riferimento (CAP per l'Italia). È valorizzabile fino a **5** caratteri.
* **`province` (obbligatorio):** Sigla della provincia di appartenenza del Comune, per un massimo di **2** caratteri.
* **`foreignState` :** Denominazione dello Stato estero, obbligatoria nel caso di destinazione diverse da Italia, Città del Vaticano e San Marino.

### Compilazione elemento _`Address`_

\*L'indirizzo (`address`) deve essere inserito in un'unica stringa rispettando l'ordine delle componenti come indicato nella tabella sottostante. Ogni componente deve essere separata da uno spazio singolo.

ES. VIA MONTE NAPOLEONE 16/A

| **Componente**           | **Descrizione**                                       | **Esempio**       |
| ------------------------ | ----------------------------------------------------- | ----------------- |
| Toponimo (Specie)        | Il tipo di strada (Via, Viale, Piazza, ecc.)          | `VIA`             |
| Toponimo (Denominazione) | Il nome della strada                                  | `MONTE NAPOLEONE` |
| Numero Civico            | Il numero dell'edificio                               | `16`              |
| Lettera o Esponente      | Valore alfanumerico                                   | `A`               |
| Metrico                  | Distanza con prefisso "KM." (solo se manca il civico) | `KM. 150`         |
| SNC                      | Senza Numero Civico                                   | `SNC`             |

Esempio JSON:

```json
{
    "address": "VIA MONTE NAPOLEONE 16/A",
    "zip": "20121",
    "municipality": "MILANO",
    "province": "MI"
}
```

### Compilazione elemento _`AddressDetails`_

Il campo `addressDetails` è destinato a contenere le informazioni puntuali che facilitano l'individuazione del punto di recapito una volta raggiunto l'indirizzo principale.

Questo campo non deve contenere dati già presenti in `address`.

Per una corretta compilazione, i dati vanno inseriti in quest'ordine:

1. **Colore**: Un singolo carattere alfanumerico che identifica il colore del numero civico (caratteristica presente in alcune città come Firenze o Genova).
   * _Esempio:_ `R` (per Rosso), `N` (per Nero).
2. **Scala**: L'identificativo della scala all'interno del condominio o del complesso, preceduto obbligatoriamente dalla parola "Scala" e non abbreviato "sc".
   * _Esempio:_ `Scala B`, `Scala 1`.

Esempio JSON:

<pre class="language-json"><code class="lang-json">{
    "address": "VIA DEI MILLE 10/A",
<strong>    "addressDetails": "N Scala C",
</strong>    "zip": "50131",
    "municipality": "FIRENZE",
    "province": "FI"
}
</code></pre>

### Doppia località in bilingue

Il bilinguismo è gestito dal recapitista e dal sistema di normalizzazione esclusivamente per la lingua tedesca nella provincia di Bolzano (BZ), nei seguenti campi:

* Comuni (`municipality`)
* Frazioni/località (`municipalityDetails`)
* Strade (`address`)

È possibile popolare questi campi indifferentemente con la dicitura italiana o tedesca.&#x20;

Per il solo campo `municipality` è possibile indicare il nome del Comune in entrambe le lingue, utilizzando specifici segni di interpunzione come separatori: il punto (`.`), lo spazio (`blank`), lo slash (`/`) o l'asterisco (`*`). Il normalizzatore, quale che sia l'input, restituirà la dicitura in bilingue utilizzando lo slash come separatore.&#x20;

**Nota**: sebbene sia consentito l'inserimento in doppia lingua, per garantire la massima affidabilità del processo di normalizzazione si raccomanda di inserire il nome completo del Comune, senza abbreviazioni o troncature, nella sola lingua italiana.

Di seguito una tabella riassuntiva dei possibili input accettati e dell'output restituito dal normalizzatore.

<table><thead><tr><th width="404.8671875" valign="middle">Tipologia input</th><th>Esempio input</th><th>Output restituito</th></tr></thead><tbody><tr><td valign="middle">Sola lingua italiana (estesa, priva di troncature)</td><td><code>BOLZANO</code></td><td><code>BOLZANO/BOZEN</code></td></tr><tr><td valign="middle">Sola lingua tedesca</td><td><code>BOZEN</code></td><td><code>BOLZANO/BOZEN</code></td></tr><tr><td valign="middle">Doppia lingua (italiano. tedesco.)</td><td><code>BOLZANO. BOZEN.</code></td><td><code>BOLZANO/BOZEN</code></td></tr><tr><td valign="middle">Doppia lingua (italiano tedesco)</td><td><code>BOLZANO BOZEN</code></td><td><code>BOLZANO/BOZEN</code></td></tr><tr><td valign="middle">Doppia lingua (italiano/tedesco)</td><td><code>BOLZANO/BOZEN</code></td><td><code>BOLZANO/BOZEN</code></td></tr><tr><td valign="middle">Doppia lingua (italiano*tedesco)</td><td><code>BOLZANO*BOZEN</code></td><td><code>BOLZANO/BOZEN</code></td></tr></tbody></table>


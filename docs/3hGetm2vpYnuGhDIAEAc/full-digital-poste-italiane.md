# Full Digital - Poste Italiane

Questo sistema digitale è stato sviluppato per ottimizzare la gestione del processo delle immagini degli oggetti di ritorno. Esso consente di generare, in modalità completamente digitale, i documenti di consegna a domicilio che presso un ufficio postale, in conformità alla normativa vigente.

### Documenti Generati

Il sistema produce i seguenti documenti in formato digitale:

<table><thead><tr><th>Modello</th><th align="center">Codice</th><th data-type="checkbox">c/o Domicilio</th><th data-type="checkbox">c/o  Ufficio Postale</th></tr></thead><tbody><tr><td><strong>23L digitale</strong></td><td align="center">890</td><td>true</td><td>true</td></tr><tr><td><strong>ARCAD digitale</strong></td><td align="center">890</td><td>true</td><td>false</td></tr><tr><td><strong>AC digitale (23i)</strong></td><td align="center">A/R</td><td>true</td><td>true</td></tr></tbody></table>

La generazione dei documenti digitali riporta i seguenti elementi:

* **Firma digitale**: del personale addetto (portalettere), inclusi i casi di inesito.
* **Tratto grafico del ricevente**: richiesto solo se previsto dalla normativa.
* **Sigillo**: sigillo elettronico per la validità legale del documento.
* **Marca temporale**: per la tracciabilità del documento.

Il documenti prodotti sono archiviati all'interno di un file ZIP contenente:

1. **File XML**: contiene i dati relativi agli invii dei modelli 23L, 23i, e ARCAD.
2. **File XML di inesito** (DID): contiene i dettagli dell'inesito (solo in caso di notifiche non andate a buon fine).
3. **File PDF**: una versione leggibile del file XML in formato PDF per consultazione.

### Esempi

#### Raccomandata 890

* 23L digitale consegna c/o domicilio

{% file src=".gitbook/assets/23L_domicilio.zip" %}

* 23L digitale consegna c/o ufficio postale

{% file src=".gitbook/assets/SP04_23LFD_281526382192_381526382193.zip" %}

* ARCAD digitale

{% file src=".gitbook/assets/ARCAD_domicilio.zip" %}

#### Raccomandata A/R

* 23i digitale consegna c/o domicilio

{% file src=".gitbook/assets/23i_domicilio.zip" %}

* 23i digitale consegna c/o ufficio postale

{% file src=".gitbook/assets/23IFD_ACFD697319802149_697319802149.zip" %}

### Dettaglio dei campi del file XML

{% file src=".gitbook/assets/Dettaglio campi per file FD PagoPA_V3.xlsx" %}

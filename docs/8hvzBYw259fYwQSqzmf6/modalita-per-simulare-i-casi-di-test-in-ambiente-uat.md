---
description: >-
  Informazioni utili su come simulare gli eventi per i Workflow Analogico e
  Digitale in ambiente UAT
---

# Modalità per simulare i casi di test in ambiente UAT

### Introduzione

In ambiente UAT è possibile simulare gli esiti degli invii digitali ed analogici inserendo nei campi relativi ai domicili dei codici che riproducono il relativo scenario collegato.

### Come simulare gli eventi di Workflow Digitale

* **Consegna via PEC con esito OK:** \
  Per testare questo caso, bisognerà inserire come \
  `recipient.digitalDomicile.address: "prova@pec.it"`. \
  Questa configurazione simulerà una consegna con esito OK sulla PEC indicata.&#x20;
* **Consegna via PEC con esito KO**: \
  Per testare questo caso, bisognerà inserire come \
  `recipient.digitalDomicile.address: "prova@fail.it"`\
  &#x20;e nel campo `recipients.physicalAddress.address` il codice scenario relativo all'evento che si vuole scatenare tra quelli descritti di seguito.\
  Questa configurazione simulerà una consegna con esito KO sulla PEC e scatenerà l'invio della Raccomandata Semplice (RS) o Raccomandata Semplice Internazionale (RIS) in relazione al codice scenario indicato.

Per attivare la sequenza di consegna desiderata è necessario specificare il destinatario **Michelangelo Buonarroti** che non ha domicili digitali di piattaforma o generale:

<table data-header-hidden data-full-width="false"><thead><tr><th></th><th width="232.33333333333331"></th><th></th></tr></thead><tbody><tr><td><strong>Nome Cittadino</strong></td><td><strong>Cognome Cittadino</strong></td><td><strong>Codice Fiscale Cittadino</strong></td></tr><tr><td><code>Michelangelo</code></td><td><code>Buonarroti</code></td><td><code>BNRMHL75C06G702B</code></td></tr></tbody></table>

Di seguito le sequenze con cui eseguire gli scenari di test con destinatario l'utente **Michelangelo Buonarroti:**

#### Raccomandata Semplice (RS)

<table data-header-hidden><thead><tr><th width="201"></th><th></th></tr></thead><tbody><tr><td><strong>Chiave Sequenza</strong></td><td><strong>Scenario</strong></td></tr><tr><td>OK_RS</td><td><p>valorizzare <code>recipients.digitalDomicile.address="prova@fail.it"</code> </p><p><code>recipients.physicalAddress.address="VIA @OK_RS"</code></p><p><br>Dopo il fallimento dei tentativi di consegna digitale, si avvierà la consegna della Raccomandata Semplice con esito OK.</p></td></tr><tr><td>FAIL_RS</td><td><p>valorizzare </p><p><code>recipients.digitalDomicile.address="prova@fail.it"</code> </p><p><code>recipients.physicalAddress.address="VIA @FAIL_RS"</code><br></p><p>Dopo il fallimento dei tentativi di consegna digitale, si avvierà la consegna della Raccomandata Semplice con esito KO.</p></td></tr></tbody></table>

#### Raccomandata Semplice Internazionale (RIS)  <a href="#raccomandata-semplice-internazionale-ris" id="raccomandata-semplice-internazionale-ris"></a>

<table data-header-hidden><thead><tr><th width="205"></th><th></th></tr></thead><tbody><tr><td><strong>Chiave Sequenza</strong></td><td><strong>Scenario</strong></td></tr><tr><td>OK_RIS</td><td><p>valorizzare</p><p><code>recipients.digitalDomicile.address="prova@fail.it"</code></p><p><code>recipients.physicalAddress.address="VIA @OK_RIS"</code></p><p><code>recipients.physicalAddress.foreignState="FRANCIA"</code></p><p></p><p>Dopo il fallimento dei tentativi di consegna digitale, si avvierà la consegna della Raccomandata Semplice Internazionale con esito OK.</p></td></tr><tr><td>FAIL_RIS</td><td><p>valorizzare </p><p><code>recipients.digitalDomicile.address="prova@fail.it"</code></p><p><code>recipients.physicalAddress.address="VIA @FAIL_RIS"</code></p><p><code>recipients.physicalAddress.foreignState="FRANCIA"</code></p><p></p><p>Dopo il fallimento dei tentativi di consegna digitale, si avvierà la consegna della Raccomandata Semplice Internazionale con esito KO.</p></td></tr></tbody></table>

###

### Come simulare gli eventi di Workflow Analogico

Per attivare la sequenza di consegna analogica desiderata è necessario specificare il destinatario idoneo che non ha domicili digitali di piattaforma o generale e per il quale bisogna lasciare vuoto (NON valorizzare) il campo`recipient.digitalDomicile.`\
Questa configurazione simulerà una consegna verso un destinatario che non possiede alcun domicilio digitale e scatenerà l'invio della Raccomandata AR - Nazionale (AR), Atto Giudiziario 890 o Raccomandata AR Internazionale (RIR) a seconda del codice scenario ed al `physicalCommunicationType` indicato.&#x20;

Per attivare la sequenza di consegna desiderata è necessario specificare il destinatario persona fisica **Michelangelo Buonarroti** che non ha domicili digitali di piattaforma o generale**:**

<table data-header-hidden data-full-width="false"><thead><tr><th></th><th width="232.33333333333331"></th><th></th></tr></thead><tbody><tr><td><strong>Nome</strong></td><td><strong>Cognome</strong></td><td><strong>Codice Fiscale</strong></td></tr><tr><td>Michelangelo</td><td>Buonarroti</td><td>BNRMHL75C06G702B</td></tr></tbody></table>

Di seguito i codici per sollecitare i diversi scenari**:**

#### Raccomandata AR - Nazionale (AR) <a href="#raccomandata-ar-nazionale-ar" id="raccomandata-ar-nazionale-ar"></a>

<table data-header-hidden><thead><tr><th width="202"></th><th></th></tr></thead><tbody><tr><td><strong>Chiave Sequenza</strong></td><td><strong>Scenario</strong></td></tr><tr><td>OK_AR</td><td><p><strong>NON</strong> valorizzare il campo <code>recipients.digitalDomicile</code>, valorizzare <code>physicalCommunicationType="AR_REGISTERED_LETTER"</code></p><p><code>recipients.physicalAddress.address="VIA @OK_AR"</code></p><p><br>Si avvierà il workflow analogico, con consegna Raccomandata AR in esito OK.</p></td></tr><tr><td>FAIL-Irreperibile_AR</td><td><p><strong>NON</strong> valorizzare il campo <code>recipients.digitalDomicile</code>, valorizzare <code>physicalCommunicationType="AR_REGISTERED_LETTER"</code></p><p><code>recipients.physicalAddress.address="VIA @FAIL-Irreperibile_AR"</code></p><p><br>Si avvierà il workflow analogico, con consegna Raccomandata AR in esito KO.</p></td></tr></tbody></table>

#### Atto Giudiziario 890 <a href="#atto-giudiziario-890" id="atto-giudiziario-890"></a>

<table data-header-hidden><thead><tr><th width="202"></th><th></th></tr></thead><tbody><tr><td><strong>Chiave Sequenza</strong></td><td><strong>Scenario</strong></td></tr><tr><td>OK_890</td><td><p><strong>NON</strong> valorizzare il campo <code>recipients.digitalDomicile</code>, valorizzare <code>physicalCommunicationType="REGISTERED_LETTER_890"</code></p><p><code>recipients.physicalAddress.address="VIA @OK_890"</code></p><p></p><p>Si avvierà il workflow analogico, con consegna Raccomandata 890 in esito OK.</p></td></tr><tr><td>FAIL-Irreperibile_890</td><td><p><strong>NON</strong> valorizzare il campo <code>recipients.digitalDomicile</code>, valorizzare <code>physicalCommunicationType="REGISTERED_LETTER_890"</code></p><p><code>recipients.physicalAddress.address="VIA @FAIL-Irreperibile_890"</code></p><p></p><p>Si avvierà il workflow analogico, con consegna Raccomandata 890 in esito KO.</p></td></tr></tbody></table>

#### Raccomandata AR Internazionale (RIR) <a href="#raccomandata-ar-internazionale-rir" id="raccomandata-ar-internazionale-rir"></a>

<table data-header-hidden><thead><tr><th width="207"></th><th></th></tr></thead><tbody><tr><td><strong>Chiave Sequenza</strong></td><td><strong>Scenario</strong></td></tr><tr><td>OK_RIR</td><td><p><strong>NON</strong> valorizzare il campo <code>recipients.digitalDomicile</code>, valorizzare </p><p><code>physicalCommunicationType="AR_REGISTERED_LETTER"</code></p><p><code>recipients.physicalAddress.address="VIA @OK_RIR"</code></p><p><code>recipients.physicalAddress.foreignState="FRANCIA"</code></p><p><br>Si avvierà il workflow analogico, con consegna Raccomandata Estera in esito OK.</p></td></tr><tr><td>FAIL_RIR</td><td><p><strong>NON</strong> valorizzare il campo <code>recipients.digitalDomicile</code>, valorizzare <code>physicalCommunicationType="AR_REGISTERED_LETTER"</code></p><p><code>recipients.physicalAddress.address="VIA @FAIL_RIR"</code></p><p><code>recipients.physicalAddress.foreignState="FRANCIA"</code></p><p><br>Si avvierà il workflow analogico, con consegna Raccomandata Estera in esito KO.</p></td></tr></tbody></table>

###

### Come visualizzare la notifica accedendo come Destinatario della Notifica su Piattaforma

<mark style="color:red;">**AVVERTENZA**</mark>: **non apportare alcuna modifica alla configurazione dei recapiti e alle deleghe dell'utente per non inficiare i test degli altri utilizzatori dell'ambiente UAT**.

Il portale per accedere come Destinatario è: [https://login.uat.notifichedigitali.it/login](https://login.uat.notifichedigitali.it/login) selezionando "Entra con SPID" poi scegliere il provider "Test" ed inserire Username: **michelangelo** e Password: **password123** dell'utente:

<figure><img src=".gitbook/assets/image (18).png" alt="" width="563"><figcaption></figcaption></figure>

Una volta effettuato l'accesso, sarà possibile ricercare la notifica inserita tramite lo IUN:

<figure><img src=".gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>

Entrando nel dettaglio della notifica ed attendendo alcuni secondi, sarà possibile effettuare la visualizzazione della notifica con generazione del relativo evento.


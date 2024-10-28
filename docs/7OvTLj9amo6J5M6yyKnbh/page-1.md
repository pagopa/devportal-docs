# Page 1

## Ipotesi 1

<details>

<summary><strong>SEND_DIGITAL_FEEDBACK</strong></summary>

**Descrizione evento**\
Indica la ricezione di un esito ad un invio digitale

**Atti opponibili:** \
**PEC\_RECEIPT** \
File in formato EML che attesta la consegna della PEC

**Dettagli:**

* `recIndex`:  posizione del destinatario nell'array recipients
* `responseStatus`: esito dell'invio digitale (_es: OK_)
* `notificationDate`: data di consegna o mancata consegna della PEC.
* `deliveryFailureCause`: Eventuali errori (\*)
* `deliveryDetailCode`: Codice di consegna (\*)

</details>



## Ipotesi 2



**SEND\_ANALOG\_DOMICILE**\
Indica la ricezione di un esito ad un invio digitale

<table data-header-hidden><thead><tr><th width="294"></th><th></th></tr></thead><tbody><tr><td><strong>Legal Fact</strong><br>atti opponibili</td><td><strong>Dettagli</strong><br>Elementi di interesse contenuti</td></tr><tr><td><strong>PEC_RECEIPT</strong> <br>File in formato EML che attesta la consegna della PEC</td><td><ul><li><code>recIndex</code>:  posizione del destinatario nell'array recipients</li><li><code>responseStatus</code>: esito dell'invio digitale (<em>es: OK</em>)</li><li><code>notificationDate</code>: data di consegna o mancata consegna della PEC.</li><li><code>deliveryFailureCause</code>: Eventuali errori (*)</li><li><code>deliveryDetailCode</code>: Codice di consegna (*)</li></ul></td></tr></tbody></table>


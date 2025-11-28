---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/ente-creditore/tassonomia-dei-servizi-di-incasso
---

# Tassonomia dei servizi di incasso

A fine di migliorare l’erogazione dei servizi degli Enti Creditori tramite pagoPA è prevista una “Tassonomia dei servizi erogati” che consente ad ogni EC di identificare uniformemente i servizi di incasso e le rispettive posizioni debitorie che transitano tramite la piattaforma pagoPA, anche al fine di abilitare - tramite specifici prefissi tassonomici - i servizi di “avvisatura in digitale”, ossia **Request To Pay** (i cui dettagli, anche relativamente ai codici tassonomici, sono presenti alla sezione [SEPA Request To Pay](sepa-rtp-request-to-pay.md)).

Nel caso in cui vi sia una tipologia di incasso che ingloba al suo interno più voci di entrata (ad esempio sia una percentuale a titolo di imposta che una percentuale a titolo di tassa), l’indicazione tassonomica segue la tipologia della voce/ tributo prevalente.

Per ogni codice tassonomico vengono indicati anche il numero della versione, la data di inizio e di fine validità, con lo scopo che eventuali modifiche possano essere facilmente individuate da parte degli attori coinvolti.

Nella creazione della posizione debitoria, l’EC deve attribuire al campo _transferCategory_, presente in ogni transfer contenuto nella response alla [paGetPayment](../appendici/primitive/ente-creditore/api-soap.md#pagetpayment), il valore desunto dalla tassonomia in base al tipo di entrata richiesta.

Il codice tassonomico è così composto (esempio usato: 9/**0101002IM**/):

| Segmento                   | Regex                        | Esempio |
| -------------------------- | ---------------------------- | ------- |
| Prefisso\*                 | 9\\/\|6\\/\|7\\/\|8\\/       | 9/      |
| Codice tipo Ente Creditore | `\d{2}`                      | 01      |
| Progressivo macro area     | `\d{2}`                      | 01      |
| Codice tipologia servizio  | `\d{3}`                      | 002     |
| Motivo Giuridico           | `IM \| TS \| SP \| SA \| AP` | IM      |

{% hint style="warning" %}
\*Nella selezione del Prefisso gli Enti sono tenuti a consultare la sezione [SEPA Request To Pay](sepa-rtp-request-to-pay.md).
{% endhint %}

L’elenco completo ed aggiornato della tassonomia è disponibile in:

{% file src="../.gitbook/assets/tassonomia.csv" %}

{% file src="../.gitbook/assets/tassonomia.json" %}

{% hint style="danger" %}
Attenzione: Si avvisano gli EC che non sarà possibile aggiungere nuovi codici tassonomici fino a diverse indicazioni da parte di PagoPA S.p.A.
{% endhint %}

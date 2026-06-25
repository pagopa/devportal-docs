# Tassonomia dei servizi di incasso

A fine di migliorare l’erogazione dei servizi delle Pubbliche Amministrazioni per i quali sia stato disposto il pagamento tramite pagoPA viene introdotta una “Tassonomia dei servizi erogati” che consente ad ogni EC di identificare uniformemente i servizi di incasso e le rispettive posizioni debitorie che transitano tramite la piattaforma pagoPA.

Nella creazione della posizione debitoria, l’EC deve attribuire al campo _transferCategory_, presente in ogni transfer contenuto nella response alla [paGetPayment](../appendici/primitive.md#pagetpayment), il valore desunto dalla tassonomia in base al tipo di entrata richiesta.

Il codice tassonomico è così composto (esempio usato: 9/**0101002IM**/):

| Segmento                   | Regex                        | Esempio |
| -------------------------- | ---------------------------- | ------- |
| Codice tipo Ente Creditore | `\d{2}`                      | 01      |
| Progressivo macro area     | `\d{2}`                      | 01      |
| Codice tipologia servizio  | `\d{3}`                      | 002     |
| Motivo Giuridico           | `IM \| TS \| SP \| SA \| AP` | IM      |

Nel caso in cui vi sia una tipologia di incasso che ingloba al suo interno sia una percentuale a titolo di imposta che una percentuale a titolo di tassa, l’indicazione segue la tipologia del _tributo prevalente_.

Per ogni codice tassonomico vengono indicati anche il numero della versione, la data di inizio e di fine validità, con lo scopo che eventuali modifiche possano essere facilmente individuate da parte degli attori coinvolti.

L’elenco completo ed aggiornato della tassonomia è disponibile in:

* [formato csv](https://api.platform.pagopa.it/taxonomy/service/v1/taxonomy?extension=csv)
* [formato json](https://api.platform.pagopa.it/taxonomy/service/v1/taxonomy)

# Tributi multi-beneficiario

Gli attuali workflow di pagamento attivati sulla piattaforma pagoPA si prefiggono, inoltre, i seguenti scopi:

* poter gestire con un unico avviso anche i casi in cui l’importo pagato sia accreditato, in quota parte, su conti di diversi Enti beneficiari (c.d. ente multi-beneficiario);
* fornire a tutti gli Enti Beneficiari le stesse informazioni, e notifiche, previste per l'EC che emette l'Avviso.

Si indicano, a puro titolo indicativo e non esaustivo, altri casi d'uso previsti dalla piattaforma pagoPA:

* avviso il cui importo sia accreditato totalmente su un solo conto dello stesso Ente beneficiario che ha creato la posizione debitoria (c.d. ente mono-beneficiario mono-versamento);
* unico avviso il cui importo sia accreditato, in quota parte, su conti diversi dello stesso Ente beneficiario che ha creato la posizione debitoria (c.d. ente mono-beneficiario multi-versamento multi-iban);
* unico avviso il cui importo sia accreditato su un unico conto dello stesso Ente beneficiario che ha creato la posizione debitoria ma suddiviso in più transfer all'interno della response della [paGetPayment](../appendici/primitive.md#pagetpayment) (c.d. ente mono-beneficiario multi-versamento multi-taxonomy);
* avviso il cui importo sia accreditato totalmente su un solo conto dell'Ente beneficiario, diverso dall'Ente che ha creato la posizione debitoria (c.d. caso SUAP mono-beneficiario);
* unico avviso il cui importo sia accreditato, in quota parte, su conti di diversi Enti beneficiari, tra cui non figura l'Ente che ha creato la posizione debitoria(c.d. caso SUAP multi-beneficiario);

Si ricorda che tutto ciò che è compatibile con i controlli sintattici e semantici, best practice, indicatori di qualità e tutte le altre indicazioni di funzionamento della piattaforma pagoPA previste dal presente documento deve essere considerato lecito.

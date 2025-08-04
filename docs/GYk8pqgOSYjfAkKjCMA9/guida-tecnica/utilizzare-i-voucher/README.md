# Voucher

I voucher sono rilasciati da PDND Interoperabilità ai fruitori sotto forma di **JWT** **(JSON Web Token)**.&#x20;

A seconda della richiesta, possono implementare una specifica diversa (Bearer Token, DPoP), oppure avere una destinazione diversa (un'API di un erogatore, una delle API di PDND Interoperabilità).

Tutte le specifiche implementano un **flusso OAuth 2.0** conforme agli standard, [RFC 7521](https://datatracker.ietf.org/doc/html/rfc7521), per l'autorizzazione del client tramite client assertion.

Il tipo di voucher che un erogatore richiede è sempre indicato nel documento di interfaccia API e nella documentazione tecnica che un erogatore inserisce all'interno del proprio e-service.

Le richieste di voucher possibile sono le seguenti:

* Bearer Token spendibile presso le API di PDND Interoperabilità;
* Bearer Token spendibile presso le API di un erogatore (base);
* Bearer Token spendibile presso le API di un erogatore (con informazioni aggiuntive — pattern MoDI Integrity REST 02);
* DPoP spendibile presso le API di un erogatore.

Nei tutorial linkati sopra, sono presenti anche le corrispondenti verifiche che l'erogatore effettua prima di restituire i dati al fruitore.

A maggior tutela, l'erogatore può inoltre firmare a sua volta la propria risposta, garantendone al fruitore l'integrità. Per farlo, utilizza il meccanismo del _portachiavi erogatore_ (chiamato _Server dell'aderente_ nelle Linee Guida AgID).

{% hint style="info" %}
Ulteriori prove autorizzative o informazioni legate al dominio del fruitore possono essere previste nella comunicazione tra erogatore e fruitore, a discrezione delle parti.
{% endhint %}

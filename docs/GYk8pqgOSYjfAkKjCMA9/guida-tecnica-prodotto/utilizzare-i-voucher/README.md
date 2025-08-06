# Voucher

I voucher sono rilasciati da PDND Interoperabilità ai fruitori sotto forma di **JWT** **(JSON Web Token)**.&#x20;

A seconda della richiesta, possono implementare una specifica diversa (Bearer Token, DPoP), oppure avere una destinazione diversa (una API di un erogatore, una delle API di PDND Interoperabilità).

PDND Interoperabilità utilizza specifiche che si basano sull'[RFC 6750](https://datatracker.ietf.org/doc/html/rfc6750) (**OAuth 2.0**). L'autorizzazione del client tramite client assertion è implementata secondo lo standard [RFC 7521](https://datatracker.ietf.org/doc/html/rfc7521). Ulteriori RFC dipendono dal tipo di voucher rilasciato e sono indicate puntualmente nelle varie sezioni.

Il tipo di voucher che un erogatore richiede è sempre indicato nel documento di interfaccia API e nella documentazione tecnica che un erogatore inserisce all'interno del proprio e-service.

Le richieste di voucher possibili e le loro differenze sono dettagliate nella [sezione dedicata](tipi-di-richiesta-di-voucher.md).

A maggior tutela, l'erogatore può inoltre firmare a sua volta la propria risposta, garantendone al fruitore l'integrità. Per farlo, utilizza il meccanismo del _portachiavi erogatore_ (chiamato _Server dell'aderente_ nelle Linee Guida AgID). Maggiori informazioni nella [sezione dedicata](garanzia-dellintegrita-della-risposta.md).&#x20;

{% hint style="info" %}
Ulteriori prove autorizzative o informazioni legate al dominio del fruitore possono essere previste nella comunicazione tra erogatore e fruitore, a discrezione delle parti.
{% endhint %}

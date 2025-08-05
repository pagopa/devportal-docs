# Voucher

I voucher sono rilasciati da PDND Interoperabilità ai fruitori sotto forma di **JWT** **(JSON Web Token)**.&#x20;

A seconda della richiesta, possono implementare una specifica diversa (Bearer Token, DPoP), oppure avere una destinazione diversa (un'API di un erogatore, una delle API di PDND Interoperabilità).

Tutte le specifiche implementano un **flusso OAuth 2.0** che fa riferimento all'[RFC 6750](https://datatracker.ietf.org/doc/html/rfc6750). L'autorizzazione del client tramite client assertion è implementata secondo lo standard [RFC 7521](https://datatracker.ietf.org/doc/html/rfc7521).

Il tipo di voucher che un erogatore richiede è sempre indicato nel documento di interfaccia API e nella documentazione tecnica che un erogatore inserisce all'interno del proprio e-service.

Le richieste di voucher possibili e le loro differenze sono dettagliate nella [sezione dedicata](ciclo-di-vita.md).

A maggior tutela, l'erogatore può inoltre firmare a sua volta la propria risposta, garantendone al fruitore l'integrità. Per farlo, utilizza il meccanismo del _portachiavi erogatore_ (chiamato _Server dell'aderente_ nelle Linee Guida AgID). Maggiori informazioni nella [sezione dedicata](garanzia-dellintegrita-della-risposta.md).&#x20;

Per maggiori informazioni sui pattern di sicurezza, rimandiamo alla [documentazione di AgID](https://www.agid.gov.it/it/agenzia/stampa-e-comunicazione/notizie/2023/05/23/aggiornati-i-pattern-sicurezza-linee-guida-sullinteroperabilita-tecnica-pa).&#x20;

{% hint style="info" %}
Per poter vedere il "Documento operativo - Pattern di sicurezza" e relativi esempi contenuti nell'allegato "Linee guida sull’interoperabilità tecnica delle Pubbliche Amministrazioni" è necessario che lo stesso venga scaricato sul proprio pc e aperto con l'applicazione Adobe Acrobat.&#x20;

In questo modo si avrà un indice di tutti gli allegati contenuti nel documento come da immagine sotto.

<img src="../../.gitbook/assets/Screenshot 2024-05-20 alle 10.17.36.png" alt="" data-size="original">
{% endhint %}

{% hint style="info" %}
Ulteriori prove autorizzative o informazioni legate al dominio del fruitore possono essere previste nella comunicazione tra erogatore e fruitore, a discrezione delle parti.
{% endhint %}

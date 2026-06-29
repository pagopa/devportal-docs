# Come integrare un'API

### Step 1: Costruire la propria API

Le regole per scrivere un'API sono codificate nelle [Linee Guida sull'interoperabilità tecnica delle Pubbliche Amministrazioni](https://www.agid.gov.it/it/linee-guida) (voce "Interoperabilità"), redatte da AgID. Le architetture accettate sono REST e SOAP (legacy).

Per verificare la conformità della propria API rispetto a quanto previsto da AgID, viene messo a disposizione uno strumento di verifica ([OpenAPI checker](https://italia.github.io/api-oas-checker/)).

Il Dipartimento per la trasformazione digitale ha realizzato un [webinar dedicato](https://developers.italia.it/it/news/2022/05/30/progettare-api-interoperabili), "Progettare API interoperabili conformi alle linee guida AgID".

### Step 2: Aderire a PDND Interoperabilità

Se l'ente non l'ha ancora fatto, effettuare l'adesione alla piattaforma. Per maggiori informazioni, si veda la [sezione dedicata](../../per-iniziare/guida-alladesione.md).

### Step 3: Aggiungere un controllo per verificare la legittimità della richiesta del fruitore

L'erogatore può richiedere che il fruitore presenti un voucher di tipo [Bearer](come-verificare-la-validita-di-un-voucher-bearer.md) o [DPoP](come-verificare-la-validita-di-un-voucher-dpop.md) valido. Inoltre, può opzionalmente richiedere informazioni aggiuntive di audit attraverso un pattern di [digest](come-verificare-il-digest-di-un-voucher.md).

### &#x20;Step 4: Pubblicare l'e-service sul catalogo di PDND

Creare un e-service, inserendo il file OpenAPI e corredando di tutte le informazioni richieste. Una volta pubblicato, sarà disponibile sul catalogo, e i fruitori vi si potranno iscrivere. Per maggiori informazioni, si veda il [tutorial dedicato](../../../../../jqqB3CsnONZdScwRg13O/tutorial/tutorial-per-lerogatore/come-creare-un-nuovo-e-service.md).

{% hint style="info" %}
È disponibile un ambiente di collaudo per testare il proprio servizio in tutta sicurezza. Per maggiori informazioni, si veda la [sezione dedicata](../../per-iniziare/primo-accesso-e-configurazione-iniziale.md#comprendere-gli-ambienti-operativi).
{% endhint %}

***

Pagina successiva [→ Come creare un nuovo e-service](../../../../../jqqB3CsnONZdScwRg13O/tutorial/tutorial-per-lerogatore/come-creare-un-nuovo-e-service.md)

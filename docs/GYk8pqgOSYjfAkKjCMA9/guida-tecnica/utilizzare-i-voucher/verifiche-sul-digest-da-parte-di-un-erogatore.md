# Verifiche sul digest da parte di un erogatore

Nel tipo di richiesta Bearer Token che prevede l'invio di informazioni aggiuntive all'erogatore, sono necessarie verifiche aggiuntive rispetto [a quelle standard](verifiche-su-un-voucher-bearer-token-da-parte-di-un-erogatore.md).

In particolare, bisogna verificare che le informazioni contenute nel JWS, — il quale è prodotto secondo lo standard [RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519) e inserito nell'header `Agid-JWT-TrackingEvidence`, — corrispondano all'hash inserito nel campo `digest` del voucher rilasciato da PDND Interoperabilità.

L'erogatore quindi:

1. estrae il `JWS` dall'header `Agid-JWT-TrackingEvidence`  e verifica la firma della chiave;
2. verifica la corrispondenza tra l'hash del JWS, e l'hash presente nel `digest` del voucher rilasciato da PDND Interoperabilità.

## Verifica della firma della chiave

Per verificare l'autenticità e la validità della chiave privata con la quale è firmato il JWS, può:

1. si autentica sulle API di Interoperabilità come descritto nel [flusso dedicato](../../tutorial/come-richiedere-e-spendere-un-voucher-verso-le-api-di-pdnd-interoperabilita.md);
2. effettua una chiamata `GET /keys/{kid}` dove `kid` è valorizzato con il `kid` inserito nell'header del `JWS`;
3. ottiene da PDND Interoperabilità una chiave pubblica in risposta all'interno del campo `n`;
4. verifica la firma del `JWS`, effettuata dal fruitore con la chiave privata, con la chiave pubblica appena ottenuta.

Se l'erogatore ottiene un errore con status code `404 - Not found`, significa che la chiave non è presente su PDND Interoperabilità e dunque la richiesta è da ritenersi inattendibile.

## Calcolo e confronto dell'hash

Se la chiave è presente e corrisponde, può procedere ad una seconda verifica, ossia quella notarile. In pratica, verifica che la traccia depositata dal fruitore su PDND Interoperabilità con la richiesta al server autorizzativo corrisponda a quella inserita all'interno del voucher rilasciato da PDND Interoperabilità.&#x20;

Se c'è corrispondenza, vuol dire che le informazioni complementari inserite all'interno del JWS sono effettivamente quelle che il fruitore ha dichiarato su PDND Interoperabilità di aver inserito.

Per farlo, l'erogatore prende il JWS ed effettua la stessa operazione effettuata dal fruitore nel secondo passaggio. Ottiene quindi l'hash non reversibile del JWS.

L'erogatore confronta quindi questo hash con quello presente all'interno del campo `digest.value` del voucher rilasciato da PDND Interoperabilità presente nell'header `Authorization`. Se i due hash sono uguali, il fruitore ha reso una dichiarazione che corrisponde ed è tracciata su PDND Interoperabilità.

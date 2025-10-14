# Come verificare il digest di un voucher

Quando si riceve una richiesta da un fruitore, è sempre necessario effettuare le verifiche sul voucher. Queste verifiche dipendono dal tipo di voucher: [Bearer](come-verificare-la-validita-di-un-voucher-bearer.md) o [DPoP](come-verificare-la-validita-di-un-voucher-dpop.md).

In entrambi i casi, se è stato richiesto al fruitore di inserire informazioni aggiuntive di audit secondo il pattern di AgID Audit REST 02, sarà necessaria una verifica in più, sul `digest`.

Sia nel caso di voucher Bearer che DPop, si troverà all'interno del voucher stesso un campo aggiuntivo, denominato `digest`.

Inoltre, si troverà nell'header della chiamata un secondo token, un JWS prodotto secondo lo standard [RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519), che sarà nell'header `AgID-JWT-TrackingEvidence`.

### Contenuto del JWS

Un JWS di esempio può avere header

```
{
  "alg": "RS256",
  "kid": "ZmYxZGE2YjQtMzY2Yy00NWI5LThjNGItMDJmYmQyZGIyMmZh",
  "typ": "JWT"
}
```

I campi presenti nel payload saranno invece le informazioni di audit che il fruitore invia all'erogatore, descritte all'interno della documentazione dell'e-service. Possono variare e dipendono dalla richiesta dell'erogatore sul singolo e-service.

### Controlli da eseguire

Bisogna dunque verificare che l'hash calcolato a partire dal JWS corrisponda all'hash inserito nel campo `digest` del voucher rilasciato da PDND Interoperabilità.

L'erogatore quindi:

1. estrae il JWS dall'header `Agid-JWT-TrackingEvidence`  e verifica la firma del JWS stesso;
2. verifica la corrispondenza tra l'hash del JWS, e l'hash presente nel `digest` del voucher rilasciato da PDND Interoperabilità.

#### Verifica della firma

Per verificare l'autenticità e la validità della chiave privata con la quale è firmato il JWS, l'erogatore:

1. si autentica sulle API di PDND Interoperabilità come descritto nel [flusso dedicato](../tutorial-per-il-fruitore/come-richiedere-un-voucher-bearer-per-le-api-di-pdnd-interoperabilita.md);
2. effettua una chiamata `GET /keys/{kid}` dove `kid` è valorizzato con il `kid` inserito nell'header del JWS;
3. ottiene da PDND Interoperabilità una chiave pubblica in risposta all'interno del campo `n`;
4. verifica la corrispondenza tra la firma del JWS, effettuata dal fruitore con la chiave privata, e la chiave pubblica appena ottenuta.

NB: se l'erogatore ottiene dall'API di PDND Interoperabilità un errore con status code `404 - Not found`, significa che la chiave non è presente su PDND Interoperabilità e dunque la richiesta è da ritenersi inattendibile.

#### Calcolo e confronto dell'hash

Se la chiave è presente e corrisponde, può procedere ad una seconda verifica, ossia quella notarile. In pratica, verifica che la traccia depositata dal fruitore su PDND Interoperabilità con la richiesta al server autorizzativo corrisponda a quella inserita all'interno del voucher rilasciato da PDND Interoperabilità.&#x20;

Se c'è corrispondenza, vuol dire che le informazioni complementari inserite all'interno del JWS sono effettivamente quelle che il fruitore ha dichiarato su PDND Interoperabilità di aver inserito.

Per farlo, l'erogatore prende il JWS ed effettua la stessa operazione effettuata dal fruitore nel secondo passaggio. Ottiene quindi l'hash non reversibile del JWS.

L'erogatore confronta quindi questo hash con quello presente all'interno del campo `digest.value` del voucher rilasciato da PDND Interoperabilità presente nell'header `Authorization`. Se i due hash sono uguali, il fruitore ha reso una dichiarazione che corrisponde ed è tracciata su PDND Interoperabilità.

***

Pagina successiva [→ Tutorial per il fruitore](../tutorial-per-il-fruitore/)

# Il flusso in breve

Dal punto di vista tecnico, l'interazione si articola in alcuni passaggi, che sono di fatto una variazione sul tema rispetto al flusso standard di richiesta e verifica di un voucher, descritto [nelle sezioni sopra](il-flusso-in-breve.md#richiesta-di-un-voucher-spendibile-presso-un-e-service-del-catalogo). In particolare:&#x20;

1. **il fruitore impacchetta le informazioni complementari**: il fruitore costruisce un `JWS` secondo la specifica definita nell'[RFC7519](https://datatracker.ietf.org/doc/html/rfc7519) inserendo nell'header il `kid` di una chiave pubblica depositata su PDND Interoperabilità. Con la chiave privata corrispondente a quella pubblica firmerà questo `JWS`. Nel corpo (payload) del `JWS` inserisce le informazioni complementari da inviare all'erogatore;
2. **il fruitore calcola l'hash**: il fruitore calcola un hash non reversibile a partire dal `JWS` secondo l'algoritmo di hashing `SHA256`;
3. **il fruitore costruisce la client assertion**: il fruitore inserisce l'hash nel campo `digest` nella client assertion, per il resto compilata come nel flusso standard;
4. **il fruitore richiede un voucher a PDND Interoperabilità**: il fruitore inoltra a PDND Interoperabilità la richiesta per ottenere un voucher sulla base della client assertion, come da flusso standard;
5. **PDND Interoperabilità restituisce un voucher al fruitore**: PDND Interoperabilità rilascia un voucher al fruitore come nel flusso standard. Inoltre, il voucher rilasciato riporta al suo interno anche l'hash che il fruitore ha inserito nel campo `digest` client assertion inviata nella richiesta;
6. **il fruitore fa una richiesta di dati all'erogatore**: il fruitore invia quindi una richiesta all'erogatore, inserendo il voucher di PDND Interoperabilità nell'header autorizzativo `Authorization` secondo il flusso standard. Nella stessa chiamata, inserisce in un secondo header chiamato `Agid-JWT-TrackingEvidence` il `JWS` con le informazioni complementari;
7. **l'erogatore effettua le verifiche standard**: l'erogatore estrae il voucher rilasciato da PDND Interoperabilità dall'header `Authorization` ed effettua le sue verifiche, come da flusso standard;
8. **l'erogatore effettua verifiche aggiuntive sul JWS**: l'erogatore estrae il `JWS` dall'header `Agid-JWT-TrackingEvidence`. Verifica quindi sulle API di PDND Interoperabilità che la chiave pubblica corrispondente al `kid` inserito nell'header del `JWS` sia effettivamente depositata su PDND Interoperabilità e che il `JWS` sia stato firmato con la chiave privata corrispondente;
9. **l'erogatore calcola e confronta l'hash**: l'erogatore effettua la stessa operazione effettuata dal fruitore al punto 2. e calcola l'hash del `JWS`. Lo confronta quindi con quello inserito all'interno del voucher rilasciato da PDND Interoperabilità.

I due hash dovranno essere uguali, segno che quello che il fruitore ha dichiarato di aver trasmesso su PDND Interoperabilità è effettivamente ciò che l'erogatore (e lui solo) trova nelle informazioni complementari. Di seguito i passaggi nel dettaglio.

{% hint style="warning" %}
**NB:** è fatto divieto di inserire all'interno delle issue Github pubbliche le proprie client assertion o qualsiasi altro materiale di natura potenzialmente riservata o sensibile.\
Le issue che contengono informazioni potenzialmente sensibili potranno essere rimosse senza preavviso dagli amministratori.
{% endhint %}

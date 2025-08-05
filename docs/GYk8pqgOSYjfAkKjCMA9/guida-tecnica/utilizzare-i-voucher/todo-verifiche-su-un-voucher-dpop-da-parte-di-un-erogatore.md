# \[TODO] Verifiche su un voucher DPoP da parte di un erogatore

Nel tipo di richiesta DPoP, sono necessarie verifiche diverse da quelle previste per un voucher di tipo Bearer Token.

In questo caso, l'erogatore esegue i seguenti passaggi:

1. controlla la [firma del voucher](verifiche-su-un-voucher-bearer-token-da-parte-di-un-erogatore.md#verifica-sulla-firma), che sia stato rilasciato da PDND Interoperabilità;
2. controlla che `typ="dpop+jwt"` ;
3. estrae `cnf.jkt` dal voucher;
4. verifica la DPoP ricevuta dal fruitore, in particolare:
   1. che la chiave contenuta nell'header `jwk` della DPoP corrisponda a quella usata per la firma della DPoP stessa;
   2. &#x20;che l'`htm` corrisponda al metodo effettivamente invocato e che l'`htu` corrisponda effettivamente all'endpoint chiamato;
   3. che la DPoP sia stata emessa non oltre `iat` + 60 secondi con una tolleranza di ±10 secondi;
   4. che l'id unico, il `jti`, non sia presente nella cache dell'e-service;
   5. che l'`ath`  combaci con l'hash calcolato sul voucher rilasciato da PDND Interoperabilità;
5. calcola il thumbprint della chiave pubblica contenuta nella proof (`jwk`) e verifica che sia identico al `cnf.jkt`.

Se tutte le verifiche vanno a buon fine, la richiesta è autenticata.

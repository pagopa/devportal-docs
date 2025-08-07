# Approfondimento su DPoP

Il Demonstrating Proof‑of‑Possession (DPoP) è lo standard IETF ([RFC 9449](https://datatracker.ietf.org/doc/html/rfc9449)) che rende un voucher (token JWT) inutilizzabile se sottratto, perché vincolato a una chiave pubblica posseduta dal chiamante.

È l'erogatore che richiede l'uso del DPoP inserendolo all'interno delle informazioni del proprio file di interfaccia API. DPoP è consigliato per i casi d'uso in cui si desidera una protezione extra contro furto e replay dei token. Se non è espressamente richiesto l'uso di DPoP, si continua ad usare i voucher "Bearer" tradizionali.

## In breve

Il fruitore genera una coppia di chiavi asimmetriche dedicata al DPoP. La chiave privata resta sempre sul server o dispositivo del fruitore e non viene mai condivisa.&#x20;

Questa chiave non deve essere depositata su PDND né coincidere con una di quelle eventualmente registrate per la client assertion: è indipendente e gestita dal fruitore.

DPoP incoraggia l’uso di chiavi effimere o almeno separate: la stessa chiave può firmare tutte le richieste di una "sessione", ma ogni chiamata API include una DPoP con `jti` e `iat` univoci, creando così un contesto crittografico distinto e non riutilizzabile da terzi.

Se necessario, il fruitore può mantenere la chiave DPoP per periodi più lunghi, purché rimanga diversa da quella usata per la client assertion.

## Perché usare DPoP?

<table><thead><tr><th width="256.8031005859375">Vantaggio</th><th>Cosa significa in pratica</th></tr></thead><tbody><tr><td>Token vincolato al chiamante</td><td>Il voucher contiene l'hash — il thumbprint — della chiave pubblica del chiamante; senza la chiave privata corrispondente non è possibile utilizzarlo.</td></tr><tr><td>Replay protetto</td><td>Ogni richiesta porta un piccolo JWT firmato (“DPoP”) con htm + htu + timestamp + jti; la stessa proof non può essere ri‑usata su un altro endpoint o oltre pochi minuti.</td></tr><tr><td>Zero certificati chiamante</td><td>Si ottiene un risultato simile a mTLS, ma con una semplice coppia di chiavi generata dal chiamante.</td></tr><tr><td>"Filo conduttore" crittografico</td><td>DPoP crea un legame unico tra gli attori coinvolti nel flusso OAuth2.0 attraverso la condivisione di un'informazione unica in possesso esclusivo del fruitore (chiave privata).</td></tr></tbody></table>

## **Flusso di richiesta e autorizzazione**

In sostanza, il processo end-to-end richiede sette passaggi:

1. il fruitore genera la client assertion standard; la firma con la chiave privata la cui pubblica è depositata sul proprio client su PDND Interoperabilità;
2. il fruitore costruisce la DPoP destinata al server autorizzativo di PDND; la firma con una seconda chiave privata la cui pubblica sarà inserita nell'intestazione della DPoP, nel campo jwk;
3. il fruitore chiede il voucher al server autorizzativo di PDND, aggiungendo l'header DPoP;
4. il server autorizzativo di PDND effettua le verifiche necessarie. In caso di esito positivo, restituisce un voucher di tipo DPoP;
5. il fruitore costruisce una seconda DPoP, questa volta destinata al resource server, ossia l'API dell'e-service dell'erogatore; la firma con la stessa chiava privata della DPoP al punto 2, mettendo anche qusta volta la chiave pubblica corrispondente nell'intestazione della DPoP, nel campo jwk;
6. il fruitore fa una richiesta verso l'e-service dell'erogatore; inserisce sia il voucher rilasciato da PDND Interoperabilità, sia la DPoP generata al punto precedente nell'header DPoP;
7. l'erogatore effettua le verifiche necessarie. In caso di esito positivo, restituisce i dati al fruitore.

Per il dettaglio su come implementarlo, si rimanda al [tutorial dedicato](../../tutorial/fruitore/voucher/come-richiedere-un-voucher-dpop-per-le-api-di-un-erogatore-base.md).

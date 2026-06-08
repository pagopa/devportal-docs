# Il ruolo dell'Authentic Source e la matrice dei ruoli

L'**Authentic Source (AS)**, o Titolare di Fonte Autentica, è il soggetto che detiene i dati da cui vengono creati gli **Attestati Elettronici di Attributi (EAA)** rilasciati nelle soluzioni IT-Wallet. Un EAA è un oggetto digitale che consente all'utente di dimostrare, in modo affidabile e verificabile, una condizione, uno stato o un diritto.

Il ruolo dell'AS non si esaurisce nella messa a disposizione dei dati: l'AS **progetta le caratteristiche dell'EAA** e **resta proprietario del dato**, responsabile del relativo ciclo di vita.&#x20;

Sul piano operativo, l'AS opera sulla [piattaforma PDND come **erogatore** di un e-service](https://developer.pagopa.it/it/pdnd-interoperabilita/guides/manuale-operativo-pdnd-interoperabilita/v1.0/per-iniziare/funzionamento-generale#percorso-per-condividere-i-dati-su-pdnd-interoperabilita).

## I ruoli&#x20;

<table><thead><tr><th width="318.10546875">Attore</th><th>Ruolo</th></tr></thead><tbody><tr><td><strong>Authentic Source (AS)</strong></td><td>Possiede il dato, progetta l'EAA, crea ed espone l'e-service su PDND (da template o ex-novo), governa il ciclo di vita</td></tr><tr><td><strong>Issuer (Fornitore di Attestati)</strong></td><td>Emette l'EAA a partire dai dati dell'AS. Per EAA di <strong>interesse pubblico</strong>, l'unico Issuer è <strong>IPZS</strong></td></tr><tr><td><strong>Wallet Provider</strong></td><td>Fornisce la soluzione IT-Wallet. Per la soluzione pubblica (app IO), l'unico fornitore è <strong>PagoPA</strong></td></tr><tr><td><strong>Service Management (SM) — PagoPA</strong></td><td>Valida l'OpenAPI YAML dell'AS (validatore automatico) e supporta l'armonizzazione dei claim; ove previsto, contribuisce ai Template e-service IT-Wallet</td></tr><tr><td><strong>PDND</strong></td><td>Infrastruttura di interoperabilità su cui l'AS espone l'e-service, gestisce portachiavi/voucher e attiva Signal Hub</td></tr></tbody></table>

# Il ruolo dell'Authentic Source e la matrice dei ruoli

L'**Authentic Source (AS)**, o Titolare di Fonte Autentica, è il soggetto che detiene i dati da cui vengono creati gli **Attestati Elettronici di Attributi (EAA)** rilasciati nelle soluzioni IT-Wallet. Un EAA è un oggetto digitale che consente all'utente di dimostrare, in modo affidabile e verificabile, una condizione, uno stato o un diritto.

Il ruolo dell'AS non si esaurisce nella messa a disposizione dei dati: l'AS **progetta le caratteristiche dell'EAA** e **resta proprietario del dato**, responsabile del relativo ciclo di vita. Sul piano operativo, l'AS opera su PDND come **erogatore** (modalità «eroga») di un e-service.

## I ruoli&#x20;

| Attore                               | Ruolo                                                                                                                                                   |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Authentic Source (AS)**            | Possiede il dato, progetta l'EAA, crea ed espone l'e-service su PDND (da template o ex-novo), governa il ciclo di vita                                  |
| **Issuer (Fornitore di Attestati)**  | Emette l'EAA a partire dai dati dell'AS. Per EAA di **interesse pubblico**, l'unico Issuer è **IPZS**                                                   |
| **Wallet Provider**                  | Fornisce la soluzione IT-Wallet. Per la soluzione pubblica (app IO), l'unico fornitore è **PagoPA**                                                     |
| **Service Management (SM) — PagoPA** | Valida l'OpenAPI YAML dell'AS (validatore automatico) e supporta l'armonizzazione dei claim; ove previsto, contribuisce ai Template e-service IT-Wallet |
| **PDND**                             | Infrastruttura di interoperabilità su cui l'AS espone l'e-service, gestisce portachiavi/voucher e attiva Signal Hub                                     |

# Probing

### Cos'è?

Monitora la disponibilità delle API pubblicate dagli erogatori sul catalogo degli e-service.

Quando una versione di e-service è in stato "attivo" sulla piattaforma, vuol dire che è possibile per il fruitore ottenere dei voucher da PDND da spendere presso le API dell'erogatore. Nonostante questo, è possibile che le API da contattare siano in quel momento indisponibili per problemi tecnici.

La dashboard del Probing è disponibile per gli ambienti di [collaudo](https://uat.stato-eservice.interop.pagopa.it/) e [produzione](https://stato-eservice.interop.pagopa.it/).

### Obiettivi

* Dare ai fruitori la visibilità su eventuali disservizi che possano impattare la loro operatività.
* Garantire la trasparenza sullo stato di disponibilità dei servizi in piattaforma.

### Come funziona?

Una sonda di PDND contatta una a una le API degli erogatori rese disponibili sul catalogo, e completa il giro in circa 5 minuti, per poi ricominciare.

Per eseguire la verifica, la sonda contatta un endpoint di `status` sull'API e registra l'esito. Se l'API non risponde entro 5 secondi, la sonda registra che l'API non è disponibile e procede al servizio successivo.

### È obbligatorio?

L'esposizione di un endpoint di `status` è previsto nel ModI ed è poi ribadito nelle Linee Guida. Maggiori dettagli nella [sezione dedicata](../../riferimenti-normativi/normativa-e-approfondimenti.md).

### Come faccio a integrare il mio e-service con il Probing?

La procedura è descritta nel [tutorial dedicato](../../tutorial/tutorial-per-lerogatore/come-integrare-il-proprio-e-service-con-il-probing.md).

***

Pagina successiva [→ Notifiche](../notifiche.md)

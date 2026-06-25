# Abilitazione del servizio

Il servizio di Signal Hub può essere abilitato sia in fase di creazione di un e-service sia in fase di modifica di un e-service esistente. Un ente può abilitare un e-service già pubblicato al servizio di deposito e recupero dei segnali.

L'abilitazione opera sull'e-service, non su una specifica versione, per cui tutte le versioni dell'e-service saranno abilitate; i relativi fruitori saranno abilitati a recuperare i segnali. La disabilitazione opera allo stesso livello.

La disabilitazione del servizio, sempre in fase di modifica dell'e-service, inibisce l'accesso sia al deposito sia al recupero dei segnali. La disabilitazione ha effetto immediato e vale sia per l'erogatore sia per i fruitori: nel momento in cui il servizio viene disabilitato, nessuno potrà accedere. I segnali saranno conservati per il loro _time to live_ ([retention period](../la-guida-tecnica/retention-period-e-api-polling.md))  ma nessuno potrà né depositarne di nuovi né recuperarli.


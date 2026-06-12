# Signal Hub

Oltre al modello di interazione sincrono basato su richiesta/risposta, PDND Interoperabilità offre **Signal Hub**, una funzionalità avanzata per abilitare comunicazioni **asincrone** e basate su eventi tra gli enti.

Signal Hub è progettato per supportare architetture event-driven, in cui un ente Erogatore può notificare a più Fruitori il verificarsi di un evento (un "segnale"), senza conoscerli a priori e senza attendere una loro risposta diretta. Questo disaccoppia i sistemi e permette di costruire flussi di lavoro più resilienti e scalabili.

### Funzionamento

Il meccanismo si basa su un modello _publish-subscribe_:

1. Un **Erogatore** pubblica un evento (segnale) su un determinato "topic" (argomento).
2. I **Fruitori** interessati a quell'evento si "iscrivono" a quel topic.
3. Quando un nuovo segnale viene pubblicato, la piattaforma lo consegna a tutti i Fruitori iscritti.

Questo approccio è ideale per casi d'uso come:

* Notifiche di aggiornamento di stato (es. "la pratica è passata allo stato X").
* Comunicazioni massive (es. "è disponibile un nuovo aggiornamento software").
* Sincronizzazione di dati tra sistemi distribuiti.

### Documentazione Dedicata

La configurazione e l'utilizzo di Signal Hub richiedono passaggi tecnici specifici che sono documentati in una guida dedicata. La guida illustra in dettaglio l'architettura, le API per la pubblicazione e la sottoscrizione degli eventi e le best practice per l'integrazione.

**Per consultare la documentazione completa, si rimanda alla guida ufficiale esterna:**

> [**Accedi alla Documentazione di Signal Hub**](https://www.google.com/search?q=LINK_ALLA_DOCUMENTAZIONE_DEDICATA)

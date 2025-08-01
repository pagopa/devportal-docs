# Approfondimenti

PDND Interoperabilità autentica e autorizza gli aderenti, abilitando lo scambio di informazioni tra le parti. I dati presenti nelle banche dati dei quali gli erogatori sono titolari non transitano mai su PDND Interoperabilità.

Gli unici dati in possesso di PDND Interoperabilità sono quelli depositati o generati all'interno della piattaforma e legati al funzionamento della stessa (es. la richiesta da parte di un aderente di fruire di un e-service di un altro aderente).

## Termini e condizioni

Il Gestore della piattaforma, individuato in PagoPA S.p.A., è qualificato come titolare del trattamento dei dati personali ai sensi del Paragrafo 14 delle [Linee guida AgID](https://trasparenza.agid.gov.it/moduli/downloadFile.php?file=oggetto_allegati/213481831510O__O20211210_LG+Infrastruttura+Interoperabilit%26%23224%3B+PDND_v1.pdf), alle quali il Garante per la privacy e la protezione dei dati personali ha dato parere favorevole.

I termini e le condizioni d'uso sono presentati all'utente al momento del primo accesso al back office di PDND Interoperabilità e deve essere sua cura visionare eventuali aggiornamenti. I termini e le condizioni d'uso non sono presenti in un documento modificabile e la loro accettazione è indispensabile per poter proseguire nell'accesso ai servizi messi a disposizione da PagoPA S.p.A. Per queste ragioni, non si troveranno allegati all’accordo di adesione a PDND Interoperabilità da parte di un aderente. Al fine di agevolare la negoziazione, è possibile prendere visione dei [termini di servizio](https://selfcare.interop.pagopa.it/ui/it/termini-di-servizio) a monte dell'adesione a PDND Interoperabilità.

## Limitazioni delle responsabilità

La clausola di "Limitazioni delle responsabilità" da parte di PagoPA S.p.A. è limitata a due aspetti specifici: l'ambiente di test e la manutenzione. In questi casi, PagoPA S.p.A. non può garantire l'assenza di eventuali altre problematiche legate all'infrastruttura.

## SLA — Service Level Agreement

In ottemperanza alle [Linee Guida AgID](https://www.agid.gov.it/sites/agid/files/2024-06/Linee_guida_infrastruttura_interoperabilita_pdnd.pdf) per PDND Interoperabilità, in particolare al paragrafo 13 sui livello di servizio dell'infrastruttura, la piattaforma garantisce i seguenti SLA per la generazione del token di accesso:

* **Indicatore 13.1.1 - Tempo di risposta delle richieste su percentile:**\
  Il P90 di 10 secondi in un intervallo di 120 minuti, ovvero "in un periodo di 120 minuti, il 90% delle richieste viene processato entro 10 secondi";
* **Indicatore 13.1.2 - Numero di richieste per unità di tempo:**\
  \- Ambiente di Produzione: 1.440.000 richieste in un intervallo di 120 minuti (200 richieste al secondo)\
  \- Altri Ambienti: 720.000 richieste in un intervallo di 120 minuti (100 richieste al secondo);
* **Indicatore 13.1.3 - Numero di richieste con risposta di errore per unità di tempo:**\
  Un massimo del 3% in un intervallo di 120 minuti.

# Termini e condizioni e SLA

### Gestore della piattaforma

**PagoPA S.p.A.** è individuata quale **Gestore della piattaforma** ed è qualificata **titolare del trattamento dei dati personali** ai sensi del **Paragrafo 14 delle Linee guida AgID**, sulle quali il **Garante per la protezione dei dati personali** ha espresso parere favorevole.

### Termini e condizioni

I **Termini e condizioni d’uso** sono resi disponibili all’utente **al primo accesso al front office** di PDND Interoperabilità e costituiscono il **riferimento vigente** per l’utilizzo della piattaforma. L’utente è tenuto a **prendere visione degli eventuali aggiornamenti** pubblicati. I termini sono forniti in **formato non modificabile** e l’**accettazione** è **condizione necessaria** per proseguire nell’accesso ai servizi messi a disposizione da PagoPA S.p.A.

In coerenza con tale impostazione, i termini e le condizioni d’uso **non costituiscono allegato** all’**Accordo di Adesione** dell’ente. Per agevolare la negoziazione, è possibile [**consultare i termini**](https://selfcare.interop.pagopa.it/ui/it/termini-di-servizio) prima di completare l’adesione a PDND Interoperabilità.

### Limitazioni delle responsabilità

La clausola di **Limitazioni di responsabilità** di **PagoPA S.p.A.** è **circospetta a due soli ambiti**:

1. **Ambiente di collaudo**: L’ambiente è destinato a test e sperimentazioni; il servizio è erogato con caratteristiche non definitive e **può presentare** discontinuità o anomalie riconducibili all’infrastruttura sottostante.
2. **Interventi di manutenzione** (programmata o straordinaria): Durante le attività tecniche il servizio **può manifestare** temporanee indisponibilità o degradi prestazionali.

In tali contesti, **l’esenzione da ulteriori problematiche infrastrutturali non rientra nel perimetro di garanzia**.

## SLA — Service Level Agreement

In ottemperanza alle Linee Guida AgID – par. 13 ("livelli di servizio dell’infrastruttura"), PDND Interoperabilità adotta i seguenti impegni di servizio per l’**ambiente di produzione** relativi all’endpoint di **emissione del token di accesso:**

* **Indicatore 13.1.1 - Tempo di risposta delle richieste su percentile:**\
  Il P90 di 10 secondi in un intervallo di 120 minuti, ovvero "in un periodo di 120 minuti, il 90% delle richieste viene processato entro 10 secondi";
* **Indicatore 13.1.2 - Numero di richieste per unità di tempo:**
  * Ambiente di Produzione: 1.440.000 richieste in un intervallo di 120 minuti (200 richieste al secondo)
  * Altri Ambienti: 720.000 richieste in un intervallo di 120 minuti (100 richieste al secondo);
* **Indicatore 13.1.3 - Numero di richieste con risposta di errore per unità di tempo:**\
  Un massimo del 3% in un intervallo di 120 minuti.

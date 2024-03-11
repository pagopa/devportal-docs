---
description: >-
  Le FAQ di seguito riguardano principalmente i risvolti legali e amministrativi
  dei processi legati a PDND Interoperabilità
---

# Per i DPO

### Titolarità e trattamento dei dati

#### Su PDND Interoperabilità avviene scambio di dati tra erogatore e fruitore?

No, PDND Interoperabilità autentica e autorizza gli aderenti, abilitando lo scambio di informazioni tra le due parti ma i dati detenuti dagli erogatori non transitano mai per PDND Interoperabilità. È per questa ragione che nell'accordo non si fa riferimento al [DPCM sulla Strategia Nazionale Dati ](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2018-09-28/\_rst/capo5\_sezione1\_art50-ter.html)e sul [coinvolgimento del Garante](https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/9732758).

#### Chi è il titolare del trattamento dei dati personali depositati o generati all'interno di PDND Interoperabilità?

Il Gestore della Piattaforma (in questo caso, PagoPA S.p.A.) è stato qualificato come titolare del trattamento dei dati personali ai sensi del paragrafo 14 delle [Linee guida AgID](https://trasparenza.agid.gov.it/moduli/downloadFile.php?file=oggetto\_allegati/213481831510O\_\_O20211210\_LG+Infrastruttura+Interoperabilit%26%23224%3B+PDND\_v1.pdf), passate al vaglio anche del Garante. Da notare che i dati cui si fa riferimento sono solo quelli depositati o generati all'interno di PDND Interoperabilità e non i dati in possesso degli erogatori, i quali non transitano mai sulla piattaforma.

### Accordo di adesione

#### Perché termini e condizioni d'uso non fanno parte dell'accordo di adesione?

I termini e condizioni d'uso saranno presentati all'utente all'atto della prima login sul back office di PDND Interoperabilità, e sarà sua cura visionare eventuali aggiornamenti. Non sono un documento modificabile e la loro accettazione è indispensabile per poter proseguire nell'accesso ai servizi messi a disposizione da PagoPA S.p.A. Per queste ragioni, non si troveranno allegati all’accordo di adesione a PDND Interoperabilità da parte di un aderente. Al fine di agevolare la negoziazione, è possibile prendere visione dei [termini di servizio](https://selfcare.interop.pagopa.it/ui/it/termini-di-servizio) a monte dell'adesione a PDND Interoperabilità.

#### Chi firma l'accordo di adesione?

Da linee guida AgID chi firma l'accordo di adesione è il Legale Rappresentante dell'ente. Riprendendo quanto detto nella guida all'adesione, "con questa figura si identifica non necessariamente il vertice dell'ente; può essere il rappresentante pro tempore o un procuratore munito dei necessari poteri di firma".

La certezza dell'autenticità della dichiarazione viene dal fatto che l'accordo di adesione sarà inviato via PEC all'indirizzo indicato come domicilio digitale dell'ente presso il [Catalogo IPA](https://www.indicepa.gov.it/ipa-portale/consultazione/indirizzo-sede/ricerca-ente), la fonte autoritativa scelta per individuare i legittimi aderenti alla piattaforma.

### Funzionalità dell'Infrastruttura

#### Perché nel contratto c'è una clausola di "Limitazioni delle responsabilità" da parte di PagoPA S.p.A.?

È limitata a due aspetti specifici: l'ambiente di test e la manutenzione. In questi casi, PagoPA S.p.A. non può garantire l'assenza di eventuali altre problematiche legate all'infrastruttura.

#### Accordo di interoperabilità o richiesta di fruizione?

In una versione antecedente delle linee guida di AgID si fa riferimento agli "accordi di interoperabilità". Questa componente è poi evoluta nelle "[richieste di fruizione](../manuale-operativo/richieste-di-fruizione.md)", che hanno soppiantato il meccanismo precedente.

Le richieste di fruizione sono più semplici degli accordi di interoperabilità perché non prevedono più un momento amministrativo di scambio di firma tra i due enti. I rappresentanti degli enti effettuano il login a PDND Interoperabilità attraverso SPID, ed effettuano un click per inoltrare (il fruitore) e attivare (l'erogatore) una richiesta di fruizione. Per AgID, questo meccanismo è sufficiente a certificare la volontà degli enti, utilizzando poi PDND Interoperabilità come garante e depositario della richiesta di fruizione attiva tra loro.

#### Che cos'è l'"analisi del rischio"?

È la parte amministrativa della procedura di accesso alla fruizione di un e-service. Realizzato sulla base delle misure minime indicate nelle [_Linee guida AgID_](https://trasparenza.agid.gov.it/moduli/downloadFile.php?file=oggetto\_allegati/213481831510O\_\_O20211210\_LG+Infrastruttura+Interoperabilit%26%23224%3B+PDND\_v1.pdf), su invito del Garante, è un questionario per lo più contenente domande relative alla privacy e ai dati cui intende accedere un fruitore. Una nuova analisi del rischio andrà compilata per ogni finalità di accesso ai dati detenuti dall'erogatore.&#x20;

#### È possibile sospendere un e-service per manutenzione?

Oltre ad una sospensione ex abrupto, legata a circostanze straordinarie e di forza maggiore, è possibile effettuare una "sospensione programmata" in una versione di un e-service. In questo caso, da linee guida di AgID è previsto che l'erogatore fornisca un preavviso.

> l’Erogatore PUÒ sospendere temporaneamente la disponibilità dell’e-service segnalando in anticipo al Fruitore tale circostanza nel rispetto delle condizioni eventualmente indicate negli SLA concordati con il Fruitore al di fuori della Infrastruttura interoperabilità PDND ([LLGG AgID](https://trasparenza.agid.gov.it/moduli/downloadFile.php?file=oggetto\_allegati/213481832130O\_\_O20211210\_LG+Infrastruttura+Interoperabilit%26%23224%3B+PDND\_v1\_allegato+2.pdf) – allegato 2, capitolo 4, pag. 17)

#### Quando viene pubblicata una nuova versione di un e-service, perché non viene effettuato l'upgrade automatico per tutti i fruitori?

Una nuova versione di e-service con tutta probabilità presenterà delle differenze rispetto alla versione precedente. Un upgrade automatico di tutti i fruitori porterebbe a disservizi diffusi laddove parte dell'API fosse cambiata. Ogni fruitore potrà fare l'upgrade manualmente della propria richiesta di fruizione all'ultima versione dell'e-service non appena riterrà la sua integrazione stabile. Il processo è descritto in maggior dettaglio nel manuale operativo.


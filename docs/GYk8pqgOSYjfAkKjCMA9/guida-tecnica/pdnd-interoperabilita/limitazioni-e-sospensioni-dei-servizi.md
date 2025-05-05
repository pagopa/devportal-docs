# Limitazioni e sospensioni dei servizi

Per garantire agli aderenti di poter intervenire tempestivamente in caso di malfunzionamenti o eventuali usi malevoli, PDND Interoperabilità mette a disposizione la possibilità di sospendere il servizio in diversi punti del flusso. A scopo esemplificativo, osserva il seguente diagramma:

<figure><img src="../../.gitbook/assets/interop_funzionamento_generale_02.png" alt="Un diagramma che dettaglia le aree di sovrapposizione sulle operazioni. Gli e-service sono esclusiva competenza dell&#x27;erogatore, client e chiavi pubbliche del fruitore. Richieste di fruizione e finalità sono invece parti sulle quali entrambi gli attori possono agire"><figcaption><p>Un diagramma che dettaglia le aree di sovrapposizione sulle operazioni. Gli e-service sono esclusiva competenza dell'erogatore, client e chiavi pubbliche del fruitore. Richieste di fruizione e finalità sono invece parti sulle quali entrambi gli attori possono agire</p></figcaption></figure>

Esistono tre punti nei quali è possibile limitare l'operatività del flusso:&#x20;

1. in caso di emergenza, l'erogatore può unilateralmente **sospendere una versione di e-service**, impedendo l'accesso a tutte le richieste di fruizione e alle finalità a esse associate. È sua facoltà anche effettuare una sospensione per manutenzione dandone congruo preavviso ai fruitori;
2. sia l'erogatore che il fruitore possono **sospendere** unilateralmente **una richiesta di fruizione**, di fatto impedendo l'accesso a tutte le finalità a essa associate. Una richiesta di fruizione può essere, in alcuni casi eccezionali, sospesa unilateramente da PDND Interoperabilità, come ad esempio la perdita di un attributo certificato da parte di un fruitore;
3. entrambe le parti possono **sospendere** unilateralmente **una finalità**, come descritto nell'immagine sopra.&#x20;

Ogni atto di sospensione prevede che non si possano più per quel particolare e-service staccare voucher, inviare richieste di fruizione o creare finalità, neanche se tutte le restanti componenti del flusso sono attive e integrate correttamente.

# API

È possibile utilizzare PDND Interoperabilità anche interrogando le API che espone. La versione corrente, la v. 2, permette di operare sia in lettura che in scrittura, esattamente come farebbe un utente attraverso l'interfaccia grafica del back office.

Per garantire la legittimità delle operazioni di scrittura, è necessario indicare all'interno del proprio _client API Interop_ un utente con poteri da amministratore. Questa persona sarà la responsabile delle operazioni di scrittura eseguite attraverso l'API.

Ogni endpoint dell'API restituisce sempre l'id dell'oggetto richiesto assieme ad eventuali altri id che permettono di fare ulteriori chiamate, in caso si necessitassero maggiori informazioni (ad esempio, se si richiede una richiesta di fruizione, all'interno della risposta saranno contenuti anche l'id dell'e-service e della versione di e-service ai quali la richiesta è associata).

## Canale di notifica

L'API espone inoltre un endpoint di eventi, chiamato "canale di notifica". Gli aderenti, andando in polling sull'endpoint, potranno rimanere aggiornati su tutte le operazioni che vengono eseguite sulla piattaforma, ed eventualmente costruire le proprie automazioni sulla base di questi eventi.

Per fare un esempio pratico: attraverso il canale di notifica si riceve un evento che indica che è stata pubblicata una nuova versione di un e-service di interesse; alla ricezione dell'evento, si imposta un'automazione che invia il nuovo file di interfaccia alla propria email.

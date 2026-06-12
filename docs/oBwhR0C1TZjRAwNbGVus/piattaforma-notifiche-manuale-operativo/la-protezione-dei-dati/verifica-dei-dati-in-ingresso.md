# Verifica dei dati in ingresso

PN garantisce la corretta attribuzione dei documenti informatici alla notifica attraverso l’utilizzo di hash SHA-256. La PA mittente, nel momento in cui richiede l’invio di una notifica, fornisce a PN anche lo SHA-256 del documento. PN calcola lo SHA-256 del documento ricevuto e lo confronta con ciò che la PA ha fornito. Solo in caso le due hash coincidano la notifica è accettata.

Inoltre, PN verifica l’esistenza dei CF forniti della PA mittente e della disponibilità di un indirizzo fisico per garantire la possibilità di effettuare la notificazione.

# 1️⃣ Emissione prestazione medica

I sistemi in capo all<mark style="background-color:blue;">’ente</mark> comunicano tramite IO all’utente che è stata emessa una prescrizione medica sul Fascicolo Sanitario. Il messaggio rispetterà  il template presente sui Modelli Servizi. L’ente può inviare la nuova prescrizione emessa allegandola al messaggio di IO.

## Marcare i contenuti sensibili per garantire sicurezza

Applicando il **flag rescure channel** al servizio:

* le notifiche push sui dispositivi del destinatario mostreranno un generico invito ad aprire il messaggio, senza riportare il contenuto del titolo
* i messaggi non verranno inoltrati via email a prescindere dalla preferenza impostata dall'utente destinatario.

In alternativa, se l’ente desidera veicolare dati personali e/o sensibili nel titolo o corpo del messaggio è possibile usare i e mantenere le informazioni degli utenti esclusivamente nei tuoi sistemi.

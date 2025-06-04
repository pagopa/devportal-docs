# Caso d'uso della Multa per violazione del Codice della Strada

E' possibile inserire una Multa per violazione del Codice della Strada su Piattaforma Notifiche avendo cura di valorizzare i campi:

1. NewNotificationRequest.recipients.payments.**noticeCode:** col numero avviso corrispondente al prezzo ridotto; questo verrà visualizzato in Piattaforma nella sezione di pagamento online con l'importo corrispondente entro 5 giorni dalla data di perfezionamento della notifica.
2. NewNotificationRequest.recipients.payments.**noticeCode:** col numero avviso corrispondente al prezzo intero; questo verrà visualizzato in Piattaforma nella sezione di pagamento online con l'importo corrispondente tra i 5 ed i 60 giorni dalla data di perfezionamento della notifica.
3. il bollettino di pagamento può essere caricato nel campo NewNotificationRequest.recipients.payment.**pagoPa** se è contenuto in un file diverso da quello dell'atto e sarà scaricabile dal destinatario nella sezione "_Scarica l'avviso PagoPA"_. \
   Se invece questo è già presente nello stesso pdf contenente l'atto, potrà essere caricato come unico pdf all'interno del campo NewNotificationRequest.**documents** e sarà scaricabile dal destinatario unitamente all'atto nella sezione "_DOCUMENTI ALLEGATI"_

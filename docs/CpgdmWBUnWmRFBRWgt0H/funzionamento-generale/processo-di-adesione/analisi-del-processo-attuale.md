# Analisi del processo attuale

Una volta identificato il primo use-case da portare su SEND, l’Ente effettua un assessment accurato dello stesso.

Di seguito si illustra un approccio metodologico che l’Ente potrebbe utilizzare per effettuare l’analisi del processo di notificazione attuale:

1. Individuare e formalizzare ogni attività del flusso di notificazione AS-IS, censendo tutti i sistemi informativi coinvolti;
2. Definire ruoli e responsabilità di ciascun attore/ struttura coinvolta nel processo;
3. Individuare tutte le integrazioni in essere tra sistemi informativi coinvolti.

La suddetta analisi è propedeutica alla corretta definizione del processo TO-BE, integrato su piattaforma SEND.

In maniera esemplificativa e non esaustiva si riportano gli attori coinvolti in un processo di notificazione standard, con il relativo ruolo.&#x20;

<table data-header-hidden><thead><tr><th width="128"></th><th></th></tr></thead><tbody><tr><td>Soggetto 1</td><td>Incaricato del gestionale contenente l’archivio dei pagamenti</td></tr><tr><td>Soggetto 2</td><td>Si occupa della creazione degli atti di notifica</td></tr><tr><td>Soggetto 3</td><td>Si occupa delle operazioni di stampa, imbustamento e recapito</td></tr><tr><td>Soggetto 4</td><td>Integrato con piattaforma pagoPA e con il Soggetto 1, è incaricato della gestione dei pagamenti</td></tr></tbody></table>

N.B.: uno dei suddetti soggetti potrebbe gestire anche più attività o la medesima attività potrebbe essere gestita da uno o N soggetti.&#x20;

Si riporta di seguito, in maniera esemplificativa e non esaustiva, un processo standard di notificazione AS-IS:

1. Creazione della posizione debitoria con relativo IUV;&#x20;
2. Recupero dal “Soggetto 1” del domicilio fisico e, ove presente, digitale;
3. Generazione dell’atto di notifica con i relativi allegati dal “Soggetto 2”;
4. L’atto e i suoi allegati (tra cui l’avviso pagoPA) vengono stampati, imbustati e spediti ai destinatari di notifica tramite posta (“Soggetto 3”) oppure inviati a mezzo PEC dall’Ente (“Soggetto 1” o “Soggetto 3”);
5. L’Ente (mittente) riceve dal Soggetto Appaltatore l’esito del processo di notificazione (es: riceve le ricevute di ritorno della raccomandata o di accettazione e consegna PEC);
6. Quando il destinatario di notifica avvia il pagamento il nodo pagoPA interroga il Soggetto 4 per ottenere il costo di notifica;
7. Nel momento in cui il nodo pagoPA riceve l’informazione della posizione debitoria e la comunica al PSP, il cittadino paga l’importo dovuto e il “Soggetto 4” informa il gestionale dei pagamenti (“Soggetto 1”) che chiude la posizione debitoria.

\


![](https://lh7-eu.googleusercontent.com/CFT76DKUA6u0HKbC4F_SHVXMrm2PnV-k2IyzXLk0GyWbCk2KeEKjU5nyV1mzooNktJKVcvFVQU2wRUJo1cdPgwGWinSgZTAv4X3snKYBR1MKMzRJm0m1KbAftL0XsHV-V142sYGWVkV3)

\

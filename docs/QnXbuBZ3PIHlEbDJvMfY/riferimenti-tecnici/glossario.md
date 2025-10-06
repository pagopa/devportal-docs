# Glossario

### **Erogatore** (Producer)

L'ente che detiene un'informazione e la rende disponibile ad altri attraverso un **e-service**. L'Erogatore è il proprietario del dato e ha la responsabilità di definirne le regole di accesso e di garantirne la sicurezza e l'affidabilità.

### **Fruitore** (Consumer)

L'ente che necessita di accedere a un'informazione esposta da un Erogatore per svolgere un proprio compito istituzionale. Il Fruitore utilizza la piattaforma per trovare i servizi di cui ha bisogno, richiederne l'accesso e integrare i propri sistemi per consumare i dati.

### **E-service**

La rappresentazione di un servizio digitale (API) all'interno del catalogo della piattaforma. Non è il servizio stesso, ma la sua "carta d'identità" tecnica e amministrativa, che ne descrive la funzione, le modalità di accesso, la documentazione (OpenAPI) e le policy di utilizzo.

### **Richiesta di Fruizione** (Agreement)

L'atto formale con cui un Fruitore chiede a un Erogatore l'autorizzazione per accedere a un suo e-service. Questa richiesta contiene le motivazioni legali e istituzionali che giustificano la necessità di accesso ai dati. La sua approvazione da parte dell'Erogatore è il prerequisito per qualsiasi interazione tecnica.

### **Finalità** (Purpose)

Un oggetto logico che descrive lo scopo specifico e concreto per cui un Fruitore intende utilizzare un e-service, dopo aver ottenuto l'approvazione alla richiesta di fruizione. La finalità contiene l'analisi del rischio (in conformità al GDPR) e la stima del carico di chiamate API previste.

### **Client**

La rappresentazione di un'applicazione software all'interno della piattaforma. Un client agisce come "identità" tecnica di un programma ed è il contenitore delle credenziali crittografiche (chiavi pubbliche) necessarie per l'autenticazione e la richiesta di voucher.

### **Voucher** (JWT)

Un gettone di sicurezza a tempo in formato **JSON Web Token (JWT)**, rilasciato dalla piattaforma a un client autorizzato. Funziona come un "pass" che l'applicazione del Fruitore deve presentare a ogni chiamata API per dimostrare all'Erogatore di essere stata autorizzata ad accedere a quel dato, per quella specifica finalità.

### **Attributo**

Una qualifica, un'iscrizione o uno status che un ente Fruitore deve possedere per poter accedere a determinati e-service. Gli attributi possono essere **dichiarati** (autocertificati dal Fruitore), **verificati** (provati con documentazione e approvati dall'Erogatore) o **certificati** (attestati da un ente terzo che ne ha l'autorità legale).

### **Delega**

Una funzionalità che permette a un ente (**Delegante**) di autorizzare un altro ente (**Delegato**) a gestire l'erogazione o la fruizione di e-service per suo conto, semplificando la gestione tecnica per organizzazioni complesse o partner tecnologici.

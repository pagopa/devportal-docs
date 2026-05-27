# Accesso in modalità Single Sign-On (SSO)

L’accesso al BackOffice avviene in modalità Single Sign-On (SSO) tramite il meccanismo di Token Exchange. L’utente si autentica una sola volta sull’Area Riservata e viene reindirizzato al BackOffice mantenendo il contesto di sessione in modo sicuro.

### 1. Definizioni Chiave (I Token)&#x20;

Prima di analizzare il flusso, è fondamentale distinguere i tre tipi di token coinvolti:&#x20;

* SelfCareSessionToken: Gestisce la sessione generale dell'utente sul portale SelfCare. Identifica la persona fisica.&#x20;
* IdentityToken: È il "token di scambio" (JWT) generato da SelfCare e passato al Back Office del prodotto. Contiene l'identità dell'utente, l'ente selezionato e il ruolo specifico (company.role). Ha una scadenza brevissima (es. 5 secondi).&#x20;
* SessionToken: È il token di sessione finale, generato autonomamente dal Back Office del prodotto una volta validato l'IdentityToken.&#x20;

### 2. Flusso Operativo Step-by-Step&#x20;

#### Fase A: Autenticazione e Selezione su SelfCare&#x20;

1. Login: L'utente effettua il login sul portale SelfCare e riceve il SelfCareSessionToken.&#x20;
2. Selezione Ente: L'utente visualizza la lista degli enti per cui è abilitato e ne seleziona uno. L'ente e il ruolo vengono salvati localmente (Local Storage/SPA).&#x20;
3. Dashboard: L'utente accede alla dashboard dell'ente selezionato.&#x20;
4. Azione: L'utente clicca su "Gestisci" nel riquadro di un prodotto specifico (es. IO).&#x20;

#### Fase B: Richiesta dell'IdentityToken (Exchange)&#x20;

5. Chiamata API: Il Front-end di SelfCare invoca l'API di back-office:  GET https://api.selfcare.pagopa.it/products/{productId}/back-office?institutionId={institutionId}&#x20;
6. Emissione Token: Se l'utente è autorizzato, l'API risponde restituendo l'URL del Back Office del prodotto richiesto, che include l'IdentityToken come parametro. (Esempio URL: https://io.selfcare.pagopa.it/path/acs#token=\<IdentityToken>) Nota: L'IdentityToken contiene l'aud (audience) specifico per il prodotto, una scadenza breve (exp) e un desired\_exp per sincronizzare la sessione.&#x20;

#### Fase C: Accesso e Validazione sul Back Office del Prodotto&#x20;

7. Redirect: Il Front-end di SelfCare esegue una chiamata GET verso l'URL ricevuto (il Back Office del prodotto).&#x20;
8. Validazione (Lato Prodotto): Il backend del prodotto riceve la richiesta e deve obbligatoriamente verificare l'IdentityToken:&#x20;

* Audience (aud): Verifica che coincida con il proprio dominio.&#x20;
* Firma: Recupera la chiave pubblica usando il kid (Key ID) presente nell'header del token e valida la firma del JWT.&#x20;

9. Creazione Sessione Finale: Una volta validato il token, il Back Office del prodotto ha la certezza che l'utente è autenticato e autorizzato. A questo punto, il prodotto genera la propria sessione locale (es. emettendo un cookie o un proprio SessionToken) secondo le proprie logiche interne.&#x20;

&#x20;

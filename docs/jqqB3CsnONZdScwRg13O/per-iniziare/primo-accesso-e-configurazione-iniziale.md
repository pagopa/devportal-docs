# Primo accesso e configurazione iniziale

Dopo che l'adesione è stata completata, gli amministratori nominati dal Legale Rappresentante possono accedere alla piattaforma e iniziare a configurarla. Questo capitolo descrive i passaggi fondamentali per diventare pienamente operativi.

### Accesso al front office

La procedura per accedere al front office di PDND Interoperabilità è la seguente:

1. **Login**: Accedere all'Area Riservata della piattaforma e autenticarsi con la propria identità digitale **SPID** o **CIE**.
2. **Selezione ente**: Se si è associati a più di un ente, selezionare quello per cui si intende operare.
3. **Selezione prodotto**: Dall'elenco dei prodotti disponibili, scegliere **"Interoperabilità"**.
4. **Selezione ambiente**: Selezionare l'ambiente di lavoro desiderato.

### Comprendere gli ambienti operativi

La piattaforma mette a disposizione tre ambienti separati, ciascuno con uno scopo preciso:

* **Produzione**: È l'ambiente di esercizio reale, dove avvengono gli scambi di dati ufficiali tra gli enti.
* **Collaudo**: È un ambiente identico alla produzione ma utilizzato per testare le integrazioni e il corretto funzionamento degli e-service prima di renderli disponibili a tutti. Non devono essere utilizzati dati reali.
* **Attestazione**: È un ambiente di prova aperto anche a soggetti che non hanno ancora completato l'adesione (es. imprese private). Utilizza esclusivamente dati fittizi e serve a familiarizzare con le funzionalità della piattaforma.



<table><thead><tr><th width="154.7718505859375">Nome ambiente</th><th width="285.79998779296875">Abilitati all'erogazione</th><th>Si erogano dati reali</th></tr></thead><tbody><tr><td>Produzione</td><td>Pubbliche Amministrazioni (PA), Gestori di Servizi Pubblici (GSP), Società a Controllo Pubblico (SCP), Società in Conto Economico Consolidato (SCEC)</td><td>Sì</td></tr><tr><td>Collaudo</td><td>Pubbliche Amministrazioni (PA), Gestori di Servizi Pubblici (GSP), Società a Controllo Pubblico (SCP), Società in Conto Economico Consolidato (SCEC)</td><td>No</td></tr><tr><td>Attestazione</td><td>Tutti gli aderenti</td><td>No</td></tr></tbody></table>

### Gestione di Utenti e Ruoli

L'**amministratore** è la figura responsabile della gestione degli utenti del proprio ente. Può creare e revocare altre utenze, assegnando uno dei tre ruoli disponibili.

#### I Ruoli Utente

* **Amministratore**: Ha il controllo completo sul front office. Può gestire gli utenti, creare e-service, gestire le finalità e le richieste di fruizione.  Può gestire il materiale crittografico (client e chiavi).
* **Operatore di Sicurezza**: È il ruolo tecnico responsabile della gestione del materiale crittografico (es. caricamento delle chiavi pubbliche). Non può gestire né gli utenti né gli e-service.
* **Operatore API**: È il ruolo tecnico che gestisce gli e-service e gli aspetti tecnici delle finalità. Non può gestire gli utenti né il materiale crittografico.

#### Permessi

<table><thead><tr><th width="139.221923828125">Attività</th><th width="151.543701171875">Amministratore</th><th width="140.73126220703125">Operatore API</th><th>Operatore di sicurezza</th></tr></thead><tbody><tr><td>Nomina e revoca Amministratori</td><td>✅</td><td>❌</td><td>❌</td></tr><tr><td>Crea e rimuove operatori</td><td>✅</td><td>❌</td><td>❌</td></tr><tr><td>Gestisce lo stato dell’e-service</td><td>✅</td><td>❌</td><td>❌</td></tr><tr><td>Modifica gli attributi dell’e-service</td><td>✅</td><td>❌</td><td>❌</td></tr><tr><td>Gestisce la creazione dell’e-service</td><td>✅</td><td>✅</td><td>❌</td></tr><tr><td>Inviare una richiesta fruizione</td><td>✅</td><td>❌</td><td>❌</td></tr><tr><td>Gestisce la fruizione di e-service</td><td>✅</td><td>✅</td><td>❌</td></tr><tr><td>Gestisce il materiale crittografico</td><td>✅</td><td>✅</td><td>✅</td></tr></tbody></table>

#### Creazione e Gestione degli Utenti

L'amministratore può creare nuovi utenti operatori o altri amministratori direttamente dal front office. Le procedure dettagliate per la creazione e la revoca delle utenze sono disponibili nella sezione Tutorial.

{% hint style="info" %}
Segui i tutorial dedicati:

[→ **Come creare e revocare gli utenti amministratori**](../tutorial/tutorial-generali/come-creare-e-revocare-gli-utenti-amministratori.md)

[→ **Come creare e revocare gli utenti operatori**](../tutorial/tutorial-generali/utenze.md)
{% endhint %}

### Checklist per la Configurazione Iniziale

Al primo accesso, si raccomanda all'amministratore di **impostare i contatti dell'ente**: verificare e inserire l'indirizzo email di contatto per ricevere le comunicazioni importanti dalla piattaforma e dai fruitori.

***

Pagina successiva [→ Normativa di riferimento](normativa-e-approfondimenti.md)

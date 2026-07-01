# Ruoli e poteri

I ruoli disponibili all'interno del BackOffice "Messaggi di Cortesia" sono coerenti con quelli definiti nella piattaforma Area Riservata di PagoPA S.p.A. Ogni ruolo garantisce un diverso livello di visibilità e di operatività sul prodotto.

In Area Riservata sono sempre disponibili due ruoli: **Amministratore** e **Operatore**.&#x20;

### Amministratore

L'Amministratore è una figura incaricata dal PSP aderente che si occupa della gestione complessiva del Servizio "Messaggi di Cortesia". Viene designato mediante delega del Legale Rappresentante del PSP.

&#x20;Questa figura si occupa specificamente di:

* Gestire gli utenti e i gruppi associati al PSP all'interno del BackOffice;
* Accedere a tutte le funzionalità del BackOffice, inclusa la configurazione globale del servizio;
* Gestire le API Key necessarie per l'integrazione tecnica con la piattaforma&#x20;
* Avviare e completare il processo di configurazione del Servizio per  il PSP.

### Operatore

Questa figura si occupa specificamente di:

* Modificare i dati tecnici (endpoint, configurazioni, credenziali) della PSP;
* Accedere alle sezioni tecniche del BackOffice relative al proprio PSP;
* Gestire le configurazioni di integrazione con Messaggi di Cortesia.



### Matrice dei Permessi

La tabella seguente descrive le responsabilità e le funzionalità associate a ciascun ruolo all'interno del BackOffice di "_Messaggi di Cortesia"_.

<table><thead><tr><th width="273.4609375">Funzionalità</th><th width="238.13671875">Amministratore</th><th>Operator</th></tr></thead><tbody><tr><td>Accesso al BackOffice</td><td><mark style="color:$success;">✓</mark></td><td><mark style="color:green;">✓</mark></td></tr><tr><td>Visualizzazione configurazione</td><td><mark style="color:$success;">✓</mark></td><td><mark style="color:green;">✓</mark></td></tr><tr><td>Modifica dati tecnici PSP</td><td><mark style="color:$success;">✓</mark></td><td><mark style="color:green;">✓</mark></td></tr><tr><td>Gestione API Key</td><td><mark style="color:$success;">✓</mark></td><td><mark style="color:green;">✓</mark></td></tr><tr><td>Gestione utenti e gruppi</td><td><mark style="color:$success;">✓</mark></td><td><mark style="color:$warning;">✕</mark></td></tr><tr><td>Visualizzazione lista utenti</td><td><mark style="color:$success;">✓</mark></td><td><mark style="color:$warning;">✕</mark></td></tr><tr><td>Richiesta di assistenza</td><td><mark style="color:$success;">✓</mark></td><td><mark style="color:green;">✓</mark></td></tr></tbody></table>

{% hint style="success" %}
Le API di Backend verificano i permessi ad ogni richiesta in base al ruolo stabilito in sessione. L'accesso a funzionalità non consentite per il proprio ruolo non è possibile.
{% endhint %}

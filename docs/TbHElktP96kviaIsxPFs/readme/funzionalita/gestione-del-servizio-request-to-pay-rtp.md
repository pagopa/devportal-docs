# Gestione del Servizio Request to Pay (RTP)

### 1. Introduzione

La sezione dedicata al servizio Request to Pay (RTP) consente la gestione dello stato operativo del servizio stesso all’interno dell’applicativo Area Riservata/Back Office pagoPA.

Questa funzionalità è stata introdotta per permettere il controllo dell’attivazione e della disattivazione del servizio, garantendo che solo specifiche categorie di utenti, ovvero gli Amministratori, possano visualizzare e modificare le impostazioni.

### 2. Requisiti di Accesso

#### 2.1 Visibilità della sezione

La sezione Request to Pay (RTP)  è visibile esclusivamente agli Enti Creditori accreditati all'interno dell’[Indice delle Pubbliche Amministrazioni](https://www.google.com/search?q=Indice+delle+Pubbliche+Amministrazioni\&sca_esv=ebc9003c0e8ff0d8\&biw=2133\&bih=966\&sxsrf=ANbL-n7qP-BHEODg_2GnuQXYnqvXyIOfhg%3A1771191777770\&ei=4T2SaebVLvDqi-gPy4HwWQ\&ved=2ahUKEwiP5fvOu9ySAxUq_rsIHRs3MkkQgK4QegQIARAB\&uact=5\&oq=ente+accreditato+al+ipa\&gs_lp=Egxnd3Mtd2l6LXNlcnAiF2VudGUgYWNjcmVkaXRhdG8gYWwgaXBhMgoQIRigARjDBBgKMgoQIRigARjDBBgKSPQTUNwBWIwTcAJ4AZABAJgBcaAB7gaqAQM2LjO4AQPIAQD4AQGYAgmgAs8FwgIKEAAYsAMY1gQYR8ICCBAhGKABGMMEmAMAiAYBkAYIkgcDNi4zoAfbHrIHAzQuM7gHxAXCBwUwLjcuMsgHE4AIAA\&sclient=gws-wiz-serp) (IPA) e accessibile tramite l’etichetta "Impostazioni".



<figure><img src="../../.gitbook/assets/unknown (5).png" alt=""><figcaption></figcaption></figure>

Gli Enti Creditori non appartenenti a tale categoria non visualizzeranno pertanto la sezione e non potranno di conseguenza accedere alle relative funzionalità.

#### 2.2 Permessi operativi

Le operazioni di attivazione e disattivazione del servizio sono consentite solo alle utenze con ruolo Amministratore .

### 3. Stati del Servizio

Il servizio RTP può trovarsi in uno dei seguenti stati operativi:

#### 3.1 Attivo

Il servizio è correttamente abilitato e pienamente operativo.

Tutte le funzionalità dipendenti dal servizio risultano disponibili.

#### 3.2 In attivazione

Il sistema sta eseguendo le operazioni necessarie per portare il servizio dallo stato disattivo allo stato attivo.

Durante questa fase il servizio potrebbe non essere ancora disponibile. E’ necessario attendere 72h per l’operatività della modifica apportata al servizio.

#### 3.3 In disattivazione

Il sistema sta procedendo alla disabilitazione del servizio. E’ necessario attendere 72h per l’operatività della modifica apportata al servizio.

### 4. Operazioni Disponibili

Il servizio risulta attivo per impostazione predefinita al momento dell’abilitazione della funzionalità.

#### 4.1 Attivazione del servizio

L’utente amministratore può avviare l’attivazione tramite l’apposito comando

<figure><img src="../../.gitbook/assets/unknown (7).png" alt=""><figcaption></figcaption></figure>

Una volta avviata:

* Lo stato passa a In attivazione
* Al termine del processo, lo stato diventa Attivo

È importante ricordare che, affinché possa essere abilitato, il servizio di “Avvisatura Digitale” (c.d. "RTP) necessita anche della corretta valorizzazione della Tassonomia dei Servizi di Incasso, per la quale si rinvia all’apposita sezione contenuta all’interno delle Specifiche Attuative del Nodo dei Pagamenti (consultabili a questo [link](https://developer.pagopa.it/pago-pa/guides/sanp/3.10.0/ente-creditore/tassonomia-dei-servizi-di-incasso)).

#### 4.2 Disattivazione del servizio

L’utente Amministratore può disattivare il servizio tramite l’apposito comando.

<br>

<figure><img src="../../.gitbook/assets/unknown (8).png" alt=""><figcaption></figcaption></figure>

<br>

Una volta avviata:

* Lo stato passa a In disattivazione

Nota: nel sistema non è previsto uno stato “Disattivato” esplicito, il servizio risulterà semplicemente non attivo e non utilizzabile.

<br>

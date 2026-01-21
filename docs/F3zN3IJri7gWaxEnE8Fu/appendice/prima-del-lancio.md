---
description: >-
  Questa checklist riassume i punti chiave delle linee guida UX per garantire
  un'implementazione corretta ed efficace del servizio RTP sui canali digitali
  di un PSP.
---

# Prima del lancio

## Brand e comunicazione

### Terminologia e naming

{% hint style="success" %}
Usa una terminologia chiara, standardizzata e non tecnica.
{% endhint %}

* [ ] L'acronimo "RTP" (o "Request to Pay") è stato evitato nell'interfaccia utente finale?
* [ ] Si utilizzano le diciture corrette come "Richieste di pagamento", "Avvisi pagoPA" o "Pagamenti pagoPA"?
* [ ] Si è evitato l'uso di termini errati o fuorvianti come "Bollettini pagoPA" o "CBILL"?
* [ ] Il nome "pagoPA" è scritto correttamente (minuscolo, tranne la "PA" finale)?

### Comunicazione e testi del servizio

{% hint style="success" %}
Spiega i benefici del servizio in modo chiaro per massimizzare le conversioni e la fiducia.
{% endhint %}

* [ ] I benefici chiave (es. avvisi pre-compilati, zero errori, promemoria scadenze) sono comunicati chiaramente?
* [ ] Si rassicura l'utente che la banca/PSP agisce come intermediario sicuro per le richieste inviate dagli Enti tramite pagoPA?
* [ ] È stato specificato che il servizio di ricezione è gratuito?
* [ ] Vengono forniti esempi concreti dei tipi di avvisi che l'utente potrà ricevere (es. TARI, Bollo auto)?
* [ ] **Punto Chiave:** Si rassicura esplicitamente l'utente che, aderendo al servizio, _continuerà comunque_ a ricevere le comunicazioni su altri canali (es. App IO, posta)?
* [ ] Nella promozione, si fa leva sulla sicurezza del canale bancario come antidoto a truffe e phishing?

***

## Esperienza utente

### Architettura e integrazione con il resto dell'app

{% hint style="success" %}
Integra il servizio in modo coerente nell'esperienza pagoPA esistente.
{% endhint %}

* [ ] Il servizio RTP è integrato nell'eventuale sezione "pagamenti pagoPA" già esistente nell'home-banking?
* [ ] Si è evitata la creazione di una sezione separata dedicata solo a RTP?
* [ ] La sezione "pagamenti pagoPA" funge da punto di riferimento completo, includendo le nuove richieste, lo storico dei pagamenti e le ricevute?
* [ ] L'architettura dell'informazione raggruppa RTP come una _modalità_ per pagare gli avvisi pagoPA, insieme al QR code e alla compilazione manuale?

### Flusso di notifica

{% hint style="success" %}
Avvisa l'utente in modo sicuro e immediatamente riconoscibile.
{% endhint %}

* [ ] Si utilizzano più canali (es. push, in-app, email) per notificare la richiesta?
* [ ] **Notifiche Push:**
  * [ ] Il titolo specifica lo scopo (es. "Hai ricevuto una richiesta di pagamento")?
  * [ ] Il corpo della notifica include l'ente e l'oggetto (es. "Comune di Ipazia - Tari 2025")?
  * [ ] Si è evitato di mostrare solo l'importo, che può generare ansia?
  * [ ] Si è evitato di usare "pagoPA" come mittente della notifica?
* [ ] **Notifiche Email:**
  * [ ] L'email è personalizzata (es. "Ciao ") per ridurre il rischio phishing?
  * [ ] L'oggetto è chiaro e istituzionale (es. "Richiesta di pagamento da parte di \[Ente]")?
  * [ ] Il tono di voce è professionale, evitando urgenza (es. "PAGA ORA")?
  * [ ] L'email contiene una CTA chiara che rimanda all'home-banking per visualizzare e pagare la richiesta (e non link di pagamento diretti)?
  * [ ] L'email non contiene allegati?

### Schermata dettaglio richiesta di pagamento

{% hint style="success" %}
Fornisci tutte le informazioni necessarie per validare e pagare la richiesta.
{% endhint %}

* [ ] La schermata include tutti gli elementi minimi richiesti?
  * [ ] Nome Ente creditore (completo e riconoscibile)
  * [ ] Oggetto del pagamento (chiaro, es. "TARI 2025 Prima rata")
  * [ ] Scadenza (e stato, es. "Pagabile fino al...")
  * [ ] Importo totale (le commissioni del PSP vanno mostrate solo nello step successivo)
  * [ ] Codice Avviso (18 cifre)
  * [ ] Codice Fiscale Ente creditore (11 cifre)
* [ ] Le azioni (CTA) sono dinamiche e dipendono dallo stato della richiesta (es. "Procedi al pagamento" vs. "Visualizza la ricevuta")?
* [ ] È presente un'indicazione chiara che, per dubbi sul _contenuto_ (es. importo errato), l'utente deve contattare l'Ente Creditore (e non il PSP o pagoPA)?

### Gestione Stati e Flusso di Pagamento

{% hint style="success" %}
Gestisci l'intero ciclo di vita della richiesta in modo trasparente.
{% endhint %}

* [ ] **Disclaimer Importo:** Prima del pagamento, l'utente viene avvisato che l'importo potrebbe subire variazioni (per sanzioni, interessi, sgravi, ecc.)?
* [ ] **Conferma Pagamento:**
  * [ ] L'utente riceve un feedback immediato a schermo sull'esito del pagamento?
  * [ ] Lo stato della richiesta viene aggiornato automaticamente in "Pagata"?
  * [ ] Viene inviata una conferma su un altro canale (es. email)?
* [ ] **Ricevute:**
  * [ ] Dalla richiesta "Pagata" è possibile accedere facilmente alla ricevuta?
  * [ ] Esiste una sezione nell'architettura dove recuperare _tutte_ le ricevute pagoPA?
* [ ] **Gestione Stati:** L'interfaccia gestisce visivamente tutti i seguenti stati?
  * [ ] _Da pagare_ (con CTA di pagamento)
  * [ ] _Pagamento programmato_ (funzionalità _fortemente consigliata_ per l'alto valore percepito dagli utenti)
  * [ ] _Pagata_ (con CTA per la ricevuta)
  * [ ] _Scaduta_ (stato ben visibile che comunica l'impossibilità di pagare)
  * [ ] _Annullata_ (es. revocata dall'ente o pagata su altri canali), mantenendo i dettagli ma spiegando perché non è pagabile?

### Gestione Errori e Assistenza

{% hint style="success" %}
Non lasciare mai l'utente in un vicolo cieco, indirizzandolo all'attore corretto.
{% endhint %}

* [ ] I messaggi di errore sono contestualizzati e _non_ generici (es. NO "Errore tecnico")?
* [ ] Il messaggio di errore identifica chiaramente l'attore risolutivo (Ente Creditore, Banca/PSP, o pagoPA)?
* [ ] Per errori di contenuto o stato (es. "Avviso scaduto", "Avviso revocato", "Importo non corretto"), l'utente viene indirizzato a contattare l'**Ente Creditore**?
* [ ] Per errori tecnici della piattaforma (es. "Problema tecnico con questo avviso"), l'utente viene invitato ad aprire una segnalazione all'**assistenza del PSP**?
* [ ] Per "Pagamento in corso", l'utente viene invitato ad attendere e poi, se il problema persiste, a contattare l'**assistenza del PSP**?
* [ ] Quando un utente segnala un problema, riceve un feedback di presa in carico (es. codice ticket)?

***

## Attivazione e disattivazione

### Adesione (Opt-In) e Privacy

{% hint style="success" %}
Garantisci un'adesione volontaria, trasparente e sicura.
{% endhint %}

* [ ] L'adesione al servizio richiede un'attivazione esplicita dell'utente (flusso di "opt-in")?
* [ ] È stato chiarito all'utente che l'adesione _non_ comporta un addebito automatico?
* [ ] L'utente viene informato su quali dati personali sono necessari per l'attivazione?
* [ ] Vengono rese visibili e accessibili sia l'Informativa Privacy del PSP _che_ quella di PagoPA?
* [ ] All'utente è data la possibilità di scegliere i canali di notifica preferiti (es. push, email)?
* [ ] È garantita all'utente la possibilità di disattivare il servizio in qualsiasi momento, in una sezione chiara e raggiungibile?

### Disattivazione e trasferimento dei Servizi

{% hint style="success" %}
Dai all'utente il pieno controllo sulla gestione del servizio.
{% endhint %}

* [ ] L'utente può trovare facilmente l'opzione per _disattivare_ il servizio in autonomia?
* [ ] L'utente riceve una conferma esplicita dell'avvenuta disattivazione?
* [ ] **Flusso di Trasferimento:**
  * [ ] Quando un utente _attiva_ il servizio sul _nuovo_ PSP (il tuo), viene informato che il servizio si disattiverà automaticamente sul vecchio PSP?
  * [ ] È stato implementato il flusso di notifica per avvisare l'utente quando il servizio viene _disattivato_ automaticamente perché lo ha attivato presso un _altro_ PSP?

***

## (Consigliato) Voice of Customer

### Raccolta Feedback

{% hint style="success" %}
Monitora la qualità delle richieste e i motivi di non-pagamento.
{% endhint %}

* [ ] È stato previsto un meccanismo (es. nella schermata di dettaglio) per raccogliere feedback volontario dall'utente?
* [ ] Il feedback permette di mappare cause comuni di abbandono (es. "Dati non corretti", "Ho già pagato", "Non riconosco questo avviso")?

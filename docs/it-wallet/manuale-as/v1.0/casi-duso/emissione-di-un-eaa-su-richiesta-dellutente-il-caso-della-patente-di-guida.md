# Emissione di un EAA su richiesta dell'utente: il caso della patente di guida

In questo caso d'uso di esempio si descrive il momento dell'emissione di un EAA, dal momento in cui il cittadino ne avvia la richiesta fino alla disponibilità dell'attestato nel proprio wallet. Lo scenario mostra il ruolo del Titolare di Fonte Autentica durante l'emissione — esporre e firmare il dato richiesto tramite l'e-service — mentre la generazione dell'attestato compete all'Issuer.&#x20;

**Attori dello scenario:**

* **La Motorizzazione Civile** (a titolo di esempio): l'Ente titolare del dato, che agisce come Titolare di Fonte Autentica. Il relativo e-service è già in esercizio in produzione.
* **PDND**: la piattaforma di interoperabilità che media la richiesta del dato e rilascia il voucher di accesso.
* **IPZS**: il Fornitore di Attestati (Issuer), che fruisce dell'e-service ed emette l'EAA.
* **PagoPA**: il Wallet Provider della soluzione pubblica (app IO).
* **Marco**: il cittadino che richiede e ottiene l'EAA della patente nel proprio wallet.

**Prerequisiti**

Perché questo flusso possa iniziare, si assume che siano già soddisfatte le seguenti condizioni:

1. L'e-service della patente è pubblicato in produzione e attivo, con IPZS abilitato alla fruizione.
2. In fase di progettazione l'Ente ha definito la discovery dal **catalogo** (EAA di interesse nazionale) e una modalità di risposta **sincrona**; per gli scenari d'uso in prossimità (esibizione a un soggetto verificatore) ha previsto il formato **mdoc-CBOR**.
3. Marco dispone di un wallet attivo e della propria identità digitale, presupposto per l'avvio della richiesta.

### **Fase 1: Discovery e avvio della richiesta**

Il processo ha origine dall'utente.

1. **Discovery**: Marco individua l'EAA della patente nel catalogo della soluzione IT-Wallet e ne avvia la richiesta. La possibilità di reperire l'attestato dal catalogo discende dalla scelta di discovery effettuata dall'Ente in fase di progettazione.
2. **Avvio dell'emissione**: il wallet inoltra la richiesta verso l'Issuer di riferimento per l'EAA. L'identificazione dell'utente e l'avvio del rilascio competono al Wallet Provider e all'Issuer; il Titolare di Fonte Autentica non interviene in questa fase.

{% hint style="info" %}
La modalità di discovery (catalogo o touchpoint) e quella di risposta (sincrona o differita) sono definite dal Titolare di Fonte Autenticanella sezione `casi d'uso` del file di progettazione.&#x20;

Per approfondire consulta il tutorial: → [**Come Progettare le caratteristiche dell'EAA**](../tutorial/come-progettare-le-caratteristiche-delleaa.md).&#x20;
{% endhint %}

### **Fase 2: Reperimento del dato presso il** Titolare di Fonte Autentica

L'Issuer acquisisce dalla fonte autentica i dati necessari all'emissione.

1. **Acquisizione del voucher**: IPZS, in qualità di fruitore, richiede a PDND il voucher associato alla finalità e lo utilizza per chiamare l'e-service della Motorizzazione.
2. **Erogazione del dato**: l'e-service risponde in modalità sincrona, restituendo gli attributi della patente previsti dal `dataset`. Trattandosi di erogazione diretta, il Titolare di Fonte Autentica non valuta il merito della singola richiesta, ma espone il dato secondo le finalità abilitate.
3. **Firma della risposta**: il Titolare di Fonte Autentica firma la risposta secondo lo standard `INTEGRITY_REST_02`, garantendo integrità e provenienza del dato; il fruitore ne verifica il digest prima di procedere.

{% hint style="info" %}
Per i dettagli su voucher, portachiavi e firma della risposta, consulta il riferimento:  → [**E-service PDND e sicurezza**](../riferimenti-tecnici/e-service-pdnd-e-sicurezza.md).
{% endhint %}

### **Fase 3: Emissione dell'EAA e disponibilità nel wallet**

Acquisito il dato, l'Issuer genera l'attestato e lo rende disponibile.

1. **Emissione**: IPZS genera l'EAA della patente nel formato previsto per gli scenari d'uso individuati — nell'esempio `mdoc-CBOR`, idoneo all'esibizione in prossimità — e lo associa al wallet di Marco con stato `VALID`.
2. **Disponibilità e testi informativi**: l'attestato compare nel wallet di Marco, corredato dei testi informativi che il Titolare di Fonte Autentica ha definito nella sezione `assistenza` del file di progettazione.
3. **Assistenza**: per eventuali difficoltà nell'ottenimento restano disponibili i referenti e i canali dichiarati dall'AS, in raccordo con Issuer e Wallet Provider.

{% hint style="info" %}
Per i formati di emissione (`SD-JWT-VC` per il remoto, `mdoc-CBOR` per la prossimità) e per gli stati dell'attestato, consulta il riferimento:  → [**Data model, attributi e stati dell'EAA**](../riferimenti-tecnici/data-model-attributi-e-stati-delleaa.md).
{% endhint %}



### **Conclusione**

L'emissione è completa: l'EAA della patente è disponibile nel wallet di Marco e pronto all'uso. Nel percorso il ruolo del Titolare di Fonte Autentica è circoscritto all'esposizione e alla firma del dato tramite l'e-service, mentre la generazione e il rilascio dell'attestato sono rimasti in capo all'Issuer.&#x20;

Da questo momento l'attestato segue il proprio ciclo di vita: eventuali variazioni di stato presso la Motorizzazione si propagheranno secondo il flusso descritto nel caso d'uso _→_ [_Gestire un cambio di stato in esercizio_](gestire-un-cambio-di-stato-in-esercizio.md)



<mark style="color:red;">**Confine di responsabilità del Titolare di Fonte Autentica.**</mark> <mark style="color:red;"></mark><mark style="color:red;">Nell'emissione il Titolare di Fonte Autentica espone e firma il dato richiesto tramite l'e-service; l'identificazione dell'utente, la generazione dell'attestato e la sua resa nel wallet competono a Issuer e Wallet Provider.</mark>

<mark style="color:red;">**Da verificare.**</mark> <mark style="color:red;"></mark><mark style="color:red;">La sequenza di avvio dell'emissione lato utente (identificazione, eventuale Credential Offer, protocollo di rilascio) è governata da Wallet Provider e Issuer ed esula dall'ambito del presente manuale, incentrato sul</mark> <mark style="color:red;"></mark><mark style="color:red;">**Titolare di Fonte Autentica**</mark> <mark style="color:red;"></mark><mark style="color:red;">i relativi dettagli sono da confermare.</mark>

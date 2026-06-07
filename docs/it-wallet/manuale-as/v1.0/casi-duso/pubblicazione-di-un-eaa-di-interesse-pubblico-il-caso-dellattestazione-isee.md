# Pubblicazione di un EAA di interesse pubblico: il caso dell'attestazione ISEE

In questo caso d'uso di esempio si descrive il ciclo di vita completo della pubblicazione di un EAA, dal progetto iniziale fino al go-live. Lo scenario mostra come i diversi tutorial e gli strumenti della piattaforma interagiscono in un caso reale, dal momento in cui un Ente decide di rendere disponibile un proprio dato fino alla messa in esercizio dell'attestato nella soluzione pubblica IT-Wallet.

**Attori dello scenario:**

* **INPS** (a titolo di esempio): l'Ente titolare del dato, che agisce come Authentic Source (Titolare di Fonte Autentica).
* **PDND**: la piattaforma di interoperabilità su cui viene esposto l'e-service.
* **IPZS**: il Fornitore di Attestati (Issuer), unico per gli EAA di interesse pubblico.
* **PagoPA**: il Wallet Provider della soluzione pubblica (app IO) e il Service Management.
* **Il cittadino**: il titolare del wallet che, a regime, otterrà e utilizzerà l'attestato.

**Prerequisiti**

Perché questo flusso possa iniziare, si assume che siano già soddisfatte le seguenti condizioni:

1. L'Ente dispone del dataset di origine da esporre (nell'esempio, le attestazioni ISEE).
2. Sono disponibili le Specifiche Tecniche IT-Wallet e il file di progettazione `progettazione-caratteristiche-eaa.json` da compilare.
3. Per gli EAA di interesse pubblico, l'Issuer di riferimento è IPZS e il Wallet Provider è PagoPA.

### **Fase 1: Ingresso nella piattaforma e progettazione dell'EAA**

Il processo inizia con la predisposizione delle condizioni operative e con la definizione delle caratteristiche dell'attestato.

1. **Verifica dei prerequisiti**: l'Ente accerta l'identità digitale dell'operatore, la disponibilità della firma del Legale Rappresentante e la correttezza dei dati dell'ente su IPA.
2. **Adesione**: l'Ente perfeziona l'ingresso in PDND, nomina gli Amministratori e predispone gli ambienti di lavoro. Qualora abbia già aderito per altri servizi, resta da configurare le sole utenze.
3. **Progettazione**: l'Ente definisce dataset, stati ed errori e, trattandosi di reperimento dal catalogo, opta per una risposta sincrona.
4. **Validazione**: l'Ente valida il file di progettazione; l'esito positivo costituisce il presupposto obbligatorio per le fasi successive.

{% hint style="info" %}
Per i dettagli operativi di questi passaggi, consulta i tutorial:&#x20;

1. [**Verificare i prerequisiti tecnici e amministrativi**](../per-iniziare/verificare-i-prerequisiti-tecnici-e-amministrativi.md)
2. [**Come aderire alla PDND e configurare l'ambiente** ](../tutorial/come-aderire-alla-pdnd-e-configurare-lambiente.md)
3. [**Come progettare le caratteristiche dell'EAA**.](../tutorial/come-progettare-le-caratteristiche-delleaa.md)
{% endhint %}

### **Fase 2: Creazione, configurazione e collaudo dell'e-service**

Con il file di progettazione validato, l'Ente realizza il servizio in ambiente di collaudo e ne verifica il funzionamento.

1. **Creazione**: l'Ente crea l'e-service in collaudo. Se per la tipologia di EAA esiste un modello pubblicato, adotta la creazione da template (conformità per costruzione); in caso contrario procede ex-novo, redigendo e validando l'OpenAPI YAML.
2. **Configurazione**: l'Ente allega il file di progettazione, configura la sicurezza (portachiavi, firma `INTEGRITY_REST_02`, voucher), abilita IPZS quale fruitore e attiva Signal Hub. In uno scenario di catalogo il Credential Offer non è di norma necessario.
3. **Collaudo**: l'Ente verifica end-to-end l'erogazione dei dati, la propagazione delle variazioni di stato via Signal Hub e la resa dell'attestato nel wallet. Il passo non è vincolante, ma per un servizio a larga utenza rappresenta la prova generale che intercetta le anomalie senza impatti reali.

{% hint style="info" %}
Per i dettagli operativi di questi passaggi, consulta i tutorial:&#x20;

1. [**Come pubblicare e configurare l'e-service in collaudo**](../tutorial/come-pubblicare-e-configurare-le-service-in-collaudo.md)
2. [**Come testare l'integrazione in collaudo.**](../tutorial/come-testare-lintegrazione-in-collaudo.md)
{% endhint %}

### **Fase 3: Pubblicazione in produzione e go-live**

Superate le verifiche, il servizio viene portato in esercizio e reso disponibile agli utenti.

1. **Pubblicazione in produzione**: l'Ente pubblica l'e-service, attiva Signal Hub, dimensiona le soglie di carico e notifica il rilascio a IPZS e PagoPA.
2. **Test di prestazione**: l'Ente esegue le prove di carico e di long run e integra Probing e Tracing.
3. **Go-live**: l'Ente concorda con IPZS e PagoPA la data di rilascio e le attività di comunicazione. La registrazione amministrativa, allo stato attuale non richiesta, sarà perfezionata non appena disponibile.

{% hint style="info" %}
Per i dettagli operativi di questi passaggi, consulta i tutorial:&#x20;

1. [**Come pubblicare in produzione**](../tutorial/come-pubblicare-in-produzione.md)
2. [**Come eseguire i test di prestazione e gli adempimenti tecnici**](../tutorial/come-eseguire-i-test-di-prestazione-e-gli-adempimenti-tecnici.md)
3. [**Come pianificare il go-live**.](../tutorial/come-pianificare-il-go-live.md)
{% endhint %}

### **Conclusione**

Il ciclo di vita della pubblicazione è completo: l'attestazione è esposta su PDND, integrata con l'Issuer e disponibile nel wallet del cittadino. Grazie alla sequenza standardizzata di progettazione, configurazione e collaudo, l'Ente ha potuto trasformare il proprio dato in un EAA di interesse pubblico in modo controllato e conforme, con tutti gli attori allineati sullo stato del servizio.

{% hint style="info" %}
**Variante — interesse locale con reperimento dal touchpoint.**&#x20;

Se l'attestato è di interesse locale ed è reperito dal touchpoint dell'Ente anziché dal catalogo, il Credential Offer diventa lo strumento facoltativo di guida all'utente e la discovery assume carattere «locale»; le altre attività del percorso restano invariate.
{% endhint %}

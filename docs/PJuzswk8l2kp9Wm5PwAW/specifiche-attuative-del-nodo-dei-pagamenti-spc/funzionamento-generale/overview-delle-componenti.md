# Overview delle componenti

In questa pagina descriviamo lo scopo di ciascuna componente della piattaforma pagoPA, senza entrare nel dettaglio dei moduli o degli attori appartenenti al dominio dell'Ente Creditore o del Prestatore dei Servizi di Pagamento.&#x20;

<figure><img src="../../.gitbook/assets/overview_componenti_pagopa.png" alt=""><figcaption><p>Macro componenti della piattaforma pagoPA</p></figcaption></figure>

## Nodo dei pagamenti

È la macro-componente principale che ha lo scopo di coordinare l’esecuzione delle richieste di servizio, gestendo l'intero workflow nei diversi use case di pagamento avvisi previsti e in tutte le possibili opzioni di integrazione degli EC.

Il _Nodo dei pagamenti_ si interfaccia sia con le applicazioni degli EC a cui sono indirizzate le richieste di servizio, sia con i PSP che abilitano il pagamento sui diversi canali.

Comprende varie componenti software tra cui le principali sono quelle che permettono:

* la memorizzazione e la gestione delle “richieste di pagamento” per la tracciatura delle operazioni e la gestione delle eccezioni;
* la gestione degli errori, in base a quanto definito in [Gestione degli errori](http://127.0.0.1:5000/o/KXYtsf32WSKm6ga638R3/s/mU2qgiLV1G3m9z1VjAOc/ "mention");
* il monitoraggio dei livelli di servizio di ciascun soggetto coinvolto, come definito in [indicatori-di-qualita-per-i-soggetti-aderenti](../../appendici/indicatori-di-qualita-per-i-soggetti-aderenti/ "mention");
* la gestione della funzionalità di "stand In" in caso di indisponibilità o mancata risposta da parte dell'EC;

## Gestione posizione debitorie (GPD) <a href="#_wsod245r31gy" id="_wsod245r31gy"></a>

La componente permette l'integrazione con il nodo dei pagamenti attraverso API Rest da parte degli EC per tutte le funzionalità asincrone descritte dettagliatamente in [posizioni-debitorie](../../appendici/posizioni-debitorie/ "mention").&#x20;

## Gestione evoluta commissioni (GEC) <a href="#_wsod245r31gy" id="_wsod245r31gy"></a>

La componente permette l'integrazione con il nodo dei pagamenti per abilitare le funzionalità descritte dettagliatamente in [gestione-evoluta-commissioni.md](../../appendici/gestione-evoluta-commissioni.md "mention").

## Checkout

La componente pagoPA [checkout.md](../../casi-duso/pagamento-da-touchpoint-pagopa/checkout.md "mention") è una web-app per desktop e mobile che consente di effettuare pagamenti sulla piattaforma pagoPA a partire dai dati contenuti nell'avviso di pagamento, senza alcuna registrazione da parte degli utenti.

La componente Checkout inoltre fornisce all’utilizzatore finale funzioni di supporto, introducendo vari accorgimenti per semplificare la _user experience_, anche nel caso di pagamento con dispositivi mobili.

## IO

<img src="../../.gitbook/assets/image (17).png" alt="" data-size="line">permette di interagire facilmente con diverse Pubbliche Amministrazioni, locali o nazionali, raccogliendo tutti i loro servizi, comunicazioni, pagamenti e documenti in un'unica app, in modo sicuro e sempre a portata di mano.

L'app permette di pagare direttamente da messaggio o avviso cartaceo, riducendo i tempi e i costi d’incasso per l’Ente.

## Area riservata

Portale B2B che, tramite l’accesso con credenziali SPID o CIE, sarà il primario canale di interfaccia per i PSP, gli Enti Creditori, i loro eventuali partner/integratori tecnologici e tutti i prodotti della Società, tra cui la piattaforma pagoPA.\
Il portale nasce per offrire ai vari soggetti coinvolti un unico luogo da cui attivare e integrare uno qualsiasi dei prodotti di PagoPA, al fine di semplificare le procedure di adesione alle singole piattaforme e, successivamente, configurare e gestire in autonomia i relativi servizi.

L’ente potrà indicare i referenti amministrativi e tecnici (interni) o i partner tecnologici (esterni), autorizzarli all’integrazione di un determinato prodotto e variare queste deleghe in qualsiasi momento. Allo stesso modo le figure tecniche delegate potranno accedere al portale per eseguire le operazioni di integrazione necessarie solo per gli enti da cui abbiano ricevuto delega e solo sui prodotti su cui siano stati autorizzati.

L’introduzione del nuovo portale B2B costituirà un unico back office e permetterà agli enti di gestire in autonomia - dalla propria area riservata - tutti i prodotti in modo semplice, coerente e standardizzato, riducendo l’effort di integrazione e configurazione, oggi realizzate tramite email e processi manuali.&#x20;

L’adesione e la firma dei contratti e delle convenzioni sarà automatizzato.&#x20;

L’accesso al nuovo portale B2B avverrà attraverso SPID o CIE e ciascun referente amministrativo potrà delegare un subset di funzionalità ai diversi profili utente.&#x20;

A titolo esemplificativo:

* Funzionalità per i PSP:&#x20;
  * configurazione Catalogo dati informativo&#x20;
  * gestioni chiavi e certificati per accesso alle primitive&#x20;
  * download report fatturazioni&#x20;
* Funzionalità per gli EC:&#x20;
  * censimento stazioni&#x20;
  * censimento IBAN&#x20;
  * gestione chiavi e certificati per accesso alle primitive&#x20;
  * download report fatturazioni per funzionalità premium&#x20;
  * configurazioni catalogo servizi per pagamenti spontanei

## Servizi a valore aggiunto (VAS)

La componente _VAS_ espone una serie di API rivolte sia agli EC che ai PSP.

## Stazioni e Canali <a href="#_wsod245r31gy" id="_wsod245r31gy"></a>

I soggetti aderenti, EC e PSP, si connettono alla piattaforma rispettivamente per mezzo di _stazioni_ e _canali,_ che rappresentano le piattaforme tecnologiche di partner ed intermediari connessi tramite le forme e i metodi descritti nella sezione [connettivita.md](../../appendici/connettivita.md "mention").

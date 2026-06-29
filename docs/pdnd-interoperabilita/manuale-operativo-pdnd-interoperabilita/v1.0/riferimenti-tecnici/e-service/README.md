# E-service

## Che cos'è e a cosa serve

Un **e-service** è un servizio digitale che consente la comunicazione e lo scambio di dati tra le Pubbliche Amministrazioni attraverso la **Piattaforma Digitale Nazionale Dati (PDND)**.\
Serve a rendere disponibili in modo sicuro, standardizzato e controllato i dati e le funzionalità digitali di un’amministrazione (detta _erogatore_) verso altre amministrazioni o soggetti pubblici (_fruitori_).

Gli e-service rappresentano il cuore del modello di interoperabilità della PDND: ogni ente può **erogare** i propri servizi digitali o **fruirne** da altri enti, garantendo tracciabilità, sicurezza e gestione centralizzata dei permessi.

## Requisiti di accesso

L'erogatore ha facoltà di prevedere dei requisiti di accesso ai propri e-service. Nel linguaggio della piattaforma, sono definiti _attributi_. Gli enti che possiedono o dimostrano di possederli potranno iscriversi a fruire dell'e-service stesso.

Maggiori dettagli nella [sezione dedicata agli attributi](../../../../../jqqB3CsnONZdScwRg13O/riferimenti-tecnici/attributi/).&#x20;

## Struttura

#### Parte generale

Contiene le informazioni essenziali richieste per la pubblicazione e il funzionamento dell’e-service.

#### Parte versionata

Contiene le informazioni tecniche specifiche di ciascuna versione del servizio, comprese le API, la documentazione e le soglie operative.

## Informazioni generali richieste

Nella parte generale vengono richiesti:

* **Nome** e **breve descrizione:** visibili nel catalogo degli e-service sulla piattaforma PDND.
* **Tecnologia:** indica se l’API è sviluppata in REST o SOAP.
* **Modalità:** specifica se l’e-service **eroga** o **riceve** dati. Se eroga, tutti gli endpoint dell’API espongono dati. Se riceve, tutti gli endpoint raccolgono dati.
* **Erogazione (o ricezione) dati personali**: indica se le informazioni erogate o ricevute attraverso l'e-service si configurano come dati personali. Vincola gli aderenti a compilare l'analisi del rischio in accordo con questa dichiarazione. Maggiori dettagli nella [sezione dedicata](../finalita/analisi-del-rischio.md#dati-personali).
* **Analisi del rischio:** richiesta solo se la modalità è “ricezione”. In tal caso, l’erogatore indica i casi d’uso per cui raccoglie dati dai fruitori e compila l’apposito questionario. Maggiori dettagli nella [sezione dedicata](../finalita/analisi-del-rischio.md).
* **Autorizzazione al conferimento di deleghe:** specifica se le Pubbliche Amministrazioni fruitrici possono delegare un’altra amministrazione a completare gli adempimenti amministrativi (richiesta di fruizione, finalità) per loro conto. Maggiori dettagli nella [sezione dedicata](../deleghe/).
* **Presenza del servizio di notifica di variazioni dei dati (Signal Hub):** segnala se l’e-service è integrato con Signal Hub e consente ai fruitori di ricevere notifiche in caso di variazioni dei dati di loro interesse. Maggiori dettagli nella [sezione dedicata](../signal-hub.md).

I valori impostati in **tecnologia** e **modalità** restano invariati dopo la pubblicazione della prima versione dell’e-service, per garantire stabilità e coerenza del servizio nel tempo. È comunque possibile creare nuovi e-service e archiviare quelli non più utilizzati.

## Informazioni di versione

Nella parte versionata sono richieste le seguenti informazioni:

* **File di specifica dell’API per la versione:** un file OpenAPI (per REST) o WSDL (per SOAP) che descrive tecnicamente l’API esposta dall’erogatore.
* **Documentazione tecnica aggiuntiva:** può comprendere manuali, esempi o altri materiali di supporto.
* **Changelog (descrizione della versione):** breve descrizione testuale delle modifiche introdotte rispetto alle versioni precedenti.
* **Attributi:** insieme dei requisiti di accesso che il fruitore deve possedere per attivare la richiesta di fruizione. Maggiori dettagli nella [sezione dedicata](../../../../../jqqB3CsnONZdScwRg13O/riferimenti-tecnici/attributi/).
* **Policy di attivazione delle richieste di fruizione:** per impostazione predefinita, le richieste vengono attivate automaticamente se il fruitore rispetta i requisiti previsti. L’erogatore può scegliere di attivarle manualmente.
* **Soglie delle chiamate API:** indicano il carico massimo, espresso in chiamate API/giorno, che l’infrastruttura è in grado di sostenere. È possibile definirle sia a livello di versione di e-service, che di categoria di aderente, attraverso gli attributi certificati. Maggiori dettagli nella [sezione dedicata](soglie-e-approvazioni.md).
* **Durata della validità del voucher:** indica il periodo di validità del voucher rilasciato da PDND, che consente l’accesso al servizio.
* **Parametro audience (**_**aud**_**):** claim standard che identifica la risorsa per la quale viene autorizzata la richiesta. L'erogatore riceverà questo valore all'interno del voucher rilasciato al fruitore da PDND Interoperabilità.

Tutti i parametri possono essere aggiornati nel tempo anche senza creare una nuova versione di e-service, tranne:

* il **file di specifica dell’API**,
* il parametro **audience**,
* gli **attributi**, modificabili senza nuova versione solo se ampliano la platea dei fruitori.

Maggiori informazioni sulla gestione degli aggiornamenti nel [tutorial dedicato](../../tutorial/tutorial-per-lerogatore/come-aggiornare-un-e-service.md).

## Regole di aggiornamento

* Gli e-service sono versionati automaticamente in ordine progressivo.
* PDND consente la creazione di nuove versioni per modifiche strutturali, preservando la coerenza delle versioni pubblicate.
* È possibile archiviare le versioni non più attive e pubblicarne di nuove.

***

Pagina successiva → [Operazioni e ciclo di vita](operazioni-e-ciclo-di-vita.md)

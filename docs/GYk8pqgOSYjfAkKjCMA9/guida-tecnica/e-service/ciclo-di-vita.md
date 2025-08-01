# Ciclo di vita

## Stati

Una versione di e-service può trovarsi in uno dei seguenti stati:

* **bozza**: è in fase di creazione e non è ancora stata pubblicata. Se si tratta della prima versione dell'e-service, significa che l'intero e-service non è ancora disponibile sul _Catalogo degli e-service_;
* **pubblicata**: la nuova versione di e-service è quella corrente. Tutti gli aderenti interessati ad iscriversi all'e-service ex novo, si iscriveranno per questa versione. A tutti gli aderenti già iscritti viene notificato che esiste una versione di e-service più recente;
* **deprecata**: una versione dell'e-service ancora attiva ma non la più recente; chi è iscritto a questa versione può continuare ad utilizzarla fino a quando non verrà archiviata;
* **sospesa**: l’erogatore ha temporaneamente bloccato l'utilizzo di questa versione di e-service;
* **archiviata**: la versione di e-service è stata ritirata dal catalogo e non è più in uso.

Esiste inoltre un altro stato, relativo solo al flusso delle deleghe, ossia:

* **in attesa di approvazione**: il delegato ha finalizzato la bozza di una nuova versione dell'e-service che gestisce, e l'ha sottoposta al delegante per approvazione. Quando il delegante la approva, passerà in stato **pubblicato**, e sarà la versione corrente dell'e-service.

## Operazioni

### Creazione e pubblicazione di una bozza

Il ciclo di vita di un e-service inizia con la **creazione di una bozza**. Quando è in stato bozza non è ancora disponibile ai fruitori.

La bozza di un e-service può essere eliminata in due casi:

1. **Se esiste già almeno una versione pubblicata**, si può cancellare solo la bozza della nuova versione in lavorazione.
2. **Se il servizio è ancora alla sua prima versione e non è mai stato pubblicato**, è possibile eliminare l’intero e-service.

Una volta completata, l’e-service può essere **pubblicato immediatamente** o in un secondo momento.

Se viene pubblicato passa in stato **attivo**, diventa disponibile sul Catalogo degli e-service ed è utilizzabile dai fruitori.

### Creazione di una nuova versione e deprecazione della precedente

Dopo che un e-service è stato pubblicato, per effettuare modifiche bisogna **creare una nuova versione**. Quando una nuova versione viene pubblicata, la precedente diventa **deprecata**, rimanendo disponibile fino a quando tutti i fruitori non avranno aggiornato le loro richieste di fruizione. Quella versione di e-service verrà archiviata automaticamente da PDND quando l'ultimo fruitore avrà archiviato la propria richiesta di fruizione.

Le versioni degli e-service sono **numerate automaticamente** dalla piattaforma in ordine crescente.

Il rilascio di una nuova versione di un e-service **non prevede un upgrade automatico** per tutti i fruitori. Questo avviene perché ogni nuova versione può differire dalla precedente e un aggiornamento automatico potrebbe causare disservizi se l'API è stata modificata. Gli utenti hanno la possibilità di eseguire manualmente l'upgrade della propria richiesta di fruizione all'ultima versione dell'e-service quando ritengono che la loro integrazione sia stabile.

### Clonazione

Per facilitare la gestione di servizi simili, è possibile **clonare un e-service**, modificarne alcune parti e pubblicarlo come nuovo servizio indipendente. Il nuovo e-service partirà con la propria numerazione dalla versione 1, indipendentemente dal numero di versioni rilasciate nel servizio dal quale è stato clonato.

### Sospensione e riattivazione

L’erogatore può **sospendere** una versione di e-service in stato **attivo** o **deprecato**, interrompendo temporaneamente l'accesso al servizio. Una versione sospesa può essere **riattivata**, ripristinando l’accesso ai fruitori.

Oltre ad una sospensione ex abrupto, legata a circostanze straordinarie e di forza maggiore, è possibile effettuare una "sospensione programmata" (per esempio per manutenzione) di una versione di un e-service. In questo caso, da linee guida di AgID è previsto che l'erogatore fornisca un preavviso.

> l’Erogatore PUÒ sospendere temporaneamente la disponibilità dell’e-service segnalando in anticipo al Fruitore tale circostanza nel rispetto delle condizioni eventualmente indicate negli SLA concordati con il Fruitore al di fuori della Infrastruttura interoperabilità PDND ([LLGG AgID](https://trasparenza.agid.gov.it/moduli/downloadFile.php?file=oggetto_allegati/213481832130O__O20211210_LG+Infrastruttura+Interoperabilit%26%23224%3B+PDND_v1_allegato+2.pdf) – allegato 2, capitolo 4, pag. 17)

{% hint style="warning" %}
La sospensione di una versione di e-service comporta un'interruzione di servizio verso i fruitori e tutti gli utenti intermedi e finali che fruiscono dei loro e-service.
{% endhint %}

---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/jqqB3CsnONZdScwRg13O/riferimenti-tecnici/e-service/operazioni-e-ciclo-di-vita
---

# Operazioni e ciclo di vita

## Operazioni

Le operazioni rappresentano le azioni principali che l’erogatore può eseguire per creare, aggiornare o sospendere le versioni di un e-service.

### Creazione e pubblicazione di una bozza

Il ciclo di vita inizia con la **creazione di una bozza**, durante la quale l’e-service non è ancora disponibile ai fruitori. La bozza può essere eliminata in due casi:

1. **Se esiste già almeno una versione pubblicata**, è possibile cancellare solo la bozza della nuova versione in lavorazione.
2. **Se il servizio è alla sua prima versione e non è mai stato pubblicato**, è possibile eliminare l’intero e-service.

Una volta completata, la bozza può essere **pubblicata** immediatamente o in un secondo momento.

Con la pubblicazione, l’e-service passa allo stato **pubblicata**, diventa disponibile nel **Catalogo degli e-service** ed è fruibile dai fruitori.

### Creazione di una nuova versione e deprecazione della precedente

Dopo la pubblicazione, per introdurre modifiche strutturali (ad esempio, all’interfaccia API) è necessario **creare una nuova versione**. Quando la nuova versione viene pubblicata, la precedente diventa **deprecata**, rimanendo disponibile fino a quando tutti i fruitori non avranno aggiornato le proprie richieste di fruizione. Quella versione verrà **archiviata automaticamente** quando l’ultimo fruitore avrà archiviato la propria richiesta di fruizione.

Le versioni degli e-service sono **numerate automaticamente** in ordine crescente. Il rilascio di una nuova versione **non prevede un aggiornamento automatico** per tutti i fruitori: ogni fruitore esegue manualmente l’aggiornamento quando la propria integrazione è stabile.

### Clonazione

Per facilitare la gestione di servizi simili, è possibile **clonare un e-service**, modificarne alcune parti e pubblicarlo come **nuovo e-service** indipendente.

Il nuovo e-service parte dalla **versione 1**, indipendentemente dal numero di versioni del servizio dal quale è stato clonato.

### Sospensione e riattivazione

L’erogatore può **sospendere** una versione di e-service in stato **pubblicato** o **deprecato**, interrompendo temporaneamente l’accesso al servizio. Una versione sospesa può essere **riattivata**, ripristinando l’accesso ai fruitori.

Per sospensioni programmate (ad esempio, per manutenzione), si raccomanda un preavviso ai fruitori nel rispetto delle condizioni previste nelle Linee Guida:

> l’Erogatore PUÒ sospendere temporaneamente la disponibilità dell’e-service segnalando in anticipo al Fruitore tale circostanza nel rispetto delle condizioni eventualmente indicate negli SLA concordati con il Fruitore al di fuori della Infrastruttura interoperabilità PDND ([LLGG AgID](https://trasparenza.agid.gov.it/download/9591.html) – allegato 2, capitolo 4, pag. 9)

{% hint style="warning" %}
**La sospensione comporta un’interruzione di servizio** verso i fruitori e gli utenti finali collegati.
{% endhint %}

## Stati

La tabella seguente riepiloga gli **stati** in cui può trovarsi una versione di e-service, con impatti su visibilità e operatività.

<table><thead><tr><th width="116.28436279296875">Stato</th><th width="303.234375">Descrizione</th><th width="124.52813720703125">Visibilità ai fruitori</th><th>Azioni consentite</th></tr></thead><tbody><tr><td><strong>Bozza</strong></td><td>Versione in fase di creazione e non ancora pubblicata. Se è la prima versione, l’intero e-service non è visibile nel catalogo.</td><td>Non visibile</td><td>Modifica; eliminazione (nei casi previsti)</td></tr><tr><td><strong>Pubblicata</strong></td><td>Nuova versione corrente. I nuovi fruitori si iscrivono a questa versione; i fruitori già iscritti vengono informati di aggiornare alla versione più recente.</td><td>Visibile</td><td>Iscrizione; gestione richieste di fruizione</td></tr><tr><td><strong>Deprecata</strong></td><td>Versione ancora attiva ma non più la più recente; resta utilizzabile dai fruitori già iscritti fino all’archiviazione.</td><td>Visibile</td><td>Continuazione fruizioni esistenti</td></tr><tr><td><strong>Sospesa</strong></td><td>Utilizzo temporaneamente bloccato dall’erogatore.</td><td>Non disponibile</td><td>Riattivazione</td></tr><tr><td><strong>Archiviata</strong></td><td>Versione ritirata dal catalogo e non più in uso.</td><td>Non visibile</td><td>Nessuna</td></tr><tr><td><strong>In attesa di approvazione</strong></td><td>Solo per il flusso delle deleghe: il delegato ha finalizzato la bozza e l’ha inviata al delegante per approvazione; dopo l’approvazione, la versione diventa <strong>pubblicata</strong>.</td><td>Non visibile</td><td>Approvazione o rifiuto</td></tr></tbody></table>

***

Pagina successiva [→ Esportazione e importazione](e-service.md)

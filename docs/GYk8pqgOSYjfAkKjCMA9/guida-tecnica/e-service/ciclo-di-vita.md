# Ciclo di vita

Un **e-service** può trovarsi in uno dei seguenti stati:

* **Bozza**: il servizio è in fase di creazione e non ancora disponibile ai fruitori.
* **Attivo**: il servizio è pubblicato e utilizzabile dai fruitori.
* **Sospeso**: l’erogatore ha temporaneamente interrotto l’accesso al servizio.
* **Deprecato**: il servizio è stato aggiornato e sostituito da una nuova versione, ma rimane disponibile per garantire continuità.
* **Archiviato**: il servizio non è più utilizzabile e non può essere riattivato.

## **Creazione e gestione delle versioni**

Il ciclo di vita di un e-service inizia con la **creazione di una bozza**. Una volta completata, l’e-service può essere **pubblicato immediatamente** o in un secondo momento.

Se un e-service è già stato pubblicato, eventuali aggiornamenti richiedono la **creazione di una nuova versione**. Quando una nuova versione viene pubblicata, la precedente diventa **deprecata**, rimanendo disponibile fino a quando tutti i fruitori non avranno aggiornato le loro richieste di fruizione.

Le versioni degli e-service sono numerate **automaticamente** dalla piattaforma in ordine crescente.

Quando viene pubblicata una nuova versione di un e-service **non viene effettuato l'upgrade automatico** per tutti i fruitori: una nuova versione di e-service può presentare delle differenze rispetto alla versione precedente, quindi un upgrade automatico di tutti i fruitori porterebbe a disservizi diffusi laddove parte dell'API fosse cambiata. Ogni fruitore potrà fare l'upgrade manualmente della propria richiesta di fruizione all'ultima versione dell'e-service non appena riterrà la sua integrazione stabile.

## **Cancellazione di una bozza**

La bozza di un e-service può essere eliminata in due casi:

1. **Se esiste già almeno una versione pubblicata**, si può cancellare solo la bozza della nuova versione in lavorazione.
2. **Se il servizio è ancora alla sua prima versione e non è mai stato pubblicato**, è possibile eliminare l’intero e-service.

## **Sospensione e riattivazione**

L’erogatore può **sospendere** una versione di e-service in stato **attivo** o **deprecato**, interrompendo temporaneamente il servizio. Una versione sospesa può essere **riattivata**, ripristinando l’accesso ai fruitori.

Oltre ad una sospensione ex abrupto, legata a circostanze straordinarie e di forza maggiore, è possibile effettuare una "sospensione programmata"  (per esempio per manutenzione) di una versione di un e-service. In questo caso, da linee guida di AgID è previsto che l'erogatore fornisca un preavviso.

{% hint style="warning" %}
La sospensione di una versione di e-service comporta un'interruzione di servizio verso i fruitori e tutti gli utenti intermedi e finali che fruiscono dei loro e-service.
{% endhint %}

## **Archiviazione e clonazione**

* Quando tutte le richieste di fruizione di una versione deprecata sono state aggiornate a una nuova versione, la versione deprecata dell’e-service viene **archiviata**. Questa operazione è **irreversibile**.
* Per facilitare la gestione di servizi simili, è possibile **clonare un e-service**, modificarne alcune parti e pubblicarlo come nuovo servizio indipendente.

## Esportazione&#x20;

È possibile esportare una versione di e-service da un ambiente di PDND Interoperabilità e importare all'interno di un altro ambiente come nuovo e-service in bozza. Attualmente questa funzionalità è disponibile solo attraverso la UI.

La funzionalità facilita la messa in produzione di un e-service che ha superato la fase di collaudo, ma può essere usata per esportare e importare gli e-service da un ambiente all'altro, oppure per replicare un e-service presso più enti (nel caso, ad esempio, di Partner Tecnologici).

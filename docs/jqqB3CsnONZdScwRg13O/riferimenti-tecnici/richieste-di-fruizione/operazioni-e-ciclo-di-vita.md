# Operazioni e ciclo di vita

## Creazione di una bozza e inoltro della richiesta

È possibile **iscriversi** agli e-service presenti nel **catalogo degli e-service** quando ricorrono entrambe le condizioni seguenti:

* l’ente **non ha già** una **richiesta di fruizione attiva** per il medesimo e-service;
* l’ente **possiede i requisiti minimi** per l’iscrizione (**attributi** richiesti).

La piattaforma consente di **creare una bozza** solo se **risultano soddisfatti tutti gli attributi certificati** richiesti dall’e-service. Sono in capo al potenziale fruitore:

* l’**autodichiarazione** degli **attributi dichiarati** richiesti;
* il **caricamento della documentazione** necessaria affinché l’erogatore possa **verificare** eventuali **attributi verificati**.

Completata la bozza, la richiesta può essere **inoltrata all’erogatore** per l’approvazione.

## Iscrizione a un proprio e-service

Un ente può **iscriversi ai propri e-service in qualità di fruitore** senza la fase di verifica degli attributi. Il meccanismo **semplifica le attività di monitoraggio** e riduce gli oneri amministrativi in caso di auto-fruizione.

## Approvazione o rifiuto della richiesta

La **policy di approvazione** è configurata **nella versione dell’e-service** e può essere:

* **automatica**: PDND Interoperabilità esegue le **verifiche**; se il fruitore **possiede tutti gli attributi** (certificati, verificati, dichiarati) richiesti, la richiesta è **attivata immediatamente**; in caso contrario, confluisce nel **flusso di approvazione manuale**;
* **manuale**: l’**erogatore attiva** la richiesta dopo le **verifiche** di competenza (anche in presenza di attributi verificati da valutare).

L’erogatore può **rifiutare** la richiesta quando **ritiene non soddisfatti** i requisiti (attributi) ed è **tenuto a motivare** la decisione. Il fruitore può **presentare una nuova richiesta**, aggiornando **documentazione** e/o **motivazioni**.

Per eventuali chiarimenti, i **contatti dell’erogatore** sono disponibili nella scheda.

## Aggiornamento di una richiesta di fruizione

L’**aggiornamento** è richiesto quando l’erogatore **pubblica una nuova versione** dell’e-service. Il fruitore trova la possibilità di aggiornare nella scheda della propria richiesta.

La richiesta è **legata** alla **versione** per la quale è stata presentata: se è stata inviata per la **versione 5**, al passaggio dell’e-service alla **versione 6** occorre **aggiornare**. Con l’aggiornamento:

* **tutte le finalità** vengono **migrate** alla nuova richiesta senza che cambi l'id della finalità utile alle operazioni tecniche (`purposeId`);
* da quel momento **utilizzano la nuova versione** dell’e-service;
* l’operazione è **irreversibile**.

È **buona prassi** esaminare **changelog** (descrizione della versione) e **file di interfaccia** aggiornati per comprendere le modifiche, soprattutto in presenza di possibili **variazioni “breaking”** su requisiti di accesso o interfaccia API.

Se l’erogatore pubblica **più versioni**, l’aggiornamento è sempre verso l’**ultima** disponibile: ad es., se il fruitore è alla **v3** e l’erogatore pubblica **v4** e poi **v5**, l’aggiornamento porta **direttamente a v5**.

Per alcuni e-service è disponibile una **versione in ambiente di test**, utile per effettuare **prove** prima dell’adozione in produzione.

## Archiviazione di una richiesta di fruizione

L’**archiviazione** può essere:

* **automatica**: quando il fruitore **aggiorna** la richiesta all’**ultima versione** dell’e-service; la richiesta sulla vecchia versione viene **archiviata** e le **finalità** sono **associate** alla nuova richiesta;
* **manuale**: su iniziativa del **fruitore**, quando **non necessita più** del servizio. In futuro potrà **creare una nuova richiesta**, a condizione di **non avere** già una richiesta **attiva** per lo stesso e-service.

Per **ordine** e **sicurezza**, è **buona prassi** archiviare le richieste relative a e-service **non più utilizzati**.

## Sospensione e riattivazione

La **sospensione** può essere disposta da **erogatore**, **fruitore** o **piattaforma**; **se almeno un attore sospende**, la richiesta **risulta sospesa**. **Solo** l’attore che **ha sospeso** può **riattivare** la sospensione da lui applicata.

**Regole di sospensione**

* **Erogatore**: può **sospendere manualmente** una richiesta.
* **Fruitore**: può **sospendere manualmente** una richiesta.
* **Piattaforma**: sospende quando rileva che:
  * l’erogatore ha **revocato** al fruitore **uno o più attributi verificati**;
  * il fruitore si è **auto-revocato** **uno o più attributi dichiarati**;
  * una **fonte autoritativa o ente certificatore** ha **revocato** **uno o più attributi certificati**.

Per la **riattivazione** è necessario che **tutti gli attori** che hanno sospeso **revochino la propria sospensione**; inoltre, devono risultare **riconosciuti tutti gli attributi richiesti**.

Esempio: se l’erogatore tenta di riattivare una richiesta all'interno della quale ha **revocato** un **attributo verificato**, la riattivazione **non va a buon fine** finché l’attributo **non viene nuovamente verificato**.

## Stati

La tabella seguente riepiloga gli **stati** in cui può trovarsi una richiesta di fruizione, con impatti sull'operatività.

<table><thead><tr><th width="128.5999755859375">Stato</th><th>Descrizione</th><th>Azioni consentite</th></tr></thead><tbody><tr><td><strong>Bozza</strong></td><td>Richiesta in fase di creazione, non ancora inoltrata all’erogatore.</td><td>L’aderente può <strong>compilare</strong>, <strong>autodichiarare</strong> gli attributi dichiarati, <strong>caricare documentazione</strong> per gli attributi verificati e <strong>cancellare</strong> la bozza; può <strong>inoltrare</strong> quando i requisiti minimi risultano soddisfatti.</td></tr><tr><td><strong>In attesa di approvazione</strong></td><td>Richiesta inoltrata all’erogatore per la valutazione e l’eventuale attivazione.</td><td>L’attivazione avviene <strong>manualmente dall’erogatore</strong> o <strong>automaticamente</strong> dalla piattaforma secondo la <strong>policy</strong> impostata nella versione dell’e-service.</td></tr><tr><td><strong>Attiva</strong></td><td>Richiesta attivata (dall’erogatore o dalla piattaforma, in base alla policy).</td><td>Consente di <strong>creare nuove finalità</strong> per l’e-service; può essere <strong>sospesa</strong> o <strong>archiviata</strong> secondo le regole previste.</td></tr><tr><td><strong>Sospesa</strong></td><td>Utilizzo temporaneamente bloccato da erogatore, fruitore o piattaforma.</td><td><strong>Ogni attore</strong> che ha disposto la sospensione può <strong>riattivare</strong> la propria; la richiesta torna operativa solo quando <strong>tutte</strong> le sospensioni sono rimosse e i <strong>requisiti</strong> risultano soddisfatti.</td></tr><tr><td><strong>Archiviata</strong></td><td>Il fruitore ha ritirato la richiesta perché non necessita più dell’accesso.</td><td>Può essere <strong>presentata una nuova richiesta</strong> in futuro, purché <strong>non</strong> esista già una richiesta <strong>attiva</strong> per lo stesso e-service.</td></tr><tr><td><strong>Attributi certificati mancanti</strong></td><td>Stato tecnico applicato quando l’ente perde un attributo <strong>certificato</strong> richiesto mentre la richiesta è in <strong>bozza</strong> o <strong>in attesa di approvazione</strong>.</td><td>La piattaforma <strong>impedisce l’inoltro</strong> finché la <strong>fonte autoritativa o l'ente certificatore</strong> non <strong>riconosce nuovamente</strong> l’attributo; in alternativa, il fruitore può <strong>eliminare la bozza</strong>.</td></tr></tbody></table>

***

Pagina successiva [→ Finalità](../finalita/)

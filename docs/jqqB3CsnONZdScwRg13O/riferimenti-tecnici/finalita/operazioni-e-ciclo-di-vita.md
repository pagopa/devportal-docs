# Operazioni e ciclo di vita

## Creazione della bozza e inoltro

È possibile **presentare nuove finalità** per tutti gli **e-service** per i quali l’ente dispone di una **richiesta di fruizione attiva**.

Se la **stima di carico** indicata nella finalità è **inferiore a entrambe le soglie** impostate dall’erogatore, la finalità **viene attivata automaticamente**.

Le finalità possono **rimanere in bozza** senza limiti temporali; una volta **inoltrate** all’erogatore, l’attivazione **prosegue automaticamente** finché **non** si raggiungono le **soglie massime** di carico definite dall’erogatore.

Al **superamento delle soglie**, l’**erogatore** può **attivare manualmente** la finalità e **indicare una data di attivazione prevista** per consentire al fruitore una corretta pianificazione.

## Aggiornamento della stima di carico

La **stima di carico** (chiamate API/giorno) può essere **aggiornata in qualsiasi momento**.

Se la nuova stima **supera una o entrambe le soglie** configurate nella **versione** dell’e-service, l’**adeguamento** non è **immediatamente attivo**: richiede **approvazione manuale** da parte dell’erogatore.

Maggiori dettagli sul meccanismo di soglie/stime nella [sezione dedicata](../e-service/soglie-e-approvazioni.md).

## Approvazione o rifiuto sopra soglia

Quando una nuova finalità o un **adeguamento** della stima **eccedono le soglie**, l’**erogatore** può:

* **attivare manualmente** la finalità (o l’adeguamento);
* **rifiutarla**, fornendo al fruitore una **motivazione** consultabile nel front office o via API. Il fruitore può **presentare nuove finalità** o **riproporre** l’adeguamento con una stima diversa.

## Sospendere o riattivare una finalità

La **sospensione** può essere **disposta** in modo indipendente da **fruitore** o **erogatore**; per tornare **attiva**, la finalità deve essere **riattivata dall’attore** che l’ha sospesa.

Se **entrambi** sospendono, **entrambi** devono **riattivare**.

Durante la sospensione, **nessun client associato** può **ottenere voucher** per quella finalità; la circostanza è segnalata anche nello **strumento di debug della client assertion** disponibile nel **front office**. Maggiori dettagli sullo strumento nella [sezione dedicata](../utilizzare-i-voucher/faq-e-dubbi-comuni.md).

## Archiviare una finalità

Quando **non è più necessario** utilizzare una finalità, è possibile **archiviarla**.

L’archiviazione è **irreversibile**; è sempre possibile **creare nuove finalità**, anche con le stesse caratteristiche di quelle archiviate.

L’archiviazione **riduce il carico stimato** sull’erogatore di un valore pari alla **stima** associata a quella finalità; il fruitore può **riutilizzare** tale capacità per **altre finalità** sullo stesso e-service, **compatibilmente** con la **soglia totale** impostata.

Le **chiavi** depositate sui **client associati** **non sono più utilizzabili** per ottenere voucher **per quella finalità**, ma **restano valide** per le **altre finalità** a cui sono associate.

È **buona prassi** verificare periodicamente le finalità e **archiviare** quelle **non utilizzate**, a beneficio della qualità del servizio.

## Stati

La tabella seguente riepiloga gli **stati** in cui può trovarsi una finalità, con impatti sull'operatività.

<table><thead><tr><th width="144.106201171875">Stato</th><th>Descrizione</th><th>Azioni consentite</th></tr></thead><tbody><tr><td><strong>Bozza</strong></td><td>Finalità in fase di creazione, non ancora inviata all’erogatore.</td><td>Può restare in bozza senza limiti; può essere <strong>inoltrata</strong>; il fruitore può <strong>cancellarla</strong>.</td></tr><tr><td><strong>Attivo</strong></td><td>Finalità attiva; consente di <strong>associare client</strong> e <strong>ottenere voucher</strong> da spendere presso l’API dell’erogatore.</td><td>L’attivazione è <strong>automatica sotto soglia</strong>; sopra soglia richiede <strong>approvazione manuale</strong>.</td></tr><tr><td><strong>Sospeso</strong></td><td>Utilizzo temporaneamente bloccato da erogatore o fruitore.</td><td><strong>Riattiva l’attore che ha sospeso</strong>; se la sospensione è doppia, <strong>entrambi</strong> devono riattivare. Nessun voucher emesso per la finalità finché dura la sospensione.</td></tr><tr><td><strong>In attesa di approvazione</strong></td><td>La finalità (o un suo adeguamento) presenta una <strong>stima di carico sopra soglia</strong>.</td><td>Necessita <strong>approvazione manuale</strong> dell’erogatore per passare ad <strong>attivo</strong>.</td></tr><tr><td><strong>Rifiutato</strong></td><td>L’erogatore ha <strong>rifiutato</strong> la finalità (o l’adeguamento) perché la stima risulta <strong>incompatibile</strong> con la propria capacità.</td><td>La <strong>motivazione</strong> è disponibile nel front office; il fruitore può <strong>ripresentare</strong> la finalità/adeguamento.</td></tr><tr><td><strong>Archiviato</strong></td><td>La finalità <strong>non è più utilizzata</strong> per ottenere voucher.</td><td>Operazione <strong>irreversibile</strong>; è possibile <strong>creare nuove finalità</strong> con contenuti analoghi.</td></tr></tbody></table>

***

Pagina successiva [→ Analisi del rischio](analisi-del-rischio.md)

# Revoca attributi

## Revoca di un attributo certificato

Quando PDND Interoperabilità accerta che un fruitore **non possiede più** un attributo **certificato**, lo **stato della richiesta di fruizione** viene **aggiornato automaticamente**.

**La richiesta** è portata in uno stato invalido denominato "Attributi certificati mancanti". Per il **ripristino**, la **fonte autoritativa o ente certificatore** deve **riconoscere nuovamente** l’attributo al fruitore

**Se la richiesta si trovava in bozza o in attesa di approvazione**, a seguito del **nuovo riconoscimento** dell’attributo, viene riportata **in** **bozza** e può essere **presentata** all’erogatore.

## Revoca di un attributo verificato

Se l’erogatore **revoca** un attributo **verificato** precedentemente riconosciuto, la piattaforma **mantiene invariati** gli **stati delle richieste di fruizione** e **provvede a notificare** agli enti interessati l’esistenza di una **discrepanza**.

**Esempio**: l’erogatore **A** e l’erogatore **B** avevano verificato per il fruitore **C** lo stesso attributo; **B** lo revoca; **A**, **B** e **C** ricevono una **segnalazione di discrepanza**.

La **risoluzione della contesa** è in capo agli **attori coinvolti** (erogatori/fruitore); la piattaforma assicura la **segnalazione** e conserva gli **stati correnti**.

## Revoca di un attributo dichiarato

La **gestione** degli attributi dichiarati — dalla dichiarazione alla revoca — è di **competenza esclusiva del fruitore**.

Se la revoca avviene mentre la **richiesta di fruizione è in bozza**, l’iter prosegue in due modalità: quando l’attributo **non è richiesto** per presentare la richiesta, l’utente può continuare senza ulteriori adempimenti; quando l’attributo **è richiesto**, l’**inoltro** diventa possibile **dopo** che il fruitore **dichiara nuovamente** il requisito.

Se la revoca interviene mentre la richiesta è **in attesa di approvazione**, la richiesta viene **riportata in bozza** presso il fruitore; l’invio all’erogatore potrà avvenire **una volta ripristinata la dichiarazione** dell’attributo.

Se la revoca riguarda una richiesta **attiva**, la piattaforma **sospende immediatamente** la richiesta. La **riattivazione** avviene **in modo automatico** non appena il fruitore **dichiara nuovamente** l’attributo. Qualora la richiesta **resti sospesa** anche dopo la nuova dichiarazione, significa che **permangono altre sospensioni** applicate da uno o più attori (ad esempio, erogatore o fruitore): ciascun attore che ha disposto la sospensione **provvede alla propria riattivazione** per completare il ripristino.

***

Pagina successiva [→ Enti certificatori](enti-certificatori.md)

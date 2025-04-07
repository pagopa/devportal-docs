# Casi Particolari

## Fruizione: perdita di un attributo certificato

Se PDND Interoperabilità constata che un fruitore non possiede più un attributo precedentemente riconosciutogli dal Catalogo IPA, viene automaticamente cambiato lo stato della richiesta di fruizione.

Se la richiesta è in bozza o in attesa di approvazione, viene portata in uno stato "invalido". Per uscire da questo stato, è necessario che il Catalogo IPA riconosca nuovamente l'attributo al fruitore. In alternativa, il fruitore può eliminare la bozza.&#x20;

Se la richiesta era in attesa di approvazione prima di essere portata in stato "invalido", a valle del nuovo riconoscimento dell'attributo certificato viene riportata in stato di bozza e potrà essere nuovamente presentata all'erogatore.

## Fruizione: perdita di un attributo verificato

Se l'erogatore revoca un attributo verificato precedentemente riconosciuto al fruitore, la richiesta non viene sospesa immediatamente. PDND Interoperabilità notifica a tutti gli enti interessati da quell'attributo verificato il fatto che ci siano discrepanze. Per fare un esempio:&#x20;

1. l'erogatore A e l'erogatore B verificano al fruitore C lo stesso attributo verificato;
2. l'erogatore B lo revoca;
3. ad A, B e C viene inviata una notifica segnalando che c'è una discrepanza tra l'interpretazione dell'erogatore A e B. PDND Interoperabilità si limita alla segnalazione, senza sospendere nessuna delle richieste di fruizione. Sarà compito degli attori coinvolti risolvere eventuali contese.

{% hint style="warning" %}
Il sistema di notifica è in corso di realizzazione e non è ancora disponibile.
{% endhint %}

## Fruizione: perdita di un attributo dichiarato

La certificazione e la revoca degli attributi dichiarati è a carico esclusivo dei fruitori.

Se il fruitore si revoca un attributo dichiarato per una richiesta di fruizione in bozza, esistono due casi. Se l'attributo non è strettamente necessario alla presentazione della richiesta di fruizione, non succede nulla. Se l'attributo è invece necessario, non sarà possibile inoltrare la richiesta finché l'attributo non viene nuovamente dichiarato.

Se la richiesta di fruizione è attualmente in attesa di approvazione, alla revoca di un attributo dichiarato questa torna in stato di bozza presso il fruitore, che potrà presentarla nuovamente solo dopo aver dichiarato nuovamente l'attributo che si è revocato.

Se la richiesta di fruizione è attiva, viene immediatamente sospesa dalla piattaforma e non è riattivabile né dall'erogatore né dal fruitore. Verrà automaticamente riattivata quando il fruitore dichiara nuovamente il possesso dell'attributo dichiarato. Se la richiesta non viene riattivata, è possibile che sia stata sospesa anche da qualche altro attore (es. l'erogatore o il fruitore). Ogni attore che l'ha sospesa dovrà quindi procedere a riattivare manualmente la richiesta.

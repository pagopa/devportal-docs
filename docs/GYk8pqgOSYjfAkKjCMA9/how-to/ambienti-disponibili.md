# Come accedere a PDND Interoperabilità

## Accesso

### Step 1 - Login

Effettuare il login con SPID.

<figure><img src="../.gitbook/assets/interop_ambiente_test_01.png" alt=""><figcaption><p>Schermata di login alla Piattaforma Area Riservata (Self Care) attraverso SPID.</p></figcaption></figure>



### Step 2 - Selezionare l'Ente

Scegliere l'ente per il quale si opera.

<figure><img src="../.gitbook/assets/interop_ambiente_test_02.png" alt=""><figcaption><p>Schermata di selezione ente sulla Piattaforma Area Riservata (Self Care).</p></figcaption></figure>

### Step 3 -Selezionare Interoperabilità

Selezionare il prodotto _Interoperabilità_.

<figure><img src="../.gitbook/assets/Interoperabilità nuovo layout.png" alt=""><figcaption><p>Schermata di selezione prodotto sulla Piattaforma Area Riservata (Self Care).</p></figcaption></figure>

### Step 4 - Selezionare l'ambiente

All'apertura della modale, è richiesto l'ambiente in cui si intende operare: collaudo o produzione. Si verrà quindi rimandati a PDND Interoperabilità nell'ambiente richiesto.

<figure><img src="../.gitbook/assets/interop collaudo.png" alt=""><figcaption><p>Schermata di selezione ambiente, dopo aver selezionato il prodotto, sulla Piattaforma Area Riservata (Self Care).</p></figcaption></figure>

{% hint style="info" %}
Su Interoperabilità chi possiede il ruolo di amministratorre in produzione, è Amministratore anche nell'ambiente di collaudo.
{% endhint %}

L'operatore API e l'operatore di sicurezza devono essere abilitati dall'amministratore per accedere all'ambiente di collaudo. Chi non fosse abilitato dopo aver effettuato il login con SPID, selezionato l'ente di riferimento e scelto il prodotto Interoperabilità, verrà rimandato automaticamente all'ambiente di produzione.

## Abilitazione

L'amministratore, per poter abilitare un utente, deve accedere a PDND Interoperabilità nell'ambiente di produzione o al back office di Selfcare e andare su _Utenti > Aggiungi Utente_. Si aprirà così un form da compilare con i dati dell'operatore da abilitare all'ambiente di collaudo.

<figure><img src="../.gitbook/assets/doppio ambiente interop + collaudo.png" alt=""><figcaption><p>Nella sezione Utenti è presente una distinzione tra l'ambiente Interoperabilità produzione e Interoperabilità collaudo, bisogna fare attenzione in quale ambiente si inserisce la nuova utenza</p></figcaption></figure>

<figure><img src="../.gitbook/assets/collaudo aggiungi utente.png" alt=""><figcaption><p>Come appare la schermata di aggiunta utente dove si può scegliere il prodotto per cui si sta aggiungendo la nuova utenza</p></figcaption></figure>

Nell'ambiente di collaudo è possibile nominare amministratore anche l'utente che in produzione ha il ruolo di operatore, in quanto:

* &#x20;i due ambienti non interferiscono tra loro;
* è possibile fare tutti i test per valutare l'integrazione dell'ente con PDND Interoperabilità;
* l'operatore può reperire tutte le informazioni necessarie per abilitare il proprio amministratore per operare poi nell'ambiente di produzione.

# Ambiente di collaudo

## Ambiente di collaudo e ambiente di produzione

PDND Interoperabilità mette a disposizione dei suoi aderenti due ambienti, collaudo e produzione. Non c'è bisogno da parte dell'aderente di fare alcuna operazione aggiuntiva a valle dell'adesione, i due ambienti saranno attivati automaticamente.

La differenza principale è che nell'ambiente di collaudo **si devono usare solo usare dati fittizi**, e serve per testare l'integrazione tra aderenti, oppure ad un singolo aderente per verificare la propria integrazione con PDND Interoperabilità. A questo proposito, si ricorda che è possibile per un aderente iscriversi anche agli e-service dei quali si è erogatori.&#x20;

Nell'ambiente di produzione gli e-service ai quali ci si iscrive erogheranno dati reali.

## Cosa prevede l'accordo di adesione?

Quando si aderisce a PDND Interoperabilità, si ha direttamente accesso ad entrambi gli ambienti, senza ulteriori oneri richiesti agli aderenti. Entrambe gli ambienti saranno disponibili dopo aver fatto login con SPID.

## Sono amministratore, come faccio ad entrare nell'ambiente di collaudo?

Prima di tutto, effettuo il login con SPID.

<figure><img src="../.gitbook/assets/interop_ambiente_test_01.png" alt=""><figcaption><p>Schermata di login alla Piattaforma Area Riservata (Self Care) attraverso SPID.</p></figcaption></figure>

Successivamente, scelgo l'ente per il quale sto operando.

<figure><img src="../.gitbook/assets/interop_ambiente_test_02.png" alt=""><figcaption><p>Schermata di selezione ente sulla Piattaforma Area Riservata (Self Care).</p></figcaption></figure>

Dopo, seleziono il prodotto _Interoperabilità_.

<figure><img src="../.gitbook/assets/Interoperabilità nuovo layout.png" alt=""><figcaption><p>Schermata di selezione prodotto sulla Piattaforma Area Riservata (Self Care).</p></figcaption></figure>

All'apertura della modale, mi viene chiesto se intendo operare sull'ambiente di collaudo o produzione. Sceglierò quello di mio interesse. Verrò quindi rimandato a PDND Interoperabilità nell'ambiente da me richiesto.

<figure><img src="../.gitbook/assets/interop collaudo.png" alt=""><figcaption><p>Schermata di selezione ambiente, dopo aver selezionato il prodotto, sulla Piattaforma Area Riservata (Self Care).</p></figcaption></figure>

{% hint style="info" %}
Se su Interoperabilità produzione ho il ruolo di Amministratore, automaticamente anche nell'ambiente di collaudo avrò lo stesso ruolo.
{% endhint %}

## Sono un operatore API / operatore di sicurezza, come faccio ad entrare nell'ambiente di collaudo?

Come operatore API o operatore di sicurezza devo farmi abilitare dall'amministratore per entrare nell'ambiente, altrimenti una volta effettuato il login con SPID, selezionato l'ente di riferimento e scelto il prodotto Interoperabilità, verrò rimandato automaticamente all'ambiente di produzione.

Il mio amministratore, una volta entrato su PDND Interoperabilità nell'ambiente di produzione o dal back office di Selfcare, deve quindi andare su Utenti e selezionare Aggiungi Utente. Si aprirà così un form da compilare con i dati dell'operatore da abilitare all'ambiente di collaudo.

<figure><img src="../.gitbook/assets/doppio ambiente interop + collaudo.png" alt=""><figcaption><p>Nella sezione Utenti è presente una distinzione tra l'ambiente Interoperabilità produzione e Interoperabilità collaudo, bisogna fare attenzione in quale ambiente si inserisce la nuova utenza</p></figcaption></figure>

<figure><img src="../.gitbook/assets/collaudo aggiungi utente.png" alt=""><figcaption><p>Come appare la schermata di aggiunta utente dove si può scegliere il prodotto per cui si sta aggiungendo la nuova utenza</p></figcaption></figure>

Nell'ambiente di collaudo è possibile nominare amministratore anche l'utente che in produzione ha il ruolo di operatore, in quanto:

* &#x20;i due ambienti non interferiscono tra loro;
* è possibile fare tutti i test per valutare l'integrazione del mio ente con PDND Interoperabilità;
* l'operatore può reperire tutte le informazioni necessarie per abilitare il proprio amministratore per operare poi nell'ambiente di produzione.

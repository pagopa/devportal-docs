---
description: >-
  Questa funzionalità consente al PT di associare alla propria stazione un ente
  che ne abbia fatto richiesta. Tramite tale stazione, l'ente potrà connettersi
  al Nodo dei Pagamenti PagoPA.
---

# Associazione\Eliminazione\Modifica di un EC alla Stazione

{% hint style="warning" %}
Nota: qualora il _**Partner Tecnologico**_ volesse associare un EC ad una Stazione è necessario che l'EC abbia completato la fase di [registrazione al nodo dei pagamenti](../registrazione-al-nodo-dei-pagamenti-pagopa.md). In caso contrario otterrà un errore e non potrà procedere con l'associazione. Di seguito l'esempio di errore.
{% endhint %}

<figure><img src="../../../.gitbook/assets/Screenshot 2024-01-29 alle 14.51.20 (2).png" alt=""><figcaption><p>Errore Ente non registrato al nodo</p></figcaption></figure>

## Sezione Stazione: Associazione

L'utente **cliccando** sui **3 puntini** accanto lo Stato **"Attivo**", visualizzerà oltre alle voci "Gestisci Stazioni" e "Duplica", anche la voce **"Gestisci EC"** che gli consente di accedere alla _Pagina Gestione EC_ da cui potrà avviare tutte le azioni di gestione degli EC associati a quella stazione.

<figure><img src="../../../.gitbook/assets/image (30).png" alt=""><figcaption><p><em>Pagina Vista Stazioni - tabella elenco stazioni - menu stato Attivo</em></p></figcaption></figure>

Selezionando la voce **"Gestisci EC"**, l'utente può accedere alla _Pagina "Gestione  EC"._ Tale Pagina è vuota nel caso in cui il PT non ha ancora associato alcun EC a quella stazione.

<figure><img src="../../../.gitbook/assets/image (34).png" alt=""><figcaption><p><em>Pagina Gestione EC vuota</em></p></figcaption></figure>

Nel caso in cui il PT abbia già **associato EC alla stazione**, l'utente nella suddetta _Pagina_ visualizzerà l'elenco di questi sotto forma di tabella:&#x20;

* Nome EC: Ragione sociale
* Codice Fiscale
* Auxdigit
* Segregation code
* Application code
* Broadcast: Attivo/Non attivo
* Archivio Centralizzato Avvisi (maggiori info in [https://docs.pagopa.it/sanp/ente-creditore/modalita-dintegrazione/integrazione-tramite-api-sincrone#archivio-centralizzato-avvisi](https://docs.pagopa.it/sanp/ente-creditore/modalita-dintegrazione/integrazione-tramite-api-sincrone#archivio-centralizzato-avvisi))
* StandIN (maggiori info in [https://docs.pagopa.it/sanp/specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/stand-in#gestione-degli-avvisi-di-pagamento-pagati-in-stand-in-nel-caso-di-conferimento-allaca-tramite-la-pac](https://docs.pagopa.it/sanp/specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/stand-in#gestione-degli-avvisi-di-pagamento-pagati-in-stand-in-nel-caso-di-conferimento-allaca-tramite-la-pac))

<figure><img src="../../../.gitbook/assets/Screenshot 2024-01-23 alle 17.35.07.png" alt=""><figcaption><p><em>Pagina Gestione EC - tabella lista EC</em></p></figcaption></figure>

Dalla pagina Gestione EC è possibile associare alla stazione un EC **cliccando** sul tasto  **"+ Associa EC".**

A questo punto l'utente potrà **accedere** alla pagina **"Associa EC"** nella quale dovrà andare ad inserire i dati necessari per l'associazione.

<figure><img src="../../../.gitbook/assets/image (219).png" alt=""><figcaption></figcaption></figure>

In particolare l'utente è tenuto a **specificare** i seguenti dati:

* **Ente da associare**: barra di ricerca all'interno della quale l'utente potrà selezionare, tra tutti gli enti che lo hanno scelto come intermediario, quello che intende associare alla stazione.&#x20;

{% hint style="info" %}
E' possibile cercare l'EC da associare sia mediante ragione sociale che per codice fiscale.
{% endhint %}

* **Parametri di associazione**: aux digit già precompilato e non editabile; codice segregazione da scegliere tra quelli disponibili dall'apposito menu a tendina

{% hint style="info" %}
Per maggiori info fare riferimento a [https://docs.pagopa.it/saci/specifiche-attuative-dei-codici-identificativi-di-versamento-riversamento-e-rendicontazione/generazione-dellidentificativo-univoco-di-versamento](https://docs.pagopa.it/saci/specifiche-attuative-dei-codici-identificativi-di-versamento-riversamento-e-rendicontazione/generazione-dellidentificativo-univoco-di-versamento)
{% endhint %}

* **Broadcast**: flag attraverso cui è possibile impostarlo come attivo o disattivo.
*   Flag **Archivio Centralizzato Avvisi:** campo SI / NO (default SI) che serve a specificare se l'ente può inviare le posizioni debitorie nell'ACA per permettere la continuità operativa (StandIN) in caso di malfunzionamenti della stazione.  Si ricorda infatti che nel caso in cui i dati NON siano dall’EC comunicati ad ACA lo Stand In non potrà essere attivato. Pertanto, all'EC viene addebitato un importo fisso di 5 centesimi per ciascun pagamento, funzionale alla gestione del processo fuori da Stand In.

    Ai fini della fatturazione dello Stand In vale l’anagrafica delle EC fornita in sede di adesione alla piattaforma pagoPA ovvero quella risultante alla data del 1 gennaio 2025 in caso di aggiornamento della stessa anagrafica da parte dell’Ente antecedentemente a tale data.maggiori info in [https://docs.pagopa.it/sanp/ente-creditore/modalita-dintegrazione/integrazione-tramite-api-sincrone#archivio-centralizzato-avvisi](https://docs.pagopa.it/sanp/ente-creditore/modalita-dintegrazione/integrazione-tramite-api-sincrone#archivio-centralizzato-avvisi) e [https://docs.pagopa.it/sanp/specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/stand-in](https://docs.pagopa.it/sanp/specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/stand-in)
* Flag **StandIN:**  campo SI / NO che serve a determinare se possono essere gestiti per quell'EC / Stazione i pagamenti in StandIN. Maggiori info in [https://docs.pagopa.it/sanp/specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/stand-in](https://docs.pagopa.it/sanp/specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/stand-in)

Una volta **completati** tutti i **campi** l'utente potrà **finalizzare** l'operazione **cliccando** sul tasto "**Conferma**" abilitato e verrà reindirizzato alla pagina "Gestisci EC" in cui visualizzerà nell'apposita tabella l'EC appena associato.

<figure><img src="../../../.gitbook/assets/image (37).png" alt=""><figcaption><p><em>Pagina Gestione EC - tabella elenco EC</em></p></figcaption></figure>

### Dissocia EC

Nel caso in cui l'utente intenda procedere alla **dissociazione** dell'EC dalla stazione, potrà **cliccare** sull'apposito **menu a destra e selezionare "Dissocia EC".**

<figure><img src="../../../.gitbook/assets/image (220).png" alt=""><figcaption></figcaption></figure>

Una volta **cliccato**, l'utente visualizzerà il **pop up** in cui gli viene chiesto di **confermare** la **scelta** di volere **dissociare** l'EC dalla stazione.

<figure><img src="../../../.gitbook/assets/image (39).png" alt=""><figcaption><p> <em>Pop up Conferma dissociazione</em></p></figcaption></figure>

Una volta aver cliccato su "Conferma" l'utente verrà reindirizzato alla pagina "Gestisci EC" e visualizzerà la notifica di conferma "Operazione completata con successo".

<figure><img src="../../../.gitbook/assets/image (221).png" alt=""><figcaption></figcaption></figure>

### Modifica EC

Nel caso in cui l'utente intenda procedere alla **modifica di alcuni campi** dell'EC dalla stazione, potrà **cliccare** sull'apposito **menu Modifica** presente all'interno della tabella per ciascun EC associato.

<figure><img src="../../../.gitbook/assets/image (222).png" alt=""><figcaption></figcaption></figure>

I campi che possono essere modificati sono i seguenti:

* **Broadcast**
* **Archivio Centralizzato Avvisi** (maggiori info nella sezione di sopra)
* **StandIN** (maggiori info nella sezione di sopra)

<figure><img src="../../../.gitbook/assets/image (223).png" alt=""><figcaption></figcaption></figure>

Una volta aver cliccato su "Conferma" l'utente verrà reindirizzato alla pagina "Gestisci EC" e visualizzerà la notifica di conferma "Operazione completata con successo".

<figure><img src="../../../.gitbook/assets/image (224).png" alt=""><figcaption></figcaption></figure>

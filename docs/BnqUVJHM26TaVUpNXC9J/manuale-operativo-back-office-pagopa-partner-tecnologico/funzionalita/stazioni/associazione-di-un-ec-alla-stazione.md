---
description: >-
  Questa funzionalità consente al PT di associare alla propria stazione un ente
  che ne abbia fatto richiesta. Tramite tale stazione, l'ente potrà connettersi
  al Nodo dei Pagamenti PagoPA.
---

# Associazione di un EC alla Stazione

{% hint style="warning" %}
Nota: qualora il _**Partner Tecnologico**_ volesse associare un EC ad una Stazione è necessario che l'EC abbia completato la fase di [registrazione al nodo dei pagamenti](../registrazione-al-nodo-dei-pagamenti-pagopa.md). In caso contrario otterrà un errore e non potrà procedere con l'associazione.

![](<../../../.gitbook/assets/Screenshot 2024-01-29 alle 14.51.20 (2).png>)
{% endhint %}

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

<figure><img src="../../../.gitbook/assets/Screenshot 2024-01-23 alle 17.35.07.png" alt=""><figcaption><p><em>Pagina Gestione EC - tabella lista EC</em></p></figcaption></figure>

Dalla pagina Gestione EC è possibile associare alla stazione un EC **cliccando** sul tasto  **"+ Associa EC".**

A questo punto l'utente potrà **accedere** alla pagina **"Associa EC"** nella quale dovrà andare ad inserire i dati necessari per l'associazione.

<figure><img src="../../../.gitbook/assets/image (35).png" alt=""><figcaption><p><em>Associa intermediario - da completare</em></p></figcaption></figure>

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

<figure><img src="../../../.gitbook/assets/image (36).png" alt=""><figcaption><p><em>Associa intermediario - Conferma</em></p></figcaption></figure>

Una volta **completati** tutti i **campi** l'utente potrà **finalizzare** l'operazione **cliccando** sul tasto "**Conferma**" abilitato e verrà reindirizzato alla pagina "Gestisci EC" in cui visualizzerà nell'apposita tabella l'EC appena associato.

<figure><img src="../../../.gitbook/assets/image (37).png" alt=""><figcaption><p><em>Pagina Gestione EC - tabella elenco EC</em></p></figcaption></figure>

### Dissocia EC

Nel caso in cui l'utente intenda procedere alla **dissociazione** dell'EC dalla stazione, potrà **cliccare** sull'apposito **tastino rosso** presente all'interno della tabella per ciascun EC associato.

<figure><img src="../../../.gitbook/assets/image (38).png" alt=""><figcaption><p><em>Pagina Gestione EC - tabella elenco EC - tasto dissocia</em></p></figcaption></figure>

Una volta **cliccato**, l'utente visualizzerà il **pop up** in cui gli viene chiesto di **confermare** la **scelta** di volere **dissociare** l'EC dalla stazione.

<figure><img src="../../../.gitbook/assets/image (39).png" alt=""><figcaption><p> <em>Pop up Conferma dissociazione</em></p></figcaption></figure>

Una volta aver cliccato su "Conferma" l'utente verrà reindirizzato alla pagina "Gestisci EC" e visualizzerà la notifica di conferma "EC dissociato con successo".

<figure><img src="../../../.gitbook/assets/image (40).png" alt=""><figcaption><p><em>Pagina Gestione EC - tabella elenco EC - Ec dissociato con successo</em></p></figcaption></figure>






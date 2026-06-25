# Locazione locali e impianti comunali

Erogare il servizio tramite l’app IO permette agli enti di:

* fornire alle cittadine e ai cittadini un riferimento per la ricezione delle comunicazioni riguardanti il noleggio di beni mobili comunali, e la concessione e locazione di immobili e impianti comunali;
* aggiornare e monitorare promemoria, pagamenti e scadenze per i servizi offerti.

[**Scopri tutti i benefici di integrarsi con IO →**](https://app.gitbook.com/s/xWONfJmawghGo2ekuaKh/cose-io-e-qual-e-il-suo-obiettivo#perche-integrarsi-con-io)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Locazione locali e impianti comunali</td></tr><tr><td><strong>Argomento</strong></td><td>Suolo, spazi e beni pubblici</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda la concessione e la locazione di locali e impianti di proprietà del Comune.</p><p>Tramite IO potrai:</p><ul><li>ricevere comunicazioni e aggiornamenti;</li><li>ricevere avvisi di pagamento per il canone di locazione e pagarli in app;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Vai al servizio</td></tr></tbody></table>

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/image (138).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Locazione locali e impianti comunali</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio può valutare quali e quanti messaggi inviare in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

## Noleggio beni mobili

### Presentazione della richiesta di noleggio

<details>

<summary>Richiesta di noleggio: integrazione documentazione</summary>

{% include "../../0OMsoqOg9GiJ2xusVHM2/.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Richiesta di integrazione

🗒 **Testo del messaggio**:

Per elaborare la tua richiesta di noleggio di `<nome bene mobile>` abbiamo bisogno di ricevere entro il `<gg/mm/aaaa>` altri documenti.

Consulta il riepilogo della domanda, \[visita questo sito]\(URL).

**🪄 Pulsante**: Aggiungi documenti

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di noleggio di un bene mobile.

**Quando inviarlo**: Quando l’ente ha bisogno di ulteriori documenti per l’elaborazione della richiesta.

**User Story**: Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia richiesta.

</details>

<details>

<summary>Richiesta di noleggio: accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta è stata accolta

🗒 **Testo del messaggio**:

La tua richiesta di noleggio di `<nome bene mobile>` è stata accolta.

Potrai usufruirne dal `<gg/mm/aaaa>` fino al `<gg/mm/aaaa>`.

Il canone sarà di <00,00> € ogni `<periodo di tempo>`.

\[Inserire qui eventuali ulteriori disposizioni riguardo all’utilizzo del bene, da compilare a cura e responsabilità dell'ente]

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di noleggio di un bene mobile.

**Quando inviarlo**: Quando l’ente accoglie la richiesta.

**User Story**: Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia richiesta.

</details>

<details>

<summary>Richiesta di noleggio: non accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta non è stata accolta

🗒 **Testo del messaggio**:

La tua richiesta di noleggio di `<nome bene mobile>` non è stata accolta.

Per maggiori informazioni, contatta `<denominazione ufficio>` tramite `<canale>` oppure \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di noleggio di un bene mobile.

**Quando inviarlo**: Quando l’ente rigetta la richiesta per inidoneità o altre ragioni.

**User story**: Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia richiesta.

</details>

### Pagamento canone

<details>

<summary>Avviso di pagamento spese di servizio</summary>

{% include "../../0OMsoqOg9GiJ2xusVHM2/.gitbook/includes/promemoria-di-pagamento.md" %}

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**:

C'è un avviso da pagare intestato a `<nome>` `<cognome>` e relativo a `<causale>`.

**Devi pagare:** <00,00> €

**Entro il:** `<gg/mm/aaaa>`

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Se vuoi hai tempo fino al `<gg/mm/aaaa>` per rinunciare alla `<concessione/locazione>`.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Al cittadino che ha fatto domanda di concessione o locazione.

**Quando inviarlo**: Quando è richiesto il pagamento del servizio.

**User story**: Come cittadino voglio ricevere comunicazione quando è possibile effettuare i pagamenti.

</details>

{% include "../../0OMsoqOg9GiJ2xusVHM2/.gitbook/includes/banner-promemoria-automatici.md" %}

<details>

<summary>Avviso di pagamento spese di servizio: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio**:

Il tuo pagamento del canone per `<descrizione noleggio/concessione/locazione>` sta per scadere.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Al cittadino che ha fatto domanda di concessione o locazione.

**Quando inviarlo**: Quando il pagamento è prossimo alla scadenza.

**User story**: Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

***

## Locazione di immobili

### Presentazione richiesta

<details>

<summary>Richiesta di locazione immobili: integrazione documentazione</summary>

**🖋 Titolo del messaggio:** Richiesta di integrazione

🗒 **Testo del messaggio**:

Per elaborare la tua richiesta di locazione di `<nome bene immobile>` abbiamo bisogno di ricevere entro il `<gg/mm/aaaa>` altri documenti.

Per consultare il riepilogo della domanda, \[visita questo sito]\(URL).

**🪄 Pulsante**: Aggiungi documenti

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di locazione di un bene immobile.

**Quando inviarlo**: Quando l’ente ha bisogno di ulteriori documenti per l’elaborazione della richiesta.

**User Story**: Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia richiesta.

</details>

<details>

<summary>Richiesta di locazione immobili: accolta</summary>

r**🖋 Titolo del messaggio:** La tua richiesta è stata accolta

🗒 **Testo del messaggio**:

La tua richiesta di locazione di `<nome bene immobile>` è stata accolta.

Potrai usufruirne dal `<gg/mm/aaaa>` fino al `<gg/mm/aaaa>`.

Il canone sarà di <00,00> € ogni `<periodo di tempo>`.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di locazione di un bene immobile.

**Quando inviarlo**: Quando l’ente accoglie la richiesta.

**User Story**: Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia richiesta.

</details>

<details>

<summary>Richiesta di locazione immobili: non accolta</summary>

**🖋 Titolo del messaggio:** La tua richiesta non è stata accolta

🗒 **Testo del messaggio**:

La tua richiesta di locazione di `<nome bene immobile>` non è stata accolta.

Per maggiori informazioni, contatta `<denominazione ufficio>` tramite `<canale>` oppure \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di locazione di un bene immobile.

**Quando inviarlo**: Quando l’ente rigetta la richiesta per inidoneità o altre ragioni.

**User story**: Come cittadino voglio ricevere aggiornamenti sullo stato di avanzamento della mia richiesta.

</details>

### Revoca

<details>

<summary>Revoca della concessione o locazione</summary>

**🖋 Titolo del messaggio:** Revoca della `<concessione/locazione>` per `<immobile/impianto>`

🗒 **Testo del messaggio**:

La `<concessione/locazione>` per `<l’immobile/l’impianto>` `<nome del bene>` in `<indirizzo>` è stata revocata.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno ricevuto la concessione o locazione di un immobile o impianto.

**Quando inviarlo**: Quando l’ente revoca la concessione o locazione per cause di forza maggiore o altra motivazione.

**User story**: Come cittadino voglio ricevere comunicazioni sullo stato della concessione o locazione.

</details>

### Richiesta di rinuncia

<details>

<summary>Rinuncia effettuata fuori termine</summary>

{% include "../../0OMsoqOg9GiJ2xusVHM2/.gitbook/includes/promemoria-di-pagamento.md" %}

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**:

C'è un avviso da pagare intestato a `<nome e cognome>` e relativo a `<causale>`. 

**Devi pagare:** <00,00> €

**Entro il:** `<gg/mm/aaaa>`

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell’ente creditore.

Se hai già provveduto a pagare l'avviso ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante**: Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di rinuncia alla concessione o locazione di un immobile o impianto del comune

**Quando inviarlo**: Quando il cittadino decide di rinunciare alla concessione o locazione oltre il tempo massimo previsto

**User story**: Come cittadino voglio ricevere comunicazioni sullo stato della mia richiesta di rinuncia

</details>

<details>

<summary>Richiesta di rinuncia: accolta</summary>

**🖋 Titolo del messaggio:** Hai rinunciato alla `<concessione/locazione>`

🗒 **Testo del messaggio**:

La tua richiesta di rinuncia alla `<concessione/locazione>` per `<l’immobile/l’impianto>``<nome del bene>` in `<indirizzo>` è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno fatto richiesta di rinuncia alla concessione o locazione di un immobile o impianto del comune.

**Quando inviarlo**: Quando l’ente accoglie la richiesta di rinuncia.

**User story**: Come cittadino voglio ricevere comunicazioni sullo stato della mia richiesta di rinuncia.

</details>

### Rimborso

<details>

<summary>Avvenuto rimborso</summary>

**🖋 Titolo del messaggio:** Il tuo rimborso è in arrivo

🗒 **Testo del messaggio**:

Il `<gg/mm/aaaa>` abbiamo emesso un rimborso a seguito della tua rinuncia alla `<concessione/locazione>` per `<l’immobile/l’impianto>` `<nome del bene>` in `<indirizzo>`.

**Ti abbiamo rimborsato**: <00,00> €

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

**🪄 Pulsante**: Vai alla ricevuta

***

**Destinatari**: Tutti i cittadini residenti nell’area di azione geografica del servizio che hanno ricevuto la concessione o locazione di un immobile o impianto

**Quando inviarlo**: Quanto il servizio viene interrotto per cause esterne al concessionario o locatario e il canone è già stato pagato

**User story**: Come cittadino voglio essere avvisato sullo stato del rimborso cui ho diritto

</details>

***

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:

{% file src="../.gitbook/assets/IO - Template servizi - Locazione locali e impianti comunali.xlsx" %}
{% endhint %}

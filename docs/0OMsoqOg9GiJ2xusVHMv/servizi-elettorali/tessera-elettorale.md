# Tessera elettorale

Erogare il servizio tramite l'app IO permette agli enti di:

* mandare comunicazioni sul rilascio e gestione delle tessere elettorali dei cittadini.

[**Scopri tutti i benefici di integrarsi con IO →** ](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo#perche-un-ente-dovrebbe-integrarsi-con-io)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Tessera elettorale</td></tr><tr><td><strong>Argomento</strong></td><td>Servizi elettorali</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio ti invia comunicazioni relative alla tessera elettorale.</p><p><br>Tramite IO potrai:</p><ul><li>richiedere la tessera elettorale;</li><li>ricevere aggiornamenti sul rilascio della tessera elettorale;</li><li>ricevere altre comunicazioni.</li></ul></td></tr><tr><td><strong>Pulsante</strong></td><td>Scopri di più</td></tr></tbody></table>

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/image (26).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del servizio Tessera elettorale</strong></p></figcaption></figure>

## Messaggi del servizio&#x20;

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio, può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

### Richiedi tessera elettorale

<details>

<summary>Richiedi la tua tessera elettorale</summary>

**🖋 Titolo del messaggio:** Richiedi la tua tessera elettorale

🗒 **Testo del messaggio**:&#x20;

Controlla se la tua tessera elettorale è valida per `<le elezioni o il referendum>` del `<gg/mm/aaaa>`.

Puoi richiedere una nuova tessera o un suo aggiornamento in caso di smarrimento, furto, esaurimento spazi per la certificazione o per cambio indirizzo di domicilio o residenza. Per farlo, `<modalità di richiesta>`.&#x20;

Per ulteriori informazioni, \[visita questo sito]\(URL).&#x20;

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che possono votare.

**Quando inviarlo**: Quando i cittadini sono chiamati al voto&#x20;

**User story**: Come cittadino voglio sapere come richiedere una tessera elettorale

</details>

<details>

<summary>Conferma rilascio tessera elettorale</summary>

**🖋 Titolo del messaggio:** La tua tessera elettorale è disponibile.

🗒 **Testo del messaggio**:&#x20;

Il `<gg/mm/aaaa>` è stata rilasciata la tessera elettorale `<modalità di rilascio>`.

Per ulteriori informazioni, (visita questo sito)\[URL).&#x20;

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno richiesto una tessera elettorale

**Quando inviarlo**: Quando la tessera elettorale è rilasciata&#x20;

**User story**: Come cittadino voglio ricevere notifica quando la mia tessera elettorale è stata rilasciata

</details>

### Recapito tessera elettorale

<details>

<summary>Recapito tessera elettorale</summary>

**🖋 Titolo del messaggio:** Recapito tessera elettorale

🗒 **Testo del messaggio**:&#x20;

Il `<gg/mm/aaaa>` è stata rilasciata una tessera elettorale a tuo nome. È stata inviata per posta al tuo indirizzo di residenza.&#x20;

Per ulteriori informazioni, \[visita questo sito]\(URL).&#x20;

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio neo maggiorenni o nuovi residenti&#x20;

**Quando inviarlo**: Quando un cittadino compie 18 anni o cambia residenza&#x20;

**User story**: Come cittadino voglio ricevere la mia tessera elettorale in tempo per le votazioni

</details>

***

{% hint style="success" %}
**Lo sapevi?**\
IO è integrata con SEND - Servizio Notifiche Digitale, per l'invio di comunicazioni a valore legale.

[**Scopri di più su SEND**](https://notifichedigitali.pagopa.it/) [**->**](https://www.pagopa.it/it/prodotti-e-servizi/piattaforma-notifiche-digitali)
{% endhint %}

{% hint style="info" %}
**Un modello da personalizzare**

Le procedure di questo servizio variano molto da ente a ente. Consigliamo di utilizzare i testi dei messaggi come un punto di partenza e di aggiungere ulteriori informazioni.

Il modello è un esempio che non ha carattere vincolante per l’ente e sul quale la Società declina qualsiasi responsabilità, avendo valore esemplificativo.

Puoi copiare i testi dei messaggi da personalizzare da questo documento:&#x20;

{% file src="../.gitbook/assets/IO - Template servizi - Tessera elettorale.xlsx" %}
{% endhint %}

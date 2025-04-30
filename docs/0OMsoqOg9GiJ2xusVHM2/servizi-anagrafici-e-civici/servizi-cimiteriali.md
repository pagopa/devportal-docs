# Servizi cimiteriali

Erogare il servizio tramite l'app IO permette agli enti di:

* comunicare aggiornamenti per pratiche richiesta dal cittadino relative a servizi cimiteriali e concessioni con tempestività e sicurezza;

[**Scopri tutti i benefici di integrarsi con IO →**](https://docs.pagopa.it/manuale-servizi/lapp-io/cose-io-e-qual-e-il-suo-obiettivo)

## Scheda servizio <a href="#scheda-servizio" id="scheda-servizio"></a>

<table data-header-hidden><thead><tr><th width="373"></th><th></th></tr></thead><tbody><tr><td><strong>Nome servizio</strong></td><td>Servizi cimiteriali</td></tr><tr><td><strong>Argomento</strong></td><td>Servizi anagrafici e civici</td></tr><tr><td><strong>Descrizione del servizio</strong></td><td><p>Il servizio riguarda le comunicazioni relative ai servizi cimiteriali.</p><p><br>Tramite IO potrai:</p><ul><li>ricevere comunicazioni sulla richiesta di cremazione;</li><li>ricevere aggiornamenti sulla richiesta per la dispersione delle ceneri;</li><li>ricevere comunicazioni sulle concessioni per sepolture;</li><li>ricevere comunicazioni sulle esumazioni programmate; -ricevere comunicazioni e avvisi di pagamento per la gestione delle lampade votive;</li><li>ricevere avvisi di pagamento e pagarli in app;</li><li>ricevere altre comunicazioni.</li></ul></td></tr></tbody></table>

## Ciclo di vita del servizio

<figure><img src="../.gitbook/assets/image (105).png" alt=""><figcaption><p><strong>Ciclo di vita ed eventi del Servizi cimiteriali</strong></p></figcaption></figure>

## Messaggi del servizio

{% hint style="success" %}
**Il servizio ideale**

L'insieme di tutti i messaggi rappresenta il servizio ideale. L'ente che intende erogare questo servizio, può valutare quali e quanti messaggi inviare, in base alle proprie possibilità di integrazione. L'obiettivo finale rimane quello di inviarli tutti, rilasciando in maniera iterativa versioni del servizio sempre più complete.
{% endhint %}

{% hint style="warning" %}
**Trattamento dati sensibili**

I messaggi che questo servizio invia al cittadino spesso includono dati sensibili come lo stato delle pratiche relative a richieste per servizi cimiteriali. Per questo, il servizio è considerato come sensibile e richiede l'utilizzo dell'attributo `require_secure_channels` la cui integrazione è spiegata all'interno della [Guida Tecnica all'Integrazione dei Servizi.](https://app.gitbook.com/s/mzwjFv2XaE1mjbz7I8gt/funzionalita/pubblicare-un-servizio/dati-obbligatori/attributi#require_secure_channels)

L'utilizzo di questo attributo permette di anonimizzare le notifiche push e mail, se previste dalle impostazioni del cittadino.\
\
Secondo quanto disposto dal paragrafo [7.3 delle Linee Guida di IO](https://www.agid.gov.it/sites/default/files/repository_files/lg_punto_accesso_telematico_servizi_pa_3112021.pdf), **non è ammesso** includere nel titolo dati sensibili, mentre deve essere **limitato** al minimo l'utilizzo all'interno del corpo del messaggio,

Tra i dati sensibili rientrano, ad esempio:

* Nome della persona defunta;
* Pratiche di cremazione, procedure di sepoltura.
{% endhint %}

## **Cremazione e sepoltura**

### Richiesta cremazione

<details>

<summary>Richiesta per cremazione: accolta</summary>

**🖋 Titolo del messaggio:** Aggiornamenti sulle tue richieste

🗒 **Testo del messaggio**:

La tua richiesta \<nome servizio> è stata accolta. Per maggiori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno effettuato una richiesta per la pratica di cremazione.

**Quando inviarlo**: Quando l'ente accoglie la richiesta.

**User story**: Come cittadino voglio ricevere aggiornamenti sull'esito della mia richiesta.

</details>

<details>

<summary>Richiesta per cremazione: non accolta</summary>

**🖋 Titolo del messaggio:** Aggiornamenti sulle tue richieste

🗒 **Testo del messaggio**:

La tua richiesta per \<nome servizio> non è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno effettuato una richiesta per la pratica di cremazione.

**Quando inviarlo**: Quando l’ente non accoglie la richiesta.

**User story**: Come cittadino voglio ricevere aggiornamenti sullo stato della mia richiesta.

</details>

<details>

<summary>Comunicazioni tempistiche</summary>

**🖋 Titolo del messaggio:** Comunicazione tempistiche

🗒 **Testo del messaggio**:

In seguito alla tua richiesta per \<nome servizio> accolta in data \<gg/mm/aaaa>, ti comunichiamo l'appuntamento previsto per \<gg/mm/aaaa> alle hh:mm.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno effettuato una richiesta per la pratica di cremazione.

**Quando inviarlo**: Quando l'appuntamento è stato programmato

**User story**: Come cittadino voglio ricevere comunicazione sull'appuntamento ricevuto

</details>

<details>

<summary>Avviso di pagamento cremazione</summary>

{% include "../.gitbook/includes/promemoria-di-pagamento.md" %}

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**:

C'è un avviso da pagare intestato a \<nome e cognome> e relativo a \<causale>.

**Devi pagare:** <00,00> €

**Entro il:** \<gg/mm/aaaa>

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno effettuato una richiesta per la pratica di cremazione.

**Quando inviarlo:** Quando è richiesto il pagamento del servizio.

**User story:** Come cittadino voglio ricevere comunicazione quando è possibile effettuare i pagamenti

</details>

{% include "../.gitbook/includes/banner-promemoria-automatici.md" %}

<details>

<summary>Avviso di pagamento cremazione: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio**:

Il tuo pagamento per \<servizio> sta per scadere.

Se hai già provveduto a pagare l’avviso ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari:** Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno effettuato una richiesta per la pratica di cremazione.

**Quando inviarlo:** Quando il pagamento è prossimo alla scadenza

**User story:** Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

{% hint style="info" %}
**Mancato pagamento**

Il seguente messaggio serve a sensibilizzare il cittadino per il mancato pagamento ma non costituisce in alcun modo un avviso a valore legale (i.e. notifica)
{% endhint %}

<details>

<summary>Avviso di pagamento cremazione: mancato pagamento</summary>

**🖋 Titolo del messaggio:** Pagamento non effettuato

🗒 **Testo del messaggio**:

Il tuo pagamento per \<servizio> è scaduto il \<gg/mm/aaaa>.

Se hai già provveduto a pagare l’avviso ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno effettuato una richiesta per la pratica di cremazione.

**Quando inviarlo**: Quando il pagamento non è stato effettuato entro il termine.

**User story**: Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

### Richiesta dispersione ceneri

<details>

<summary>Richiesta per dispersione delle ceneri: accolta</summary>

**🖋 Titolo del messaggio:** Aggiornamenti sulle tue richieste

🗒 **Testo del messaggio**:

La tua richiesta per \<nome servizio> è stata accolta.

Per maggiori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno effettuato una richiesta per la dispersione delle ceneri.

**Quando inviarlo**: Quando l'ente accoglie la richiesta.

**User story**: Come cittadino voglio ricevere aggiornamenti sull'esito della mia richiesta.

</details>

<details>

<summary>Richiesta per dispersione delle ceneri: non accolta</summary>

**🖋 Titolo del messaggio:** Aggiornamenti sulle tue richieste

🗒 **Testo del messaggio**:

La tua richiesta per \<nome servizio> non è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno effettuato una richiesta per la dispersione delle ceneri.

**Quando inviarlo**: Quando l’ente non accoglie la richiesta.

**User story**: Come cittadino voglio ricevere aggiornamenti sull'esito mia richiesta.

</details>

<details>

<summary>Comunicazioni tempistiche</summary>

**🖋 Titolo del messaggio:** Comunicazione tempistiche

🗒 **Testo del messaggio**:

In seguito alla tua richiesta per \<nome servizio> accolta in data \<gg/mm/aaaa>, ti comunichiamo l'appuntamento previsto per \<gg/mm/aaaa> alle \<hh:mm>.

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno effettuato una richiesta per la dispersione delle ceneri.

**Quando inviarlo**: Quando l'appuntamento è stato programmato

**User story**: Come cittadino voglio ricevere comunicazione sull'appuntamento ricevuto

</details>

<details>

<summary>Avviso di pagamento dispersione delle ceneri</summary>

{% include "../.gitbook/includes/promemoria-di-pagamento.md" %}

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**:

C'è un avviso da pagare intestato a \<nome e cognome> e relativo a \<causale>.

**Devi pagare:** <00,00> €

**Entro il:** \<gg/mm/aaaa>

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno effettuato una richiesta per la dispersione delle ceneri.

**Quando inviarlo:** Quando è richiesto il pagamento del servizio.

**User story:** Come cittadino voglio ricevere comunicazione quando è possibile effettuare i pagamenti

</details>

{% include "../.gitbook/includes/banner-promemoria-automatici.md" %}

<details>

<summary>Avviso di pagamento dispersione delle ceneri: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio**:

Il tuo pagamento per \<nome servizio> sta per scadere.

Se hai già provveduto a pagare l’avviso ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari:** Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno effettuato una richiesta per la dispersione delle ceneri.

**Quando inviarlo:** Quando il pagamento è prossimo alla scadenza

**User story:** Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

{% hint style="info" %}
**Mancato pagamento**

Il seguente messaggio serve a sensibilizzare il cittadino per il mancato pagamento ma non costituisce in alcun modo un avviso a valore legale (i.e. notifica).
{% endhint %}

<details>

<summary>Avviso di pagamento dispersione delle ceneri: mancato pagamento</summary>

**🖋 Titolo del messaggio:** Pagamento non effettuato

🗒 **Testo del messaggio**:

Il tuo pagamento per \<nome servizio> è scaduto il \<gg/mm/aaaa>.

Se hai già provveduto a pagare l’avviso ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno effettuato una richiesta per la dispersione delle ceneri.

**Quando inviarlo**: Quando il pagamento non è stato effettuato entro il termine.

**User story**: Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

### Concessione sepoltura

<details>

<summary>Richiesta per concessione cimiteriale: accolta</summary>

**🖋 Titolo del messaggio:** Aggiornamenti sulle tue richieste

🗒 **Testo del messaggio**:

La tua richiesta per la concessione a tempo determinato di \<specifica concessione cimiteriale> è stata accolta.

Il rilascio della concessione è subordinato al pagamento del canone per cui ti arriverà un messaggio in app con l'avviso di pagamento.

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Per ulteriori informazioni sulla durata della concessione, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizi che hanno richiesto una concessione cimiteriale.

**Quando inviarlo**: Quando l'ente accoglie la richiesta.

**User story**: Come cittadino voglio ricevere aggiornamenti sull'esito della mia richiesta.

</details>

<details>

<summary>Avviso di pagamento concessione cimiteriale</summary>

{% include "../.gitbook/includes/promemoria-di-pagamento.md" %}

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**:

C'è un avviso da pagare intestato a \<nome e cognome> e relativo a \<causale>.

**Devi pagare:** <00,00> €

**Entro il:** \<gg/mm/aaaa>

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

\[Se previsto] È possibile richiedere la domiciliazione delle rette direttamente sul tuo conto corrente. Per maggiori informazioni, \[visita questo sito]\(URL).

Se hai già provveduto a pagare l'avviso, ignora questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno IO e hanno effettuato una richiesta per una concessione cimiteriale.

**Quando inviarlo:** Quando è richiesto il pagamento del servizio.

**User story:** Come cittadino voglio ricevere comunicazione quando è possibile effettuare i pagamenti

</details>

{% include "../.gitbook/includes/banner-promemoria-automatici.md" %}

<details>

<summary>Avviso di pagamento concessione cimiteriale: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio**:

Il tuo pagamento per \<servizio> sta per scadere.

Se hai già provveduto a pagare l’avviso o se hai richiesto la domiciliazione delle rette sul conto corrente, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari:** Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno effettuato una richiesta per una concessione cimiteriale.

**Quando inviarlo:** Quando il pagamento è prossimo alla scadenza

**User story:** Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

{% hint style="info" %}
**Mancato pagamento**

Il seguente messaggio serve a sensibilizzare il cittadino per il mancato pagamento ma non costituisce in alcun modo un avviso a valore legale (i.e. notifica).
{% endhint %}

<details>

<summary>Avviso di pagamento concessione cimiteriale: mancato pagamento</summary>

**🖋 Titolo del messaggio:** Pagamento non effettuato

🗒 **Testo del messaggio**:

Il tuo pagamento per \<nome servizio> è scaduto il \<gg/mm/aaaa>.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno IO e hanno effettuato una richiesta per una concessione cimiteriale.

**Quando inviarlo**: Quando il pagamento non è stato effettuato entro il termine.

**User story**: Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

### Richiesta proroga concessione

<details>

<summary>Concessione cimiteriale: in scadenza</summary>

**🖋 Titolo del messaggio:** Aggiornamenti sulle tue richieste

🗒 **Testo del messaggio**:

La tua concessione per \<specificare dettagli della concessione> è prossima alla scadenza in data \<gg/mm/aaaa>.

Se desideri prorogare la tua concessione, scopri come \[visitando questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno una concessione cimiteriale in scadenza

**Quando inviarlo**: Quando la concessione è prossima alla scadenza.

**User story**: Come cittadino voglio ricevere un promemoria quando la mia concessione è in scadenza e conoscere come poterla prorogare.

</details>

<details>

<summary>Richiesta proroga concessione cimiteriale: accolta</summary>

**🖋 Titolo del messaggio:** Aggiornamenti sulle tue richieste

🗒 **Testo del messaggio**:

La tua richiesta per \<nome servizio> è stata accolta.

Per ulteriori informazioni sulla durata della concessione, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno effettuato una richiesta per una proroga di una concessione cimiteriale.

**Quando inviarlo**: Quando l’ente accoglie la richiesta.

**User story**: Come cittadino voglio ricevere aggiornamenti sullo stato della mia richiesta.

</details>

<details>

<summary>Richiesta proroga concessione cimiteriale: non accolta</summary>

**🖋 Titolo del messaggio:** Aggiornamenti sulle tue richieste

🗒 **Testo del messaggio**:

La tua richiesta per \<nome servizio> non è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno effettuato una richiesta per una proroga di una concessione cimiteriale.

**Quando inviarlo**: Quando l’ente non accoglie la richiesta.

**User story**: Come cittadino voglio ricevere aggiornamenti sullo stato della mia richiesta.

</details>

<details>

<summary>Avviso di pagamento proroga concessione cimiteriale</summary>

{% include "../.gitbook/includes/promemoria-di-pagamento.md" %}

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**:

C'è un avviso da pagare intestato a \<nome e cognome> e relativo a \<causale>.

**Devi pagare:** <00,00> €

**Entro il:** \<gg/mm/aaaa>

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

\[Se previsto] È possibile richiedere la domiciliazione delle rette direttamente sul tuo conto corrente. Per maggiori informazioni, \[visita questo sito]\(URL).

Se hai già pagato o se hai richiesto la domiciliazione sul conto corrente, ignora pure questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno IO e hanno effettuato una richiesta per una proroga di una concessione cimiteriale

**Quando inviarlo:** Quando è richiesto il pagamento del servizio.

**User story:** Come cittadino voglio ricevere comunicazione quando è possibile effettuare i pagamenti

</details>

{% include "../.gitbook/includes/banner-promemoria-automatici.md" %}

<details>

<summary>Avviso di pagamento proroga concessione cimiteriale: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio**:

Il tuo pagamento per \<nome servizio> sta per scadere.

Se hai già provveduto a pagare l’avviso o se hai richiesto la domiciliazione delle rette sul conto corrente, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari:** Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno effettuato una richiesta per una proroga di una concessione cimiteriale.

**Quando inviarlo:** Quando il pagamento è prossimo alla scadenza.

**User story:** Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

{% hint style="info" %}
**Mancato pagamento**

Il seguente messaggio serve a sensibilizzare il cittadino per il mancato pagamento ma non costituisce in alcun modo un avviso a valore legale (i.e. notifica).
{% endhint %}

<details>

<summary>Avviso di pagamento proroga concessione cimiteriale: mancato pagamento</summary>

**🖋 Titolo del messaggio:** Pagamento non effettuato

🗒 **Testo del messaggio**:

Il tuo pagamento per \<nome servizio> è scaduto il \<gg/mm/aaaa>.

Se hai già provveduto a pagare l’avviso, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno effettuato una richiesta per una proroga di una concessione cimiteriale

**Quando inviarlo**: Quando il pagamento non è stato effettuato entro il termine.

**User story**: Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

<details>

<summary>Concessione cimiteriale: scaduta</summary>

**🖋 Titolo del messaggio:** La tua concessione è scaduta

🗒 **Testo del messaggio**:

Ti informiamo che in data \<gg/mm/aaaa> la tua concessione per \<specificare dettagli della concessione> è scaduta.

Per ulteriori informazioni sulla durata della concessione, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno una concessione cimiteriale in scadenza e non hanno effettuato una richiesta per una proroga.

**Quando inviarlo**: Quando la concessione è scaduta

**User story**: Come cittadino voglio ricevere notifica quando la mia concessione è scaduta

</details>

## Gestione ordinaria e straordinaria

### Gestione illuminazione votiva

<details>

<summary>Richiesta allaccio/subentro illuminazione votiva: accolta</summary>

{% include "../.gitbook/includes/single-sign-on.md" %}

***

**🖋 Titolo del messaggio:** Aggiornamenti sulle tue richieste

🗒 **Testo del messaggio**:

La tua richiesta per \<nome servizio> è stata accolta.

La richiesta è subordinata a un pagamento per la pratica per cui ti arriverà un messaggio in app con l'avviso di pagamento.

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: Annulla richiesta

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno effettuato una richiesta di allaccio/subentro per illuminazione votiva.

**Quando inviarlo**: Quando l’ente accoglie la richiesta.

**User story**: Come cittadino voglio ricevere aggiornamenti sullo stato della mia richiesta.

</details>

<details>

<summary>Richiesta allaccio/subentro illuminazione votiva: non accolta</summary>

**🖋 Titolo del messaggio:** Aggiornamenti sulle tue richieste

🗒 **Testo del messaggio**:

La tua richiesta per \<nome servizio> non è stata accolta.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno effettuato una richiesta di allaccio/subentro per illuminazione votiva.

**Quando inviarlo**: Quando l’ente non accoglie la richiesta.

**User story**: Come cittadino voglio ricevere aggiornamenti sullo stato della mia richiesta.

</details>

<details>

<summary>Avviso di pagamento illuminazione votiva</summary>

{% include "../.gitbook/includes/promemoria-di-pagamento.md" %}

***

**🖋 Titolo del messaggio:** Hai un nuovo avviso di pagamento

🗒 **Testo del messaggio**:

C'è un avviso da pagare intestato a \<nome e cognome> e relativo a \<causale>.

**Devi pagare:** <00,00> €

**Entro il:** \<gg/mm/aaaa>

Puoi pagare direttamente in app premendo “Paga”, oppure tramite tutti i canali di pagamento della piattaforma pagoPA e le altre modalità di pagamento offerte dell'ente creditore.

\[Se previsto] È possibile richiedere la domiciliazione delle rette direttamente sul tuo conto corrente. Per maggiori informazioni, \[visita questo sito]\(URL).

Se hai già pagato o se hai richiesto la domiciliazione sul conto corrente, ignora pure questo messaggio.

Per maggiori informazioni o per richiedere assistenza, contattaci tramite i canali che trovi nella scheda servizio.

In fase di pagamento, se previsto dall'ente, l'importo riportato nel messaggio potrebbe subire variazioni.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno IO e hanno effettuato una richiesta per la pratica di cremazione.

**Quando inviarlo:** Quando è richiesto il pagamento del servizio.

**User story:** Come cittadino voglio ricevere comunicazione quando è possibile effettuare i pagamenti

</details>

{% include "../.gitbook/includes/banner-promemoria-automatici.md" %}

<details>

<summary>Avviso di pagamento illuminazione votiva: in scadenza</summary>

**🖋 Titolo del messaggio:** Hai un pagamento in scadenza

🗒 **Testo del messaggio**:

Il tuo pagamento per \<nome servizio> sta per scadere.

Se hai già provveduto a pagare l’avviso o se hai richiesto la domiciliazione delle rette sul conto corrente, ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari:** Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno effettuato una richiesta per la pratica di cremazione.

**Quando inviarlo:** Quando il pagamento è prossimo alla scadenza

**User story:** Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

{% hint style="info" %}
**Mancato pagamento**

Il seguente messaggio serve a sensibilizzare il cittadino per il mancato pagamento ma non costituisce in alcun modo un avviso a valore legale (i.e. notifica).
{% endhint %}

<details>

<summary>Avviso di pagamento illuminazione votiva: mancato pagamento</summary>

**🖋 Titolo del messaggio:** Pagamento non effettuato

🗒 **Testo del messaggio**:

Il tuo pagamento per \<nome servizio> è scaduto il \<gg/mm/aaaa>.

Se hai già provveduto a pagare l’avviso ignora questo messaggio.

**🪄 Pulsante:** Paga (inserito automaticamente dall'app se il messaggio prevede un avviso di pagamento pagoPA)

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno effettuato una richiesta per la pratica di cremazione.

**Quando inviarlo**: Quando il pagamento non è stato effettuato entro il termine.

**User story**: Come cittadino voglio ricevere un promemoria per i pagamenti in scadenza.

</details>

<details>

<summary>Conferma disdetta canone illuminazione votiva</summary>

**🖋 Titolo del messaggio:** Conferma disdetta servizio di luce votiva

🗒 **Testo del messaggio**:

La tua disdetta per il servizio \<nome servizio> è stata correttamente processata.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio che hanno un'utenza a carico per luci votive

**Quando inviarlo**: Quando la disdetta è stata proposta e accolta

**User story**: Come cittadino voglio ricevere notifica quando la pratica che ho richiesto è stata accolta

</details>

### Programmazione esumazione

<details>

<summary>Pubblicazione calendario esumazione</summary>

{% include "../.gitbook/includes/allegati.md" %}

***

**🖋 Titolo del messaggio:** Pubblicazione calendario delle esumazioni

🗒 **Testo del messaggio**:

È stato pubblicato il nuovo calendario delle esumazioni ordinarie per:

* Nome cimitero: \<nome>
* Indirizzo: \<indirizzo>
* Data: \<gg/mm/aaaa o periodo di tempo>

La famiglia dovrà incaricare un'impresa funebre per svolgere alcune attività.

Per ulteriori informazioni, \[visita questo sito]\(URL).

**🪄 Pulsante**: n/a

<mark style="color:blue;">**📎 Allegato:**</mark> \<modulo d'iscrizione>

***

**Destinatari**: Tutti i cittadini residenti nell’area geografica di azione del servizio, che hanno IO e che hanno un familiare nel cimitero in questione

**Quando inviarlo**: Quando il calendario è stato pubblicato

**User story**: Come cittadino voglio ricevere notifica della pubblicazione dei calendari per le esumazioni previste e cosa comportano

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

Puoi copiare i testi dei messaggi da personalizzare da questo documento:

{% file src="../.gitbook/assets/IO - Template servizi - Servizi cimiteriali (1).xlsx" %}
{% endhint %}

# Compilazione delle schede

Le schede servizio contengono la **descrizione** dello specifico servizio offerto dall’ente e i dati di **contatto** a disposizione dell’utenza per approfondire il contenuto del servizio o inoltrare specifiche domande. La scheda servizio può essere compilata per ciascun servizio all’interno del [back-office](https://developers.italia.it/it/io/), nei campi associati a ciascun servizio-chiave API.

#### Di seguito un ESEMPIO di scheda servizio: <a href="#_o6q8lhbtf5r3" id="_o6q8lhbtf5r3"></a>

![](../.gitbook/assets/0)

![](../.gitbook/assets/1)

### Campi obbligatori <a href="#_s4gp5hbiuxd1" id="_s4gp5hbiuxd1"></a>

Di seguito vengono elencati i campi **obbligatori** per la compilazione della scheda servizio, e alcune regole per la compilazione:

1. **service\_name:**\
   il nome del servizio, che indica agli utenti a quale ambito fanno riferimento le comunicazioni che riceve in app (es. tributi). Il nome del servizio viene mostrato come mittente del messaggio (insieme al nome dell’ente).
2. **organization\_name:**\
   il nome dell’ente che offre il servizio. Deve riportare il nome completo della pubblica amministrazione aderente, ad esempio “Comune di Varese” (non “Varese”).
3. **organization\_fiscal\_code:**\
   il codice fiscale dell’ente che eroga il servizio.
4. **privacy\_url**:\
   l’indirizzo web ove è pubblicata l’informativa privacy del servizio.
5. **description:**\
   la descrizione testuale in formato markdown che indica l’oggetto del servizio e chiarisce nel dettaglio cosa l’utenza può aspettarsi di ricevere tramite app IO (vedi tab 3 del [template](https://io.italia.it/assets/download/it/onboarding/210729\_io\_onboarding\_enti-template\_messaggi\_e\_servizi.xlsx)).
6. **contatti:**\
   almeno uno o più canali di contatto diretto a cui un utente può chiedere assistenza, a scelta tra: **phone, mail, pec, support\_url**
7. **service\_logo** e/o **organization\_logo**:\
   l’immagine in formato png 300x300 pixel (fondo bianco o trasparente) del logo del servizio e del logo dell’ente. Il logo dell’ente è obbligatorio, mentre il logo del servizio è di default uguale al logo dell’ente, ma può essere aggiunto come logo indipendente nei casi in cui il servizio abbia un logo diverso da quello dell’ente.
8. **service\_scope**:\
   l’area geografica di riferimento di un servizio può essere locale (local) o nazionale (national). Tutti gli enti che servono un territorio delimitato (regione, comune, distretto,...) - non corrispondente all’intera nazione - devono impostare i propri servizi con lo scope “local”.
9. **authorized\_cidrs**:\
   uno o più indirizzi IP separati da ; da cui provengono le chiamate al back-end di IO, per le relative chiavi API/servizio (ad esempio 192.168.10.11/32;172.16.30.24/32). Questo è un blocco di sicurezza che inibisce le chiamate provenienti da altri indirizzi IP, che cercano di operare per quei servizi.

### Campi facoltativi <a href="#_9pcrgk4kbjb6" id="_9pcrgk4kbjb6"></a>

In aggiunta ai campi obbligatori, sono disponibili alcuni campi aggiuntivi **facoltativi**:

1. **tos\_url:**\
   l’indirizzo web a cui l’utenza può rivolgersi per consultare i termini e condizioni del servizio (se pubblicati);
2. **address:**\
   l’indirizzo fisico dell’ufficio di riferimento per il servizio, utile se un utente ha necessità di chiedere maggiori informazioni recandosi presso uno sportello o inviando delle comunicazioni in formato analogico;
3. **app\_ios** e **app\_android**:\
   il link all’eventuale app che l’ente mette a disposizione su Apple Store e Google Play per offrire la stessa funzione o lo stesso servizio offerto tramite App IO
4. **web\_url:**\
   l’indirizzo web a cui l’ente mette a disposizione il medesimo servizio o maggiori informazioni relative al servizio.

{% hint style="warning" %}
**Importante!**\
Se il tuo servizio è stato già pubblicato ma non presenta tutti i campi obbligatori qui citati, lo troverai etichettato nel back-office con la scritta “**dati incompleti o incorretti**”: dovrai procedere all’inserimento dei campi mancanti per poter inoltrare la richiesta di pubblicazione del servizio.
{% endhint %}

![](../.gitbook/assets/2)

{% hint style="warning" %}
**Importante!**

App IO può essere un’ottima vetrina dei servizi digitali già messi a disposizione dall’ente e aiutare la pubblica amministrazione a far conoscere sito e app esistenti, compilando in modo completo la scheda servizio: questi dati di contatto saranno infatti associati a ogni relativo messaggio, portando facilmente l’utenza a “scoprire di più”.
{% endhint %}


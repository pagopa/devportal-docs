# 🏦 Integrare il servizio nell'home-banking

## Opportunità di integrazione del servizio

Per poter massimizzare l'efficacia dei benefici ottenuti grazie al sistema RTP, l'integrazione del servizio nei canali dei Service Provider non dovrebbe limitarsi all'implementazione tecnica di una funzionalità aggiuntiva, ma puntare a **estendere l'esperienza di pagamento degli avvisi pagoPA**, che sia percepita come coerente, immediata e affidabile. <br>

Per rispondere all'esigenza degli utenti di un **controllo centralizzato sui pagamenti verso la Pubblica Amministrazione** e non solo, è cruciale definire una posizione facilmente accessibile agli utenti stessi all'interno dei canali digitali del Service Provider.

Si raccomanda quindi di unire il servizio RTP **in un'unica sezione "pagamenti pagoPA" facilmente individuabile all'interno dell'app o sito.** Questa sezione diventerà il punto di riferimento completo per l'utente finale per gestire richieste, storico e ricevute di pagamento.

## Architettura dell'informazione

La richiesta di pagamento rappresenta **una delle modalità per pagare un avviso pagoPA**, e come tale deve essere pienamente integrata nell'ecosistema pagoPA già presente nell'home-banking:

{% tabs %}
{% tab title="✅ Da fare" %}
Sfrutta la sezione dedicata ai pagamenti che hai nel tuo home-banking per ospitare la nuova funzionalità RTP.
{% endtab %}

{% tab title="❌ Da evitare" %}
* Evita di creare delle sezioni nel tuo home-banking dedicate solo ad RTP
* Evita di utilizzare la sola dicitura "RTP" nell'interfaccia utente: la sigla non chiarisce lo scopo del servizio e potrebbe confondere l'utente
{% endtab %}
{% endtabs %}

Quando integri il servizio nell'architettura informativa del tuo home-banking, tieni a mente questa gerarchia:

<figure><img src="../.gitbook/assets/image (13).png" alt=""><figcaption></figcaption></figure>

### Come chiamare il servizio

{% tabs %}
{% tab title="✅ Nomi corretti" %}
* Avvisi pagoPA
* Pagamenti pagoPA
* pagoPA
* Richieste di pagamento
* Richieste di pagamento pagoPA
{% endtab %}

{% tab title="❌ Nomi errati " %}
* Bollettini pagoPA
* Bollette
* CBILL
* PagoPA
* PAGOPA
* pagopa
* RTP
* Request to Pay
{% endtab %}
{% endtabs %}

### Come chiamare gli avvisi di pagamento

La terminologia "bollettini", per quanto di uso comune, rappresenta un altro strumento. Il documento che notifica il pagamento nell'ecosistema pagoPA, è chiamato **Avviso di pagamento.**

{% tabs %}
{% tab title="✅ Nomi corretti" %}
* Avvisi di pagamento
* Avvisi di pagamento pagoPA
* Richiesta di pagamento
{% endtab %}

{% tab title="❌ Nomi errati " %}
* Bollettino pagoPA
* Bolletta
* PagoPA
* PAGOPA
* pagopa
* RTP
* Request to Pay
{% endtab %}
{% endtabs %}


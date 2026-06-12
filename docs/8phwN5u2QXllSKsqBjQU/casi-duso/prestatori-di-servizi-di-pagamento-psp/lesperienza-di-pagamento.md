---
description: >-
  In questa pagina si indica la modalità ottimale per integrare il servizio
  pagoPA nel flusso in app dei PSP.
---

# L'esperienza di pagamento

{% hint style="info" %}
Il brand non riguarda soltanto il marchio o i colori, ma anche l'esperienza percepita nell'utilizzo di un servizio. Le regole descritte in questa pagina aiutano a progettare un'esperienza di pagamento tramite pagoPA semplice e immediata.
{% endhint %}

## Rendi visibile il flusso di pagamento

Fai in modo che gli utenti del tuo prodotto riescano a trovare facilmente il flusso di pagamento, sia nel menu sia tramite eventuali funzioni di ricerca.

{% hint style="warning" %}
Ricorda di menzionare sempre "pagoPA", anche se la tecnologia è basata su piattaforme offerte da altri soggetti.
{% endhint %}

<figure><img src="../../.gitbook/assets/Rendi visibile il flusso.png" alt="Esempi corretti e non di come rendere visibile il flusso di pagamento pagoPA"><figcaption></figcaption></figure>

## Favorisci l'uso del codice QR

Se il tuo prodotto lo consente, favorisci l'esperienza di pagamento basata su codice QR: i tuoi utenti non dovranno digitare a mano i dati presenti sull'avviso di pagamento.

<figure><img src="../../.gitbook/assets/qrcodeexample.png" alt="Schermata di app in cui si sta inquadrando un codice QR"><figcaption><p>Esempio di app  che consente di scansionare diversi tipi di codici QR legati ai pagamenti, pagoPA incluso.</p></figcaption></figure>

## Fornisci istruzioni chiare

Se è necessario inserire a mano i dati, utilizza i nomi corretti, così da non confondere i tuoi utenti.

### Mostra dove trovare i dati

Puoi inserire un avviso di esempio così da aiutare gli utenti a trovare i dati richiesti:

{% file src="../../.gitbook/assets/pagopa-avviso-esempio.png" %}

### Utilizza la terminologia corretta

I campi obbligatori, riportati entrambi sull'avviso di pagamento, sono due:

1. **Numero Avviso**, composto sempre da 18 cifre
2. **Codice Fiscale Ente Creditore**, composto sempre da 11 cifre

{% tabs %}
{% tab title="✅ Fai così" %}
<figure><img src="../../.gitbook/assets/Schermata 2022-09-21 alle 10.10.18.png" alt="Esempio corretto di come utilizzare la terminologia in un flusso di pagamento"><figcaption></figcaption></figure>

* [x] Il campo Ente Creditore accetta più input (11 cifre, codice CBILL, nome dell'Ente)
* [x] Il campo Ente Creditore è chiamato correttamente
* [x] Il campo Codice Avviso è chiamato correttamente
* [x] Il link "Dove li trovo?" mostra dove trovare le informazioni sull'avviso
{% endtab %}

{% tab title="❌ Non così" %}
<figure><img src="../../.gitbook/assets/Schermata 2022-09-21 alle 09.58.29.png" alt="Esempio errato di come utilizzare la terminologia in un flusso di pagamento"><figcaption></figcaption></figure>

* Il campo "Nome Azienda" confonde l'utente
* Il campo "Nome Azienda" non consente l'inserimento del Codice Fiscale Ente Creditore (o del codice CBILL)
* Il campo "Codice identificativo del pagamento" confonde l'utente
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**Hai integrato pagoPA tramite i servizi offerti da CBILL?**

Semplifica l'esperienza di pagamento creando due maschere distinte, una per l'inserimento dei dati CBILL presenti sui bollettini postali e una per il pagamento degli avvisi pagoPA. In questo modo potrai usare le terminologie corrette a seconda del contesto.
{% endhint %}


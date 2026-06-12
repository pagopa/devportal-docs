---
description: >-
  Le linee guida degli Avvisi di pagamento prevedono anche versioni per
  supportare lingue diverse dall'italiano, a seconda dei vari contesti d'uso.
---

# Traduzioni

## Casi d'uso

### Seconda lingua

Usa questo modello per inserire una lingua secondaria, come ad esempio l'inglese, senza richiedere pagine aggiuntive.

[**Scopri di più →**](avviso-con-seconda-lingua.md)

### Bilinguismo

Questo modello viene utilizzato per rispettare il bilinguismo perfetto, come ad esempio tra italiano e tedesco nel Trentino-Alto Adige.

[**Scopri di più →**](avviso-bilingue.md)

### Avviso in altra lingua

È possibile anche produrre l'avviso di pagamento in una sola lingua—diversa dall'italiano—se l'Ente è già a conoscenza della nazionalità del Destinatario dell'avviso.

[**Scopri di più →**](avviso-in-altra-lingua.md)

## Stringhe dei testi fissi

{% tabs %}
{% tab title="Italiano" %}
```yaml
avviso:
    intestazione:
        titolo: Avviso di pagamento
    info-ente-creditore:
        titolo: Ente Creditore
    info-destinatario:
        titolo: Destinatario
    importo-scadenza:
        titolo: Quanto e quando pagare?
        importo:
            importo: Importo
            scontato: Importo scontato del 30%
            ridotto: Importo ridotto
        euro: Euro
        scadenza:
            scadenza: entro il
            cinquegiorni: entro 5 giorni dalla notifica del verbale
            sessantagiorni: dal 6º al 60º giorno dalla notifica del verbale
        disclaimer:
            rate: 
                rate: Puoi pagare per intero o in [avviso.rate.totali] rate
                solorate: Puoi pagare in [avviso.rate.totali] rate
                molterate: Importi e scadenze sono riportati nel dettaglio di ogni singola rata.
            legal: In fase di pagamento, se previsto dall’ente, l'importo potrebbe essere aggiornato automaticamente e subire variazioni in diminuzione  (per sgravi, note di credito) o in aumento (per sanzioni, interessi, ecc.).
            scadenze:
                titolo: Come si calcolano le scadenze?
                descrizione: Il giorno della notifica non si conta. Se la scadenza è di domenica (o festivo), puoi pagare anche il primo giorno feriale successivo.
            giacenza:
                titolo: Cosa succede in caso di giacenza?
                descrizione: La notifica corrisponde al giorno del ritiro, se questo avviene entro 10 giorni dalla data di deposito (la data più vecchia sull’avviso di giacenza). Se non ritiri il verbale entro i 10 giorni, calcola le scadenze iniziando a contare dall’undicesimo giorno.
            scelta: Scegli l'importo corretto per i termini previsti, altrimenti riceverai altre richieste di pagamento per le somme residue ed eventuali somme aggiuntive.
    dove-pagare:
        titolo: Dove pagare?
        cta: vai su pagopa.gov.it
        italia:
            online:
                titolo: Paga con l'app IO
                descrizione:
                    sitoente: oppure sul sito di [Ente.Nome], dal tuo Home Banking,  con la tua app di pagamento o con gli altri canali abilitati.
                    noente: oppure dal tuo Home Banking,  con la tua app di pagamento o con gli altri canali abilitati.
            territorio:
                titolo: Paga sul territorio
                descrizione: presso Banche e Sportelli ATM, negli Uffici Postali e Punti Postali, nei Bar, Edicole, Ricevitorie, Supermercati, Tabaccherie e altri Operatori Abilitati.
    dati-pagamento:
        titolo: Dati per il pagamento
        rataunica: Rata unica
        nrata: Rata [n]
        scadenza: entro il
        istruzioni:
            qrcode:
                rataunica: Inquadra il codice QR con la tua app di pagamento o usa i dati accanto.
                rate: Inquadra il codice QR con la tua app di pagamento o usa i dati sopra.
        ec: Ente Creditore
        destinatario: Destinatario
        oggetto: Oggetto del pagamento
        cbill: Cod. CBILL
        avviso: Cod. Avviso
        cfec: Cod. Fiscale Ente
```
{% endtab %}

{% tab title="Inglese" %}
```yaml
avviso:
    intestazione:
        titolo: Payment Notice
    info-ente-creditore:
        titolo: Payee
    info-destinatario:
        titolo: Recipient
    importo-scadenza:
        titolo: How much and when to pay?
        importo:
            importo: Amount
            scontato: 30% off
            ridotto: Reduced amount
        euro: Euro
        scadenza:
            scadenza: Due Date
            cinquegiorni: Within 5 days from the notification
            sessantagiorni: From the 6th to the 60th day from the notification
        disclaimer:
            rate: 
                rate: You can pay the full amount or split in [avviso.rate.totali] installments
                solorate: You can pay in [avviso.rate.totali] installments
                molterate: You can find due dates and amounts within each installment.
            legal: During payment, if allowed by the payee, the amount could be updated automatically and be subject to changes in decrease (for allowances, credit notes) or increase (for penalties, interest, etc.).
            scadenze:
                titolo: How to count days for deadlines?
                descrizione: Do not count the day of notification. If the due date is a Sunday  (or bank holiday), you may also pay on the first following business day.
            giacenza:
                titolo: What happens in case of a failed delivery attempt?
                descrizione: Notification is the day of pickup, if it occurs within 10 days of the date printed on the missed delivery card. If you don’t pick up the notice within 10 days, count the deadlines starting from the 11th day.
            scelta: Choose the correct amount depending on the deadline, or you will receive additional payment requests for the remaining and any additional amounts.
    dove-pagare:
        titolo: Where to pay?
        cta: Go to pagopa.gov.it
        italia:
            online:
                titolo: Pay with IO app
                descrizione:
                    sitoente: or with [Ente.Nome]’s website, your Home Banking, payment app or the other authorized channels.
                    noente: or with your Home Banking, payment app or the other authorized channels.
            territorio:
                titolo: Pay locally
                descrizione: at Banks and ATMs, in Post Offices, Cafés, Newsagents, Betting and Tobacco Shops, Supermarkets and other Enabled Merchants.
        estero:
            online:
                titolo: Pay online
                descrizione:
                    sitoente: Go to pagopa.gov.it and choose the channel you prefer, or visit [Ente.Nome]’s website.
                    noente: Go to pagopa.gov.it and choose the channel you prefer.
            territorio:
                titolo: Pay locally
                descrizione: at Banks and ATMs, in Post Offices, Cafés, Newsagents, Betting and Tobacco Shops, Supermarkets and other Affiliated Merchants within Italy.
    dati-pagamento:
        titolo: Payment details
        rataunica: Full amount
        nrata: "Installment #[n]"
        scadenza: Due Date
        istruzioni:
            qrcode:
                rataunica: Scan the QR Code with your payment app or use the data printed here.
                rate: Scan the QR Code with your payment app or use the data printed above.
        ec: Payee
        destinatario: Recipient
        oggetto: Payment Description
        cbill: CBILL Code
        avviso: Notice Code
        cfec: Payee Tax Code
```
{% endtab %}

{% tab title="Tedesco" %}
Presto disponibile
{% endtab %}

{% tab title="Francese" %}
Presto disponibile
{% endtab %}

{% tab title="Sloveno" %}
Presto disponibile
{% endtab %}
{% endtabs %}

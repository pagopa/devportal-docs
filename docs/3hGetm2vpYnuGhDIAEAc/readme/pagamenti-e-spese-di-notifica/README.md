---
description: Gestione delle spese di notifica per il destinatario
---

# Pagamenti e Spese di notifica

Le spese di notifica non sono note a priori e possono essere diverse per notifica e all'interno della stessa notifica anche tra un destinatario ed un altro.

Le spese di notifica sono calcolate in base a:

* Il decreto 30 maggio 2022 "Individuazione dei costi e dei criteri e modalita' di ripartizione e ripetizione delle spese di notifica degli atti tramite la piattaforma di cui all'art. 26, comma 14 del decreto-legge 16 luglio 2020, n. 76."
* Costi sostenuti per l'invio cartaceo definiti come da Bando di Gara.

Per i dettagli si veda anche "Costi di notifica digitale e analogica" su [https://notifichedigitali.pagopa.it/documenti/](https://notifichedigitali.pagopa.it/documenti/)

I pagamenti supportati da SEND al momento sono di due tipologie:

* pagoPA[^1]
* [modello F24](#user-content-fn-2)[^2]

Per entrambe le modalità di pagamento è previsto che le spese di notificazione degli atti siamo a carico del destinatario, questo viene realizzando aggiungendo le spese registrate dalla piattaforma a quelle indicate dal mittente.

### Pagamento puntuale o forfettario

SEND prevede anche la possibilità di gestire le spese in maniera forfettaria (già incluse nell'atto notificato) indicando il parametro `notificationFeePolicy=FLAT_RATE`. In questa modalità il costo della notifica calcolato dalla piattaforma verso il destinatario sarà sempre nullo.\


{% hint style="info" %}
È rimessa alla libera valutazione dell’Ente mittente la possibilità di non applicare dei costi di notifica, rinunciando alla ripetibilità della totalità degli stessi, ad esempio quando l’atto oggetto di notificazione non preveda alcuna forma di pagamento da parte del destinatario.&#x20;

È rimessa alla libera valutazione dell’Ente mittente la possibilità di applicare dei costi forfettari alla notifica, rinunciando alla ripetibilità di quota degli stessi, ad esempio, indicando un valore forfettario pari a 2 Euro previsti dal Decreto Costi oltre il valore minimo pubblicato dalla PagoPA per la Raccomandata A/R ovvero i medesimi 2 Euro oltre al valore minimo pubblicato dalla PagoPA per la raccomandata ex L. 890/1982. NOTA: L'Ente deve valutare in proprio di essere legittimato in virtù di specifica normativa ad applicare costi forfettari.
{% endhint %}

Per tutte le notifiche depositate con `notificationFeePolicy=DELIVERY_MODE`il calcolo delle spese di notifica sarà effettuato in base ai parametri paFee (quota a copertura delle spese del mittente), vat (iva da applicare al costo dell'invio cartaceo), il costo della gestione della notifica e il costo di eventuali invii cartacei.

### Pagamenti Rateali

Se ad una notifica sono collegati più pagamenti non alternativi tra loro, ma che identificano rate della stesso atto notificato, è necessario indicare tramite l'elemento applyCost su quali pagamenti (es: rata unica e prima rata) devono essere applicati i costi di notifica al destinatario.\




[^1]: 

[^2]: 

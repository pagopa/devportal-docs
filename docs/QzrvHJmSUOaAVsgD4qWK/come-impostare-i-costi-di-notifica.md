# Come impostare i costi di notifica

## Ripetibilità del costo di notifica

In base all'articolo 2 del decreto del 30 maggio 2022:

```
Le spese della notificazione degli atti tramite piattaforma,  ai
sensi dell'art. 26 del decreto-legge, sono ripetibili  nei  confronti
del destinatario e, fatto salvo quanto previsto dall'art. 5, comma 3,
in caso di mancato pagamento, sono recuperate  dai  mittenti  con  le
modalita' previste dalla legge. 
```

Per questo SEND prevede di impostare sulla notifica la modalità di recupero costi della notifica.

Se la notifica prevede un pagamento tramite pagoPA o tramite modello F24 è possibile ripetere i costi al destinatario impostando nella richiesta di notifica il parametro `notificationFeePolicy="DELIVERY_MODE"`\
Con questa modalità il costo di notifica non è determinabile a priori perché dipenderà dal flusso della notifica, ovvero se sarà consegnata in via digitale o comporterà degli invii cartacei.

Se invece i costi della notifica sono inclusi dal mittente in forma forfettaria nell'importo dell'atto notificato è necessario impostare `notificationFeePolicy="FLAT_RATE"`.

Analogamente dall'interfaccia web del portale mittente è possibile scegliere la modalità nella sezione "Dettaglio posizione debitoria" nel riquadro "Costo di notifica" mostrato in figura:

<figure><img src=".gitbook/assets/Screenshot 2025-04-16 at 10.51.13.png" alt=""><figcaption></figcaption></figure>

Nel caso si scelga il recupero puntuale dei costi di notifica (`notificationFeePolicy="DELIVERY_MODE"`) è necessario anche impostare i seguenti elementi della richiesta di notifica:

* `paFee`: Costo espresso in eurocent sostenuto dal mittente, per l'elaborazione degli atti, provvedimenti, avvisi e comunicazioni oggetto di notifica, per il relativo deposito sulla piattaforma e per la gestione degli esiti della notifica (Decreto 30 maggio 2022 - Art. 3, comma 1, lettera a).
* `vat`: IVA espressa in percentuale da applicare sui costi degli avvisi in formato cartaceo per il calcolo del costo totale di notifica.

Sull'interfaccia web del portale mittente questi due campi appaiono selezionando la modalità "A carico del destinatario" come mostrato in figura:

<figure><img src=".gitbook/assets/Screenshot 2025-04-16 at 11.02.07.png" alt=""><figcaption></figcaption></figure>

Nel caso siano presenti più pagamenti per la notifica è necessario indicare su quale o quali devono essere applicati i costi di notifica.

Il costo della notifica è collegato al pagamento pagoPA se viene impostato il parametro `applyCost=true`.

Sull'interfaccia web appare un check "Applica costo di notifica" da impostare sotto all'indicazione del codice avviso come in figura:

<figure><img src=".gitbook/assets/Screenshot 2025-04-16 at 11.43.09.png" alt=""><figcaption></figcaption></figure>

#### Esempio **contravvenzioni del codice della strada**&#x20;

Queste notifiche contengono due pagamenti, uno alternativo all'altro. I due pagamenti sono con l'importo ridotto del 30% pagabile fino a 5 giorni dal perfezionamento della notifica e un secondo pagabile a 60 giorni. Essendo due pagamenti alternativi (il destinatario deve pagare solo uno dei due) il costo di notifica deve essere applicato ad entrambi.

#### Esempio **pagamento rateale dei tributi**:

Se la notifica riguarda un pagamento dei tributi con pagamenti rateali il costo della notifica dovrà essere impostato solo su una delle rate (probabilmente la prima rata) ed eventualmente sul pagamento in un unica soluzione.

## Modalità di integrazione con pagoPA

Per il ripetere il costo di notifica nei pagamenti pagoPA sono possibili due modalità di integrazione:

* Modalità sincrona
* Modalità asincrona

Per capire quale modalità utilizzare è necessario confrontarsi con il partner tecnologico di integrazione pagoPA per sapere come sono gestite le posizioni debitorie.

Nella **modalità sincrona** la posizione debitoria è mantenuto sul sistema dell'Ente Creditore (EC) che è responsabile di fornire i dettagli del pagamento comprensivo del costo di notifica recuperato chiamando il sistema di integrazione con SEND che interroga l'API di recupero del costo di notifica indicando codice fiscale dell'ente creditore e codice avviso (NAV).

Nella **modalità asincrona** la posizione debitoria è preventivamente caricata sul sistema di Gestione delle Posizioni Debitorie (GPD). GPD è responsabile di aggiornare le spese di notifica in base al flusso della notifica.

Per dettagli [#modalita-di-integrazione-con-pagopa](come-impostare-i-costi-di-notifica.md#modalita-di-integrazione-con-pagopa "mention")

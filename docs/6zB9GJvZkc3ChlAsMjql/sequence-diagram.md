# Sequence diagram

## Fase di Pagamento <a href="#sequence-diagram-fase-di-pagamento" id="sequence-diagram-fase-di-pagamento"></a>

Di seguito sequence relativo alle fasi di un pagamento .

<figure><img src=".gitbook/assets/redirect.png" alt=""><figcaption></figcaption></figure>

## Fase di Storno <a href="#sequence-diagram-fase-di-storno" id="sequence-diagram-fase-di-storno"></a>

### Caso 1 - Mancata ricezione dell’esito del pagamento <a href="#caso-1-mancata-ricezione-dellesito-del-pagamento" id="caso-1-mancata-ricezione-dellesito-del-pagamento"></a>

pagoPA effettua la chiamata di storno con logica di retry se non riceve l’esito del pagamento entro N minuti

<figure><img src=".gitbook/assets/storno1.png" alt=""><figcaption></figcaption></figure>

### Caso 2 - pspNotifyPayment KO <a href="#caso-3-pspnotifypayment-ko" id="caso-3-pspnotifypayment-ko"></a>

pagoPA effettua la chiamata di storno con logica di retry quando il PSP ha riposto KO alla `pspNotifyPayment`



<figure><img src=".gitbook/assets/storno2.png" alt=""><figcaption></figcaption></figure>

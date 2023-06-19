# Indicatori di qualità per i soggetti aderenti

{% content-ref url="livelli-di-servizio-enti-creditori.md" %}
[livelli-di-servizio-enti-creditori.md](livelli-di-servizio-enti-creditori.md)
{% endcontent-ref %}

{% content-ref url="livelli-di-servizio-psp.md" %}
[livelli-di-servizio-psp.md](livelli-di-servizio-psp.md)
{% endcontent-ref %}

## Tempo di risposta

Il grafico seguente descrive i tempi di attraversamento della piattaforma pagoPA

![](<../../.gitbook/assets/Nuovi LdS-Globale.png>)

* il _Tempo Elaborazione_ rappresenta quanto indicato in [#livelli-di-servizio-dei-metodi-degli-ec](livelli-di-servizio-enti-creditori.md#livelli-di-servizio-dei-metodi-degli-ec "mention");
* il _Timeout Nodo_ rappresenta quanto indicato in [#gestione-dei-timeout-verso-gli-ec](livelli-di-servizio-enti-creditori.md#gestione-dei-timeout-verso-gli-ec "mention") o [#gestione-dei-timeout-verso-i-psp](livelli-di-servizio-psp.md#gestione-dei-timeout-verso-i-psp "mention"), a seconda della natura del _Chiamato Nodo_;
* il _Timeout Chiamante Nodo_ rappresenta quanto indicato in [#gestione-dei-timeout-del-nodo](./#gestione-dei-timeout-del-nodo "mention") per i metodi sincroni.&#x20;

Il grafico seguente descrive i tempi nel caso in cui la piattaforma pagoPA agisca da server nel caso di metodi non sincroni

![](<../../.gitbook/assets/Nuovi LdS-Metodi Sincroni (1).png>)

* il _Timeout Chiamante Nodo_ rappresenta quanto indicato in [#gestione-dei-timeout-del-nodo](./#gestione-dei-timeout-del-nodo "mention") per i metodi non sincroni.&#x20;

Il grafico seguente descrive i tempi nel caso in cui la piattaforma pagoPA agisca da client

![](<../../.gitbook/assets/Nuovi LdS-Timeout del Nodo (1).png>)

* il _Tempo Elaborazione_ rappresenta quanto indicato in [#livelli-di-servizio-dei-metodi-degli-ec](livelli-di-servizio-enti-creditori.md#livelli-di-servizio-dei-metodi-degli-ec "mention") o [#livelli-di-servizio-dei-metodi-dei-psp](livelli-di-servizio-psp.md#livelli-di-servizio-dei-metodi-dei-psp "mention"),  a seconda della natura del _Chiamato Nodo_;
* il _Timeout Nodo_ rappresenta quanto indicato in [#gestione-dei-timeout-verso-gli-ec](livelli-di-servizio-enti-creditori.md#gestione-dei-timeout-verso-gli-ec "mention") o [#gestione-dei-timeout-verso-i-psp](livelli-di-servizio-psp.md#gestione-dei-timeout-verso-i-psp "mention"), a seconda della natura del _Chiamato Nodo._

## Processi di retry

Nei casi di timeout dovranno essere attivati dei processi di retry per le seguenti primitive:

* [nodoInviaFlussoRendicontazione](../primitive.md#nodoinviaflussorendicontazione)
* [sendPaymentOutcome](../primitive.md#sendpaymentoutcome)

I processi di retry dovranno adottare per il calcolo del tempo di attesa una logica di backoff esponenziale a partire dalla rilevazione del timeout

$$tempo di attesa = slot time * (2^k - 1)$$

con _K_ che è il numero del tentativo (primo tentativo = 1) e _slottime_ è uguale al tempo massimo di attesa del chiamante originale.

Il processo di retry deve prevedere il numero massimo di 5 tentativi, devono essere predisposte delle funzionalità per consultare ed azzerare il contatore dei tentativi, così che il processo possa essere riavviato in caso di necessità.

Nei casi di timeout per le seguenti primitive:

* [activatePaymentNotice](../primitive.md#activatepaymentnotice)
* [demandPaymentNotice](../primitive.md#demandpaymentnotice)
* [nodoChiediElencoFlussiRendicontazione](../primitive.md#nodochiedielencoflussirendicontazione)
* [nodoChiediFlussoRendicontazione](../primitive.md#nodochiediflussorendicontazione)
* [nodoChiediInformativaPA](../primitive.md#nodochiediinformativapa)
* [nodoChiediTemplateInformativaPSP](../primitive.md#nodochieditemplateinformativapsp)
* [nodoChiediCatalogoServizi](../primitive.md#nodochiedicatalogoservizi)
* [verificaBollettino](../primitive.md#verificabollettino)
* [verifyPaymentNotice](../primitive.md#verifypaymentnotice)

non è necessario un processo di retry automatico, ma qualora sia necessaria una nuova invocazione il tempo di attesa minimo prima di effettuare un nuovo tentativo deve rispettare la logica di backoff esponenziale sopra esposta.

## Gestione dei timeout del Nodo

Il timeout rappresenta un periodo di tempo predeterminato trascorso il quale una data operazione può essere considerata conclusa da EC e PSP.

Nella tabella seguente sono riportati per ciascuna primitiva

* i tempi minimi di attesa per i metodi sincroni
* i tempi suggeriti di attesa per i metodi non sincroni

della response del Nodo

da parte degli EC

<table><thead><tr><th width="397.44897959183675">Primitiva</th><th width="225" align="center">Timeout in secondi</th><th data-type="checkbox">Sincrona</th></tr></thead><tbody><tr><td><a href="../primitive.md#nodochiedielencoflussirendicontazione">nodoChiediElencoFlussiRendicontazione</a></td><td align="center">15</td><td>false</td></tr><tr><td><a href="../primitive.md#nodochiediflussorendicontazione">nodoChiediFlussoRendicontazione</a></td><td align="center">60</td><td>false</td></tr></tbody></table>

da parte dei PSP

<table><thead><tr><th width="397.44897959183675">Primitiva</th><th width="225" align="center">Timeout in secondi</th><th data-type="checkbox">Sincrona</th></tr></thead><tbody><tr><td><a href="../primitive.md#activatepaymentnotice">activatePaymentNotice</a></td><td align="center">12</td><td>true</td></tr><tr><td><a href="../primitive.md#demandpaymentnotice">demandPaymentNotice</a></td><td align="center">12</td><td>true</td></tr><tr><td><a href="../primitive.md#nodochiedicatalogoservizi">nodoChiediCatalogoServizi</a></td><td align="center">15</td><td>false</td></tr><tr><td><a href="../primitive.md#nodochiediinformativapa">nodoChiediInformativaPA</a></td><td align="center">15</td><td>false</td></tr><tr><td><a href="../primitive.md#nodochieditemplateinformativapsp">nodoChiediTemplateInformativaPSP</a></td><td align="center">15</td><td>false</td></tr><tr><td><a href="../primitive.md#nodoinviaflussorendicontazione">nodoInviaFlussoRendicontazione</a></td><td align="center">60</td><td>false</td></tr><tr><td><a href="../primitive.md#sendpaymentoutcome">sendPaymentOutcome</a></td><td align="center">15</td><td>false</td></tr><tr><td><a href="../primitive.md#verificabollettino">verificaBollettino</a></td><td align="center">12</td><td>true</td></tr><tr><td><a href="../primitive.md#verifypaymentnotice">verifyPaymentNotice</a></td><td align="center">12</td><td>true</td></tr></tbody></table>

## Tempo di risoluzione di un evento critico

Al verificarsi di un evento critico l’Ente Creditore o il PSP entro 5 minuti devono prendere in carico il problema e quindi inviare via e-mail al Tavolo Operativo del NodoSPC le indicazioni circa la pianificazione di massima che adotteranno per la risoluzione del problema in questione, articolata in funzione della complessità del problema stesso (ad es.: bug fixing immediato, eventuale soluzione transitoria, chiusura dell’evento).

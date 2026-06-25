# Funzionalità deprecate

## Primitive deprecate

* nodoChiediInformativaPA
* nodoChiediInformativaPSP

## Tabella delle controparti

La struttura dati della tabella delle controparti è deprecata in quanto le informazioni contenute non hanno la necessità di essere scambiate in virtù dell'evoluzione della piattaforma pagoPA.

## Informativa conto accredito

Le informazioni relative ai conti da accreditare saranno gestite mediante le nuove funzionalità messe a disposizione dal Backoffice PagoPA.&#x20;

{% hint style="info" %}
La _tabella delle controparti_ e l'_informativa conto accredito_ sono state sostituite da nuove API all'interno del BackOffice pagoPA.

Per maggiori informazioni si faccia riferimento a[ ](https://app.gitbook.com/o/KXYtsf32WSKm6ga638R3/s/BnqUVJHM26TaVUpNXC9J/\~/changes/3/manuale-operativo-back-office-pagopa-partner-tecnologico/funzionalita/external-api)[https://docs.pagopa.it/manuale-back-office-pagopa/v/manuale-bo-pagopa-pt/manuale-operativo-back-office-pagopa-partner-tecnologico/funzionalita/external-api](https://docs.pagopa.it/manuale-back-office-pagopa/v/manuale-bo-pagopa-pt/manuale-operativo-back-office-pagopa-partner-tecnologico/funzionalita/external-api)

e

[https://docs.pagopa.it/manuale-back-office-pagopa/v/manuale-bo-pagopa-psp/manuale-operativo-pagamenti-pagopa-prestatore-di-servizi-di-pagamento/funzionalita/external-api](https://docs.pagopa.it/manuale-back-office-pagopa/v/manuale-bo-pagopa-psp/manuale-operativo-pagamenti-pagopa-prestatore-di-servizi-di-pagamento/funzionalita/external-api)
{% endhint %}

## Connessione a pagoPA mediante rete SPC Infranet&#x20;

La connessione tramite rete SPC Infranet mediante Porta di Dominio (SPCoop o equivalente) è deprecata. PagoPA S.p.A. dismetterà la propria PDD nel rispetto delle disposizioni AgID. Pertanto:

* i soggetti già direttamente connessi alla piattaforma pagoPA tramite rete SPC Infranet e Porta di Dominio, dovranno provvedere alla dismissione della Porta di Dominio stessa, nel rispetto della normativa vigente. Nella connessione alla piattaforma pagoPA tramite rete SPC Infranet, detti soggetti dovranno rispettare gli stessi vincoli previsti per la rete Internet;
* i soggetti di nuova attivazione alla piattaforma pagoPA tramite rete SPC Infranet, dovranno rispettare gli stessi vincoli previsti per la rete Internet.

Tale tipologia di connessione sarà dismessa a partire dal 30/04/2023.

## WISP

L'utilizzo del WISP è deprecato, è sostituito dal Checkout e sarà dismesso come comunicato a tutti gli Aderenti tramite il dedicato processo di comunicazione periodica a cadenza trimestrale.

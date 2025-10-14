# Voucher

## Che cosa sono e a cosa servono

I **voucher** sono **token JWT (JSON Web Token)** che fungono da **autorizzazione** rilasciata dalla piattaforma al _fruitore_ per accedere a un _e-service_ pubblicato da un _erogatore_.

Il voucher serve a **garantire la sicurezza, la legittimità e la tracciabilità** dello scambio di dati tra le parti, assicurando che:

1. **Il fruitore sia identificato in modo certo**, poiché il voucher è emesso solo dopo che PDND Interoperabilità ha verificato la catena: versione di e-service attiva, richiesta di fruizione attiva, finalità attiva e associata all'e-service, client associato alla finalità, chiave pubblica associata al client.
2. **L’erogatore possa verificare l’autorizzazione della richiesta**, accertando che provenga da un fruitore autorizzato, per la risorsa corretta e per una finalità attiva.
3. **Ogni interazione sia sicura e verificabile**, grazie alla firma digitale apposta da PDND Interoperabilità sul token.

PDND Interoperabilità implementa meccanismi di autorizzazione basati sullo standard **OAuth 2.0 (**[**RFC 6750**](https://datatracker.ietf.org/doc/html/rfc6750)**)**. L’autenticazione del client avviene tramite **client assertion** segue quanto definito nello **standard** [**RFC 7521**](https://datatracker.ietf.org/doc/html/rfc7521). Eventuali ulteriori specifiche tecniche (RFC) dipendono dal tipo di voucher emesso e sono indicate nelle relative sezioni del manuale.

## Maggiori informazioni, esempi e tutorial

Nelle prossime sezioni della guida sono illustrate le diverse modalità di richiesta e loro caratteristiche. Nella sezione tutorial, sono inoltre disponibili guide passo passo per [ottenere](../../tutorial/tutorial-per-il-fruitore/) e [verificare](../../tutorial/tutorial-per-lerogatore/) un voucher.

***

Pagina successiva [→ Tipi di richiesta di voucher](tipi-di-richiesta-di-voucher.md)

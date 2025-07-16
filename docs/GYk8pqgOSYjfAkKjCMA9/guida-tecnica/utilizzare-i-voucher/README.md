# Voucher

I vaucher sono rilasciati da PDND Interoperabilità ai ffruitori di e-service per fare richiesta di utilizzo agli erogatori.

I voucher sono implementati come **token JWT** **(JSON Web Token)**.

Il sistema implementa un **flusso OAuth 2.0** conforme agli standard:

* [**RFC 6750**](https://datatracker.ietf.org/doc/html/rfc6750): per l'utilizzo del Bearer token
* [**RFC 7521**](https://datatracker.ietf.org/doc/html/rfc7521): per l'autorizzazione del client tramite client assertion

{% hint style="info" %}
Ulteriori prove autorizzative o informazioni legate al dominio del fruitore possono essere previste nella comunicazione tra erogatore e fruitore, a discrezione delle parti.
{% endhint %}

La richiesta del voucher prevede **due flussi distinti** a seconda delle esigenze dell'aderente:

* **Per e-service in catalogo**: quando l'aderente necessita di un voucher per accedere ad un e-service in catalogo come fruitore;
* **Per le API PDND Interoperabilità**: quando l'aderente vuole interfacciarsi direttamente con le API di PDND Interoperabilità per ottenere informazioni specifiche;

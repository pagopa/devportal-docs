# Cos'è e come si installa il Pulsante Firma con IO

### Cos'è il pulsante Firma con IO

Il pulsante Firma con IO è il componente utilizzato per indirizzare l’utente verso la funzionalità di firma dell'app IO a partire da un canale messo a disposizione dall'Ente (sitoweb, app mobile ecc.).

<figure><img src=".gitbook/assets/Screenshot 2023-04-28 alle 15.59.29.png" alt=""><figcaption></figcaption></figure>

Attraverso il pulsante Firma con IO sarà propagato un _universal link_ che consentirà:

* agli utenti che navigano da mobile e hanno installata l’app IO di risvegliare l’app e procedere con la firma.
* agli utenti che navigano da desktop di accedere ad una modale con un QR code da inquadrare con il proprio dispositivo per aprire l’app IO.
* agli utenti che sono registrati su IO ma non hanno l’app installata sul device di accedere alla pagina dello store dove poterla ottenere.

In questo tutorial vedremo come si installa e come si utilizza il pulsante Firma con IO.

### Installazione e uso

Il Pulsante Firma con IO è scritto in JavaScript e viene distribuito come [Web Component](https://developer.mozilla.org/en-US/docs/Web/API/Web\_components), in modo da poter essere integrato all'interno delle pagine web e delle web-app JavaScript indipendentemente dalle tecnologie e i framework JavaScript adottati.

Una volta importato, il componente è disponibile in pagina sotto forma di custom element HTML, con il nome di io-sign.

#### Includere il Pulsante Firma con IO

Per poter usare il componente io-sign è necessario includerlo all'interno delle proprie pagine HTML (dentro \<head> o alla fine di \<body>)

```
<script type="module" src="https://assets.cdn.io.pagopa.it/sign/io-sign.js"></script>
```

Infine, per mostrare il Pulsante Firma con IO in pagina è sufficiente dichiarare l'elemento HTML appena importato all'interno del proprio template HTML o componente JS, come qualsiasi altro elemento HTML (form, div, video, ...)

```
<io-sign></io-sign>
```

#### Funzionamento del componente

Il Pulsante Firma con IO, al click o tap da parte del cittadino, emette un [Evento](https://developer.mozilla.org/en-US/docs/Web/API/Event) chiamato io-sign.cta.click nel DOM in cui è stato inserito. Una volta emesso l'evento, il componente entra nello stato loading che segnala all'utente l'inizio del flusso di creazione (o ottenimento) di una Richiesta di Firma.

Lo stato loading termina quando viene chiamato il metodo redirectOrShowQrCode(signatureRequestId) dell'elemento, a cui occorre passare come unico parametro in input l'ID della Richiesta di Firma da inoltrare al cittadino.

L'elemento supporta l'attributo HTML disabled (che funziona in modo del tutto similare all'attributo omonimo presente in elementi HTML come input e button), che rende il Pulsante Firma con IO non cliccabile e stilizzato in modo da essere visto come disattivato.

Il componente, infine, espone la funzione reset(), che annulla il loading e ne reimposta lo stato (utile per gestire casistiche di errore).

**Esempio**

Questo esempio mostra come aggiungere l'elemento \<io-sign> in pagina, gestire l'evento io-sign.cta.click emesso al click del Pulsante Firma con IO e chiamare la funzione redirectOrShowQrCode per mostrare il QRCode o portare l'utente direttamente su App IO o reset per terminare il loading.

Nel tuo applicativo all'interno della funzione (qui nominata) createOrRetrieveSignatureRequest dovrai mettere tutta la business logic necessaria per creare la richiesta di Firma, ottenerne una già creata, caricare i documenti dialogando con le tue API back-end integrate alle API REST di Firma con IO.

Riassumendo, per ingaggiare il cittadino tramite il Pulsante Firma con IO all'interno della tua pagina Web dovrai:

1. Includere l'elemento HTML io-sign in pagina
2. Registrare un event listener sull'evento io-sign.cta.click emesso dal componente io-sign
3. Inserire la propria business logic all'interno dell'handler dell'evento appena registrato
4. Chiamare la funzione redirectOrShowQrCode per mostrare il QRCode o reindirizzare l'utente su app IO

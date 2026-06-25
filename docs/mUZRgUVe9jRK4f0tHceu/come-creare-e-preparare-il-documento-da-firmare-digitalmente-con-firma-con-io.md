# Come creare e preparare il documento da firmare digitalmente con Firma con IO

In questo tutorial vedremo come creare un documento in formato PDF o PDF/A-2A, e come identificare i campi firma per definire dove verrà apposta la firma digitale.

### Come creare e preparare il documento da firmare digitalmente con Firma con IO

Firma con IO è una funzionalità che consente ai cittadini di **firmare documenti e contratti** tramite l’app IO in maniera semplice, veloce e sicura, e agli enti di **gestire tutti i processi di firma.** È una Firma Elettronica Qualificata (FEQ), ed ha quindi il massimo valore legale probatorio, pari alla firma autografa, senza alcuna esclusione normativa.

Per l’avvio del processo di firma digitale con Firma con IO è necessario creare il documento da firmare, e identificare i punti in cui il cittadino dovrà firmarlo. **In questo tutorial vedremo come creare un documento in formato PDF o PDF/A-2A, e come identificare i campi firma per definire dove verrà apposta la firma digitale.**

### Creare un file in formato PDF/A-2A

Per creare un file in formato PDF/A2-A dovrai scrivere un documento utilizzando un qualsiasi word processor, avendo cura di verificare che preveda l’esportazione in questo formato (come ad esempio Microsoft Word, OpenOffice e LibreOffice). Non potrai creare un PDF da testi scansionati, perché verrebbero rappresentati come immagini e non come testi.

Dovrai quindi:

* Scrivere il testo
* Scegliere il formato PDF nel menu di esportazione
* Andare nelle Opzioni specifiche e scegliere il formato PDF/A2-A

Per verificare la conformità del documento puoi aprirlo con Acrobat Reader, avendo cura di aver precedentemente selezionato **modifica > preferenze > visualizza i documenti in modalità PDF/A.**

#### Preparare i campi firma

A questo punto dovrai identificare i campi firma del documento, individuandone le “coordinate” (ovvero la posizione orizzontale X, la posizione verticale Y, e le dimensioni) che poi dovrai inserire nella richiesta di creazione del dossier. Per farlo, ti consigliamo di utilizzare il software GIMP, gratuito e disponibile per tutti i sistemi operativi. Ecco come procedere.

* scarica GIMP dal sito ufficiale e procedi all’installazione;
* apri GIMP;
* seleziona File > Apri e apri il modulo PDF o template da inviare in firma;
* se il PDF ha più di una pagina, scegli quella in cui vuoi che si visualizzi la firma grafica;
* disegna con il mouse il rettangolo nel quale l'utente apporrà la firma partendo dal punto in alto a sinistra del rettangolo;

Le informazioni da indicare verranno riportate all’interno dei campi **Posizione** e **Dimensione.** Assicurati che l’unità di misura sia impostata in Punti (pt) sia per la posizione che la dimensione.

<figure><img src=".gitbook/assets/gimp (1).png" alt="" width="563"><figcaption></figcaption></figure>

#### Usare le coordinate nella creazione del dossier di richiesta di firma

A questo punto, le coordinate identificate andranno inserite nella richiesta di creazione del dossier, in particolare nella proprietà attrs

```
"attrs":{
  "coordinates":{
    "x":360,
    "y":100
  },
  "size":{
    "w":170,
    "h":30
  },
  "page":0
}
```

Puoi fare un test di creazione del dossier - inserendo anche le coordinate appena ricavate - nella guida rapida a tua disposizione.

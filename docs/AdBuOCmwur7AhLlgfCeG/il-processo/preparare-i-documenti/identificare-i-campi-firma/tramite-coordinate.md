# ↗ Tramite coordinate

Una modalità consiste nell'**indicare le coordinate** dei campi firma sul PDF, insieme al numero di pagina. In questo caso, sarà il team dell'app IO a inserire i campi firma nei punti indicati.&#x20;

{% hint style="info" %}
Dovrai inserire queste informazioni all'interno del Dossier che creerai in fase di richiesta della firma: trovi tutte le indicazioni in [Creazione di un Dossier](../../../creare-il-dossier.md).&#x20;
{% endhint %}

Per poter indicare una sezione all’interno del PDF dove collocare il rettangolo della firma grafica, dovrai fornire:

* le coordinate di un punto di partenza, prendendo come punto di riferimento l’estremo in alto a sinistra (lo "0,0" che vedi nell'immagine qui sotto);
* la dimensione del box;&#x20;
* la pagina in cui inserirlo (ricorda che le pagine partono da 0).

<figure><img src="../../../.gitbook/assets/Senza titolo-1 (1).png" alt=""><figcaption><p>Coordinate da un punto di partenza</p></figcaption></figure>

### Come calcolare le coordinate e la dimensione del rettangolo

Per poter calcolare agevolmente le coordinate e la dimensione del rettangolo ti suggeriamo di utilizzare [GIMP](https://www.gimp.org/downloads/), un tool gratuito e opensource disponibile per tutti i sistemi operativi.&#x20;

Ecco gli step da seguire:

* scarica [GIMP](https://www.gimp.org/downloads/) dal sito ufficiale e procedi all’installazione;
* apri GIMP;
* seleziona File > Apri e apri il modulo PDF o template da inviare in firma;
* se il PDF ha più di una pagina, scegli quella in cui vuoi che si visualizzi la firma grafica;
* disegna con il mouse il rettangolo nel quale l'utente apporrà la firma partendo dal punto in alto a sinistra del rettangolo;

Le informazioni da indicare verranno riportate all’interno dei campi **Posizione** e **Dimensione**. Assicurati che l’unità di misura sia impostata in **Punti (pt)** sia per la posizione che la dimensione.

{% hint style="info" %}
Ripeti questa operazione **per ogni campo firma** che vuoi inserire in ogni singola pagina.
{% endhint %}

<figure><img src="../../../.gitbook/assets/gimp (1).png" alt=""><figcaption></figcaption></figure>

In base all'esempio qui sopra, la proprietà `attrs` del dossier sarà la seguente (la parte decimale può essere ignorata):

```
"attrs":{
   "coordinates":{
      "x":85,
      "y":676
   },
   "size":{
      "w":177,
      "h":77
   },
   "page":0
}
```

{% hint style="warning" %}
Assicurati che il campo firma non vada al di fuori dell'intera pagina.\
In fase di caricamento del PDF, il software effettua comunque un controllo sulla correttezza delle coordinate.
{% endhint %}

---
description: In questa pagina viene indicata la corretta formattazione degli indirizzi.
---

# Composizione degli indirizzi

## Premessa

La corretta composizione di un indirizzo di destinazione, per il recapito di una corrispondenza cartacea, passa attraverso il soddisfacimento di due aspetti fondamentali per gli operatori postali:

* Completezza del contenuto&#x20;
* Rispetto della struttura

## Definizioni e regole sulla lunghezza

SEND fornisce campi specifici per gli Enti mittenti al fine di gestire le notifiche, consentendo di inserire tutti gli elementi necessari per il recapito al destinatario. È essenziale interpretare e compilare correttamente questi campi per la corretta accettazione della notifica e per assicurare il successo della consegna al destinatario.

* **`denomination` (obbligatorio):** denominazione principale del destinatario (nome e cognome per persone fisiche, ragione sociale per persone giuridiche). La lunghezza massima accettata dalla piattaforma è **88** caratteri. La suddivisione del contenuto su più righe nella stampa dell'indirizzo sulla raccomandata è demandata al sistema di postalizzazione, secondo le specifiche previste e descritte in [logiche-di-stampa-indirizzo.md](logiche-di-stampa-indirizzo.md "mention").
* **`at`** : denominazione secondaria, ed è destinato a contenere informazioni aggiuntive per identificare con maggiore precisione il destinatario, come "presso" o "alla c.a.". \
  La lunghezza massima accettata dalla piattaforma è **88** caratteri.
* **`municipality` (obbligatorio):** Comune di destinazione.
* **`municipalityDetails` :** nome secondario della località di destinazione (frazione/località).&#x20;
* **`address` (obbligatorio):** indirizzo del domicilio fisico. Vanno inseriti il qualificatore (via, piazza, viale...), il nome (toponimo) e il civico dell'indirizzo stradale. \
  In alternativa, può essere indicata la Casella Postale. **Attenzione**: in quest'ultimo caso va popolato anche il campo `addressDetails` con la denominazione dell'ufficio postale in cui è ubicata la Casella, preceduta dalla dicitura "UFFICIO".&#x20;
* **`addressDetails`**: dedicato alle informazioni aggiuntive sull'ubicazione (es. scala, palazzina, isolato, stabile...) che facilitano l'identificazione del punto di recapito, specialmente per unità abitative complesse.
* **`zip` (obbligatorio):** ripartizione territoriale postale del Paese di riferimento (CAP per l'Italia). È valorizzabile fino a **5** caratteri.&#x20;
* **`province` (obbligatorio):** Sigla della provincia di appartenenza del Comune, per un massimo di **2** caratteri.
* **`foreignState` :** Denominazione dello Stato estero, obbligatoria nel caso di destinazione diverse da Italia, Città del Vaticano e San Marino.

### Doppia località in bilingue

Il bilinguismo è gestito dal recapitista e dal sistema di normalizzazione esclusivamente per la lingua tedesca nella provincia di Bolzano (BZ), nei seguenti campi:

* Comuni (`municipality`)
* Frazioni/località (`municipalityDetails`)
* Strade (`address`)

È quindi possibile popolare questi campi indifferentemente con la dicitura italiana o tedesca.\
Per il solo campo `municipality`  è possibile indicare il nome del Comune in entrambe le lingue: ciascuna dicitura deve terminare con un punto (`.`), oppure devono essere separate da uno spazio vuoto (`blank`). Ad esempio:

`"municipality": "SAN LORENZO DI SEBATO. ST. LORENZEN."`

`"municipality": "ALDINO ALDEIN."`

In questo caso, il normalizzatore restituirà la sola dicitura in italiano. \
&#x20;




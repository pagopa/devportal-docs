---
description: In questa pagina viene indicata la corretta formattazione degli indirizzi
---

# Composizione degli indirizzi

## Regole sulla lunghezza

* Riga1: **denomination** (massimo 44)
* Riga2: **at** + " " + **municipalityDetails** (il totale non può superare 44)
* Riga3: **addressDetails** (massimo 44)
* Riga4: **address** (massimo 44)
* Riga5:
  * Per Italia: **zip** + " " + **municipality**' (massimo 35) + " " + **province** (massimo 2) (il totale non può superare 44)
  * Per Estero: **zip** + " " + **municipality**' (massimo 35) + " " + province (il totale non può superare 44)
* Riga6: **foreignState** (massimo 44)

## Formattazione corretta

Per consentire ad una notifica di essere accettata l'indirizzo deve contenere le informazioni contenute nella seguente tabella:

<table><thead><tr><th width="100">Riga</th><th>Nome Riga</th><th>Descrizione</th><th>Obbligatoria</th></tr></thead><tbody><tr><td>1</td><td>DEST</td><td><strong>Destinatario</strong><br>Titolo, nome e cognome o Ragione Sociale</td><td>SI</td></tr><tr><td>2</td><td>AGG</td><td><strong>Aggiuntive</strong><br>Informazioni per specificare meglio il destinatario</td><td>NO</td></tr><tr><td>3</td><td>EDIF</td><td><strong>Edificio</strong><br>Informazioni sull'edificio(scala, interno, ecc..)</td><td>NO</td></tr><tr><td>4</td><td>IND</td><td><p> </p><p><strong>Indirizzo</strong></p><p>Contiene nell'ordine il qualificatore (via, corso, piazza..),</p><p>il nome della via, Il numero civico</p><p>In alternativa la CASELLA POSTALE, LOCALITA</p></td><td>SI</td></tr><tr><td>5</td><td>LOC</td><td><p><strong>Località</strong><br>Contiene nell'ordine il CAP, la località di destinazione e la sigla della provincia.</p><p>Tutte le informazioni sono obbligatorie.</p></td><td>SI</td></tr><tr><td>6</td><td>EST</td><td><p><strong>Stato Estero</strong></p><p>Contiene esclusivamente lo Stato estero di destinazione.</p></td><td>Solo se invio estero</td></tr></tbody></table>





### Indirizzi Esteri

SEND assicura copertura totale dei servizi di recapito della Corrispondenza diretta all’estero nelle zone:

* Zona 1 – Europa e Bacino del Mediterraneo
* Zona 2 – Altri Paesi dell’Africa, Americhe, Altri Paesi dell’Asia
* Zona 3 – Oceania

I territori di destinazione sono raccolti dal Fornitore del Servizio Universale all’interno della pagina seguente: [https://www.poste.it/zone-tariffarie-posta-prioritaria-internazionale.html](https://www.poste.it/zone-tariffarie-posta-prioritaria-internazionale.html).

I territori che, per causa di forza maggiore, sono impossibilitati al recapito vengono raccolti dal Fornitore del Servizio Universale all’interno della pagina seguente: [https://www.poste.it/aggiornamenti-operativi.html#comunicazioni\_operative\_internazionali](https://www.poste.it/aggiornamenti-operativi.html#comunicazioni\_operative\_internazionali).”
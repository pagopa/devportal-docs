# Logiche di stampa indirizzo

Per la composizione dell'indirizzo, i sistemi di stampa prevedono un massimo di 5 righe da 44 caratteri ciascuna, così da compilare correttamente la "finestrella" della raccomandata con le informazioni del destinatario. Le righe diventano 6 solo per le destinazioni estere, in cui l'ultima riga è riservata esclusivamente al nome dello Stato estero, indicato in lingua italiana o internazionale. Fanno eccezione San Marino e Città del Vaticano, che seguono la struttura a 5 righe.&#x20;

Di seguito è riportata la struttura delle righe stampate sull'AAR:\


* Riga 1: `denomination` (fino a 44 caratteri)
* Riga 2: eventuali caratteri oltre la 44ª posizione di `denomination` + " " + `at` (fino a 44 caratteri)  &#x20;
* Riga 3: `addressDetails` + " " + `municipalityDetails` (fino a 44 caratteri)
* Riga 4: `address` (fino a 44 caratteri)
* Riga 5: `zip` + " " + `municipality` + " " + `province` (fino a 44 caratteri)&#x20;
* Riga 6: `foreignState` (solo per indirizzi al di fuori di Italia, San Marino e Città del Vaticano) (fino a 44 caratteri)    &#x20;

### Esempi

I dati obbligatori possono essere riportati su un minimo di 3 righe, così come indicato di seguito:\


* Riga 1 : `denomination`
* Riga 2: `address`&#x20;
* Riga 3: `zip` + `municipality` + `province`&#x20;

<kbd>GIOVANNI NOTO</kbd>           \
<kbd>VIA DELLA REPUBBLICA 100</kbd>\ <kbd>13900 BIELLA BI</kbd>

Se il campo `denomination` supera i 44 caratteri, i restanti vengono riportati in seconda riga, per un totale di 4 righe. Nell'esempio di seguito, `denomination` è stato valorizzato con "CONSORZIO PER LA PROMOZIONE DEL MARCHIO STORICO DEI VINI REGGIANI":&#x20;

<kbd>CONSORZIO PER LA PROMOZIONE DEL MARCHIO STOR</kbd>\ <kbd>ICO DEI VINI REGGIANI</kbd>\ <kbd>VIA CRISPI 3</kbd>\ <kbd>42121 REGGIO EMILIA RE</kbd>

Le prime due righe dell’indirizzo sono valorizzabili complessivamente fino a 88 caratteri. Nell’esempio di seguito, il campo `at` è valorizzato con “ALLA C.A. GIOVANNI NOTO”, ma, avendo raggiunto il limite massimo di caratteri, la dicitura viene troncata:

<kbd>CONSORZIO PER LA PROMOZIONE DEL MARCHIO STOR</kbd>\ <kbd>ICO DEI VINI REGGIANI ALLA C.A. GIOVANNI NOT</kbd>\ <kbd>VIA CRISPI 3</kbd>\ <kbd>42121 REGGIO EMILIA RE</kbd>

Nel caso di presenza delle informazioni secondarie di ubicazione (`addressDetails`) e/o del nome secondario della località di destinazione (`municipalityDetails`), questi dati vengono stampati sulla riga immediatamente precedente quella di `address`. Nell'esempio che segue, i due campi sono stati valorizzati con

* `addressDetails`: EDIFICIO A SCALA B PALAZZINA 12
* `municipalityDetails`: RIVALTA

<kbd>CONSORZIO PER LA PROMOZIONE DEL MARCHIO STOR</kbd>\ <kbd>ICO DEI VINI REGGIANI ALLA C.A. GIOVANNI NOT</kbd>\ <kbd>EDIFICIO A SCALA B PALAZZINA 12 RIVALTA</kbd>\ <kbd>VIA CRISPI 3</kbd>\ <kbd>42121 REGGIO EMILIA RE</kbd>


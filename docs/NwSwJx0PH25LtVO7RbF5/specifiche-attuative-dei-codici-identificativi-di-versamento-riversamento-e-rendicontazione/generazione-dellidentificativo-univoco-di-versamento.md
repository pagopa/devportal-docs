# Generazione dell’Identificativo Univoco di Versamento

Secondo quanto definito nel [paragrafo 7.1 delle Linee Guida](https://www.gazzettaufficiale.it/eli/id/2018/07/03/18A04494/sg) la generazione di un codice IUV che risulti **univoco** nel corso del tempo è una responsabilità in capo all'EC, che è libero di strutturarne la composizione secondo le proprie esigenze, facendo attenzione che tale codifica sia conforme agli standard internazionali esistenti e tenga conto del numero dei “punti di generazione” del codice stesso ([Punti di generazione del codice IUV](generazione-dellidentificativo-univoco-di-versamento.md#punti-di-generazione-del-codice-iuv)).

## **Punti di generazione del codice IUV**

Il sistema pagoPA consente ad un EC di utilizzare uno più intermediari e/o partner tecnologici: tale circostanza fa sì che la generazione dello IUV possa avvenire in maniera indipendente presso più soggetti e possibilmente non sotto il controllo diretto dell’EC.

Tale situazione può essere presente anche presso EC dotati di un'organizzazione complessa e articolata in più unità organizzative autonome, che hanno la necessità di generare il codice IUV in maniera indipendente.

Si definisce quindi "punto di generazione del codice IUV" qualsiasi entità, facente parte o meno dell'organizzazione dell'EC, incaricata da questo di associare un codice IUV ad un unico pagamento presente nell'archivio dei pagamenti in attesa di cui al [paragrafo 7 delle Linee Guida](https://www.gazzettaufficiale.it/eli/id/2018/07/03/18A04494/sg).

PagoPA S.p.A. attribuirà uno o più codici di segregazione (progressivamente a salire: da 00 a 49) ad ognuno degli intermediari/partner tecnologici, ovvero entità autonome dell'EC, secondo quanto da questi richiesto.

Se un EC genera in proprio attraverso entità autonome il codice IUV e si avvale contemporaneamente di un intermediario o di un partner tecnologico, le entità autonome dovranno essere censite alla stregua di intermediario/partner dello stesso ente.

## **Il codice di segregazione**

Tutto ciò premesso, è necessario definire delle regole affinché la codifica del pagamento risulti effettivamente univoca all'interno dell'EC nel corso del tempo: questo risultato si ottiene associando ad ogni punto di generazione del codice IUV un particolare codice che serve a segregare i domini di gestione dei pagamenti dell'ente.

Tale codice viene denominato "codice di segregazione".

PagoPA S.p.A. attribuisce il codice di segregazione ad ogni punto di generazione del codice IUV in funzione del soggetto che svolge il ruolo di intermediario o partner tecnologico, secondo la seguente classificazione:

1. **Erogatori di servizi centralizzati**: intermediari tecnologici, che erogano servizi in modalità accentrata a livello nazionale;
2. **Punti di generazione del codice IUV**: qualsiasi intermediario o partner tecnologico che non rientra nella classificazione precedente, nonché le unità autonome dell'ente.

Uno schema delle modalità di attribuzione del Codice Segregazione è riportata in Figura 1.

![Figura 1 - Attribuzione del codice segregazione](../.gitbook/assets/image.png)

### **Erogatori di servizi centralizzati**

Sono quei soggetti, censiti a livello generale, che erogano servizi centralizzati per una comunità di EC con riferimento a procedure specifiche: quali, ad esempio, il SUAP, l'emissione on-line della Carta di Identità Elettronica, l'emissione dei certificati anagrafici tramite ANPR, ecc.

In alcuni casi, come ad esempio quello legato all’emissione on-line della CIE o dei certificati anagrafici, che consentono di effettuare contestualmente il pagamento del servizio, l’utilizzo della procedura centralizzata sarà obbligatorio per tutti i comuni italiani.

L'attribuzione della qualifica di erogatore di servizi centralizzati deve essere richiesta a PagoPA SpA che provvederà ad aggiornare l'elenco riportato nella Tabella 1.

#### Tabella 1 - Codici di segregazione dei servizi centralizzati

<table><thead><tr><th width="157.3560034943871">codice segregazione</th><th width="256.4239379394335">Soggetto che eroga il servizio</th><th>Servizio</th></tr></thead><tbody><tr><td>99</td><td>Ministero dell'Interno</td><td>Emissione on-line CIE</td></tr><tr><td>98</td><td>Ministero dell'Interno</td><td>Emissione certificati da ANPR</td></tr><tr><td>97</td><td>Unioncamere</td><td>SUAP</td></tr><tr><td>96</td><td>Automobile Club d’Italia</td><td>Pago bollo</td></tr><tr><td>85</td><td>PagoPA S.p.A.</td><td>Sussidiarietà TARI/TEFA</td></tr><tr><td>81</td><td>PagoPA S.p.A.</td><td>N/A</td></tr><tr><td>47</td><td>PagoPA S.p.A.</td><td>Canone Unico</td></tr></tbody></table>

## Composizione del Codice Avviso

Per tutti i tipi di pagamento deve essere sempre presente un avviso di pagamento (analogico o digitale) al quale è associato un Numero Avviso che contiene al suo interno il codice IUV.&#x20;

#### Schema A

La struttura del Numero Avviso, che si adegua a prassi e standard _de facto_ preesistenti e consolidati presso i PSP, è specificata dal seguente schema, dove i componenti indicati assumono il seguente significato:

$$
<aux digit (1n)>[<application code>(2n)]<codice IUV (15|17n)>
$$

{% hint style="info" %}
Si noti come, nella rappresentazione del precedente schema e di quelli successivi, i componenti all'interno delle parentesi quadre possano non essere presenti nell'oggetto, mentre il carattere “|” indichi la presenza in alternativa dei vari componenti oppure i possibili valori che può assumere la lunghezza del componente stesso.
{% endhint %}

| **Aux Digit**        | Valore numerico che definisce la struttura del codice IUV in funzione del numero di punti di generazione dello stesso. I valori 0-1-2  sono deprecati e si riportano in questo documento solo per retro compatibilità.                                                                                                                                                                                                                                                                                                                                        |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Application Code** | Valore numerico che serve ad individuare la porzione dell’archivio dei pagamenti in attesa interessata dall’operazione. Il dato è presente o meno in funzione del componente `<aux digit>`                                                                                                                                                                                                                                                                                                                                                                    |
| **Codice IUV**       | <p>Rappresenta l'identificativo univoco di versamento, così come definito nel <a href="https://www.gazzettaufficiale.it/eli/id/2018/07/03/18A04494/sg">paragrafo 7.1 delle Linee Guida</a>. Ad un singolo pagamento in attesa può essere associato uno ed un solo codice IUV, indipendentemente dai possibili diversi strumenti messi a disposizioni dal PSP.</p><p>Per la struttura del codice IUV si faccia riferimento a <a href="generazione-dellidentificativo-univoco-di-versamento.md#composizione-del-codice-iuv">Composizione del codice IUV</a></p> |

La componente `<application code>` identifica il singolo archivio di pagamenti in attesa e viene indirizzato mediante i meccanismi di configurazione del Nodo dei Pagamenti-SPC, che in questo modo sarà in grado di individuare il corretto canale di inoltro delle richieste di verifica e attivazione di pagamento. In sintesi questa informazione rappresenta "l'indirizzo" dell'archivio dove sono conservate le richieste in attesa che hanno dato luogo all’avviso di pagamento.

## **Composizione del codice IUV**

#### Schema B

La composizione del **codice IUV** è rappresentata dallo schema come concatenazione dei suoi componenti, che assumono il seguente significato:

$$
[<Codice segregazione (2n)>]<IUV base (13|15|17n)>[<IUV check digit (2n)>]
$$

| **Codice segregazione** | Valore numerico che rappresenta il [Codice di Segregazione](generazione-dellidentificativo-univoco-di-versamento.md#il-codice-di-segregazione) Il componente è presente o meno nella struttura del codice IUV in funzione del componente `<aux digit>` del Numero Avviso |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **IUV base**            | Valore numerico che ogni EC è libero di strutturare secondo le proprie esigenze, nei limiti indicati dalle presenti specifiche attuative. Il componente assume una lunghezza variabile in funzione del componente `<aux digit>` del Numero Avviso                        |
| **IUV check digit**     | Rappresenta il codice di controllo dello IUV, calcolato con l'algoritmo precisato nei paragrafi successivi. Il componente è presente o meno nella struttura del codice IUV in funzione del componente `<aux digit>` del Numero Avviso                                    |

La previsione del carattere di controllo dello IUV (`<IUV check digit (2n)>`) non comporta per il PSP l’obbligo bensì la facoltà di verifica, consentendo al PSP stesso di controllare il Numero Avviso, con evidente efficientamento del processo di pagamento in quanto evita preventivamente la ricezione di risposte negative inviate dall’EC.

## **Generazione del Numero Avviso e del codice IUV**

La necessità di gestire l’emissione del codice IUV presso più “punti di generazione”, nonché quella di trattare particolari situazioni in essere presso gli EC, viene realizzata attraverso l’assegnazione di valori diversi al componente `<aux digit>` del Numero Avviso, cosi come indicato in Tabella 2, dove i valori assegnati a tale componente determinano sia la presenza, sia la lunghezza, degli altri componenti del codice IUV e del Numero Avviso.

#### Tabella 2 - Codifiche in base a punti di generazione

<table><thead><tr><th width="150">Punti generazione IUV</th><th width="150">&#x3C;aux digit></th><th width="150" data-type="checkbox">&#x3C;application code></th><th width="150" data-type="checkbox">&#x3C;codice segregazione></th><th>Lunghezza &#x3C;IUV base></th><th data-type="checkbox">&#x3C;IUV check digit></th><th>Lunghezza codice IUV</th></tr></thead><tbody><tr><td>1</td><td>0</td><td>true</td><td>false</td><td>13</td><td>true</td><td>15</td></tr><tr><td>1</td><td>1</td><td>false</td><td>false</td><td>17</td><td>false</td><td>17</td></tr><tr><td>≥ 1</td><td>2</td><td>false</td><td>false</td><td>15</td><td>true</td><td>17</td></tr><tr><td>> 1</td><td>3</td><td>false</td><td>true</td><td>13</td><td>true</td><td>17</td></tr></tbody></table>

{% hint style="info" %}
Quando `<aux digit>` è diverso da `0,` la lunghezza del codice IUV è di 17 posizioni, mentre `<application code>` scompare e, in alcuni casi, viene sostituito da [`<codice segregazione>`](generazione-dellidentificativo-univoco-di-versamento.md#il-codice-di-segregazione)`.`
{% endhint %}

### **Valore 0 del componente `<Aux Digit>`**

Si tratta dello schema per la composizione del numero utilizzabile solamente se il "punto di generazione del codice IUV" sia unico. Lo schema **NAV.0** evidenzia la composizione da utilizzare per il numero avviso:

#### Schema NAV.0

$$
0<application code (2n)><IUV base (13n)><IUV check digit (2n)>
$$

L'EC può prevedere più porzioni dell’Archivio dei Pagamenti in Attesa (APA), mentre la composizione del codice IUV è definita dallo schema **IUV.0** di seguito evidenziato:

#### Schema IUV.0

$$
<IUV base (13n)><IUV check digit (2n)>
$$

dove il componente `<IUV check digit>` si calcola come resto della divisione per 93 del numero ottenuto concatenando i componenti `<aux digit>`, `<application code>` e `<IUV base>`.

### **Valore 1 del componente `<Aux Digit>`**

Si tratta di uno schema previsto per tutelare particolari situazioni pre-esistenti alla emanazione delle Linee Guida, è il caso, ad esempio, dell'EC ADER che identifica le proprie cartelle con un codice denominato RAV, che ha le stesse caratteristiche di lunghezza e formato del codice IUV, ma utilizza regole diverse di generazione; tale schema è utilizzabile solamente se il "punto di generazione del codice IUV" è unico.

#### Schema NAV.1

Lo schema evidenzia la composizione da utilizzare per il numero avviso:

$$
1<IUV base (17n)>
$$

Il codice IUV è formato dal componente `<IUV base>`, manca il componente `<IUV check digit>`.

L'EC ha un archivio APA non partizionato oppure gestisce in proprio la segregazione tra le varie procedure aziendali, in questo caso è compito dell'ente attivare la procedura aziendale di competenza.

### **Valore 2 del componente `<Aux Digit>`**

Si tratta di uno schema previsto per gestire EC di grandi dimensioni, che però utilizzano un archivio APA non partizionato oppure che gestiscono in proprio la segregazione tra le varie procedure aziendali, anche in questo caso è compito dell'ente attivare la procedura aziendale di competenza.

Lo schema è utilizzabile se il "punto di generazione del codice IUV" è unico. Gli EC che usufruiscono di servizi centralizzati ([Codice di Segregazione](generazione-dellidentificativo-univoco-di-versamento.md#il-codice-di-segregazione)) possono utilizzare questo schema se, nella generazione dello IUV, hanno cura che i primi due caratteri a sinistra del componente `<IUV base>` siano diversi dai tutti i valori presenti nella colonna “codice segregazione” di Tabella 1 relativa agli erogatori di servizi centralizzati.&#x20;

#### Schema NAV.2

Lo schema evidenzia la composizione da utilizzare per il numero avviso:

$$
2<IUV base (15n)><IUV check digit (2n)>
$$

#### Schema IUV.2

La composizione del codice IUV è definita dallo schema di seguito:

$$
<IUV base (15n)><IUV check digit (2n)>
$$

dove il componente `<IUV check digit>` si calcola come resto della divisione per 93 del numero ottenuto concatenando le componenti `<aux digit>` e `<IUV base>`.

### **Valore 3 del componente `<Aux Digit>`**

Si tratta di uno schema previsto per gestire gli enti che hanno più di un intermediario/partner tecnologico, cioè enti per i quali il "punto di generazione del codice IUV" non è unico.

#### Schema NAV.3

Lo schema evidenzia la composizione da utilizzare per il numero avviso:

$$
3<codice segregazione (2n)><IUVbase (13n)><IUV check digit (2n)>
$$

#### Schema IUV.3

La composizione del codice IUV è definita dallo schema di seguito:

$$
<codice segregazione (2n)><IUV base (13n)><IUV check digit (2n)>
$$

dove il componente `<IUV check digit>` si calcola come resto della divisione per 93 del numero ottenuto concatenando i componenti `<aux digit>`, `<codice segregazione>` e `<IUV base>`.

Resta inteso che è compito dell'EC e/o dei suoi Intermediari/partner tecnologici attivare correttamente la porzione di archivio APA interessata dal pagamento.

A completamento di quanto sopra indicato, si sottolinea che anche gli EC non intermediati o intermediati da un unico soggetto possono adottare, di concerto con il proprio intermediario se presente, gli schemi di generazione dello IUV proposti in questo paragrafo, senza richiedere a PagoPA l’assegnazione di uno più specifici codici segregazione.

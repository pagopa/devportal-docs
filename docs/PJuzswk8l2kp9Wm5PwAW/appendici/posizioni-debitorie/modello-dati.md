# Modello Dati

## Gestione posizioni debitorie

La **posizione debitoria** **(PD)** ha le seguenti relazioni

* Una **PD** è collegata a un **debitore (Deb)** **.** Se esiste un **Deb** esiste _almeno una_ **PD** ad esso collegata.
* Una **PD** può avere più **opzioni di pagamento (OdP).** Ne esiste _almeno una_. Una **OdP** è collegata ad una sola **PD**.

{% hint style="info" %}
_Ad esempio, una delle opzioni più comuni di pagamento per un tributo annuale sono:_

* _rata unica_
* _prima rata_
* _..._
* _n-esima rata_
{% endhint %}

* Una **OdP** può avere più **versamenti**, tanti quanti gli Enti Creditori (EC) a cui deve afferire. Ne esiste _almeno uno_. Un **versamento** è collegato ad una sola **OdP**.

{% hint style="info" %}
_Ad esempio, una opzione di pagamento potrebbe avere la seguente suddivisione:_

* _pagamento monobeneficiario, con singolo versamento (1 EC, 1 versamento)_
* _pagamento monobeneficiario , con più versamenti (1 EC, n versamenti)_
* _pagamento multibeneficiario (n EC, n versamenti)_
* _una combinazione dei punti precedenti ( n EC, m versamenti con m>n)_
{% endhint %}

### Schema logico (ER)

![](<../../.gitbook/assets/image (43).png>)

#### Posizione Debitoria (PD) <a href="#posizione-debitoria-pd" id="posizione-debitoria-pd"></a>

Ad alto livello una posizione debitoria ha le seguenti caratteristiche

* **IUPD** : identificativo univoco posizione debitoria

{% hint style="info" %}
Un suo possibile formato potrebbe essere: < _**CodiceFiscale EC**_ + [UUID](https://tools.ietf.org/html/rfc4122) >

E' onere dell’EC la creazione dello IUPD e assicurarsi della sua univocità. Compito del servizio è garantirla ( check dell’univocità dell’IUPD nel sistema _**pagoPa**_ ) avvisando in caso contrario avvisare l’EC.
{% endhint %}

* **Ente Creditore -** Codice Fiscale dell’ente creditore “gestore” della PD.
* **Anagrafica Ente Creditore** - (ragione sociale, dipartimento, ufficio, …)
* **Data di Validità** (start)- data da cui è valida e pagabile la PD

{% hint style="info" %}
È responsabilità dell’EC gestire la PD e ogni informazione ad essa associata, ivi compresa la data di validità.
{% endhint %}

* **Data di pubblicazione -** data in cui la PD è pubblicata sul sistema
* **Scadenza**_\[flag]_: indica se la PD è da invalidare alla scadenza oppure no

#### Debitore <a href="#debitore" id="debitore"></a>

Ad alto livello un debitore ha le seguenti caratteristiche

* **Tipo**: indica se è una persona fisica o giuridica
* **Identificativo**: Codice Fiscale (o anche partita iva in caso di persona giuridica) del debitore
* **Indirizzo** _\[optional]_ : Città, provincia, indirizzo, etc.
* **Email** _\[optional]_
* **Numero di telefono** _\[optional]_

#### Opzione di Pagamento (OdP) <a href="#opzione-di-pagamento-odp" id="opzione-di-pagamento-odp"></a>

Ad alto livello un'opzione di pagamento ha le seguenti caratteristiche

* **IUV** - Identificativo Univoco Versamento, univoco per ogni OdP sarà l’identificativo utilizzato dal NodoSPC per il pagamento
* **Ente Creditore -** CF dell’ente creditore “gestore” della PD. Insieme allo IUV permette di identificare univocamente un pagamento.
* **Importo** - importo previsto per l’OdP.
* **Descrizione** - breve descrizione del contento della OdP (es: nel caso di riduzione potrebbe essere “_Riduzione del 30% se pagamento effettuato entro 7gg dall’emissione della PD_“ )
* **Rata** \[_flag_] - indica se l’opzione è parte di un pagamento rateale. In caso di pagamento rateale la PD associata è da considerarsi “pagata” solo quando tutte le rate sono pagate.
* **Data di scadenza** (end) - data entro cui è pagabile la OdP
* **Meta-Dati** _\[optional]_ - array per permettere agli EC di inserire informazioni utili ai loro bisogni, tipicamente relativi alla riconciliazione contabile, allineamento programmi gestionali, etc. Dovrà avere una dimensione limitata ed esplicita (con relativo msg di errore in caso di saturazione)

#### Versamento <a href="#versamento" id="versamento"></a>

Ad alto livello un versamento ha le seguenti caratteristiche:

* **Id versamento:** identificativo (progressivo) di un versamento all’interno di una OdP
* **Ente Creditore:** ente beneficiario del versamento
* **Importo:** importo previsto per il versamento
* **Causale versamento:** Causale del singolo versamento
* **Tassonomia:** Tassonomia del servizio associato al versamento.
* **IBAN:** IBAN su cui verra riversato l’importo.

## Pagamento spontaneo

Possiamo considerare il **Pagamento Spontaneo** come un _“caso particolare”_ di una **Posizione Debitoria** che viene creata al momento della richiesta da parte dell'utente.

In caso di pagamento spontaneo:

* Una **OdP** corrisponde alla richiesta di **Pagamento Spontaneo (PS).**
* Ad una **OdP** potranno essere associati più possibili **versamenti** (in base alla tipologia di pagamento spontaneo).
* La **PD** collegata alla **OdP** avrà solo quella **OdP.**
* Un **CIT** potrà avere una o più **PD** (se esiste un CIT nel sistema ne esiste _almeno una_).

### Sottoscrizione ai servizi di pagamento spontaneo (schema logico)

![](<../../.gitbook/assets/EnrollmentPS.drawio (3).png>)

Un **Ente Creditore** , aderente alla gestione dei pagamenti spontanei, può aderire a più **servizi.** La disponibilità dei servizi dipende dal catalogo dei servizi della piattaforma pagoPA.

Alcune proprietà rilevanti delle relazioni in questione sono riportate in seguito.

#### Ente Creditore

* **identificativo:** Codice fiscale dell’ente creditore “aderente” gestione dei servizi di pagamento spontaneo
* **ragione sociale:** La ragione sociale dell’Ente creditore.

#### **Servizio**

* **idServizio:** identificativo del servizio, come definito dalla piattaforma pagoPa con il catalogo servizi
* **nome**: nome del servizio
* **descrizione:** descrizione del servizio
* **proprietà del servizio**: per gestire le caratteristiche specifiche del servizio
* **tassonomia**: tassonomia del servizio

{% hint style="info" %}
Nel caso in cui l'Ente Creditore avesse necessità per un servizio specifico di gestire opzioni di pagamento particolari che prevedono azioni specifiche per il recupero dei dati, la piattaforma _GPS_ mette a disposizione di Enti Creditori e Intermediari Tecnologici la possibilità di esporre un servizio per la creazione di una opzione di pagamento ad-hoc. Tale servizio verrà invocato dalla piattaforma _GPS_ per recuperare l'opzione di pagamento in fase di creazione della posizione debitoria.

Tale servizio può essere configurato mediante la valorizzazione di due `properties` che fanno parte dell'entità _servizio:_ &#x20;

**`endpoint`**: _URL_ servizio per il recupero dell'opzione di pagamento

**`basePath`**: _context root_ del servizio per il recupero dell'opzione di pagamento

Nel caso in cui dovesse sorgere questa esigenza, _PagoPA_ fornirà tutte le specifiche per l'implementazione del servizio.
{% endhint %}

#### Enrollment (sottoscrizione al servizio)

* **IBAN**: IBAN su cui incassare i pagamenti spontanei generati per uno specifico servizio
* **nome ufficio:** ufficio di riferimento per lo specifico servizio
* **causale versamento**: causale versamento da assegnare ai pagamenti spontanei generati per uno specifico servizio

## Bollettino Postale PA

Se l'EC dispone di almeno un conto corrente postale per gli incassi è necessario che segua quanto indicato in [#bollettino-postale-pa](../../ente-creditore/modalita-dintegrazione/best-practice.md#bollettino-postale-pa "mention") per la creazione della **PD.**&#x20;

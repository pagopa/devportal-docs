---
argomenti_correlati:
- /pari/guida-operativa/caricamento-prodotti
funzione: guida-tecnica
livello: intermedio
prodotto:
  nome: PARI - Bonus Elettrodomestici - Manuale per il Produttore
  versione: v1.0.0
schema:
  '@context': https://schema.org
  '@type': FAQPage
  author:
    '@type': Organization
    name: PagoPA S.p.A.
  description: Elenco completo degli errori di validazione restituiti durante il caricamento
    dei file CSV per il prodotto PARI - Bonus Elettrodomestici, con le relative cause
    e azioni correttive per i Produttori.
  mainEntity:
  - '@type': Question
    acceptedAnswer:
      '@type': Answer
      text: Il Produttore non risulta censito nella banca dati EPREL. È necessario
        completare la registrazione e il caricamento delle informazioni sul portale
        EPREL prima di procedere.
    name: Il produttore non risulta nell'elenco della Banca dati europea dei prodotti
      per l'etichettatura energetica; è necessario completare le informazioni sul
      portale EPREL
  - '@type': Question
    acceptedAnswer:
      '@type': Answer
      text: Il marchio associato al prodotto non è stato censito correttamente nella
        banca dati EPREL. È necessario verificare e completare le informazioni sul
        portale EPREL.
    name: Il marchio associato al prodotto non risulta nell'elenco della Banca dati
      europea dei prodotti per l'etichettatura energetica - EPREL
  - '@type': Question
    acceptedAnswer:
      '@type': Answer
      text: Il prodotto è contrassegnato come 'bloccato' su EPREL. Il Produttore deve
        verificare lo stato del prodotto sul portale EPREL e risolvere la problematica
        direttamente su quella piattaforma.
    name: Il prodotto risulta bloccato nell'elenco della Banca dati europea dei prodotti
      per l'etichettatura energetica - EPREL
  - '@type': Question
    acceptedAnswer:
      '@type': Answer
      text: Il prodotto non risulta attualmente pubblicato sulla banca dati EPREL
        e non può essere validato. Verificare che il prodotto sia stato pubblicato
        correttamente su EPREL prima di ricaricarlo.
    name: Il prodotto non è presente o caricato nell'elenco della Banca dati europea
      dei prodotti per l'etichettatura energetica - EPREL
  - '@type': Question
    acceptedAnswer:
      '@type': Answer
      text: La categoria specificata nel file CSV non corrisponde a quella associata
        al codice EPREL fornito. Correggere la categoria nel file CSV affinché sia
        coerente con i dati presenti su EPREL.
    name: La categoria presente sulla Banca dati europea dei prodotti per l'etichettatura
      energetica - EPREL non è coerente con quella del file CSV
  - '@type': Question
    acceptedAnswer:
      '@type': Answer
      text: La classe energetica del prodotto è inferiore al minimo richiesto dalla
        normativa per accedere al bonus. Il prodotto non può essere candidato se non
        rientra nei parametri richiesti.
    name: La classe energetica non è conforme con quella prevista nel DM del 03/09/2025
  - '@type': Question
    acceptedAnswer:
      '@type': Answer
      text: Il Codice GTIN/EAN è stato utilizzato per più di un prodotto all'interno
        dello stesso file CSV. Rimuovere la riga duplicata dal file e procedere a
        un nuovo caricamento.
    name: Il codice GTIN indicato nel file CSV è un duplicato
  - '@type': Question
    acceptedAnswer:
      '@type': Answer
      text: Il prodotto risulta già registrato a nome di un altro Produttore. Se si
        ritiene sia un errore, è necessario contattare l'assistenza per richiederne
        la rimozione manuale.
    name: Il prodotto indicato è associato ad un altro produttore
  - '@type': Question
    acceptedAnswer:
      '@type': Answer
      text: Si sta tentando di aggiornare un prodotto che si trova in uno stato di
        lavorazione intermedio. È possibile aggiornare solo prodotti con stato 'ESCLUSO'
        o 'DA ESAMINARE'. Attendere il completamento del ciclo di verifica prima di
        inviare aggiornamenti.
    name: Il prodotto è sottoposto alle verifiche previste dal DM del 03/09/2025 e
      pertanto non è possibile variare le informazioni ad esso collegate
  name: Elenco dei codici di errore per il caricamento prodotti PARI
status: pubblicato
tecnologia:
- CSV
- EPREL
utente:
  ruolo: produttore
  tag:
  - codici errore
  - validazione
  - EPREL
  - caricamento file
  - CSV
  - GTIN
  tipo_ente: partner_tecnologico
---

# Elenco dei codici di errore

Questa sezione elenca tutti i possibili errori di validazione che possono essere restituiti nel file di scarto a seguito di un caricamento. Per ogni errore, vengono forniti il messaggio che appare nel file, la categoria di appartenenza e una descrizione che include l'azione correttiva richiesta al Produttore.

***

#### Tabella degli Errori

<table data-full-width="true"><thead><tr><th>Messaggio di errore</th><th width="135.40234375">Categoria</th><th>Descrizione e Azione Correttiva</th></tr></thead><tbody><tr><td>Il produttore non risulta nell'elenco della Banca dati europea dei prodotti per l'etichettatura energetica; è necessario completare le informazioni sul portale EPREL</td><td>EPREL</td><td>Il Produttore non risulta censito nella banca dati <strong>EPREL</strong>. È necessario completare la registrazione e il caricamento delle informazioni sul portale EPREL prima di procedere.</td></tr><tr><td>Il marchio associato al prodotto non risulta nell'elenco della Banca dati europea dei prodotti per l'etichettatura energetica - EPREL</td><td>EPREL</td><td>Il marchio associato al prodotto non è stato censito correttamente nella banca dati <strong>EPREL</strong>. È necessario verificare e completare le informazioni sul portale EPREL.</td></tr><tr><td>Il prodotto risulta bloccato nell'elenco della Banca dati europea dei prodotti per l'etichettatura energetica - EPREL</td><td>EPREL</td><td>Il prodotto è contrassegnato come "bloccato" su <strong>EPREL</strong>. Il Produttore deve verificare lo stato del prodotto sul portale EPREL e risolvere la problematica direttamente su quella piattaforma.</td></tr><tr><td>Il prodotto non è presente o caricato nell'elenco della Banca dati europea dei prodotti per l'etichettatura energetica - EPREL</td><td>EPREL</td><td>Il prodotto non risulta attualmente pubblicato sulla banca dati <strong>EPREL</strong> e non può essere validato. Verificare che il prodotto sia stato pubblicato correttamente su EPREL prima di ricaricarlo.</td></tr><tr><td>La categoria presente sulla Banca dati europea dei prodotti per l'etichettatura energetica - EPREL non è coerente con quella del file CSV</td><td>EPREL</td><td>La <strong>categoria</strong> specificata nel file CSV non corrisponde a quella associata al codice EPREL fornito. Correggere la categoria nel file CSV affinché sia coerente con i dati presenti su EPREL.</td></tr><tr><td>La classe energetica non è conforme con quella prevista nel DM del 03/09/2025</td><td>EPREL</td><td>La <strong>classe energetica</strong> del prodotto è inferiore al minimo richiesto dalla normativa per accedere al bonus. Il prodotto non può essere candidato se non rientra nei parametri richiesti.</td></tr><tr><td>Il codice GTIN indicato nel file CSV è un duplicato</td><td>Check Interni</td><td>Il <strong>Codice GTIN/EAN</strong> è stato utilizzato per più di un prodotto all'interno dello stesso file CSV. Rimuovere la riga duplicata dal file e procedere a un nuovo caricamento.</td></tr><tr><td>Il prodotto indicato è associato ad un altro produttore</td><td>Check Interni</td><td>Il prodotto risulta già registrato a nome di un altro Produttore. Se si ritiene sia un errore, è necessario contattare l'assistenza per richiederne la rimozione manuale.</td></tr><tr><td>Il prodotto è sottoposto alle verifiche previste dal DM del 03/09/2025 e pertanto non è possibile variare le informazioni ad esso collegate</td><td>Check Interni</td><td>Si sta tentando di aggiornare un prodotto che si trova in uno stato di lavorazione intermedio. È possibile aggiornare solo prodotti con stato <strong>"ESCLUSO"</strong> o <strong>"DA ESAMINARE"</strong>. Attendere il completamento del ciclo di verifica prima di inviare aggiornamenti.</td></tr></tbody></table>
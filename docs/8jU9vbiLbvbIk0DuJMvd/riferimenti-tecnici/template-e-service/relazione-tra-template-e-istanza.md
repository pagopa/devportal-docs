---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/jqqB3CsnONZdScwRg13O/riferimenti-tecnici/template-e-service/relazione-tra-template-e-istanza
---

# Relazione tra template e istanza

## Chi può creare i template

Tutti gli **aderenti autorizzati all’erogazione** in un determinato ambiente possono **creare ed evolvere** template e-service. Per creare un nuovo template:

1. accedere a **Erogazione > I miei template e-service**;
2. cliccare su **Crea nuovo**.

La **creazione di un template** è analoga a quella di un **e-service**: contiene gli **stessi campi**, con in più un **campo dedicato alla descrizione del template**, che può includere **note informative** utili ai potenziali enti che ne deriveranno la propria istanza.

## Chi può istanziare e-service dai template

Anche in questo caso, tutti gli **aderenti autorizzati all’erogazione** in un certo ambiente possono **creare istanze** a partire dai template. Per farlo, è sufficiente:

1. accedere a **Erogazione > Template e-service**;
2. selezionare il **template di interesse**;
3. cliccare su **Usa template** per generare la propria istanza.

## Gestione dei requisiti di accesso (attributi)

La **definizione degli attributi** è **a discrezione del creatore del template**. L’ente che deriva la propria istanza **non può modificarli autonomamente**. Se ritiene ci siano **incongruenze**, deve contattare il **creatore del template** per richiedere eventuali rettifiche.

Come per qualsiasi e-service, gli **attributi dell’istanza** rappresentano i **requisiti di accesso** che i fruitori devono possedere per poter presentare una **richiesta di fruizione**.

Maggiori dettagli sugli attributi nella [sezione dedicata](operazioni-e-ciclo-di-vita.md).

## Relazione tra gli stati

Gli **stati del template** e quelli degli **e-service istanziati** sono **indipendenti**.

* Se un **template viene sospeso**, gli **e-service istanziati** da esso **restano invariati**.
* Se un **e-service istanziato** viene archiviato, ciò **non ha impatto** sul template.

Esempio: Un template sospeso non potrà più generare nuove istanze, ma un e-service già attivo continuerà a funzionare regolarmente.

## Recepimento degli aggiornamenti a un template

Un template e-service può essere **aggiornato nel tempo**. Gli aggiornamenti si distinguono in aggiornamenti minori e critici.

### Aggiornamenti minori

Si **propagano automaticamente** a tutte le istanze del template. Esempio: correzione di un errore testuale nella descrizione del template → la modifica è immediatamente visibile in tutte le istanze.

### Aggiornamenti critici

Richiedono la **pubblicazione di una nuova versione** del template (es. modifiche strutturali all’interfaccia API). In questi casi, gli **e-service derivati** devono essere **aggiornati manualmente** dagli enti che li gestiscono, dopo aver completato gli **adeguamenti tecnici necessari**.

L’aggiornamento dell’istanza genera una **nuova versione dell’e-service**, e in conseguenza di ciò:

* tutti i **fruitori** dovranno **aggiornare la propria richiesta di fruizione** all’ultima versione;
* eventuali **test o verifiche tecniche** andranno rieseguiti come per qualsiasi altro e-service.

## Aggiornamento di un’istanza

Un ente che ha pubblicato un’**istanza di e-service** può doverla **aggiornare autonomamente** per motivi specifici (es. variazione di **URL server** o **audience**). In questo caso, dovrà creare una **nuova versione della propria istanza**, analogamente a quanto avviene per qualsiasi e-service.

Può accadere che la **versione del template** e quella dell’**istanza** **non coincidano**.

Esempio: il **template e-service** è alla **versione 2**, mentre l’**istanza** dell’ente è alla **versione 3** per adattamenti specifici.

***

Pagina successiva [→ Altre informazioni](altre-informazioni.md)

# Portachiavi

## Che cos'è e a cosa serve

Il **portachiavi** consente all’erogatore di **firmare digitalmente** le risposte inviate ai fruitori e di pubblicare le **chiavi pubbliche** associate agli e-service. In questo modo i fruitori possono verificare, in autonomia, l’origine e la correttezza di ogni risposta utilizzando la chiave pubblica corrispondente.

**Vantaggi principali:**

1. **Non ripudio / identità del mittente** — la **chiave privata** è custodita **solo** dall’erogatore: la firma può provenire unicamente da lui. La verifica con la chiave pubblica attesta l’identità del mittente e fornisce garanzia di **non ripudiabilità**.
2. **Sicurezza / integrità** — la firma copre il **digest** della risposta. Se il contenuto fosse alterato o si verificasse un errore, il digest ricalcolato **non** corrisponderebbe a quello **firmato**: il fruitore, in fase di verifica, lo rileva e **scarta** la risposta.

I portachiavi possono essere **creati**, **eliminati**, **associati** o **disassociati** dagli e-service secondo le esigenze operative dell’ente.

Maggiori informazioni sulla garanzia dell'integrità della risposta nella [sezione dedicata](../utilizzare-i-voucher/garanzia-dellintegrita-della-risposta.md).

## Operazioni

### Creazione di un portachiavi

* Assegna **nome** e **descrizione** per identificarlo.
* È possibile **aggiungere o rimuovere** personale tecnico sia in fase di creazione sia successivamente.
* È possibile **aggiungere o rimuovere** chiavi pubbliche successivamente alla creazione del portachiavi.
* È sempre possibile creare nuovi portachiavi, anche con caratteristiche identiche a portachiavi già eliminati.

### Eliminazione di un portachiavi

* Un amministratore può **eliminarlo** in qualunque momento.
* L’eliminazione **revoca immediatamente** la capacità di firmare per **tutti** gli e-service associati.
* Le **chiavi pubbliche** contenute vengono **rimosse**.

### Associazione di un portachiavi ad un e-service

* Le chiavi pubbliche del portachiavi possono firmare **solo** per gli e-service a cui il portachiavi è **associato**.
* L’associazione si gestisce nella scheda dell’e-service, sezione **Portachiavi**.
* Un portachiavi può essere **associato a più e-service** contemporaneamente.

### Disassociazione di un portachiavi da un e-service

* Un amministratore può **disassociare** un portachiavi da un e-service.
* Dopo la disassociazione, il portachiavi **non firma** più per quell’e-service, ma continua a operare sugli altri servizi a cui è associato.

### Aggiunta di un utente ad un portachiavi

* Un amministratore può **aggiungere** utenti già registrati su PDND.
* Per inserire un nuovo utente, occorre prima censirlo nell’**Area Riservata**. Maggiori informazioni nella [sezione dedicata](../../per-iniziare/primo-accesso-e-configurazione-iniziale.md#gestione-di-utenti-e-ruoli).&#x20;

### Rimozione di un utente da un portachiavi

* Un amministratore può **rimuovere** utenti senza eliminare l’utenza dalla piattaforma.
* Dopo la rimozione, PDND **evidenzia le chiavi pubbliche** caricate dall’utente e **invita** alla loro sostituzione per garantire la sicurezza.

### Aggiunta di una chiave pubblica

* Gli utenti autorizzati possono **caricare chiavi pubbliche** nel portachiavi.
* La **chiave privata** corrispondente è custodita dall’ente e utilizzata per **firmare** le risposte.

### Eliminazione di una chiave pubblica

* L'utente che ha caricato la chiave (o un amministratore) può **eliminarla**.
* Dopo l’eliminazione, la chiave **non è più utilizzabile**; le risposte successive **non** sono verificabili con quella chiave.

***

Pagina successiva [→ Strumenti e riferimenti](strumenti-e-riferimenti.md)

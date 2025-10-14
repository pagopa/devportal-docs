# Operazioni

I **client** possono essere **creati** o **eliminati**, **associati** o **disassociati** dalle finalità **a discrezione degli amministratori** dell’ente.

## Creazione

La creazione dei client avviene dal front office:

* _Gestione del client > API e-service_ per i client API e-service;
* _Gestione del client > API Interoperabilità_ per i client destinati alle [API della piattaforma](../api-della-piattaforma/) PDND Interoperabilità.

È sufficiente indicare un nome e una descrizione per identificarli. Durante la creazione, è possibile aggiungere gli operatori di sicurezza e caricare le chiavi pubbliche necessarie.

La piattaforma consente di creare più client, anche con configurazioni identiche.

## Eliminazione

Un client può essere rimosso in qualsiasi momento. La sua eliminazione comporta l'**impossibilità di ottenere nuovi voucher per quel client** e la **rimozione automatica delle chiavi pubbliche** contenute.

## Associazione a una finalità

I client API e-service possono essere collegati alle finalità per le quali il fruitore dispone di una richiesta di fruizione attiva.

Nel front office, l'associazione avviene dalla scheda della finalità, nella sezione _Client associati_. Una volta associato, il client può richiedere voucher per l’e-service collegato.&#x20;

**Un client può essere associato a più finalità contemporaneamente.**

## Disassociazione da una finalità

Dalla scheda della finalità, è possibile disassociare un client quando non serve più. Dopo la disassociazione, il client **resta disponibile e operativo per tutte le altre finalità collegate**.

## Gestione degli utenti

Gli amministratori possono aggiungere o rimuovere operatori di sicurezza dai client in qualsiasi momento. È possibile associare ai client solo utenti già censiti su PDND Interoperabilità; per nuovi operatori, il censimento avviene tramite la piattaforma _Area Riservata_.

Quando un utente viene rimosso, la piattaforma evidenzia le chiavi pubbliche da lui caricate e invita alla loro sostituzione per garantire la sicurezza del sistema.

## Gestione delle chiavi pubbliche

Gli operatori di sicurezza possono caricare le chiavi pubbliche necessarie per la firma delle richieste di voucher.

La chiave privata, generata e conservata internamente all’ente, viene utilizzata per firmare le richieste verso PDND Interoperabilità.

Le chiavi pubbliche possono essere eliminate in ogni momento; da quel momento, eventuali richieste di voucher firmate con la chiave corrispondente non saranno accettate dalla piattaforma.

***

Pagina successiva [→ Organizzazione dei propri client](organizzazione-dei-propri-client.md)

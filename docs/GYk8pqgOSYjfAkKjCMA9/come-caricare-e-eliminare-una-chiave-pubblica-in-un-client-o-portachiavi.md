# Come caricare e eliminare una chiave pubblica in un client o portachiavi

## Come caricare una chiave pubblica da un client

### **Step 1**

Gli utenti di PDND Interoperabilità possono visualizzare i client ai quali sono associati sotto _**Fruizione > I tuoi client e-service**_ oppure _**Fruizione > I tuoi client api interop**_. Entrando all'interno del client di interesse, può andare nella tab _**Chiavi pubbliche**_ e _+ **Aggiungi**_ per caricare una nuova chiave. Le chiavi caricate saranno immediatamente utilizzabili. Per i client di tipo e-service, questo deve essere associato ad almeno una finalità il cui flusso di interazione con l'erogatore è attivo.

L'operazione è analoga per i portachiavi erogatore ed è disponibile nella vista _**Erogazione > I tuoi portachiavi**_.

Per caricare una chiave:&#x20;

1. generare la coppia di chiavi e riporle al sicuro;
2. copiare il contenuto del file della chiave pubblica (finisce in `.pub`, e il cui file inizia con `-----BEGIN PUBLIC KEY-----`);&#x20;
3. tornare su PDND Interoperabilità e, all’interno della propria utenza, andare sul bottone _**Carica nuova chiave**_;&#x20;
4. incollare la chiave nel campo di testo e cliccare su _**Carica chiave**_**.**

Se il caricamento è andato a buon fine si riceve immediatamente riscontro.

Se dovessero verificarsi errori, sarebbe possibile seguire le istruzioni indicate nel messaggio di errore o guardare nelle [FAQ](broken-reference) di questa guida.

## Come rimuovere una chiave pubblica da un client

Per eliminare una chiave pubblica da un client, un membro può andare su _**Fruizione > I tuoi client e-service**_ oppure _**Fruizione > I tuoi client API interop**_ e cliccare su _**Ispeziona**_ per il client di interesse. All'interno, nella tab _**Chiavi pubbliche**_ sarà disponibile l'elenco delle chiavi caricate per quel client. Cliccando sui tre pallini della chiave di interesse, è disponibile l'azione _**Elimina**_, che eliminerà la chiave.&#x20;

L'operazione è analoga per i portachiavi erogatore e disponibile nella vista _**Erogazione > I tuoi portachiavi**_**.**

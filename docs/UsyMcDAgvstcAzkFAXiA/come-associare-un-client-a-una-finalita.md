# Come associare un client a una finalità

Una delle attività necessarie per poter accedere ad un e-service al quale si è iscritti è associare uno o più client ad una finalità, e in questo tutorial vedremo come si procede.

Ma che cos'è un client? È un contenitore nel quale si inseriscono un numero discrezionale di operatori di sicurezza. Questi sono autorizzati a caricare la chiave pubblica del materiale crittografico in loro possesso, per ottenere un voucher da PDND Interoperabilità, da spendere presso gli e-service degli operatori (o presso l'API gateway di PDND Interoperabilità nel caso di un client api interop).

### Creiamo un nuovo client <a href="#creiamo-un-nuovo-client" id="creiamo-un-nuovo-client"></a>

Per creare un nuovo client andiamo in modalità fruizione > i tuoi client e clicchiamo su più, aggiungi. A questo punto inseriamo nome e descrizione, e selezioniamo tra gli operatori che abbiamo già invitato ad operare sul backoffice, quelli che ci interessano.

<figure><img src=".gitbook/assets/bc6370ba-fe70-4d86-910a-4f903b6d6457.png" alt=""><figcaption></figcaption></figure>

&#x20;Una volta creato il client, sarà necessario associarlo alla finalità che abbiamo creato [in un altro tutorial tutorial](https://pagopa.atlassian.net/wiki/spaces/DPGC/pages/721846552/Cos+e+come+si+crea+una+finalit+in+PDND). Per farlo, seguiamo questi passi:

* Torniamo su Finalità
* Selezioniamo la specifica finalità a cui si desidera associare un client
* Clicchiamo sulla tab dei client associati e aggiungiamo il client appena creato

Da notare che i client sono pensati per essere riutilizzabili. Sono dei compartimenti stagni all'interno dei quali si possono inserire operatori di sicurezza e materiale crittografico e possono poi essere associati a piacimento, anche più volte, alle finalità create. All'interno degli stessi client è sempre possibile aggiungere e rimuovere sia gli operatori di sicurezza che le chiavi associate.

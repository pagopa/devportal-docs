# Revisione del servizio

Quando la scheda del servizio è completa e aderente al  [Manuale dei servizi](http://127.0.0.1:5000/s/zcLztiq5qDSVw9rRjW7p/cose-io-e-qual-e-il-suo-obiettivo), puoi inviare una richiesta di revisione.&#x20;

Se il servizio viene **approvato**, viene pubblicato automaticamente. Nel caso in cui venga **respinto**, ti viene comunicata una motivazione, che ti consente di apportare le modifiche necessarie per poterlo sottoporre nuovamente alla valutazione.

#### Tramite Developer Portal

<details>

<summary><mark style="color:blue;">Step 1</mark> - Accedi e identifica il servizio</summary>

1. [**Accedi**](https://developer.io.italia.it/) al Developer Portal;
2. Nella colonna sinistra, seleziona **“Servizi”**;
3. Nella lista dei tuoi servizi identifica il servizio che vuoi controllare e clicca sul box.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Invia richiesta di valutazione del servizio</summary>

Prima di inviare la richiesta assicurati che il servizio sia completo e aderente al [Manuale dei servizi](http://127.0.0.1:5000/o/KXYtsf32WSKm6ga638R3/s/zcLztiq5qDSVw9rRjW7p/).

1. Scorri la scheda servizio fino in fondo;
2. Nel box "Go Live!" clicca sul bottone "Pubblica Servizio".

Se il bottone non è abilitato significa che la scheda del servizio non è completamente compilata: controlla di aver inserito almeno tutti i dati obbligatori.

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark> - Consulta esito</summary>

1. Entra di nuovo nel Developer Portal e cerca la scheda del servizio;
2. In alto troverai un box informativo con l'indicazione dello [stato del servizio](stato-del-servizio.md).

🟢 Se il servizio è stato **approvato**, è stato anche pubblicato. Sarà visibile in App IO entro qualche ora.

🔴 Se il servizio è stato **respinto**, scorri fino alla fine della pagina, dove puoi trovare la motivazione. Correggi il servizio nelle modalità indicate, per poi sottoporlo nuovamente alla valutazione.

</details>

#### Tramite Area Riservata

<details>

<summary><mark style="color:blue;">Step 1</mark> - Accedi e identifica il servizio</summary>

1. &#x20;[Accedi](https://selfcare.pagopa.it/) all'Area Riservata con SPID o CIE;
2. Seleziona l'ente per il quale vuoi operare;
3. Nella zona centrale della pagina, individua i prodotti abilitati;
4. Clicca sul box **IO;**
5. Nella colonna di sinistra, seleziona "Servizi";
6. Nella lista dei tuoi servizi identifica il servizio che vuoi controllare e clicca sul box.

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Invia richiesta di valutazione del servizio</summary>

Prima di inviare la richiesta assicurati che il servizio sia completo e aderente al [Manuale dei servizi](http://127.0.0.1:5000/o/KXYtsf32WSKm6ga638R3/s/zcLztiq5qDSVw9rRjW7p/).

1. Scorri la scheda servizio fino in fondo;
2. Nel box "Go Live!" clicca sul bottone "Pubblica Servizio".

Se il bottone non è abilitato significa che la scheda del servizio non è completamente compilata: controlla di aver inserito almeno tutti i dati obbligatori.

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark> - Consulta esito</summary>

1. Entra di nuovo nel Developer Portal e cerca la scheda del servizio;
2. In alto troverai un box informativo con l'indicazione dello [stato del servizio](stato-del-servizio.md);

🟢 Se il servizio è stato **approvato**, è stato anche pubblicato. Sarà visibile in App IO entro qualche ora.

🔴 Se il servizio è stato **respinto**, scorri fino alla fine della pagina, dove puoi trovare la motivazione. Correggi il servizio nelle modalità indicate, per poi sottoporlo nuovamente alla valutazione.

</details>

#### Tramite API

<details>

<summary><mark style="color:blue;">Step 1</mark> - Recupera api-key apposita</summary>

Scopri che cos'è la [`chiave manage`](chiave-manage.md) e [come recuperarla](chiave-manage.md#recupera-la-chiave-manage).

</details>

<details>

<summary><mark style="color:blue;">Step 2</mark> - Invia richiesta di valutazione del servizio</summary>

1. Identifica e recupera l'id del servizio che vuoi sottomettere alla revisione;
2. Interroga l'API per [richiedere la revisione](../../api/api-servizi/manage-service-request-review.md). Potrai scegliere di procedere con la pubblicazione automatica del servizio in caso di approvazione.

</details>

<details>

<summary><mark style="color:blue;">Step 3</mark> - Consulta esito</summary>

1. Interroga l'API di [lettura del dettaglio di un servizio](../../api/api-servizi/get-service.md);
2. Consulta il campo `status.value` per conoscere l'esito della revisione;
3. Comprendi quali possono essere gli [stati del servizio](stato-del-servizio.md).

🟢  Se il servizio è in stato **`APPROVED`**, è pronto per essere attivato. Se hai scelto l'attivazione automatica, il servizio sarà già **`PUBLISHED`** (ovvero **attivato**)\


🔴 Se il servizio è in stato **`REJECTED`**:

1. Consulta `status.reason` per sapere perché è stato respinto;
2. Potrai correggere il servizio seguendo le indicazioni ricevute, per poi sottoporlo di nuovo.

</details>


---
title: Processo di Invio del Messaggio di Cortesia in modalità PUSH
sidebar_label: Processo di Invio del Messaggio di Cortesia in modalità PUSH
slug: /external/tutorial/processes-psp/send-message-ea
---

import ArchitectureGraph from '../../../_diagrams/_processes/enteaggregatore/_uc4_msg_send_to_ea.mdx';
import DiagramWrapper from '@site/src/components/DiagramWrapper';

:::warning
La documentazione per la gestione degli **Enti Aggregatori** è in fase di revisione. NON UTILIZZARLA per esportarla all'esterno 
:::

A seguito dell’attivazione del servizio da parte dell’utente, SEND invia all'EMD (**E**nterprise **M**essage **D**ispatcher) i messaggi di cortesia destinati agli utenti finali. A valle dei controlli l’utente riceve i messaggi di cortesia dall'EMD sull' App Bancaria, che viene gestita dal PSP .

**Pre-condizioni**
-   Il PSP deve aver completato il processo di onboarding.
-   L’utente deve aver attivato il servizio accettando i Termini di Servizio **(ToS)** e prendendo visione dell'informativa privacy

**Requisiti**
-   SEND invia il messaggio all’EMD
-   SEND comunica se alla notifica vi è un pagamento di tipo pagoPa associato oppure no
-   SEND deve disporre del codice fiscale dell’utente
-   SEND può verificare in ogni momento se il servizio registrato è abilitato o meno all’invio di messaggi di cortesia per un determinato utente e canale.
-   L’EMD quando prende in carico il messaggio, verifica che il PSP sia attiva e che l’utente abbia abilitato il servizio. Se il cittadino ha attivato il servizio, invierà un ACK a SEND (202 MSG Preso in Carico). A questo punto, il cittadino avrà 5 giorni (120 ore) per accedere a SEND; in caso lo faccia, non riceverà la notifica tramite raccomandata cartacea. Se invece il PSP non è attivo o l’utente non ha abilitato il servizio, l’EMD risponderà a SEND con un 200 - NO_CHANNEL_ENABLED, e il messaggio verrà scartato.
-   SEND, indipendentemente dal fatto che un cittadino abbia effettuato un primo accesso su SEND, e dunque accettato i T&C e letta l’informativa sulla privacy invierà i messaggi all'EMD.
-   L'EMD verificherà se il PSP e il cliente siano attivi per la ricezione del messaggio sull'App del PSP .
    
:::info

Se un cittadino non ha mai effettuato l’accesso al portale SEND e tenta di accedere tramite il link fornito nel messaggio di cortesia, dovrà accettare i Termini e Condizioni d’uso e confermare di avere letto l’Informativa Privacy messi a disposizione del Portale SEND ed avere a disposizione SPID/CIE per l’accesso
:::

Il messaggio inviato dall'EMD al PSP deve contenere i seguenti dati:

-   **messaggeId**: identificativo univoco del messaggio.
-   **recipientId**: identificativo univoco del destinatario. Per SEND corrisponderà sempre al codice fiscale ma predisposto ad accettare altri valori che identifichino univocamente il destinatario per future integrazioni con altri sistemi.
-   **triggerDateTime**: data e ora di origine del messaggio
-   **senderDescription**: descrizione di chi ha originato il messaggio
-   **messageURL:** URL per recuperare il messaggio originale
-   **originId:** ID del messaggio originale (es: IUN)
-   **content**: testo/oggetto del messaggio di cortesia
-   **idPsp**: Payment service provider (Fornitore di servizi di pagamento)
-   **associatedPayment**: booleano che identifica se la notifica è associata ad un pagamento di tipo pagoPa
-   **notes:** contenuto esteso del messaggio di cortesia

**Esempio di Dati Inviati:**

-   `messageId: "90580a02-1248-45fb-9f70-7a7f9d123dbc"`
-   `recipientId: "NVDLVK91L50E991P"`
-   `triggerDateTime: "2024-06-25T05:56:39.446520351Z"`
-   `senderDescription: "Comune di Palermo"`
-   `messageUrl: "https://cittadini.test.notifichedigitali.it"`
-   `originId: "RUYX-MLZA-JUPJ-202308-W-1"`
-   `content: "Hai ricevuto una comunicazione a valore legale"`
-   `idPsp: "xxxxxxxxxxxxxxxxxx"`
-   `associatedPayment: "true/false"`
-   `notes:note del messaggio`

**Post-condizioni**
-   Se l'utente ha disattivato il servizio non riceverà il Messaggio di cortesia
-   Se esiste già un messaggio individuato dalla tupla `<messageid, entityid>` ossia da identificativo del messaggio e fiscalCode del PSP il messaggio non viene inviato all’utente. Questo perchè SEND potrebbe inviare lo stesso messaggio più volte. In questo modo si evita di inviare al cittadino lo stesso messaggio.

<DiagramWrapper>
  <ArchitectureGraph />
</DiagramWrapper>

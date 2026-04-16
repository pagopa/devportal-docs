---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/UdBZLK0IXWx2yqcEv6ks/tutorial-per-gli-enti-aggregatori/03-ext-processo-citizen-deactivation-ea
---

# Come disattivare un utente al servizio

{% hint style="danger" %}
La documentazione per la gestione degli **Enti Aggregatori** è in fase di revisione. **NON UTILIZZARLA** per esportarla all'esterno
{% endhint %}

In questo fase, l'utente ha la possibilità di disattivare il servizio di messaggi di cortesia in qualsiasi momento.

Per la prima fase, la disattivazione del servizio, così come l'attivazione, sarà possibile solo attraverso l'App del PSP . Se l'utente desidera interrompere la ricezione dei messaggi di cortesia dopo aver attivato il servizio, può farlo attraverso l'App del PSP.

L'App del PSP deve chiamare l'EMD per recuperare le abilitazioni e consentire all'utente effettuare la disattivazione .

```mermaid
%%{init: {
 'theme': 'base',
 'themeVariables': {
   'activationBkgColor': '#90EE90',
   'activationBorderColor': '#006400',
   'actorBkg': '#ADD8E6',
   'signalColor': '#000080',
   'sequenceNumberColor': '#FF0000'
 }
}}%%
sequenceDiagram
   autonumber
   title: Attivazione Servizio da parte del Cittadino <br/> da Canale Ente Aggregatore


   actor Cittadino
   participant BETPP as Backend TPP/PSP
   participant EA as Ente Aggregatore
   participant EMD


   %% PRIMO BLOCCO: Autenticazione
   Cittadino->>BETPP: Autenticazione Cittadino (SCA)
   activate Cittadino
   BETPP-->>Cittadino: Autenticazione Cittadino (SCA) OK
   deactivate Cittadino


   %% SECONDO BLOCCO: Flusso a cascata
   Note right of Cittadino: Inizio attivazione a cascata
   Cittadino->>BETPP: ActivateMSG (fiscalCode, tppId, aggregatorId)
   activate Cittadino
   activate BETPP
  
   BETPP->>EA: ActivateMSG (fiscalCode, tppId, aggregatorId)
   activate EA
  
   EA->>EMD: Richiede autenticazione (Get AccessToken)
   activate EMD
   EMD-->>EA: result 201 (AccessToken)
   deactivate EMD
  
   EA->>EMD: ActivateMSG (AccessToken, fiscalCode, tppId)
   activate EMD
  
   %% In Mermaid, per vedere bene le "lane" separate,
   %% dobbiamo chiudere le attivazioni aperte, altrimenti sembrano linee infinite.
   %% Qui simulo la chiusura a ritroso del flusso (Return):
  
   EMD-->>EA: OK / Response
   deactivate EMD
  
   EA-->>BETPP: OK / Response
   deactivate EA
  
   BETPP-->>Cittadino: OK / Response
   deactivate BETPP
   deactivate Cittadino
```

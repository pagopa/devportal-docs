---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/jqqB3CsnONZdScwRg13O/riferimenti-tecnici/client-e-materiale-crittografico/organizzazione-dei-propri-client
---

# Organizzazione dei propri client

## Associazione client-finalità

Il sistema dei client è progettato per offrire la massima flessibilità agli enti aderenti, consentendo di strutturare la gestione delle identità applicative in funzione dei propri processi organizzativi, senza doverli adattare alle regole della piattaforma.

Ogni ente può scegliere la soluzione più adatta alle proprie esigenze operative e di sicurezza, adottando uno dei seguenti approcci:

* **un client per ogni e-service**, per una gestione puntuale e indipendente di ciascun servizio;
* **più client per ogni e-service**, per suddividere le responsabilità tra gruppi tecnici o fornitori diversi;
* **un solo client per più e-service**, per semplificare la gestione in contesti con carichi omogenei e controllo centralizzato.

{% @mermaid/diagram content="flowchart LR
    %% Colonne logiche
    subgraph CLIENT
        C1[Client A]
        C2[Client B]
    end

    subgraph FINALITÀ
        F1[Finalità 1]
        F2[Finalità 2]
        F3[Finalità 3]
    end

    subgraph ESERVICE
        E1[E-service X]
        E2[E-service Y]
    end

    %% Client --> Finalità (una freccia per coppia)
    C1 --> F1
    C1 --> F2
    C2 --> F2
    C2 --> F3

    %% Finalità --> E-service
    F1 --> E1
    F2 --> E1
    F3 --> E2

    %% Stile grafico
    style C1 fill:#e0f7fa,stroke:#00796b,stroke-width:1px
    style C2 fill:#e0f7fa,stroke:#00796b,stroke-width:1px
    style F1 fill:#fff3e0,stroke:#ef6c00,stroke-width:1px
    style F2 fill:#fff3e0,stroke:#ef6c00,stroke-width:1px
    style F3 fill:#fff3e0,stroke:#ef6c00,stroke-width:1px
    style E1 fill:#e8f5e9,stroke:#2e7d32,stroke-width:1px
    style E2 fill:#e8f5e9,stroke:#2e7d32,stroke-width:1px" %}

## Modello da applicare

La scelta del modello dipende dal bilanciamento tra **sicurezza** e **manutenibilità**: l’organizzazione dei client deve assicurare che i tecnici abbiano visibilità esclusivamente sulle **finalità** per le quali operano, evitando accessi non pertinenti.

Per un approfondimento operativo, è disponibile il [**webinar dedicato ai client**](https://developer.pagopa.it/webinars/e-service-erogazione-inversa) (dal minuto 24:20, iscrizione gratuita).

{% hint style="info" %}
Si raccomanda inoltre di assegnare ai client **nomi descrittivi** che ne facilitino l’individuazione, ad esempio associandoli al gruppo di lavoro o al fornitore che li utilizza (es. “Software House X – e-service Pagamenti”).
{% endhint %}

***

Pagina successiva [→ Voucher](../utilizzare-i-voucher/)

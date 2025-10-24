---
argomenti_correlati: []
funzione: glossario
livello: principiante
prodotto:
  nome: PARI - Bonus Elettrodomestici - Manuale per il Produttore
  versione: v1.0.0
schema:
  '@context': https://schema.org
  '@type': DefinedTermSet
  author:
    '@type': Organization
    name: PagoPA S.p.A.
  description: Elenca e descrive tutti i possibili stati che un prodotto può assumere
    nel suo ciclo di vita sulla Piattaforma PARI, indicando l'avanzamento nel processo
    di verifica e approvazione.
  hasDefinedTerm:
  - '@type': DefinedTerm
    description: Stato iniziale del prodotto appena caricato o aggiornato. Il prodotto
      è in attesa di essere preso in carico per le verifiche.
    name: Da Esaminare
    termCode: Da Esaminare
  - '@type': DefinedTerm
    description: Prodotto approvato in via definitiva e inserito nell'elenco ufficiale
      dei prodotti idonei a beneficiare del Bonus Elettrodomestici.
    name: Approvato
    termCode: Approvato
  - '@type': DefinedTerm
    description: Prodotto rifiutato al termine del processo di verifica perché non
      ritenuto idoneo per il bonus.
    name: Escluso
    termCode: Escluso
  name: Dizionario degli stati del prodotto
status: pubblicato
tecnologia: []
utente:
  ruolo: produttore
  tag:
  - stati prodotto
  - ciclo di vita
  - PARI
  - approvazione
  tipo_ente: partner_tecnologico
---

# Dizionario degli stati del prodotto

Ogni prodotto caricato sulla Piattaforma PARI attraversa un ciclo di vita caratterizzato da diversi stati, che ne indicano l'avanzamento nel processo di verifica e approvazione da parte di Invitalia S.p.A. .

Questa sezione elenca e descrive tutti i possibili stati che un prodotto può assumere e che sono visibili al _Produttore_.

#### Tabella degli Stati del Prodotto

| Stato            | Descrizione                                                                                | Significato per il Produttore                                                                                                                               |
| ---------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Da Esaminare** | Stato iniziale del prodotto appena caricato o aggiornato.                                  | Il prodotto è stato ricevuto correttamente dalla piattaforma ed è in attesa di essere preso in carico per le verifiche.                                     |
| **Approvato**    | Prodotto approvato in via definitiva e inserito nell'elenco ufficiale dei prodotti idonei. | Il prodotto può beneficiare del Bonus Elettrodomestici. Nessuna ulteriore azione è richiesta.                                                               |
| **Escluso**      | Prodotto rifiutato al termine del processo di verifica.                                    | Il prodotto non è stato ritenuto idoneo per il bonus. Il _Produttore_ riceve una motivazione formale via email e può visualizzarla anche sulla piattaforma. |
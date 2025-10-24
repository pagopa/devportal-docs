---
argomenti_correlati:
- /prodotti/pari-bonus-elettrodomestici/manuale-produttore/gestire-errori-caricamento
funzione: tutorial
livello: intermedio
prodotto:
  nome: PARI - Bonus Elettrodomestici - Manuale per il Produttore
  versione: v1.0.0
schema:
  '@context': https://schema.org
  '@type': HowTo
  author:
    '@type': Organization
    name: PagoPA S.p.A.
  description: Questa guida mostra i passaggi per correggere un file CSV contenente
    errori comuni, come codici EPREL errati o GTIN duplicati, al fine di ricaricarlo
    correttamente.
  keywords:
  - correzione file
  - errori caricamento
  - CSV
  - EPREL
  - GTIN
  name: Come correggere un file con errori di caricamento
  proficiencyLevel: Intermediate
  step:
  - '@type': HowToStep
    text: Correggere il codice EPREL errato sostituendolo con quello corretto.
  - '@type': HowToStep
    text: Rimuovere l'intera riga che contiene il GTIN duplicato.
  - '@type': HowToStep
    text: Eliminare la colonna "Messaggio errore" dal file.
  - '@type': HowToStep
    text: Salvare il file corretto con un nuovo nome (es. correzione_lotto_q4.csv),
      assicurandosi che contenga solo righe valide.
status: pubblicato
tecnologia:
- CSV
title: Seguendo le indicazioni del...
utente:
  ruolo: produttore
  tag:
  - correzione
  - errori
  - caricamento
  - EPREL
  - GTIN
  - CSV
  tipo_ente: partner_tecnologico
---

```
Seguendo le indicazioni del tutorial [Gestire gli errori di caricamento](placeholder-link), il Produttore:
1.  Corregge il codice EPREL errato (9999999) con quello giusto.
2.  Rimuove la riga con il GTIN duplicato.
3.  **Elimina la colonna "Messaggio errore"**.
4.  Salva il file corretto, che ora contiene una sola riga valida, con il nome `correzione_lotto_q4.csv`.
```
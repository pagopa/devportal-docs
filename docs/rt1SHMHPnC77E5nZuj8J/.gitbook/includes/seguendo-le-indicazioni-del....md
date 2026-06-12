---
argomenti_correlati:
- /pari/manuale-produttore/gestire-errori-caricamento
funzione: tutorial
livello: principiante
prodotto:
  nome: PARI - Bonus Elettrodomestici - Manuale per il Produttore
  versione: v1.0.0
schema:
  '@context': https://schema.org
  '@type': HowTo
  author:
    '@type': Organization
    name: PagoPA S.p.A.
  description: Guida passo-passo su come correggere gli errori comuni, come codici
    EPREL errati o GTIN duplicati, in un file CSV per il caricamento dei lotti.
  keywords:
  - correzione-errori
  - caricamento-dati
  - csv
  - eprel
  - gtin
  name: Come correggere un file di caricamento lotti
  step:
  - '@type': HowToStep
    text: Correggere il codice EPREL errato (9999999) con quello giusto.
  - '@type': HowToStep
    text: Rimuovere la riga con il GTIN duplicato.
  - '@type': HowToStep
    text: Eliminare la colonna "Messaggio errore".
  - '@type': HowToStep
    text: Salvare il file corretto, che ora contiene una sola riga valida, con il
      nome `correzione_lotto_q4.csv`.
status: pubblicato
tecnologia:
- CSV
title: Seguendo le indicazioni del...
utente:
  ruolo: produttore
  tag:
  - correzione-errori
  - caricamento-dati
  - csv
  - eprel
  - gtin
  tipo_ente: partner_tecnologico
---

```
Seguendo le indicazioni del tutorial [Gestire gli errori di caricamento](placeholder-link), il Produttore:
1.  Corregge il codice EPREL errato (9999999) con quello giusto.
2.  Rimuove la riga con il GTIN duplicato.
3.  **Elimina la colonna "Messaggio errore"**.
4.  Salva il file corretto, che ora contiene una sola riga valida, con il nome `correzione_lotto_q4.csv`.
```
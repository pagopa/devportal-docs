# Descrizione degli Stati delle Transizioni

La sezione **"Gestione Rimborsi"** (consultabile sia dal Venditore che dall'Operatore PV) utilizza diversi "Stati" per identificare l'esito di un'operazione. Comprendere il significato di ciascuno stato è fondamentale per la corretta gestione delle vendite e per la riconciliazione.

Di seguito è riportata la definizione degli stati principali che una transazione può assumere nel suo ciclo di vita finale.

| Stato                     | Descrizione                                                                                                                                                                                                                                                                        |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Completato**            | La transazione è stata conclusa con successo. L'Operatore PV ha confermato il pagamento del cittadino (come descritto nel tutorial [Come finalizzare un acquisto](https://www.google.com/search?q=tutorial/finalizzare-acquisto)) e il buono è stato utilizzato in via definitiva. |
| **In attesa di rimborso** | Questo stato segue il "Completato". Indica che la transazione è valida ed è in attesa di essere processata per l'accredito economico sull'IBAN registrato dal Venditore.                                                                                                           |
| **Annullato**             | L'Operatore PV ha annullato la transazione prima della conferma finale del pagamento. Il buono sconto è stato rilasciato e torna immediatamente disponibile per il cittadino (potrebbero essere necessari fino a 5 minuti se il buono proviene da App IO).                         |
| **Stornato**              | Indica un annullamento che comporta la **perdita del buono** da parte del cittadino. A differenza dello stato "Annullato", in caso di "Storno" il buono non è più riutilizzabile e il cittadino, se ne desidera un altro, deve effettuare una nuova richiesta.                     |


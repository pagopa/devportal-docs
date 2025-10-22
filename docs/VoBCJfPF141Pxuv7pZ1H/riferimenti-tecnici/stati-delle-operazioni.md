# Stati delle operazioni

Il _Portale Esercenti_ utilizza diversi stati per identificare le operazioni.

La sessione "**Gestione Acquisti**" e la sezione **"Gestione Rimborsi"** possono assumere i diversi stati.

| Stato                     | Descrizione                                                                                                                                                                                                             |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Da Autorizzare**        | L'Operatore PV attende che l'_Utente finale_ paghi l'_Elettrodomestico_.                                                                                                                                                |
| **Annullato**             | L'Operatore PV ha annullato l'operazione prima della conferma finale del pagamento. Il _Voucher_ è stato rilasciato e torna disponibile per il cittadino.                                                               |
| **Fattura da caricare**   | Operazione conclusa con successo. L'Operatore PV ha confermato il pagamento dell'_Utente finale_ e il _Voucher_ è stato utilizzato in via definitiva. L'Operatore PV deve caricare la fattura in formato xml o pdf.     |
| **Stornato**              | <p></p><p>Lo stato indica che l'<em>Utente finale</em> ha reso l'<em>Elettrodomestico</em>. Questo comporta la <strong>perdita del </strong><em><strong>Voucher</strong></em> da parte dell'<em>Utente finale</em>.</p> |
| **In attesa di rimborso** | L'Operatore PV ha caricato la fattura e il _Venditore_ tramite apposita funzionalità potrà sottoporre le operazioni alle verifiche dell'ente gestore per ottenere i rimborsi.                                           |
| **Rimborso richiesto**    | Il _Venditore_ ha effettivamente trasmesso le operazioni all'ente gestore per il successivo rimborso                                                                                                                    |


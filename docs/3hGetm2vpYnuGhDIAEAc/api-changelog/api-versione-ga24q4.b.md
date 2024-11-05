# API VERSIONE GA24Q4.B

In questa versione, rilasciata in produzione il 27/11/2024, è stato aggiunto l'evento di SEND\_ANALOG\_PROGRESS con `deliveryDetailCode=CON020`.

L'interfaccia delle API rimane invariata in termini di struttura degli eventi, per cui non sono necessari adattamenti al codice client.

Il nuovo elemento in timeline ha lo scopo di veicolare al mittente la copia conforme digitale e firmata da PagoPA in formato PDF della stampa della AAR effettuata dal consolidatore. Questo PDF rispecchia in modo fedele la stampa del foglio inviato che consta nell'AAR al quale il consolidatore aggiunge le informazioni per il recapito in posizione tale da essere visualizzati nella finestrella della busta, i riferimenti del numero di raccomandata e i codici a barre utilizzati nel processo di recapito.

Il download della copia conforme può essere effettuato come per gli altri documenti tramite il paramento `key` contenuto nell'elemento `attachments`.

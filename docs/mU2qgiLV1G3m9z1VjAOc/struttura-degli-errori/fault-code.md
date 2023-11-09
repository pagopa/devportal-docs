# Fault Code

Per ogni chiamata applicativa, il soggetto chiamato in causa (Nodo dei Pagamenti, EC o PSP) deve dare una risposta che può essere:

* **OK**
* **KO** (con struttura [..](../ "mention") che include un **faultCode**)

## Struttura faultCode <a href="#struttura-faultcode" id="struttura-faultcode"></a>

Il **faultCode** deve avere la seguente struttura:

_\<erogatore>\_\<codice errore>_

dove _\<erogatore>_ può assumere uno dei seguenti valori:

| **Valore** | **Descrizione**                                     |
| ---------- | --------------------------------------------------- |
| PPT        | errore emesso da Nodo dei Pagamenti-SPC             |
| PAA        | errore emesso da Ente Creditore                     |
| CANALE     | errore emesso da Prestatore di Servizi di Pagamento |

I **faultCode:**

* _\<erogatore>\_SYSTEM\_ERROR_ possono essere restituiti da qualsiasi primitiva;
* _\<erogatore>\_SEMANTICA_ sono definiti genericamente per ogni primitiva, e qualsiasi errore di tipo semantico che non possa essere ricondotto ad un **faultCode** specifico può essere segnalato in questo modo.

## Categorie di faultCode <a href="#categorie-di-faultcode" id="categorie-di-faultcode"></a>

1. **Validazione sintattica:** validazione del messaggio in riferimento a WSDL e XSD.
2. **Configurazione chiamante:** dati forniti dal chiamante relativi a se stesso.
3. **Configurazione controparte:** dati forniti dal chiamante per indirizzare la chiamata verso la controparte (non per forza presente e, se presente, solo per chiamate _end-to-end_).
4. **Messaggio duplicato:** controllo su determinati tipologie di messaggi in relazione al processamento già eseguito della chiamata (si basa in genere su “chiavi”).
5. **Errori semantici rilevati dal soggetto chiamato in causa** (EC, PSP, Nodo).
6. **Connessione a controparte** (non per forza presente, solo per chiamate _end-to-end_).
7. **Timeout controparte/altri sistemi** (non per forza presente).
8. **Errore emesso da controparte** (non per forza presente): con la nuova gestione del faultBean sarà presente anche il campo **originalFaultCode,** che riporta l’errore emesso effettivamente dalla controparte.
9. **Errore response controparte** (non per forza presenti).
10. **Altro.**

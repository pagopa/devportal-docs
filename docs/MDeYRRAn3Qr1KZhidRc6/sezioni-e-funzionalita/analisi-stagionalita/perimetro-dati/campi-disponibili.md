# Campi disponibili

La scheda "Analisi Stagionalità" è articolata in due aree di analisi:

* **Indice di Stagionalità Servizio;**
* **Indice di Stagionalità Coppia Servizio-Ente.**

Entrambe permettono di valutare l’andamento dei volumi transazionali nel tempo e di consultare l’indice di stagionalità, offrendo una visione completa delle variazioni nei flussi di pagamento in funzione delle selezioni effettuate dall’utente e fornendo un set di KPI strutturati come segue:

* **Transazioni**: rappresenta il volume totale delle transazioni registrate per ciascun anno del biennio di riferimento, indicando la variazione percentuale tra l’ultimo anno disponibile e quello precedente. I valori esposti dipende dalle selezioni effettuate per il servizio di incasso, il codice tassonomico e, nel caso dell'_Indice di Stagionalità Coppia Servizio-Ente_, l’ente creditore;
* **Andamento Transazioni:** mostra la distribuzione mensile delle transazioni per ciascun anno nel biennio di riferimento, in base ai criteri selezionati;
* **Indice di Stagionalità:** indice che viene calcolato secondo le seguenti logiche:
  * **Indice di Stagionalità Servizio**
    * se viene selezionato solo il servizio di incasso, l’indice è calcolato come la media degli indici dei relativi codici tassonomici associati;
    * se viene selezionato un singolo codice tassonomico, l’indice corrisponde esattamente a quello del codice selezionato;
  * **Indice di Stagionalità Coppia Servizio-Ente**
    * se viene selezionato solo il servizio di incasso, l’indice è calcolato come la media degli indici di tutti i codici tassonomici, considerando l’insieme degli enti creditori;
    * se viene selezionato un singolo codice tassonomico, l’indice è calcolato come la media degli indici degli enti creditori associati a quel codice;
    * se viene selezionato un ente creditore specifico, l’indice corrisponde direttamente a quello dell’ente per il codice tassonomico selezionato.

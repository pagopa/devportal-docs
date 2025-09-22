# Scambio o aggiornamento delle informazioni crittografiche

La gestione delle informazioni crittografiche è condizione necessaria per depositare e recuperare segnali. Di seguito&#x20;

1. L’erogatore mette a disposizione nell’API dell’e-service pubblicato le informazioni crittografiche: funzione di hashing e seme
2. Prima di accedere al servizio di recupero segnali o quando viene ricevuto un segnale di tipo _SeedUpdate_ (vedi sezione sulle [tipologie di segnali](../la-guida-tecnica/segnali.md)), il fruitore richiede le informazioni crittografiche dall’e-service di interesse
3. Il fruitore possiede le informazioni crittografiche aggiornate ed è in condizione di calcolare gli identificativi pseudonimizzati per tutti i soggetti con un procedimento amministrativo in essere che sono presenti nella propria base dati
4. Il fruitore può rendere persistenti gli identificativi pseudonimizzati associati ai soggetti in base a come deciderà di implementare la ricerca degli identificativi pseudonimizzati presenti nei segnali (vedi elaborazione dei segnali)

<figure><img src="../.gitbook/assets/scambio materiale crittografico (1).png" alt=""><figcaption></figcaption></figure>

[Diagramma scambio informazioni crittografiche](https://mermaid.live/edit#pako:eNqdVG1r2zAQ_iuH9mWDpEuadV3NCHRZCv0wKA3sw_AXWb44B7bO00tpU_rfd5KTNgsblApsdNLz3J3u7VEZrlEVajwelzZQaLEAb3RXEUOnAzrSLYJxFAI3Tq_JcGkN2zU1RWkBwgY7oVTa47P4UwuratFnBEDvqNPuYcEtuwJK9e7q6tvVZFKq0mazpfX4O6I1-J20GOlKq2NgG7sKXbrutQtkqNc2wGIF2sNljQ5tQFiw9VEcZSf2K76H4LT1QpBbWJEP2Gm4tmt2AqI7hqXjZgc_VLvManHs0d2RObq8uf3L5oEKtHVysLQOTQDXVO-nF9MRnJ7O5Hd29mEIgGVh8R060TRarF4R4cS6uR2P50tB1yiojqzeElsUsW01fK3cx_k62uHskK6hJthovyHbAIKXjBwp7GNVtQIcuJc312_Rxn0A3ebkMmhj0HtOBzmCoifxJCqxR8dy2FjdUjbDfR8d5i1Z4aNHu81mot0BMUml8og1xL6WKKVigd1arMbz_A5HZkPog357TNJaJn0pLf-hHuMXe7xuGmJndSdlwa9lp7hJTHyqzfRuqoVNCSr1SfISAs9NgyHQP0wa3RrpI4E1LR1ze4-xZksdbbdyksxAiKIIXnRKjOYgDZyC3Ts2WNPgvu6kxMQpN_SJpEYyiu7A81zsz5v8UyPVOKpVEVzEkeqkTnUS1WNClirPg1Klrq9xrWMbUiKfhCaN9Yu52zMdx2ajirVuvUhDznfTYA9JM2H1YM1eHkDLmqQV92eYpR_DTMujLVtSxaO6V8X0fHIi38s6HakHVXy-OJnOzk6n57OL6WzyaXb-NFLb7NtUHJN3oltwtEEVX57-ACMEx_g)

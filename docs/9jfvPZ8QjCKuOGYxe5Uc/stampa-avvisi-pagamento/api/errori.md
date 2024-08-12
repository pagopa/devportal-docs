# Errori

In caso di errori di validazione sulla struttura base per la generazione della stampa dell'avviso PagoPA la risposta sarà come per l'esempio seguente:

```
{
    "title": "Bad Request",
    "status": 400,
    "detail": "data.notice.subject: non deve essere vuoto, data.notice.subject: non deve essere null"
}
```

Nel caso di errori sui casi specifici dei template, cioè operata tramite la validazione di regole dinamiche, l'errore sarà:

```
{
    "title": "Bad Request",
    "status": 400,
    "detail": "[\"$.notice: proprietà richiesta 'dueDate' non trovata\"]"
}
```

# Ambienti disponibili

Sono disponibili tre ambienti: produzione, collaudo e attestazione. Questi ambienti hanno caratteristiche diverse, come indicato nella tabella sottostante.

| Nome ambiente | Chi può erogare e-service? | Vengono erogati dati reali? |
| ------------- | -------------------------- | --------------------------- |
| Produzione    | PA, GSP, SCP, SCEC         | Sì                          |
| Collaudo      | PA, GSP, SCP, SCEC         | No                          |
| Attestazione  | Tutti gli aderenti         | No                          |

## Ambiente di produzione

È l'ambiente nel quale le integrazioni indicate permetteranno di accedere a dati reali. È l'ambiente maggiormente monitorato, il quale è anche soggetto agli [SLA indicati](../normativa-e-approfondimenti/approfondimenti.md#sla-service-level-agreement).

## Ambiente di collaudo

Può essere utilizzato per collaudare i propri e-service in erogazione e per fare test di fruizione. I dati restituiti dalle API degli erogatori devono essere fittizi.

## Ambiente di attestazione

Simile all'ambiente di collaudo, ma permette a tutti gli aderenti, inclusi partner tecnologici ed eventuali altri privati di testare le funzionalità di erogazione ed altre funzionalità avanzate. Vengono inoltre esposti da PagoPA alcuni e-service che simulano pattern d'accesso comuni, in modo da supportare gli enti e i partner tecnologici nel fare test di integrazione con diverse configurazioni. I dati restituiti dalle API degli erogatori devono essere fittizi.


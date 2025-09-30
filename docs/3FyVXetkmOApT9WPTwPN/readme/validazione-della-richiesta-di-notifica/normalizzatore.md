---
description: >-
  In questa pagina è descritto il funzionamento del normalizzatore degli
  indirizzi.
---

# Normalizzatore

Il normalizzatore degli indirizzi è il componente della piattaforma che decide se un indirizzo fisico è "postalizzabile", cioè verifica che i dati forniti siano coerenti tra di loro e che contengano le informazioni minime obbligatorie per il recapito:

* Indirizzo stradale, costituito da qualificatore, nome e civico, oppure dalla Casella Postale (`address`)
* CAP (`zip`)
* Comune (`municipality`)
* Provincia (`province`)

Se anche uno solo dei campi richiesti risulta assente, incompleto o incoerente (tanto da non permetterne la correzione in fase di normalizzazione), la notifica viene rifiutata.

Il normalizzatore tenta di correggere gli errori per aumentare le probabilità di successo nella consegna cartacea:&#x20;

* I caratteri supportati nella `denomination` verranno estesi a tutti quelli del charset ISO\_LATIN\_1.
* L’indirizzo verrà fatto transitare attraverso il normalizzatore che deciderà, provando diversi livelli di normalizzazione, se l’indirizzo è da considerarsi postalizzabile o meno. Le notifiche con indirizzi postalizzabili verranno accettate, rifiutate in caso contrario.&#x20;

Il normalizzatore in caso di:

* **indirizzo italiano** proverà a correggere CAP (`zip`) e Provincia (`province`) utilizzando Comune (`municipality`), Località/Frazione (`municipalityDetails`) e Indirizzo (`address`).
* **indirizzo estero** validerà esclusivamente il Paese (`foreignState`_)_. In questo caso i caratteri accettati saranno sempre e comunque gli ISO\_LATIN\_1.

In questo scenario:

* potranno essere inseriti **CAP generici** visto che sarà compito del normalizzatore provare a correggerli. Se non dovesse riuscire la notifica verrebbe però rifiutata.
* potranno essere inserite **città con più di 36 caratteri**, il normalizzatore ne restituirà una versione compatibile con i sistemi di postalizzazione.

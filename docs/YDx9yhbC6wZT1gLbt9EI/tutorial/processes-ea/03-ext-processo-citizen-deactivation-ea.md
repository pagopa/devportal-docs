---
title: Processo di Disattivazione Servizio da parte del Cittadino
sidebar_label: Processo di Disattivazione Servizio da parte del Cittadino
slug: /external/tutorial/processes-psp/citizen-deactivation-ea
---

import ArchitectureGraph from '../../../_diagrams/_processes/enteaggregatore/_uc3_citizen_deactivation_ea.mdx';
import DiagramWrapper from '@site/src/components/DiagramWrapper';

:::warning
La documentazione per la gestione degli **Enti Aggregatori** è in fase di revisione. NON UTILIZZARLA per esportarla all'esterno 
:::

In questo fase, l'utente ha la possibilità di disattivare il servizio di messaggi di cortesia in qualsiasi momento.

Per la prima fase, la disattivazione del servizio, così come l'attivazione, sarà possibile solo attraverso l'App del PSP . Se l'utente desidera interrompere la ricezione dei messaggi di cortesia dopo aver attivato il servizio, può farlo attraverso l'App del PSP. 

L'App del PSP deve chiamare l'EMD per recuperare le abilitazioni e consentire all'utente effettuare la disattivazione .

<DiagramWrapper>
  <ArchitectureGraph />
</DiagramWrapper>
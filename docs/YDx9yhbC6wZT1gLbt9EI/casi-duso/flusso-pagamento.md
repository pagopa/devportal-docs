---
title: Flusso di pagamento completo tramite Messaggio di Cortesia
description: Flusso di pagamento completo tramite Messaggio di Cortesia
sidebar_label: Flusso di pagamento completo tramite Messaggio di Cortesia
slug: /external/casi-duso/lifecyclepayment
sidebar_position: 2
---


Flusso di pagamento completo tramite Messaggio di Cortesia: Scenario completo che descrive l'autenticazione su SEND, la verifica del canale tramite EMD e il perfezionamento del pagamento PagoPA.  

## Step 1 - Ricezione messaggio Push
Il Cittadino dopo aver fornito il consenso alla ricezione dei Messaggi di Cortesia in caso un Ente notifica qualcosa per lui potrebbe ricevere un messaggio push
 
<img 
  src={require('./../../_diagrams/main_img/flusso_completo_pagamento/1_msg_push.jpg').default} 
  alt="Notifica Push PSP" 
  style={{
    width: '220px',
     display: 'block',
      margin: '0 auto',
      borderRadius: '12px',
      border: '1px solid #e0e0e0',
      boxShadow: '0 2px 12px rgba(0,0,0,0.10)'
  }} 
/>

## Step 2 - Dettaglio  messaggio Push
Il Cittadino clieccando sul messaggio push accede al dettaglio del Messaggio di Cortesia

Dettaglio Msg
<img 
  src={require('./../../_diagrams/main_img/flusso_completo_pagamento/2_msg_details.jpg').default} 
  alt="Notifica Push PSP" 
  style={{
    width: '220px',
     display: 'block',
      margin: '0 auto',
      borderRadius: '12px',
      border: '1px solid #e0e0e0',
      boxShadow: '0 2px 12px rgba(0,0,0,0.10)'
  }} 
/>

## Step 3 - Landing Page SEND
Al click "Leggi la Comunicazione" tramite un URL di redirect si atterra sulla Landing page di SEND
<img 
  src={require('./../../_diagrams/main_img/flusso_completo_pagamento/3_landing_page.jpg').default} 
  alt="Notifica Push PSP" 
  style={{
    width: '220px',
     display: 'block',
      margin: '0 auto',
      borderRadius: '12px',
      border: '1px solid #e0e0e0',
      boxShadow: '0 2px 12px rgba(0,0,0,0.10)'
  }} 
/>

## Step 4 - Accesso al portale SEND tramite SPID o CIE
DOpo aver letto informazioni di dettaglio relative a SEND si può procedere con l'accesso al portale utilizzando uno dei metodi di autenticazione tra SPID o CIE

<img 
  src={require('./../../_diagrams/main_img/flusso_completo_pagamento/4_accesso_SPIDCIE.jpg').default} 
  alt="Notifica Push PSP" 
  style={{
    width: '220px',
     display: 'block',
      margin: '0 auto',
      borderRadius: '12px',
      border: '1px solid #e0e0e0',
      boxShadow: '0 2px 12px rgba(0,0,0,0.10)'
  }} 
/>

## Step 5 - Accettazione TOS SEND primo accesso

<img 
  src={require('./../../_diagrams/main_img/flusso_completo_pagamento/5_accettazione_tos_send.jpg').default} 
  alt="Notifica Push PSP" 
  style={{
    width: '220px',
     display: 'block',
      margin: '0 auto',
      borderRadius: '12px',
      border: '1px solid #e0e0e0',
      boxShadow: '0 2px 12px rgba(0,0,0,0.10)'
  }} 
/>

## Step 5 - Dettaglio Notifica
<img 
  src={require('./../../_diagrams/main_img/flusso_completo_pagamento/6_dettaglio_notifica.jpg').default} 
  alt="Notifica Push PSP" 
  style={{
    width: '220px',
     display: 'block',
      margin: '0 auto',
      borderRadius: '12px',
      border: '1px solid #e0e0e0',
      boxShadow: '0 2px 12px rgba(0,0,0,0.10)'
  }} 
/>

scroll del messaggio

<img 
  src={require('./../../_diagrams/main_img/flusso_completo_pagamento/6_dettaglio_notifica_2.jpg').default} 
  alt="Notifica Push PSP" 
  style={{
    width: '220px',
     display: 'block',
      margin: '0 auto',
      borderRadius: '12px',
      border: '1px solid #e0e0e0',
      boxShadow: '0 2px 12px rgba(0,0,0,0.10)'
  }} 
/>

## Step 6 - Dettaglio Pagamento
<img 
  src={require('./../../_diagrams/main_img/flusso_completo_pagamento/7_dettaglio_pagamento.jpg').default} 
  alt="Notifica Push PSP" 
  style={{
    width: '220px',
     display: 'block',
      margin: '0 auto',
      borderRadius: '12px',
      border: '1px solid #e0e0e0',
      boxShadow: '0 2px 12px rgba(0,0,0,0.10)'
  }} 
/>

## Step 7 - CTA Paga
<img 
  src={require('./../../_diagrams/main_img/flusso_completo_pagamento/8_paga.jpg').default} 
  alt="Notifica Push PSP" 
  style={{
    width: '220px',
     display: 'block',
      margin: '0 auto',
      borderRadius: '12px',
      border: '1px solid #e0e0e0',
      boxShadow: '0 2px 12px rgba(0,0,0,0.10)'
  }} 
/>

## Step 8 - Pagato
<img 
  src={require('./../../_diagrams/main_img/flusso_completo_pagamento/9_pagato.jpg').default} 
  alt="Notifica Push PSP" 
  style={{
    width: '220px',
     display: 'block',
      margin: '0 auto',
      borderRadius: '12px',
      border: '1px solid #e0e0e0',
      boxShadow: '0 2px 12px rgba(0,0,0,0.10)'
  }} 
/>
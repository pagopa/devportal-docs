---
description: >-
  Questa pillola illustra gli adempimenti preliminari necessari per avviare
  l’onboarding su SEND, guidando passo dopo passo l’Ente nella verifica dei
  requisiti, nella scelta della modalità di integrazio
---

# Adempimenti preliminari all’onboarding su SEND

{% @arcade/embed flowId="3RIgkp6MsCCRAOwO94A6" url="https://app.arcade.software/share/3RIgkp6MsCCRAOwO94A6" %}

<details>

<summary><strong>Come verifico se il mio Ente può aderire a SEND?</strong></summary>

Prima di avviare il processo di onboarding è necessario verificare che il tuo Ente rientri nel perimetro SEND e possa utilizzare il servizio di notifiche digitali.

Per chiarire quali amministrazioni possono aderire alla piattaforma e quali sono i requisiti di utilizzo, consulta le [FAQ dedicate agli Enti](https://docs.pagopa.it/send-faq-enti/).

</details>



<details>

<summary><strong>Dove trovare i riferimenti normativi?</strong></summary>

La piattaforma SEND è disciplinata dall’articolo[ 26 del Decreto Legge n. 76 del 2020](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2020-07-16;76), che introduce la gestione delle notifiche digitali da parte delle Pubbliche Amministrazioni.

Consulta il testo normativo per approfondire il quadro regolatorio relativo all’utilizzo della piattaforma.

</details>



<details>

<summary><strong>Quando posso utilizzare l’integrazione manuale?</strong></summary>

L’integrazione manuale può essere utilizzata **solo per notifiche che non prevedono un pagamento da parte del destinatario.**

Se la notifica prevede un pagamento tramite pagoPA, è necessario utilizzare una modalità di integrazione automatica.

</details>



<details>

<summary><strong>Quali dati delle Ente devo inserire in Area Riservata per avviare l’adesione su SEND?</strong></summary>

* Partita IVA dell’Ente
* Codice destinatario (indirizzo di fatturazione del tuo Ente)
* Dati del legale rappresentante o del delegato
* Dati dell’amministratore

</details>



<details>

<summary><strong>Come ricevo il contratto di adesione a SEND?</strong></summary>

Dopo aver completato la procedura su Area Riservata, riceverai tramite PEC il contratto di adesione.

Per completare l’adesione dovrai:

* firmare digitalmente il contratto
* caricarlo su [Area Riservata](./#quali-dati-delle-ente-devo-inserire-in-area-riservata-per-avviare-ladesione-su-send)

</details>



<details>

<summary><strong>Come verifico se il mio Ente rientra nel perimetro PDND Interoperabilità?</strong> </summary>

Per sapere se il tuo Ente rientra nel perimetro della PDND Interoperabilità, consulta il [Codice dell’Amministrazione Digitale (CAD), art. 2, comma 2](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-03-07;82), che definisce i soggetti a cui si applicano le disposizioni del Codice.

</details>



<details>

<summary><strong>Cos'è il Portale di fatturazione SEND?</strong></summary>

Il Portale di fatturazione SEND consente agli Enti aderenti di inserire e gestire le informazioni amministrative necessarie per l’emissione delle fatture relative all’utilizzo della piattaforma.

Attraverso il portale è possibile:

* inserire i dati amministrativi dell’Ente
* configurare le informazioni per la fatturazione elettronica
* indicare eventuali riferimenti di commessa o ordine di acquisto
* L’accesso al portale avviene dopo aver completato il processo di adesione a SEND.

</details>



<details>

<summary><strong>Quali dati del mio ente devo inserire nel Portale di fatturazione?</strong></summary>

Per configurare correttamente la fatturazione è necessario inserire alcune informazioni relative al tuo Ente.

In particolare dovrai indicare:

* Regime Split Payment dell’Ente
* Indirizzo PEC per ricevere comunicazioni ufficiali
* Email di riferimento per un contatto amministrativo
* Codice SDI / Codice Univoco necessario per l’emissione della fattura elettronica

Durante la procedura potrai inoltre indicare se i dati di riferimento (ad esempio CUP, commessa o altri riferimenti) sono associati a:

* un ordine di acquisto
* un contratto

Queste informazioni consentono a PagoPA di emettere correttamente le fatture relative ai servizi SEND.

</details>



<details>

<summary><strong>Come genero una API Key per SEND?</strong></summary>

Per integrare i sistemi del tuo Ente con SEND è necessario generare una API key, che consente di autenticare le chiamate alle API della piattaforma.

La generazione della chiave avviene tramite Area Riservata, nella sezione dedicata alla gestione delle API key. Da qui è possibile creare una nuova chiave e ottenere il secret associato, che verrà utilizzato dai sistemi del tuo Ente per inviare richieste alle API SEND.

[Segui la guida per la creazione della API key.](https://developer.pagopa.it/it/send/guides/manuale-operativo/mittente/referente-tecnico-operatore/gestione-api-key/creazione-api-key)

</details>

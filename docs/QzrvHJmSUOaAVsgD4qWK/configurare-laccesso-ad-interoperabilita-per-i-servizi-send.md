# Configurare l'accesso ad Interoperabilità per i servizi SEND

In questo tutorial vedremo in pochi passaggi come puoi configurare l’accesso a Interoperabilità e generare il Voucher per chiamare i servizi SEND.\


### 1  - Creazione dell’utente tecnico incaricato

La prima cosa che dovrai fare è accedere all’area riservata in [produzione](https://selfcare.pagopa.it/)[ ](https://urldefense.com/v3/\_\_https:/selfcare.pagopa.it/\_\_;!!EJ3n55FBLexp1rhr!\_FsIroOd0kHtR7U6OVuZgB3Bpwp8zUWFauQWCl1uaUusbiib07erhRMlrsSoc9JhSCLdG1mVZSyXtYVckqbDFP5KMpqT4ObLPiw$)(e non di test),[ ](https://uat.selfcare.pagopa.it/)e creare l'utente del tecnico incaricato tramite la funzione "Crea Utente", associando ad esso il prodotto "Interoperabilità Collaudo" ed il ruolo "Amministratore":&#x20;

<figure><img src=".gitbook/assets/send_pdnd_1.png" alt=""><figcaption></figcaption></figure>

\
Questa abilitazione come "Amministratore" viene fornita in ambiente Interoperabilità Collaudo pertanto non impatterà l'ambiente di Produzione.

Per la registrazione dell'utente incaricato sono necessari i dati nome, cognome, codice fiscale ed email.

\
L'utente del tecnico incaricato dovrà:

* Effettuare l'accesso su selfcare di produzione:[ https://selfcare.pagopa.it/](https://urldefense.com/v3/\_\_https:/selfcare.pagopa.it/\_\_;!!EJ3n55FBLexp1rhr!\_FsIroOd0kHtR7U6OVuZgB3Bpwp8zUWFauQWCl1uaUusbiib07erhRMlrsSoc9JhSCLdG1mVZSyXtYVckqbDFP5KMpqT4ObLPiw$) utilizzando le proprie credenziali SPID associate dall'ente di riferimento al punto precedente.
* Selezionare l'Ente di riferimento
* Selezionare la card "Interoperabilità"
* Selezionare "Collaudo"

A questo punto dovrai cercare l'e-service andando su Fruizione > Catalogo e-service:

<figure><img src=".gitbook/assets/send_pdnd_2.png" alt="" width="366"><figcaption></figcaption></figure>

Avvia la ricerca dell'e-service di SEND - UAT e clicca su Richiedi fruizione creando una bozza di richiesta dove inserire tutte le informazioni richieste, tra cui gli attributi, che si dividono in:

* Attributi certificati: vengono verificati tramite le banche dati delle istituzioni.
* Attributi Verificati: vengono verificati dall’erogatore del servizio a seguito dell'invio della documentazione da parte del fruitore.
* Attributi Dichiarati: vengono dichiarati da chi effettua la richiesta di fruizione sotto la propria responsabilità

Puoi trovare [maggiori dettagli](https://docs.pagopa.it/interoperabilita-1/manuale-operativo/attributi) e un [videotutorial](https://www.youtube.com/watch?v=zmyQIQHAo\_0\&list=PLZcD-ZoVxFzi1f2-taSdg7a3d2UQse3\_Q\&index=8) sugli attributi.

Quando la richiesta di fruizione è stata compilata con successo, clicca su "Inoltra richiesta di fruizione"

<figure><img src=".gitbook/assets/send_pdnd_3.png" alt="" width="563"><figcaption></figcaption></figure>

Una volta che la richiesta di fruizione è stata inviata, questa verrà esaminata dall'Erogatore che dovrà approvarla. È sempre possibile verificare lo stato delle richieste di fruizione presentate andando su Fruizione > Le tue richieste.

Puoi trovare [maggiori dettagli](https://docs.pagopa.it/interoperabilita-1/manuale-operativo/richieste-di-fruizione) e un [videotutorial](https://www.youtube.com/watch?v=2O81jdLHpgQ\&list=PLZcD-ZoVxFzi1f2-taSdg7a3d2UQse3\_Q\&index=8) sulla richiesta di fruizione[ ](https://docs.pagopa.it/interoperabilita-1/manuale-operativo/richieste-di-fruizione)



### 3  - Creare una finalità per l’e-service di SEND-UAT

A seguito dell'approvazione della richiesta di fruizione per l'e-service di SEND - UAT è necessario creare una finalità andando su Fruizione > Le tue finalità e cliccando "Aggiungi".

<figure><img src=".gitbook/assets/send_pdnd_4.png" alt="" width="563"><figcaption></figcaption></figure>

\
Compilare tutti i dati che appaiono sul Form, in particolare:

* e-service da associare: che dovrà corrispondere a quello di SEND - UAT
* numero di chiamate stimate API/giorno: corrisponde alla stima di chiamate al giorno che verranno effettuate verso l’erogatore. Questo valore potrà essere aggiornato in seguito e potrebbe essere necessaria l'attivazione manuale da parte dall’erogatore.

Nella pagina successive bisogna compilare la sezione di analisi del rischio ed infine cliccare su "Crea bozza finalità" per pubblicare la finalità.

Puoi trovare [maggiori dettagli](https://docs.pagopa.it/interoperabilita-1/manuale-operativo/finalita) e un [videotutorial](https://www.youtube.com/watch?v=bCHRgeBJucI\&list=PLZcD-ZoVxFzi1f2-taSdg7a3d2UQse3\_Q\&index=9) sulla creazione di finalità.

### &#x20;4  - Associare un client ad una finalità

\
Il client è un contenitore di materiale crittografico nel quale vengono inseriti un numero discrezionale di operatori di sicurezza, che sono autorizzati a caricare la chiave pubblica del materiale crittografico in loro possesso.&#x20;

Per creare un nuovo client bisogna andare nella sezione Fruizione > I tuoi client e-service e cliccando su "Aggiungi"

Compilare tutti i dati che appaiono sul Form, selezionando tra gli operatori quelli abilitati ad operare nel back-office.&#x20;

Una volta creato un client, sarà possibile associarlo ad una finalità, entrando in Fruizione > Le tue finalità, poi nel tab "Client associati" cliccare su "Aggiungi"\


<figure><img src=".gitbook/assets/send_pdnd_5.png" alt="" width="563"><figcaption></figcaption></figure>

Infine apparirà un menù a tendina che permette di selezionare i client da associare:

\


<figure><img src=".gitbook/assets/send_pdnd_6.png" alt="" width="563"><figcaption></figcaption></figure>

I client possono anche essere riutilizzabili su più finalità e modificati successivamente.

Puoi trovare [maggiori dettagli](https://docs.pagopa.it/interoperabilita-1/manuale-operativo/client-e-materiale-crittografico) e un [videotutorial](https://www.youtube.com/watch?v=w3ynRRMyrxg\&list=PLZcD-ZoVxFzi1f2-taSdg7a3d2UQse3\_Q\&index=10) sul client,



### 4  - Caricare una chiave pubblica

Prima di caricare una chiave pubblica, entra nella sezione **Fruizione > I tuoi client** seleziona "Ispeziona" sul client di riferimento ed assicurati che sia presente "**IL TOKEN PUÒ ESSERE STACCATO: SI**" come segue:

<figure><img src=".gitbook/assets/send_pdnd_7.png" alt="" width="563"><figcaption></figcaption></figure>

Poi accedi al tab "Chiavi pubbliche" e clicca su "Aggiungi"

<figure><img src=".gitbook/assets/send_pdnd_8.png" alt="" width="563"><figcaption></figcaption></figure>

Apparirà un pop up che permette di inserire il nome e la chiave pubblica associata al client.

<figure><img src=".gitbook/assets/send_pdnd_9.png" alt=""><figcaption></figcaption></figure>

Per generare il materiale crittografico, bisogna aprire il terminale e incollare i comandi che seguono, uno alla volta:

```
openssl genrsa -out <nomeChiave>.rsa.pem 2048
openssl rsa -in <nomeChiave>.rsa.pem -pubout -out <nomeChiave>.rsa.pub
openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in <nomeChiave>.rsa.pem -out <nomeChiave>.rsa.priv
```

Sostituendo \<nomeChiave> con il nome che si vuole dare al file contenente la chiave.

\
Il comando genererà una coppia di chiave pubblica e privata, ed un certificato che in questo caso non è necessario utilizzare. La chiave pubblica appena ottenuta, deve essere copiata nel riquadro "Chiave pubblica" del pop up del client; quella privata rimarrà in mano all'aderente, che la manterrà al sicuro e la userà per firmare la richiesta per ottenere un voucher dal server autorizzativo di PDND Interoperabilità.

Puoi trovare qui un [videotutorial](https://www.youtube.com/watch?v=q6zuJ2wn8vM\&list=PLZcD-ZoVxFzi1f2-taSdg7a3d2UQse3\_Q\&index=11) su come generare una chiave pubblica.

### 5 - Generare un Voucher

\
A questo punto è necessario generare il Voucher da inserire come Authorization header nelle chiamate verso i servizi B2B di SEND - UAT.

Per prima cosa dovrai costruire una client assertion valida e firmarla con la tua chiave privata (che deve essere l'omologa della chiave pubblica depositata sul client su PDND Interoperabilità del punto sopra) come segue:

<figure><img src=".gitbook/assets/send_pdnd_10.png" alt="" width="375"><figcaption></figcaption></figure>

Nella prima pagina "Client assertion", potrai selezionare la chiave pubblica di riferimento e generare la client assertion con i comandi script che seguono:

#### Script di esempio per generare un’asserzione

```
# prima di lanciare lo script, pip install jose
from jose import jwt
from jose constants import Algorithms
import datetime
import argparse
import uuid
import os
def clear()
is.system(‘clear’)
```

#### Esempio di utilizzo

```
python create_client_assertion.py \
  --kid=4MS8xEIITr48GB7fCHdOEuTSs5TeBUh2C2BfTgC_BsI \
  --alg=RS256 \
  --typ=JWT \
  --issuer=09c6cce0-0573-4c3c-9c77-525327e52e19 \
  --subject=09c6cce0-0573-4c3c-9c77-525327e52e19 \
  --audience=auth.dev.interop.pagopa.it/client-assertion \
  --purposeId=1659602a-ebe8-4fb5-9585-9465155e51aa \
  --keyPath=PATH_CHIAVE_PRIVATA
```

Ricorda di modificare la variabile \<PATH\_CHIAVE\_PRIVATA> con il path della chiave privata generata al punto precedente. Per creare la client assertion è possibile utilizzare [questo codice](https://github.com/pagopa/pn-b2b-client/blob/develop/create-client-assertion/src/main/java/it/pagopa/pdnd/CreateClientAssertionApp.java).

E' disponibile il corrispettivo codice java della classe per generare la "Client assertion"[ CreateClientAssertionApp](https://github.com/pagopa/pn-b2b-client/blob/develop/create-client-assertion/src/main/java/it/pagopa/pdnd/CreateClientAssertionApp.java).

Salva l'output ottenuto e vai nella seconda pagina "Stacco access token", dove dovrai lanciare il comando che trovi nella pagina in basso:\
\
Esempio di cURL:

```
curl --location --request POST https://auth.dev.interop.pagopa.it/token.oauth2 \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode 'client_id=09c6cce0-0573-4c3c-9c77-525327e52e19' \
  --data-urlencode 'client_assertion=LA_TUA_CLIENT_ASSERTION' \
  --data-urlencode 'client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer' \
  --data-urlencode 'grant_type=client_credentials'
```

\
Ricorda di modificare la variabile \<LA\_TUA\_CLIENT\_ASSERTION> con l'output ottenuto al punto 1.

Per riprodurre il comando si può anche prendere come esempio [questo codice](https://github.com/pagopa/pn-b2b-client/blob/102ba3b4d790a3ccd378bd187525d8cb6937ff07/src/main/java/it/pagopa/pn/client/b2b/pa/impl/PnPaB2bExternalClientImpl.java#L199-L212):[ ](https://github.com/pagopa/pn-b2b-client/blob/102ba3b4d790a3ccd378bd187525d8cb6937ff07/src/main/java/it/pagopa/pn/client/b2b/pa/impl/PnPaB2bExternalClientImpl.java#L199-L212)

Come risposta al comando otterrai una response che contiene access\_token, expires\_in e token\_type. \
\
L'access\_token(PDNDVoucher) appena ottenuto corrisponde al Voucher che potrà essere utilizzato nelle chiamate verso i servizi B2B di SEND - UAT inserendolo come Header: "Authorization: Bearer \<PDNDVoucher>"

Puoi trovare [qui](https://www.youtube.com/watch?v=fb-CDltaeqw\&list=PLZcD-ZoVxFzi1f2-taSdg7a3d2UQse3\_Q\&index=12) un videotutorial su come ottenere un access token



### 6 - Chiamare i servizi SEND - UAT

A questo punto per chiamare i servizi PND sarà necessario utilizzare la baseUrl dell'Ambiente UAT:[ https://api.uat.notifichedigitali.it](https://api.uat.notifichedigitali.it/)&#x20;

Inoltre dovrai generare delle nuove APIKey per l'Ambiente UAT effettuando l'accesso da qui:[ https://selfcare.uat.notifichedigitali.it/](https://selfcare.uat.notifichedigitali.it/) con le stesse credenziali ottenute in fase di Onboarding, poi selezionare l'Ente di riferimento, fare clic sulla card su Piattaforma Notifiche UAT, e generare le APIKey da utilizzare unitamente al Voucher appena creato.

\


\


\
\

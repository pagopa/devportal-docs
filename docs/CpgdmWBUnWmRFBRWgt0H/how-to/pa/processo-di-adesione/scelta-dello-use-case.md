# Scelta dello use-case

Il primo passo per delimitare il perimetro complessivo degli use-case da portare su SEND è per l’Ente quello di consultare il riferimento normativo principale di SEND: l’articolo 26 del Decreto Legge n. 76 del 16 luglio 2020 “Misure urgenti per la semplificazione e l’innovazione digitale” (cd. Decreto Semplificazioni), come convertito dalla legge n. 120 dell’11 settembre 2020 e come successivamente modificato dal Decreto Legge n. 77 del 31 maggio 2021.

L’Ente dovrà fare particolare attenzione agli [atti esclusi dallo scope di notificazione della Piattaforma](https://docs.pagopa.it/faq-enti/) (ref. art. 26 comma 17 D.L. n. 76/2020).&#x20;

## Prioritizzazione e Valutazione di Impatto&#x20;

Una volta identificato il perimetro complessivo di use-case che l’Ente può portare su SEND, è opportuno svolgere alcune valutazioni per identificare il primo use-case da integrare su SEND, nonché gli use-case successivi secondo uno specifico ordine di priorità.

A tal fine, almeno per gli use-case maggiormente rappresentativi della propria operatività, l’Ente deve effettuare un assessment interno preliminare su impatti relativi a sistemi, attività e fornitori coinvolti nel processo di invio e gestione delle notifiche pre e post integrazione a SEND, nonché considerare la complessità di integrazione degli specifici use-case identificati.

Si riportano, a titolo esemplificativo non esaustivo, alcuni esempi di elementi che potrebbero contribuire alla prioritizzazione degli use-case:

1. **Volumi delle notifiche**: considerano la gestione dell’intero processo di notificazione da parte di SEND, l’Ente avrà maggior beneficio nell’integrare use-case che prevedono un numero di notifiche elevato rispetto all’operatività complessiva.
2. **Incertezza dei domicili digitali o fisici**: SEND consente una significativa riduzione dei costi interni per la gestione della notificazione, non richiedendo tra le altre l'integrazione e l’interrogazione da parte dell’Ente di registi pubblici:

* laddove non registrato sulla SEND dal destinatario o presso l’Ente, SEND effettua una ricerca del domicilio digitale sui registri pubblici;
* in caso di notificazione analogica, qualora il primo tentativo di invio cartaceo all'indirizzo fisico fornito dall’Ente fallisca per cause diverse dalla temporanea assenza o dal rifiuto del destinatario o delle altre persone alle quali può essere consegnato il plico, l'operatore postale (incaricato da SEND) ricerca tramite indagine in loco un nuovo indirizzo del destinatario o, ove non disponibile, la piattaforma ricerca un indirizzo fisico sui registri pubblici (ANPR o registro delle imprese). In ogni caso l’Ente dovrà comunque fornire a SEND un primo indirizzo fisico per la presa in carico della notifica.

3. **Ruolo di attori a valle del processo di notificazione**: SEND si occupa della gestione del processo di notificazione tra l’Ente mittente e il destinatario finale della notifica. Laddove intervengano nell'iter notificatorio soggetti terzi ai quali l’Ente mittente non ha fornito accesso a SEND (es. soggetti terzi incaricati dall’Ente), la gestione di eventuali flussi informativi verso tali soggetti terzi dovrà essere gestita direttamente dall’Ente.&#x20;
4. **Partner Tecnologico**: un (o diversi) Partner Tecnologico già integrato con SEND con altri Enti/ altri use-case dell’Ente potrebbe ridurre la complessità e le tempistiche di integrazione degli use-case di interesse dell’Ente.
5. **Integrazione Manuale**: in assenza di integrazioni automatiche, l’Ente deve gestire manualmente tutte le operazioni relative ad una singola notifica. Tale soluzione potrebbe essere percorribile esclusivamente laddove (i) l’Ente ha a proprio carico i costi di notifica, (ii) l’Ente applica un costo di notifica forfettario, (iii) l’Ente invia un numero contenuto di notifiche. Il ciclo di vita della notifica deve in questo caso essere monitorato manualmente da parte dell’Ente con conseguente aumento della complessità di interazione e gestione della notifica.
6. **Servizi attivi su piattaforma pagoPA**: se lo use-case prevede un pagamento, è obbligatorio attivare i servizi messi a disposizione dalla [piattaforma](https://docs.pagopa.it/portale-delle-adesioni/portale-delle-adesioni) dei pagamenti pagoPA prima di attivare il processo di notificazione in produzione tramite SEND, al fine di consentire la corretta attualizzazione della posizione debitoria.
7. **Multi-destinatario**: la gestione dello use-case che prevede più di un destinatario di notifica subisce un aumento di complessità poiché il perfezionamento avviene in maniera indipendente per ogni destinatario e di conseguenza, gli eventi devono essere ricostruiti dal Partner Tecnologico per essere ricollegati alla singola notifica.
8. **Livello di digitalizzazione territoriale**: maggior vantaggio economico per i cittadini dotati di domicilio digitale e/o raggiungibili tramite avvisi di cortesia su altri recapiti digitali come AppIO, mail e/o numero di cellulare.

## Codici tassonomici&#x20;

Il codice tassonomico viene utilizzato per definire la tipologia di atto che l’Ente sceglie di notificare al destinatario.&#x20;

Il Partner Tecnologico che supporta l’Ente riceve una mail dall’indirizzo [pn-support-team@pagopa.it](mailto:pn-support-team@pagopa.it), alla quale deve rispondere specificando anche la tipologia di atto da notificare tramite SEND e il codice tassonomico relativo. La lista dei codici tassonomici è consultabile in [questa pagina](https://docs.pagopa.it/f.a.q.-per-integratori/tassonomia-send).

In fase di creazione di ciascuna notifica, l’Ente dovrà indicare nell’apposito campo il codice relativo all’atto da notificare, già specificato al team di Supporto Enti di PagoPA S.p.A.

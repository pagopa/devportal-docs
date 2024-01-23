# Come integrare i propri servizi su PDND Interoperabilità

Interoperabilità è un "ecosistema" fatto di tante parti. Le due che ci interessano in questo caso sono:&#x20;

* il modello di interoperabilità (ModI) definito da AgID, che descrive il perimetro dell’interoperabilità tra pubbliche amministrazioni;
* PDND Interoperabilità, un artefatto all'interno di quel perimetro.

Per poter integrare i propri servizi su PDND Interoperabilità bisogna seguire una serie di passaggi:

1. scrivere un'API che rispetti il perimetro di sicurezza e gli standard del modello di interoperabilità (ModI). Un'infarinatura teorica e pratica riguardante il MoDI si può trovare [qui](https://developers.italia.it/it/news/interoperabilita.html);
2. se l'ente non l'ha ancora fatto, [effettuare l'adesione](https://docs.pagopa.it/interoperabilita-1/manuale-operativo/guida-alladesione) a PDND Interoperabilità;&#x20;
3. aggiungere all'API [un controllo](https://docs.pagopa.it/interoperabilita-1/manuale-operativo/utilizzare-i-voucher#verifica-di-un-voucher-da-parte-di-un-erogatore-di-e-service) per verificare la legittimità e validità dei voucher (token JWT) di chi sta richiedendo i dati;
4. [pubblicare sul catalogo](https://docs.pagopa.it/interoperabilita-1/manuale-operativo/e-service) di PDND Interoperabilità l'API sotto forma di e-service, corredandola di tutte le informazioni di contorno e contesto necessarie ai casi d'uso.

A quel punto, per la gestione di chi si iscrive a fruire dell'e-service, si segue [il normale flusso](https://docs.pagopa.it/interoperabilita-1/funzionamento-generale) di PDND Interoperabilità.

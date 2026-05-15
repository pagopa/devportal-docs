# Catalogo dei servizi

Il Catalogo dei Servizi è il repository che contiene l’elenco dei servizi generalizzati attivati dagli EC, relativi al processo di pagamento attivato presso i PSP in modalità spontanea.&#x20;

Il Catalogo dei Servizi viene aggiornato e pubblicato con cadenza giornaliera.

Le informazioni del Catalogo dei Servizi sono codificate in un file XML secondo il tracciato [https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/general/CatalogoServizi\_2\_0\_0.xsd](https://github.com/pagopa/pagopa-api/blob/SANP3.0.0/general/CatalogoServizi\_2\_0\_0.xsd) e devono essere inviate da ogni EC a PagoPA S.p.A. attraverso le funzioni previste sul Portale dedicato all'Assistenza.

![](<../../.gitbook/assets/image (5).png>)

Le informazioni possono essere richieste dai singoli PSP alla piattaforma pagoPA utilizzando l'apposita primitiva [nodoChiediCatalogoServizi](../../appendici/primitive.md#nodochiedicatalogoservizi).&#x20;

Ad ogni servizio presente nel Catalogo dei Servizi è associato un insieme di dati specifici e necessari all'EC per fornire al PSP il _numero avviso_, tale insieme di dati è associato ad uno schema XSD che ne definisce il contenuto e permette il controllo delle informazioni, il nome di tale XSD è riportato nell'elemento _xsdRiferimento_ del Catalogo dei Servizi.

Di seguito un esempio di xml del Catalogo dei Servizi restituito nel tag _xmlCatalogoServizi_ in formato base64 tramite la primitiva [nodoChiediCatalogoServizi](../../appendici/primitive.md#nodochiedicatalogoservizi).&#x20;

```xml
<catalogoServizi>
	<idServizio>00009</idServizio>
	<descrizioneServizio>Donazione per fondazione benefica XXX</descrizioneServizio>
	<elencoSoggettiEroganti>
		<soggettoErogante>
			<idSoggettoServizio>00035</idSoggettoServizio>
			<idDominio>01234567890</idDominio>
			<denominazioneEnteCreditore>Fondazione benefica XXX</denominazioneEnteCreditore>
			<dataInizioValidita>2017-04-30</dataInizioValidita>
			<dataFineValidita>2018-04-30</dataFineValidita>
			<commissione>N</commissione>
		</soggettoErogante>
	</elencoSoggettiEroganti>
	<categoria>Donazione</categoria>
	<xsdRiferimento>Donazione_benefica_1_1_0.xsd</xsdRiferimento>
</catalogoServizi>
```

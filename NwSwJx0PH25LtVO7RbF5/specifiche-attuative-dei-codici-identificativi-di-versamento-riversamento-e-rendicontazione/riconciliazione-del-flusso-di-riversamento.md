# Riconciliazione del flusso di riversamento

La riconciliazione del riversamento effettuato dal PSP avviene a cura dell’EC prendendo in considerazione la componente **\<identificativoFlusso>** presente in Remittance Information (attributo AT-05) del SEPA Credit Transfer con il quale è stato effettuato il riversamento verso l’EC ([operazione-di-trasferimento-fondi.md](operazione-di-trasferimento-fondi.md "mention")) ed il dato identificativoFlusso presente nel [flusso-di-rendicontazione.md](flusso-di-rendicontazione.md "mention").

Come riscontro, il dato _importoTotalePagamenti_ del flusso di rendicontazione dovrà coincidere con il dato _Amount_ (attributo AT-04) del suddetto SCT di riversamento.

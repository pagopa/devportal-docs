# INCASSO\_TIPICO

Gli elementi che compongono questo caso sono i seguenti:

* ANNO\_COMPENTENZA -> RC\_AC\_N
* CODICE UFFICIO -> RC\_CU\_N
* TIPO\_INCASSO (alcuni enti la chiamano Voce economica) -> RC\_TI\_N
* EMESSIONE\_FATTURA (SI o NO / non valorizzata) -> RC\_EF\_N
* NR\_DOCUMENTO -> RC\_ND\_N
* IMPORTO -> RC\_IMP\_N

Emissione fattura e nr\_documento sono fra loro alternativi.

Elementi sempre obbligatori: anno competenza, tipo incasso, importo.

<pre class="language-xml"><code class="lang-xml">&#x3C;metadata>
<strong>  &#x3C;mapEntry>
</strong>    &#x3C;key>RC_TIP_1&#x3C;/key>
    &#x3C;value>INCASSO_TIPICO&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_AC_1&#x3C;/key>
    &#x3C;value>2023&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_TI_1&#x3C;/key>
    &#x3C;value>DIRITTI DI SEGRETERIA&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_EF_1&#x3C;/key>
    &#x3C;value>SI&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_IMP_1&#x3C;/key>
    &#x3C;value>100.50&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_TIP_2&#x3C;/key>
    &#x3C;value>INCASSO_TIPICO&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_AC_2&#x3C;/key>
    &#x3C;value>2023&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_TI_2&#x3C;/key>
    &#x3C;value>DIRITTI DI SEGRETERIA&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_ND_2&#x3C;/key>
    &#x3C;value>202312131414141&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_IMP_2&#x3C;/key>
    &#x3C;value>100.50&#x3C;/value>
  &#x3C;/mapEntry>
&#x3C;/metadata>
</code></pre>

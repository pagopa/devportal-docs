# CIVILISTICO

Gli elementi sono i seguenti:

* ANNO\_COMPENTENZA -> RC\_AC\_N
* CODICE UFFICIO -> RC\_CU\_N
* CONTO -> RC\_CON\_N
* COMMESSA -> RC\_COM\_N
* NR\_DOCUMENTO -> RC\_ND\_N
* IMPORTO -> RC\_IMP\_N

Conto, Commessa e Nr Documento sono fra loro alternativi, uno dei tre deve essere inserito.

Elementi sempre obbligatori: anno competenza, importo

<pre class="language-xml"><code class="lang-xml">&#x3C;metadata>
  &#x3C;mapEntry>
    &#x3C;key>RC_TIP_1&#x3C;/key>
    &#x3C;value>CIVILISTICO&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_AC_1&#x3C;/key>
    &#x3C;value>2023&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_CON_1&#x3C;/key>
    &#x3C;value>14.01.03&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_IMP_1&#x3C;/key>
    &#x3C;value>100.50&#x3C;/value>
  &#x3C;/mapEntry>
<strong>  &#x3C;mapEntry>
</strong>    &#x3C;key>RC_TIP_2&#x3C;/key>
    &#x3C;value>CIVILISTICO&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_AC_2&#x3C;/key>
    &#x3C;value>2023&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_COM_2&#x3C;/key>
    &#x3C;value>PAGOPA.002&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_IMP_2&#x3C;/key>
    &#x3C;value>120.50&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_TIP_3&#x3C;/key>
    &#x3C;value>CIVILISTICO&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_AC_3&#x3C;/key>
    &#x3C;value>2023&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_ND_3&#x3C;/key>
    &#x3C;value>202312131414141&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_IMP_3&#x3C;/key>
    &#x3C;value>110.50&#x3C;/value>
  &#x3C;/mapEntry>
&#x3C;/metadata>
</code></pre>

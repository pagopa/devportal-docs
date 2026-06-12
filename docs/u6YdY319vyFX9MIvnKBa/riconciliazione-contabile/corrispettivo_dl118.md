# CORRISPETTIVO\_DL118

Gli elementi che compongo questo caso sono i seguenti:

* ANNO\_COMPENTENZA -> RC\_AC\_N
* CODICE UFFICIO -> RC\_CU\_N
* CAPITOLO -> RC\_CAP\_N
* ACCERTAMENTO -> RC\_ACC\_N
* ARTICOLO -> RC\_ART\_N
* PF\_5\_LIVELLO  (piano finanziario 5 livello) -> RC\_PF5\_N
* IMPORTO -> RC\_IMP\_N

Capitolo e Accertamento sono fra loro alternativi, uno dei due deve essere inserito.

Accertamento e pf\_5\_livello sono fra loro alternativi.

Elementi sempre obbligatori: anno\_competenza, importo

<pre class="language-xml"><code class="lang-xml"><strong>&#x3C;metadata>
</strong>  &#x3C;mapEntry>
    &#x3C;key>RC_TIP_1&#x3C;/key>
    &#x3C;value>CORRISPETTIVO_DL118&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_AC_1&#x3C;/key>
    &#x3C;value>2023&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_CAP_1&#x3C;/key>
    &#x3C;value>123245666&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_ACC_1&#x3C;/key>
    &#x3C;value>2023/1233&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_IMP_1&#x3C;/key>
    &#x3C;value>100.50&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_TIP_2&#x3C;/key>
    &#x3C;value>CORRISPETTIVO_DL118&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_AC_2&#x3C;/key>
    &#x3C;value>2023&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_ACC_2&#x3C;/key>
    &#x3C;value>2023/1233&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_PF5_2&#x3C;/key>
    &#x3C;value>E.1.01.01.20.001&#x3C;/value>
  &#x3C;/mapEntry>
  &#x3C;mapEntry>
    &#x3C;key>RC_IMP_1&#x3C;/key>
    &#x3C;value>100.50&#x3C;/value>
  &#x3C;/mapEntry>
&#x3C;/metadata>
</code></pre>

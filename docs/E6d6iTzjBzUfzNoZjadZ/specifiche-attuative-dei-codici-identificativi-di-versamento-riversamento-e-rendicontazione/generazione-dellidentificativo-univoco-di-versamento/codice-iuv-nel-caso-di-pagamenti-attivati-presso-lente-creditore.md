# Codice IUV nel caso di pagamenti attivati presso l'Ente Creditore

Come già indicato, l’EC è libero di strutturare secondo le proprie esigenze la composizione del codice IUV, tenendo in debito conto che tale codifica deve essere predisposta in conformità agli standard internazionali, in particolare dovrà essere rispettato il limite massimo di 35 caratteri imposto dagli standard SEPA usati per la disposizione di accredito.

In alternativa, il codice IUV può essere generato rispettando lo Standard ISO 11649:2009 denominato anche “_Structured Creditor Reference_” (cfr. [_SEPA Credit Transfer scheme customer-to-bank implementation guidelines_](https://www.europeanpaymentscouncil.eu/document-library/implementation-guidelines/sepa-credit-transfer-scheme-customer-bank-implementation)).

Tutto ciò premesso, il codice IUV può essere pertanto generato secondo uno dei due seguenti schemi:

#### Schema C

$$
<codice alfanumerico (max 35)>
$$

#### Schema D

$$
RF <check digit (2n)><codice alfanumerico (max 21)>
$$

Nel caso in cui presso un EC siano presenti “punti di generazione” del codice IUV tra loro diversi e non coordinati ([Punti di generazione del codice IUV](./#punti-di-generazione-del-codice-iuv) e [Il codice di segregazione](./#il-codice-di-segregazione)), il codice IUV, generato per essere usato nell'ambito dei pagamenti attivati presso l'ente, potrà essere composto secondo uno dei due seguenti schemi:

#### Schema E

$$
<codice segregazione (2n)><codice alfanumerico (max 33)>
$$

#### Schema F

$$
RF <check digit (2n)><codice segregazione (2n)><codice alfanumerico (max 19)>
$$

Si tenga in ogni caso presente che, al fine di evitare duplicazioni nella generazione del codice IUV, la lunghezza del componente `<codice alfanumerico>` dovrà essere costante nel corso del tempo.

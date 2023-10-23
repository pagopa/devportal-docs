# Stato del servizio

### Stati

Vediamo tutti gli stati che può assumere un servizio, come consultarlo e cosa può far lo cambiare.

<details>

<summary>DRAFT</summary>

Bozza: è un servizio che deve ancora essere modificato o completato.

</details>

<details>

<summary>SUBMITTED</summary>

Sottoposto: un servizio per cui è stata richiesta una revisione.

</details>

<details>

<summary>REJECTED</summary>

Respinto: è un servizio che è stato valutato da PagoPA S.p.A e che ha bisogno di correzioni o aggiunte. È necessario quindi modificarlo e poi sottoporlo ad una nuova revisione.

</details>

<details>

<summary>APPROVED</summary>

Approvato: è un servizio che è stato valutato positivamente da PagoPA S.p.A. Solo i servizi approvati possono essere pubblicati su IO.&#x20;

Quando si modifica un servizio approvato, si genera una nuova versione del servizio stesso. Quella che è stata approvata rimane disponibile per la pubblicazione fino a quando un'altra versione non transita positivamente per una review e arriva di nuovo allo stato `approved`.

Avrai quindi al massimo due versioni del servizio:

* Un servizio `approved`, `published` o `unpublished`
* Un servizio `draft`, `submitted` o `rejected`

</details>

<details>

<summary>PUBLISHED</summary>

Attivato: un servizio che è stato approvato ed è stato reso visibile su IO.

</details>

<details>

<summary>UNPUBLISHED</summary>

Disattivato: un servizio che è stato approvato, ma non è visibile su IO.

</details>



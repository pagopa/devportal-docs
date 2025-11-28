---
description: description
---

# OpenAPI test

## Titolo

{% openapi src="https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd.json" path="/organizations/{organizationfiscalcode}/debtpositions" method="get" %} test {% endopenapi %}

{% hint style="warning" %} Il query parameter toPublish consente di pubblicare automaticamente una posizione debitoria in fase di creazione, impostando questo parametro a true e valorizzando contestualmente a null il campo validityDate, la posizione debitoria andrà direttamente nello stato VALID pronta per essere pagata. {% endhint %}

{% openapi src="https://raw.githubusercontent.com/pagopa/pagopa-api/refs/heads/SANP3.10.0/openapi/gpd.json" path="/organizations/{organizationfiscalcode}/debtpositions/transfers" method="patch" %} test {% endopenapi %}







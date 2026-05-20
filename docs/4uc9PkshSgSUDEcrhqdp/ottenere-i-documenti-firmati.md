# 📃 Ottenere i documenti firmati

Per recuperare i documenti firmati è necessario effettuare una richiesta `HTTP GET` all'endpoint `GET /api/v1/sign/signature-requests/{signature_request_id}`, specificando l'ID della richiesta di firma e gli header necessari all'autenticazione.

La risorsa restituita conterrà il dettaglio della **Signature Request.**

In questo caso, la proprietà `status` della richiesta di firma sarà `SIGNED` e per ogni `document` sarà presente la proprietà `url` da cui recuperare l'url per **scaricare il file firmato.**

{% hint style="warning" %}
L'app IO manterrà i documenti firmati solo per 90 giorni, così da consentire all'utente di visualizzare, scaricare e/o condividere i file.

La conservazione del documento a norma - e l'eventuale restituzione all'utente su richiesta - resta una responsabilità dell'ente. Il QTSP (Qualified Trusted Service Provider) è tenuto a conservare i certificati di firma one shot per 20 anni.
{% endhint %}

### Documenti firmati

I documenti ottenuti saranno **firmati digitalmente** e potranno essere accertati con tutti gli strumenti di verifica della firma qualificata (ad esempio [postecert](https://vol.postecert.poste.it/verificatore/it?type=0), [acrobat reader DC](https://www.adobe.com/it/))

Qualora siano stati inseriti dei [campi firma](il-processo-di-firma/preparare-i-documenti/identificare-i-campi-firma/) sui documenti, sarà reso visibile anche un corrispettivo **grafico** in corrispondenza degli stessi.

<figure><img src="../firma-con-io/manuale-operativo/v2.0/.gitbook/assets/Screenshot 2023-05-02 alle 12.44.43.png" alt="" width="188"><figcaption></figcaption></figure>

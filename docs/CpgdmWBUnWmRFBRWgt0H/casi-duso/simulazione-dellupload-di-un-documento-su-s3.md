# Simulazione dell'upload di un documento su S3

Aprire la shell di Git Bash o un terminal SSH ed eseguire il comand&#x6F;_:_

`curl -X<httpMethod> \`\
`-H"Content-type: application/pdf" \`\
`-H"x-amz-meta-secret: <secret>" \`\
`-H"trailer: x-amz-checksum-sha256" \`\
`-H"x-amz-checksum-sha256: <checkSum>" \`\
`--data-binary "@<filePath>"  \`\
`"<url>"`

**`<httpMethod>`**: è il metodo http (PUT o POST) indicato nella response della preload, da utilizzare per questa chiamata\
&#xNAN;**`<secret>`**: è il secret ottenuto nella response della preload\
&#xNAN;**`<checksum>`**: è il checksum sha256, codificato in base 64, del contenuto binario del file da caricare\
&#xNAN;**`<file>`**: è il path del file da caricare\
&#xNAN;**`<url>`**: è l'url del bucket S3 ottenuto nella response della preload, sul quale effettuare l'upload del documento

{% hint style="info" %}
**NOTA:** l'header `-H"trailer: x-amz-checksum-sha256"` è non obbligatorio ai fini del buon esito della chiamata, per tanto può essere omesso qualora si riscontrassero problemi durante questa fase; inoltre si evidenzia che in questa chiamata **NON** deve essere inserito l'Autorization Header `"Authorization: Bearer <PDNDVoucher>`con il Vocuher.
{% endhint %}

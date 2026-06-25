---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/jqqB3CsnONZdScwRg13O/tutorial/tutorial-generali/come-verificare-lintegrita-di-un-documento
---

# Come verificare l'integrità di un documento

È sempre possibile verificare che i file di interfaccia disponibili su PDND Interoperabilità non siano stati alterati o corrotti durante il trasferimento.

Questo controllo si effettua confrontando il checksum SHA256 calcolato localmente con quello indicato sulla scheda e-service dalla quale hai scaricato il file. L'indicazione è disponibile all'interno dei dettagli tecnici dell'e-service alla voce _Checksum file di interfaccia_.

Se i due valori corrispondono, il file è integro; in caso contrario, potrebbe esserci stato un errore durante il download o il file potrebbe essere stato manipolato.

{% hint style="info" %}
Gli esempi sottostanti sono illustrativi e mostrano il procedimento manuale tramite riga di comando. In ambienti di sviluppo o produzione, è possibile eseguire questo controllo in modo programmatico, integrando appositi script o utilizzando librerie specifiche.
{% endhint %}

### Esempio di procedura per macOS

1. Apri il terminale: vai su `Applicazioni > Utility > Terminale`;
2. calcola il checksum: esegui il seguente comando, sostituendo `nome_file` con il nome del file scaricato: `shasum -a 256 nome_file`;
3. confronta i valori: il comando restituisce una stringa alfanumerica. Confronta questo valore con il checksum SHA256 indicato sul sito. Se coincidono, il file è integro.

### Esempio di procedura per Windows

1. Apri il terminale
   1. usando il prompt dei comandi: digita `cmd` nel menu Start;
   2. usando PowerShell: digita `powershell` nel menu Start;
2. calcola il checksum
   1. con CertUtil (prompt dei comandi): esegui il comando seguente, sostituendo `nome_file` con il nome del file scaricato: `CertUtil -hashfile nome_file SHA256`;
   2. con PowerShell: esegui `Get-FileHash nome_file -Algorithm SHA256`;
3. confronta i valori: il comando restituirà il checksum in formato esadecimale. Verifica che questo valore corrisponda a quello fornito sul sito.

### Esempio di procedura per Linux

1. Apri il terminale: accedi al terminale dalla distribuzione Linux in uso;
2. calcola il checksum: esegui il seguente comando, sostituendo "nome\_file" con il nome del file scaricato: `sha256sum nome_file`;
3. confronta i valori: il comando visualizzerà il checksum insieme al nome del file. Confronta la stringa ottenuta con quella indicata sul sito per verificare l’integrità del file.

***

Pagina successiva [→ Glossario](../../riferimenti-tecnici/glossario.md)

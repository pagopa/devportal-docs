# Notificazione digitale

In presenza di almeno un domicilio digitale, PN notifica l’AAR attraverso PEC o SERCQ. In presenza di più domicili digitali diversi, questi verranno utilizzati secondo il seguente ordine di priorità:

1. Domicilio digitale di piattaforma (se disponibile quello configurato dal destinatario per l'ente mittente della notifica, in alternativa quello configurato dal destinatario per la genericità degli enti mittenti)
2. Domicilio digitale speciale (indicato dall’ente mittente nella creazione della notifica)
3. Domicilio digitale generale (fornito da IniPEC o INAD)

<figure><img src="../../.gitbook/assets/image (21).png" alt=""><figcaption></figcaption></figure>

PN interromperà il tentativo di invio al primo successo. Nel caso di fallimento nel primo tentativo di invio digitale (es. casella postale satura o indisponibilità momentanea causa di disservizio del fornitore della PEC o SERCQ), la notifica in via digitale sarà ritentata dopo almeno 7 giorni dal primo fallimento. La distanza tra il primo ed il secondo tentativo può variare da 7 a 9 giorni in base al carico del sistema.

Nel caso in cui il processo di notificazione attraverso PEC o SERCQ fallisca anche al secondo tentativo, viene creato un Avviso di Mancato Recapito (AMR) e collegato allo IUN in modo che sia visibile al destinatario nel caso egli acceda al portale di PN. L’AMR è nello specifico un elemento di timeline visibile a tutti i destinatari della notifica. Viene inoltre inviato al destinatario l’AAR con raccomandata semplice.

Sia nel caso di successo che di fallimento del processo di notificazione in via digitale viene creata un’attestazione opponibile ai terzi indicante i passi di notificazione intentati ed il loro esito. In caso di fallimento questa stessa attestazione certifica la messa a disposizione dell’AMR.

La notifica si perfeziona per il destinatario dopo 7 giorni dalla consegna dell’AAR attraverso PEC o SERCQ oppure 15 giorni dopo la generazione dell’AMR. Inoltre se l'avviso di avvenuta ricezione o l’eventuale generazione dell’AMR e' consegnato al destinatario dopo le ore 21.00, il numero di giorni indicati in precedenza per il perfezionamento viene incrementato di 1 (art. 26 D.L. 76/2020).

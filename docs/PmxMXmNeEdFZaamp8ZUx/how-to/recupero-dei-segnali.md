# Recupero dei segnali

1. per ogni intervallo di tempo programmato (vedi sezione su [recupero periodico dei segnali](../la-guida-tecnica/segnali.md#retention-period-policy-e-recupero-periodico-dei-segnali)) il consumatore richiede i segnali di variazioni dell’e-service di interesse tramite il servizio Recupero Segnali di Signal Hub
2. il consumatore richiede e ottiene il voucher api da PDND
3. il consumatore invia la richiesta di recupero segnali per l’e-service di interesse
4. il servizio Recupero Segnali (_Signal Hub PULL_) autorizza la richiesta e invia la lista dei segnali
5. il consumatore ha la lista dei segnali di variazione

<figure><img src="../.gitbook/assets/lettura segnale sh.png" alt=""><figcaption><p>diagramma recupero del segnale</p></figcaption></figure>

[Diagramma recupero segnali](https://mermaid.live/edit#pako:eNptVNtunDAQ_ZWR-9BGWjZcQjagah-abNSqaVolah8qpMoLA2sJbGrMttko_9J_6Y91bEKyNMsDeMZnZs5cmHuWqwJZyjzPy6QRpsYUajSm1xw6rCSvMZO5kqWo0kwCmA02BFnzDp_Eb1wLvq6xcwiAVouG67tzVSudQsZeXV6-u_T9jGXShclkhz97lDleCF5p3mSS90bJvlmjfnTBtRG5aLk0sLoB3sG5kl3fcKM0PhITL6FfLq4vLNh9P0iDWrUHUF-vrizqVlg38L5fO9UAvFYGQW1RU9yZ06cEJDhFR8g3CPVrXqBG8g6d4NBLyPe4FWJKT2NuQFfrN0ESzCAMI3rF8dFwWSvVQkuxVCUFCEt4y-taWS8Gm1ZRLZWtkHU-mKxuvOXS5peCFvlGYGc4FFjDVvXETgNvBTRhM6B5bsSWE1NrMajsyTta3aSjxV7eNZYGVAmDf94XwnYpHZipdt7ySrV8LswxRXi71sfLvCaI-SGKFOKTaD2fz51a6YpLseNGKOkuTxa_ErocYhU44WVVw8W0YAtbMD-mV5QcPQMmhaspeZrVaQ2m2KFirpHkuycrNY624wpvrCP0Oiq-yF0HXb7Ydfhf2GfaT_MyPs9zY-9mQzw71lrsdnxHdcCpgUU8ESM7UYqcQ6l74cCAUAo7Rubvnz1yB33YZn7-CB7Uwk7DZP7GZ7_mL8i7ElkvEwcpUH2WpDDiuOTG0GSrqkJ74LC1P_2BtFAW-90k8YDgDmzGKi0Klhrd44w1qBtuRXZvQRlzuyVjdoMUWPK-NnaDPJAZ_cXflWpGS636asPSktcdSX1bUJKPm2WE2Ebc3sl8lAfQqhDUn1GHTvo07EO3Fl0klt6z3ywNgpN5cur7SRLFSRjEi9MZu2OpR9ow8ePwNCbEmR-EDzO2c-SCuX8WJWcnfrCIFmEQBRFRpcxRn6teGpYmD_8AQru2xg)

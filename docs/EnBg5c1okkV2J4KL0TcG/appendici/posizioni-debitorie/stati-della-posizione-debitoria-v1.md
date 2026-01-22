# Stati della posizione debitoria V1

Secondo il modello dati dell'API V1 di GPD, la **Posizione Debitoria** è rappresentata dall'entità _Payment Position_, che funge da aggregatore principale. Essa contiene una o più **Opzioni di Pagamento** _(Payment Option)_. Queste ultime sono utilizzate per rappresentare le singole istanze di pagamento, incluse le **Rate**.

### Payment Position FSM

Le transizioni contrassegnate dall'etichetta **API** indicano operazioni invocate esplicitamente dal client. Tutte le altre transizioni avvengono automaticamente in base a logiche interne (es. scadenze temporali) o sono scatenate dal ciclo di vita del pagamento.

<figure><img src="../../.gitbook/assets/Screenshot 2026-01-14 alle 14.03.35.png" alt=""><figcaption></figcaption></figure>

### Payment Option FSM

<figure><img src="../../.gitbook/assets/Screenshot 2025-12-24 alle 11.52.18.png" alt=""><figcaption></figcaption></figure>

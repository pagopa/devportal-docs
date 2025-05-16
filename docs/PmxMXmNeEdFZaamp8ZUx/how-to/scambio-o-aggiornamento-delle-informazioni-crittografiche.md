# Scambio o aggiornamento delle informazioni crittografiche

La gestione delle informazioni crittografiche è condizione necessaria per depositare e recuperare segnali. Di seguito&#x20;

1. L’erogatore mette a disposizione nell’API dell’e-service pubblicato le informazioni crittografiche: funzione di hashing e seme
2. Prima di accedere al servizio di recupero segnali o quando viene ricevuto un segnale di tipo _SeedUpdate_ (vedi sezione sulle [tipologie di segnali](../la-guida-tecnica/segnali.md)), il fruitore richiede le informazioni crittografiche dall’e-service di interesse
3. Il fruitore possiede le informazioni crittografiche aggiornate ed è in condizione di calcolare gli identificativi pseudonimizzati per tutti i soggetti con un procedimento amministrativo in essere che sono presenti nella propria base dati
4. Il fruitore può rendere persistenti gli identificativi pseudonimizzati associati ai soggetti in base a come deciderà di implementare la ricerca degli identificativi pseudonimizzati presenti nei segnali (vedi elaborazione dei segnali)

<figure><img src="../.gitbook/assets/scambio materiale crittografico (1).png" alt=""><figcaption></figcaption></figure>



{% embed url="https://mermaid.live/edit#pako:eNqdVNtq20AQ_ZVh-9KCnPoS10QUQ-o6kIdCiKEPRS-r1VgekHbUvYTEIf_eWclJXNNCyILEXs45MzuXfVSGK1S5Go1GhQ0UGszBG92WxNDqgI50g2AchcC101syXFjDdkt1XliAsMNWKKX2-LL8qYVVNuh7BEDnqNXuYcUNuxwK9eHq6tvVeFyowvZmC-vxd0Rr8DtpMdIWVsfANrYlunTcaRfIUKdtgNUGtIfLCh3agLBi66M4yk7sl3wPwWnrhSCnsCEfsNVwbbfsBER3DGvH9QF-LLvuZXHk0d2ROTm8uf3L5pEE2io5WFiHJoCry4-Ti0kG0-lMfvP5pyEAloXFd-hEKVtt3hDhxLq5HY2Wa0FXKKiWrN4TW5Rl02j4WrrPy220w94xXUNFsNN-R7YGBC8ZORHsYlk2Ahy4lzfX71HjLoBu-uQyaGPQe04bfQRFJ_EkKrFDx7JZW91Qb4a7Ljrsp2SFjx7tvjcT7QGIaVUoj1hB7CqJUioWOIzVZrTs7-HI7Ah90O-PSRrrpJfS8h_qKX71jNd1TeysbqUs-K3sFDeJiU-1me5NlbApQaU-SW5C4LmuMQT6h0mjGyN9JLC6oVNu5zFWbKml_V52khkIUYTgVVNitARp4BTszrHBigb3dSslJk65oU8kNZJRdEee98X-Mul_KlOt1KamSt6Qx3RaqP4NKFTq9Aq3OjYhJe9JoKmrNw_WqDy4iJkaUntoepVvdeNlVzyS5voxvEv985QpacNfzO0zUZYqf1T3Kp8sxmfyvY5pph5U_uXibDKbTyeL2cVkNj6fLZ4yte8FJplyHOvdi7nBiXVv9Fm_dulCw1x6Xhp_xdEGlZ_PF09_AB7ayKs" %}

# Elaborazione dei segnali

1. Il consumatore accede alla lista dei segnali di variazione
2. Se tra i segnali è presente un segnale di tipo _SeedUpdate_ (vedi sezione sulle [tipologie dei segnali](../la-guida-tecnica/segnali.md)), è necessario che il consumatore aggiorni le informazioni crittografiche
3. Il consumatore ricerca nei segnali ricevuti gli identificativi pseudonimizzati associati relativi ai soggetti per cui sono presenti procedimenti in essere. La ricerca determina se l'identificativo pseudonimizzato è riconducibile a un soggetto con procedimento in essere confrontando
   1. l'identificativo pseudonimizzato presente nel messaggio
   2. l'identificativo pseudonimizzato precalcolato o calcolato a runtime di ciascun soggetto per cui è presente un procedimento in essere
4. Il consumatore trova un identificativo pseudonimizzato associato a uno degli identificativi pseudonimizzati precalcolati e individua l’identificativo in chiaro del dato soggetto a variazione
5. Dopo aver esaminato tutti i segnali, il consumatore ha la lista degli identificativi in chiaro dei dati soggetti a variazione, necessari per l’invocazione dell’e-service di interesse

<figure><img src="../.gitbook/assets/elaborazione dei segnali.png" alt=""><figcaption></figcaption></figure>



[Diagramma elaborazione dei segnali](https://mermaid.live/edit#pako:eNqVVc1um0AQfpXR9pJIdgR2aG3URnKc5lJVPaTtoeKywBiPBDt0WazGUd6n79EX6ywEJ47tQzggZnd-vpn5ZnhQGeeoYjUejxPjyJUYA5Y6Zau3xAYhR4IGC6NLSkzGZkVFnBgAt8ZKdFPd4E78qS3ptMSm0wCoLVXa3i-5ZBtDot7d3l7fBkGiEtPFS0yDv1s0Gd6QLqyuEqNbx6atUrSJqbV1lFGtjYMb0A3guEG7oQyf3L-4X_j7JZumrbRji8-YX2ten9D8mNqrkhqnoeGiQOcIJF3JgTPMqULjGMgANoLhCIDl29xufKl8hZ8Q9m-LmQNbpGfhPBzBZDKVVxSd95eGHQJv0MJitIzhjiSiREPI1ghUere74DpNSQM7h0YKCq3R0IPIab8yunRQ7i6fey3RDPz7C5uWne5V_VMy11ALBC7MoIvP1_7h2kFD_uL7fY3wCe4Q8x91rt0rxf2cbmLQRUFsje5r7Qsn2aDUqZQcLTnHwpEVZXzoZzG-uhIPlrI1oaTijVet6Sn80lbD2Vo3azIF-BZVeH7o7EacLWL49gXGcMJJb3scx-JYJm_0I0U86TzTZSYTJbbSiEYah2bbJSz9K6RzlEtU8u4dbahv6hP1Dn2iyfcPu4P9Ix_3Ovb8WlnuxuBlBIa6wTYXJle03Qr9JGJ5nBqebMIp6RKbvM0oJemsFnYOAPlg5A4RX_dVED5RH2kwleGU7mt7lB69kVRNyDFAHAw9zf04uhPEWvYNbU2BB6n7UfBTJjuhhzS0_nWxsWxwGKq9ApxGuwPozZzlzQHCve7thN3HCzExaqQKS7mKnW1xpCq0lfaievBqieo2eKL8ns5xpdvS-T39KGay334xV4Ol5bZYq3ilJaORarvJftrfg4rf4nf3JhvkXulzTrKchjPspK_976f7C3WRVPyg_qg4DMKLSRBeRpMoDKL30WU0UvcqHk8uL-bvJ5fT-TSYT-eT6exxpLYduPAimAazQLQ_zMIoisKZQJXc0S65NU7F88f_ZNkx8Q)

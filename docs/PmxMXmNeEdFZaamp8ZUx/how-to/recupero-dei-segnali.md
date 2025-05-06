# Recupero dei segnali

1. per ogni intervallo di tempo programmato (vedi sezione su [recupero periodico dei segnali](../la-guida-tecnica/segnali.md#retention-period-policy-e-recupero-periodico-dei-segnali)) il consumatore richiede i segnali di variazioni dell’e-service di interesse tramite il servizio Recupero Segnali di Signal Hub
2. il consumatore richiede e ottiene il voucher api da PDND
3. il consumatore invia la richiesta di recupero segnali per l’e-service di interesse
4. il servizio Recupero Segnali (_Signal Hub PULL_) autorizza la richiesta e invia la lista dei segnali
5. il consumatore ha la lista dei segnali di variazione

<figure><img src="../.gitbook/assets/lettura segnale sh.png" alt=""><figcaption><p>diagramma recupero del segnale</p></figcaption></figure>

{% embed url="https://mermaid.live/edit#pako:eNptVNtu2zAM_RVCe9gK2KkvSVMbQx7WptiwrhtabA-DgUGxaUeALXmynK0p-i_7l_3YKLlJ4zV-sCXqkDw8ovnAclUgS5nv-5k0wtSYQo3G9JpDh5XkNWYyV7IUVZpJALPGhiAr3uF--41rwVc1dg4B0GrRcH1_oWqlU8jYq6urd1dBkLFMujSZ7PBnjzLHS8ErzZtM8t4o2Tcr1E8huDYiFy2XBpa3wDu4ULLrG26Uxidi4iX0y-XNpQW77wdpUKv2COrr9bVF3QkbBt73K2cagDfKIKgNasrrOXtKQIJTdoR8jVC_5gVqpOjQCQ69hPyAWyHG9DTmBnS1ehMmoQdRFNNrNjsZDmulWmgpl6qkAGEJb3hdKxvFYNMq0lJZhWzwwWV56y8Wtr4UtMjXAjvDocAaNqondhp4K6CJmgHNcyM2nJhaj8FkV_7J8jbdeRzUXWNpQJUwxOd9IewtpQMz1U5aXqmWT4Q5pQxvV_p0kdcEMT9EkcJsGq8mk4kzK11xKbbcCCXd4XT-K6HDIVeBI17WNByMBZtbwYIZveLk5BkwEq6m4qlXxxqMsYNi7iIpdk9eatfajiu8sYHQ70h8kbsbdPVi1-F_aZ9p7_tl9zz3jT3zhny2rbXYbvmWdMCxg0XsiZGfKEXOodS9cGBAKIVtI_P3zwG5ozHsZX7-CD7UwnbDqP92z6HmL8g7iWyUUYAUSJ8FGYw4Lbkx1NmqqtAuOGzsT3-kLJTF4W3S9sjGLZjHGtQNFwXNnwd7kDE3TzJmp0aBJe9rY6fGI0GtlHf3Mmep0T16rG8LquVpgOyMWAgS_NMw0txk8xj98t-V2kNoy9IH9pulYTidJGdBkCTxLInC2fzMY_cs9ckaJcEsOpsR4jwIo0ePbV2EcBKcx8n5NAjn8TwK4zD2mFZ9tWZpyetuz2rpaOwyVtpWOKxpbNDsuFC9NCxNHv8BciK2xg" %}
recupero del segnale
{% endembed %}

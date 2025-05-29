# Elaborazione dei segnali

1. Il consumatore accede alla lista dei segnali di variazione
2. Se tra i segnali è presente un segnale di tipo _SeedUpdate_ (vedi sezione sulle [tipologie dei segnali](../la-guida-tecnica/segnali.md)), è necessario che il consumatore aggiorni le informazioni crittografiche
3. Il consumatore ricerca nei segnali ricevuti gli identificativi pseudonimizzati associati relativi ai soggetti per cui sono presenti procedimenti in essere. La ricerca determina se l'identificativo pseudonimizzato è riconducibile a un soggetto con procedimento in essere confrontando
   1. l'identificativo pseudonimizzato presente nel messaggio
   2. l'identificativo pseudonimizzato precalcolato o calcolato a runtime di ciascun soggetto per cui è presente un procedimento in essere
4. Il consumatore trova un identificativo pseudonimizzato associato a uno degli identificativi pseudonimizzati precalcolati e individua l’identificativo in chiaro del dato soggetto a variazione
5. Dopo aver esaminato tutti i segnali, il consumatore ha la lista degli identificativi in chiaro dei dati soggetti a variazione, necessari per l’invocazione dell’e-service di interesse

<figure><img src="../.gitbook/assets/elaborazione dei segnali.png" alt=""><figcaption></figcaption></figure>





{% embed url="https://mermaid.live/edit#pako:eNqVVc1um0AQfpXR9pJIOALbtDZqI_mnuVRVD2l7qLgsMMYjwS5dFqt2lPfpe_TFOgvGsWP7EA6I3fn7Zuab4UmkOkMRicFgECtLtsAIsJCJNnJHWiFkSFBjrmRBsUq1WlEexQrArrFk3UTWeDj-lIZkUmDdagBUhkpptgtdaBNBLN49PMwffD8WsWrjxarG3w2qFJckcyPLWMnGatWUCZpYVdJYSqmSysISZA04qNFsKMW9-yP5zMkXWtVNKa02-IL5teb8iubHxNwXVFsJtc5ztJaA0-UcdIoZlaisBlKANWO4AGDxNrcbVypX4T3C7m0wtWDy5CaYBh4MhyN-heFtJ1TaIugNGph5iwgeiSNyNIR0jUCFc3sILpOEJGhrUXFBoVESOhAZnVZGFhaKg_Cl1xxNwb-_sGm0lZ2qewqtK6gYgs5Vr4svYvfoykJNTvB9WyF8gkfE7EeVSftK8TSnZQQyz0kbJbtau8JxNsh1KjhHQ9Zq5siKUn3uZza4v2cPhtI1IafijFeN6ih8bCvhZi3rNakcXItKvD13tmRnswi-fYEBXHHS2V7GMbuUyRv9cBGvOk9lkfJEsS03oubGodq1CXP_cu4cZRyVnHtLG-qauqfeuU9U2elle3F65eLOI8evldHtGBxH0FDV2GTM5JJ2O6YfRywuU8ORjTnFXdIqa1JKiDsrmZ09QH02cueI510VmE_URepNeTi5-9JcpEdnxFVjcvQQe0NHczeO9gqxFl1DG5XjWepuFNyU8U7oIPWtf11sLGrsh-qkANfRHgA6M2v05gzhSfcOh8PH0TFWwhMlmlJSxuv-yYli0W7tWLjdnOFKNoV1u_mZVd0eftyqVETWNOiJph3g_ZruL7lJvG2-dn-Q9kfiCV6Gv7Q-qPBRRE_ij4gCP7gb-sE4HIaBH74Px6EntiIaDMd30_fD8Wg68qej6XA0efbErvUQ3Pkjf-Kz9odJEIZhMPGE0U2-FtFKcjl7VJ9bGH3E3LgMu2_DuaNZ6EZZEU2f_wORYDHx" %}
elaborazione del segnale
{% endembed %}

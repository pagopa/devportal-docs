# Analisi stagionalità

Mediante la scheda “Analisi Stagionalità”, il Prestatore aderente ha accesso ai risultati dell’analisi di stagionalità dei servizi di incasso della piattaforma pagoPA. Tale analisi mira a determinare quali servizi seguono andamenti stagionali ricorrenti nel tempo grazie al calcolo di un indice che consente di classificarli a seconda della loro progressione temporale. L'analisi si basa su un **algoritmo di decomposizione** stagionale-tendenziale in grado di separare una serie storica di dati in tre componenti principali:

●        **Trend** (tendenza): rappresenta il cambiamento a lungo termine nei dati, mostrando una direzione generale (crescita o declino) su periodi estesi;

●        **Stagionalità**: evidenzia le fluttuazioni periodiche che si ripetono regolarmente in determinati intervalli di tempo (es. variazioni mensili o settimanali) e che sono legate a fattori stagionali prevedibili;

●        **Componente residua** (rumore): include le variazioni che non possono essere spiegate né dalla tendenza né dalla stagionalità, rappresentando i movimenti casuali o irregolari della serie.

Dalla scomposizione di una serie storica di un servizio di incasso, l'algoritmo permette di analizzare l'influenza dei fattori stagionali, calcolando un indice di stagionalità che aiuta a capire quanto le variazioni siano legate a ricorrenze prevedibili.

L'indice di stagionalità è disponibile in due diverse versioni:

●        **Indice di Stagionalità Coppia Servizio-Ente**: misura la stagionalità delle transazioni legate a un singolo servizio e al suo specifico ente riscossore, valutando l’andamento stagionale per quella particolare combinazione di servizio ed ente.

●      **Indice di Stagionalità Servizio**: misura la stagionalità complessiva di un servizio, considerando tutte le transazioni associate agli enti riscossori. È calcolato come una media ponderata degli indici di stagionalità delle singole coppie Servizio-Ente, dove il peso è dato dal numero di transazioni effettuate per quel servizio da ciascun ente.

L'indice di stagionalità può variare da **0** (assenza di stagionalità) a **1** (stagionalità molto pronunciata) e viene suddiviso in tre fasce con le seguenti soglie:

●       **Basso (<0,4)**: il servizio oppure la coppia servizio-ente presenta una stagionalità bassa;

●       **Medio (0,4-0,7):** il servizio oppure la coppia servizio-ente presenta una stagionalità media;

●       **Alto (>0,7):** il servizio oppure la coppia servizio-ente presenta una stagionalità alta.

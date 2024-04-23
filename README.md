# Aplikacja do wyszukiwania repozytoriów w React

### OPIS

Aplikacja pozwala użytkownikom przeszukiwać repozytoria na platformie GitHub, wpisująć nazwę autora na gitHubie. Po znalezieniu interesującego repozytorium, użytkownik może zobaczyć jego szczegóły, takie jak właściciel, opis i forki.

Dodatkowo, istnieje możliwość polubienia repozytorium, które zostaje zapisane lokalnie i może być później łatwo odnalezione.W podstronie zapisanych repozytoriów możemy wejść w link danego repo oraz usunąć z listy repo.

Aplikacja ma jasny przejrzysty design w tym podstronę about, w której pokrótce opisana jest funkcjonalność.Po wyszukaniu interesujących nas repozytoriów zaimplementowany jest spinner tak aby użytkownik wiedział ze dane się ładują.

Korzystałam z technologii React przy użyciu stylów bootstrap. Dodatkowo aplikacja jest responsywna i intuicyjna.

### TRUDNOŚCI

Tworząc tą aplikację trudność sprawiało mi dopasowanie klas bootstrapowych oraz styli aby wszystko było spójne i i wypozycjowane. Problemem jakie napotkałam było np menu ponieważ początkowo nie chciało ono dodawać hamburgera przy mniejszej szerokości ekranu dlatego musiałam dodać manualnie otwieranie hamburgera.

Kolejną przeszkodą przy tworzeniu tej aplikacji było dodanie linku do listy ulubionych repozytorów, ponieważ chciałam dodać link do elementu w którym był btn do usuwania elementu dlatego pojawił się problem, że po kliknięciu btn remove przekierowywało z linka. Rozwiązałam ten problem dodając btn open, który przekierowuje do linka.

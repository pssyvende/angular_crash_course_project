# Angular Crash Course

Właśnie przeglądasz zadanie, będące zwieńczeniem wykładu pt. "Wprowadzenie do Angulara".

Zadanie polega na uzupełnieniu kodu aplikacji przedstawionymi na wykładzie elementami frameworka z zakresu komunikacji międzykomponentowej i Dependency Injection.
Aplikacja jest fragmentem sklepu internetowego, a komunikacja przebiegać będzie od menu z produktami aż po elementy list produktów, które można dodać do koszyka.


## Do wykonania:

1. W szablonie aplikacji (AppComponent) dodaj do lewego kontenera boczną navigację (SidenavComponent) używając odpowiedniego dla komponentu selektora
2. W szablonie bocznej nawigacji (SidenavComponent) dla każdego elementu listy kategorii (categories) wyświetl nazwę kategorii
3. W szablonie produktów (ItemsComponent) sprawdź, czy lista produktów jest dostępna (isActive) - wyświetl listę produktów, w przeciwnym razie wyświetl parafraf z odpowiednią informacją
4. W szablonie produktu (ItemComponent) zareaguj na kliknięcie (click) w element listy. Połącz z tym wydarzeniem dostępną metodę (onSelectItem). Pamiętaj o podaniu jako argumentu metody identyfikatora produktu!
5. W wykorzystanej wcześniej metodzie (onSelectItem) wyemituj nowe wydarzenie. Wydarzenie powinno zawierać informację o identyfikatorze produktu.
6. Wyemitowane wydarzenie powinno zostać odebrane w komponencie rodzica (ItemsComponent). Po znalezieniu produktu z odpowiadającym przesłanemu numerowi identyfikatorem, wykorzystaj dostępny serwis (ItemsService) i dodaj produkt do koszyka (addToCart)
7. W konstruktorze serwisu (ItemsService) narzuć utworzenie serwisu obsługującego koszyk (CartService). W metodzie odpowiedzialnej za dodanie produktu do koszyka wykorzystaj wstrzyknięty serwis i dodaj produkt do koszyka (addToCart)

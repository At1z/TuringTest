# AreYouHuman?
![image](https://github.com/user-attachments/assets/e6096644-4141-4afc-98fb-88edaf4f668a)

An interactive web application where users participate in a live Turing test. Chat with someone for two minutes and decide: was it a human or an AI? 🤔💬🧠 You have a 50% chance of connecting with a real person and a 50% chance of talking to AI. Do you think you can tell the difference?
___

## Tech Stack ⚙️
- **Frontend:** React  
- **Backend:** JavaScript (Node.js)  
- **AI:** OpenAI ChatGPT, Grok  
- **Infrastructure:** AWS EC2  
- **WebSockets:** Real-time communication  
___
# App Screens:
### About Turing Test
![image](https://github.com/user-attachments/assets/d851a97d-6f7a-4f7b-8a0b-8015d31709fb)

### Waiting for chat to open
![image](https://github.com/user-attachments/assets/408e98e9-07b7-4f66-acb6-37a1924f37a6)

### Seting nick
![image](https://github.com/user-attachments/assets/fc126601-2c99-42cd-9271-293beff17c7c)

### Chat example
![image](https://github.com/user-attachments/assets/15d84bb1-e9e6-451f-b6c9-5166b9cfd91d)

# Creating Process

## Abstrakt

Platforma testu Turinga to system komunikacyjny wykorzystujący **React** i **API OpenAI** do umożliwienia równoległych konwersacji między użytkownikami a modelami AI zaprojektowanymi do naśladowania ludzkiego zachowania.  

## Główne cechy systemu:

- **6** kanałów konwersacyjnych(3 z samymi ludźmi, 3 z AI)
- **12 uczestników** (*9 ludzi, 3 boty AI*)  
- Losowy przydział rozmówców  
- Predefiniowane tematy rozmów  
- Sesje trwające **2-5 minuty**  

Wstępne testy wykazały **94.1% skuteczność** w rozpoznawaniu AI przez użytkowników, co skłoniło do wprowadzenia ulepszeń zwiększających naturalność interakcji, takich jak:  

- Dynamiczne opóźnienia odpowiedzi  
- Symulacja błędów typograficznych
- Lepiej przygotowany prompt  

Po wdrożeniu tych zmian platforma osiągnęła znaczącą poprawę — w pierwszej turze testów **66.7% uczestników** nie było w stanie odróżnić rozmowy z AI od rozmowy z człowiekiem.

Po przejściu na model **Groq** w teście na neutralnej grupie w pierwszej turze u **55.6% uczestników** nie było w stanie odróżnić rozmowy z AI od rozmowy z człowiekiem. W drugiej turze było to już **33.3% uczestników**

Finalne testy przeprowadzone na platformie **Discord** na studentach 1 roku zakończyły się pełnym sukcesem – **100% uczestników** nie rozpoznało, że ich rozmówcą jest AI.

# Opis aplikacji

Aplikacja to platforma komunikacyjna wykorzystująca frontend w React oraz backend do obsługi zapytań do API OpenAI. Jej główne cechy to rozmowy prowadzone między prawdziwymi użytkownikami a botem symulującym realnego uczestnika dyskusji.

## 1. Struktura rozmów

Aplikacja obsługuje **5 oddzielnych kanałów konwersacyjnych**.\
Każdy kanał jest ma losowo przypisanych dwóch uczestników – w większości kanałów są to prawdziwi użytkownicy, jednak dwa kanały prowadzone są przez bota opartego na API OpenAI.

* W sumie uczestnikami jest **10 osób**, z czego:
  * **8 użytkowników** to osoby realne.
  * **2 uczestników** to boty, z których odpowiedzi pochodzą z API OpenAI.
  * **Dwa boty nie mogą dołączyć do tego samego czatu**

## 2. Zastosowanie backendu i API OpenAI

Backend aplikacji ma za zadanie przyjmowanie i obsługę żądań do API OpenAI oraz przetwarzanie odpowiedzi.\
OpenAI API działa tu jako "asystent" w dyskusjach, udzielając odpowiedzi symulujących prawdziwego człowieka.\
Backend zapewnia również synchronizację między frontendem (React) a API, tak by odpowiedzi bota były spójne z rozmowami.

## 3. Udawanie ludzkiego rozmówcy przez API OpenAI

Aby odpowiedzi bota były jak najbardziej realistyczne, zastosowane są poniższe techniki:

* **Symulacja opóźnienia w odpowiedziach:** odpowiedzi pojawiają się z naturalnym opóźnieniem, aby odwzorować czas reakcji przeciętnej osoby.
* **Personalizacja odpowiedzi:** przed każdą wiadomością wysyłany jest do API prompt, który przypomina botowi, aby udawał studenta o niskim lub średnim poziomie wiedzy.
* **Wybór tematów przed rozpoczęciem konwersacji:** użytkownicy mogą wcześniej ustalać temat rozmowy, a bot dostosowuje swoje odpowiedzi, zachowując niski poziom wiedzy.

## 4. Implementacja frontendu

**Frontend w React** zapewni intuicyjny interfejs użytkownika oraz dynamiczne wyświetlanie konwersacji.\
Wyświetlanie odpowiedzi w czasie rzeczywistym z symulacją opóźnienia pomaga uzyskać realistyczny efekt i wrażenie, że wszystkie rozmowy są prowadzone przez prawdziwych ludzi.\
Komponenty frontendowe będą zoptymalizowane pod kątem łatwego przesyłania wiadomości i interakcji użytkownika z botem.

## 5. Hosting i skalowalność

Aplikacja będzie hostowana w sposób zapewniający stabilność oraz dostępność zarówno dla frontendu, jak i backendu.\
Zarówno React, jak i backend komunikujący się z API OpenAI będą dostępne zdalnie, co pozwoli użytkownikom łatwo łączyć się z aplikacją.\
Aplikacja będzię zaprojektowana tak, by można ją skalować w zależności od liczby użytkowników oraz ilości jednoczesnych połączeń z OpenAI API.

![image](uploads/71827bdf55dbb1e5986a6cdc6a1c5e18/image.png)

# Analiza wykresu wyników testu Turinga

Ten wykres przedstawia wyniki testu Turinga dla różnych „świadków” – w tym ludzi oraz modeli językowych AI takich jak ELIZA, GPT-3.5 i GPT-4 – mierząc ich zdolność do przejścia testu Turinga. Test ten sprawdza, czy AI może być rozpoznana jako maszyna przez ludzkich sędziów, czy też jest mylona z człowiekiem.

## Opis osi

* **Oś pionowa (Witness Type)**: Zawiera różne typy „świadków”:
  1. **Human** (człowiek)
  2. **GPT-4**
  3. **GPT-3.5**
  4. **ELIZA** (bardzo wczesny chatbot z lat 60.)
* **Oś pozioma (Turing Test Pass Rate)**: Wskaźnik przechodzenia testu Turinga. Wyższa wartość oznacza większą zdolność bycia pomylonym z człowiekiem.

## Opis wyników

* **Humani** mają najwyższą wartość wskaźnika przechodzenia testu Turinga, co jest zgodne z intuicją, ponieważ ludzie są rozpoznawani jako ludzie.
* **GPT-4** ma zbliżoną wartość do ludzi, co sugeruje, że ten model często jest mylony z człowiekiem i ma wysoką skuteczność przechodzenia testu.
* **GPT-3.5** jest mniej skuteczny od GPT-4, ale ma lepszy wynik niż ELIZA, co oznacza, że nie jest tak dobrze mylony z człowiekiem jak GPT-4, lecz osiąga lepsze wyniki niż starsze modele.
* **ELIZA** ma najniższy wskaźnik przechodzenia testu Turinga, co pokazuje, że jest łatwo rozpoznawalna jako maszyna.

Średnia wartość (kropki na poziomych czarnych liniach) dla każdego świadka pokazuje jego przeciętny wynik, a szerokość rozkładów pokazuje zmienność wyników dla każdej z grup.

### Na czym polegał ten test?

![image](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/8d779ad136bbbfbbfb0e57fcd70f7ca7/image.png)

Test polega na tym, że człowiek (sędzia) prowadzi rozmowę w formie tekstowej z dwiema stronami – jedną maszyną, drugą człowiekiem. Jeśli sędzia nie jest w stanie rozpoznać, która z nich jest maszyną, to maszyna uznawana jest za przechodzącą test. Celem testu nie jest jednak ocenianie, czy maszyna osiągnęła poziom inteligencji przeciętnego człowieka, ale raczej sprawdzenie, czy może naśladować ludzkie zachowanie w rozmowie.

Test Turinga nie jest idealny, dlatego powstały różne warianty, takie jak CAPTCHA, które służą do rozróżniania ludzi od maszyn w kontekście internetowym. Feigenbaum i Ebert to z kolei nazwiska związane z innymi podejściami do sztucznej inteligencji, a nie bezpośrednimi rozszerzeniami testu Turinga.

### Wcześniejsze podejścia do testu Turinga:

![image](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/8f6e5441138b105bd3e530ba873c05fa/image.png)

* **ELIZA (1966)** – Pierwsze próby symulacji dialogu. ELIZA, stworzona przez Josepha Weizenbauma, wykorzystywała dopasowanie słów kluczowych i powtarzanie pytań, aby naśladować psychoterapeutę. Chociaż odpowiedzi nie miały głębszego znaczenia, niektórzy użytkownicy uwierzyli, że rozmawiają z „myślącą” maszyną. Był to pierwszy przypadek, kiedy AI zaczęła imitować ludzki sposób komunikacji, mimo że oparcie na prostym zbiorze reguł miało swoje ograniczenia.
* **Parry (1972)** – Symulacja osób z zaburzeniami. Stworzony przez Kennetha Colby'ego, Parry miał imitować osobę z paranoją, stosując heurystyki i wzorce odpowiedzi. Osiągnął realizm na tyle wysoki, że niektórzy specjaliści uznali jego wypowiedzi za nieodróżnialne od osób chorych. Pokazało to, że nawet proste programy mogą naśladować pewne aspekty ludzkiej psychiki, gdy koncentrują się na ograniczonej tematyce.

![image](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/8355fa0458830b5758c016a4d6653592/image.png)

* **Loebner Prize (od 1991)** – Konkurs na realistyczne chatboty. Inspirowany testem Turinga konkurs Loebnera zachęcał twórców do rozwoju zaawansowanych chatbotów, jak A.L.I.C.E., które opierały się na bazach wiedzy i regułach językowych. Choć chatboty te były coraz bardziej zaawansowane, ich zrozumienie języka nadal było ograniczone, co sprawiało, że były bliższe manipulacji tekstem niż rzeczywistej inteligencji.

![image](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/7d879399c70c11c7f4ace8f5bccf18f2/image.png)

* **Cleverbot (1997)** – Cleverbot, stworzony przez Rollo Carpentera, uczył się na podstawie milionów interakcji z ludźmi. Dzięki temu próbował prowadzić realistyczne rozmowy i podejść do testu Turinga. W przeciwieństwie do wcześniejszych botów Cleverbot nie korzystał ze stałych wzorców, lecz adaptował swoje odpowiedzi, bazując na obszernej bazie dialogów, co przybliżało go do testu Turinga.

![image](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/c8e57d173a286fc35a44fae5160a4427/image.png)

* **Eugene Goostman (2014)** – Próba „przejścia” testu Turinga. Stworzony przez Vladimira Veselova i Eugene'a Demchenko program Eugene Goostman udawał 13-letniego chłopca z Ukrainy, co pozwoliło mu zamaskować swoje braki w języku i wiedzy ogólnej. W 2014 roku przekonał 33% sędziów, że jest człowiekiem, co pokazuje, że odpowiednia stylizacja może pomóc AI w bardziej realistycznym naśladowaniu rozmowy.
* **Modele językowe oparte na deep learningu – GPT-3 i GPT-4 (2020, 2023)** – Ogromny skok jakościowy. Modele te, oparte na architekturze transformera, umożliwiają AI prowadzenie złożonych i spójnych rozmów, choć nadal bez pełnego zrozumienia kontekstu. Dzięki miliardom danych tekstowych, takie modele jak GPT-3 i GPT-4 zbliżyły AI do realistycznego naśladowania komunikacji, dając użytkownikom poczucie rozmowy z prawdziwą osobą.

### Co dalej?

![image](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/be505b9b374e92aaefcd99021b1a0df2/image.png) **AGI i hybrydowe podejścia do rozumienia kontekstu** – Najnowsze koncepcje mają na celu przezwyciężenie ograniczeń klasycznych modeli językowych, obejmując:

1. **Modele multimodalne i wielofunkcyjne**
   * GPT-4 Turbo i Gemini od OpenAI i Google DeepMind analizują tekst, obraz, a nawet wideo jednocześnie, co wspiera bardziej kompleksowe zrozumienie.
2. **Pamięć długoterminowa i rozumienie kontekstowe**
   * Modele, jak Claude od Anthropic, wykorzystują pamięć długoterminową do lepszego kontekstowego zrozumienia dłuższych konwersacji.
3. **Hybrydowe podejścia: przetwarzanie symboliczne i sieci neuronowe**
   * Połączenie symbolicznej AI z sieciami neuronowymi, jak w Socratic Models DeepMind, integruje logikę z rozumowaniem, zwiększając zdolność AI do rozwiązywania problemów.
4. **Reinforcement Learning with Human Feedback (RLHF)**
   * AI uczy się dzięki ludzkiej ocenie odpowiedzi, co poprawia jej reakcje w złożonych sytuacjach społecznych.
5. **Meta-uczenie i adaptacyjne modele AI**
   * Modele, jak EfficientZero DeepMind, adaptują się do nowych zadań, co zwiększa elastyczność AI.
6. **Samoregulujące modele AI**
   * Constitutional AI od Anthropica samodzielnie ocenia i koryguje swoje odpowiedzi zgodnie z zasadami etycznymi, zwiększając odpowiedzialność modelu.

Rozwój w tych obszarach może przybliżyć AI do ogólnej inteligencji (AGI), czyniąc ją bardziej świadomą kontekstu i etycznych norm w swoich interakcjach.

Źródła: https://www.gigaserwer.pl/b11,test-turinga---czym-jest-i-na-czym-polega- https://www.youtube.com/watch?v=KfdVbcx4yok https://pl.wikipedia.org/wiki/Test_Turinga#Próby_przejścia_testu

## Wygląd Aplikacji

Poniżej znajdują się zrzuty ekranu przedstawiające aktualny wygląd aplikacji:

![Widok aplikacji 1](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/c9d2e54e4fc3c737da6afa4afea8e094/image.png){width="1410" height="710"} ![Widok aplikacji 2](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/6516dc9f1dfb6f5ba562c8c3eb8b5449/image.png){width="1410" height="710"} ![Widok aplikacji 3](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/4e5909251d74343477b166f4c1e789d5/image.png){width="1410" height="710"} ![Widok aplikacji 4](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/f97768e08b113d4178b32f4b5157d6f7/image.png){width="1410" height="710"} ![Widok aplikacji 5](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/49a535101fd557cd7b522dc271bc9f24/image.png){width="1410" height="710"}

### Repozytorium projektu dostępne jest na [GitHubie](https://github.com/SzupanBurliga/TuringTest).

## Harmonogram Prac

* **Backend:** zakończenie planowane na 20.11
* **Połączenie Frontend-Backend:** zakończenie planowane na 27.11
* **Hostowanie aplikacji:** zakończenie planowane na 04.12

# Historia Testu Turinga: Początki Sztucznej Inteligencji

![image](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/8e17e4b9246250e79e012de3ab82f474/image.png)

Alan Turing przedstawił swoją koncepcję testu w czasach, gdy komputery dopiero zaczynały się rozwijać i były postrzegane bardziej jako narzędzia obliczeniowe niż coś, co może przypominać inteligencję. W latach 40. i 50. XX wieku nie było jeszcze mowy o sztucznej inteligencji w dzisiejszym rozumieniu tego terminu, jednak Turing dostrzegał potencjał maszyn do symulowania procesów myślowych.

Turing pracował nad testem w okresie powojennym, kiedy prace nad technologiami cyfrowymi nabrały tempa, szczególnie w Wielkiej Brytanii i Stanach Zjednoczonych. Doświadczenia Turinga jako kryptologa w czasie II wojny światowej miały kluczowy wpływ na jego wizję maszyn – rozumiał on, że odpowiednio zaprojektowana maszyna może wykonywać złożone zadania i być może także naśladować niektóre aspekty ludzkiego myślenia. Pomysły te były rewolucyjne i odbiegały od ówczesnego pojmowania maszyn jako wyłącznie automatycznych urządzeń przetwarzających liczby.

W 1950 roku Turing opublikował swój artykuł _"Computing Machinery and Intelligence"_ w czasopiśmie _Mind_, który zapoczątkował szeroką dyskusję na temat możliwości inteligentnych maszyn. W artykule przedstawił swoje pytanie „Czy maszyny mogą myśleć?” oraz szczegóły testu, który miał być próbą odpowiedzi na to pytanie. Test Turinga szybko zdobył popularność i wywołał debatę w świecie naukowym i filozoficznym. W kolejnych dekadach był inspiracją dla badaczy sztucznej inteligencji i filozofów umysłu.

W miarę rozwoju technologii oraz komputerów pojawiły się nowe wersje i interpretacje testu Turinga. Równocześnie krytycy, jak John Searle, proponowali alternatywne eksperymenty myślowe, jak chiński pokój, by pokazać, że naśladowanie ludzkich reakcji językowych niekoniecznie oznacza prawdziwe „myślenie”. Dziś test Turinga jest traktowany jako historyczny punkt wyjścia i fundament filozoficzny w badaniach nad sztuczną inteligencją, choć jego oryginalna forma stała się mniej praktyczna w ocenie nowoczesnych systemów AI.

# Scenariusz rozmowy w aplikacji do testu Turinga

## Przygotowanie

### 1. Losowanie osoby do rozmowy

* Aplikacja losuje, czy użytkownik będzie rozmawiał z AI, czy z człowiekiem.

### 2. Losowanie tematów

* Aplikacja losuje temat spośród 50 dostępnych.

---

## Przebieg rozmowy:

### 1. Zasady

* Rozmowa trwa **2 minuty**.
* Tematy rozmowy są związane z wylosowanymi kategoriami.
* Po zakończeniu rozmowy użytkownik musi zagłosować, czy rozmawiał z AI, czy z człowiekiem.

### 2. Początek rozmowy

* Jeden wylosowany rozmówca (AI/człowiek) zaczyna od pytania otwierającego związanego wylosowanym tematem.

### 3. Przebieg rozmowy

* Rozmowa toczy się w **naturalnym tonie** przez 2 minuty, trzymając się wybranych tematów.
* Aplikacja wyświetla **czasomierz** z odliczaniem.
* Po upływie 2 minut rozmowa kończy się automatycznie.

---

## Po rozmowie

### 1. Decyzja użytkownika

* Użytkownik wybiera, czy jego rozmówca to AI, czy człowiek.

### 2. Podsumowanie

* Aplikacja informuje, czy użytkownik miał rację.

---

## Uwagi techniczne

* **Rozmówca (AI/człowiek)**:
  * Prowadzi rozmowę zgodnie z naturalnym językiem.
  * **AI**: Wykorzystuje zaawansowaną analizę kontekstu, aby unikać sztucznie brzmiących odpowiedzi.
  * **Człowiek** : Stara się naśladować sposób wypowiedzi AI.

---

## Przykładowa baza 50 tematów do rozmów

 1. Hobbies
 2. Favorite animals
 3. Favorite food
 4. Favorite movies
 5. Dream travel destinations
 6. Favorite books
 7. Music you listen to
 8. Favorite color
 9. Sports you enjoy
10. World cuisines
11. Weekend activities
12. Childhood memories
13. Favorite desserts
14. Ideal vacation spot
15. Favorite holidays or celebrations
16. Daily routines
17. Family traditions
18. Favorite drinks
19. Fun places to visit
20. Favorite weather
21. Future dreams or goals
22. School or work experiences
23. Favorite TV shows
24. Favorite games or pastimes
25. Pets you’ve had or want
26. Your dream home
27. Funny or embarrassing moments
28. Favorite apps or websites
29. Your bucket list
30. New skills you’d like to learn
31. Favorite childhood toys
32. Books or movies that inspired you
33. A place you’d like to live
34. What makes you happy
35. Favorite type of exercise
36. Memorable travel experiences
37. Things you collect or would like to collect
38. Favorite ice cream flavors
39. Favorite outdoor activities
40. A special gift you’ve received
41. Favorite clothes or fashion styles
42. A talent or skill you have
43. Best day of your life
44. Favorite restaurant or café
45. Your dream car
46. Things you enjoy doing with friends
47. How you relax after a long day
48. Favorite childhood TV shows
49. Your favorite holiday destination
50. A language you’d like to learn

# Backend:

![image](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/3ed66a563bc2e9c5cb270d5c3c10781d/image.png){width="1440" height="810"} ![image](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/0a613c9caf99bcc7fc60fca68c1236d6/image.png){width="1440" height="810"}

# Przydzielanie losowych pokoi z użytkownikiem lub z modelem (szanse 50/50)

![image](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/431469aa12ad37c55cb3332318074181/image.png){width="499" height="93"}

## Rozmowa z modelem - grok-beta

![image](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/9764cdf350d6bf4c41b10f9d258637eb/image.png){width="967" height="649"}

# Lista pokoi, które są przydzielane (do połowy pokoi jest przypisany model)

![image](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/5fcd759c9500083066b567dad6220570/image.png){width="317" height="133"} ![image](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/a115c2ab6db9a39bce8124be1244ea6d/image.png){width="339" height="50"}

Losowanie nicku dla modelu oraz czasu jak szybko odpowiada ![image](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/d7162484cbda3a9189be5303e69bca34/image.png){width="477" height="52"}

## Przetłumaczona aplikacja

![image](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/7d3258e7844ae78142a7ce0b2e377f90/image.png){width="917" height="357"} ![image](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/706e95ad8fc3a1d9da33b3068ce11b24/image.png){width="1057" height="509"} ![image](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/7372237e4f9f64ef0f140f5d4c2fc4d6/image.png){width="1290" height="679"}

## Dodany panel logowania

![image](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/bcdc26bc1b8d686016fabf35ff055d8f/image.png){width="547" height="444"}

## Postawiony hosting na AWS

![obraz](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/d05604f5080a38bf34feb8d844421016/obraz.png)

![image](uploads/4e1f689a73b7808f362e7b854071eab7/image.png)

![image](uploads/fe892b17844006b693262fe158b9fbf1/image.png)

![image](uploads/0b8fe83f0983de91e76790e15565a66d/image.png)

## Dodana poczekalnia, która wpuszcza do testu tylko o wyznaczonej godzinie

![image](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/d80e59ba271f13733944062a2ef1d635/image.png){width="522" height="349"}

### po upływie minuty od wyznaczonej godziny, poczekalnia nie pozwala dołączyć

![image](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/ddf09ed657bb9a11875d6544379f37c0/image.png){width="551" height="343"}

## Wyniki pierwszych testów:

![image](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/8de875a79ec7cc433790e132e8ed80b9/image.png){width="399" height="252"}

**Romper:** Łatwo rozpoznać AI: bardzo szybko odpowiada, używa w pełni poprawnej gramatyki i interpunkcji, zadaje bardzo generyczne pytania, a podczas braku uzyskania odpowiedzi powtarza je w kółko w lekko zmienionej formie.

**Zryty:** chat - odpisuje za szybko na bezsensowne wiadomości. Człowiek - jak nie udaje bota to pierdoli głupoty.

**Jarek Jaworek:** co chwilę mnie pytał czy mam zwierzę, mimo że mu 4 razy powiedziałem, że nie mam XD

[**zapjur:**](https://github.com/zapjur) 2 razy AI, po tym jak idealnie pisał w krótkim czasie.

**Martyna:** Dałam się oszukać, ponieważ model napisał do mnie wiadomość "siema" i myślałam, że to człowiek, który podaje się za AI.

**Adi:** Trafił mi się czat z ludźmi, więc nie miałem możliwości sprawdzić, czy rozmawiam z chatem.

**Szymon:** Trafił mi się czat z ludźmi, ale mogłem rozpoznać, że to człowiek, ponieważ odpisywał po długim czasie oraz z literówkami.

**Juro:** Poznałem, że piszę z człowiekiem, po tym jak skrytykował mój wybór ulubionego albumu Eminema. AI raczej jest miłe.

**Mumin:** Rozmowa z botem na początku nie była zauważalna, jednak po wymianie paru zdań dało się zobaczyć, iż za szybko odpisuje złożone zdania i bardzo trzyma się jednego tematu, jest mało elastyczny.

# Podsumowanie

Skuteczność w rozpoznawaniu modelu AI wyniosła **94.1%**. Uczestnicy wskazali kilka kluczowych cech, które ułatwiają identyfikację AI:

* szybka i nieprzerwana odpowiedź,
* perfekcyjna gramatyka,
* schematyczne pytania,
* brak elastyczności w rozmowie,
* powtarzalność,
* unikanie emocjonalnych lub krytycznych odpowiedzi.

### Powód

AI działa w oparciu o algorytmy zoptymalizowane pod kątem szybkości, poprawności językowej i logiczności odpowiedzi, co sprawia, że jego zachowanie jest przewidywalne i różni się od ludzkiego. Brakuje mu:

* naturalnych przerw w odpowiedziach,
* literówek,
* emocjonalnych reakcji,
* spontaniczności.

### Co zmienić?

1. **Zwolnić tempo odpowiedzi** – wprowadzić losowe opóźnienia, symulując namysł.
2. **Dodawać niedoskonałości** – sporadyczne literówki, drobne błędy gramatyczne lub stylistyczne.
3. **Zwiększyć elastyczność** – lepiej dostosowywać odpowiedzi do kontekstu i zmieniać temat w sposób bardziej naturalny.
4. **Symulować emocje** – wprowadzić czasem krytykę, żart lub mniej formalny ton.
5. **Unikać powtarzalności** – nie zadawać tych samych pytań wielokrotnie, zamiast tego próbować innych podejść.
6. **Skrócić długość odpowiedzi** – ograniczyć długość wypowiedzi, aby bardziej przypominały realne, ludzkie rozmowy.

![image](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/a8652f02cf6d501c715ea65d5caa3867/image.png){width="480" height="126"}

 Do odpowiedzi prócz losowego opóźnienia dodane jest opóźnienie generowane na podstawie ilości słów wygenerowanych przez model. Średni czas moich naturalnych odpowiedzi w trakcie rozmowy zajmuję \~10/15 sekund więc zaimplementowałem podobną zależność w naszej aplikacji.

![image](uploads/9750a7e56478d0a70a0976708cb266ed/image.png)
![image](uploads/d454eff9bd40de0dfebe07bdbb57a43e/image.png)
![image](uploads/fb9f2518bf11674f8a683e24bae6c7a8/image.png)

### Usprawnienia wprowadzone w działanie

Udało nam się poprawić następujące elementy:

1. **Zwolnienie tempa odpowiedzi**\
   Wprowadziliśmy opóźnienia, które symulują chwilę namysłu przed udzieleniem odpowiedzi.
2. **Dodawanie niedoskonałości**\
   Sporadycznie pojawiają się literówki, drobne błędy gramatyczne lub stylistyczne, które sprawiają, że odpowiedzi są bardziej naturalne.
3. **Zwiększenie elastyczności**\
   Odpowiedzi są teraz lepiej dostosowywane do kontekstu, a zmiana tematu następuje w sposób bardziej płynny i naturalny.
4. **Unikanie powtarzalności**\
   Zredukowaliśmy ilość powtarzalnych pytań. Zamiast tego stosujemy różne podejścia w rozmowie.
5. **Skrócenie długości odpowiedzi**\
   Odpowiedzi zostały skrócone, aby bardziej przypominały styl realnych, ludzkich rozmów.

### Podsumowanie testów AI

#### Testy przed Nowym Rokiem

28 grudnia przeprowadziliśmy test na innej grupie testowej, składającej się z naszych dziewczyn i znajomych. Ich zadaniem było podszywanie się pod AI, nie wiedząc, że rozmawiają z prawdziwym AI.

1. **Pierwszy test:**
   * Wynik: 5 z 9 osób nie rozpoznało, czy rozmawia z AI, czy człowiekiem.
   * Ocena: Test przeszedł bardzo pomyślnie.
2. **Drugi test:**
   * Wynik: Po zrozumieniu zasad testu tylko 3 z 9 osób nie rozpoznały, z kim rozmawiają.
   * Ocena: Wynik spadł, ale nadal jest pozytywny.

#### Zmiana po Nowym Roku

Po Nowym Roku usługa AI, którą wykorzystywaliśmy, stała się droższa i mniej opłacalna. W związku z tym przenieśliśmy się na platformę: [Groq Console](https://console.groq.com/docs/overview). Zwiększyliśmy również długość rozmowy do 4 minut.

### Wykorzystywany przez nas prompt

![image](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/2323a292f7979cd1fa5f9b92773b9c5a/image.png){width="1035" height="512"}

# Wynik Testu Turinga

## Test 1

**Data:** 28.12.2024 15:22:39\
**Typ rozmowy:** AI Bot\
**Głos użytkownika:** AI Bot\
**Wynik:** Poprawny

* user2 to bot

### Historia rozmowy:

* **user1:** znasz sie na samochodach
* **user2:** troche ta co
* **user1:** chce kupic auto do 30k
* **user2:** co bralea pod uwage
* **user1:** moze jakiegos golfa
* **user2:** dobry wybor ale uwazaj na przebieg
* **user1:** na co jeszcze
* **user2:** rdza w progach
* **user1:** dzieki za rady
* **user2:** nie ma sprawy

---

## Test 2

**Data:** 28.12.2024 15:32:36\
**Typ rozmowy:** AI Bot\
**Głos użytkownika:** Human\
**Wynik:** Niepoprawny

* XYZ to bot

### Historia rozmowy:

* **XYZ:** siema
* **Martyna:** hej
* **XYZ:** co tam porabiasz
* **Martyna:** nic takiego siedze z kotem
* **XYZ:** jakiego masz kota?
* **Martyna:** rudego nazywa sie harry
* **XYZ:** fajne imie lubi sie przytulac?
* **Martyna:** zalezy, dzis spi caly dzien
* **XYZ:** jak moj brat XD
* **Martyna:** XD
* **XYZ:** no prawie, nic tez nie robi
* **Martyna:** a co ty robisz
* **XYZ:** gram w fifke
* **Martyna:** ile przegrales
* **XYZ:** ej wygralem ostatni mecz
* **Martyna:** przypadek pewnie
* **XYZ:** nie prawda jakbys grala to bys przegrala
* **Martyna:** mozliwe, nie gram w to XD
* **XYZ:** lepiej zagraj nauczysz się kiedys

---

## Test 3

**Data:** 28.12.2024 15:32:43\
**Typ rozmowy:** AI Bot\
**Głos użytkownika:** Human\
**Wynik:** Niepoprawny

* dsadas to boy

### Historia rozmowy:

* **ktoś:** hejka co tam
* **dsadas:** spoko a u ciebie
* **ktoś:** tez spoko, wlasnie jem pizze
* **dsadas:** jaka pizza
* **ktoś:** z serem i szynka a ty co jadles
* **dsadas:** kebaba, troche ostry byl
* **ktoś:** ooo ostrego bym zjadl
* **dsadas:** zamow sobie
* **ktoś:** moze jutro
* **dsadas:** a co dzis robisz
* **ktoś:** nic chyba obejrze cos na yt
* **dsadas:** co ogladałeś ostatnio
* **ktoś:** jakis filmik o kosmosie
* **dsadas:** fajne to bylo
* **ktoś:** spoko nawet
* **dsadas:** ja ogladalem wczoraj jakies filmy na yt
* **ktoś:** o czym byly
* **dsadas:** typ co ludzi trolluje w sklepie
* **ktoś:** troche nuda xd
* **dsadas:** mi się tam pdooba

![image](uploads/d2517a0b0cd3cd395334c7267375f779/image.png)

# Analiza Testu Turing'a

## Historia Rozmów

### Rozmowa 1

### Bot: czatdżitipi

paweł: jakie ciekawe miejsce ostatnio odwiedziłes? czatdżitipi: ostatnio bylem na berlinskim street food festiwalu bylo smakowicie xD a ty gdzie ostatnio zawedrowales paweł: ja byłem na wycieczce w górach czatdżitipi: wow gory to zawsze dobry pomysl na relaks jakies widoki szczegolnie ci zapadly w pamiec paweł: na pewno zapierającym dech w piersiach widokiem był wschód słonca na rysach czatdżitipi: ale zaluje ze nie widzialem kiedys musze sie wybrac na pewno bylo epicko co jeszcze robiliscie oprucz tego wschodu

### Rozmowa 2

### Bot: Paweł

Paweł: siema voord: siema Paweł: siemanko co tam u ciebie slychac voord: bardzo dobrze, czy jest coś w czym mogę ci pomóc Paweł: spoko to moze ty bys potrzebowal jakiejs pomocy albo chcesz pogadac o czyms fajnym voord: jaki jest twój ulubiony napój, albo jakiś który mógłbyś polecić? Paweł: średnio sie tym interesije ale moze jakies kolorowe drinki z palemka?✌️ voord: a coś dla osoby nieletniej? Paweł: moze jakaś wypasiona lemoniada z owocami co ty na to voord: lubie też pikolo, najlepsze truskawkowe

### Rozmowa 3

### Bot: zryty

pmc: Moja ulubiona gra to Carcassonne zryty: carcassonne jest spoko lubisz jeszcze jakies planszowki? pmc: Monopoly też jest spoko, ale jak dla mnie zbyt losowe zryty: monopoly faktycznie czasem jak loteria xD jakie inne gry lubisz? pmc: lubię jeszcze kilka, a ty? zryty: ja tez lubie kilka ale srednio sie tym interesuje xD jakie inne rozrywki cie krecą? pmc: Ciężkie pytanie XD zryty: spoko nie musimy o tym teraz gadac o czym innym pogadamy?

### Rozmowa 4

### Bot: michał

1234: Siema michał: no heja co tam u ciebie słychać 1234: A wszystko w jak najlepszym porządku michał: spoko to co tam ciekwego dzis robiles 1234: Nudy, nauka do kolokwiów michał: rozumiem jakie tam kolokwia cie czekaja 1234: Statystyka i programowanie, a u Ciebie co tam? michał: ja tam planuje dzisiaj chillout troche poznym wieczorem jakis netflixik moze a jakie masz ulubione programy z dzieciństwa szukam inspiracji cos obejrzec 1234: Sąsiedzi byli dojebani, ewentualnie jakiś krecik też top michał: krecik to klasyk zawsze mnie bawił jego poziom relaksu a co najbardziej lubiłeś w sąsiadach 1234: Te niema przemoc, a Ty co tam lubiłeś?

## Podsumowanie Badania

W przeprowadzonym teście wzięło udział 12 osób, z czego:

* 4 osoby prowadziły rozmowy z botami AI
* 8 osób prowadziło rozmowy między sobą

### Wyniki Rozpoznawalności

* 100% osób rozmawiających z AI nie rozpoznało, że rozmawia z systemem sztucznej inteligencji
* Boty AI wykazały się zdolnością do prowadzenia pozornie naturalnych, płynnych rozmów

# Test odbył się na platformie discord

![image](https://gitlab.tele.agh.edu.pl/-/project/95/uploads/a5f7172ea65cdded96cf1d2e970b040e/image.png){width="195" height="225"}


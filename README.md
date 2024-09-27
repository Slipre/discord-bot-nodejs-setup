# discord-bot-nodejs-setup

***Starter kit*** do tworzenia botów na Discorda przy użyciu Node.js.  
To repozytorium zostało stworzone z myślą o osobach, które dopiero zaczynają swoją przygodę z programowaniem botów, ale również dla bardziej doświadczonych deweloperów, którzy chcą szybko rozpocząć nowy projekt. Zawiera ono wszystkie niezbędne elementy, abyś mógł od razu przystąpić do pracy.

## Wymagania

Zanim zaczniesz, upewnij się, że masz zainstalowane:

- **Node.js** (wersja 18.x lub nowsza)  
  Node.js możesz pobrać z oficjalnej strony *[Nodejs.org](https://nodejs.org/)*

- **Discord Developer Account**  
  Aby uzyskać token bota, musisz utworzyć aplikację w *[Discord Developer Portal](https://discord.com/developers/applications)*

## Instalacja

**Sklonuj repozytorium lub pobierz kod:**

```bash
git clone https://github.com/twojusername/discord-bot-nodejs-setup.git
cd discord-bot-nodejs-setup
```
Alternatywnie możesz pobrać repozytorium jako plik ZIP i rozpakować go na swoim komputerze.

## Zainstaluj zależności:

Używając **NPM**, uruchom polecenie:

```bash
npm install
```
To polecenie zainstaluje wszystkie potrzebne paczki wymienione w pliku *package.json*.

## Skonfiguruj plik *.env* :

W repozytorium znajduje się plik *.env*.  
Uzupełnij go swoim Discord bot tokenem, który możesz uzyskać z *Discord Developer Portal*, następnie dopisz go do pliku *.gitignore*.  
Nie dodasz go wtedy do repozytorium aby nikt nie poznał twoich tokenów

## Uruchom bota:

Po zainstalowaniu zależności i skonfigurowaniu tokenu możesz uruchomić bota:

```bash
node .
```
Bot powinien teraz działać i być gotowy do interakcji.

## Użycie
Po uruchomieniu bota, dodaj go do swojego serwera Discord za pomocą linku autoryzacyjnego z *Discord Developer Portal*, upewniając się, że ma odpowiednie uprawnienia.  
Domyślnie bot reaguje na prostą komendę, taką jak ***/ping***.  
Możesz rozbudować tego bota, dodając więcej funkcjonalności według własnych potrzeb.

## Przydatne linki:
- [Node.js Documentation](https://nodejs.org/docs/latest/api/)
- [Discord.js Documentation](https://discord.js.org/docs/packages/discord.js/14.16.2)
- [Discord Developer Portal](https://discord.com/developers/applications)

## Licencja:

Projekt jest dostępny na licencji MIT.
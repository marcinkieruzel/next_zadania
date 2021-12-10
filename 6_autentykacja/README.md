# Autentykacja

1. W pliku `secrets.json` znajduje się lista średnio śmiesznych żartów. Dostęp do niej mogą mieć tylko zalogowani użytkownicy. 
2. Dodaj aplikację OAuth do swojego konta na githubie
3. Skonfiguruj next-auth 
4. W pliku `pages/client.js` pobierz listę żartów dla zalogowanych użytkowników – skorzystaj z sesji po stronie klienta. Listę żartów możesz udostępnić przy pomocy JSON SERVER
5.  W pliku `pages/server.js` pobierz listę żartów dla zalogowanych użytkowników – skorzystaj z sesji po stronie server i SERVER SIDE RENDERINGU. Listę żartów możesz udostępnić przy pomocy JSON SERVER lub pobrać przez moduł fs. Jeśli pobierasz przy pomocy JSON-SERVER
6. W wewnętrznym api next.js wystaw plik secrets.json pod endpointem `/api/jokes`. Zabezpiecz dostęp do api. 
[Więcej info:](https://next-auth.js.org/tutorials/securing-pages-and-api-routes)

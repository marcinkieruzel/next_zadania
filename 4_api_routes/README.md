# Api routes

1. Stwórz formularz kontaktowy na stronie głównej. Powinien zawierać pola `Imię` `Nazwisko` `Telefon`, `Email`, `Wiadomość`
2. Stwórz api route do obsługi formularza. W Route powinna się dokonać walidacja. Jeśli dane sa poprawne zapisz je do lokalnego pliku przy pomocy modułu fs lub json-server. Jeśli dane nie są poprawne zwróć użytkownikowi informacje o błędach.
3. Do walidacji użyj middleware `express-validator` – https://www.npmjs.com/package/express-validator
4. Dodaj mechanizm captcha do formularza. Zwaliduj captche w api route (dla chętnych)
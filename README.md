# Vizuální testování v Playwright

Tento repozitář je připraven pro Meetup skupiny [\[pro:\]TEST!](https://www.meetup.com/protest_cz/events/305716848)

## Instalace

Pro spuštění testů je potřeba mít nainstalovaný nástroj [Node.js](https://nodejs.org/en/).

Kroky pro instalaci:

1. Naklonujte si tento repozitář
2. Nainstalujte závislosti pomocí příkazu `npm install`
3. Nainstalujte prohlížeč pomocí příkazu `npx playwright install --with-deps`

## Struktura repozitáře

- `tests/` - složka obsahující testy
- `tests/cheatsheet/` - složka obsahující vzorové testy, které můžete použít jako šablonu pro vaše vlastní testy
- `tests/workshop/` - složka obsahující testy, vytvořené na workshopu
- `tests/workshop/prep/` - složka obsahující testy, které byly vytvořeny před workshopem, může zde být více příkladů a testů

## Spuštění testů

Testy můžete spustit pomocí příkazu `npx playwright test`.
Testy se spustí v prohlížeči, který je nastavený v souboru `playwright.config.ts`.

Při prvním spuštění dojde k pádu z důvodu vytváření snapshotů. V druhém spuštění se snapshoty pro vizuální testy již použijí a testy by měly proběhnout úspěšně.

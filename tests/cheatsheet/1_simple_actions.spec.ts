import { test } from "@playwright/test";

// ? In this file, we will demonstrate the basic actions you can perform with Playwright
// ? Playwright is asynchronous, which means most actions can happen simultaneously. That's why we use the async keyword to mark an asynchronous function, and await to wait for the completion of an asynchronous function.
// ! WARNING: If you don't use await, the action will be performed but won't wait for its completion, which can cause errors in your tests.
test.describe("Basic actions with Playwright", () => {
  test("Form control", async ({ page }) => {
    // ? All actions are performed on the page, which we open using page.goto
    await page.goto("https://tredgate.com/webtrain/registration.html");
    // ? We identify elements using selectors, which allow us to find elements on the page in the source code
    // ? There are different types of selectors, most commonly we use CSS selectors, but we can also use XPath selectors
    // ? Elements can, but don't have to, be stored in variables, depending on whether we need them more than once
    const nameInput = page.locator("#name"); // ? We identify the "Name" element using a CSS selector and store it in a const variable
    // ? To enter text into an element, we use the fill method, which fills the element with text
    await nameInput.fill("Jan Novák"); // ? Fill the "Name" element with the text "Jan Novák"

    // ? If we don't reuse the element, we can use page.locator directly with the fill method
    await page.locator("#email").fill("jan.novak@example.com"); // ? Fill the "Email" element

    // ? To fill in the date of birth, we use the fill method, which fills the element with text. We must use the correct date format that this special type of element (date) allows: YYYY-MM-DD (year-month-day, e.g. 2023-04-17)
    await page.locator("#date-of-birth").fill("1990-01-01"); // ? Fill the "Date of Birth" element with the date "1990-01-01"

    // ? To check a checkbox, we use the check method, which checks the element
    await page.locator("#newsletter").check(); // ? Check the "Sign me up for the newsletter" checkbox

    // ? To uncheck a checkbox, we use the uncheck method, which unchecks the element
    await page.locator("#newsletter").uncheck();

    // ? To select a value in a select (dropdown), we use the selectOption method, which selects a value in the select
    await page.locator("#gender").selectOption("male"); // ? Select the value "Male" in the select

    // ? Check the radio button contact by email:
    await page.locator("#contact-email").check();

    // ? To click on an element, we use the click method, which clicks the element
    await page.locator("[type='submit']").click(); // ? Click the "Submit" button
  });
});

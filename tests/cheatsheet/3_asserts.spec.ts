// ? Import the necessary modules from Playwright: test - for tests, expect - for assertions
import { expect, test } from "@playwright/test";

test.describe("Sample tests using asserts (checks)", () => {
  // ? The beforeEach block runs before each test; in this case, we open the Tredgate Eshop page
  test.beforeEach(async ({ page }) => {
    await page.goto("https://tredgate.com/eshop/");
  });

  test("Basic check of an element on the page", async ({ page }) => {
    // ? Identify the first menu button on the page using XPath
    const firstMenuButton = page.locator(
      '//nav[@id="menu"]//li[contains(@class, "dropdown")][1]/a'
    );
    await expect(firstMenuButton).toBeVisible(); // ? Verify that the menu button is visible
    await expect(firstMenuButton).toHaveText("Desktops"); // ? Verify that the menu button contains the text "Desktops"

    await expect(firstMenuButton).toHaveAttribute(
      "href",
      "https://tredgate.com/eshop/index.php?route=product/category&path=20"
    ); // ? Verify that the button contains the href attribute with a link to "desktops"
  });
});

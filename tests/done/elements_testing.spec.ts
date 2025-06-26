import test, { expect } from "@playwright/test";

test("Image Visual Test", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/index.html");
  await expect(page.locator("#playwright-logo")).toHaveScreenshot(
    "image_test.png"
  );
});

test("Module Visual Test", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/contact.html");
  await expect(page.locator("#practiceForm")).toHaveScreenshot(
    "module_test.png"
  );
});

test("Button Field Visual Test", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/web-actions.html");
  await expect(
    page.locator('[data-testid="new-tab-box"] .div-button')
  ).toHaveScreenshot("button_field_test.png");
});

import test, { expect } from "@playwright/test";
import path from "path";

test("Masking Elements", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/web-actions.html");
  await expect(page).toHaveScreenshot("masked_elements_test.png", {
    fullPage: true,
    // Masking dynamic elements, they will be covered by a solid color
    mask: [
      page.locator('[data-testid="hover-box"]'),
      page.locator('[data-testid="drag-drop-box"] h2'),
    ],
  });
});

test("Masking not Working", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/dynamic-content.html");
  await expect(page).toHaveScreenshot("mask_not_working_test.png", {
    mask: [page.locator('[data-testid="dynamic-size-box"]')],
    fullPage: true,
  });
});

test("Hide Elements with CSS", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/web-actions.html");
  await expect(page).toHaveScreenshot("hide_elements_test.png", {
    // Path to CSS file, which hides dynamic elements on the page using visibility: hidden; display: none;
    stylePath: path.resolve(__dirname, "visual_tests.css"),
    fullPage: true,
  });
});

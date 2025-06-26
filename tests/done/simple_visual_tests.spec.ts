import { test, expect } from "@playwright/test";

test("Simple Visual Test", async ({ page }) => {
  // Open webtrain page
  await page.goto("https://tredgate.com/webtrain/web-actions.html");
  // Check screenshot with saved snapshot
  await expect(page).toHaveScreenshot("simple_test.png");
});

test("Full Page Visual Test", async ({ page }) => {
  // Open webtrain page
  await page.goto("https://tredgate.com/webtrain/web-actions.html");
  // Check screenshot with saved snapshot - with options: fullPage
  await expect(page).toHaveScreenshot("full_page_test.png", {
    fullPage: true,
  });
});

// This test is designed to fail everytime (on page are dynamic sized elements)
test("Failed Visual Test", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/dynamic-content.html");
  await expect(page).toHaveScreenshot("failing_dynamic_content.png", {
    fullPage: true,
  });
});

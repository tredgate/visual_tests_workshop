import { test } from "@playwright/test";

// ? In this file, we will show how to easily structure tests and helper functions
// ? Describe blocks are used to group tests into logical units, but are not required in Playwright
// ? Within a describe block, we can have other describe blocks to help structure tests into a hierarchy
// ? Each describe consists of a name and a function containing the tests; the name must be unique
test.describe("Test structure and helper 'hooks'", () => {
  // ? The beforeAll block runs before all tests in the describe block; for example, we can use it to create external data or connect to a database
  test.beforeAll(async ({ browser }) => {
    // ? It is not recommended to use beforeAll for working with the tested application, as Playwright tests are isolated and should not affect each other. Therefore, beforeAll should not be used (and it's not easy, since we don't have access to page here)
    console.log("I run only once before all tests in this describe block");
  });

  // ? The beforeEach block runs before each test in the describe block; for example, we can use it to open the page we are testing or other steps performed before each test
  test.beforeEach(async ({ page }) => {
    console.log("I run before each test in this describe block");
  });

  // ? The afterEach block runs after each test in the describe block; for example, we can use it to close the page we are testing or other steps performed after each test
  test.afterEach(async ({ page }) => {
    console.log("I run after each test in this describe block");
  });

  // ? The afterAll block runs after all tests in the describe block; for example, we can use it to close external data or disconnect from a database
  test.afterAll(async ({ browser }) => {
    console.log("I run after all tests in this describe block");
  });

  test("Test 1", async ({ page }) => {
    console.log("Test 1 is running");
  });

  test("Test 2", async ({ page }) => {
    console.log("Test 2 is running");
  });
});

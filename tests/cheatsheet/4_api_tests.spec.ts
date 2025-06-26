// ? Import the Playwright testing library: test - for tests, expect - for assertions
import { expect, test } from "@playwright/test";

test.describe("Sample API Tests", () => {
  // ? Instead of using page in the test, we use request
  // ? request is an object that allows us to make HTTP requests
  test("Making a GET request", async ({ request }) => {
    // ? We create a GET request to the API
    // ? URL: https://tegb-backend-877a0b063d29.herokuapp.com/train
    const response = await request.get(
      // ? Make a GET request using request.get; for other HTTP methods, use request.post, request.put, request.delete, etc.
      "https://tegb-backend-877a0b063d29.herokuapp.com/train"
    );
    // ? The response constant contains the server's response, which we can further work with
  });

  test("Simple REST API Response tests", async ({ request }) => {
    const response = await request.get(
      "https://tegb-backend-877a0b063d29.herokuapp.com/train"
    );
    expect(response.ok()).toBeTruthy(); // ? Verify that the response is successful
    /* The response from this API (JSON):
      {
         "id": 1,
         "message": "TEG#B Training GET request successful",
         "timestamp": "2025-03-31T22:43:59.276Z"
      }
    */
    // ? Check the response status code: 200
    expect(response.status()).toBe(200); // ? Verify that the response status code is 200
    // ? Check the response header: application/json
    expect(response.headers()["content-type"]).toContain("application/json"); // ? Verify that the header contains application/json
    // ? Check the response body: message
    const responseBody = await response.json(); // ? Get the response body as JSON
    expect(responseBody).toHaveProperty("message"); // ? Verify that the response body contains the property message
    expect(responseBody.message).toBe("TEG#B Training GET request successful"); // ? Verify that the message is correct
    expect(responseBody).toHaveProperty("id"); // ? Verify that the response body contains the property id
    expect(typeof responseBody.id).toBe("number"); // ? Verify that id is a number
    expect(responseBody).toHaveProperty("timestamp"); // ? Verify that the response body contains the property timestamp
    expect(typeof responseBody.timestamp).toBe("string"); // ? Verify that timestamp is a string (text)
  });
});

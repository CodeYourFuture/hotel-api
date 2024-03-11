const assert = require("node:assert/strict");
const { describe, it } = require("node:test");

const { handler } = require("../functions/error");

describe("GET /error", () => {
  it("returns 500 Internal Server Error with a message", () => {
    const { body, statusCode } = handler();
    assert.equal(statusCode, 500);
    assert.deepEqual(JSON.parse(body), { error: "Whoops something went wrong!" });
  });
});

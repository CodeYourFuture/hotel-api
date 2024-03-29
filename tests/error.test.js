const assert = require("node:assert/strict");
const { describe, it } = require("node:test");

const { handler } = require("../functions/error");

describe("GET /error", () => {
	it("returns 500 Internal Server Error with a message", async () => {
		const { body, headers, statusCode } = await handler();
		assert.equal(statusCode, 500);
		assert.deepEqual(headers, {
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json",
		});
		assert.deepEqual(JSON.parse(body), { error: "Whoops something went wrong!" });
	});
});

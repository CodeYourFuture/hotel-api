const assert = require("node:assert/strict");
const { describe, it } = require("node:test");

const { config, handler } = require("../functions/customers");

describe("GET /customers/:id", () => {
	it("configures a path parameter", () => {
		assert.deepEqual(config, { path: "/customers/:id" });
	});

	it("returns 200 OK with customer if found", async () => {
		const { body, statusCode } = await handler({ path: "/path/to/customers/4" });
		assert.equal(statusCode, 200);
		assert.deepEqual(JSON.parse(body), {
			id: 4,
			title: "Dame",
			firstName: "Judi",
			surname: "Dench",
			email: "Judi@dench.co.uk",
			vip: false,
			phoneNumber: "+44 1632 960019",
		});
	});

	it("returns 404 OK with error if not found", async () => {
		const { body, statusCode } = await handler({ path: "/path/to/customers/123" });
		assert.equal(statusCode, 404);
		assert.deepEqual(JSON.parse(body), { error: "Customer ID 123 cannot be found" });
	});
});

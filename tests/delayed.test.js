const assert = require("node:assert/strict");
const { describe, it } = require("node:test");

const { handler } = require("../functions/delayed");

describe("GET /delayed", () => {
	it("returns 200 OK with bookings in 5 seconds", { timeout: 5_500 }, async () => {
		const { body, headers, statusCode } = await handler();
		assert.equal(statusCode, 200);
		assert.deepEqual(headers, { "Content-Type": "application/json" });
		const bookings = JSON.parse(body);
		assert.equal(bookings.length, 5);
		assert.deepEqual(bookings[3], {
			id: 4,
			title: "Dame",
			firstName: "Judi",
			surname: "Dench",
			email: "Judi@dench.co.uk",
			roomId: 6,
			checkInDate: "2017-12-25",
			checkOutDate: "2018-01-03",
		});
	});
});

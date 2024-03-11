const assert = require("node:assert/strict");
const { describe, it } = require("node:test");

const { handler } = require("../functions/bookings");

describe("GET /bookings", () => {
	it("returns 200 OK with bookings", { timeout: 500 }, async () => {
		const { body, headers, statusCode } = await handler();
		assert.equal(statusCode, 200);
		assert.deepEqual(headers, { "Content-Type": "application/json" });
		const bookings = JSON.parse(body);
		assert.equal(bookings.length, 5);
		assert.deepEqual(bookings[1], {
			id: 2,
			title: "Doctor",
			firstName: "Sadia",
			surname: "Begum",
			email: "begum_sadia@sadia.org",
			roomId: 1,
			checkInDate: "2018-02-15",
			checkOutDate: "2018-02-28",
		});
	});
});

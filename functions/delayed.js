const { join } = require("node:path");

const fakeBookings = require(join(__dirname, "fakeBookings.json"));

module.exports = {
	/** @type {import("@netlify/functions").Handler} */
	async handler() {
		await delay(5_000);
		return {
			body: JSON.stringify(fakeBookings),
			headers: { "Content-Type": "application/json" },
			statusCode: 200,
		};
	},
};

/**
 * @param {number} ms - time to delay in milliseconds
 * @returns {Promise<void>}
 */
function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

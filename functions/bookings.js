const { join } = require("node:path");

const fakeBookings = require(join(__dirname, "fakeBookings.json"));

module.exports = {
	/** @type {import("@netlify/functions").Handler} */
	async handler() {
		return {
			body: JSON.stringify(fakeBookings),
			headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
			statusCode: 200,
		};
	},
};

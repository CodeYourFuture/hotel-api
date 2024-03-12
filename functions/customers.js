const { join } = require("node:path");

const fakeCustomers = require(join(__dirname, "fakeCustomers.json"));

module.exports = {
	/** @type {import("@netlify/functions").Config} */
	config: {
		path: "/customers/:id",
	},

	/** @type {import("@netlify/functions").Handler} */
	async handler(event) {
		const customerId = event.path.split("/").at(-1);
		const customer = fakeCustomers.find((c) => c.id.toString() === customerId);
		const headers =  { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" };
		if (!customer) {
			return {
				body: JSON.stringify({ error: `Customer ID ${customerId} cannot be found` }),
				headers,
				statusCode: 404,
			};
		}
		return { body: JSON.stringify(customer), headers, statusCode: 200 };
	},
};

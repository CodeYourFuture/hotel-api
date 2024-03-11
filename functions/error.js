module.exports = {
	/** @type {import("@netlify/functions").Handler} */
	async handler() {
		return {
			body: JSON.stringify({ error: "Whoops something went wrong!" }),
			headers:  { "Content-Type": "application/json" },
			statusCode: 500,
		};
	},
};

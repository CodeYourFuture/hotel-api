module.exports = {
  /** @type {import("@netlify/functions").Handler} */
  handler() {
    return {
      body: JSON.stringify({ error: "Whoops something went wrong!" }),
      statusCode: 500,
    };
  },
};

const assert = require("node:assert/strict");
const { describe, it } = require("node:test");

const request = require("supertest");

const BASE_URL = "http://localhost:8888";

describe("API", () => {
	describe("GET /", () => {
		it("provides an array of bookings", async () => {
			const { body } = await request(BASE_URL)
				.get("/")
				.expect("Access-Control-Allow-Origin", "*")
				.expect(200);
			assert.equal(body.length, 5);
			assert.deepEqual(body[0], {
				id: 1,
				title: "Mr",
				firstName: "John",
				surname: "Doe",
				email: "johndoe@doe.com",
				roomId: 2,
				checkInDate: "2017-11-21",
				checkOutDate: "2017-11-23",
			});
		});
	});

	describe("GET /customers/:id", () => {
		it("provides one customer", async () => {
			await request(BASE_URL)
				.get("/customers/1")
				.expect("Access-Control-Allow-Origin", "*")
				.expect(200, {
					id: 1,
					title: "Mr",
					firstName: "John",
					surname: "Doe",
					email: "johndoe@doe.com",
					vip: true,
					phoneNumber: "+44 1632 960185",
				});
		});
	});

	describe("GET /error", () => {
		it("responds Internal Server Error", async () => {
			await request(BASE_URL)
				.get("/error")
				.expect("Access-Control-Allow-Origin", "*")
				.expect(500, { error: "Whoops something went wrong!" });
		});
	});
});

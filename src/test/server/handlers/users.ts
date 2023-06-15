import { rest } from "msw";

import { EXAMPLE_API_URL } from "@/config/env"; // TODO: import and replace with API_URL

export const usersHandlers = [
	rest.get(`${EXAMPLE_API_URL}/users`, (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{
					id: 1,
					name: "Leanne Graham",
					username: "Bret",
					email: "Sincere@april.biz",
					address: {
						street: "Kulas Light",
						suite: "Apt. 556",
						city: "Gwenborough",
						zipcode: "92998-3874",
						geo: {
							lat: "-37.3159",
							lng: "81.1496",
						},
					},
					phone: "1-770-736-8031 x56442",
					website: "hildegard.org",
					company: {
						name: "Romaguera-Crona",
						catchPhrase: "Multi-layered client-server neural-net",
						bs: "harness real-time e-markets",
					},
				},
			])
		);
	}),
];

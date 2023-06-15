import { render, screen } from "@/test/test-utils";

import { Users } from "../Users";

describe("Users page", () => {
	test("Users page display home page name", async () => {
		render(<Users />);

		const heading = await screen.findByText(/users from api/i);
		const user = await screen.findByText(/Leanne Graham/i);

		expect(heading).toBeInTheDocument();
		expect(user).toBeInTheDocument();
	});

	test("Users page with preloaded state", async () => {
		render(<Users />, {
			preloadedState: {
				counter: {
					value: 1,
				},
			},
		});

		const counterText = await screen.findByText(/current counter value: 1/i);

		expect(counterText).toBeInTheDocument();
	});
});

import { render, screen } from "@/test/test-utils";

import { Home } from "../Home";

test("Home page display home page name", () => {
	render(<Home />);

	const heading = screen.getByText(/home page/i);

	expect(heading).toBeInTheDocument();
});

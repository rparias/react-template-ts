import "./Home.scss";
import { Link } from "react-router-dom";

import { Form } from "@/components/Form";

export const Home = () => {
	return (
		<div>
			<h1>Home Page</h1>
			<Form />
			<h2>Link to Users Page Example</h2>
			<Link to="/users">Go to users</Link>
		</div>
	);
};

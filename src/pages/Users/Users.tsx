import { Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "@/state/hooks";
import { decrement, increment } from "@/state/reducers/counterSlice";

import { useGetUsersQuery } from "./api/getUsers";
import { User } from "./types";

export const Users = () => {
	const { data, error, isLoading, isError } = useGetUsersQuery();

	// State from redux example
	const countValue = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	if (isLoading) {
		return <h4>Loading...</h4>;
	}

	if (isError) {
		throw error;
	}

	if (!data?.length) {
		return <h4>No Users found</h4>;
	}

	return (
		<section>
			<h1>Users Page</h1>
			<h2>Users from API</h2>
			<ul>
				{data.map((user: User) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
			<h3>Counter example</h3>
			<p>Current counter value: {countValue}</p>
			<div>
				<button aria-label="Increment value" onClick={() => dispatch(increment())}>
					Increment
				</button>
				<button
					className="bg-secondary"
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button>
			</div>
			<Link to="/">Back to home</Link>
		</section>
	);
};

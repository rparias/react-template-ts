import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "@/state/baseQuery";

import { User } from "../types";

// export const getUsers = (): Promise<User[]> => {
// 	return axios.get("/users");
// };

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
	reducerPath: "usersApi",
	baseQuery: axiosBaseQuery(),
	endpoints: (builder) => ({
		getUsers: builder.query<User[], void>({ query: () => ({ url: "/users", method: "get" }) }),
	}),
});

export const { useGetUsersQuery } = usersApi;

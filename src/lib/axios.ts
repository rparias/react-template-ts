import Axios from "axios";

import { EXAMPLE_API_URL } from "@/config/env";

export const axios = Axios.create({
	baseURL: EXAMPLE_API_URL, // TODO: import and replace with API_URL
});

axios.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {
		const message = error.response?.data?.message || error.message;
		console.error(message);

		return Promise.reject(error);
	}
);

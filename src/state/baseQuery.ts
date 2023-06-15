import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError } from "axios";

import { axios } from "@/lib/axios";

export const axiosBaseQuery =
	(): BaseQueryFn<
		{
			url: string;
			method: AxiosRequestConfig["method"];
			data?: AxiosRequestConfig["data"];
			params?: AxiosRequestConfig["params"];
		},
		unknown,
		unknown
	> =>
	async ({ url, method, data, params }) => {
		try {
			const result = await axios({ url, method, data, params });
			return { data: result };
		} catch (axiosError) {
			const err = axiosError as AxiosError;
			return {
				error: {
					status: err.response?.status,
					data: err.response?.data || err.message,
				},
			};
		}
	};

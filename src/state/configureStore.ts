import { configureStore, PreloadedState } from "@reduxjs/toolkit";

import { usersApi } from "@/pages/Users/api/getUsers";

import rootReducer from "./reducers/rootReducer";

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
	});
};

// Infer the `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

import { combineReducers } from "@reduxjs/toolkit";

import { usersApi } from "@/pages/Users/api/getUsers";

import counterReducer from "./counterSlice";

const rootReducer = combineReducers({
	counter: counterReducer,
	[usersApi.reducerPath]: usersApi.reducer,
});

export default rootReducer;

import type { PreloadedState } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { render as rtlRender, screen, waitForElementToBeRemoved } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PropsWithChildren } from "react";

import { AppProvider } from "@/providers/app";
import { setupStore } from "@/state/configureStore";
import type { AppStore, RootState } from "@/state/configureStore";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
	route?: string;
	preloadedState?: PreloadedState<RootState>;
	store?: AppStore;
}

export const waitForLoadingToFinish = () =>
	waitForElementToBeRemoved(
		() => [...screen.queryAllByTestId(/loading/i), ...screen.queryAllByText(/loading/i)],
		{ timeout: 4000 }
	);

// eslint-disable-next-line import/export
export const render = async (
	ui: React.ReactElement,
	{
		route = "/",
		preloadedState = {},
		store = setupStore(preloadedState),
		...renderOptions
	}: ExtendedRenderOptions = {}
) => {
	window.history.pushState({}, "Test page", route);

	setupListeners(store.dispatch);

	const Wrapper = ({ children }: PropsWithChildren<object>): JSX.Element => {
		return <AppProvider store={store}>{children}</AppProvider>;
	};

	const returnValue = {
		store,
		...rtlRender(ui, {
			wrapper: Wrapper,
			...renderOptions,
		}),
	};

	return returnValue;
};

// eslint-disable-next-line import/export
export * from "@testing-library/react";
export { rtlRender, userEvent };

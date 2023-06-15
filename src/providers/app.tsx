import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { AppStore } from "@/state/configureStore";

const ErrorFallback = () => {
	return (
		<div role="alert">
			<h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
		</div>
	);
};

type AppProviderProps = {
	children: React.ReactNode;
	store: AppStore;
};

export const AppProvider = ({ children, store }: AppProviderProps) => {
	return (
		<Suspense fallback={<div>fallback loading...</div>}>
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<Provider store={store}>
					<Router>{children}</Router>
				</Provider>
			</ErrorBoundary>
		</Suspense>
	);
};

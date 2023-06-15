import { AppProvider } from "@/providers/app";
import { AppRoutes } from "@/routes";
import { store } from "@/state/store";

export function App() {
	return (
		<AppProvider store={store}>
			<AppRoutes />
		</AppProvider>
	);
}

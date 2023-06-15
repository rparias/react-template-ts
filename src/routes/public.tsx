import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { Layout } from "@/components/Layout";
import { lazyImport } from "@/utils/lazyImport";

const { Home } = lazyImport(() => import("@/pages/Home"), "Home");
const { Users } = lazyImport(() => import("@/pages/Users"), "Users");

const App = () => {
	return (
		<Layout>
			<Suspense fallback={<div>loading public route</div>}>
				<Outlet />
			</Suspense>
		</Layout>
	);
};

export const publicRoutes = [
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/users", element: <Users /> },
			{ path: "/", element: <Home /> },
			{ path: "*", element: <Navigate to="." /> },
		],
	},
];

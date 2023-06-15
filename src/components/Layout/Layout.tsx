type LayoutProps = {
	children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<header className="flex mt-2 mb-2">Header Layout</header>
			<main>{children}</main>
			<footer className="flex mt-2 mb-2">Footer Layout</footer>
		</>
	);
};

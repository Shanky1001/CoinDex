import React, { FC, ReactElement, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "components/Loader";
import { PUBLIC_ROUTES } from "lazyLoading";
import LayoutWrapper from "Layout/LayoutWrapper";

interface SuspenseWrapperProps {
	children: ReactElement;
}
interface LazyComponent {
	component: React.LazyExoticComponent<React.ComponentType<any>>;
}

const SuspenseWrapper = (props: SuspenseWrapperProps) => {
	return (
		<React.Suspense fallback={<Loader />}>{props.children}</React.Suspense>
	);
};

const RoutesWrapper = () => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0 });
		// scroll to the top of the browser window when changing route
	}, [location]);

	return (
		<Routes>
			<Route path="/" element={<LayoutWrapper />}>
				{PUBLIC_ROUTES.map((route: any) => (
					<Route
						path={route.path}
						key={route.path}
						element={
							<SuspenseWrapper>
								<route.component />
							</SuspenseWrapper>
						}
					/>
				))}
			</Route>
		</Routes>
	);
};

export default RoutesWrapper;

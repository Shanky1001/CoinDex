import React from "react";
import { Outlet } from "react-router-dom";
import BackToTopButton from "components/BackToTopButton";
import Footer from "./Footer";
import NavBar from "./Navbar";
import SideBar from "./SideBar";

const LayoutWrapper = () => {
	return (
		<div>
			<div className="min-h-screen">
				<SideBar />
				<div>
					<NavBar />
					<div className="mx-4 mt-4">
						<Outlet />
						<BackToTopButton />
					</div>
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default LayoutWrapper;

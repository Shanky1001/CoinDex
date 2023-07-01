import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import BackToTopButton from "components/BackToTopButton";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const LayoutWrapper = () => {
	const [open, setOpen] = useState(false);

	const handleDrawer = () => {
		setOpen(!open);
	};

	useEffect(() => {
		window.addEventListener("resize", (e) => {
			if (window.innerWidth < 600) {
				setOpen(false);
			}else{
				setOpen(open)
			}
		});

		return () => {
			window.removeEventListener("resize", () => {});
		};
	}, [window]);

	return (
		<ThemeProvider theme={theme}>
			<div className="main_wrapper">
				<Box className={"navbar_wrapper"}>
					<NavBar />
				</Box>
				<Box
					className={`drawer ${
						open ? "drawer-open" : "drawer-closed"
					}`}
				>
					<Box className="drawer_button">
						<IconButton
							onClick={handleDrawer}
							sx={{
								backgroundColor: "#222",
								"&:hover": { backgroundColor: "#333" },
							}}
						>
							{!open ? (
								<ChevronRightIcon color="primary" />
							) : (
								<ChevronLeftIcon color="primary" />
							)}
						</IconButton>
					</Box>
					<SideBar open={open} />
				</Box>
				<Box
					component="main"
					className="main_wrapper-right"
					sx={{ flexGrow: 1, padding: 3 }}
				>
					<div className="mx-4 mt-4">
						<Outlet />
						<BackToTopButton />
					</div>
					<Footer />
				</Box>
			</div>
		</ThemeProvider>
	);
};

export default LayoutWrapper;

const theme = createTheme({
	palette: {
		primary: {
			main: "#DDD",
			light: "#EEE",
		},
	},
});

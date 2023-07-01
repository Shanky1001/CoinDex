import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MultilineChartIcon from "@mui/icons-material/MultilineChart";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { Box, Stack, IconButton, Typography } from "@mui/material";

const SideBar = ({ open }: SideBarProps) => {
	const items: MenuItem[] = [
		{
			label: "Home",
			key: "/",
			icon: <HomeIcon />,
		},
		{
			label: "Currencies",
			key: "/currencies",
			icon: <MultilineChartIcon />,
		},
		{
			label: "Reference Currencies",
			key: "/reference-currencies",
			icon: <AnalyticsIcon />,
		},
		{
			label: "News",
			key: "/news",
			icon: <LightbulbIcon />,
		},
	];

	return (
		<Stack
			alignItems={"flex-start"}
			gap={2}
			sx={{
				width: `${open ? "235px" : "60px"}`,
				marginTop: "30px",
				marginInline: "auto",
			}}
			className="sidebar_wrapper"
		>
			{items.map((val) => {
				let active: boolean;
				return (
					<NavLink
						to={val.key}
						key={val.key}
						className={({ isActive, isPending }) =>
							isPending ? "pending" : isActive ? "active" : ""
						}
					>
						<Stack
							direction="row"
							alignItems="center"
							justifyContent={open ? "flex-start" : "center"}
							gap={2}
						>
							<IconButton>{val.icon}</IconButton>
							{open && (
								<Typography variant="h6">
									{val.label}
								</Typography>
							)}
						</Stack>
					</NavLink>
				);
			})}
		</Stack>
	);
};

export default SideBar;

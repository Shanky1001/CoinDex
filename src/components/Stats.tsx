import { Stack } from "@mui/material";
import React from "react";

const Stats = ({ title, value, icon }: StatsProps) => {
	return (
		<Stack className="stats_wrapper" justifyContent={"flex-start"}>
			<h4>{title}</h4>
			<Stack direction={"row"} alignItems={"center"} gap={1}>
				<>{icon}</>
                <h5>{value}</h5>
			</Stack>
		</Stack>
	);
};

export default Stats;

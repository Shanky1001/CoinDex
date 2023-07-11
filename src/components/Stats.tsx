import {Stack} from "@mui/material";
import React from "react";

const Stats = ({title, value, icon}: StatsProps) => {
  return (
    <Stack direction={"row"} gap={2} className="stats_wrapper grow" justifyContent={"flex-start"} alignItems={"center"}>
      <>{icon}</>
      <Stack direction={"column"} alignItems={"flex-start"}>
        <h4>{title}</h4>
        <h5>{value}</h5>
      </Stack>
    </Stack>
  );
};

export default Stats;

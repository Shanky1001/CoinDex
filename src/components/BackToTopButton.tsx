import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React, { useEffect, useState, useCallback } from "react";

const BackToTopButton = ({ show }: any) => {
	const handleClick = useCallback(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [window]);

	return (
		<>
			{show && (
				<Fab
					size="large"
					aria-label="back-to-top"
					onClick={handleClick}
					sx={{
						position: "fixed",
						right: "50px",
						top: "80vh",
					}}
				>
					<KeyboardArrowUpIcon />
				</Fab>
			)}
		</>
	);
};

export default BackToTopButton;

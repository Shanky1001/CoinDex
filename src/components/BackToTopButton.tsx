import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React, { useEffect, useState,useCallback } from "react";

const BackToTopButton = () => {
	const [show, setShow] = useState(false);

  const handleClick = useCallback(()=>{
    window.scrollTo({top:0})
  },[window])

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.screenX > 1000) {
				setShow(true);
			} else {
				setShow(false);
			}
		});
		return () => {
			window.removeEventListener("scroll", () => {});
		};
	}, [window]);

	return (
		<>
			{show && (
				<Fab disabled aria-label="like" onClick={handleClick}>
					<KeyboardArrowUpIcon />
				</Fab>
			)}
		</>
	);
};

export default BackToTopButton;

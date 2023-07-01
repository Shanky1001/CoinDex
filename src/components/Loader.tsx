import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
	return (
		<div className="flex justify-center items-center h-96">
            <CircularProgress color="success" size={50} variant="indeterminate" value={100} />
			<h5>Loading ....</h5>
		</div>
	);
};

export default Loader;

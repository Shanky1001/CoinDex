import React from "react";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../assets/images/404_image.jpg";
const PageNotFound = () => {
	const navigate = useNavigate();
	const handleBack = () => {
		navigate("/");
	};
	return (
		<div className="flex flex-col items-center justify-center py-5">
			<div className="text-center flex items-center justify-center">
				<img src={ErrorPage} alt="404-page" width={"70%"} />
			</div>
			<button onClick={handleBack} className="btn">
				Go Back to Home
			</button>
		</div>
	);
};

export default PageNotFound;

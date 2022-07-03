import React from "react";
import IMG from "../assets/out.png";
const LogoutButton = () => {
	return (
		<button
			className="btn-login"
			onClick={() => {
				window.location.href = "http://localhost:2000/logout";
			}}
		>
			<img src={IMG} alt="out" />
		</button>
	);
};

export default LogoutButton;

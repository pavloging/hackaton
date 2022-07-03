import React from "react";
import IMG from "../assets/in.png";

const LoginButton = () => {
	return (
		<button
			className="btn-login"
			onClick={() =>
				(window.location.href = "http://localhost:2000/authenticate")
			}
		>
			<img src={IMG} alt="in" />
		</button>
	);
};

export default LoginButton;

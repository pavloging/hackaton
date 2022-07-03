import React, { useEffect, useState } from "react";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

const Auth = () => {
	const [user, setUser] = useState(null);
	useEffect(() => {
		fetch("http://localhost:2000/", {
			credentials: "include",
			headers: {
				"content-type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((b) => {
				if (b.success) {
					setUser(b.user);
				}
			});
	}, []);
	return user ? (
		<div>
			<LogoutButton />
		</div>
	) : (
		<div>
			<LoginButton />
		</div>
	);
};

export default Auth;

import React from "react";
import { useHistory } from "react-router-dom";

function Logout({ auth }) {
	let history = useHistory();
	localStorage.removeItem("token");
	auth.notLoggedIn();
	history.push("/");
	return <></>;
}

export default Logout;

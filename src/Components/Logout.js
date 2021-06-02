import React from "react";
import { useHistory } from "react-router-dom";

function Logout(props) {
	let history = useHistory();
	localStorage.removeItem("token");
	history.push("/");
	props.auth.notLoggedIn();
	return <></>;
}

export default Logout;

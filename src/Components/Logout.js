import React from "react";
import { useHistory } from "react-router-dom";

function Logout(props) {
	let history = useHistory();
	localStorage.removeItem("token");
	props.auth.notLoggedIn();
	history.push("/");
	return <></>;
}

export default Logout;

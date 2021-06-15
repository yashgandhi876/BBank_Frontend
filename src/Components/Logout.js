import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";
if (typeof window !== "undefined") {
	injectStyle();
}
function Logout(props) {
	let history = useHistory();
	useEffect(() => {
		localStorage.removeItem("token");
		toast.success("Logged out successfully", {
			position: "bottom-right",
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		setTimeout(() => {
			props.auth.notLoggedIn();
			history.push("/");
		}, 1000);
	}, []);
	return (
		<>
			<ToastContainer position="bottom-right" />
		</>
	);
}

export default Logout;

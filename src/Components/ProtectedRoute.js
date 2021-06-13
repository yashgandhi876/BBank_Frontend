import React from "react";
import { Route } from "react-router-dom";
import NotAuth from "./NotAuth";

const ProtectedRoute = ({ component: Component, login, access, ...rest }) => {
    //    console.log("login: " + login);
	if (access === "both") {
		if (login) {
			return (
				<Route
					{...rest}
					render={(props) => {
						return <Component {...props} />;
					}}
				/>
			);
		} else {
			return <Route render={() => <NotAuth />} />;
		}
	} else if (access === login) {
		return (
			<Route
				{...rest}
				render={(props) => {
					return <Component {...props} />;
				}}
			/>
		);
	} else {
		return <Route render={() => <NotAuth />} />;
	}
}


export default ProtectedRoute;
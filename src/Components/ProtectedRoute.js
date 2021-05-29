import React from "react";
import { Route } from "react-router-dom";
import NotAuth from "./NotAuth";

export const ProtectedRoute = ({ component: Component, login, ...rest }) => {
	console.log("login: " + login);
	if (login) {
		return (
			<Route
				{...rest}
				render={(props) => {
					return <Component {...props} />;
				}}
			/>
		);
	}else{
        return (
			<Route
				render={()=><NotAuth />}
			/>
		);
    }
};

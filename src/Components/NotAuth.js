import React from "react";

function NotAuth() {
	return (
		<div
			style={{ height: "70vh", alignContent: "center", width: "80%" }}
			className="flex my-4 mx-auto p-4 justify-content-center align-items-center"
		>
			<div
				style={{ alignItem: "center", width: "80%", display: "flex" }}
				className="justify-content-center h-100 align-items-center m-auto p-4"
			>
				<h1 className="align-self-center shadow p-5 mb-5 bg-white rounded">
					You are not authorized for this page
				</h1>
			</div>
		</div>
	);
}

export default NotAuth;

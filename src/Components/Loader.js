import React from "react";

function Loader() {
	return (
		<div
			style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}
			className="text-center"
		>
			<div className="spinner-border" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
}

export default Loader;

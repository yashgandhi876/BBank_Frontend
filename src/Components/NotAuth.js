import React from "react";
import Footer from "./Layout/Footer";
import { Link } from "react-router-dom";

function NotAuth() {
	return (
		<div>
			<div
				style={{ height: "70vh", alignContent: "center", width: "80%", display:"flex", flexDirection:"column", justifyContent:"center" }}
				className="my-4 mx-auto p-4 align-items-center"
			>
				{/* <div
					style={{ alignItem: "center", width: "80%", display: "flex" }}
					className="justify-content-center h-100 align-items-center m-auto p-4"
				>
					<h1 className="align-self-center shadow p-5 mb-5 bg-white rounded">
						You are not authorized for this page
					</h1>
				</div> */}
				{/* <section > */}
				<h1>Hey! Looks like you haven't logged in,</h1>
					<h4 >
					Please sign in or register to view this page.
					</h4>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<div className="m-3">
							<Link className="btn btn-primary" to="/signup">
								Register
							</Link>
						</div>
						<div className="m-3">
							<Link className="btn btn-primary" to="/login">
								Login
							</Link>
						</div>
					</div>
				{/* </section> */}
			</div>
			<div style={{ width: "100%", marginTop: "10px", paddingTop: "10px" }} className="m-0">
				<Footer />
			</div>
		</div>
	);
}

export default NotAuth;

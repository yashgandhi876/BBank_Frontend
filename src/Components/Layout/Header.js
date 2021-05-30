import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
	const isLoggedIn = props.isLoggedIn;

	function renderConditionallyNavBarElem() {
		if (isLoggedIn === "bbank") {
			return (
				<ul className="nav navbar-nav navbar-right">
					<li className="nav-item">
						<Link className="nav-link" to="/updatestocks">
							Update Blood Stocks
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/registerbloodcamps">
							register blood camp
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/logout">
							Logout
						</Link>
					</li>
				</ul>
			);
		} else if (isLoggedIn === "user") {
			return (
				<ul className="nav navbar-nav navbar-right">
					<li className="nav-item">
						<Link className="nav-link" to="#">
							User's Name
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/logout">
							Logout
						</Link>
					</li>
				</ul>
			);
		} else {
			return (
				<ul className="nav navbar-nav navbar-right">
					<li className="nav-item">
						<Link className="nav-link" to="/signup">
							Sign Up
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/login">
							Log in
						</Link>
					</li>
				</ul>
			);
		}
	}

	// const userIsAuthenticated = (
	//     <div className={"collapse navbar-collapse"} id="mobile-nav">
	//         <ul className={"navbar-nav mr-auto"}>
	//             <li className={"nav-item"}>
	//                 Dashboard
	//             </li>
	//         </ul>
	//         <ul className={"navbar-nav ml-auto"}>
	//             <li className={"nav-item"}>
	//                 <i className="fas fa-user-circle mr-1"/>USER's Name
	//             </li>
	//             <li className={"nav-item"}>
	//                 Logout
	//             </li>
	//         </ul>
	//     </div>);
	//
	// const userNotAuthenticated = (
	//     <div className={"collapse navbar-collapse"} id="mobile-nav">
	//         <ul className={"navbar-nav ml-auto"}>
	//             <li className={"nav-item"}>
	//                 Sign Up
	//             </li>
	//             <li className={"nav-item"}>
	//                 Login
	//             </li>
	//         </ul>
	//     </div>);
	return (
		<section id={"header"}>
			<div className={"navbar-header"}>
				<nav className={"navbar navbar-toggleable-md navbar-expand-md navbar-dark "}>
					<button
						className="navbar-toggler navbar-toggler-right"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbar"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<Link className="navbar-brand" style={{ width: "30%", margin: "auto", padding: "0" }} to="/">
						BBank
					</Link>

					{/*</div>*/}
					<div className={"collapse navbar-collapse"} id="mobile-nav">
						<ul className="nav navbar-nav">
							<li className="active nav-item">
								<Link className="nav-link " to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/bloodcamps">
									Blood Donation Camps
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/bloodbanks">
									Blood Banks
								</Link>
							</li>
						</ul>
						{renderConditionallyNavBarElem()}
					</div>
				</nav>
			</div>
		</section>
	);
};

export default Header;

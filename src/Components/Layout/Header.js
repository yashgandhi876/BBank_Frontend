import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
	const isLoggedIn = props.isLoggedIn;

	function renderConditionallyNavBarElem() {
		if (isLoggedIn === "bbank") {
			return (
				<ul className="nav navbar-nav navbar-right">
					<li className="nav-item">
						<Link style={{ color: "white" }} className="nav-link" to="/updatestocks">
							Update Blood Stock
						</Link>
					</li>
					<li className="nav-item">
						<Link style={{ color: "white" }} className="nav-link" to="/registerbloodcamps">
							Register Blood Camp
						</Link>
					</li>
					<li className="nav-item">
						<Link style={{ color: "white" }} className="nav-link" to="/profile">
							Update Profile
						</Link>
					</li>
					<li className="nav-item">
						<Link style={{ color: "white" }} className="nav-link" to="/logout">
							Logout
						</Link>
					</li>
				</ul>
			);
		} else if (isLoggedIn === "user") {
			return (
				<ul className="nav navbar-nav navbar-right">
					<li className="nav-item">
						<Link style={{ color: "white" }} className="nav-link" to="/registerplasmadonors">
							Register Plasma Donor
						</Link>
					</li>
					<li className="nav-item">
						<Link style={{ color: "white" }} className="nav-link" to="/profile">
							Update Profile
						</Link>
					</li>
					<li className="nav-item">
						<Link style={{ color: "white" }} className="nav-link" to="/logout">
							Logout
						</Link>
					</li>
				</ul>
			);
		} else if (isLoggedIn === "admin") {
			return (
				<ul className="nav navbar-nav navbar-right">
					<li className="nav-item">
						<Link style={{ color: "white" }} className="nav-link" to="/validatebbanks">
							Validate Blood Banks
						</Link>
					</li>
					<li className="nav-item">
						<Link style={{ color: "white" }} className="nav-link" to="/logout">
							Logout
						</Link>
					</li>
				</ul>
			);
		} else {
			return (
				<ul className="nav navbar-nav navbar-right">
					<li className="nav-item">
						<Link style={{ color: "white" }} className="nav-link" to="/signup">
							Sign Up
						</Link>
					</li>
					<li className="nav-item">
						<Link style={{ color: "white" }} className="nav-link" to="/login">
							Log In
						</Link>
					</li>
				</ul>
			);
		}
	}

	return (
		<section id={"header"} style={{
			// position: "fixed",
			// zIndex: 1000,
			// margin: "0 auto 10px auto",

		}}>
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
					<Link className="navbar-brand" style={{ width: "10%", margin: "auto", padding: "0", fontSize: "30px" }} to="/">
						BBank
					</Link>

					{/*</div>*/}
					<div className={"collapse navbar-collapse"} id="mobile-nav">
						<ul className="nav navbar-nav">
							<li className="active nav-item">
								<Link style={{ color: "white" }} className="nav-link " to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link style={{ color: "white" }} className="nav-link" to="/bloodcamps">
									Blood Camps
								</Link>
							</li>
							<li className="nav-item">
								<Link style={{ color: "white" }} className="nav-link" to="/bloodbanks">
									Blood Banks
								</Link>
							</li>
							<li className="nav-item">
								<Link style={{ color: "white" }} className="nav-link" to="/bloodstocks">
									Blood Stocks
								</Link>
							</li>
							<li className="nav-item">
								<Link style={{ color: "white" }} className="nav-link" to="/plasmadonors">
									Plasma Donors
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

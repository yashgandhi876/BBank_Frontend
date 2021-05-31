import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faFacebookMessenger, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

function Landing() {
	const [counts, setCounts] = useState({
		users: 0,
		bbanks: 0,
		camps: 0,
		stocks: 0,
	});

	useEffect(() => {
		async function getData() {
			try {
				let data = await axios.get("/bloodbank/count");
				setCounts(data.data);
			} catch (e) {
				console.dir(e);
			}
		}
		getData();
	}, []);

	return (
		<div className="landing-div">
			<section className={"white-section"} id="title">
				<div
					style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
					className={"container-fluid m-0 p-0"}
				>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "100%",
							padding: "0",
							margin: "0",
							backgroundColor: "rgba(0,0,0,0.6)",
						}}
						className="landing row w-100"
					>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								// height: "100%",
								padding: "0",
								margin: "0",
							}}
							className="col-lg-12"
						>
							<h1 style={{width:"75%", margin:"auto"}} className="big-heading">
								If you’re a blood donor, you’re a hero to someone, somewhere, who received your
								gracious gift of life.
							</h1>
						</div>
					</div>
				</div>
			</section>

			<section className={"white-section"} id={"features"}>
				<h1>Our numbers</h1>
				<div className="row">
					<div className="col-sm-6 col-md-4 col-lg-2  d-flex align-items-stretch">
						<div className="card">
							<div className="card-body">
								<h1 className="card-title">{counts.users}</h1>
								<p className="card-text">Registered Users</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-2 d-flex align-items-stretch">
						<div className="card">
							<div className="card-body">
								<h1 className="card-title">{counts.bbanks}</h1>
								<p className="card-text">Blood Banks Partners</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-2 d-flex align-items-stretch">
						<div className="card">
							<div className="card-body">
								<h1 className="card-title">{counts.camps}</h1>
								<p className="card-text">Active Blood Camps</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-2 d-flex align-items-stretch">
						<div className="card">
							<div className="card-body">
								<h1 className="card-title">{counts.stocks}</h1>
								<p className="card-text">Total Blood Stock</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={"colored-section  content-row"} id={"services"}>
				<h1>Our Services</h1>
				<p id={"services-description"}>
					BBank aims to connect, digitize and streamline the work flow of all blood banks across the country
				</p>
				<div className="row">
					<div className="col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Blood Availability</h5>
								<p className="card-text">Get status of available blood stock in blood banks.</p>
								<Link to="/" className="btn btn-primary">
									Check Availability
								</Link>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Nearby Blood Banks</h5>
								<p className="card-text">Get contact details of blood banks in your area.</p>
								<Link className="btn btn-primary" to="/bloodbanks">
									Blood Banks
								</Link>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Blood Camps</h5>
								<p className="card-text">Check blood camps so you can also donate blood.</p>
								<Link to="/bloodcamps" className="btn btn-primary">
									Blood Donation Camps
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={"white-section"} id={"join-us"}>
				<h1>Join our mission</h1>
				<p id={"join-us-description"}>
					Join us as we connect more people to our platform, and play your part in saving thousands of lives.
				</p>
				<div className={"row"}>
					<div className="col-lg-6 d-flex align-items-stretch justify-content-center">
						<Link className="btn btn-primary" to="/signup">
							Register
						</Link>
					</div>
					<div className="col-lg-6 d-flex align-items-stretch justify-content-center">
						<Link className="btn btn-primary" to="/login">
							Login
						</Link>
					</div>
				</div>
			</section>
			{/*Footer Section: Temporarily here, need to move to its own seperate component*/}
			<section id="footer">
				<div className={"empty-container"} />

				<footer className={"container"}>
					<div className="row text-center text-xs-center text-sm-left text-md-left justify-content-center">
						<div className="col-md-4 col-xl-5 p-2 flex-fill bd-highlight mb-5 mb-md-0">
							<h3>BBank</h3>
							<p>
								BBank is an application to connect all stakeholders involved in the process of blood
								transfusion and digitize the process to streamline the workflow of blood banks across
								the nation.
							</p>
							<p>©2021 BBank</p>
						</div>
						<div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
							<h5 className="footer-quick-links">Our Services</h5>
							<ul className={"footer-list"}>
								<li className={"no-bullets"}>Online Donation Appointment</li>
								<li className={"no-bullets"}>Blood Request</li>
								<li className={"no-bullets"}>Nearby Blood Banks</li>
								<li className={"no-bullets"}>Stocks Availability</li>
								<li className={"no-bullets"}>Upcoming Camps</li>
								<li className={"no-bullets"}>My Donation History</li>
							</ul>
						</div>
						<div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
							<h5 className="footer-quick-links">Get Help</h5>
							<ul className={"footer-list"}>
								<li className={"no-bullets"}>Blood Donation</li>
								<li className={"no-bullets"}>FAQs</li>
								<li className={"no-bullets"}>Contact Us</li>
							</ul>
						</div>
					</div>
					<div>
						<a href={"https://www.twitter.com"} target={"/"}>
							<FontAwesomeIcon className={"social-icon fa-1x social"} icon={faTwitter} />
						</a>
						<a href={"https://www.facebook.com"} target={"/"}>
							<FontAwesomeIcon className={"social-icon fa-1x social"} icon={faFacebookF} />
						</a>
						<a href={"https://www.instagram.com"} target={"/"}>
							<FontAwesomeIcon className={"social-icon fa-1x social"} icon={faInstagram} />
						</a>
						<a href="mailto: abc@example.com">
							<FontAwesomeIcon className={"social-icon fa-1x social"} icon={faFacebookMessenger} />
						</a>
					</div>
				</footer>
			</section>
		</div>
	);
}

export default Landing;

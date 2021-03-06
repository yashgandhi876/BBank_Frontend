import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Landing.css"
function Landing() {
	const [counts, setCounts] = useState({
		users: 0,
		bbanks: 0,
		camps: 0,
		stocks: 0,
		plasmadonors: 0
	});

	useEffect(() => {
		async function getData() {
			try {
				let data = await axios.get("/bloodbank/count");
				// console.log(data.data);
				let obj = {
					users: data.data.users || 0,
					bbanks: data.data.bbanks || 0,
					camps: data.data.camps || 0,
					stocks: data.data.stocks || 0,
					plasmadonors: data.data.plasmadonors || 0
				};
				setCounts(obj);
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
							<h1 style={{ width: "75%", margin: "auto" }} className="big-heading">
								If you’re a blood donor, you’re a hero to someone, somewhere, who received your gracious
								gift of life.
							</h1>
						</div>
					</div>
				</div>
			</section>

			<section className={"white-section"} id={"features"} style={{ margin: "50px auto" }}>
				<h1>Our numbers</h1>
				<div className="row">
					<div className="col-sm-6 col-md-4 col-lg-2  d-flex align-items-stretch">
						<div className="card showtotal">
							<div className="card-body" style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-evenly"
							}}>
								<h1 className="card-title">{counts.users}</h1>
								<p className="card-text">Registered Users</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6  col-md-4 col-lg-2 d-flex align-items-stretch">
						<div className="card  showtotal">
							<div className="card-body" style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-evenly"
							}}>
								<h1 className="card-title">{counts.bbanks}</h1>
								<p className="card-text">Blood Banks Partners</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-2 d-flex align-items-stretch">
						<div className="card showtotal">
							<div className="card-body" style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-evenly"
							}}>
								<h1 className="card-title">{counts.camps}</h1>
								<p className="card-text">Active Blood Camps</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-2 d-flex align-items-stretch">
						<div className="card showtotal">
							<div className="card-body" style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-evenly"
							}}>
								<h1 className="card-title">{counts.plasmadonors}</h1>
								<p className="card-text">Total Plasma Donors</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-2 d-flex align-items-stretch">
						<div className="card showtotal">
							<div className="card-body" style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-evenly"
							}}>
								<h1 className="card-title">{counts.stocks}</h1>
								<p className="card-text">Total Blood Stock</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={"colored-section  content-row"} id={"services"}>
				<h1 className="p-5">Our Services</h1>
				<h4 id={"services-description"}>
					BBank aims to connect, digitize and streamline the work flow of all blood banks across the country
				</h4>
				<div className="row">
					<div className="showcard col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch">
						<div className="card">
							<div className="card-body" style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-evenly"
							}}>
								<h5 className="card-title">Blood Availability</h5>
								<p className="card-text">Get status of available blood stock in blood banks.</p>
								<Link to="/bloodstocks" className="btn btn-primary">
									Check Availability
								</Link>
							</div>
						</div>
					</div>
					<div className="showcard col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch">
						<div className="card">
							<div className="card-body" style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-evenly"
							}}>
								<h5 className="card-title">Nearby Blood Banks</h5>
								<p className="card-text">Get contact details of blood banks in your area.</p>
								<Link className="btn btn-primary" to="/bloodbanks">
									Blood Banks
								</Link>
							</div>
						</div>
					</div>
					<div className="showcard col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch">
						<div className="card">
							<div className="card-body" style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-evenly"
							}}>
								<h5 className="card-title">Blood Camps</h5>
								<p className="card-text">Check blood camps so you can also donate blood.</p>
								<Link to="/bloodcamps" className="btn btn-primary">
									Donation Camps
								</Link>
							</div>
						</div>
					</div>
					<div className="showcard col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch">
						<div className="card">
							<div className="card-body" style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-evenly"
							}}>
								<h5 className="card-title">Plasma Donors</h5>
								<p className="card-text">Check plasma donors.</p>
								<Link to="/plasmadonors" className="btn btn-primary">
									Plasma Donors
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
			<section className="mt-5" id="footer" style={{ backgroundColor: "#dc143c", color: "rgba(255,255,255,0.9)" }}>
				<div className={"empty-container"} />

				<footer className={"container"}>
					<div className="row text-center text-xs-center text-sm-left text-md-left justify-content-center">
						<div className="col-md-4 col-xl-5 p-2 flex-fill bd-highlight mb-5 mb-md-0">
							<h3 style={{ color: "white" }}>BBank</h3>
							<p style={{ color: "white" }}>
								BBank is an application to connect all stakeholders involved in the process of blood
								transfusion and digitize the process to streamline the workflow of blood banks across
								the nation.
							</p>
							<p style={{ color: "white" }}>
								@2021 BBank
							</p>
						</div>
						<div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
							<h5 className="footer-quick-links" style={{ color: "white" }}>Our Services</h5>
							<ul className={"footer-list"}>
								<li className={"no-bullets"}><Link style={{ color: "white" }} to="/bloodbanks">Nearby Blood Banks</Link></li>
								<li className={"no-bullets"}><Link style={{ color: "white" }} to="/bloodstocks">Blood Stocks Availability</Link></li>
								<li className={"no-bullets"}><Link style={{ color: "white" }} to="/bloodcamps">Blood Donation Camps</Link></li>
								<li className={"no-bullets"}><Link style={{ color: "white" }} to="/plasmadonors">Plasma Donors</Link></li>
							</ul>
						</div>
						<div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
							<h5 className="footer-quick-links" style={{ color: "white" }}>Get Help</h5>
							<ul className={"footer-list"}>
								<li className={"no-bullets"} style={{ color: "white" }}>Blood Donation</li>
								<li className={"no-bullets"} style={{ color: "white" }}>FAQs</li>
								<li className={"no-bullets"} style={{ color: "white" }}>Contact Us</li>
							</ul>
						</div>
					</div>
					<div className="mb-4">
						<p className="mb-4 p-4" style={{ fontSize: "20px" }}>
							Developed by {"  "}
							<a
								target="_blank" style={{ color: "white" }}
								rel="noopener noreferrer"
								href="https://www.linkedin.com/in/yashgandhi876"
							>
								Yash
							</a>
							,{"  "}
							<a
								target="_blank" style={{ color: "white" }}
								rel="noopener noreferrer"
								href="https://www.linkedin.com/in/shriram-rajdeo-b85677193/"
							>
								Shriram
							</a>
							,{"  "}
							<a
								target="_blank" style={{ color: "white" }}
								rel="noopener noreferrer"
								href="https://www.linkedin.com/in/harshal-dhake/"
							>
								Harshal
							</a>
							{" and "}
							<a target="_blank" style={{ color: "white" }} rel="noopener noreferrer" href="https://www.linkedin.com/in/gopal-mali/">
								Gopal
							</a>
						</p>
					</div>
				</footer>
			</section>
		</div>
	);
}

export default Landing;

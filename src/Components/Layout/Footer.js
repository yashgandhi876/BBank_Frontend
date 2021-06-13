import React from "react";
import { Link } from "react-router-dom";


function Footer() {
	return (
		<section id="footer" style={{ backgroundColor: "red", color: "rgba(255,255,255,0.9)", position: "relative", left:"0" }}>
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
					<p className="mb-4 p-4">
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
	);
}

export default Footer;

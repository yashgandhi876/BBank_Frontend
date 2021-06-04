import axios from "axios";
import React, { useState, useEffect } from "react";
import "./BloodCamps.css";
import NoDataFound from "./NoDataFound";

function BloodCamps(props) {
	const [active, setActive] = useState(false);
	const [camps, setCamps] = useState([]);

	function handleClick() {
		setActive(true);
	}

	useEffect(() => {
		console.log("in get camp");
		async function getData() {
			try {
				let { data } = await axios.get("/user/getCamp");
				setCamps(Array.from(data));
				// let arr = Array.from(data);
			} catch (e) {
				console.dir(e);
			}
		}
		getData();
	}, []);

	return camps.length !== 0 ? (
		camps.map((temp, index) => (
			<div key={index} className="bloodcamps">
				<div className="campCard">
					<div className="data">
						<h1>{temp.name}</h1>
						<p>{`Address: ${temp.address}, ${temp.city}, ${temp.state}, ${temp.country}, ${temp.pincode}`}</p>
						<p>{`Date: ${temp.fromDate} to ${temp.toDate}`}</p>
						<p>Phone Number: {temp.mobile}</p>
						<p>Email: {temp.emailId}</p>
					</div>
					<div className="inter">
						<a
							style={{ textDecoration: "none" }}
							href={`mailto:${temp.emailId}?subject=Interested in blood donation camp&body=Hi, %0d%0aI am <YOUR NAME> and I'm interested in your ${temp.name} that is to be organised from ${temp.fromDate} to ${temp.toDate} in ${temp.city}.  My blood group is <BLOOD GROUP> and I  am willing to volunteer to donate at your camp and help someone in need. %0d%0aThanks.`}
						>
							<button
								onClick={handleClick}
								style={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "start",
									width: "auto",
								}}
								disabled={true}
								className="interestedbtn"
							>
								<h4>Interested ?????</h4>
							</button>
						</a>
					</div>
				</div>
			</div>
		))
	) : (
		<NoDataFound />
	);
}

export default BloodCamps;

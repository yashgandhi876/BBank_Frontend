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
					</div>
					<div className="inter">
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
							<h4>Interested ?</h4>
							<p>
								Register here: {temp.emailId}
								{/* <i className="ml-3 fa fa-hand-peace-o" style={{ fontSize: "28px", color: "white" }}></i> */}
							</p>
						</button>
					</div>
				</div>
			</div>
		))
	) : (
		<NoDataFound />
	);
}

export default BloodCamps;

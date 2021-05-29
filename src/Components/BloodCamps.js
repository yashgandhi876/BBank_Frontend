import axios from "axios";
import React, { useState, useEffect } from "react";
import "./BloodCamps.css";

function BloodCamps(props) {
	const [active, setActive] = useState(false);
	const [camps, setCamps] = useState([]);

	function handleClick() {
		setActive(true);
	}

	useEffect(() => {
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

	return camps.map((temp) => (
		<div className="bloodcamps">
			<div className="campCard">
				<div className="data">
					<h1>{temp.name}</h1>
					<p>{`Address: ${temp.address}, ${temp.city}, ${temp.state}, ${temp.country}, ${temp.pincode}`}</p>
					<p>{`Date: ${temp.fromDate} to ${temp.toDate}`}</p>
					<p>Phone Number: {temp.mobile}</p>
					<p>Email: {temp.emailId}</p>
				</div>
				<div className="inter">
					<button onClick={handleClick} disabled={active} className="interestedbtn">
						Interested
						<i className="ml-3 fa fa-hand-peace-o" style={{ fontSize: "28px", color: "white" }}></i>
					</button>
				</div>
			</div>
		</div>
	));
}

export default BloodCamps;

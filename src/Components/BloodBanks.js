import axios from "axios";
import React, { useState, useEffect } from "react";
import "./BloodCamps.css";

function BloodBanks() {
	const [active, setActive] = useState(false);
	const [banks, setBanks] = useState([]);

	function handleClick() {
		setActive(true);
	}

	useEffect(() => {
		async function getData() {
			try {
				let { data } = await axios.get("/user/getCamps");
				setBanks(Array.from(data));
			} catch (e) {
				console.log("not autheticated user");
				console.dir(e);
			}
		}
		getData();
	}, []);

	return banks.map((temp) => (
		<div className="bloodcamps">
			<div className="campCard">
				<div className="data">
					<h1>{temp.name}</h1>
					<p>{`Address: ${temp.address}, ${temp.city}, ${temp.state}, ${temp.country}, ${temp.pincode}`}</p>``
					<p>Phone Number: {temp.mobile}</p>
					<p>Email: {temp.emailId}</p>
				</div>
			</div>
		</div>
	));
}

export default BloodBanks;

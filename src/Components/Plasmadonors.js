import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BloodCamps.css";

function Plasmadonors() {
	const [palsma, setPlasma] = useState([]);

	useEffect(() => {
		async function getData() {
			try {
				let { data } = await axios.get("/user/getPlasmaDonors");
				console.log(data);
				setPlasma(Array.from(data));
			} catch (e) {
				console.log("not autheticated user");
				console.dir(e);
			}
		}
		getData();
	}, []);

	return palsma.map((temp, index) => (
		<div key={index} style={{ display: "flex", justifyContent: "space-between" }} className="bloodcamps">
			<div className="campCard">
				<div className="data">
					<h1>{temp.name}</h1>
					<p>{`Address: ${temp.address}`}</p>
					<p>{`Blood Group: ${temp.bloodGr}`}</p>
					<p>{`Date of Recovery: ${temp.dateOfRecovery}`}</p>
				</div>
				<div className="inter">
					<div className="interestedbtn pointer" style={{display:"flex", flexDirection:"column",alignItems:"start"}}>
						Contact Details:
						<p>Phone Number: {temp.mobile}</p>
						<p>Email: {temp.emailId}</p>
					</div>
				</div>
			</div>
		</div>
	));
}

export default Plasmadonors;

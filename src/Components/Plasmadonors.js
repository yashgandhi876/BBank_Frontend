import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BloodCamps.css";
import NoDataFound from "./NoDataFound";
import Footer from "./Layout/Footer";

function Plasmadonors() {
	const [palsma, setPlasma] = useState([]);

	useEffect(() => {
		async function getData() {
			try {
				let { data } = await axios.get("/user/getPlasmaDonors");
				// console.log(data);
				setPlasma(Array.from(data));
			} catch (e) {
				// console.log("not autheticated user");
				// console.dir(e);
			}
		}
		getData();
	}, []);

	return (
		<div>
			{
				palsma.length !== 0 ? (
					palsma.map((temp, index) => (
						<div key={index} style={{ display: "flex", justifyContent: "space-between" }} className="bloodcamps">
							<div className="campCard">
								<div className="data">
									<h1>{temp.name}</h1>
									<p>{`Address: ${temp.address}`}</p>
									<p>{`Blood Group: ${temp.bloodGr}`}</p>
									<p>{`Date of Recovery: ${temp.dateOfRecovery}`}</p>
									<p>Phone Number: {temp.mobile}</p>
								</div>
								<div className="inter">
									<div
										className="interestedbtn pointer px-4"
										style={{ display: "flex", flexDirection: "column", alignItems: "start", width: "auto" }}
									>
										Contact Details:
										<p>Email: {temp.emailId}</p>
									</div>
								</div>
							</div>
						</div>
					))
				) : <NoDataFound />
			}
			<div style={{ width: "100%", marginTop: "10px", paddingTop: "10px" }} className="m-0">
				<Footer />
			</div>
		</div>
	)
}

export default Plasmadonors;

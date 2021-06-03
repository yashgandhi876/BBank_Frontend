import axios from "axios";
import React, { useState, useEffect } from "react";
import StockModel from "./StockModel";
import "./BloodCamps.css";
import NoDataFound from "./NoDataFound";

function BloodBanks({ id, updateId }) {
	const [banks, setBanks] = useState([]);
	const [showModel, setShowModel] = useState(false);
	function handleClick(id) {
		setShowModel(true);
		updateId(id);
	}

	useEffect(() => {
		async function getData() {
			try {
				let { data } = await axios.get("/user/getBloodBanks");
				console.log("data from blood bank use effect ");
				console.log(data);
				setBanks(Array.from(data));
			} catch (e) {
				console.log("not autheticated user");
				console.dir(e);
			}
		}
		getData();
	}, []);

	function hideModel() {
		setShowModel(false);
	}

	return banks.length !== 0 ? (
		banks.map((temp) => (
			<div key={temp.bankId} className="bloodcamps">
				<div className="campCard">
					<div className="data">
						<h1>{temp.name}</h1>
						<p>{`Address: ${temp.address}, ${temp.city}, ${temp.state}, ${temp.country}, ${temp.pincode}`}</p>
						<p>Phone Number: {temp.mobile}</p>
						<p>Email: {temp.emailId}</p>
					</div>
					<div className="inter">
						<button onClick={() => handleClick(temp.bankId)} className="interestedbtn pointer">
							Show Blood Stocks
						</button>
					</div>
				</div>
				{showModel && <StockModel id={id} hideModel={hideModel} />}
			</div>
		))
	) : (
		<NoDataFound />
	);
}

export default BloodBanks;

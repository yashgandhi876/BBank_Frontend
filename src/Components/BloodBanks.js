import axios from "axios";
import React, { useState, useEffect } from "react";
import StockModel from "./StockModel";
import "./BloodCamps.css";
import NoDataFound from "./NoDataFound";
import Footer from "./Layout/Footer";

function BloodBanks({ id, updateId }) {
	const [allBank, setAllBanks] = useState([]);
	const [banks, setBanks] = useState([]);
	const [showModel, setShowModel] = useState(false);
	const [search, setSearch] = useState("");
	const [cat, setCat] = useState("name");

	function handleClick(id) {
		setShowModel(true);
		updateId(id);
	}

	useEffect(() => {
		console.log("here is use effect");
		async function getData() {
			try {
				let { data } = await axios.get("/user/getBloodBanks");
				console.log("data from blood bank use effect ");
				console.log(data);
				setAllBanks(Array.from(data));
				setBanks(Array.from(data));
			} catch (e) {
				// console.log("not autheticated user");
				console.dir(e);
			}
		}
		getData();
	}, []);

	function hideModel() {
		setShowModel(false);
	}

	function searchChangeHandler(e) {
		setSearch(e.target.value);
		console.log(cat);
		const bbanks = allBank.filter(bank => {
			console.log(bank)
			if (bank[`${cat}`].toLowerCase().includes(e.target.value)) {
				return bank;
			}
		})

		setBanks(bbanks);

	}

	return (
		<div>
			<div style={{ display: "flex", width: "40%", justifyContent: "start", alignItems: "center", margin: "20px auto" }}>
				<div className="cat" style={{
					alignItems: "center",
					display: "flex", margin: "10px", height: "40px"
				}}>
					<select
						style={{ height: "32px", padding: "5px" }}
						className="catdropdown"
						onChange={(e) => {
							setCat(e.target.value);
						}}
						name="bloodgroup"
						id=""
					>
						<option value="name">Name</option>
						<option value="mobile">Mobile Number</option>
						<option value="emailId">Email</option>
						<option value="city">City</option>
						<option value="state">State</option>
						<option value="country">Country</option>
						<option value="pincode">pincode</option>
					</select>
					<br />
				</div>
				<div style={{ widht: "13%" }} className="input" >
					<input value={search} onChange={searchChangeHandler} style={{ padding: "2px", width: "190%", outline: "none" }} className="inputBox" placeholder="Search Blood Bank" type="search" />
				</div>
			</div>
			{
				banks.length !== 0 ? (
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
					))) : <NoDataFound />
			}

			<div style={{ width: "100%", marginTop: "10px", paddingTop: "10px" }} className="m-0">
				<Footer />
			</div>
		</div>
	)
}

export default BloodBanks;

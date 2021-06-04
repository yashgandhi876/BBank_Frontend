import React, { useState } from "react";
import CountryData from "../assets/json/countries.json";
import StateData from "../assets/json/states.json";
import CityData from "../assets/json/cities.json";
import "./RegisterBloodCamps.css";
import axios from "axios";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";

if (typeof window !== "undefined") {
	injectStyle();
}
function RegisterBloodCamps({email}) {
	let history = useHistory();
	console.log(email);
	const [state, setState] = useState({
		bloodCampName: "",
		email: email,
		mobileNumber: "",
		fromDate: "",
		toDate: "",
		country: "",
		state: "",
		city: "",
		address: "",
		pincode: "",
		countryCode: 0,
		stateCode: 0,
		cityCode: 0,
	});

	async function submitHandler() {
		// add code

		try {
			const campData = {
				name: "" + state.bloodCampName,
				email: "" + state.email,
				mobile: "" + state.mobileNumber,
				pincode: "" + state.pincode,
				city: "" + state.city,
				state: "" + state.state,
				country: "" + state.country,
				fromDate: "" + state.fromDate,
				toDate: "" + state.toDate,
				address: "" + state.address,
			};
			console.log(campData);
			const result = await axios.post("/bloodbank/organizeCamp", campData);
			console.log(result);
			toast.success("registered successfully", {
				position: "bottom-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});

			setTimeout(() => {

				history.push('/bloodcamps')
			}, 2000);
		} catch (e) {
			console.log("youarehere");
			console.dir(e);
			toast.error(e.response.data.message, {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	}

	function handleCountry(e) {
		setState({ ...state, country: e.target.value, countryCode: 101 });
	}

	function handleState(e) {
		setState({ ...state, state: e.target.value, stateCode: e.target.selectedIndex });
	}

	function handleCity(e) {
		setState({ ...state, city: e.target.value, cityCode: e.target.selectedIndex });
	}

	function listState(countryCode) {
		let newStateArr = StateData.states.filter((state) => state.country_id == countryCode);

		return (
			<select className="locationdropdown" name="State" onChange={handleState} id="" required>
				<option>Select State</option>
				{newStateArr.map((state) => (
					<option key={state.id} countryCode={state.id} value={state.name}>
						{" "}
						{state.name}
					</option>
				))}
			</select>
		);
	}

	function listCity(stateCode) {
		let newCityArr = CityData.cities.filter((city) => city.state_id == stateCode);

		return (
			<select className="locationdropdown W-80" name="City" onChange={handleCity} id="" required>
				<option>Select City</option>
				{newCityArr.map((city) => (
					<option key={city.id} countryCode={city.id} value={city.name}>
						{" "}
						{city.name}
					</option>
				))}
			</select>
		);
	}

	return (
		<div className="registration">
			<input
				type="text"
				className="inputBox"
				value={state.bloodCampName}
				onChange={(e) => {
					setState({ ...state, bloodCampName: e.target.value });
				}}
				placeholder="Blood Camp Name"
				required
			/>
			<br />
			<input
				type="email"
				className="inputBox"
				value={state.email}
				// onChange={(e) => {
				// 	setState({ ...state, email: e.target.value });
				// }}
				readOnly
				placeholder="Email"
				required
			/>
			<br />
			<input
				type="tel"
				className="inputBox"
				value={state.mobileNumber}
				onChange={(e) => {
					setState({ ...state, mobileNumber: e.target.value });
				}}
				placeholder="Phone Number"
				required
			/>
			<br />
			<div className="inputBox" style={{ display: "flex", justifyContent: "start", margin: "4PX auto" }}>
				<p
					style={{ display: "flex", alignItems: "center", margin: "0px 2px" }}
					className="my-0 p-0 inputbox"
					htmlFor=""
				>
					Camp starts on
				</p>
				<input
					type="date"
					className="inputBox"
					style={{
						height: "40px",
						margin: "0 auto",
						width: "80%",
					}}
					value={state.fromDate}
					onChange={(e) => {
						setState({ ...state, fromDate: e.target.value });
					}}
					placeholder="Date"
					required
				/>
			</div>
			<div className="inputBox" style={{ display: "flex", justifyContent: "start", margin: "4PX auto" }}>
				<p
					style={{ display: "flex", alignItems: "center", margin: "0px 2px" }}
					className="my-0 p-0 inputbox"
					htmlFor=""
				>
					Camp{ " "} ends  on
				</p>
				<input
					type="date"
					className="inputBox"
					style={{
						height: "40px",
						margin: "0 auto",
						width: "80%",
					}}
					value={state.toDate}
					onChange={(e) => {
						setState({ ...state, toDate: e.target.value });
					}}
					placeholder="Date"
					required
				/>
			</div>
			<input
				type="text"
				className="inputBox"
				value={state.address}
				onChange={(e) => {
					setState({ ...state, address: e.target.value });
				}}
				placeholder="Address"
				required
			/>
			<br />
			<input
				type="number"
				className="inputBox"
				value={state.pincode}
				onChange={(e) => {
					setState({ ...state, pincode: e.target.value });
				}}
				placeholder="Pincode"
				required
			/>
			<br />
			<select className="locationdropdown" name="Country" onChange={handleCountry} id="" required>
				<option value="">Select Country</option>
				{CountryData.countries.map((country) => (
					<option key={country.id} countryCode={country.id} value={country.name}>
						{" "}
						{country.name}
					</option>
				))}
			</select>
			<br />
			{listState(state.countryCode)}
			<br />
			{listCity(state.stateCode)}
			<br />
			<button onClick={submitHandler} className="submitbtn" type="submit">
				Register Camp
			</button>
			<ToastContainer position="bottom-right" />
		</div>
	);
}

export default RegisterBloodCamps;

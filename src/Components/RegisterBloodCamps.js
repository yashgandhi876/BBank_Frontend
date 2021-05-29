import React, { Component } from "react";
import CountryData from "../assets/json/countries.json";
import StateData from "../assets/json/states.json";
import CityData from "../assets/json/cities.json";
import "./RegisterBloodCamps.css";
import axios from "axios";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";

if (typeof window !== "undefined") {
	injectStyle();
}
class RegisterBloodCamps extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bloodCampName: "",
			email: "",
			mobileNumber: "",
			fromDate: "",
			toDate: "",
			country: "",
			state: "",
			city: "",
			address: "",
            pincode:"",
			countryCode: 0,
			stateCode: 0,
			cityCode: 0,
		};
		this.submitHandler = this.submitHandler.bind(this);
		this.handleCountry = this.handleCountry.bind(this);
		this.handleState = this.handleState.bind(this);
        this.handleCity = this.handleCity.bind(this);
		this.listState = this.listState.bind(this);
		this.listCity = this.listCity.bind(this);
	}

	async submitHandler() {
		// add code
		console.log(this.state);

		const data = {
            name: "" + this.state.bloodCampName,
			email: "" + this.state.email,
			mobile: "" + this.state.mobileNumber,
			pincode: "" + this.state.pincode,
			city: "" + this.state.city,
			state: "" + this.state.state,
			country: "" + this.state.country,
			fromDate: "" + this.state.fromDate,
			toDate:""+this.state.toDate,
            address:""+this.state.address
		};
        console.log(data);
		try {
			const result = await axios.post("/bloodbank/organizeCamp", data);
			console.log(result);
			toast.success("registered successfully", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} catch (e) {
			console.dir(e.response.data.message);
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

	handleCountry(e) {
		this.setState({ ...this.state, country: e.target.value, countryCode: 101 });
	}

	handleState(e) {
		this.setState({ ...this.state, state: e.target.value, stateCode: e.target.selectedIndex });
	}

	handleCity(e) {
		this.setState({ ...this.state, city: e.target.value, cityCode: e.target.selectedIndex });
	}

	listState(countryCode) {
		console.log(countryCode);
		let newStateArr = StateData.states.filter((state) => state.country_id == countryCode);

		return (
			<select className="locationdropdown" name="State" onChange={this.handleState} id="" required>
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

	listCity(stateCode) {
		let newCityArr = CityData.cities.filter((city) => city.state_id == stateCode);

		return (
			<select className="locationdropdown W-80" name="City" onChange={this.handleCity} id="" required>
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

	render() {
		return (
			<div className="registration">
				<input
					type="text"
					className="inputBox"
					value={this.state.bloodCampName}
					onChange={(e) => {
						this.setState({ ...this.state, bloodCampName: e.target.value });
					}}
					placeholder="Blood Camp Name"
					required
				/>
				<br />
				<input
					type="email"
					className="inputBox"
					value={this.state.email}
					onChange={(e) => {
						this.setState({ ...this.state, email: e.target.value });
					}}
					placeholder="Email"
					required
				/>
				<br />
				<input
					type="tel"
					className="inputBox"
					value={this.state.mobileNumber}
					onChange={(e) => {
						this.setState({ ...this.state, mobileNumber: e.target.value });
					}}
					placeholder="Phone Number"
					required
				/>
				<br />
				<input
					type="date"
					className="inputBox"
					value={this.state.fromDate}
					onChange={(e) => {
						this.setState({ ...this.state, fromDate: e.target.value });
					}}
					placeholder="From Date: DD/MM/YYYY"
					required
				/>
				<br />
				<input
					type="date"
					className="inputBox"
					value={this.state.toDate}
					onChange={(e) => {
						this.setState({ ...this.state, toDate: e.target.value });
					}}
					placeholder="To Date: DD/MM/YYYY"
					required
				/>
				<br />
				<input
					type="text"
					className="inputBox"
					value={this.state.address}
					onChange={(e) => {
						this.setState({ ...this.state, address: e.target.value });
					}}
					placeholder="Address"
					required
				/>
				<br />
				<input
					type="number"
					className="inputBox"
					value={this.state.pincode}
					onChange={(e) => {
						this.setState({ ...this.state, pincode: e.target.value });
					}}
					placeholder="Pincode"
					required
				/>
				<br />
				<select className="locationdropdown" name="Country" onChange={this.handleCountry} id="" required>
					<option value="">Select Country</option>
					{CountryData.countries.map((country) => (
						<option key={country.id} countryCode={country.id} value={country.name}>
							{" "}
							{country.name}
						</option>
					))}
				</select>
				<br />
				{this.listState(this.state.countryCode)}
				<br />
				{this.listCity(this.state.stateCode)}
				<br />
				<button onClick={this.submitHandler} className="submitbtn" type="submit">
					Register Camp
				</button>
				<ToastContainer position="bottom-right" />
			</div>
		);
	}
}

export default RegisterBloodCamps;

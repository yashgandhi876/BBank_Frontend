import React, { Component } from "react";
import CountryData from "../assets/json/countries.json";
import StateData from "../assets/json/states.json";
import CityData from "../assets/json/cities.json";
import "./SignUp.css";
import axios from "axios";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";

if (typeof window !== "undefined") {
	injectStyle();
}
class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectCat: "None",
			bbank: {
				name: "",
				email: "",
				password: "",
				mobileNumber: "",
				stocks: "",
				country: "",
				state: "",
				city: "",
				address: "",
				pincode: "",
			},
			user: {
				name: "",
				email: "",
				password: "",
				mobileNumber: "",
				gender: "",
				bloodGroup: "",
				birthDate: "",
				country: "",
				state: "",
				city: "",
				address: "",
				pincode: "",
			},
			countryCode: 0,
			stateCode: 0,
			cityCode: 0,
		};
		this.submitBloodBankForm = this.submitBloodBankForm.bind(this);
		this.submitUserForm = this.submitUserForm.bind(this);
		this.handleChangeCat = this.handleChangeCat.bind(this);
		this.handleCountry = this.handleCountry.bind(this);
		this.handleState = this.handleState.bind(this);
		this.handleCity = this.handleCity.bind(this);
		this.listState = this.listState.bind(this);
		this.listCity = this.listCity.bind(this);
	}

	async submitBloodBankForm() {
		 const data = {
			category: ""+this.state.selectCat,
			bloodBankName: ""+this.state.bbank.name,
			emailId: ""+this.state.bbank.email,
			password: ""+this.state.bbank.password,
			mobile: ""+this.state.bbank.mobileNumber ,
			pincode: ""+this.state.bbank.pincode ,
			address:""+this.state.bbank.address,
			city: ""+this.state.bbank.city ,
			state: ""+this.state.bbank.state ,
			country: ""+this.state.bbank.country ,
		};
        try{
            const result = await axios.post("http://localhost:5000/auth/signup", data);
			console.log("bbank token: " + result.data.token);
			toast.success("signup successful", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
        }catch (e){
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

	async submitUserForm() {
		//add code

        const data = {
			category: ""+this.state.selectCat,
			userName: ""+this.state.user.name,
			emailId: ""+this.state.user.email,
			password: ""+this.state.user.password,
			mobile: ""+this.state.user.mobileNumber ,
			dateofbirth: ""+this.state.user.birthDate,
			gender: ""+this.state.user.gender ,
			bloodGr: ""+this.state.user.bloodGroup ,
			pincode: ""+this.state.user.pincode ,
			address:""+this.state.user.address,
			city: ""+this.state.user.city ,
			state: ""+this.state.user.state ,
			country: ""+this.state.user.country ,
		};
        try{
            const result = await axios.post("http://localhost:5000/auth/signup", data);
            console.log("user token: " + result.data.token);
			toast.success("signup successful", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});

        }catch (e){
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

	handleChangeCat(e) {
		this.setState({
			...this.state,
			selectCat: e.target.value,
		});
	}

	handleCountry(e) {
		if (this.state.selectCat === "bbank") {
			this.setState({ ...this.state, bbank: { ...this.state.bbank, country: e.target.value }, countryCode: 101 });
		} else if (this.state.selectCat === "user") {
			this.setState({ ...this.state, user: { ...this.state.user, country: e.target.value }, countryCode: 101 });
		}
	}

	handleState(e) {
		if (this.state.selectCat === "bbank") {
			this.setState({
				...this.state,
				bbank: { ...this.state.bbank, state: e.target.value },
				stateCode: e.target.selectedIndex,
			});
		} else if (this.state.selectCat === "user") {
			this.setState({
				...this.state,
				user: { ...this.state.user, state: e.target.value },
				stateCode: e.target.selectedIndex,
			});
		}
	}

	handleCity(e) {
		if (this.state.selectCat === "bbank") {
			this.setState({
				...this.state,
				bbank: { ...this.state.bbank, city: e.target.value },
				cityCode: e.target.selectedIndex,
			});
		} else if (this.state.selectCat === "user") {
			this.setState({
				...this.state,
				user: { ...this.state.user, city: e.target.value },
				cityCode: e.target.selectedIndex,
			});
		}
	}

	listState(countryCode) {
		let newStateArr = StateData.states.filter((state) => state.country_id === "" + countryCode);
		return (
			<select className="locationdropdown" name="State" onChange={this.handleState} id="" required>
				<option>Select State</option>
				{newStateArr.map((state) => (
					<option key={state.id} value={state.name}>
						{" "}
						{state.name}
					</option>
				))}
			</select>
		);
	}

	listCity(stateCode) {
		let newCityArr = CityData.cities.filter((city) => city.state_id === "" + stateCode);

		return (
			<select className="locationdropdown W-80" name="City" onChange={this.handleCity} id="" required>
				<option>Select City</option>
				{newCityArr.map((city) => (
					<option key={city.id} value={city.name}>
						{" "}
						{city.name}
					</option>
				))}
			</select>
		);
	}

	checkCat(value) {
		if (value === "bbank")
			return (
				<div>
					<input
						type="text"
						className="inputBox"
						value={this.state.bbank.name}
						onChange={(e) => {
							this.setState({ ...this.state, bbank: { ...this.state.bbank, name: e.target.value } });
						}}
						placeholder="Blood Bank Name"
						required
					/>
					<br />
					<input
						type="email"
						className="inputBox"
						value={this.state.bbank.email}
						onChange={(e) => {
							this.setState({ ...this.state, bbank: { ...this.state.bbank, email: e.target.value } });
						}}
						placeholder="Email"
						required
					/>
					<br />
					<input
						type="password"
						className="inputBox"
						value={this.state.bbank.password}
						onChange={(e) => {
							this.setState({ ...this.state, bbank: { ...this.state.bbank, password: e.target.value } });
						}}
						placeholder="password"
						required
					/>
					<br />
					<input
						type="tel"
						className="inputBox"
						value={this.state.bbank.mobileNumber}
						onChange={(e) => {
							this.setState({
								...this.state,
								bbank: { ...this.state.bbank, mobileNumber: e.target.value },
							});
						}}
						placeholder="Phone Number"
						required
					/>
					<br />
					<input
						type="text"
						className="inputBox"
						value={this.state.bbank.stocks}
						onChange={(e) => {
							this.setState({ ...this.state, bbank: { ...this.state.bbank, stocks: e.target.value } });
						}}
						placeholder="Stocks"
						required
					/>
					<br />
					<input
						type="text"
						className="inputBox"
						value={this.state.bbank.address}
						onChange={(e) => {
							this.setState({ ...this.state, bbank: { ...this.state.bbank, address: e.target.value } });
						}}
						placeholder="Address"
						required
					/>
					<br />
					<input
						type="number"
						className="inputBox"
						value={this.state.bbank.pincode}
						onChange={(e) => {
							this.setState({ ...this.state, bbank: { ...this.state.bbank, pincode: e.target.value } });
						}}
						placeholder="pincode"
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
					<button onClick={this.submitBloodBankForm} className="submitbtn" type="submit">
						Sign Up
					</button>
				</div>
			);
		else if (value === "user")
			return (
				<div>
					<input
						type="text"
						className="inputBox"
						value={this.state.user.name}
						onChange={(e) => {
							this.setState({ ...this.state, user: { ...this.state.user, name: e.target.value } });
						}}
						placeholder="User Name"
						required
					/>
					<br />
					<input
						type="email"
						className="inputBox"
						value={this.state.user.email}
						onChange={(e) => {
							this.setState({ ...this.state, user: { ...this.state.user, email: e.target.value } });
						}}
						placeholder="Email"
						required
					/>
					<br />
					<input
						type="password"
						className="inputBox"
						value={this.state.user.password}
						onChange={(e) => {
							this.setState({ ...this.state, user: { ...this.state.user, password: e.target.value } });
						}}
						placeholder="Password"
						required
					/>
					<br />
					<input
						type="tel"
						className="inputBox"
						value={this.state.user.mobileNumber}
						onChange={(e) => {
							this.setState({
								...this.state,
								user: { ...this.state.user, mobileNumber: e.target.value },
							});
						}}
						placeholder="Phone Number"
						required
					/>
					<br />
					<input
						type="date"
						className="inputBox"
						value={this.state.user.birthDate}
						onChange={(e) => {
							this.setState({ ...this.state, user: { ...this.state.user, birthDate: e.target.value } });
						}}
						placeholder="Date"
						required
					/>
					<br />{" "}
					<select
						className="locationdropdown"
						onChange={(e) => {
							this.setState({ ...this.state, user: { ...this.state.user, gender: e.target.value } });
						}}
						name="gender"
						id=""
					>
						<option value="Gender">gender</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
						<option value="other">other</option>
					</select>
					<br />{" "}
					<select
						className="locationdropdown"
						onChange={(e) => {
							this.setState({ ...this.state, user: { ...this.state.user, bloodGroup: e.target.value } });
						}}
						name="bloodgroup"
						id=""
					>
						<option value="Blood Group">Blood Group</option>
						<option value="Apos">A+</option>
						<option value="Aneg">A-</option>
						<option value="Bpos">B+</option>
						<option value="Bneg">B-</option>
						<option value="Opos">O+</option>
						<option value="Oneg">O-</option>
						<option value="ABpos">AB+</option>
						<option value="ABneg">AB-</option>
					</select>
					<br />
					<input
						type="text"
						className="inputBox"
						value={this.state.user.address}
						onChange={(e) => {
							this.setState({ ...this.state, user: { ...this.state.user, address: e.target.value } });
						}}
						placeholder="Address"
						required
					/>
					<br />
					<input
						type="number"
						className="inputBox"
						value={this.state.user.pincode}
						onChange={(e) => {
							this.setState({ ...this.state, user: { ...this.state.user, pincode: e.target.value } });
						}}
						placeholder="Pincode"
						required
					/>
					<br />
					<select className="locationdropdown" name="Country" onChange={this.handleCountry} id="" required>
						<option value="">Select Country</option>
						{CountryData.countries.map((country) => (
							<option key={country.id} countrycode={country.id} value={country.name}>
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
					<button onClick={this.submitUserForm} className="submitbtn" type="submit">
						Sign Up
					</button>
				</div>
			);
	}

	render() {
		return (
			<div className="signUpform">
				<select className="catigoresdropdown" name="catigores" onChange={this.handleChangeCat} id="">
					<option value="None">categories</option>
					<option value="bbank">Blood Bank</option>
					<option value="user">User</option>
				</select>
				{this.checkCat(this.state.selectCat)}
				<ToastContainer position="bottom-right" />
			</div>
		);
	}
}

export default SignUp;

import React, { useState } from "react";
import CountryData from "../assets/json/countries.json";
import Footer from "./Layout/Footer";
import StateData from "../assets/json/states.json";
import CityData from "../assets/json/cities.json";
import "./SignUp.css";
import axios from "axios";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";

if (typeof window !== "undefined") {
	injectStyle();
}

function SignUp(props) {
	let history = useHistory();
	const [state, setState] = useState({
		selectCat: "None",
		bbank: {
			name: "",
			email: "",
			password: "",
			confPassword: "",
			mobileNumber: "",
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
			confPassword: "",
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
	});

	async function submitBloodBankForm() {
		if (state.bbank.password !== state.bbank.confPassword) {
			toast.error("Password and confirm password don't match", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			return
		}
		const data = {
			category: "" + state.selectCat,
			bloodBankName: "" + state.bbank.name,
			emailId: "" + state.bbank.email,
			password: "" + state.bbank.password,
			mobile: "" + state.bbank.mobileNumber,
			pincode: "" + state.bbank.pincode,
			address: "" + state.bbank.address,
			city: "" + state.bbank.city,
			state: "" + state.bbank.state,
			country: "" + state.bbank.country,
		};
		try {
			const result = await axios.post("/auth/signup", data);
			// console.log("bbank token: ");
			// console.log(result);
			// console.log(result.data.token);
			toast.success("Signup successful, please wait upto 24hrs for verification.", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			// localStorage.setItem("token", result.data.token);
			// axios.defaults.headers.common["authorization"] = "Bearer " + localStorage.getItem("token");
			setTimeout(() => {
				// props.auth.loggedIn(state.selectCat);
				history.push("/");
			}, 5000);
		} catch (e) {
			console.dir(e.response.data.message);
			props.auth.notLoggedIn();
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

	async function submitUserForm() {
		//add code
		if (state.user.password !== state.user.confPassword) {
			toast.error("Password and confirm password don't match", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			return
		}
		const data = {
			category: "" + state.selectCat,
			userName: "" + state.user.name,
			emailId: "" + state.user.email,
			password: "" + state.user.password,
			mobile: "" + state.user.mobileNumber,
			dateofbirth: "" + state.user.birthDate,
			gender: "" + state.user.gender,
			bloodGr: "" + state.user.bloodGroup,
			pincode: "" + state.user.pincode,
			address: "" + state.user.address,
			city: "" + state.user.city,
			state: "" + state.user.state,
			country: "" + state.user.country,
		};
		try {
			const result = await axios.post("/auth/signup", data);
			// console.log("user token: " + result.data.token);
			toast.success("Signup successful", {
				position: "bottom-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			localStorage.setItem("token", result.data.token);
			axios.defaults.headers.common["authorization"] = "Bearer " + localStorage.getItem("token");
			setTimeout(() => {
				props.auth.loggedIn(state.selectCat);
				history.push("/");

			}, 2000);
		} catch (e) {
			props.auth.notLoggedIn();
			// console.log(e);
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

	function handleChangeCat(e) {
		setState({
			...state,
			selectCat: e.target.value,
		});
	}

	function handleCountry(e) {
		if (state.selectCat === "bbank") {
			setState({ ...state, bbank: { ...state.bbank, country: e.target.value }, countryCode: 101 });
		} else if (state.selectCat === "user") {
			setState({ ...state, user: { ...state.user, country: e.target.value }, countryCode: 101 });
		}
	}

	function handleState(e) {
		if (state.selectCat === "bbank") {
			setState({
				...state,
				bbank: { ...state.bbank, state: e.target.value },
				stateCode: e.target.selectedIndex,
			});
		} else if (state.selectCat === "user") {
			setState({
				...state,
				user: { ...state.user, state: e.target.value },
				stateCode: e.target.selectedIndex,
			});
		}
	}

	function handleCity(e) {
		if (state.selectCat === "bbank") {
			setState({
				...state,
				bbank: { ...state.bbank, city: e.target.value },
				cityCode: e.target.selectedIndex,
			});
		} else if (state.selectCat === "user") {
			setState({
				...state,
				user: { ...state.user, city: e.target.value },
				cityCode: e.target.selectedIndex,
			});
		}
	}

	function listState(countryCode) {
		let newStateArr = StateData.states.filter((state) => state.country_id === "" + countryCode);
		return (
			<select className="locationdropdown" name="State" onChange={handleState} id="" required>
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

	function listCity(stateCode) {
		let newCityArr = CityData.cities.filter((city) => city.state_id === "" + stateCode);

		return (
			<select className="locationdropdown W-80" name="City" onChange={handleCity} id="" required>
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

	function checkCat(value) {
		if (value === "bbank")
			return (
				<div>
					<input
						type="text"
						className="inputBox"
						value={state.bbank.name}
						onChange={(e) => {
							setState({ ...state, bbank: { ...state.bbank, name: e.target.value } });
						}}
						placeholder="Blood Bank Name"
						required
					/>
					<br />
					<input
						type="email"
						className="inputBox"
						value={state.bbank.email}
						onChange={(e) => {
							setState({ ...state, bbank: { ...state.bbank, email: e.target.value } });
						}}
						placeholder="Email"
						required
					/>
					<br />
					<input
						type="password"
						className="inputBox"
						value={state.bbank.password}
						onChange={(e) => {
							setState({ ...state, bbank: { ...state.bbank, password: e.target.value } });
						}}
						placeholder="Password"
						required
					/>
					<br />
					<input
						type="password"
						className="inputBox"
						value={state.bbank.confPassword}
						onChange={(e) => {
							setState({ ...state, bbank: { ...state.bbank, confPassword: e.target.value } });
						}}
						placeholder="Confirm Password"
						required
					/>
					<br />
					<input
						type="tel"
						className="inputBox"
						value={state.bbank.mobileNumber}
						onChange={(e) => {
							setState({
								...state,
								bbank: { ...state.bbank, mobileNumber: e.target.value },
							});
						}}
						placeholder="Phone Number"
						required
					/>
					<br />

					<input
						type="text"
						className="inputBox"
						value={state.bbank.address}
						onChange={(e) => {
							setState({ ...state, bbank: { ...state.bbank, address: e.target.value } });
						}}
						placeholder="Address"
						required
					/>
					<br />
					<input
						type="number"
						className="inputBox"
						value={state.bbank.pincode}
						onChange={(e) => {
							setState({ ...state, bbank: { ...state.bbank, pincode: e.target.value } });
						}}
						placeholder="Pincode"
						required
					/>
					<br />
					<select className="locationdropdown" name="Country" onChange={handleCountry} id="" required>
						<option value="">Select Country</option>
						{CountryData.countries.map((country) => (
							<option key={country.id} value={country.name}>
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
					<button onClick={submitBloodBankForm} className="btn btn-primary" style={{ width: "200px", borderRadius: "50px", padding: "5px", margin: "30px auto", height: "43px", fontSize: "20px", backgroundColor: "#0979FA" }} type="submit">
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
						value={state.user.name}
						onChange={(e) => {
							setState({ ...state, user: { ...state.user, name: e.target.value } });
						}}
						placeholder="Your Name"
						required
					/>
					<br />
					<input
						type="email"
						className="inputBox"
						value={state.user.email}
						onChange={(e) => {
							setState({ ...state, user: { ...state.user, email: e.target.value } });
						}}
						placeholder="Your Email"
						required
					/>
					<br />
					<input
						type="password"
						className="inputBox"
						value={state.user.password}
						onChange={(e) => {
							setState({ ...state, user: { ...state.user, password: e.target.value } });
						}}
						placeholder="Password"
						required
					/>
					<br />
					<input
						type="password"
						className="inputBox"
						value={state.user.confPassword}
						onChange={(e) => {
							setState({ ...state, user: { ...state.user, confPassword: e.target.value } });
						}}
						placeholder="Confirm Password"
						required
					/>
					<br />
					<input
						type="tel"
						className="inputBox"
						value={state.user.mobileNumber}
						onChange={(e) => {
							setState({
								...state,
								user: { ...state.user, mobileNumber: e.target.value },
							});
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
							Date of Birth
						</p>
						<input
							type="date"
							className="inputBox"
							style={{
								height: "40px",
								margin: "0 auto",
								width: "75%",
							}}
							value={state.user.birthDate}
							onChange={(e) => {
								setState({ ...state, user: { ...state.user, birthDate: e.target.value } });
							}}
							placeholder="Date"
							required
						/>
					</div>
					<select
						className="locationdropdown"
						onChange={(e) => {
							setState({ ...state, user: { ...state.user, gender: e.target.value } });
						}}
						name="gender"
						id=""
					>
						<option value="Gender">Gender</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
						<option value="other">other</option>
					</select>
					<br />{" "}
					<select
						className="locationdropdown"
						onChange={(e) => {
							setState({ ...state, user: { ...state.user, bloodGroup: e.target.value } });
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
						value={state.user.address}
						onChange={(e) => {
							setState({ ...state, user: { ...state.user, address: e.target.value } });
						}}
						placeholder="Address"
						required
					/>
					<br />
					<input
						type="number"
						className="inputBox"
						value={state.user.pincode}
						onChange={(e) => {
							setState({ ...state, user: { ...state.user, pincode: e.target.value } });
						}}
						placeholder="Pincode"
						required
					/>
					<br />
					<select className="locationdropdown" name="Country" onChange={handleCountry} id="" required>
						<option value="">Select Country</option>
						{CountryData.countries.map((country) => (
							<option key={country.id} value={country.name}>
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
					<button onClick={submitUserForm} className="btn btn-primary" style={{ width: "200px", borderRadius: "50px", padding: "5px", margin: "30px auto", height: "43px", fontSize: "20px", backgroundColor: "#0979FA" }} type="submit">
						Sign Up
					</button>
				</div>
			);
	}

	return (
		<div>
			<div className="signUpform" style={{minHeight:"50vh", marginY:"10px", paddingY:"10px"}}>

				<select className="catigoresdropdown" name="catigores" onChange={handleChangeCat} id="">
					<option value="None">Select Account Type</option>
					<option value="bbank">Blood Bank</option>
					<option value="user">User</option>
				</select>
				{checkCat(state.selectCat)}

				<ToastContainer position="bottom-right" />
			</div>
			<div style={{ width: "100%", marginTop:"10px", paddingTop:"10px" }} className="m-0">
				<Footer />
			</div>
		</div>
	);
}

export default SignUp;

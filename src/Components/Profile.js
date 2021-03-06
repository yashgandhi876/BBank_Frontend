import React, { useState, useEffect } from "react";
import "./SignUp.css";
import axios from "axios";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Footer from "./Layout/Footer";
if (typeof window !== "undefined") {
	injectStyle();
}

function Profile({ loggedIn, email, id }) {
	const history = useHistory();
	const selectCat = loggedIn;
	const [state, setState] = useState({
		bbank: {
			bankId: id,
			name: "",
			emailId: email,
			mobile: "",
			pincode: "",
			password: "",
			confPassword: ""
		},
		user: {
			userId: id,
			name: "",
			emailId: email,
			mobile: "",
			gender: "",
			bloodGr: "",
			dob: "",
			pincode: "",
			password: "",
			confPassword: ""
		},
	});

	useEffect(() => {
		async function getData() {
			if (selectCat === "bbank") {
				let data = await axios.get("/bloodbank/profile");
				// console.log("data: ");
				// console.log(data);
				let tempdata = {
					user: state.user,
					bbank: data.data,
				};
				setState(tempdata);
			} else if (selectCat === "user") {
				let data = await axios.get("/user/profile");
				// console.log("get data: ");
				// console.log(data);
				let tempdata = {
					bank: state.bank,
					user: data.data,
				};
				setState(tempdata);
			}
		}
		getData();
	}, []);

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
			bankId: state.bbank.bankId,
			name: "" + state.bbank.name,
			emailId: "" + state.bbank.emailId,
			mobile: "" + state.bbank.mobile,
			pincode: "" + state.bbank.pincode,
			password: "" + state.bbank.password,
		};
		console.log("send data");
		console.log(data);
		try {
			const result = await axios.put("/bloodbank/updateProfile", data);
			// console.log("updated profile: ");
			// console.log(result);
			toast.success("Profile updated successfully", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			setTimeout(() => {
				history.push("/");
			}, 2000);
		} catch (e) {
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
			userId: state.user.userId,
			name: "" + state.user.name,
			emailId: "" + state.user.emailId,
			mobile: "" + state.user.mobile,
			dob: "" + state.user.dob,
			gender: "" + state.user.gender,
			bloodGr: "" + state.user.bloodGr,
			pincode: "" + state.user.pincode,
			password: "" + state.user.password,
		};
		// console.log("send data");
		// console.log(data);
		try {
			const result = await axios.put("/user/updateProfile", data);
			// console.log("updated profile: ");
			// console.log(result);
			toast.success("Profile updated successfully", {
				position: "bottom-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} catch (e) {
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
						value={state.bbank.emailId}
						readOnly
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
						placeholder="Password (leave empty for no change in password)"
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
					/>
					<br />
					<input
						type="tel"
						className="inputBox"
						value={state.bbank.mobile}
						onChange={(e) => {
							setState({
								...state,
								bbank: { ...state.bbank, mobile: e.target.value },
							});
						}}
						placeholder="Phone Number"
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
						placeholder="pincode"
						required
					/>
					<br />
					<button onClick={submitBloodBankForm} className="btn btn-primary" style={{ width: "200px", borderRadius: "50px", padding: "5px", margin: "30px auto", height: "43px", fontSize: "20px", backgroundColor: "#0979FA" }} type="submit">
						Update profile
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
						placeholder="User Name"
						required
					/>
					<br />
					<input
						type="email"
						className="inputBox"
						style={{background:"#cdcdcd", outline:"none", border:"1px solid gray"}}
						value={state.user.emailId}
						readOnly
						placeholder="Email"
						required
					/>
					<br />
					<input
						type="tel"
						className="inputBox"
						value={state.user.mobile}
						onChange={(e) => {
							setState({
								...state,
								user: { ...state.user, mobile: e.target.value },
							});
						}}
						placeholder="Phone Number"
						required
					/>
					<br />
					<input
						type="date"
						className="inputBox"
						value={state.user.dob}
						onChange={(e) => {
							setState({ ...state, user: { ...state.user, dob: e.target.value } });
						}}
						placeholder="Date"
						required
					/>
					<br />{" "}
					<select
						className="locationdropdown"
						onChange={(e) => {
							setState({ ...state, user: { ...state.user, gender: e.target.value } });
						}}
						name="gender"
						value={state.user.gender}
						id=""
					>
						<option value="Gender">gender</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
						<option value="other">other</option>
					</select>
					<br />
					<select
						className="locationdropdown"
						onChange={(e) => {
							setState({ ...state, user: { ...state.user, bloodGr: e.target.value } });
						}}
						name="bloodgroup"
						id=""
						value={state.user.bloodGr}
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
					<button onClick={submitUserForm} className="btn btn-primary" style={{ width: "200px", borderRadius: "50px", padding: "5px", margin: "30px auto", height: "43px", fontSize: "20px", backgroundColor: "#0979FA" }} type="submit">
						Update Profile
					</button>
				</div>
			);
	}

	return (
		<div>

			<div className="signUpform" style={{marginBottom:"30px"}}>
				<h1 className="m-3">Update Profile</h1>
				{checkCat(selectCat)}


				<ToastContainer position="bottom-right" />
			</div>
			<div style={{ width: "100%", marginTop: "20px", paddingTop: "10px" }} className="m-0">
				<Footer />
			</div>
		</div>
	);
}

export default Profile;

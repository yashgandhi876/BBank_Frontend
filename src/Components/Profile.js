import React, { useState, useEffect } from "react";
import "./SignUp.css";
import axios from "axios";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";
if (typeof window !== "undefined") {
	injectStyle();
}

function Profile({ loggedIn, email, id }) {
	const selectCat = loggedIn;
	const [state, setState] = useState({
		bbank: {
			bankId: id,
			name: "",
			emailId: email,
			mobile: "",
			pincode: "",
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
		},
	});

	useEffect(() => {
		async function getData() {
			if (selectCat === "bbank") {
				let data = await axios.get("/bloodbank/profile");
				console.log("data: ");
				console.log(data);
				let tempdata = {
					user: state.user,
					bbank: data.data,
				};
				setState(tempdata);
			} else if (selectCat === "user") {
				let data = await axios.get("/user/profile");
				console.log("get data: ");
				console.log(data);
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
		const data = {
			bankId: state.bbank.bankId,
			name: "" + state.bbank.name,
			emailId: "" + state.bbank.emailId,
			mobile: "" + state.bbank.mobile,
			pincode: "" + state.bbank.pincode,
		};
		console.log("send data");
		console.log(data);
		try {
			const result = await axios.put("/bloodbank/updateProfile", data);
			console.log("updated profile: ");
			console.log(result);
			toast.success("Profile updated succefully", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} catch (e) {
			console.dir(e);
			toast.error("invalide credentials", {
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

		const data = {
			userId: state.user.userId,
			name: "" + state.user.name,
			emailId: "" + state.user.emailId,
			mobile: "" + state.user.mobile,
			dob: "" + state.user.dob,
			gender: "" + state.user.gender,
			bloodGr: "" + state.user.bloodGr,
			pincode: "" + state.user.pincode,
		};
		console.log("send data");
		console.log(data);
		try {
			const result = await axios.put("/user/updateProfile", data);
			console.log("updated profile: ");
			console.log(result);
			toast.success("Profile updated succefully", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} catch (e) {
			console.dir(e);
			toast.error("invalide credentials", {
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
					<button onClick={submitBloodBankForm} className="submitbtn" type="submit">
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
					<button onClick={submitUserForm} className="submitbtn" type="submit">
						update profile
					</button>
				</div>
			);
	}

	return (
		<div className="signUpform">
			{checkCat(selectCat)}
			<ToastContainer position="bottom-right" />
		</div>
	);
}

export default Profile;

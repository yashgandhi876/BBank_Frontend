import React, { useState } from "react";
import "./RegisterBloodCamps.css";
import axios from "axios";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Footer from "./Layout/Footer";
if (typeof window !== "undefined") {
	injectStyle();
}
function RegisterPlasmaDonors() {
	let history = useHistory();
	const [plasma, setPlasma] = useState({
		name: "",
		emailId: "",
		mobile: "",
		bloodGr: "",
		dateOfRecovery: "",
		address: "",
	});

	async function submitHandler() {
		// add code
		// console.log(plasma);
		try {
			const result = await axios.post("/user/plasmaDonorRegister", plasma);
			// console.log(result);
			toast.success("Registered successfully", {
				position: "bottom-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});

			setTimeout(() => {
				history.push("/plasmadonors");
			}, 2000);
		} catch (e) {
			// console.log("youarehere");
			// console.dir(e);
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

	return (
		<div className="registration">
		<div className="m-5">
			<h1>
				Register for Plasma Donation
			</h1>
		</div>
			<input
				type="text"
				className="inputBox"
				value={plasma.name}
				onChange={(e) => {
					setPlasma({ ...plasma, name: e.target.value });
				}}
				placeholder="Plasma Donor Name"
				required
			/>
			<br />
			<input
				type="email"
				className="inputBox"
				value={plasma.emailId}
				onChange={(e) => {
					setPlasma({ ...plasma, emailId: e.target.value });
				}}
				placeholder="Email"
				required
			/>
			<br />
			<input
				type="tel"
				className="inputBox"
				value={plasma.mobile}
				onChange={(e) => {
					setPlasma({ ...plasma, mobile: e.target.value });
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
					Date of Recovery
				</p>
				<input
					type="date"
					className="inputBox"
					style={{
						height: "40px",
						margin: "0 auto",
						width: "75%",
					}}
					value={plasma.dateOfRecovery}
					onChange={(e) => {
						setPlasma({ ...plasma, dateOfRecovery: e.target.value });
					}}
					placeholder="Date"
					required
				/>
			</div>
			<select
				className="locationdropdown"
				onChange={(e) => {
					setPlasma({ ...plasma, bloodGr: e.target.value });
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
				value={plasma.address}
				onChange={(e) => {
					setPlasma({ ...plasma, address: e.target.value });
				}}
				placeholder="Address : City, State, Country, Pincode"
				required
			/>
			<br />
			<button onClick={submitHandler} className="btn btn-primary" style={{ width: "250px", borderRadius: "50px", padding: "5px", margin: "30px auto", height: "43px", fontSize: "20px", backgroundColor: "#0979FA" }} type="submit">
				Register Plasma Donor
			</button>
			<div style={{ width: "100%", marginTop: "10px", paddingTop: "10px" }} className="m-0 mt-4">
				<Footer />
			</div>
			<ToastContainer position="bottom-right" />
		</div>
	);
}

export default RegisterPlasmaDonors;

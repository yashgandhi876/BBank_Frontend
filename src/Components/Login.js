import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";

if (typeof window !== "undefined") {
	injectStyle();
}

function Login() {
	const [selectCat, setSelectCat] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleChangeCat(e) {
		setSelectCat(e.target.value);
	}

	async function submitUserForm() {
		console.log(selectCat + " " + email + "  " + password);
		const cred = {
			category: selectCat,
			emailId: email,
			password,
		};
		try {
			const data = await axios.post("http://localhost:5000/auth/login", cred);
			// const d = await data.json();
			toast.success("login successful", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} catch (e) {
			console.log(e);
			toast.error('Invalid credentials', {
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
		<div className="LoginForm">
			<select className="catigoresdropdown" name="catigores" onChange={handleChangeCat} id="">
				<option value="None">categories</option>
				<option value="bbank">Blood Bank</option>
				<option value="user">User</option>
			</select>
			<div className="loginform">
				<input
					type="email"
					className="inputBox"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					placeholder="Email"
					autoComplete="true"
					required
				/>
				<br />
				<input
					type="password"
					className="inputBox"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					placeholder="password"
					required
				/>
				<br />
				<button onClick={submitUserForm} className="submitbtn" type="submit">
					Login
				</button>
			</div>
			<ToastContainer position="bottom-right" />
		</div>
	);
}

export default Login;

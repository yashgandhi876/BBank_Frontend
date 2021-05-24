import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";

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
			emailId:email,
			password,
		};
        const data = await axios.post("http://localhost:5000/auth/login", cred);
        console.log("data: " + data);
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
                    autoComplete='true'
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
		</div>
	);
}

export default Login;

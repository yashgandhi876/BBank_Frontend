import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Footer from "./Layout/Footer";

if (typeof window !== "undefined") {
    injectStyle();
}

function ForgotPassword() {
    const history = useHistory();
    const [selectCat, setSelectCat] = useState("None");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("")

    function handleChangeCat(e) {
        setSelectCat(e.target.value);
    }

    async function submitUserForm() {

        if (password !== confPassword) {
            toast.error("make sure your confirm password is same as new password", {
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

        if (selectCat === "None") {
            toast.error("Select Category first", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        // console.log(selectCat + " " + email + "  " + password);
        const cred = {
            category: selectCat,
            emailId: email,
            password,
        };
        try {
            const data = await axios.post("/auth/forgotpassword", cred);
            toast.success("Password Changed Successfully", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                history.push("/login");
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

    return (<div className="LoginForm" style={{ height: "100%" }}>
			<div style={{ height: "51vh" }}>

				<select className="catigoresdropdown" name="catigores" onChange={handleChangeCat} id="">
					<option value="None">Select Account Type</option>
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
						pattern="[A-Za-z0-9._-]{1,}@[A-Za-z._-]{1,}\.[A-Za-z._-]{1,}"
						title="Enter valid email address"
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
						placeholder="Password"
						required
					/>
                <br />
                <input
                    type="password"
                    className="inputBox"
                    value={confPassword}
                    onChange={(e) => {
                        setConfPassword(e.target.value);
                    }}
                    placeholder="Confirm New Password"
                    required
                />
					<div className="m-0 p-0" style={{display:"flex", flexDirection:"row-reverse", width:"67%"}}>
						<Link className="m-0 p-0" to="/forgotpassword">Login</Link>
					</div>
					<br />
					<button onClick={submitUserForm} className="submitbtn" style={{width:"200px"}} type="submit">
						Change Password
					</button>
				</div>
			</div>
			<Footer />
			<ToastContainer position="bottom-right" />
		</div>
    );
}

export default ForgotPassword;
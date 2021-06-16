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
    const [otp, setOtp] = useState();
    const [activebtn, setActivebtn] = useState(false);

    function handleChangeCat(e) {
        setSelectCat(e.target.value);
    }

    async function sendOTP() {
        try{
            const data = await axios.get(`/auth/generateotp/${email}`);
            console.log("otp");
            console.log(data);
            toast.success("OTP Sent", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setActivebtn(true);

        }catch(e){
            console.dir(e);
            toast.error("Couldn't send OTP, try again later", {
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
        if (password !== confPassword) {
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

        if (selectCat === "None") {
            toast.error("Select category first", {
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
            otp,
        };
        try {
            const data = await axios.post("/auth/forgotpassword", cred);
            toast.success("Password changed successfully", {
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
                    placeholder="New Password"
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
                <div className="inputBox" style={{ display: "flex", justifyContent: "start", margin: "4PX auto" }}>
                    <button
                        style={{ display: "flex", alignItems: "center", margin: "0px 2px", width: "20%", justifyContent: "center" }}
                        className="my-0 p-0 inputbox btn-success"
                        htmlFor=""
                        onClick={sendOTP}
                    >
                        Send OTP
                    </button>
                    <input
                        type="number"
                        className="inputBox"
                        style={{
                            height: "40px",
                            margin: "0 auto",
                            width: "75%",
                        }}
                        value={otp}
                        onChange={(e) => {
                            setOtp(e.target.value);
                        }}
                        placeholder="OTP"
                        required
                    />
                </div>
                <div className="m-0 p-0" style={{ display: "flex", flexDirection: "row-reverse", width: "67%" }}>
                    <Link className="m-0 p-0" to="/login">Login</Link>
                </div>
                <br />
                <button disabled={!activebtn} onClick={submitUserForm} className="submitbtn" style={{ width: "200px" }} type="submit">
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
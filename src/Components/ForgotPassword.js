import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Footer from "./Layout/Footer";
// import mailgun from 'mailgun-js';

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
    const [totp, setTOTP] = useState(0);
    const [activebtn, setActivebtn] = useState(false);
    var tempTOTP;
    
    function handleChangeCat(e) {
        setSelectCat(e.target.value);
    }

    function sendOTP() {

        tempTOTP = Math.floor(Math.random() * 1000000)
        setTOTP(tempTOTP);
        var API_KEY = '302c37325000fa26a56aa7ba3abe5259-24e2ac64-35c44edb';
        var DOMAIN = 'sandbox8757f0fd346e40e9bc451b238d1382bc.mailgun.org';
        var mailgun = require('mailgun-js')
            ({ apiKey: API_KEY, domain: DOMAIN });
        var sender_email = 'Admin BBank <yashgandhi2020@gmail.com>'
        var receiver_email = email;
        var email_subject = 'OTP to change password'
        var email_body = 'Hi, here is your private OTP to change password : ' + tempTOTP + '';
        console.log(totp);
        const data = {
            "from": sender_email,
            "to": receiver_email,
            "subject": email_subject,
            "text": email_body
        };

        console.log(data);

        mailgun.messages().send(data, (error, body) => {
            if (error) {
                console.log("error");
                console.dir(error)
                toast.error("try later", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            else {
                console.log("log");
                console.log(body);
                toast.success("OTP sent", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setActivebtn(true);
            }
        });
    }


    async function submitUserForm() {
        console.log(typeof totp);
        console.log(totp);
        console.log(typeof +otp);
        console.log(tempTOTP !== +otp)
        console.log(otp);
        if (totp !== +otp) {
            toast.error("Please type correct OTP", {
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
                    <Link className="m-0 p-0" to="/forgotpassword">Login</Link>
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
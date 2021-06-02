import "./App.css";
import Header from "./Components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import BloodCamps from "./Components/BloodCamps";
import RegisterBloodCamps from "./Components/RegisterBloodCamps";
import BloodBanks from "./Components/BloodBanks";
import axios from "axios";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import Logout from "./Components/Logout";
import UpdateStock from "./Components/UpdateStock";
import BloodStocks from "./Components/BloodStocks";

//heroku
// axios.defaults.baseURL = "https://bbankapplication.herokuapp.com/";

//localhost
axios.defaults.baseURL = "http://localhost:5000/";

function App() {
	const [loggedIn, setLoggedIn] = useState("");
	const [id, setId] = useState(0);
	const [email, setEmail] = useState("");

	function updateId(id) {
		setId(id);
	}

	const auth = {
		loggedIn: (value) => {
			console.log("in loggedIn: ");
			setLoggedIn(value);
		},
		notLoggedIn: () => {
			console.log("in not loggedIn: ");
			setLoggedIn("");
		},
	};

	useEffect(() => {
		console.log("in use effect 1");
		let token = localStorage.getItem("token");
		console.log("token app: " + token);
		axios.defaults.headers.common["authorization"] = "Bearer " + token;
		async function onLoggedIn() {
			if (token) {
				try {
					let details = await axios.get("/auth/checkReauth");
					console.log("details: ");
					console.log(details);
					if (details.data) {
						auth.loggedIn(details.data.decodedToken.user);
						setId(details.data.decodedToken.id);
						setEmail(details.data.decodedToken.email);
					}
				} catch (e) {
					console.dir(e);
					auth.notLoggedIn();
				}
			}
		}
		onLoggedIn();
	}, []);

	return (
		<Router>
			<div className="App">
				<Header isLoggedIn={loggedIn} />
				<Switch>
					<Route exact path={"/"} component={Landing} />
					{/*<Route exact path={"/register"} component={Register}/>*/}
					<Route exact path={"/signup"} component={() => <SignUp auth={auth} />} />
					<Route exact path={"/login"} component={() => <Login auth={auth} />} />
					<ProtectedRoute
						login={loggedIn}
						exact
						path={"/bloodcamps"}
						access="both"
						component={() => <BloodCamps />}
					/>
					<ProtectedRoute
						login={loggedIn}
						exact
						path={"/bloodbanks"}
						access="both"
						component={() => <BloodBanks id={id} updateId={updateId} />}
					/>
					{/* <Route exact path={"/bloodbanks"} component={BloodBanks} /> */}
					<ProtectedRoute
						login={loggedIn}
						exact
						path={"/registerbloodcamps"}
						access="bbank"
						component={() => <RegisterBloodCamps email={email} />}
					/>
					<ProtectedRoute
						login={loggedIn}
						exact
						path={"/updatestocks"}
						access="bbank"
						component={() => <UpdateStock id={id} />}
					/>
					<ProtectedRoute
						login={loggedIn}
						exact
						path={"/bloodstocks"}
						access="both"
						component={() => <BloodStocks />}
					/>
					{/* <Route exact path={"/bloodstocks"} component={() => <BloodStocks />} /> */}
					<Route exact path={"/logout"} component={() => <Logout auth={auth} />} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;

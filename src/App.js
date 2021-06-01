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

axios.defaults.baseURL = "https://bbankapplication.herokuapp.com/";

function App() {
	const [loggedIn, setLoggedIn] = useState("");

	useEffect(() => {
		console.log("token app: " + localStorage.getItem("token"));
		axios.defaults.headers.common["authorization"] = "Bearer " + localStorage.getItem("token");
	});

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
						component={() => <BloodBanks />}
					/>
					{/* <Route exact path={"/bloodbanks"} component={BloodBanks} /> */}
					<ProtectedRoute
						login={loggedIn}
						exact
						path={"/registerbloodcamps"}
						access="bbank"
						component={() => <RegisterBloodCamps />}
					/>
					<ProtectedRoute
						login={loggedIn}
						exact
						path={"/updatestocks"}
						access="bbank"
						component={() => <UpdateStock />}
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

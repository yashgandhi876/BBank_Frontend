import "./App.css";
import Header from "./Components/Layout/Header";
// import Footer from "./Components/Layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
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


axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers.common["authorization"] = "bareer " + localStorage.getItem("token");

function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	const auth = {
		loggedIn: () => {
			console.log("in loggedIn: ");
			setLoggedIn(true);
		},
		notLoggedIn: () => {
			console.log("in not loggedIn: ");
			setLoggedIn(false);
		},
	};

	return (
		<Router>
			<div className="App">
				<Header isLoggedIn={loggedIn} />
				{
					//Public Routes
				}
				<Switch>
					<Route exact path={"/"} component={Landing} />
					{/*<Route exact path={"/register"} component={Register}/>*/}
					<Route exact path={"/signup"} component={() => <SignUp auth={auth} />} />
					<Route exact path={"/login"} component={() => <Login auth={auth} />} />
					<ProtectedRoute
						login={loggedIn}
						exact
						path={"/bloodcamps"}
						component={() => <BloodCamps auth={auth} />}
					/>
					<ProtectedRoute
						login={loggedIn}
						exact
						path={"/bloodbanks"}
						component={() => <BloodBanks auth={auth} />}
					/>
					<Route exact path={"/registerbloodcamps"} component={RegisterBloodCamps} />
					<Route exact path={"/logout"} component={() => <Logout auth={auth} />} />
				</Switch>
				{/*{*/}
				{/*    //Private Routes*/}
				{/*}*/}
				{/*<Footer/>*/}
			</div>
		</Router>
	);
}

export default App;

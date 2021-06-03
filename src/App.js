import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Loader from "./Components/Loader";
import ProtectedRoute from "./Components/ProtectedRoute";
import Header from "./Components/Layout/Header";
const Landing = lazy(() => import("./pages/Landing"));
// import Landing from "./pages/Landing";

const Login = lazy(() => import("./Components/Login"));
const SignUp = lazy(() => import("./Components/SignUp"));
const BloodCamps = lazy(() => import("./Components/BloodCamps"));
const RegisterBloodCamps = lazy(() => import("./Components/RegisterBloodCamps"));
const BloodBanks = lazy(() => import("./Components/BloodBanks"));
const Logout = lazy(() => import("./Components/Logout"));
const UpdateStock = lazy(() => import("./Components/UpdateStock"));
const BloodStocks = lazy(() => import("./Components/BloodStocks"));
const Profile = lazy(() => import("./Components/Profile"));
const Plasmadonors = lazy(() => import("./Components/Plasmadonors"));
const RegisterPlasmaDonors = lazy(() => import("./Components/RegisterPlasmaDonors"));

//heroku
// axios.defaults.baseURL = "https://bbankapplication.herokuapp.com/";

//localhost
axios.defaults.baseURL = "https://192.168.29.220:5000/";

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
		console.log("in use effect 1 done");
		let token = localStorage.getItem("token");
		console.log("token app.js: " + token);
		axios.defaults.headers.common["authorization"] = "Bearer " + localStorage.getItem("token");
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
					<Route
						exact
						path={"/"}
						component={() => (
							<Suspense fallback={<Loader />}>
								<Landing />
							</Suspense>
						)}
					/>
					<Route
						exact
						path={"/signup"}
						component={() => (
							<Suspense fallback={<Loader />}>
								<SignUp auth={auth} />
							</Suspense>
						)}
					/>
					<Route
						exact
						path={"/login"}
						component={() => (
							<Suspense fallback={<Loader />}>
								<Login auth={auth} />
							</Suspense>
						)}
					/>
					<ProtectedRoute
						login={loggedIn}
						exact
						path={"/bloodcamps"}
						access="both"
						component={() => (
							<Suspense fallback={<Loader />}>
								<BloodCamps />
							</Suspense>
						)}
					/>
					<ProtectedRoute
						login={loggedIn}
						exact
						path={"/bloodbanks"}
						access="both"
						component={() => (
							<Suspense fallback={<Loader />}>
								<BloodBanks id={id} updateId={updateId} />
							</Suspense>
						)}
					/>
					<ProtectedRoute
						login={loggedIn}
						exact
						path={"/registerbloodcamps"}
						access="bbank"
						component={() => (
							<Suspense fallback={<Loader />}>
								<RegisterBloodCamps email={email} />
							</Suspense>
						)}
					/>
					<ProtectedRoute
						login={loggedIn}
						exact
						path={"/updatestocks"}
						access="bbank"
						component={() => (
							<Suspense fallback={<Loader />}>
								<UpdateStock id={id} />
							</Suspense>
						)}
					/>
					<ProtectedRoute
						login={loggedIn}
						exact
						path={"/bloodstocks"}
						access="both"
						component={() => (
							<Suspense fallback={<Loader />}>
								<BloodStocks />
							</Suspense>
						)}
					/>
					<ProtectedRoute
						login={loggedIn}
						exact
						path={"/profile"}
						access="both"
						component={() => (
							<Suspense fallback={<Loader />}>
								<Profile loggedIn={loggedIn} email={email} id={id} />
							</Suspense>
						)}
					/>
					<ProtectedRoute
						login={loggedIn}
						exact
						path={"/plasmadonors"}
						access="both"
						component={() => (
							<Suspense fallback={<Loader />}>
								<Plasmadonors />
							</Suspense>
						)}
					/>
					<ProtectedRoute
						login={loggedIn}
						exact
						path={"/registerplasmadonors"}
						access="user"
						component={() => (
							<Suspense fallback={<Loader />}>
								<RegisterPlasmaDonors />
							</Suspense>
						)}
					/>
					<ProtectedRoute
						login={loggedIn}
						exact
						path={"/logout"}
						access="both"
						component={() => (
							<Suspense fallback={<Loader />}>
								<Logout auth={auth} />
							</Suspense>
						)}
					/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;

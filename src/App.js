import "./App.css";
import Header from "./Components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* {Public Routes} */}
        <Route exact path={"/"} component={Landing} />
        <Route exact path={"/signup"} component={SignUp} />
        {/* <Route exact path={"/login"} component={Login} /> */}

        {/* {Private Routes} */}
        <Route exact path={"/dashboard"} component={Dashboard} />
        <Navbar />
        <Switch>
          <Route exact path={"/nb"}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

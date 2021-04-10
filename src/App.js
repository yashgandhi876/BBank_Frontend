import './App.css';
import Header from "./Components/Layout/Header";
// import Footer from "./Components/Layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import BloodCamps from "./Components/BloodCamps";


function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                {
                    //Public Routes
                }

                <Route exact path={"/"} component={Landing}/>
                {/*<Route exact path={"/register"} component={Register}/>*/}
                <Route exact path={"/signup"} component={SignUp} />
                <Route exact path={"/login"} component={Login} />
                <Route exact path={"/bloodcamps"} component={BloodCamps} />
                {/*{*/}
                {/*    //Private Routes*/}
                {/*}*/}
                {/*<Footer/>*/}
            </div>

        </Router>

    );
}

export default App;

import './App.css';
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Landing from "./Components/Layout/Landing";
import Dashboard from "./Components/Dashboard";

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
                {/*<Route exact path={"/login"} component={Login}/>*/}
                {/*{*/}
                {/*    //Private Routes*/}
                {/*}*/}
                {/*<Switch>*/}
                {/*    <Route exact path={"/dashboard"} component={Dashboard}/>*/}
                {/*</Switch>*/}
                <Footer/>

            </div>
        </Router>
    );

}

export default App;

import React, {Component} from "react";

class Header extends Component {
    render() {

        const userIsAuthenticated = (
            <div className={"collapse navbar-collapse"} id="mobile-nav">
                <ul className={"navbar-nav mr-auto"}>
                    <li className={"nav-item"}>
                        Dashboard
                    </li>
                </ul>
                <ul className={"navbar-nav ml-auto"}>
                    <li className={"nav-item"}>
                        <i className="fas fa-user-circle mr-1"/>USER's Name
                    </li>
                    <li className={"nav-item"}>
                        Logout
                    </li>
                </ul>
            </div>);

        const userNotAuthenticated = (
            <div className={"collapse navbar-collapse"} id="mobile-nav">
                <ul className={"navbar-nav ml-auto"}>
                    <li className={"nav-item"}>
                        Sign Up
                    </li>
                    <li className={"nav-item"}>
                        Login
                    </li>
                </ul>
            </div>);
        return (
            <div>
                <nav className={"navbar navbar-expand-sm navbar-dark bg-primary mb-4"}>
                    <a className={"navbar-brand"}>BBank</a>
                    {/*<div className={"container"}>*/}
                    {/*    Blood Bank Management System*/}

                    {/*</div>*/}
                    <div className={"collapse navbar-collapse"} id="mobile-nav">


                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#footer">Contact</a></li>

                        </ul>
                    </div>
                </nav>
            </div>);
    }

}

export default Header;
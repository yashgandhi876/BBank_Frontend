import React, { Component } from "react";

class Header extends Component {
    render() {
        
        const isLoggedIn = false;

        function renderConditionallyNavBarElem() {
            if (isLoggedIn) {
                return <ul className="nav navbar-nav navbar-right">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Dashboard</a></li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">User's Name</a></li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Logout</a></li>
                </ul>
            } else {
                return <ul className="nav navbar-nav navbar-right">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sign Up</a></li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Log in</a></li>
                </ul>
            }
        }

        // const userIsAuthenticated = (
        //     <div className={"collapse navbar-collapse"} id="mobile-nav">
        //         <ul className={"navbar-nav mr-auto"}>
        //             <li className={"nav-item"}>
        //                 Dashboard
        //             </li>
        //         </ul>
        //         <ul className={"navbar-nav ml-auto"}>
        //             <li className={"nav-item"}>
        //                 <i className="fas fa-user-circle mr-1"/>USER's Name
        //             </li>
        //             <li className={"nav-item"}>
        //                 Logout
        //             </li>
        //         </ul>
        //     </div>);
        //
        // const userNotAuthenticated = (
        //     <div className={"collapse navbar-collapse"} id="mobile-nav">
        //         <ul className={"navbar-nav ml-auto"}>
        //             <li className={"nav-item"}>
        //                 Sign Up
        //             </li>
        //             <li className={"nav-item"}>
        //                 Login
        //             </li>
        //         </ul>
        //     </div>);
        return (
            <section id={"header"}>
                <div className={"navbar-header"}>
                    <nav className={"navbar navbar-toggleable-md navbar-expand-md navbar-dark "}>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                data-target="#navbarNav" aria-controls="navbar" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <a className={"navbar-brand"} href={"#"}>BBank</a>

                        {/*</div>*/}
                        <div className={"collapse navbar-collapse"} id="mobile-nav">


                            <ul className="nav navbar-nav">
                                <li className="active nav-item">
                                    <a className="nav-link " href="#">Home</a></li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Donate Now</a></li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Nearby Blood Banks</a></li>
                            </ul>
                            {renderConditionallyNavBarElem()}
                        </div>
                    </nav>
                </div>
            </section>
        );
    }

}

export default Header;
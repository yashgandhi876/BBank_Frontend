import React, {Component} from "react";
import AppLogo from "./AppLogo.png";

class Header extends Component {
    render() {

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
                <div>
                    <nav className={"navbar navbar-expand-sm navbar-dark "}>
                        <a className={"navbar-brand"} href={"#"}>BBank</a>

                        {/*</div>*/}
                        <div className={"collapse navbar-collapse"} id="mobile-nav">


                            <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link " href="#">Home</a></li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Donate Now</a></li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Nearby Blood Banks</a></li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">My Profile</a></li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#footer">Logout</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
        );
    }

}

export default Header;
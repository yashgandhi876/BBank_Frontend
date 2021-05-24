import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faTwitter, faFacebookMessenger} from '@fortawesome/free-brands-svg-icons';
import {List} from "semantic-ui-react";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <section id="footer">
                <div className={"empty-container"}/>

                <footer className={"container"}>
                    <div className="row text-center text-xs-center text-sm-left text-md-left justify-content-center">
                        <div className="col-md-4 col-xl-5 p-2 flex-fill bd-highlight mb-5 mb-md-0">
                            <h3>BBank</h3>
                            <p>BBank is an application to connect all stakeholders involved in the process of blood
                                transfusion and digitize the process to streamline the workflow of blood banks across
                                the nation.</p>
                            <p>©2021 BBank</p>
                        </div>
                        <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                            <h5 className="footer-quick-links">Our Services</h5>
                            <ul className={"footer-list"}>
                                <li className={"no-bullets"}>Online Donation Appointment</li>
                                <li className={"no-bullets"}>Blood Request</li>
                                <li className={"no-bullets"}>Nearby Blood Banks</li>
                                <li className={"no-bullets"}>Stocks Availability</li>
                                <li className={"no-bullets"}>Upcoming Camps</li>
                                <li className={"no-bullets"}>My Donation History</li>
                            </ul>
                        </div>
                        <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                            <h5 className="footer-quick-links">Get Help</h5>
                            <ul className={"footer-list"}>
                                <li className={"no-bullets"}>Blood Donation</li>
                                <li className={"no-bullets"}>FAQs</li>
                                <li className={"no-bullets"}>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <a href={"https://www.twitter.com"} target={"/"}><FontAwesomeIcon
                            className={"social-icon fa-1x social"}
                            icon={faTwitter}/></a>
                        <a href={"https://www.facebook.com"} target={"/"}><FontAwesomeIcon
                            className={"social-icon fa-1x social"}
                            icon={faFacebookF}/></a>
                        <a href={"https://www.instagram.com"} target={"/"}><FontAwesomeIcon
                            className={"social-icon fa-1x social"}
                            icon={faInstagram}/></a>
                        <a href="mailto: abc@example.com"><FontAwesomeIcon
                            className={"social-icon fa-1x social"}
                            icon={faFacebookMessenger}/></a>
                    </div>
                </footer>
            </section>
        );
    }
}

export default Footer;
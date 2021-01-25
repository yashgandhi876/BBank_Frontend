import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faTwitter, faFacebookMessenger} from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    render() {
        return (
            <section className="white-section" id="footer">

                <div className={"container"}>
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
                            <ul>
                                <li>Online Donation Appointment</li>
                                <li>Blood Request</li>
                                <li>Nearby Blood Banks</li>
                                <li>Stocks Availability</li>
                                <li>Upcoming Camps</li>
                                <li>My Donation History</li>
                            </ul>
                        </div>
                        <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                            <h5 className="footer-quick-links">Get Help</h5>
                            <ul>
                                <li>Blood Donation</li>
                                <li>FAQs</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="container-fluid justify-content-around">
                        <FontAwesomeIcon className={"social-icon fa-1x social"} icon={faTwitter}/>
                        <FontAwesomeIcon className={"social-icon fa-1x social"} icon={faFacebookF}/>
                        <FontAwesomeIcon className={"social-icon fa-1x social"} icon={faInstagram}/>
                        <FontAwesomeIcon className={"social-icon fa-1x social"} icon={faFacebookMessenger}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Footer;
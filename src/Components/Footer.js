import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faTwitter,} from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="white-section" id="footer">
                    <div className="container-fluid">
                        <FontAwesomeIcon className={"social-icon"} icon={faTwitter}/>
                        <FontAwesomeIcon className={"social-icon"} icon={faFacebookF}/>
                        <FontAwesomeIcon className={"social-icon"} icon={faInstagram}/>
                        <p>© Copyright 2021 BBank</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
import React, {Component} from "react";

class Landing extends Component {
    render() {
        return (
            <div className={"landing-div"}>
                <section className={"white-section"} id="title">
                    <div className={"container-fluid"}>
                        <div className="landing row">
                            <div className={"col-lg-6 "}>
                                <h1 className={"big-heading"}>
                                    Give someone the gift of life.</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={"white-section"} id={"features"}>Features
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Temp Card</h5>
                                    <p className="card-text">Temp CardTemp CardTemp CardTemp Card</p>
                                    <a href="#" className="btn btn-primary">Temp Button</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={"colored-section  content-row"} id={"services"}>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Blood Availability</h5>
                                    <p className="card-text">Get status of available blood stock in blood banks.</p>
                                    <a href="#" className="btn btn-primary">Check Availability</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Nearby Blood Banks</h5>
                                    <p className="card-text">Get contact details of blood banks in your area.</p>
                                    <a href="#" className="btn btn-primary">Find Blood banks</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">My Donations</h5>
                                    <p className="card-text">Register, track history and maintain your profile.</p>
                                    <a href="#" className="btn btn-primary">History</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Request blood</h5>
                                    <p className="card-text">Request blood at nearby blood banks</p>
                                    <a href="#" className="btn btn-primary">Send Request</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}


export default Landing;

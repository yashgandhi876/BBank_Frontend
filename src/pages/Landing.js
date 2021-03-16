import React, { Component } from "react";

import Footer from "../Components/Layout/Footer";

class Landing extends Component {
  render() {
    return (
      <div className={"landing-div"}>
        <section className={"white-section"} id="title">
          <div className={"container-fluid"}>
            <div className="landing row">
              <div className={"col-lg-6 "}>
                <h1 className={"big-heading"}>
                  Give someone the gift of life.
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className={"white-section"} id={"features"}>
          <h1>Our numbers</h1>
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-2  d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">0</h1>
                  <p className="card-text">Registered Users</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">0</h1>
                  <p className="card-text">Blood Banks Partners</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">0</h1>
                  <p className="card-text">Total Donations till date</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">0</h1>
                  <p className="card-text">Active Blood Camps</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">0</h1>
                  <p className="card-text">Total Blood Stock</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={"colored-section  content-row"} id={"services"}>
          <h1>Our Services</h1>
          <p id={"services-description"}>
            BBank aims to connect, digitize and streamline the work flow of all
            blood banks across the country
          </p>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Blood Availability</h5>
                  <p className="card-text">
                    Get status of available blood stock in blood banks.
                  </p>
                  <a href="#" className="btn btn-danger">
                    Check Availability
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Nearby Blood Banks</h5>
                  <p className="card-text">
                    Get contact details of blood banks in your area.
                  </p>
                  <a href="#" className="btn btn-danger">
                    Find Blood banks
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">My Donations</h5>
                  <p className="card-text">
                    Register, track history and maintain your profile.
                  </p>
                  <a href="#" className="btn btn-danger">
                    History
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Request blood</h5>
                  <p className="card-text">
                    Request blood at nearby blood banks
                  </p>
                  <a href="#" className="btn btn-danger">
                    Send Request
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"white-section"} id={"join-us"}>
          <h1>Join our mission</h1>
          <p id={"join-us-description"}>
            Join us as we connect more people to our platform, and play your
            part in saving thousands of lives.
          </p>
          <div className={"row"}>
            <div className="d-flex col-lg-6 justify-content-center">
              <a href="#" className="btn btn-danger">
                Register
              </a>
            </div>
            <div className="d-flex col-lg-6 justify-content-center">
              <a href="#" className="btn btn-danger">
                Login
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default Landing;

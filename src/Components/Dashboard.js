import React, { Component } from "react";
import Footer from "./Layout/Footer";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
class Dashboard extends Component {
  render() {
    return (
      <div className={"landing-div"}>
        <section className={"white-section"} id="title">
          <h1>Our numbers</h1>
          <div className="row">
            <div className="d-flex col-lg-3 justify-content-center">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">0</h1>
                  <p className="card-text">Your Donations</p>
                </div>
              </div>
            </div>
            <div className="d-flex col-lg-3 justify-content-center">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">0</h1>
                  <p className="card-text">Camps Enrolled</p>
                </div>
              </div>
            </div>
            <div className="d-flex col-lg-3 justify-content-center">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">0</h1>
                  <p className="card-text">Your Donations</p>
                </div>
              </div>
            </div>

            <div className="d-flex col-lg-3 justify-content-center">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">0</h1>
                  <p className="card-text">DonorRank</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default Dashboard;

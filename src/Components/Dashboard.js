import React, { Component } from "react";
import LeaderboardTable from "./Leaderboard/LeaderboardTable";
import { Paper } from "@material-ui/core";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      allTimesData: [],
    };
  }

  render() {
    return (
      <div>
        <h3>Home/Dashboard</h3>
        <section className={"white-section"}>
          <h1>Your Activity</h1>
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-2 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">0</h1>
                  <p className="card-text">Your Donations</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">0</h1>
                  <p className="card-text">Total enrolled Camps</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="leaderboard">
          <div className={"container"}>
            <div className={"title"}> Our Top Contributors </div>

            <Paper zDepth={3}>
              <LeaderboardTable data={this.state.allTimesData} />
            </Paper>
          </div>
        </section>
      </div>
    );
  }
}

export default Dashboard;

import React, { Component } from "react";
import "./SearchBank.css";

import CountryData from "../assets/json/countries.json";
import StateData from "../assets/json/states.json";
import CityData from "../assets/json/cities.json";

export default class SearchBank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      state: "",
      city: "",
    };
    this.filterTable = this.filterTable.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
    this.handleState = this.handleState.bind(this);
    this.listState = this.listState.bind(this);
    this.listCity = this.listCity.bind(this);
  }
  filterTable(e) {}
  handleCountry(e) {
    this.setState({ ...this.state, country: e.target.value, countryCode: 101 });
  }

  handleState(e) {
    this.setState({
      ...this.state,
      state: e.target.value,
      stateCode: e.target.selectedIndex,
    });
  }

  handleCity(e) {
    this.setState({
      ...this.state,
      city: e.target.value,
      cityCode: e.target.selectedIndex,
    });
  }

  listState(countryCode) {
    console.log(countryCode);
    let newStateArr = StateData.states.filter(
      (state) => state.country_id == countryCode
    );

    return (
      <select
        className="locationdropdown"
        name="State"
        onChange={this.handleState}
        id=""
      >
        <option>Select State</option>
        {newStateArr.map((state) => (
          <option key={state.id} countryCode={state.id} value={state.name}>
            {" "}
            {state.name}
          </option>
        ))}
      </select>
    );
  }

  listCity(stateCode) {
    let newCityArr = CityData.cities.filter(
      (city) => city.state_id == stateCode
    );

    return (
      <select
        className="locationdropdown W-80"
        name="City"
        onChange={this.handlecity}
        id=""
      >
        <option>Select City</option>
        {newCityArr.map((city) => (
          <option key={city.id} countryCode={city.id} value={city.name}>
            {" "}
            {city.name}
          </option>
        ))}
      </select>
    );
  }
  render() {
    return (
      <div>
        <div className="searchFilter form-inline">
          <h3></h3>
          <select
            className="locationdropdown"
            name="Country"
            onChange={this.handleCountry}
            id=""
          >
            <option value="">Select Country</option>
            {CountryData.countries.map((country) => (
              <option
                key={country.id}
                countryCode={country.id}
                value={country.name}
              >
                {" "}
                {country.name}
              </option>
            ))}
          </select>

          {this.listState(this.state.countryCode)}

          {this.listCity(this.state.stateCode)}
          <button
            onClick={this.filterTable}
            className="submitbtn btn btn-danger"
            type="submit"
          >
            Search
          </button>
        </div>
        <div className=" table-responsive">
          <table className="table table-bordered">
            <tr>
              <th className="table-header" rowSpan="2">
                Blood Bank
              </th>
              <th className="table-header" rowSpan="2">
                City
              </th>
              <th className="table-header" scope="colgroup" colSpan="8">
                Blood Stocks
              </th>
            </tr>
            <tr>
              <th className="table-header" scope="col">
                A+ve
              </th>
              <th className="table-header" scope="col">
                A-ve
              </th>
              <th className="table-header" scope="col">
                B+ve
              </th>
              <th className="table-header" scope="col">
                B-ve
              </th>
              <th className="table-header" scope="col">
                AB+ve
              </th>
              <th className="table-header" scope="col">
                AB-ve
              </th>
              <th className="table-header" scope="col">
                O+ve
              </th>
              <th className="table-header" scope="col">
                O-ve
              </th>
            </tr>
            {/* Table Data */}
            <tr>
              <td>BBank1</td>
              <td>Goa</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
            </tr>
            <tr>
              <td>BBank1</td>
              <td>Goa</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
            </tr>
            <tr>
              <td>BBank1</td>
              <td>Goa</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
            </tr>

          </table>
        </div>
      </div>
    );
  }
}

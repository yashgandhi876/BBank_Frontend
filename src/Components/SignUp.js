import React, { Component } from 'react'
import CountryData from "../assets/json/countries.json"
import StateData from "../assets/json/states.json"
import CityData from "../assets/json/cities.json"
import "./SignUp.css"

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectCat:"None",
            bbank:{
                name: "",
                email: "",
                mobileNumber: "",
                stocks: "",
                country: "",
                state: "",
                city: "",
            },
            countryCode:0,
            stateCode:0,
            cityCode:0

         };
        this.submitFormAction = this.submitFormAction.bind(this);
        this.handleChangeCat = this.handleChangeCat.bind(this);
        this.handleCountry = this.handleCountry.bind(this);
        this.handleState = this.handleState.bind(this);
        this.listState = this.listState.bind(this);
        this.listCity = this.listCity.bind(this);
    }

    handleChangeCat(e){
        this.setState({
            selectCat:e.target.value
        })
    }

    handleCountry(e){
        this.setState({...this.state, bbank:{...this.state.bbank,country:e.target.value}, countryCode:e.target.selectedIndex });

    }

    handleState(e){
        this.setState({...this.state, bbank:{...this.state.bbank,state:e.target.value}, stateCode:e.target.selectedIndex });
    }

    handleCity(e){
        this.setState({...this.state, bbank:{...this.state.bbank,city:e.target.value}, cityCode:e.target.selectedIndex });
    }

    listState(countryCode){
        let newStateArr =  StateData.states.filter(state=>(state.country_id == countryCode));

        return (
            <select className="locationdropdown" name="State"  onChange={this.handleState}id="" required>
                <option>Select State</option>
                {
                    newStateArr.map(state=><option key={state.id} countryCode={state.id} value={state.name}> {state.name}</option>)
                }
            </select>
        );
    }

    listCity(stateCode){
        let newCityArr =  CityData.cities.filter(city=>(city.state_id == stateCode));

        return (
            <select className="locationdropdown W-80" name="City"  onChange={this.handlecity} id="" required>
                <option>Select City</option>
                {
                    newCityArr.map(city=><option key={city.id} countryCode={city.id} value={city.name}> {city.name}</option>)
                }
            </select>
        );
    }

    submitFormAction(){
        // add code
    }

    checkCat(value){
        if( value === "BloodBank")
            return (
                <div>
                    <input type="text" className="inputBox" value={this.state.bbank.name} onChange={(e)=>{this.setState({...this.state, bbank:{...this.state.bbank,name:e.target.value} })}} placeholder="Blood Bank Name" required/>
                    <br /><input type="email" className="inputBox" value={this.state.bbank.email} onChange={(e)=>{this.setState({...this.state, bbank:{...this.state.bbank,email:e.target.value} })}} placeholder="Email" required/>
                    <br /><input type="tel" className="inputBox" value={this.state.bbank.mobileNumber} onChange={(e)=>{this.setState({...this.state, bbank:{...this.state.bbank,mobileNumber:e.target.value} })}} placeholder="Phone Number" required/>
                    <br /><input type="text" className="inputBox" value={this.state.bbank.stocks} onChange={(e)=>{this.setState({...this.state, bbank:{...this.state.bbank,stocks:e.target.value} })}} placeholder="Stocks" required/>
                    <br /><select className="locationdropdown" name="Country"  onChange={this.handleCountry}id="" required>
                        <option value="">Select Country</option>
                        {
                            CountryData.countries.map(country =>
                                 <option key={country.id} countryCode={country.id} value={country.name}> {country.name}</option>
                            )
                        }
                    </select>
                    <br />
                    {
                        this.listState(this.state.countryCode)
                    }
                    <br />
                    {
                        this.listCity(this.state.stateCode)
                    }
                    <br/>
                    <input onClick="submitFormAction" className="submitbtn" type="submit"/>
                </div>
            );
        else if( value === "Donor")
            return (
                <div>
                    In Donor
                </div>
            );
        else if( value === "Patient")
            return (
                <div>
                    In Patient
                </div>
            );
    }


    render() {
        return (
            <div className="signUpform">
                <select className="catigoresdropdown" name="catigores" onChange={this.handleChangeCat} id="">
                    <option value="None">catigores</option>
                    <option value="BloodBank">Blood Bank</option>
                    <option value="Donor">Donor</option>
                    <option value="Patient">Patient</option>
                </select>
                {
                    this.checkCat(this.state.selectCat)
                }
            </div>
         );
    }
}

export default SignUp;
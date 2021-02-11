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
                address:"",
            },
            user:{
                name: "",
                email: "",
                mobileNumber: "",
                gender:"",
                blood_group:"",
                age:"",
                country: "",
                state: "",
                city: "",
                address:"",
            },
            countryCode:0,
            stateCode:0,
            cityCode:0

         };
        this.submitBloodBankForm = this.submitBloodBankForm.bind(this);
        this.submitUserForm = this.submitUserForm.bind(this);
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
        this.setState({...this.state, bbank:{...this.state.bbank,country:e.target.value}, countryCode:101 });

    }

    handleState(e){
        this.setState({...this.state, bbank:{...this.state.bbank,state:e.target.value}, stateCode:e.target.selectedIndex });
    }

    handleCity(e){
        this.setState({...this.state, bbank:{...this.state.bbank,city:e.target.value}, cityCode:e.target.selectedIndex });
    }

    listState(countryCode){
        console.log(countryCode);
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

    submitBloodBankForm(){
        // add code
    }

    submitUserForm(){
        //add code
    }

    checkCat(value){
        if( value === "BloodBank")
            return (
                <div>
                    <input type="text" className="inputBox" value={this.state.bbank.name} onChange={(e)=>{this.setState({...this.state, bbank:{...this.state.bbank,name:e.target.value} })}} placeholder="Blood Bank Name" required/>
                    <br /><input type="email" className="inputBox" value={this.state.bbank.email} onChange={(e)=>{this.setState({...this.state, bbank:{...this.state.bbank,email:e.target.value} })}} placeholder="Email" required/>
                    <br /><input type="tel" className="inputBox" value={this.state.bbank.mobileNumber} onChange={(e)=>{this.setState({...this.state, bbank:{...this.state.bbank,mobileNumber:e.target.value} })}} placeholder="Phone Number" required/>
                    <br /><input type="text" className="inputBox" value={this.state.bbank.stocks} onChange={(e)=>{this.setState({...this.state, bbank:{...this.state.bbank,stocks:e.target.value} })}} placeholder="Stocks" required/>
                    <br /><input type="text" className="inputBox" value={this.state.bbank.address} onChange={(e)=>{this.setState({...this.state, bbank:{...this.state.bbank,address:e.target.value} })}} placeholder="Address" required/>
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
                    <button onClick={this.submitBloodBankForm} className="submitbtn" type="submit">Sign Up</button>
                </div>
            );

        else if( value === "User")
            return (
                <div>
                    <input type="text" className="inputBox" value={this.state.user.name} onChange={(e)=>{this.setState({...this.state, user:{...this.state.user,name:e.target.value} })}} placeholder="User Name" required/>
                    <br /><input type="email" className="inputBox" value={this.state.user.email} onChange={(e)=>{this.setState({...this.state, user:{...this.state.user,email:e.target.value} })}} placeholder="Email" required/>
                    <br /><input type="tel" className="inputBox" value={this.state.user.mobileNumber} onChange={(e)=>{this.setState({...this.state, user:{...this.state.user,mobileNumber:e.target.value} })}} placeholder="Phone Number" required/>
                    <br /><input type="number" className="inputBox" value={this.state.user.age} onChange={(e)=>{this.setState({...this.state, user:{...this.state.user,age:e.target.value} })}} placeholder="Age" required/>
                    <br/> <select className="locationdropdown" name="gender" id="">
                        <option value="Gender">gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="other">other</option>
                    </select>
                    <br/> <select className="locationdropdown" name="bloodgroup" id="">
                        <option value="Blood Group">Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                    </select>
                    <br /><input type="text" className="inputBox" value={this.state.user.address} onChange={(e)=>{this.setState({...this.state, user:{...this.state.user,address:e.target.value} })}} placeholder="Address" required/>
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
                    <button onClick={this.submitUserForm} className="submitbtn" type="submit">Sign Up</button>
                </div>
            );
    }


    render() {
        return (
            <div className="signUpform">
                <select className="catigoresdropdown" name="catigores" onChange={this.handleChangeCat} id="">
                    <option value="None">catigores</option>
                    <option value="BloodBank">Blood Bank</option>
                    <option value="User">User</option>
                </select>
                {
                    this.checkCat(this.state.selectCat)
                }
            </div>
         );
    }
}

export default SignUp;
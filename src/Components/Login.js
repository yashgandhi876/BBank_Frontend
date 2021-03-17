import React, { Component } from 'react';
import "./SignUp.css"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectCat:"None",
            email:"",
            password:""
        }

        this.handleChangeCat = this.handleChangeCat.bind(this);
    }



    handleChangeCat(e){
        this.setState({
            selectCat:e.target.value
        })
    }

    submitUserForm(){}


    render() {
        return (
            <div className="LoginForm">
                <select className="catigoresdropdown" name="catigores" onChange={this.handleChangeCat} id="">
                    <option value="None">catigores</option>
                    <option value="BloodBank">Blood Bank</option>
                    <option value="User">User</option>
                </select>
                <div className="loginform">
                    <input type="email" className="inputBox" value={this.state.email} onChange={(e)=>{this.setState({...this.state, email:e.target.value} )}} placeholder="Email" required/>
                    <br /><input type="password" className="inputBox" value={this.state.password} onChange={(e)=>{this.setState({...this.state,password:e.target.value} )}} placeholder="password" required/>
                    <br />
                    <button onClick={this.submitUserForm} className="submitbtn" type="submit">Login</button>
                </div>
            </div>
         );
    }
}

export default Login;
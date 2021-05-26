import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import './LoginComponent.css'

class LoginComponent extends Component {
    render() {
        return (
            <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)',
            }}>
                <Card style={{ backgroundColor:'purple',padding:'90px'}}> 
                     
            
                    <h4>LOGIN WITH FACEBOOk</h4>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <h4>LOGIN WITH TWITTER</h4>
                    <input className="input" type="text" id="email" name="email" placeholder="Email"></input>
                    <br/>
                    <input className="input" type="text" id="password" name="password" placeholder="password"></input>
                    <br/>
                    <h4>I forgot my password?</h4>
                    <br/>
                    <button className="myBtn" style={{backgroundColor:'green'}}>Login</button>
                    <br/>
                    <button className="myBtn" style={{backgroundColor:'yellow'}}>Create New Account</button>
                </Card>           
                       
            </div>
        );
    }
}

export default LoginComponent;
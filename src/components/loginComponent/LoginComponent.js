import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './LoginComponent.css'
// import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';


class LoginComponent extends Component {
  render() {
    return (
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <Card className="myCard">
          <Card className="myCard1" style={{ boxShadow: '3px 3px', backgroundColor: '#3f166b', width: '80%', height: '80%', margin: 'auto', marginTop: '78px' }}>

            
              <span>
                {/* <h4 style={{ color: 'white' }}>LOGIN WITH FACEBOOK</h4> */}
                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '40px', color: 'blue', border: '2px solid #a24242', borderRadius: '50px', padding: '20px', marginBottom: '35px', marginLeft: '250px', marginTop: '25px' }} />
                <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '40px', color: 'blue', border: '2px solid #a24242', borderRadius: '50px', padding: '20px', marginBottom: '35px' , marginTop: '25px',zIndex:'-1' }} />
              </span>
            

            <input className="input" type="text" id="email" name="email" placeholder="Email" style={{ marginTop: '-10px' }}></input>
            <br />
            <input className="input" type="text" id="password" name="password" placeholder="Password"></input>
            <br />
            <h4 style={{ color: '#a24242', paddingLeft: '240px', marginTop: '-8px', marginBottom: '8px' }}>I forgot my password?</h4>
            <br />
            <button className="myBtn" style={{ backgroundColor: 'green' }}>Login</button>
            <br />
            <hr style={{ width: '100%', marginBottom: '40px', backgroundColor: 'red', marginTop: '2px' }} />
            <button className="myBtn" style={{ backgroundColor: 'yellow', marginBottom: '25px' }}>Create New Account</button>
          </Card>
        </Card>

      </div>
    );
  }
}

export default LoginComponent;
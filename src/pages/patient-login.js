import React from 'react'
import { Link } from 'react-router-dom'

const PatientLogin = () => {
  
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrjqPIktsc3fI-GjtU03rYp7hPphY3wYZ-L9DPuv_bGRqOQKjtan_DHPYsRuB7cXsLpQ&usqp=CAU"
                style={{ width: '40px' }}
                alt="Logo"
              />
              Health Companion App
            </a>
            <a href="index.html" style={{ textDecoration: 'none' }}>
            <Link to="/">HOME</Link> 
              
            </a>
          </div>
        </nav>
        <div className="container-fluid" style={{ backgroundColor: 'whitesmoke' }}>
          <div className="row">
            <div className="col-6">
              <h1 className="container-fluid" style={{ textAlign: 'center', marginTop: '100px', color: 'rgb(63, 19, 135)' }}>
                Health Companion <br /> App
              </h1>
              <br />
              <br />
              <h3 className="container-fluid" style={{ textAlign: 'justify' }}>
                <p>
                  "We're thrilled to have you as a patient! Our dedicated team is committed to your health and comfort throughout your journey with us."
                </p>
              </h3>
            </div>
            <div className="col-6">
              <div className="form-control" style={{ backgroundColor: 'whitesmoke' }}>
                <h1 className="text-center" style={{ color: 'rgb(49, 154, 215)' }}>Patient Login</h1>
                <p style={{ marginTop: '25px' }}>
                  <img src="images/patient safety.png" style={{ width: '25%', marginLeft: '200px' }} alt="Patient Safety" />
                </p>
                <p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email or phone"
                    style={{ textAlign: 'center' }}
                    // value={this.state.emailOrPhone}
                    // onChange={(e) => this.setState({ emailOrPhone: e.target.value })}
                  />
                </p>
                <p>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    style={{ textAlign: 'center' }}
                    // value={this.state.password}
                    // onChange={(e) => this.setState({ password: e.target.value })}
                  />
                </p>
                <p>
                  <button className="btn btn-primary" style={{ width: '100%' }}>Login</button>
                </p>
                <p>
                  Don't have an account?
                  <a href="register.html" style={{ textDecoration: 'none' }}>
                  <Link to="/register">Sign up/Register</Link> 
                    
                    
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default PatientLogin
 
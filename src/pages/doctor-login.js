import React from 'react'
import { Link, Route } from 'react-router-dom'
import {DoctorRegister} from './doctor-register'

const DoctorLogin = () => {
  return (
    <div>
       {/* <Route path="doctorRegister" element={<DoctorRegister />} /> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrjqPIktsc3fI-GjtU03rYp7hPphY3wYZ-L9DPuv_bGRqOQKjtan_DHPYsRuB7cXsLpQ&usqp=CAU"
              style={{ width: '40px' }}
              alt="Health Companion Logo"
            />
            Health Companion App
          </a>
          <a href="index.html" style={{ textDecoration: 'none' }}>
            <b> <Link to='/'>HOME</Link> </b>
          </a>
        </div>
      </nav>
      <div className="container-fluid" style={{ backgroundColor: 'whitesmoke' }}>
        <div className="row">
          <div className="col-6">
            <h1 className="container-fluid" style={{ textAlign: 'center', marginTop: '100px', color: 'rgb(54, 6, 131)' }}>
              Health Companion <br /> App
            </h1>
            <br />
            <br />
            <h3 className="container-fluid" style={{ textAlign: 'justify' }}>
              <p>"Medicines cure diseases but only doctors can cure patients"</p>
            </h3>
          </div>
          <div className="col-6">
            <div className="form-control">
              <h1 className="text-center" style={{ color: 'rgb(19, 104, 153)' }}>
                Doctor Login
              </h1>
              <p style={{ marginTop: '25px' }}>
                <img src="images/dr logo.jpg" style={{ width: '25%', marginLeft: '200px' }} alt="Doctor Logo" />
              </p>
              <p>
                <input type="text" className="form-control" placeholder="Email or phone" style={{ textAlign: 'center' }} />
              </p>
              <p>
                <input type="password" className="form-control" placeholder="Password" style={{ textAlign: 'center' }} />
              </p>
              <p>
                <button className="btn btn-primary" style={{ width: '100%' }}>Login</button>
              </p>
              <p>
                Don't you have an account?
                <a href="register_doctor.html" style={{ textDecoration: 'none' }}><b> <Link to='/doctorRegister'>Sign up/Register</Link>  </b></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorLogin
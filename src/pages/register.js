import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Register = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: 'M',
    address: '',
    phoneNumber: '',
    email: '',
    password: '',
    termsAccepted: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

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
          <div className="container">
            <a href="patient_login.html" style={{ textDecoration: 'none' }}>
              <b><Link to='/patientLogin'>Login</Link> </b>
            </a>
            <a href="#" style={{ textDecoration: 'none' }}>
              <b>/</b>
            </a>
            <a href="index.html" style={{ textDecoration: 'none' }}>
              <b><Link to="/">HOME</Link> </b>
            </a>
          </div>
          <a href="register_doctor.html" style={{ textDecoration: 'none' }}>
            <b>pl</b>
          </a>
        </div>
      </nav>
      <br />
      <div className="containers">
        <div className="row">
          <div className="col-09">
            <div className="panel panel-primary">
              <div className="panel-heading text-center">
                <h1 style={{ color: 'red' }}>Patient Registration Form</h1>
              </div>
              <div className="panel-body">
                <p>
                  <img
                    src="images/Patient.logo.jpg"
                    style={{ width: '20%', marginLeft: '40%', marginRight: '25%' }}
                    alt="Patient Logo"
                  />
                </p>
                <div className="form-control">
                  <br />
                  <p>
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullName"
                      required
                      id="Full Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <label>DATE OF BIRTH</label>
                    <input
                      type="date"
                      className="form-control"
                      name="dateOfBirth"
                      required
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                    />
                  </p>
                  <input
                    type="radio"
                    name="gender"
                    value="M"
                    id="MALE"
                    checked={formData.gender === 'M'}
                    onChange={handleInputChange}
                  />
                  MALE
                  <input
                    type="radio"
                    name="gender"
                    value="F"
                    id="FEMALE"
                    checked={formData.gender === 'F'}
                    onChange={handleInputChange}
                  />
                  FEMALE
                  <p>
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <label>NUMBER</label>
                    <input
                      type="text"
                      maxLength="15"
                      name="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      required
                      checked={formData.termsAccepted}
                      onChange={handleInputChange}
                    />
                    &nbsp;I accept the terms of use & Privacy Policy
                  </p>
                  <p>
                    <button className="btn btn-primary" style={{ width: '100%' }}>
                      Register
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

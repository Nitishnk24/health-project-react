import React from 'react'

const DoctorRegister = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10">
          <div className="panel panel-primary">
            <div className="panel-heading text-center">
              <h1>Doctor Registration Form</h1>
            </div>
            <div className="panel-body">
              <form action="connect.php" method="POST">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <div>
                    <label htmlFor="male" className="radio-inline">
                      <input
                        type="radio"
                        name="gender"
                        value="m"
                        id="male"
                      />
                      Male
                    </label>
                    <label htmlFor="female" className="radio-inline">
                      <input
                        type="radio"
                        name="gender"
                        value="f"
                        id="female"
                      />
                      Female
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <p>
                    <label>DATE OF BIRTH</label>
                    <input
                      type="date"
                      className="form-control"
                      id="DOB"
                      name="DOB"
                      required
                    />
                  </p>
                </div>
                <div className="form-group">
                  <label htmlFor="MLN">Medical License Number:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="MLN"
                    name="MLN"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Specialization">Specialization:</label>
                  <br />
                  <select id="Specialization" name="Specialization">
                    <option> ---select option----</option>
                    <option>General Surgeon</option>
                    <option>Cardiologist</option>
                    <option>Dermatologist</option>
                    <option>Ophthalmologist</option>
                    <option>Neurologist</option>
                    <option>Obstetrician-Gynecologist</option>
                    <option>Anesthesiologist</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="MedicalSchool">Medical School</label>
                  <input
                    type="text"
                    className="form-control"
                    id="MedicalSchool"
                    name="MedicalSchool"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="YOG">Year of Graduation</label>
                  <input
                    type="date"
                    className="form-control"
                    id="YOG"
                    name="YOG"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                    minLength="8"
                    maxLength="12"
                  />
                </div>
                <div className="form-group">
                  <label>Phone NUMBER</label>
                  <input
                    type="number"
                    maxLength="10"
                    id="number"
                    name="number"
                    minLength="10"
                    required
                  />
                </div>
                <input type="submit" className="btn btn-primary" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DoctorRegister

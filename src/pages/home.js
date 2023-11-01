import React from 'react'
import "../styles/style.css"
import { Link } from 'react-router-dom'

//comment

const Home = () => {
  return (
    <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand"> 
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrjqPIktsc3fI-GjtU03rYp7hPphY3wYZ-L9DPuv_bGRqOQKjtan_DHPYsRuB7cXsLpQ&usqp=CAU"
                            style={{ width: '40px' }}
                            alt="Health Companion App Logo"
                        />
                        Health Companion App
                    </a>
                    <div className="container" style={{ bottom: '2px' }}>
                        <a href="doctor_login.html" style={{ textDecoration: 'none' }}><b><Link to='doctorLogin'>Doctor_Login</Link> </b></a>
                        <a href="#" style={{ textDecoration: 'none' }}><b>/</b></a>
                        <a href="patient_login.html" style={{ textDecoration: 'none' }}><b> <Link to='patientLogin'>Patient_Login</Link> </b></a>
                    </div>
                </div>
            </nav>
            <div style={{ backgroundColor: 'whitesmoke' }}>
                <div className="row">
                    <div className="col-6">
                        <div className="container" style={{ margin: '5%' }}>
                            <h4>
                                "If the sign on your heart says
                                <b>"WELCOME"</b>
                            </h4>
                            <br />
                            <img src="images/healthcare1.jpg" alt="Healthcare Image" width="100%" height="200" />
                            <h3>
                                <p>
                                    "Welcome to our healthcare family! Your well-being is our top priority, and we're here to provide you with the best possible care."
                                </p>
                            </h3>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="container" style={{ marginTop: '5%' }}>
                            <img
                                src="https://www.zieler.co.uk/wp-content/uploads/2020/05/Lets-Get-Started-2-1.webp"
                                style={{ width: '75%', marginTop: '10px' }}
                                alt="Get Started Image"
                            />
                            <h3>
                                <p>"The secret of getting ahead is getting started."</p>
                                <br />
                                <br />
                            </h3>
                            <a href="patient_login.html" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                            <Link to="/patientLogin">
                                <b>Get Started</b>
                                </Link> 
                                
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <footer style={{ backgroundColor: 'white' }}>
                <div className="row">
                    <div className="col-6">
                        <div className="form-control">
                            <br />
                            <h5>Contact us</h5>
                            <p>
                                <b>Address:</b>
                                #123, 4th cross, 21st Main
                                <br />
                                Jayanagar 4th T Block,
                                <br />
                                Bengaluru-560078
                            </p>
                            <p>
                                <b>Email ID:</b> contact@HealthCareApp.com
                            </p>
                            <p>
                                <b>Mobile:</b> +91 1234567890
                            </p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-control">
                            <br />
                            <p>
                                <b>Customer support</b>
                                <br />
                                +91 (0)1235 844600
                                <br />
                                <a href="https://support.google.com/websearch/answer/179386?source=g&hl=en">support@Customer.com</a>
                            </p>
                            <p>
                                <a href="https://in.linkedin.com/in/nitish-n-kotumuchagi-47a2ba228?trk=people_directory">LINKED IN</a>
                                <br />
                                <a href="https://en.wikipedia.org/wiki/Bot">gbot581115@gmail.com</a>
                                <br />
                                <a href="about" target="_blank"> <Link to='/about'>ABOUT</Link> </a>
                                <br />
                                <a href="Copyright complaints">Copyright complaints</a>
                                <br />
                                <a href="Terms and conditions">Terms and conditions</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
  )
}

export default Home

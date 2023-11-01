import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
// import Home from "./pages/home"
import DoctorLogin from "./pages/doctor-login"
import DoctorRegister from "./pages/doctor-register"
import PatientLogin from "./pages/patient-login"
import Register from "./pages/register" 
import Home from "./pages/home"
import About from './pages/about';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="patientLogin" element={<PatientLogin />} />
      <Route path="register" element={<Register />} />
      <Route path="doctorLogin" element={<DoctorLogin />} />
      <Route path="doctorRegister" element={<DoctorRegister />} />
      <Route path='about' element={<About />} />
      
      
      </Routes>
     
    
    </BrowserRouter>
  );
}

export default App;

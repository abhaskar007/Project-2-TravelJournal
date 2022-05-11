import react from "react";
import {BsGlobe} from "react-icons/bs";
import '../App.css'


function Navbar() {
  
  return (
    <div className="nav">
      <div className="nav-container">
      <span className = "nav-title"><BsGlobe/></span>
     <span className = "nav-title">
     
         My Travel Journal.</span>
      </div>
    </div>
  )
}

export default Navbar
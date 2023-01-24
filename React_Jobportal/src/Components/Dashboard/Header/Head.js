import React from "react";
import { Link } from "react-router-dom";
import "./Head.css";
function Head()
{
    return(
        <div className="header">
          <div className="sec1">
           <img src="Images\HVLogo.png" alt="HV Logo"/>
          </div>
          <div className="sec2">
          <Link  to='/dashboard'><div> Dashboard</div></Link>
          <Link to='/profile'> <div> Application Profile</div></Link> 
          <Link to='/alljobs'><div> Applied Jobs</div> </Link>
          <div> Activity</div> 
          <div> Job Agent</div> 
          </div>
          <div className="sec3">
          <img src="Images\SigninLogo.png" alt="Singup Logo"/>
          </div>
        
        </div>
    );
}
export default Head;
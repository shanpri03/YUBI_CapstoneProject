import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Head.css";

function Head()
{
  let navigate =useNavigate();
const fetchlogout =async ()=>{
    let res = await axios.get('/logout')
    console.log(res.data)
    if(res.data){
      navigate('/')
    }
}

    return(
        <div className="launch-header">
          <div className="sec1">
           <img src="Images\HVLogo.png" alt="HV Logo"/>
          </div>
          <nav className="sec2">
          <Link  to='/dashboard'><div>Dashboard</div></Link>
          <Link to='/userprofile'> <div> Application Profile</div></Link> 
         <div onClick={navigate('/')}> Applied Jobs </div> 
          <div> Activity</div> 
          <div> Job Agent</div> 
          <div><button onClick={fetchlogout}>logout</button></div>
          </nav>
          <div className="sec3">
          <img src="Images\SigninLogo.png" alt="Singup Logo"/>
          </div>
        
        </div>
    );
}
export default Head;
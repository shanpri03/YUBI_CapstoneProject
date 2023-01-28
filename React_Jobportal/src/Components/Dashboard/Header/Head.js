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
          <div className="sec-1">
           <img src="Images\HVLogo.png" alt="HV Logo"/>
          </div>
          <nav className="sec-2">
         <div ><button onClick={navigate('/')}>DashBoard</button></div>
          <div><button onClick={navigate('/profile')}>Application Profile</button></div>
         <div ><button onClick={navigate('/')}>Applied jobs</button></div> 
          <div> <button>Activity</button></div> 
          <div> <button>Job Agent</button></div> 
          <div><button onClick={fetchlogout}>logout</button></div>
          <div className="img-sec">
          <img src="Images\SigninLogo.png" alt="Singup Logo"/>
          </div>
          </nav>
         
        
        </div>
    );
}
export default Head;
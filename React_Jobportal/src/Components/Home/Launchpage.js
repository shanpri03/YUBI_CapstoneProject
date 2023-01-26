import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Loginpage from "./Loginpage";
import Useraccount from "../UserInfo/Useraccount";
import './launch.css'
function Launchpage()
{
    return(
        <>
    <div className="launch">
        <div className="launch-header">
        <div className="sec1">
        <img src="Images\HVLogo.png" alt="HV Logo"/>
        </div> 
        <div className="sec1a">
        <p style={{color:"white"}}> &nbsp;&nbsp; Success Stories</p>
        <p style={{color:"white"}}> &nbsp;&nbsp; Explore VLearn</p>
       <div> <Link  to='/signup'>  <p style={{color:"white"}}>  &nbsp;&nbsp; Create Account</p> </Link> </div>
        </div>
        </div>
        <div className="content">
        <div className="section1">
        <h2 style={{color:"darkblue"}}>We create those who will create the future.</h2>
        <h3 style={{color:"darkblue"}} >Mission</h3>
        <p>Hero Vired is a learning company on a mission to not only re-imagine the way we learn, 
            but also build a better future. We’re here to equip our learners with the knowledge and
            expertise them. We do this through a engaged and holistic learning experience, and 
            empower them to transform careers.
        </p>
        <h2 style={{color:"darkblue"}} >Vision</h2>
       <p> Hero Vired’s vision is to use modern apedagogical methods to provide holistic learning.
         We create highly skilled professionals, but also for the yet-to-be created jobs of the future. 
         Our goal is to prepare them to become the reliable first choice in a rapidly transforming digital economy.</p>
        </div>
        <div className="section2">            
        <Loginpage></Loginpage>    
        </div>  
        </div> 
        <div className="footer">
        <p>&copy; 2021 All rights reserved</p>
        <div className="social">
        <p><b>Follow us on :</b></p>
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
         <a href="#" class="fa fa-google"></a>
        <a href="#" class="fa fa-linkedin"></a>
        <a href="#" class="fa fa-youtube"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a href="#" class="fa fa-pinterest"></a>
        </div>
       
        </div>
   </div>
   </>);
}
export default Launchpage;
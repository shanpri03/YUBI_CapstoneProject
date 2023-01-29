import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Useraccount from "../UserInfo/Useraccount";
import { useState } from "react";
import Login from "./Login";
import './launch.css'
function Launchpage() {
    let navigate = useNavigate();
    let[action,setAction] = useState(0);
    return (
        <>
            <div className="main-page">
                <div className="header-login">
                    <div className="sec-1">
                        <img src="Images\HVLogo.png" alt="HV Logo" />
                    </div>
                </div>
                <div className="content">
                    <div className="section-1">
                        <h1>We create those who will create the future.</h1>
                        <h2>Mission  & Vision</h2>
                        <p>
                            Our Mission is to provide excellent manpower and services by maintaining professionalism, efficiency, and integrity. Operating profitably as a socially committed and responsible corporate citizen.
                        </p>
                        <p>
                            We aim to satisfy the manpower needs and demands of all valued clients by providing professional and efficient recruits in the most profitable way
                        </p>
                        <p>
                            To achieve this mission and vision, we have carefully laid out the following strategies back up with our existing resources and comprehensive understanding of the recruitment process.
                        </p>
                    </div>
                    <div className="section-2">
            {action==0 ?(
                 <Login setAction={setAction}></Login>

            ):<Useraccount setAction={setAction}></Useraccount>}
                       

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
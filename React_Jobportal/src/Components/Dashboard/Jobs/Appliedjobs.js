import React from "react"
import Head from "../Header/Head";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Button } from "bootstrap";
import "./Subheader.css"
function Appliedjobs()
{
  let [data, setdata] =   useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get('./jobdetail');
      setdata(res.data);
    }
    fetchData();
  }, [])

    return(
     
<div className="test">
  <Head></Head>
    <div>
<h4>Applied Jobs</h4>
                    <input type="text" placeholder = "Title,Client,Location"></input>
                    <button name =  "Search" >Search</button>
                </div>
                <br></br>
                <div className="head4">
            <div class="Job">
               <select  class="Jobdropdown-content">
                  <option value="Alljobs">Alljobs</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
               </select>
               
            </div>
            <div class="Ind">
            <select  class="Inddropdown-content">
                  <option value="Alljobs">Industry</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
               </select>          
            </div>
            <div class="Loc">
            <select  class="Locdropdown-content">
                  <option value="Alljobs">Location</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
               </select> 
          
            </div>
            <div class="Type">
            <select  class="Typedropdown-content">
                  <option value="Alljobs">Type</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
               </select> 
              </div>

            <div class="Date">
            <select  class="Datedropdown-content">
                  <option value="Alljobs">Date</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
               </select> 
      
            </div>

         </div>

               
                {data.map((ele) =>
       <div className="head5">
          <div className="head5t">
            <h3>
              <div>
                <br></br>
                {ele.jobCode} -  {ele.jobTitle}
              </div>
            </h3>
            <div className="head5ta">
              <div className="head5da">
                <img src="Images\Location.png" alt="All jobs Logo" />
                <div>
                  {ele.location}
                </div>
              </div>
              <div className="head5db">
                <img src="Images\Salary.png" alt="Full time Logo" />
                <div>
                  {ele.jobType}
                </div>
              </div>
              <div className="head5dc">
                <img src="Images\Salary.png" alt="Salary Logo" />
                <div>
                  {ele.salary}
                </div>
              </div>
              <div className="head5dd">
                <img src="Images\Building.png" alt="Building Logo" />
                <div>
                  {ele.companyName}
                </div>
              </div>
            </div>
            <div className="head5tb">
              <div>
               
                {ele.jobDescription}
            
              </div>
            </div>
          
          </div>
        </div>
         )}

          <div>
          <br></br>
          <br></br>
            <Link to="/dashboard" style={{ color: "black" }} >
             <h4> Go to Dashboard </h4>
            </Link>
          </div>
</div>
    );
}
export default Appliedjobs;

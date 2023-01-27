import React from "react"
import Head from "../Header/Head";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Button } from "bootstrap";
import "../Subheader/Subheader.css"
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
     
      <>
      <Head/>
      <div className="subheader">
         <div className="head3">
        <h2>Applied Jobs</h2>
             <input  className='search-input' type="text" placeholder="Title,Client,Location"/>
             <button name="Search" >Search</button>
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

         <div className="head5">
              <>
              {data.length ? data.map((ele)=>(
                   <div className="job-details">
                   <div className="job-desc">
                      <h3 style={{color:"blue"}}>{ele.jobTitle}-{ele.jobCode}</h3>
                      <button className="apply-btn">apply</button>
                      </div>
                      <div className="job-head">
                         <div className="job-head-1">
                            <img src="Images\Location.png" alt="All jobs Logo" />
                            <p>{ele.location}</p>      
                            </div>
                         <div className="job-head-2">
                            <img src="Images\FullTime.png" alt="Full time Logo" />
                            <p>{ele.jobType}</p>
                         </div>
                         <div className="job-head-3">
                            <img src="Images\Salary.png" alt="Salary Logo" />
                           <p> {ele.salary}</p>
                         </div>
                         <div className="job-head-4">
                            <img src="Images\Building.png" alt="Building Logo" />
                            <p>{ele.companyName}</p>
                         </div>
                      </div>
                      <div className="job-content">
                         <p> {ele.jobDescription}
                         </p>
                      </div>
        
                   </div>    

              )):<div>No data</div>}
           
              
              </> 
              </div>
              </div>
              
</>
    );
}
export default Appliedjobs;

import React from "react"
import Head from "../Header/Head";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Button } from "bootstrap";
import "./Subheader.css"

export default function Subheader() {
   let [data, setdata] =   useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get('./jobdetail');
      setdata(res.data);
    }
    fetchData();
  }, [])
   return (
      <div className="subheader">
         <div className="section-1">
         <div className="head1">
            <h2>Snapshots</h2>
         </div>
                 
         <div className="sections">
            <div className="sec1-a">
               <img src="Images\AllJobs.png" alt="All jobs Logo" />
               <div className="sec1-a-col">
               <Link to="/alljobs" style={{color:"black"}} >
                     All Jobs
               </Link>
               <p>100</p>
               </div>
            </div>
            <div className="sec1-b">
               <img src="Images\AllJobs.png" alt="All jobs Logo" />
               <div className="sec1-b-col">
               <Link to="/elligiblejobs" style={{color:"black"}} >
                     Elligible Jobs
               </Link>
                  <p>80</p>
               </div>
            </div>
            <div className="sec1-c">
               <img src="Images\AllJobs.png" alt="Alljobs Logo" />
               <div className="sec1-c-col">
               <Link to="/appliedjobs" style={{color:"black"}} >
                     Applied Jobs
                </Link> 
                  <p>50</p>
               </div>
            </div>
         </div>
         </div>
         <div className="section-2">
         <div className="head2">
            <h2>My Applications</h2>
         </div>
         <div className="sections">
            <div className="sec1-a">
               <img src="Images\AllJobs.png" alt="All jobs Logo" />
               <div className="sec1acol">
               <Link to="/shortlisted" style={{color:"black"}} >
                     Shortlisted
                </Link>
                  <p>100</p>
               </div>
            </div>
            <div className="sec1-b">
               <img src="Images\AllJobs.png" alt="All jobs Logo" />
               <div className="sec1-b-col">
               <Link to="/rejected" style={{color:"black"}} >
                     Rejected
              </Link> 
                  <p>80</p>
               </div>
            </div>
            <div className="sec1-c">
               <img src="Images\AllJobs.png" alt="All jobs Logo" />
               <div className="sec1-c-col">
               <Link to="/interviewing" style={{color:"black"}} >
                     Interviewing
              </Link>
                  <p>50</p>
               </div>
            </div>
            <div className="sec1-d">
               <img src="Images\AllJobs.png" alt="All jobs Logo" />
               <div className="sec1-d-col">
               <Link to="/offered" style={{color:"black"}} >
                     Offer Received
               </Link>
                  <p>5</p>
               </div>
            </div>
         </div>
            
         </div> 
        

         <div className="head3">
            <h2>All Jobs</h2>
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
            <div className="job-details">
            <div className="job-desc">
            { data.map((ele) => 
             <div>        
            <h3>             
                {ele.jobCode} -  {ele.jobTitle}
            </h3>
            <button className="apply-btn">apply</button>
             </div>
             )}
                <div className="job-head">
                <div className="job-head-1"> 
                  <img src="Images\Location.png" alt="All jobs Logo" />
                  { data.map((ele) => 
                  <div>
                  {ele.location}
                   </div>
                  )}
               </div>
               <div className="job-head-2">
                     <img src="Images\FullTime.png" alt="Full time Logo" />
                     { data.map((ele) => 
                  <div>
                  {ele.jobType}
                   </div>
                  )}
                  </div>
                  <div className="job-head-3">
                     <img src="Images\Salary.png" alt="Salary Logo" />
                     { data.map((ele) => 
                  <div>
                  {ele.salary}
                   </div>
                  )}
                  </div>
                  <div className="job-head-4">
                     <img src="Images\Building.png" alt="Building Logo" />
                     { data.map((ele) => 
                  <div>
                  {ele.companyName}
                   </div>
                  )}
                  </div>
               </div>
               <div className="job-content">
               { data.map((ele) => 
                  <div>
                  {ele.jobDescription}
                   </div>
                  )}
               </div>
               
             

             </div>
         </div>
      </div>      
         </div>      

   );
}
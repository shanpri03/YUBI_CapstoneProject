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
  let [stat,setStat] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get('/getappliedjobs');
      setdata(res.data);
      setStat(true)
    }
    fetchData();
    console.log(data)
  }, [stat])

    return(
     
      <>
      <Head/>
      <div className="head3">
               <h2>All Jobs</h2>
               <input className='search-input' type="text" placeholder="Title,Client,Location" />
               <button name="Search" >Search</button>
            </div>
     
            <div className="head4">
               <div class="Job">
                  <select class="Jobdropdown-content">
                     <option value="Alljobs">Alljobs</option>
                     <option value="saab">Saab</option>
                     <option value="mercedes">Mercedes</option>
                     <option value="audi">Audi</option>
                  </select>
                  {/* <button>All Jobs</button>
              <div>
                 <p>Job1</p>
                 <p>Job2</p>
                 <p>Job3</p>
              </div> */}
               </div>
               <div class="Ind">
                  <select class="Inddropdown-content">
                     <option value="Alljobs">Industry</option>
                     <option value="saab">Saab</option>
                     <option value="mercedes">Mercedes</option>
                     <option value="audi">Audi</option>
                  </select>
               </div>
               <div class="Loc">
                  <select class="Locdropdown-content">
                     <option value="Alljobs">Location</option>
                     <option value="saab">Saab</option>
                     <option value="mercedes">Mercedes</option>
                     <option value="audi">Audi</option>
                  </select>

               </div>
               <div class="Type">
                  <select class="Typedropdown-content">
                     <option value="Alljobs">Type</option>
                     <option value="saab">Saab</option>
                     <option value="mercedes">Mercedes</option>
                     <option value="audi">Audi</option>
                  </select>
               </div>

               <div class="Date">
                  <select class="Datedropdown-content">
                     <option value="Alljobs">Date</option>
                     <option value="saab">Saab</option>
                     <option value="mercedes">Mercedes</option>
                     <option value="audi">Audi</option>
                  </select>

               </div>

            </div>
            <div className="head5">
               
                  {data.length ? data.map((ele) => (
                     <div className="job-details">
                        <div className="job-desc">
                           <h3>{ele.job_title}-{ele.job_code}</h3>
                           <button name='job_id' style={{color:"green",border:"none"}} value={ele.id} className="apply-btn">Applied</button>
                        </div>
                        <div className="job-head">
                           <div className="job-head-1">
                              <img src="Images\placeholder.png" alt="All jobs Logo" />
                              <p>{ele.location}</p>
                           </div>
                           <div className="job-head-2">
                             <span><img src="Images\suitcase.png" alt="Full time Logo" /></span> 
                              <p>{ele.job_type}</p>
                           </div>
                           <div className="job-head-3">
                              <img src="Images\Salary.png" alt="Salary Logo" />
                              <p> {ele.salary}</p>
                           </div>
                           <div className="job-head-4">
                              <img src="Images\company.png" alt="Building Logo" />
                              <p>{ele.company_name}</p>
                           </div>
                        </div>
                        <div className="job-content">
                           <p> {ele.job_description}
                           </p>
                        </div>

                     </div>

                  )) : <div>No data</div>}


            
            </div>
              
</>
    );
}
export default Appliedjobs;

import React, { useContext } from "react"
import "./Subheader.css"
import axios from "axios";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DataContext from "../../Context/DataContext";
import { createRoot } from 'react-dom'
import * as ReactDOM from 'react-dom/client';

export default function Subheader() {

   let [data, setdata] = useState([]);
   let [filterData, setFilterData] = useState([]);
   let [stat, setStat] = useState(false)
   let [statusData, setStatusData] = useState([])
   let [elData, setElData] = useState([])
   let navigate = useNavigate();
   let [jobCont, setjobCont] = useState({})
   let ctx = useContext(DataContext)

   useEffect(() => {
      const fetchData = async () => {
         let res = await axios.get('/jobdetail');
         setStat(true)
         setdata(res.data);
      }

      const fetchStatus = async () => {
         let res = await axios.get('/getstatus');
         console.log(res.data)
         setStatusData(res.data);
      }

      const fetchEligible = async () => {
         let res = await axios.get('/eligiblejobs');
         console.log(res.data)
         setElData(res.data[0]);


      }

      fetchData();
      fetchStatus();
      fetchEligible();
      console.log(statusData)
      console.log(elData)
   }, [stat])
 
   const handleSearch = () => {

      let container = null;
      const element = (
         <>
            {filterData.length ? filterData.map((ele) => (
               <div className="job-details">
                  <div className="job-desc">
                     <h3 style={{ color: "#006FCB" }}>{ele.job_title}-{ele.job_code}</h3>
                     <button name='job_id' value={ele.id} className="apply-btn" onClick={handleClick}>Apply</button>
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

            )) : <>
               {data.length ? data.map((ele) => (
                  <div className="job-details">
                     <div className="job-desc">
                        <h3 style={{ color: "#006FCB" }}>{ele.job_title}-{ele.job_code}</h3>
                        <button name='job_id' value={ele.id} className="apply-btn" onClick={handleClick}>Apply</button>
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
               )) : <div> No Data</div>
               }

            </>}
         </>
      );


      document.addEventListener('DOMContentLoaded', function (event) {
         if (!container) {
            container = document.getElementById('job-content');
            const root = ReactDOM.createRoot(
               document.getElementById('job-content'));
            root.render(
               element
            );
         }
      });
      let value = document.getElementById('search-value').value
      console.log(value)
      let tempData = data.filter((ele) => ele.company_name.toLowerCase() == value.toLowerCase() ||
         ele.location.toLowerCase() == value.toLowerCase() ||
         ele.job_title.toLowerCase() == value.toLowerCase())
      setFilterData(tempData)
   
 
   }

   const handleClick = (e) => {
      let value = e.target.value 
      let job_id = e.target.value
      let jobdata= { job_id: job_id, user_id: ctx.uid }
      setjobCont({ job_id: job_id, user_id: ctx.uid })
      console.log(jobCont);
      sendJobContentData(jobdata);
      let btn = document.getElementById("job-"+value)
      btn.innerHTML ="applied"
      btn.setAttribute('style',"background: #38A743")


   }
   const sendJobContentData = async (jobCont) => {
      let res = await axios.post('/updateapplied', jobCont)
      console.log(res.data)
   }


   let shortListedData = statusData.filter((ele) => ele.status.toLowerCase() == "shortlisted")
   let interviewistedData = statusData.filter((ele) => ele.status.toLowerCase() == "interviewing")
   let rejectedData = statusData.filter((ele) => ele.status.toLowerCase() == "rejected")
   let appliedData = statusData.filter((ele) => ele.status.toLowerCase() == "applied")
   let offerData = statusData.filter((ele) => ele.status.toLowerCase() == "offered")




   return (
      <>

         <div className="subheader">
            <nav className="section-1">
               <div className="header">
                  <p>Snapshots</p>
               </div>
               <nav className="sections">
                  <button className="sec-a-btn" onClick={() => { navigate('/alljobs') }}>
                     <div className="sec-a">
                        <span><img src="Images\AllJobs.png" alt="All jobs Logo" /></span>
                        <div className="sec-a-col">
                           <span>All Jobs </span>
                           <span className="job-cnt">{data.length}</span>
                        </div>
                        <div className="arrow-col">
                           <img src="Images\arrow.png" alt="All jobs Logo" />
                        </div>

                     </div>
                  </button>

                  <button className="sec-a-btn" onClick={() => { navigate('/eligiblejobs') }}>
                     <div className="sec-a">
                        <span><img src="Images\eJobs.png" alt="All jobs Logo" /></span>
                        <div className="sec-a-col">
                           <span>Eligible jobs</span>
                           <span className="job-cnt">{elData.length}</span>
                        </div>
                        <div className="arrow-col">
                           <img src="Images\arrow.png" alt="All jobs Logo" />
                        </div>
                     </div></button>

                  <button className="sec-a-btn" onClick={() => { navigate('/appliedjobs') }}>
                     <div className="sec-a">
                        <span><img src="Images\appliedJobs.png" alt="Alljobs Logo" /></span>
                        <div className="sec-a-col">
                           <span>Applied Jobs</span>
                           <span className="job-cnt">{appliedData.length}</span>
                        </div>
                        <div className="arrow-col">
                           <img src="Images\arrow.png" alt="All jobs Logo" />
                        </div>
                     </div>
                  </button>

               </nav>
            </nav>
            <div className="section-2">
               <div className="header">
                  <p>My Applications</p>
               </div>
               <div className="sections">

                  <button className="sec-a-btn" onClick={() => { navigate('/shortlisted') }}>
                     <div className="sec-a">
                        <span><img src="Images\shortlisted.png" alt="All jobs Logo" /></span>
                        <div className="sec-a-col">
                           <span>Shortlisted</span>
                           <span className="job-cnt">{shortListedData.length}</span>
                        </div>
                        <div className="arrow-col">
                           <img src="Images\arrow.png" alt="All jobs Logo" />
                        </div>
                     </div>
                  </button>

                  <button className="sec-a-btn" onClick={() => { navigate('/interviewing') }}>
                     <div className="sec-a">
                        <span><img src="Images\interview.png" alt="All jobs Logo" /></span>
                        <div className="sec-a-col">
                           <span>Interviewing</span>
                           <span className="job-cnt">{interviewistedData.length}</span>
                        </div>
                        <div className="arrow-col">
                           <img src="Images\arrow.png" alt="All jobs Logo" />
                        </div>
                     </div>
                  </button>
                  <button className="sec-a-btn" onClick={() => { navigate('/rejected') }}>
                     <div className="sec-a">
                        <span><img src="Images\reject.png" alt="All jobs Logo" /></span>
                        <div className="sec-a-col">
                           <span>Rejected</span>
                           <span className="job-cnt">{rejectedData.length}</span>
                        </div>
                        <div className="arrow-col">
                           <img src="Images\arrow.png" alt="All jobs Logo" />
                        </div>
                     </div>
                  </button>
                  <button className="sec-a-btn" onClick={() => { navigate('/offered') }}>
                     <div className="sec-a">
                        <span><img src="Images\offer.png" alt="All jobs Logo" /></span>
                        <div className="sec-a-col">
                           <span>Offered</span>
                           <span className="job-cnt">{offerData.length}</span>
                        </div>
                        <div className="arrow-col">
                           <img src="Images\arrow.png" alt="All jobs Logo" />
                        </div>
                     </div>
                  </button>

               </div>

            </div>


            <div className="head3">
               <h2>All Jobs</h2>
               <input className='search-input' id="search-value" type="text" placeholder="Title,Client,Location" />
               <button name="Search" onClick={handleSearch}>Search</button>
            </div>
            <br></br>


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
            <div className="head5" id="job-content">
               <>
                  {filterData.length ? filterData.map((ele) => (
                     <div className="job-details">
                        <div className="job-desc">
                           <h3 style={{ color: "#006FCB" }}>{ele.job_title}-{ele.job_code}</h3>
                           <button name='job_id' value={ele.id} className="apply-btn" onClick={handleClick}>Apply</button>
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

                  )) : <>
                     {data.length ? data.map((ele) => (
                        <div className="job-details">
                           <div className="job-desc">
                              <h3 style={{ color: "#006FCB" }}>{ele.job_title}-{ele.job_code}</h3>
                           <button name='job_id' value={ele.id} id ={`job-${ele.id}`} className="apply-btn" onClick={handleClick}>Apply</button>                             
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
                     )) : <div> No Data</div>
                     }

                  </>}


               </>
            </div>

         </div>


      </>

   );
}
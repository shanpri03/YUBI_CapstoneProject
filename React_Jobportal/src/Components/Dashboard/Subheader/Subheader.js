import React from "react"
import "./Subheader.css"
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
export default function Subheader() {
   
    let [data,setdata] = useState([]);
    let navigate=useNavigate();
   
    useEffect(() => {
       const fetchData = async () => {
          let res = await axios.get('/jobdetail');
          setdata(res.data);
       }
       fetchData();
       const fetchlogout =async ()=>{
         let res = await axios.get('/login')
         console.log(res.data)
         if(!res.data){
           navigate('/')
         }else{
            navigate('/dashboard')
         }
     }
     fetchlogout()
    }, [])
   
    
   return (
    <>
 
     <div className="subheader">
        <div className="section-1">
        <div className="head1">
           <h2>Snapshots</h2>
        </div>
                
        <div className="sections">
           <div className="sec1-a">
              <img src="Images\AllJobs.png" alt="All jobs Logo" />
              <div className="sec1-a-col">
                 <h5>All Jobs</h5>
                 <p>100</p>
              </div>
           </div>
           <div className="sec1-b">
              <img src="Images\AllJobs.png" alt="All jobs Logo" />
              <div className="sec1-b-col">
                 <h5>Eligible Jobs</h5>
                 <p>80</p>
              </div>
           </div>
           <div className="sec1-c">
              <img src="Images\AllJobs.png" alt="Alljobs Logo" />
              <div className="sec1-c-col">
                 <h5>Applied Jobs</h5>
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
                 <h5>Shortlisted</h5>
                 <p>100</p>
              </div>
           </div>
           <div className="sec1-b">
              <img src="Images\AllJobs.png" alt="All jobs Logo" />
              <div className="sec1-b-col">
                 <h5>Interviewing</h5>
                 <p>80</p>
              </div>
           </div>
           <div className="sec1-c">
              <img src="Images\AllJobs.png" alt="All jobs Logo" />
              <div className="sec1-c-col">
                 <h5>Rejected</h5>
                 <p>50</p>
              </div>
           </div>
           <div className="sec1-d">
              <img src="Images\AllJobs.png" alt="All jobs Logo" />
              <div className="sec1-d-col">
                 <h5>Offer Received</h5>
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
              {/* <button>All Jobs</button>
              <div>
                 <p>Job1</p>
                 <p>Job2</p>
                 <p>Job3</p>
              </div> */}
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
                      <h3>{ele.jobTitle}-{ele.jobCode}</h3>
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
                            <p>CEIPAL</p>
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

import "./status.css";
import Head from "../Header/Head";
import React, { useState, useEffect ,useContext} from "react";
import axios from "axios";
function Rejected() {
    let [jobData, setJobData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          let res = await axios.get('./joblist');
          console.log("res", res.data)
          setJobData(res.data)
        }
        fetchData();
      }, []) 
      let filterData = jobData.filter((ele) => ele.status.toLowerCase() == "Rejected".toLowerCase() )
      console.log(filterData)
    return (
      <>
      <Head/>
      <div className="head3">
            <h2>Rejected</h2>
            <input className='search-input' type="text" placeholder="Title,Client,Location" />
            <button name="Search" >Search</button>
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

         <div className="job-tab-div">
            <div className="job-tab">
               <div>JOB CODE</div>
               <div>JOB CODE</div>
               <div>LOCATION</div>
               <div>POSTED DATE</div>
               <div>APPLIED DATE</div>
               <div>STATUS</div>
            </div>
         {filterData.length &&  (filterData.map((ele)=>(
                   <div className="job-content-status">
                   <div> {ele.jobtitle}</div>
                   <div>{ele.jobcode}</div>
                   <div>{ele.location}</div>
                   <div>{ele.postdate}</div>
                   <div>{ele.applieddate}</div>
                   <div style={{color:"#FF0000",fontSize:"small"}}>Rejected</div>
                </div>

         ))
            
        ) }
        

         </div>

                           
                           </>
    );
}
export default Rejected;
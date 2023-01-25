import "./Shortlisted.css";
import Head from "../Header/Head";
import "../Subheader/Subheader.css";
import React, { useState, useEffect ,useContext} from "react";
import axios from "axios";
function Interviewing() {
    let [jobData, setJobData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          let res = await axios.get('./joblist');
          console.log("res", res.data)
          setJobData(res.data)
        }
        fetchData();
      }, []) 
      let filterData = jobData.filter((ele) => ele.status == "Interviewing" )
      console.log(filterData)
    return (
        <div className="test">
        <Head></Head>
        <div>
        <h4>Interviewing</h4>
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
      <table>
        <thead>
          <th>JOB ID</th><th>JOB CODE</th><th>JOB TITLE</th> <th>LOCATION</th> <th>POSTED DATE</th> <th>APPLIED DATE</th> <th>STATUS</th> </thead>
          <tbody>
          { filterData.length ? 
            filterData.map(ele => (
              <tr>
                <td>{ele.id}</td> 
                <td>{ele.jobcode}</td> 
                <td>{ele.jobtitle}</td> 
                <td>{ele.location}</td>
                <td>{ele.posteddate}</td> 
                <td>{ele.applieddate}</td> 
                <td>{ele.status}</td>
              </tr>
            )
           ): 
              <tr>No Job data</tr>
          }
          </tbody>
     </table>
     </div>
);
}
export default Interviewing;
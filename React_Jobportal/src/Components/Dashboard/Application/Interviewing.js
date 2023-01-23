
import "./Shortlisted.css";
import Head from "../Header/Head";
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
                          <span>All Jobs</span>
                          <div class="Jobdropdown-content">
                          <p>Job1</p>
                          <p>Job2</p>
                          <p>Job3</p>
                          </div>
                          </div>
                          <div class="Ind">
                          <span>Industry</span>
                          <div class="Inddropdown-content">
                          <p>Industry1</p>
                          <p>Industry2</p>
                          <p>Industry3</p>
                          </div>
                          </div>
                          <div class="Loc">
                          <span>Location</span>
                          <div class="Locdropdown-content">
                          <p>Location1</p>
                          <p>Location2</p>
                          <p>Location3</p>
                          </div>
                          </div>
                          <div class="Type">
                          <span>Job Type</span>
                          <div class="Typedropdown-content">
                          <p>Type1</p>
                          <p>Type2</p>
                          <p>Type3</p>
                          </div>
                          </div>
          
                          <div class="Date">
                          <span>Posted Date</span>
                          <div class="Datedropdown-content">
                          <p>11-01-2001</p>
                          <p>21-11-2003</p>
                          <p>11-1-2003</p>
                          </div>
                          </div>
                         
                           </div>
                           <br></br>

                           

        <table>
          <thead>
          <th>JOB ID</th><th>JOB CODE</th><th>JOB TITLE</th> <th>LOCATION</th> <th>POSTED DATE</th> <th>APPLIED DATE</th> <th>STATUS</th> </thead>
          <tbody>
          {filterData.length ? 
            filterData.map(ele => (
              <tr>
                <td>{ele.id}</td> <td>{ele.jobcode}</td> <td>{ele.jobtitle}</td> <td>{ele.location}</td>
                <td>{ele.posteddate}</td> <td>{ele.applieddate}</td> <td>{ele.status}</td>
              </tr>
            )
           ): 
            <tr> No Job data</tr>
          }
          </tbody>
        </table>
                           {/* <div className="tab">
                           <table id="stable">
                            <thead>
                            <tr>
                                <th>JOB CODE</th>
                                <th>JOB TITLE</th>
                                  <th>LOCATION</th>
                                <th>POSTED DATE</th>
                                <th>APPLIED DATE</th>
                                <th>STATUS</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>JPC-2</td>
                                <td>Product Manager</td>
                                <td>Bangalore</td>
                                <td>08 Jan 2022</td> 
                                <td>00 Jan 2022</td> 
                                <td>Shortlisted</td> 
                            </tr>
                            <tr>
                                <td>JPC-2</td>
                                <td>Product Manager</td>
                                <td>Bangalore</td>
                                <td>08 Jan 2022</td> 
                                <td>00 Jan 2022</td> 
                                <td>Shortlisted</td> 
                            </tr>
                            <tr>
                                <td>JPC-2</td>
                                <td>Product Manager</td>
                                <td>Bangalore</td>
                                <td>08 Jan 2022</td> 
                                <td>00 Jan 2022</td> 
                                <td>Shortlisted</td> 
                            </tr>
                            <tr>
                                <td>JPC-2</td>
                                <td>Product Manager</td>
                                <td>Bangalore</td>
                                <td>08 Jan 2022</td> 
                                <td>00 Jan 2022</td> 
                                <td>Shortlisted</td> 
                            </tr>
                            <tr>
                                <td>JPC-2</td>
                                <td>Product Manager</td>
                                <td>Bangalore</td>
                                <td>08 Jan 2022</td> 
                                <td>00 Jan 2022</td> 
                                <td>Shortlisted</td> 
                            </tr>
                            <tr>
                                <td>JPC-2</td>
                                <td>Product Manager</td>
                                <td>Bangalore</td>
                                <td>08 Jan 2022</td> 
                                <td>00 Jan 2022</td> 
                                <td>Shortlisted</td> 
                            </tr>
                            <tr>
                                <td>JPC-2</td>
                                <td>Product Manager</td>
                                <td>Bangalore</td>
                                <td>08 Jan 2022</td> 
                                <td>00 Jan 2022</td> 
                                <td>Shortlisted</td> 
                            </tr>
                            <tr>
                                <td>JPC-2</td>
                                <td>Product Manager</td>
                                <td>Bangalore</td>
                                <td>08 Jan 2022</td> 
                                <td>00 Jan 2022</td> 
                                <td>Shortlisted</td> 
                            </tr>
                            <tr>
                                <td>JPC-2</td>
                                <td>Product Manager</td>
                                <td>Bangalore</td>
                                <td>08 Jan 2022</td> 
                                <td>00 Jan 2022</td> 
                                <td>Shortlisted</td> 
                            </tr>
                            <tr>
                                <td>JPC-2</td>
                                <td>Product Manager</td>
                                <td>Bangalore</td>
                                <td>08 Jan 2022</td> 
                                <td>00 Jan 2022</td> 
                                <td>Shortlisted</td> 
                            </tr>
                            </tbody>
                          </table> 
    </div>*/}



                           </div>
    );
}
export default Interviewing;
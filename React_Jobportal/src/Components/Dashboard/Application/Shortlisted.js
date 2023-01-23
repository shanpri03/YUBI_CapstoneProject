import React from "react";
import "./Shortlisted.css";
import Head from "../Header/Head";
import  { useState, useEffect ,useContext} from "react"
import axios from "axios"
function Shortlisted() {
    let [jobData, setJobData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          let res = await axios.get("http://127.0.01:3001/jbdetails")
          console.log("res", res.data)
          setJobData(res.data)
        }
        fetchData()
      }, []) 
    return (
        <div className="test">
        <Head></Head>
        <div>
        <h4>Shortlisted</h4>
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

                           <h3>Jobs Shortlisted for your profile.</h3>
        <table>
          <tr>
          <td>JOB CODE</td><td>JOB TITLE</td> <td>LOCATION</td> <td>POSTED DATE</td> <td>APPLIED DATE</td> <td>STATUS</td></tr>{jobData.length ? (
            jobData.map((ele) => (
              <tr>
                <td>{ele.id}</td> <td>{ele.bookname}</td> <td>{ele.bookauthor}</td><td>{ele.bookquantity}</td>
              </tr>
            ))
          ) : (
            <div> No data</div>
          )}
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
export default Shortlisted;
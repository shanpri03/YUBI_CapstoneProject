
import "./Shortlisted.css";
import Head from "../Header/Head";
import React, { useState, useEffect ,useContext} from "react";
import axios from "axios";
function Offered() {
    let [jobData, setJobData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          let res = await axios.get('./joblist');
          console.log("res", res.data)
          setJobData(res.data)
        }
        fetchData();
      }, []) 
      let filterData = jobData.filter((ele) => ele.status == "Offer Received" )
      console.log(filterData)
    return (
      <>
      <Head/>
      <div className="head3">
         <h2>Offered</h2>
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
        
                   

                        

        <table>
          <thead>
          <th>JOB ID</th><th>JOB CODE</th><th>JOB TITLE</th> <th>LOCATION</th> <th>POSTED DATE</th> <th>APPLIED DATE</th> <th>STATUS</th> </thead>
          <tbody>
          {filterData.length ? 
            filterData.map(ele => (
              <tr align="center">
                <td>{ele.id}</td> <td>{ele.jobcode}</td> <td>{ele.jobtitle}</td> <td>{ele.location}</td>
                <td>{ele.posteddate}</td> <td>{ele.applieddate}</td> <td style={{color:"green"}}>{ele.status}</td>
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



                           </>
    );
}
export default Offered;
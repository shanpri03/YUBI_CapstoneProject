import axios from "axios";
import { useEffect, useState } from "react";
import Head from "../Dashboard/Header/Head";
import './displayuser.css'

export default function Displayuser() {
 
    let [user,setuser] = useState();
   
   
    useEffect(() => {
       const fetchData = async () => {
          let res = await axios.get('/userprofile');
          setuser(res.data);
          console.log(res)

       }
       fetchData();
     } ,[])

    return (
        <>
            <Head></Head>
            <div className="user-profile">
                <div className="profile-pic">
                    <img src="Images/profile-pic.png" />
                </div>
                
                {user && user.map((ele)=>(
                    <div className="profile-content">
                    <div className="profile-row">
                        <label>First Name: </label>
                        <div>{ele.first_name}</div>
                    </div>
                    <div className="profile-row">
                        <label>Last Name: </label>
                        <div>{ele.last_name}</div>
                    </div>
                    <div className="profile-row">
                        <label>Email: </label>
                        <div>{ele.email}</div>
                    </div>
                    <div className="profile-row">
                        <label>Contact: </label>
                        <div>{ele.contact}</div>
                    </div>
                    <div className="profile-row">
                        <label>Address: </label>
                        <div>{ele.address}</div>
                    </div>
                    <div className="profile-row">
                        <label>About: </label>
                        <div>{ele.about}</div>
                    </div>
                    <div className="profile-row">
                        <label>Current Company: </label>
                        <div>{ele.current_comp}</div>
                    </div>
                    <div className="profile-row">
                        <label>CTC: </label>
                        <div>{ele.ctc} in lacs</div>
                    </div>
                    <div className="profile-row">
                        <label>Experience: </label>
                        <div>{ele.experience} yrs</div>
                    </div>
                    <div className="profile-row">
                        <label>Current Role: </label>
                        <div>{ele.current_role}</div>
                    </div>
                    <div className="profile-row">
                        <label>Skills: </label>
                        <div>{ele.skills}</div>
                    </div>
                    <div className="profile-row">
                        <label>Expected Salary: </label>
                        <div>{ele.exp_salary} in lacs</div>
                    </div>
                    <div className="profile-row">
                        <label>Preferred Location: </label>
                        <div>{ele.pref_loc}</div>
                    </div>
                </div>
                ))}
                
            
                
            </div>
        </>


    )


}
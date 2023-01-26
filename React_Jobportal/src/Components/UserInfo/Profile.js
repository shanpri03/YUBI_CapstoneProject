import axios from "axios";
import { useContext, useState } from "react";
import { useLocation, useNavigate, Link, Navigate } from "react-router-dom";
import DataContext from "../Context/DataContext";
import './profile.css'
function Profile() {
  let location = useLocation();
  let [data, setData] = useState({});
  let [email, setEmail] = useState('');
  let ctx = useContext(DataContext)
  let navigate = useNavigate();
  const handleChange = (e) => {
    setData({
      ...data, [e.target.name]: e.target.value

    })
  }
  const sendData = async () => {
    setEmail(location.state.email )
    console.log(email)
    setData({
      ...data,
      email: email
    })
    console.log(data)
    let response = await axios.post('/profile', data);
    console.log(response.data)
    if(response.data){
      navigate('/')
    }else{
      navigate('/')
    }
    
  }
  return (
<>
{ctx.status ? (
  <>
   <div className="profile">
      
   <div className="prof-header">
     <div className="header-img">
       <img src="Images\HVLogo.png" alt="HVLogo" />
     </div>
   </div>
   <div className="prof-content">
     <div className="prof-input">
     <div className="prof-row">
       <h2>Please update your profile: </h2>
       </div>
       <div className="prof-row">
         <label>First Name : </label>
         <input type="text" name='first_name' onChange={handleChange} />
       </div>
       <div className="prof-row">
         <label>Last Name : </label>
         <input type="text" name='last_name' onChange={handleChange} />
       </div>

       <div className="prof-row">
         <label>Contact: </label>
         <input type="text" name='contact' onChange={handleChange} />
       </div>

       <div className="prof-row">
         <label>Address: </label>
         <input type="text" name='address' onChange={handleChange} />
       </div>

       <div className="prof-row">
         <label>Current Role : </label>
         <input type="text" name='current_comp' onChange={handleChange} />
       </div>

       <div className="prof-row">
         <label>About: </label>
         <textarea name="about" rows='2' cols='20' onChange={handleChange} ></textarea>
       </div>
       <div className="prof-row">
         <label>Experience in yrs: </label>
         <input type="number" name='experience' onChange={handleChange} />
       </div>
       <div className="prof-row">
         <label>Upload your profile picture: </label>
         <input type="file" name="prof_pic" onChange={handleChange} />
       </div>

       <div className="prof-row">
         <label>Upload your CV :</label>
         <input type="file" name="resume_link" onChange={handleChange} />
       </div>

       <div className="prof-row">
         <label>Skills: </label>
         <textarea name="skills" rows='2' cols='20' onChange={handleChange} ></textarea>
       </div>
       <div className="prof-row">
         <label>Experience: </label>
         <input type="text" name="experience" onChange={handleChange} />
       </div>
       <div className="prof-row">
         <label>Current Role: </label>
         <input type="text" name="current_role" onChange={handleChange} />
       </div>
       <div className="prof-row">
         <label>Expected Salary in lacs:</label>
         <input type="number" name="exp_salary" onChange={handleChange} />
       </div>
       <div className="prof-row">
         <label>Current Role: </label>
         <input type="text" name="pref_loc" onChange={handleChange} />
       </div>
       <div className="prof-row">
         <label>CTC in lacs: </label>
         <input type="number" name="ctc" onChange={handleChange} />
       </div>
       <div  className="prof-row-sub">
         <input type="submit" className="prof-sub" onClick={sendData}></input>
       </div>
     </div>
     <div>
      
     </div>
    
   </div>
</div>
</>
):<Navigate to="/"/>}
</>
   
    
  )
}
export default Profile;
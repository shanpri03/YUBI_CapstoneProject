import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './profile.css'
function Profile() {
  let location = useLocation();
  let [data, setData] = useState([]);
  let navigate = useNavigate();
  const handleChange = (e) => {
    setData({
      ...data, [e.target.name]: e.target.value

    })
  }
  const sendData = async () => {
    console.log(data)
    let response = await axios.post('/profile', data);
    console.log(response.data)
    navigate('/login')
  }
  return (
    <>
      <div className="profile">
        <div className="prof-header">
          <img src="Images\HVLogo.png" alt="HVLogo" />
        </div>
        <div className="prof-content">
          <div className="prof-input">
            <h2>Please update your profile: </h2><br></br>
            <div className="prof-row">
            <label>Email : </label>
            <input type="text" name='email' onChange={handleChange} /><br></br>
            </div>   
            <div className="prof-row"> 
            <label>Name : </label>
            <input type="text" name='name' onChange={handleChange} /><br></br>
            </div>
            <div className="prof-row">
            <label>Phone number: </label>
            <input type="text" name='phno' onChange={handleChange} /><br></br>
            </div>
            <div className="prof-row">
            <label>Current Company : </label>
            <input type="text" name='currentcomp' onChange={handleChange} /><br></br>
            </div>
            <div className="prof-row">
            <label>Current Role : </label>
            <input type="text" name='currentrole' onChange={handleChange} /><br></br>
            </div>
            <div className="prof-row">
            <label>About: </label>
            <textarea name="about" rows='2' cols='40' onChange={handleChange} ></textarea><br></br>
            </div>
            <div className="prof-row">
            <label>Upload your profile picture: </label>
            <input type="file" name="profpic" onChange={handleChange} /><br></br>
            </div>
            <div className="prof-row">
            <label>Upload your CV :</label>
            <input type="file" name="profcv" onChange={handleChange} /><br></br>
            </div>
            <div className="prof-row">
            <label>Skills: </label>
            <textarea name="skills" rows='2' cols='40' onChange={handleChange} ></textarea><br></br>
            </div>
            <input type="submit" onClick={sendData}></input>
          </div>

        </div>

      </div>

    </>
  )
}
export default Profile;
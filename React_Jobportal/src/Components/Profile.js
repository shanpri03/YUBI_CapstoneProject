import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './profile.css'
function Profile() {
  let location = useLocation();
  let [data, setData] = useState({});
  let [email, setEmail] = useState('');
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
    navigate('/')
  }
  return (
    <>
      <div className="profile">
        <div className="prof-header">
          <div className="header-img">
            <img src="Images\HVLogo.png" alt="HVLogo" />
          </div>
        </div>
        <div className="prof-content">
          <div className="prof-input">
            <h2>Please update your profile: </h2>
            <div className="prof-row">
              <label>Email : </label>
              <input type="text" name='email' onChange={handleChange} />
            </div>
            <div className="prof-row">
              <label>Name : </label>
              <input type="text" name='name' onChange={handleChange} />
            </div>

            <div className="prof-row">
              <label>Phone number: </label>
              <input type="text" name='phno' onChange={handleChange} />
            </div>

            <div className="prof-row">
              <label>Current Company : </label>
              <input type="text" name='currentcomp' onChange={handleChange} />
            </div>

            <div className="prof-row">
              <label>Current Role : </label>
              <input type="text" name='currentrole' onChange={handleChange} />
            </div>

            <div className="prof-row">
              <label>About: </label>
              <textarea name="about" rows='2' cols='20' onChange={handleChange} ></textarea>
            </div>
            <div className="prof-row">
              <label>Upload your profile picture: </label>
              <input type="file" name="profpic" onChange={handleChange} />
            </div>

            <div className="prof-row">
              <label>Upload your CV :</label>
              <input type="file" name="profcv" onChange={handleChange} />
            </div>

            <div className="prof-row">
              <label>Skills: </label>
              <textarea name="skills" rows='2' cols='20' onChange={handleChange} ></textarea>
            </div>
            <div  className="prof-row-sub">
              <input type="submit" className="prof-sub" onClick={sendData}></input>
            </div>
          </div>
        </div>
        <div className="prof-footer">
        <p>&copy; 2021 All rights reserved</p>
        <div className="social">
        <p><b>Follow us on :</b></p>
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
         <a href="#" class="fa fa-google"></a>
        <a href="#" class="fa fa-linkedin"></a>
        <a href="#" class="fa fa-youtube"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a href="#" class="fa fa-pinterest"></a>
        </div> 
        </div>  
      </div>

    </>
  )
}
export default Profile;
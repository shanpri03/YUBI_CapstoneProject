import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, Link, Navigate } from "react-router-dom";
import DataContext from "../Context/DataContext";
import './profile.css'
import { MultiSelect } from "react-multi-select-component";
function Profile() {
  let location = useLocation();
  const options = [
    { label: "Grapes ", value: "grapes" },
    { label: "Mango ", value: "mango" },
    { label: "Strawberry ", value: "strawberry", disabled: true },
  ];
  const [selected, setSelected] = useState([]);
  
  let [data, setData] = useState({});
  let [email, setEmail] = useState("");
  let [skill, setSkill] = useState("");
  let ctx = useContext(DataContext)
  let navigate = useNavigate();
  const handleChange = (e) => {
    setData({
      ...data, [e.target.name]: e.target.value

    })
  }

  const handleClick = (e) => {
    let str = [];
    var selectedEle = document.getElementById("skillid").selectedOptions
    for (var i = 0; i < selectedEle.length; i++) {
      str.push(selectedEle[i].value)
    }
    console.log(str);
    setSkill(str.toString())
    console.log(skill);
    

  }
  useEffect(() => {

  }, [])
  useEffect(()=>{setData({...data,skills : skill,email: location.state.email})},[skill])
  const sendData = async () => {
    setData({...data,skills : skill})
    console.log(data)
    let response = await axios.post('/profile', data);
    console.log(response.data)
    if (response.data) {
      navigate('/dashboard')
    } else {
      navigate('/')
    }

  }
  return (
    <>
      {true ? (
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
                  <select name="skills" id="skillid" onClick={handleClick} multiple>
                    <option value="Java">JAVA</option>
                    <option value=".Net">.Net</option>
                    <option value="PHP">PHP</option>
                    <option value="Python">Python</option>
                    <option value="Spring">Spring</option>
                  </select>
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
                <div className="prof-row-sub">
                  <input type="submit" className="prof-sub" onClick={sendData}></input>
                </div>
              </div>
              <div>

              </div>

            </div>
          </div>
        </>
      ) : <Navigate to="/" />}
    </>


  )
}
export default Profile;
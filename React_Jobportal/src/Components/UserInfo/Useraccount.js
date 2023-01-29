import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import DataContext from "../Context/DataContext";
import './account.css'

function Useraccount({setAction}) {
  let [data, setData] = useState({});
  let [type, setType] = useState("")
  let navigate = useNavigate();
  let ctx = useContext(DataContext)

  const handleClick=()=>{
    setAction(0);
    navigate('/')
}

  const handleChange = (e) => {
    setData({
      ...data, [e.target.name]: e.target.value

    })
    console.log(data)
  }
  const sendData = async () => {
    setType("working")
    setData({
      ...data,
      user_type: type
    })
    console.log(data)
    let response = await axios.post('/signup', data);
    console.log(response.data)
    if (response.data) {
      navigate('/profile')

    } else {
      navigate('/')
    }

    if (response.data) {
      navigate('/profile', {
        state: {
          email: data.email
        }
      })
    } else {
      navigate('/signup')
    }

  }

  return (
    <>

      <div className='launch-login'>
        <div class="login-page">
          <div class="form">
            <div class="login">
              <div class="login-header">
                <h3>LOGIN</h3>
                <p>Please enter your credentials to create account.</p>
              </div>
            </div>
            <div class="login-form">
              <input type="text" placeholder="email" name="email" onChange={handleChange}/>
              <input type="password" placeholder="password" name="password" onChange={handleChange}/>
              <button onClick={sendData}>submit</button>
              <p class="message">login? <a href="#" onClick={handleClick}>Click to login</a></p>
            </div>
          </div>
        </div>



      </div>



    </>

  );
}
export default Useraccount;
import './login.css'
import axios from "axios";
import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, useNavigate, Link } from "react-router-dom";
import DataContext from "../Context/DataContext.js";

function Login({setAction}){
  let [data, setData] = useState([]);
  let [status, setStatus] = useState(false);
  let navigate = useNavigate();
  let ctx = useContext(DataContext);
  console.log(ctx.status)
  function handleChange(e) {
      setData({
          ...data, [e.target.name]: e.target.value
      }
      )
      console.log(data)
  }
  const handleClick=()=>{
    setAction(1);
    navigate('/')
}
  const sendData = async () => {
      let res = await axios.post('/login', data)
      console.log(res.data)
      if (res.data) {
          ctx.setStatus(true)
          ctx.setEmail(data.email)
          ctx.setUid(data.id)
          console.log(ctx.status)
          console.log(ctx.email)
          console.log(ctx.id)
          navigate('/dashboard')
      } else {
          navigate('/')
      }
  }

return(
<>

<div className='launch-login'>
<div class="login-page">
<div class="form">
        <div class="login">
          <div class="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <div class="login-form">
          <input type="text" placeholder="email" name="email" onChange={handleChange}/>
          <input type="password" placeholder="password" name="password" onChange={handleChange}/>
          <button onClick={sendData}>login</button>
          <p class="message">Not registered? <a href="#" onClick={handleClick}>Create an account</a></p>
        </div>
      </div>
    </div>



</div>

</>


)

}

export default Login;
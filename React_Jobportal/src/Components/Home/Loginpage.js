import axios from "axios";
import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, useNavigate, Link } from "react-router-dom";
import DataContext from "../Context/DataContext.js";
import './login.css'

function Loginpage() {
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
    const sendData = async () => {
        let res = await axios.post('/login', data)
        let status = res.data
        console.log(res.data)
        if (res.data.length) {
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


    return (
        <div className="login">
          <div className="login-input">
            <h1>Enter your details to login </h1>     
            <input type ="text" name="email" placeholder="Enter your name" onChange={handleChange}/><br></br>
            <input type ="password" name="password" placeholder="Enter your password" onChange={handleChange}/><br></br>
            <input type ="submit" value="submit" onClick={sendData}/><br></br>
            <Link to="/signup" style={{color:"white"}} >
            Click here to signup
            </Link>
        </div>
        </div>


    );
}
export default Loginpage;
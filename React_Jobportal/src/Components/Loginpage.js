import axios from "axios";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, useNavigate,Link} from "react-router-dom";
import './login.css'

function Loginpage()
{ 
    let [data,setData] = useState([]);
    function handleChange(e)
    {
        setData({
            ...data, [e.target.name]:e.target.value
    }
    )
    console.log(data)
    }
    const sendData=async ()=>{
        let res = await axios.post('/login',data)
        console.log(res.data)
    }
    return(
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
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './account.css'

function Useraccount()
{
  let [data,setData] =useState([]);
  let navigate = useNavigate();

  const handleChange =(e)=>{
    setData({
      ...data,[e.target.name]:e.target.value

  })
  console.log(data)
  }
const sendData = async() =>{
  let response = await axios.post('/signup',data);
  console.log(response.data)
  if (response.data)
  {
    navigate('/profile',{
      state:{
          email:data.email
      }
    })

  }else{
    navigate('/signup')
  }


}

    return(
        <div className="account">
        <div className="header">
        <div className="acc-sec1">
        <img src="Images\HVLogo.png" alt="HVLogo"/>
        </div >
        </div>
        <div className="acc-content">
          <div className="acc-section1">
                   
             <div className="features">
             <img src="https://tse1.mm.bing.net/th?id=OIP.ZsVHspD9GHZ-7XLpdDjEzAHaHa&pid=Api&P=0"/>
            <ul>
              <li>Build your profile and let recruiters find you</li>
              <li>Get job postings delivered right to your email</li>
              <li>Find a job and grow your career</li>
            </ul>
            </div>
            
          </div>
        <div className="acc-section2">
        <h1>Enter the below details to signup</h1>
        <div className="acc-login-input">
          <input type ="text" name="email" placeholder="name" onChange={handleChange} /><br></br>
            <input type ="password" name="password" placeholder="password" onChange={handleChange} /><br></br>
            <input type ="submit" onClick={sendData}/>   
        </div>
           
        </div>
        
        </div>
        <div className="footer">
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
    );
    }
export default Useraccount;
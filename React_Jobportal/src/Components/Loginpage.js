import { BrowserRouter as Router, Switch, Route, useNavigate } from "react-router-dom";

function Loginpage()
{ function handlechange()
    {
      
           return(
         
<></>
           );
        
   
    }
    
    return(
        <div>
            <h1>Login Form</h1>
            <form>
            <label> Enter your email address </label><br></br>
            <input type ="text" name="email" /><br></br>
            <label> Enter your password </label><br></br>
            <input type ="password" name="password" /><br></br>
            <input type ="Submit" value="submit" onSubmit={handlechange()}/>
            </form>

        </div>
    );
    }
export default Loginpage;
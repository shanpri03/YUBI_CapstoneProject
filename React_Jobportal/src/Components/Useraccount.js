function Useraccount()
{
    return(
        <div>
            <h1>User Account : Sign Up Form</h1>
            <form>
            <label> Enter your email address </label><br></br>
            <input type ="text" name="email" /><br></br>
            <label> Enter your password </label><br></br>
            <input type ="text" name="password" /><br></br>
            <label> Enter your city </label><br></br>
            <input type ="text" name="city" /><br></br>
            <label> Enter your DOB </label><br></br>
            <input type ="date" name="date" /><br></br>

            <input type ="Submit" value="Submit"/>         
            </form>

        </div>
    );
    }
export default Useraccount;
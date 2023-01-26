import Head from "../Dashboard/Header/Head";
import './displayuser.css'

export default function Displayuser(){
    return(
        <>
        <Head></Head>
        <div className="user-profile">
         <div className="profile-pic">
        <img src="Images/profile-pic.png"/>
        </div>   
        <div className="profile-content">
        <div className="profile-row">
        <label>First Name: </label>
        <div>Sowmya</div>
        </div>
        <div className="profile-row">
        <label>Last Name: </label>
        <div>Sreedhar</div>
        </div>
        <div className="profile-row">
        <label>Address: </label>
        <div>abc</div>
        </div>
        <div className="profile-row">
        <label>Email: </label>
        <div>abc</div>
        </div>
        <div className="profile-row">
        <label>Contact: </label>
        <div>abc</div>
        </div>
        <div className="profile-row">
        <label>About: </label>
        <div>abc</div>
        </div>
        <div className="profile-row">
        <label>Current Company: </label>
        <div>abc</div>
        </div>
        </div>
        </div>  
        </>


    )


}
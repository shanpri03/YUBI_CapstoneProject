import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Launchpage from "./Components/Home/Launchpage.js";
import Loginpage from './Components/Home/Loginpage';
import Useraccount from './Components/UserInfo/Useraccount';
import Profile from './Components/UserInfo/Profile'
import Head from './Components/Dashboard/Header/Head';
import Subheader from './Components/Dashboard/Subheader/Subheader-1';
import Appliedjobs from './Components/Dashboard/Jobs/Appliedjobs';
import Alljobs from './Components/Dashboard/Jobs/Alljobs';
import Eligiblejobs from './Components/Dashboard/Jobs/Eligiblejobs';
import Shortlisted from './Components/Dashboard/Application/Shortlisted';
import Rejected from './Components/Dashboard/Application/Rejected';
import Interviewing from './Components/Dashboard/Application/Interviewing';
import Offered from './Components/Dashboard/Application/Offered';
import Dashboard from './Components/Dashboard/Dashboard';
import Displayuser from './Components/User/Displayuser';
import DataContext from './Components/Context/DataContext';
import { useState } from 'react';


function App() {
  let [status,setStatus] = useState(false)
  let [email,setEmail] = useState('')
  let [uid,setUid] = useState(0)
  return (
    <>
    
  
      <DataContext.Provider value={{status,setStatus,email,setEmail,uid,setUid}}>
      <Routes>
      <Route path='/' element={<Launchpage />}></Route>
        <Route path='/login' element={<Loginpage />}></Route>
        <Route path='/signup' element={<Useraccount />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/alljobs' element={<Alljobs/>}></Route>
        <Route path='/appliedjobs' element={<Appliedjobs />}></Route>
        <Route path='/elligiblejobs' element={<Eligiblejobs />}></Route>
        <Route path='/shortlisted' element={<Shortlisted />}></Route>
        <Route path='/rejected' element={<Rejected />}></Route>
        <Route path='/interviewing' element={<Interviewing />}></Route>
        <Route path='/offered' element={<Offered />}></Route>
        <Route path='/userprofile' element={<Displayuser />}></Route>
        </Routes>
      </DataContext.Provider>
       
    

    </>
  );
}

 
export default App;

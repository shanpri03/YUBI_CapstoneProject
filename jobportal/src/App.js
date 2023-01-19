import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Launchpage from "./Components/Launchpage.js";
import Loginpage from './Components/Loginpage';
import Useraccount from './Components/Useraccount';


function App() {
  return (
    <div>

      
       <Router>
      <Routes>
        <Route exact path="Launchpage" element={<Launchpage />}></Route>
        <Route exact path="Loginpage" element={<Loginpage />}></Route>
        <Route exact path="Useraccount" element={<Useraccount />}></Route>
      </Routes>
      <ul>
        <li>
          {" "}
          <Link to="Launchpage">Launchpage</Link>
        </li>
        <li>
          {" "}
          <Link to="Loginpage">Loginpage</Link>
        </li>
        <li>
          {" "}
          <Link to="Useraccount">Useraccount</Link>
        </li>
      </ul>
    </Router>
      
    </div>
  );
}

export default App;

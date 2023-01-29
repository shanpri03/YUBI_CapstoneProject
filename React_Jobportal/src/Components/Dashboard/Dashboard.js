import Head from "./Header/Head"
import Subheader from "./Subheader/Subheader"
import { Navigate, useLocation, useNavigate} from "react-router-dom";
import React,{ useState,useEffect, useContext } from "react";
import axios from "axios";
import DataContext from "../Context/DataContext.js";
export default function Dashboard(){
let ctx =useContext(DataContext);
console.log(ctx.status)

console.log(ctx.email)
console.log(ctx.id)
let navigate = useNavigate();

return(
<>

{ctx.status ?(
        <>
<Head/>
<Subheader/>
</>
) :<Navigate to='/'/>

}
</>
) 
}
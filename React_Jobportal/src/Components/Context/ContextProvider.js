import React, { useState } from "react";
import DataContext from "./DataContext.js";

export default function ContextProvider({children}){

let [status,setStatus] =useState(false);



return(
    <DataContext.Provider  value={{status,setStatus}}>
    {children}
    </DataContext.Provider>


)


}
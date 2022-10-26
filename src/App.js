import FormHandler from './Components/FormHandler';
import React from 'react';
import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from './Components/Login';
import TableBuilder from './Components/Table';
import Form from './Components/Form';
import TableHandler from './Components/TableHandler'
import { useContext, useState } from 'react';
import Dashboard from './Components/Dashboard';
import {HeaderLayout, HeaderUserName} from './Components/HeaderLayout';
import UserContext, {User} from './Components/UserContext';
import { useEffect } from 'react';
export default function App() {
  




const [user, updateUser] = useState(User);
const newUser = useContext(UserContext)
const navigate = useNavigate();
useEffect(() => {
  
   
  if(newUser.isAuth == true) 
{
  console.log(newUser.isAuth);
  navigate("/successeded")

}  
// else if (newUser.isAuth == true) 
// {
//   return navigate('/successeded')
// }  
  
});
  


  return (
    <div className='App'>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/successeded" element={<HeaderLayout />} />
        <Route path="/Form" element={<FormHandler />} />
        <Route path="/Table" element={<TableHandler />} />
        <Route path="/TableHandler" element={<TableBuilder />} />
        <Route path="/FormHandler" element={<FormHandler />} />
    </Routes>
  </div>


) 
}

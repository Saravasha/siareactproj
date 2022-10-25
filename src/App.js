import FormHandler from './Components/FormHandler';
import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import TableBuilder from './Components/Table';
import HeaderLayout from './Components/HeaderLayout';
import Form from './Components/Form';
import TableHandler from './Components/TableHandler'
import { UserContext } from './Components/UserContext';
import { useContext, useState } from 'react';
import Dashboard from './Components/Dashboard';

export default function App() {
  

  const [user, setUser] = useState();


  return (
    <div className='App'>
  <UserContext.Provider value={"Zigi plz"}>
    <Routes>
      <Route path="/" element={<Login />}/>
        <Route path="/successeded" element={<Dashboard />} />
        <Route path="/Form" element={<FormHandler />} />
        <Route path="/Table" element={<TableHandler />} />
        <Route path="/TableHandler" element={<TableBuilder />} />
        <Route path="/FormHandler" element={<FormHandler />} />

        
    </Routes>
</UserContext.Provider>

  </div>

  )
}
  

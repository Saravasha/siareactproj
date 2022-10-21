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
import { useState, useMemo } from 'react';

export default function App() {
  

  const [user, setUser] = useState();
  const value = useMemo(()=> ({user, setUser}),[user, setUser])

  return (
    <div className='App'>
  <UserContext.Provider value={value}>
    <Routes>
      <Route path="/" element={<Login />}/>
        <Route path="/successeded" element={<HeaderLayout />} />
        <Route path="/Form" element={<FormHandler />} />
        <Route path="/Table" element={<TableHandler />} />
        <Route path="/TableHandler" element={<TableBuilder />} />
        <Route path="/FormHandler" element={<FormHandler />} />

        
    </Routes>
</UserContext.Provider>

  </div>

  )
}
  

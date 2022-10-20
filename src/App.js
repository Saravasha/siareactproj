import FormHandler from './Components/FormHandler';
import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import TableBuilder from './Components/Table';
import HeaderLayout from './Components/HeaderLayout';
import Form from './Components/Form';
import TableHandler from './Components/TableHandler'

export default function App() {
  
  return (
    <div className='App'>
  
    <Routes>
      <Route path="/" element={<Login />}/>
        <Route path="/successeded" element={<HeaderLayout />} />
        <Route path="/Form" element={<FormHandler />} />
        <Route path="/Table" element={<TableHandler />} />
        <Route path="/TableHandler" element={<TableBuilder />} />
        <Route path="/FormHandler" element={<FormHandler />} />
        {/* <Route path="*" element={<NoPage />} />  */}
        
    </Routes>

  </div>

  )
}
  

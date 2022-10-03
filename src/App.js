import FormHandler from './Components/FormHandler';
import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login';


export default function App() {
  
  return (
    <div className='App'>
  
    <Routes>
      <Route path="/" element={<Login />}>
        {/* <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
      {/* <FormHandler/> */}
  </div>

  )
}
  

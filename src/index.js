import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import {  BrowserRouter } from "react-router-dom";
import { Login } from './Components/Login';
import { useContext } from 'react';

import reportWebVitals from './reportWebVitals';
import UserContext, {user} from './Components/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<BrowserRouter>
<UserContext.Provider value={user.username}>


    <App />
</UserContext.Provider>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

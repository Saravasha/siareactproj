import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import Age from './Components/formData/age';
// import Email_Adress from './Components/formData/email-adress';
// import FirstName from './Components/formData/firstName';
// import Nationality from './Components/formData/nationality';
// import SecondName from './Components/formData/secondName';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import {  Link } from "react-router-dom";
import FormHandler from "./FormHandler";
import TableBuilder from "./Table";
import Form from "./Form";

const HeaderLayout = () => {
  return (
    <div className="App">

    <h1>gefgaefafafs</h1>
      <nav>
        <ul>
            <li>
              <Link to="Login">Login</Link>
            </li>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Form">Form</Link>
            </li>
            <li>
              <Link to="/FormHandler">FormHandler</Link>            
            </li>
        </ul>
      </nav>

    </div>

  )
};


export default HeaderLayout;
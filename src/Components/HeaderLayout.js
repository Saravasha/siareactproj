import React, { useContext } from "react";
import {  Link } from "react-router-dom";
import FormHandler from "./FormHandler";
import TableBuilder from "./Table";
import Form from "./Form";
import { useState } from "react";
import UserContext from './UserContext';

export function HeaderLayout(props) {

  const [user, setUser] = useState(props);
  
  return (
    <div className="App">

      <nav>
        <ul>
            <li>
              <Link to="/">Logout</Link>
            </li>
            <li>
              <Link to="/Form">Form</Link>
            </li>
              <li>
                <Link to="/FormHandler">FormHandler</Link>
              </li>     
              <li>
                <Link to="/Form" >Form</Link>
              </li>
              <li>
                <Link to="/Table" >Table</Link>
              </li>
              <li>
                <Link to="/TableHandler" >TableHandler</Link>
              </li>
              <li>
                <Link to="/FormHandler" >FormHandler</Link>
              </li>
              <p>{UserContext.Consumer.user.username}</p>
        </ul>
      </nav>

    </div>

  )
};


export default HeaderLayout;
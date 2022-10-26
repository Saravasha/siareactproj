import React, { useContext } from "react";
import {  Link } from "react-router-dom";
import FormHandler from "./FormHandler";
import TableBuilder from "./Table";
import Form from "./Form";
import { useState } from "react";

import Login from "./Login";

import UserContext, {User} from './UserContext';
import { getValue } from "@testing-library/user-event/dist/utils";


export function HeaderLayout () {  
  const [user, updateUser] = useState(User);
  const newUser = useContext(UserContext)
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
              <li>
              <p>{user.username}</p>

              </li>
        </ul>
      </nav>

    </div>

  )
}
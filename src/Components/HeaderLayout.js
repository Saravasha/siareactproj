import React, { useContext } from "react";
import {  Link } from "react-router-dom";
import FormHandler from "./FormHandler";
import TableBuilder from "./Table";
import Form from "./Form";
import {UserContext} from './UserContext';

export function HeaderLayout() {
  const mesg = useContext(UserContext)
  return (
    <div className="App">
{/* <p>{mesg}</p>
    <h1>{mesg}</h1> */}
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

        </ul>
      </nav>

    </div>

  )
};


export default HeaderLayout;
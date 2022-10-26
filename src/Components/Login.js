import React, { useContext, useState, createContext } from "react";
import HeaderLayout from "./HeaderLayout";
import { Link } from "react-router-dom";
import BrowserRouter from 'react'
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";
import Dashboard from "./Dashboard";
import App from "../App";
import ReactDOM from "react-dom";

export default function Login() {

    const [user, setUser] = useState({username: "User", isAuth: false});
    var msg = useContext(UserContext);
    
    const navigate = useNavigate()
    
    const handleChange = (event) => {
            setUser({...user, [event.target.name]: event.target.value})
            
            console.log(user)
          };
          
          const onFormSubmit = (event) => {
            event.preventDefault();
            
            const gerk = () => setUser({...user, [event.target.name]: event.target.value, isAuth: true})
            msg = user
            
            navigate('/successeded')
            gerk()
            }
            const SetContextAsState = (gerk) => {
              useState(UserContext)
            }
            SetContextAsState()
            
            console.log(user)
            
            return (
            

        <div>
            <p>{msg}</p>
          <p>{user.username}</p>
          {/* <div> */}
            {user.isAuth? (`Welcome ${user.username}` ) : "You should login"}
            {/* </div> */}
          
      <form onSubmit={onFormSubmit}>
        <label htmlFor='user'>
        <input
        type="text"
        name="username"
        id="username"
        value={user.username}

        placeholder='User Name'
        onChange={handleChange}
        required />
        </label>
        <button type="submit" onClick={() => setUser(user)}>Submit
        </button>
        </form>
        
        </div>
                );
  }

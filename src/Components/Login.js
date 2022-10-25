import React, { useContext, useState, createContext } from "react";
import HeaderLayout from "./HeaderLayout";
import { Link } from "react-router-dom";
import BrowserRouter from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Login() {

    const [user, setUser] = useState("User");
    const msg = useContext(UserContext);
    
    const navigate = useNavigate()
    
    const handleChange = (event) => {
            setUser({  [event.target.name]: event.target.value });
            
            console.log(user)
          };
          
          const onFormSubmit = (event) => {
            event.preventDefault();
            
            setUser(user)
            console.log(user)
            navigate('/successeded')
            }
       
            
            // console.log(msg);
            return (
            

        <div>
            {/* <p>{msg}</p> */}
          <p>{user.username}</p>
          <p>{msg}</p>
      <form onSubmit={onFormSubmit}>
        <label htmlFor='username'>
        <input
        type="text"
        name="username"
        id="username"

        placeholder='User Name'
        onChange={handleChange}
        required />
        </label>
        <button type="submit">
        Submit
        </button>
        </form>
        
        </div>
                );
  }

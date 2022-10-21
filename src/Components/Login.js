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
            
          };
          
          const onFormSubmit = (event) => {
              event.preventDefault();
              
            setUser(user)
              navigate('/successeded')
                ;
                console.log(user)
            }
       
                return (
            

        <div>
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

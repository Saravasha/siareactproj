import React, { useContext, useState } from "react";
import HeaderLayout from "./HeaderLayout";
import UserInfoExp from "./UserContext";
import { Link } from "react-router-dom";
import BrowserRouter from 'react'

const Login = (prop) => {
    
    // const {login} = useContext(UseContext);
    const [loginName, setLoginName] = useState();
    
    const UserI = useContext(UserInfoExp)
    
    const HandleSubmit = (event) => {
        event.preventDefault() 
        
        UserI.UserName = event.target[0].value         
        
        console.log(UserI.UserName)
        setLoginName(loginName)
    }
    return (
        <div>
            
            <form className="container" onSubmit={HandleSubmit}>
                <h1>
                    Login Form: pijwpji
                    </h1>
                <input 
                    placeholder="User Name" 
                    type='text' 
                    name="username"
                    required
                />
                <button type="submit" value="Submit">Submit
                </button>
                </form>
        </div>
    )
}

export default Login;
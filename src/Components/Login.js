import React, {useContext, useState } from "react";
import HeaderLayout from "./HeaderLayout";
import UserContext from "./UserContext";

 const Login = () => {

    // const {login} = useContext(UseContext);
    const [loginName, setLoginName] = useState();

    return (
        <div>
            
            <form onSubmit={(event) => {
                    event.preventDefault() 
                    setLoginName(event.target.value)
                    
                    console.log(event.target.value)
                }} >
                <h1>
                    Login Form: pijwpji
                    </h1>
                <input type='text' required/>
                <button type="submit">
                    Submit
                </button>
                </form>
        </div>
    )
}

export default Login;
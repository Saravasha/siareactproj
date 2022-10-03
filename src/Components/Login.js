import React, {useContext, useState } from "react";
import UseContext from "./UseContext";

 const Login = () => {

    // const {login} = useContext(UseContext);
    const [loginName, setLoginName] = useState();

    return (
        <div>
            
<h1>pijwpji</h1>
            <input type='text'
                    onChange={(event) => { 
                        setLoginName(event.target.value)
                    }}/>

        </div>
    )
}

export default Login;
import React, { useContext, useState, createContext } from "react";
import HeaderLayout from "./HeaderLayout";
// import UserInfoExp from "./UserContext";
import { Link } from "react-router-dom";
import BrowserRouter from 'react'
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [user, setUser] = useState("User");
    const userContext = createContext()
    const [login, setLogin] = useState("Unauthorized");
    var testUseContext = useContext(UserContext)
    const navigate = useNavigate()
        const handleChange = (event) => {
            setUser({  [event.target.name]: event.target.value });
            
          };
          
          
          const onFormSubmit = (event) => {
              event.preventDefault();
              
            //   handleSubmit(user);
            //   user = {userContext}
              
            //   const gerk = setUser(user)
              // console.log(setUserContext);
              console.log(user);
            //   const userContext = React.createContext(gerk) 
              testUseContext = user;
              const gerk = [setLogin(login, user)]
              console.log(testUseContext);
              console.log(gerk);
              navigate('/successeded', {
                state: {
                    user: user.user

                }
            });
        }
              // UserContext = user
        
            
            // const setUserContext = (userContext) => {
                
                //     return <UserContext.Provider value={userContext}></UserContext.Provider>
                
                // }
                
                // const value = React.useContext(testUseContext)
                // console.log(value);

                return (
                <div>
      {/* <p>{value}</p> */}
                <form className='container' onSubmit={onFormSubmit}>
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

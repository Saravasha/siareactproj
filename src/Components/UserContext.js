import {useState, createContext, useContext} from "react";
import { ReactDOM } from "react";


const UserContext = (props) => {
  const [user, setUser] = useContext("Login")  
  const UC = createContext();

  return (

      <div>
      <UC.Provider value={setUser}/>
        <h1>gefgaefafafs</h1>
        <h1>{`hello ${user}!`}</h1>
      <UC.Provider/>
       
  
      </div>
    )
  };
  
  
  export default UserContext;
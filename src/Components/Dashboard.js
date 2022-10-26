import React from 'react';
import HeaderLayout from './HeaderLayout';
import UserContext from "./UserContext";
import { useContext } from 'react';

function Dashboard() {
 
  // handle click event of logout button
  // const handleLogout = () => {    
  //   history.push('/login');
  // }
  const msg = useContext(UserContext);

  return (
    <div>
      <p>
        {msg}
        </p>
      Welcome User!<br /><br />
      {/* <input type="button" onClick={handleLogout} value="Logout" /> */}
      <HeaderLayout/>
    </div>
  );
}
 
export default Dashboard;
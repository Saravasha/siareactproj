import React from 'react';
import {HeaderLayout, headerUserName} from './HeaderLayout';
import { useContext, useState } from 'react';
import UserContext, {User} from './UserContext';

function Dashboard() {
 
  // handle click event of logout button
  // const handleLogout = () => {    
  //   history.push('/login');
  // }
  const [user, updateUser] = useState(User);
  const newUser = useContext(UserContext)

  return (
    <div>
      <p>
        {newUser.username}
        </p>
      Welcome User!<br /><br />
      {/* <input type="button" onClick={handleLogout} value="Logout" /> */}
      <HeaderLayout/>
    </div>
  );
}
 
export default Dashboard;
import { createContext } from "react";
export const UserInfo = {
   
        UserName: '',
        Password: '',
    }
    const UserInfoExp = createContext('UserInfo')
  
    export default UserInfoExp
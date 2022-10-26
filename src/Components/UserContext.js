import {createContext} from "react";

export const user = {
    username: "", isAuth: false,
} 

export const User = user;
const UserContext = createContext("user");
export default UserContext;
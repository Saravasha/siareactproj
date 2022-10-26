import {createContext} from "react";
const UserContext = createContext({user: "User Name", setUser: () => {}});
export default UserContext;
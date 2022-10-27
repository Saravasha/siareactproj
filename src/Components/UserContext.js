import React ,{ useContext, useState } from "react";
export const user = {
    username: "", isAuth: false,
} 
export default UserContext;
const UserContext = React.createContext();

export function UserProvider({ children }) {

    const [user, setUser] = useState({username: "User", isAuth: false});
    
    const handleChange = (event) => {
              setUser({...user, [event.target.name]: event.target.value})
              
              console.log(user)
            };

    function onFormSubmit(event) {
        event.preventDefault();
      
        setUser({...user, [event.target.name]: event.target.value, isAuth: true})
    
      console.log(user)
      navigate("/successeded")
    }
}

export function Login() {
  
    const navigate = useNavigate();
    
    
             
  
              return (
              
  <UserContext.Provider value={user}>{children}

                  <div>
              <p>{user.user}</p>
            <p>{user.username}</p>
            {/* <div> */}
              {user.isAuth? (`Welcome ${user.username}` ) : "You should login"}
              {/* </div> */}
            
        <form onSubmit={onFormSubmit}>
          <label htmlFor='user'>
          <input
          type="text"
          name="username"
          id="username"
          value={user.username}
          
          placeholder='User Name'
          onChange={handleChange}
          required />
          </label>
          <button type="submit" onClick={() => setUser(user)}>Submit
          </button>
          </form>
          
          </div>
          </UserContext.Provider>
                  );
              }             
         
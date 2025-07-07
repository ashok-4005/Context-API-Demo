import {createContext,useState} from 'react'

const UserContext =  createContext();

const UserProvider = ({children}) =>{
    
    const[isLoggedIn,setIsLoggedIn] = useState(false);
    
    const Login = () => setIsLoggedIn(true);
    const Logout = () => setIsLoggedIn(false);

    return(
        <UserContext.Provider value={{isLoggedIn,Login,Logout}}>
            {children}
        </UserContext.Provider>
    );
}

export {UserProvider,UserContext}
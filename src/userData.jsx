import { createContext, useState } from "react"


const userConst = createContext();

const UserProvider = ({children}) =>{
    const [user,setUser] = useState("GUEST")

    return(
        <userConst.Provider value={{user,setUser}}>
            {children}
        </userConst.Provider>
    );

}

export{userConst,UserProvider}
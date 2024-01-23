/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [userEmail,setUserEmail] = useState('')
    const loginUser = (userData) =>{
        setUser(userData)
    }
    const logOut = () => {
        setUser(null)
    }
    const authInfo = {user,loginUser,logOut,setUserEmail,userEmail}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;
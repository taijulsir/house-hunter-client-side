/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic/useAxiosPublic";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [userEmail, setUserEmail] = useState('')
    const axiosPublic = useAxiosPublic()
    // Fetch user data
    const userQuryInfo = useQuery({
        queryKey: [userEmail, "User Info"],
        queryFn: async () => {
            const res = await axiosPublic.get(`http://localhost:5000/api/user/${userEmail}`)
            return res.data;
        },
        enabled: false
    })

    // useEffect for handle refecth the user data
   useEffect(()=>{
    if(userEmail){
        userQuryInfo.refetch()
    }
   },[userEmail,userQuryInfo])
    // Useeffect for handle side effect
    useEffect(() => {
        setUser(userQuryInfo.data)
    }, [userQuryInfo.data])
    console.log(user)
    
    const logOut = () => {
        setUser(null)
        localStorage.removeItem("access-token")
    }

    const authInfo = { user, logOut, setUserEmail, userEmail }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;
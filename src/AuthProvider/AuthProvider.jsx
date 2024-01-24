/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic/useAxiosPublic";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const [userEmail, setUserEmail] = useState('')
    const axiosPublic = useAxiosPublic()


    // Fetch specific user data
    const userQueryInfo = useQuery({
        queryKey: [userEmail, "User Info"],
        queryFn: async () => {
            const res = await axiosPublic.get(`https://house-hunter-server-side-alpha.vercel.app/api/user/${userEmail}`)
            return res.data;
        },
        enabled: false
    })

    // useEffect for handle refecth the user data
    useEffect(() => {
        if (userEmail) {
            userQueryInfo.refetch()
        }
    }, [userEmail, userQueryInfo])


    // Useeffect for handle side effect and store user data in local storage
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'))
        if(storedUser){
            setUser(storedUser)
            setLoading(false)
        }
        if(userQueryInfo.data){
            setUser(userQueryInfo.data)
            setLoading(false)
            // save the user data in localstorage
            localStorage.setItem('user',JSON.stringify(userQueryInfo.data))
        }
    }, [userQueryInfo.data])


    // logout function
    const logOut = () => {
        setUser(null)
        localStorage.removeItem("user")
        localStorage.removeItem("access-token")
    }

    const authInfo = { user, logOut, setUserEmail, userEmail,loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;
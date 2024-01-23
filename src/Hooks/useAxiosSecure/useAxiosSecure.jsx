import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../useAuth/useAuth";
import Swal from "sweetalert2";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { logout } = useAuth()


    // check for access token
    axiosSecure.interceptors.request.use(
        function (config) {
            const token = localStorage.getItem("access-token")
            config.headers.authorization = `Bearer ${token}`
            return config;
        },
        function (error) {
            return Promise.reject(error)
        }
    )
    // interceptors 401 & 403 status
    axiosSecure.interceptors.response.use(
        function(response){
            return response;
        },
        async(error) => {
            const status = error.response.status;
            if(status === 401 || status === 403){
                await logout();
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "You can't access this URL!",
                    footer: '<a href="/" className="text-red-600">Go back to the homepage</a>'
                  }); 
                  navigate("/login",{state: location.pathname})
            }
            return Promise.reject(error)
        }
    )

    return axiosSecure;
};

export default useAxiosSecure;
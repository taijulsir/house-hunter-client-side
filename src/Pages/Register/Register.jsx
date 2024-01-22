
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import register from '../../Shared/LottieAnimation/login - 1699455072449.json'
import Lottie from "lottie-react";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";
const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    // email Register
    const handleEmailRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phoneNumber = e.target.phoneNumber.value;
        const role = e.target.role.value;
        const password = e.target.password.value;
        const photoUrl = e.target.photoUrl.value;

        // check is number valid
        if(phoneNumber.length >11 || phoneNumber.length <11){
          return toast.error("Number will be 11 character");
        }
        // check the password is valid
        if(password.length < 6){
            return toast.error("Password at least 6 character")
        }

        // User data
        const userData = {
            name, email, phoneNumber, role, password, photoUrl
        }

        // Send data into server side
        const res = await axiosPublic.post("/api/register", userData)
        if (res.data.insertedId) {
            toast.success("Register Succesful")
            navigate("/login")
        }
        else if (res.data.insertedId === null) {
            return  toast.error("Already Registered");         
        }
    }

     // lottie animation
     const defaultOptions = {
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <div className="bg-gradient-to-r from-sky-300 via-blue-500 to-sky-500 min-h-screen text-gray-900 flex justify-center ">
                <div className="container mx-auto m-0 sm:m-10  sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">

                        <div className="mt-12 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-4xl font-extrabold">
                                Create Account
                            </h1>
                            <div className="w-full flex-1 mt-8">

                                <div className="">

                                    <form onSubmit={handleEmailRegister}>
                                        {/* Name */}
                                        <input

                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            name="name" type="text" placeholder="Name" required />
                                        {/* Email */}
                                        <input
                                            className="w-full mt-3 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            name="email" type="email" placeholder="Email" required />
                                        {/* Phone Number */}
                                        <input
                                            className="w-full mt-3 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            name="phoneNumber" type="number" placeholder="Phone Number" required />
                                        {/* Role */}
                                        <div>
                                            <select name="role" id="" className="w-full text-gray-500 mt-3 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white">
                                                <option value="" selected disabled className="text-gray-500">Select Role</option>
                                                <option value="Howse Owner" className="text-gray-500">Howse Owner</option>
                                                <option value="House Renter" className="text-gray-500">House Renter</option>
                                            </select>
                                        </div>
                                        {/* password */}
                                        <div>
                                            <div className="relative">
                                                <input
                                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                                    name="password" type={showPassword ? "text" : "password"} placeholder="Password" required />
                                            </div>
                                            <div className="absolute -mt-10 ml-[280px] lg:ml-[500px]  cursor-pointer">
                                                <button onClick={() => setShowPassword(!showPassword)}>
                                                    {
                                                        showPassword ? <FaEye className="text-2xl text-[#403F3F]"></FaEye> : <FaEyeSlash className="text-2xl text-[#403F3F]"></FaEyeSlash>
                                                    }
                                                </button>
                                            </div>
                                        </div>
                                        <input
                                            className="w-full mt-3 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            name="photoUrl" type="url" placeholder="Photo URl" required />
                                        <button
                                            type="submit"
                                            className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                            <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                <circle cx="8.5" cy="7" r="4" />
                                                <path d="M20 8v6M23 11h-6" />
                                            </svg>
                                            <span className="ml-3">
                                                Sign Up
                                            </span>
                                        </button>
                                    </form>

                                    {/* If register login option */}
                                    <p className="text-sm my-1 text-white dark:text-gray-400"> Already have an account?
                                        <Link to='/login'
                                            className="text-sm font-semibold text-zinc-950 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500">
                                            Login Now</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* image */}
                    <div className="relative items-center justify-center hidden w-full lg:flex lg:w-1/2">
                        <Lottie
                            animationData={register}
                            options={defaultOptions}
                            height={400}
                            width={400}>
                        </Lottie>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Register;
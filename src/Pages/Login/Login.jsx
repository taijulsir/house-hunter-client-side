

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import loginAnimation from "../../Shared/LottieAnimation/login - 1699455072449.json"
import Lottie from "lottie-react";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth/useAuth";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const { setUserEmail } = useAuth()
    const handleEmailLogin = async (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        const loginInfo = { email, password }
        const res = await axiosPublic.post("/api/login", loginInfo)
        if (res.status === 200) {
            setUserEmail(email)
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Login succesfull.',
            });
            navigate("/")
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
            <section className=" font-poppins bg-gradient-to-r from-sky-300 via-blue-500 to-sky-500 min-h-screen">
                <div className="flex items-center justify-center  mx-auto max-w-7xl min-h-screen">
                    <div className="flex-1">
                        <div className="flex flex-wrap ">
                            <div className="w-full py-6shadow-md lg:py-7 lg:w-1/2 dark:bg-gray-900">
                                <div className="max-w-md mx-auto">
                                    <div className="px-4 my-7 ">
                                        <div className="mb-7">
                                            <span
                                                className="flex items-center justify-center w-20 h-20 mx-auto text-gray-900 bg-green-600 rounded-lg dark:bg-green-600 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                    fill="currentColor" className="text-gray-200 bi bi-person-circle"
                                                    viewBox="0 0 16 16">
                                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                                                    <path fillRule="evenodd"
                                                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </div>
                                        <h2 className="mb-3 text-2xl font-bold text-center text-gray-800 dark:text-gray-400">
                                            Login your Account</h2>
                                        <p className="text-base text-center text-gray-500 mb-7 dark:text-gray-400">
                                            Please fill your credentials</p>


                                        {/* form validation */}
                                        <form onSubmit={handleEmailLogin}>
                                            {/* email */}
                                            <div className="mb-4">
                                                <input type="text"
                                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                                    name="email" placeholder="Your email" required />
                                            </div>

                                            {/* password */}
                                            <div>
                                                <div className="relative">
                                                    <input

                                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                                        name="password" type={showPassword ? "text" : "password"} placeholder="Password" required />
                                                </div>
                                                <div className="absolute -mt-10 ml-[380px] cursor-pointer">
                                                    <button onClick={() => setShowPassword(!showPassword)}>
                                                        {
                                                            showPassword ? <FaEye className="text-2xl text-[#403F3F]"></FaEye> : <FaEyeSlash className="text-2xl text-[#403F3F]"></FaEyeSlash>
                                                        }
                                                    </button>
                                                </div>

                                            </div>

                                            <div className="mb-4 text-right ">
                                                <a href="#"
                                                    className="text-sm font-semibold text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 hover:underline">
                                                    forgot password?</a>
                                            </div>

                                            <button
                                                className="w-full py-4 mb-4 font-semibold text-gray-200 bg-green-600 rounded-lg px-7 dark:text-gray-300 dark:bg-green-600 hover:text-blue-200 "
                                                type="submit">LOGIN</button>
                                            <p className="text-sm text-white dark:text-gray-400"> Need an account?
                                                <Link to='/register'
                                                    className="text-sm font-semibold text-zinc-950 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500">
                                                    Create an account</Link>
                                            </p>
                                        </form>


                                    </div>
                                </div>
                            </div>

                            <div className="relative items-center justify-center hidden w-full lg:flex lg:w-1/2 ">
                                <Lottie
                                    animationData={loginAnimation}
                                    options={defaultOptions}
                                    height={400}
                                    width={400}>
                                </Lottie>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
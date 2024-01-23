
import { CiUser } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth/useAuth";

const Navbar = () => {
    const { user,logOut } = useAuth()
    const [sideBar, setSidebar] = useState(false)
    const handleSignOUt = () => {
        logOut()
    }
    const navlinks =
        <>
            <li className="mr-4 text-lg  lg:text-white text-zinc-950  font-semibold hover:text-blue-600"><NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-blue-600 border-b-4 border-blue-600" : ""
            }>Home</NavLink></li>
            <li className="mr-4 text-lg lg:text-white text-zinc-950 font-semibold   hover:text-blue-600"><NavLink to="/allHouse" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-600 border-b-4 border-blue-600" : ""
            }>All House</NavLink></li>
            <li className="mr-4 text-lg lg:text-white text-zinc-950  font-semibold  hover:text-blue-600"><NavLink to="/dashboard" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-600 border-b-4 border-blue-600" : ""
            }>Dashboard</NavLink></li>
            <li className="mr-4 text-lg lg:text-white text-zinc-950  font-semibold  hover:text-blue-600"><NavLink to="/aboutUs" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-600 border-b-4 border-blue-600" : ""
            }>About Us</NavLink></li>
            <li className="mr-4 text-lg lg:text-white text-zinc-950  font-semibold  hover:text-blue-600"><NavLink to="/contact" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-600 border-b-4 border-blue-600" : ""
            }>Contact Us</NavLink></li>
        </>
    return (
        <div >

            {/* For large device */}
            <div className="hidden md:flex flex-col">
                {/* 1st part of navbar  */}
                <div className="w-full bg-gradient-to-r from-sky-300 via-blue-500 to-sky-300 py-5">
                    <div className="md:max-w-6xl mx-auto flex justify-between  items-center">
                        <div>
                            <img src="https://theme.easital.com/html/findhusly/v1.0/assets/img/logo-white.png" alt="" className="w-[200px] h-12" />
                        </div>
                        <div className="flex gap-6 items-center">
                            {/* Login functionality */}
                            <div>
                                {user ? <p className="text-zinc-200">Welcome, <span className="text-green-600 font-semibold">{user?.name}</span></p> : <Link to="/login" className="flex items-center font-libreFranklin text-zinc-200"><CiUser className="text-xl mr-1"></CiUser> Login or Register</Link>}
                                <p ></p>
                            </div>
                            {/* Number */}
                            <div>
                                <p className="flex items-center  font-libreFranklin text-zinc-200"><IoCallOutline className="text-xl mr-1"></IoCallOutline> +(88)01852628057</p>
                            </div>
                            {/* language */}
                            <div className="relative">
                                <select name="" id="" className=" outline-none border-none text-zinc-200" style={{ background: 'none' }}>
                                    <option value="English" className=" text-zinc-950">
                                        English</option>
                                    <option value="" className=" text-zinc-950">
                                        Bangla</option>
                                    <option value="" className=" text-zinc-950">
                                        Hindi</option>
                                </select>
                            </div>
                            {/*Search bar */}
                            <div>
                                <div className=" flex px-4 py-3  border-b border-white  focus-within:border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="18px" className="fill-white mr-3  ">
                                        <path
                                            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                                        </path>
                                    </svg>
                                    <input type="text" placeholder="Search Something..." className="w-full outline-none text-zinc-950  text-sm" style={{ background: 'none' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navlink all route part */}
                <div className="w-full bg-gradient-to-r from-black via-gray-800 to-black">
                    <div className="md:max-w-6xl mx-auto flex justify-between items-center py-4">
                        <div>
                            <ul className="flex items-center ml-16">
                                {navlinks}
                            </ul>
                        </div>
                        <div className="flex items-center">
                            <button className=" btn hvr-sweep-to-top font-semibold text-lg border-zinc-950">Virtual Tours</button>
                            {/* user photo and name and logout button */}
                            {user ? <div className="dropdown dropdown-end z-10">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoUrl} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-36">

                                    <li className="text-xl font-bold px-1 text-blue-600">{user.name}</li>
                                    <li><button className="mt-4 btn hvr-sweep-to-top font-semibold text-lg border-zinc-950" onClick={handleSignOUt} >Logout</button></li>
                                </ul>
                            </div> : ""}

                        </div>
                    </div>
                </div>
            </div>


            {/* For mobile device */}
            <div className="flex  justify-around items-center md:hidden container mx-auto  z-10 bg-[#306ba9] shadow-lg p-3">
                {/* Sidebar Button */}
                <div>
                    <button onClick={() => setSidebar(true)}>
                        <IoMenuSharp className="text-3xl  ml-5" />
                    </button>

                    {/* Sidebar */}
                    {sideBar && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setSidebar(false)}>
                            <nav className="bg-[#3e92ca] h-screen  fixed top-0 left-0 min-w-[250px] py-6 px-4 font-[sans-serif]">
                                <img
                                    src="https://theme.easital.com/html/findhusly/v1.0/assets/img/logo-white.png"
                                    alt=""
                                    className=" h-12"
                                />
                                <div className="overflow-auto py-6 h-full mt-4">
                                    <ul className="space-y-1">{navlinks}</ul>
                                </div>
                            </nav>
                        </div>
                    )}
                </div>

                <div>
                    <img src="https://theme.easital.com/html/findhusly/v1.0/assets/img/logo-white.png" alt="" className=" h-12 object-cover" />
                </div>
                {/* Website Logo */}
                <div >
                    {user ? (
                        <div className="dropdown dropdown-end z-10">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoUrl} alt="User Avatar" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-36">
                                <li className="text-xl font-bold px-1 text-blue-600">{user.displayName}</li>
                                <li>
                                    <button className="mt-4 btn hvr-sweep-to-top font-semibold text-lg border-zinc-950" onClick={handleSignOUt}>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <Link to="/login" className="flex btn border-zinc-950 ">
                            <FaRegCircleUser className="text-xl ml-2" />
                            Login
                        </Link>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Navbar;
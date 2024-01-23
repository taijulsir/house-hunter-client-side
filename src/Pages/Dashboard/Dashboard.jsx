


import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import useCheckUserRole from "../../Hooks/useCheckUserRole/useCheckUserRole";
import Shared from "./Shared/Shared";
import DashboardNav from "./DashboardNav/DashboardNav";
import RenterDashboard from "./RenterDashboard/RenterDashboard.js";
import OwnerDashboard from "./OwnerDashboard/OwnerDashboard.jsx.jsx";


const Dashboard = () => {
    const [open, setOpen] = useState(true)
    const [dropdown, setDropdown] = useState(false)
    const { user } = useAuth()
    const [isOwner, isCheckRoleReloading] = useCheckUserRole()
    if (isCheckRoleReloading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    const role = isOwner ? isOwner.role : null;
    const owner = role ? role?.owner : false;
    const renter = role? role.renter : false;
   
    return (
        <div className=" font-raleway ">
            
            <div className=" dark:bg-gray-800 bg-gradient-to-r from-sky-300 via-blue-500 to-sky-500">
                <div className={`body-content ${open ? 'open' : ''}`}>

                    {/* navlink  */}
                    <div className="relative lg:block navbar-menu ">
                        <nav
                            className={`fixed top-0 bg-gradient-to-r from-sky-300 to-sky-500  transition-all lg:mt-0 z-40 mt-16 left-0 dark:bg-gray-900 bottom-0 flex flex-col ${open ? 'w-[280px]' : 'w-0'
                                } lg:border-none border-r border-gray-200 dark:border-gray-800 text-zinc-950 overflow-hidden`}
                            id="sidenav"
                        >

                            {/* website logo */}
                            <div
                                className="flex items-center w-full px-4 pt-4 pb-4 mb-4 dark:border-gray-700">
                                <Link to='/'>
                                    <div className="flex items-center ml-2">                             
                                        <img src="https://theme.easital.com/html/findhusly/v1.0/assets/img/logo-white.png" className='h-12 w-28 lg:h-8 lg:w-32' alt="" />
                                    </div>
                                </Link>
                            </div>
                            {/* user photo and name */}
                            <div className="flex flex-wrap items-center px-4">
                                <div className="px-2">
                                    <img src={user?.photoUrl}
                                        className="object-cover object-right w-10 h-10 rounded-full" alt="person" />
                                </div>
                                <div className="px-2">
                                    <span className="text-sm text-zinc-950 dark:text-gray-400 ">Welcome,</span>
                                    <h2 className="text-lg text-zinc-950 font-medium dark:text-gray-300 ">{user?.name}</h2>
                                </div>
                            </div>

                            {/* routes */}
                            <div className="pb-6 mt-4  ">

                                {/* normal user */}
                                <ul className="mb-8 text-sm">
                                    {user && !owner && renter && <RenterDashboard></RenterDashboard>}
                                </ul>
                                {/* admin */}
                                <ul className="mb-8 text-sm">
                                    {user && !renter && owner && <OwnerDashboard></OwnerDashboard>}
                                </ul>
                            </div>

                            <div className="divider divider-warning mt-12 px-6"></div>
                            {/* available all routes */}
                            <div className="pb-6 mt-4  ">
                                <ul className=" list-none">
                                    <Shared></Shared>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    {/* content side */}
                    <div className={`mx-auto bg-gradient-to-r from-sky-300 via-blue-500 to-sky-500  transition-all content-wrapper ${!open ? 'lg:ml-0' : 'lg:ml-[280px]'}`} id="dash">
                        {/* navbar */}
                        <div>
                            <DashboardNav open={open} setOpen={setOpen} dropdown={dropdown} setDropdown={setDropdown}></DashboardNav>
                        </div>
                        <div className=" font-raleway bg-gradient-to-r from-sky-300 via-blue-500 to-sky-500">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Dashboard;
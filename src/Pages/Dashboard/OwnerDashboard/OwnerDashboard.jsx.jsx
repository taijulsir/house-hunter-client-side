import { FaHeart, FaHome } from "react-icons/fa";

import { MdOutlineDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const OwnerDashboard = () => {
    return (
        <div>
            <li>
                <Link
                to="manageHouse"
                    className="flex items-center px-6 py-4 text-zinc-950 dark:text-gray-400 group dark:hover:bg-gray-700  hover:bg-gray-600 hover:rounded-md">
                    <span className="inline-block mr-3">
                        <MdOutlineDashboard className="text-2xl"></MdOutlineDashboard>
                    </span>
                    <span>Manage House</span>
                </Link>
            </li>
            <li>
                <Link
                to="addNewHouse"
                    className="flex items-center px-6 py-4 text-zinc-950 dark:text-gray-400 group dark:hover:bg-gray-700  hover:bg-gray-600 hover:rounded-md">
                    <span className="inline-block mr-3">
                        <FaHeart className="text-2xl"></FaHeart>
                    </span>
                    <span>Add New House</span>
                </Link>
            </li>
            <li>
                <Link
                    to="/"
                    className="flex items-center text-sm px-6 py-4 text-zinc-950 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-600 hover:rounded-md ">
                    <span className="inline-block mr-3">
                        <FaHome className="text-2xl"></FaHome>
                    </span>
                    <span>Go Home</span>
                </Link>
            </li>
           
        </div>
    );
};

export default OwnerDashboard;
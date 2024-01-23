import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";

const RenterDashboard = () => {
    return (
        <div>
        <li>
            <Link
            to="overview"
                className="flex items-center px-6 py-4 text-zinc-950 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-600 hover:rounded-md">
                <span className="inline-block mr-3">
                    <MdOutlineDashboard className="text-2xl"></MdOutlineDashboard>
                </span>
                <span>Overview</span>
            </Link>
        </li>
        <li>
            <Link
            to="manageBookings"
                className="flex items-center px-6 py-4 text-zinc-950 dark:text-gray-400 group dark:hover:bg-gray-700  hover:bg-gray-600 hover:rounded-md">
                <span className="inline-block mr-3">
                    <FaHeart className="text-2xl"></FaHeart>
                </span>
                <span>Manage Bookings</span>
            </Link>
        </li>
        
    </div>
    );
};

export default RenterDashboard;
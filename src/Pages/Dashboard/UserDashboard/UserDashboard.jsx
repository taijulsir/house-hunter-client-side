import { Link } from "react-router-dom";
import { FaBook, FaHeart, FaSuperpowers } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";

const UserDashboard = () => {
    return (
        <div>
        <li>
            <Link
            to="usersProfile"
                className="flex items-center px-6 py-4 text-zinc-950 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-600 hover:rounded-md">
                <span className="inline-block mr-3">
                    <MdOutlineDashboard className="text-2xl"></MdOutlineDashboard>
                </span>
                <span>My Profile</span>
            </Link>
        </li>
        <li>
            <Link
            to="wishlist"
                className="flex items-center px-6 py-4 text-zinc-950 dark:text-gray-400 group dark:hover:bg-gray-700  hover:bg-gray-600 hover:rounded-md">
                <span className="inline-block mr-3">
                    <FaHeart className="text-2xl"></FaHeart>
                </span>
                <span>Wishlist</span>
            </Link>
        </li>
        <li>
            <Link
            to="propertyBought"
                className="flex items-center px-6 py-4 text-zinc-950 dark:text-gray-400 group dark:hover:bg-gray-700  hover:bg-gray-600 hover:rounded-md">
                <span className="inline-block mr-3">
                    <FaSuperpowers className="text-2xl"></FaSuperpowers>
                </span>
                <span>Property Bought</span>
            </Link>
        </li>
        <li>
            <Link
            to="myReviews"
                className="flex items-center px-6 py-4 text-zinc-950 dark:text-gray-400 group dark:hover:bg-gray-700  hover:bg-gray-600 hover:rounded-md">
                <span className="inline-block mr-3">
                    <FaBook className="text-2xl"></FaBook>
                </span>
                <span>My Reviews</span>
            </Link>
        </li>
    </div>
    );
};

export default UserDashboard;
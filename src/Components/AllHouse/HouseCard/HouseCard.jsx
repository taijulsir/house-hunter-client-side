/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { LiaBathSolid } from "react-icons/lia";
import { IoBedOutline } from "react-icons/io5";
import { SlSizeActual } from "react-icons/sl";


const HouseCard = ({ house }) => {
    return (
        <div>
            <div className="px-5 lg:px-0">
                <div className="w-full">
                    <div className="p-6 border rounded shadow-2xl  shadow-[#0b070b] dark:bg-gray-700 group">
                        <div className="block mb-2" >
                            <div className="relative overflow-hidden">
                                <div className="mb-5 overflow-hidden">
                                    <img className="object-cover w-full mx-auto transition-all rounded-md h-48 group-hover:scale-110"
                                        src={house.picture} />
                                </div>
                                <div className="absolute flex flex-col top-4 right-4">
                                    <a className="flex items-center">
                                        <div
                                            className="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-white rounded dark:bg-gray-700 dark:text-zinc-950 group-hover:translate-x-0 wishlist hover:bg-blue-200 dark:hover:bg-blue-600 group">
                                            <IoIosHeartEmpty className="text-2xl text-red-500"></IoIosHeartEmpty>
                                        </div>
                                    </a>
                                    <a className="flex items-center">
                                        <div
                                            className="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-white rounded dark:bg-gray-700 dark:text-zinc-950 group-hover:translate-x-0 wishlist hover:bg-blue-200 dark:hover:bg-blue-600 group">
                                            <BsCart2 className="text-2xl text-green-500"></BsCart2>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <a >
                                <h3 className="mb-2 text-xl  text-zinc-950 font-bold dark:text-zinc-950">{house.name}</h3>
                            </a>
                            {/* agent information */}
                            <div className="flex flex-wrap items-center cursor-pointer  rounded-lg w-full py-2">
                                <img src={house.ownerImage} className="w-12 h-12 rounded-full object-cover" />
                                <div className="ml-4 flex-1">
                                    <p className="text-lg text-zinc-950 font-semibold">{house.ownerName}</p>
                                    <p className="text-base text-zinc-950">{house.ownerEmail}</p>
                                </div>
                            </div>
                            <div className="flex justify-between my-4 ">
                                <p className="text-sm text-zinc-950 flex items-center"><CiLocationOn className="text-2xl mr-2 text-zinc-950"></CiLocationOn> {house?.city}</p>
                                <p className="text-sm text-zinc-950 flex items-center"><AiOutlineDollar className="text-2xl mr-2 text-zinc-950"></AiOutlineDollar> {house?.rentPerMonth}</p>
                                <p className="text-sm text-zinc-950 flex items-center"><MdOutlineVerifiedUser className="text-2xl mr-2 text-green-600"></MdOutlineVerifiedUser></p>
                            </div>

                            <div className="flex gap-5">
                                <div  className="w-full">
                                    <button className="btn border-zinc-950 hvr-sweep-to-top mt-2 text-lg w-full">Book Now</button>
                                </div>
                                <div className="flex items-center w-full">
                                    <p className="flex items-center text-zinc-950 text-xl mr-2"><LiaBathSolid className="text-2xl  mr-2"></LiaBathSolid> {house.bath} </p>
                                    <p className="flex items-center text-zinc-950 text-xl mr-2"><IoBedOutline className="text-2xl  mr-2"></IoBedOutline> {house.bed} </p>
                                    <p className="flex items-center text-zinc-950 text-base mr-2"><SlSizeActual className="text-lg  mr-2"></SlSizeActual> {house.size} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseCard;
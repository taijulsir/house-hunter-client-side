/* eslint-disable react/prop-types */


import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { LiaBathSolid } from "react-icons/lia";
import { IoBedOutline } from "react-icons/io5";
import { SlSizeActual } from "react-icons/sl";
import useAuth from "../../../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";


const HouseCard = ({ house }) => {
    const { user } = useAuth()
    const [phoneNumber, setphoneNumber] = useState("")
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    // model functionality
    const handleBookings = () => {
        if (!user) {
            Swal.fire({
                title: "Are you sure?",
                text: "You can book this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, sure!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login")
                }
            });
        }
        else if (user) {
            document.getElementById('my_modal_3').showModal()
        }
    }

    // Booking model
    const handleBookingModel = async (id) => {
        const houseId = id;
        const renterName = user.name;
        const renterImage = user.displayUrl;
        const renterEmail = user.email;
        const number = phoneNumber
        const renterInfo = {houseId,renterEmail,renterImage,renterName,number}
        const res = await axiosPublic.post("/api/bookHouse",renterInfo)
        if(res.data.insertedId){
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Booking succesfull.',
            });
        }
        
    }
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

                                {/* Booking functionality */}
                                <div className="w-full">
                                    <button onClick={handleBookings} className="btn border-zinc-950 hvr-sweep-to-top mt-2 text-lg w-full">Book Now</button>
                                    <dialog id="my_modal_3" className="modal">
                                        <div className="modal-box">
                                            <form method="dialog">
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>

                                            {/* form */}
                                            <div>
                                                <h3 className="text-2xl my-3 font-semibold"></h3>
                                                <div className="flex flex-col items-center">
                                                    <img src={user?.photoUrl} className="w-28 h-w-28 rounded-full object-cover" />
                                                    <div className="mt-4 text-center">
                                                        <p className="text-2xl text-[#333] font-bold">{user?.name}</p>
                                                        <p className="text-sm text-gray-400 mb-6">{user?.email}</p>
                                                    </div>
                                                </div>
                                                <form onChange={e => setphoneNumber(e.target.value)} className=" space-y-6">
                                                    <textarea placeholder="Your Number..." className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                                                </form>
                                                <button onClick={() => handleBookingModel(house._id)} className="btn w-full bg-amber-600 my-3">Booking Now</button>

                                            </div>
                                        </div>
                                    </dialog>
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
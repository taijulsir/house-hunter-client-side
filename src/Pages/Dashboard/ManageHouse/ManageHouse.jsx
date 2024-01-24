

import { FaRegEdit } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { LuUserCog } from "react-icons/lu";
import { MdOutlineDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { Link } from "react-router-dom";



const ManageHouse = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    // fetching data by tanstaq query
    const { data: houses, refetch } = useQuery({
        queryKey: [user?.email,"Owner House"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/house/user/${user?.email}`)
            return res.data;
        }
    })
    // handle house delete 
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/api/deleteHouse/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    
    return (
        <div className="mt-5 min-h-screen lg:mx-12 mx-3">
            <div className="overflow-x-auto">
                <h1 className="text-3xl font-bold text-zinc-950 mt-20 mb-6">Manage Your Houses</h1>
                <table className="min-w-full bg-white font-[sans-serif]">

                    {/* table heading */}
                    <thead className="bg-gray-800 whitespace-nowrap">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                #
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                Email
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                Edit
                            </th>       
                            <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody className="whitespace-nowrap">
                        {/* dynamically mapping table data */}
                        {houses?.map((house, index) =>
                            <tr key={index} className="even:bg-blue-50">
                                <td className="px-6 py-4 text-sm ">
                                    <p className="w-1/2 bg-slate-200 text-center"> {index + 1}</p>
                                </td>
                                <td className="px-6 py-4 text-lg">
                                    {house.name}
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    <div className="flex items-center cursor-pointer">
                                        <img src={house.ownerImage} className="w-12 h-12 rounded-full shrink-0 object-cover" />
                                        <div className="ml-4">
                                            <p className="text-base text-gray-400 ">{house.ownerEmail}</p>
                                        </div>
                                    </div>
                                </td>
                                
                               {/* update user */}
                               <td className="px-6 py-4 text-sm">
                                    <Link to={`/dashboard/updateHouse/${house._id}`} className="mr-4 btn bg-amber-500">
                                        <FaRegEdit className="text-2xl "></FaRegEdit>
                                    </Link>
                                </td>
                                {/* Delete user */}
                                <td className="px-6 py-4 text-sm">
                                    <button onClick={() => handleDelete(user._id)} className="mr-4 btn bg-red-500">
                                        <MdOutlineDelete className="text-2xl "></MdOutlineDelete>
                                    </button>
                                </td>
                            </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageHouse;
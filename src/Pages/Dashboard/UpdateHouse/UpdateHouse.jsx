import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useForm } from "react-hook-form";


const UpdateHouse = () => {
    const house = useLoaderData()
    const {_id,name,address,city, bedrooms,bathrooms, size,picture, availabilityDate, rentPerMonth,phoneNumber , description} = house
    const {user} = useAuth()
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {
        const houseInfo = {
            name: data.name,
            address: data.address,
            city: data.city,
            bedrooms: data.bedrooms,
            bathrooms: data.bathrooms,
            size: data.size,
            picture: data.housePicture,
            availabilityDate: data.date,
            rentPerMonth: data.rentPerMonth,
            phoneNumber: data.phoneNumber ,
            description: data.description,
            ownerEmail: user?.email,
            ownerName: user?.name,
            ownerImage: user?.photoUrl
        }
        const res = await axiosSecure.put(`/api/updateHouse/${_id}`, houseInfo)
        if (res.data.modifiedCount > 0) {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'House updated succesfull.',
            })
            navigate("/dashboard/manageHouse")
        }}
    return (
        <div className=" min-h-screen">
            <form onSubmit={handleSubmit(onSubmit)} className="font-[sans-serif] max-w-4xl mx-auto mt-20">
                <h1 className=" text-2xl font-bold text-zinc-950 mb-6">Submit Property for Rent</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* name */}
                    <div className="relative flex items-center">
                        <input {...register('name', { required: true })} type="text" defaultValue={name} placeholder="House Name"
                            className="px-4 py-3 bg-[#f0f1f2] text-black w-full text-sm border outline-[#007bff] rounded" />

                    </div>
                    {/* address */}
                    <div className="relative flex items-center">
                        <input {...register('address', { required: true })} type="text" defaultValue={address} placeholder="Address"
                            className="px-4 py-3 bg-[#f0f1f2] text-black w-full text-sm border outline-[#007bff] rounded" />

                    </div>
                    {/* city */}
                    <div className="relative flex items-center">
                        <input {...register('city', { required: true })} type="text" defaultValue={city} placeholder="City Name"
                            className="px-4 py-3 bg-[#f0f1f2] text-black w-full text-sm border outline-[#007bff] rounded" />

                    </div>
                    {/* bedrooms */}
                    <div className="relative flex items-center">
                        <input {...register('bedrooms', { required: true })} type="number"defaultValue={bedrooms} placeholder="Bedrooms"
                            className="px-4 py-3 bg-[#f0f1f2] text-black w-full text-sm border outline-[#007bff] rounded" />

                    </div>
                    {/* bathrooms */}
                    <div className="relative flex items-center">
                        <input {...register('bathrooms', { required: true })} type="number" defaultValue={bathrooms} placeholder="Bathrooms"
                            className="px-4 py-3 bg-[#f0f1f2] text-black w-full text-sm border outline-[#007bff] rounded" />

                    </div>
                    {/* room size */}
                    <div className="relative flex items-center">
                        <input {...register('size', { required: true })} type="text" defaultValue={size} placeholder="Room size"
                            className="px-4 py-3 bg-[#f0f1f2] text-black w-full text-sm border outline-[#007bff] rounded" />

                    </div>
                    {/* picture */}
                    <div className="relative flex items-center">
                        <input {...register('housePicture', { required: true })} type="url" defaultValue={picture} placeholder="House Picture"
                            className="px-4 py-3 bg-[#f0f1f2] text-black w-full text-sm border outline-[#007bff] rounded" />

                    </div>
                    {/* availibility date */}
                    <div className="relative flex items-center">
                        <input {...register('availabilityDate', { required: true })} type="date" defaultValue={availabilityDate} placeholder="Availabililty Date"
                            className="px-4 py-3 bg-[#f0f1f2] text-black w-full text-sm border outline-[#007bff] rounded" />

                    </div>
                    {/* Rent per month */}
                    <div className="relative flex items-center">
                        <input {...register('rentPerMonth', { required: true })} type="number" defaultValue={rentPerMonth} placeholder="Rent Cost"
                            className="px-4 py-3 bg-[#f0f1f2] text-black w-full text-sm border outline-[#007bff] rounded" />

                    </div>
                    {/* phone number */}
                    <div className="relative flex items-center">
                        <input
                            {...register('phoneNumber',
                                {
                                    required: true,
                                    pattern: /^(?:\+8801|8801|01)[3456789]\d{8}$/,
                                })} type="text" defaultValue={phoneNumber} placeholder="Phone Number"
                            className="px-4 py-3 bg-[#f0f1f2] text-black w-full text-sm border outline-[#007bff] rounded" />
                    </div>
                    {errors.phoneNumber && <span className="text-red-600 font-medium mt-2">Please insert valid Bangladeshi number</span>}
                </div>
                {/* description */}
                <div className="my-6">
                    <textarea {...register('description', { required: true })} defaultValue={description} placeholder='Type Description'
                        className="px-4 py-3 bg-[#f0f1f2] text-black w-full text-sm border outline-[#007bff] rounded" rows="4"></textarea>
                </div>
                <button type="submit"
                    className="mt-8 px-6 py-2.5 text-sm w-full font-semibold bg-[#007bff] text-white rounded hover:bg-[#006bff]">Submit</button>
            </form>
        </div>
    );
};

export default UpdateHouse;
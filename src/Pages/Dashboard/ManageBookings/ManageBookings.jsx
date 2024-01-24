import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";



const ManageBookings = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const { data: bookingHouses } = useQuery({
        queryKey: [user?.email, "bookingHouse"],
        queryFn: async () => {
            const res = await axiosPublic.get(`https://house-hunter-server-side-alpha.vercel.app/api/bookHouse/${user?.email}`)
            return res.data;
        }

    })
    return (
        <div className="min-h-screen">
            <div>
                {bookingHouses?.map(bookingHouse => <div key={bookingHouse._id}>


                </div>)}
            </div>
        </div>
    );
};

export default ManageBookings;
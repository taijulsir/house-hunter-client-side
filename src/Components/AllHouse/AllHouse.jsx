import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import HouseCard from "./HouseCard/HouseCard";


const AllHouse = () => {
    const axiosPublic = useAxiosPublic()
    const { data: houses } = useQuery({
        queryKey: ["allHouse"],
        queryFn: async () => {
            const res = await axiosPublic.get('/api/houses')
            return res.data;
        }
    })
    console.log(houses)
    return (
        <div className=" container mx-auto ">
            <h1 className=" text-center font-bold text-3xl lg:text-5xl mt-20">Explore Featured Houses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {houses?.slice(0,10).map(house=><HouseCard key={house._id} house={house}></HouseCard>)}
            </div>
        </div>
    );
};

export default AllHouse;
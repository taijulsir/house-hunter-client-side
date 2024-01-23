import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";


const useCheckUserRole = () => {
   const {user} = useAuth()
   const axiosSecure = useAxiosSecure()
   const {data:isOwner ,error, isPending: isCheckRoleReloading,refetch} = useQuery({
    queryKey: [user?.email,"isOwner"],
    enabled: !!user?.email && !!localStorage.getItem('access-token'),
    queryFn: async()=>{
        const res= axiosSecure.get(`/api/user/checkRole/${user?.email}`)
        return (await res).data;
    },
    initialData:{
        owner: false,
        renter: false       
    }
   });
   if(error){
    console.error("Error fetching role", error)
   }

   return [isOwner,isCheckRoleReloading,refetch]
};

export default useCheckUserRole;
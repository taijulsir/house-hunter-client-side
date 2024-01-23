import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";


const useCheckUserRole = () => {
   const {user} = useAuth()
   const axiosSecure = useAxiosSecure()
   const {data:isAdmin ,error, isPending: isCheckRoleReloading,refetch} = useQuery({
    queryKey: [user?.email,"isAdmin"],
    queryFn: async()=>{
        const res= axiosSecure.get(`/api/user/checkRole/${user?.email}`)
        return (await res).data;
    },
    initialData:{
        admin: false
    }
   });
   if(error){
    console.error("Error fetching role", error)
   }

   return [isAdmin,isCheckRoleReloading,refetch]
};

export default useCheckUserRole;
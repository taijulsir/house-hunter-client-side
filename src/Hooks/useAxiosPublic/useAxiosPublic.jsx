import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://house-hunter-server-side-alpha.vercel.app"
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
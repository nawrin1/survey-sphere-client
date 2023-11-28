import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const usePayment = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure=useAxiosSecure()
  
  

    const {data: payment = [] } = useQuery({
        queryKey: ['payment',user.email], 
        queryFn: async() =>{
            const res = await axiosSecure.get(`/payment`);
            return res.data;
        }
    })


    return [payment]
}

export default usePayment;
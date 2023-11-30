import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";




const useVote = () => {
    const { user,loading } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const { data: vote=[], isFetched } = useQuery({
        queryKey: [user?.email, 'vote'],
        enabled:!loading,
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/vote`);
                console.log(res.data, "vote from hook");
                return res.data;
            } catch (error) {
                console.error("Error fetching vote data:", error);
                throw error;
            }
        }
    })
    // if (!isFetched){
    //     return <h2>loading</h2>
       

    // }
    return [vote, isFetched]
   
};

export default useVote;
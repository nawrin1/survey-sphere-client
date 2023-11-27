import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";




const useComment= ({title}) => {
    console.log(title,"--")
    const { user,loading } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const { data:comment=[], isFetched ,refetch} = useQuery({
        queryKey: [user?.email, 'comment'],
        enabled:!loading,
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/comment?title=${title}`);
                console.log(res.data, "comment from hook");
                return res.data;
            } catch (error) {
                console.error("Error fetching vote data:", error);
                throw error;
            }
        }
    })
   
    return [comment, refetch]
   
};

export default useComment;
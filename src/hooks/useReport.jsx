import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";




const useReport = () => {
    const { user,loading } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const { data: report=[] } = useQuery({
        queryKey: [user?.email, 'report'],
        enabled:!loading,
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/unpublish`);
                console.log(res.data, "unpublish from hook");
                return res.data;
            } catch (error) {
                console.error("Error fetching vote data:", error);
                throw error;
            }
        }
    })
    console.log(report,"from")
    return [report]
   
};

export default useReport;
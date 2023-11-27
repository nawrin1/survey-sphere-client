import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";








const useUsers = () => {
    const { user,loading } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const { data: allUsers } = useQuery({
        queryKey: [user?.email, 'allUser'],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`);
            console.log(res.data,"all");
            return res.data;
        }
    })
    return [allUsers]
};

export default useUsers;
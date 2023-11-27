import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";








const useUsers = (search) => {
    const { user,loading } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const { data: allUsers,refetch,isFetched} = useQuery({
        queryKey: [user?.email, 'allUser'],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?search=${search}`);
            console.log(res.data,"all user role");
            return res.data;
        }
    })

    return [allUsers,refetch,isFetched]
};

export default useUsers;
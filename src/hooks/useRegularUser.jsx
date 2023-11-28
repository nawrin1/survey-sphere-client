import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";








const useRegularUser = () => {
    const { user,loading } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const { data: regularUser, isPending: isUserLoading } = useQuery({
        queryKey: [user?.email, 'isRegularUser'],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/role/${user.email}`);
            console.log(res.data,"regular user from hook");
            return res.data?.regularUser;
        }
    })
    return [regularUser, isUserLoading]
};

export default useRegularUser;
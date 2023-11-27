

import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";





const useUserRole = () => {
    const { user,loading } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const { data: proUser, isPending: isUserLoading } = useQuery({
        queryKey: [user?.email, 'isUser'],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/userRole/${user.email}`);
            console.log(res.data,"user from hook");
            return res.data?.proUser;
        }
    })
    return [proUser, isUserLoading]
};

export default useUserRole;
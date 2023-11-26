import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";



const useSurveyor = () => {
    const { user,loading } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const { data: isSurveyor, isPending: isSurveyorLoading } = useQuery({
        queryKey: [user?.email, 'isSurveyor'],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/surveyor/${user.email}`);
            console.log(res.data,"surveyor from hook");
            return res.data?.surveyor;
        }
    })
    return [isSurveyor, isSurveyorLoading]
};

export default useSurveyor;
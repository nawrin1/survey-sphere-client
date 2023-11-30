


import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosPublic from "./useAxiosPublic";


const useAllSurvey = (search) => {
    console.log(search,"all")
    const axiosPublic=useAxiosPublic()
  

    const {data: surveys = [], isPending: loadings,refetch,isFetched } = useQuery({
        queryKey: ['surveys',search], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/survey?search=${search}`);
            return res.data;
        }
    })


    return [surveys, loadings,refetch,isFetched]
}

export default useAllSurvey;
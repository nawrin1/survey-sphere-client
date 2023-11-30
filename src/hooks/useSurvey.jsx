// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosPublic from "./useAxiosPublic";


const useSurvey = () => {
    const axiosPublic=useAxiosPublic()
  

    const {data: survey = [], isPending: loading,isFetched } = useQuery({
        queryKey: ['survey'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/allSurvey');
            return res.data;
        }
    })


    return [survey, loading,isFetched]
}

export default useSurvey;
// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useSurvey = () => {
  

    const {data: survey = [], isPending: loading } = useQuery({
        queryKey: ['survey'], 
        queryFn: async() =>{
            const res = await axios.get('http://localhost:5000/allSurvey');
            return res.data;
        }
    })


    return [survey, loading]
}

export default useSurvey;
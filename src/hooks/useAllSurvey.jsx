


import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useAllSurvey = (search) => {
    console.log(search,"all")
  

    const {data: surveys = [], isPending: loadings } = useQuery({
        queryKey: ['surveys',search], 
        queryFn: async() =>{
            const res = await axios.get(`http://localhost:5000/survey?search=${search}`);
            return res.data;
        }
    })


    return [surveys, loadings]
}

export default useAllSurvey;
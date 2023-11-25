import { DriveFileMove } from "@mui/icons-material";
import EachSurvey from "../../components/EachSurvey/EachSurvey";
import Survey from "../../components/Survey/Survey";
import useAllSurvey from "../../hooks/useAllSurvey";
import useSurvey from "../../hooks/useSurvey";
import { FcSurvey } from "react-icons/fc";
import { useState } from "react";
import TextField from '@mui/material/TextField';

const SurveyPage = () => {
    
    
    const [search,setSearch]=useState('')
    const [surveys,loadings]=useAllSurvey(search)
    
    const handleSearch=e=>{
        e.preventDefault()
        const text=e.target.search.value
        console.log(text,"b")
        setSearch(text)

    }
    
  
    return (
     <div className="my-16">
      
           <div className="flex justify-center">
            <div>
                <h2 className="max-w-xl mx-auto font-Sora font-extrabold text-5xl text-slate-600 text-center ">All Surveys</h2>
            </div>
            <div className="text-5xl ml-6 flex items-center justify-center">
            <FcSurvey></FcSurvey>
            </div>
           
        </div>
        <div className="flex justify-center items-center my-6">
       <form onSubmit={handleSearch}>
            {/* <input type="text" name="search" className="border-2 border-red-200 " id="" /> */}
            <TextField id="outlined-search" label="Search field" type="text" name="search" />
        
            <input type="submit" value="Search" className=" h-14 bg-teal-600 w-[100px]" />
        </form>
       </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto mt-10">
            {
                surveys.map((item,idx)=><Survey key={idx}item={item}></Survey>)
            }
           </div>
     </div>
      
    );
};

export default SurveyPage;

import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Watch } from "react-loader-spinner";


const AllSurvey = () => {
    const {user}=useContext(AuthContext)
    const axiosPublic=useAxiosPublic()
    const {data: survey = [], isPending: loadings,isFetched } = useQuery({
        queryKey: ['allsurvey',user], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/surveys?surveyor=${user.email}`);
            return res.data;
        }
    })
    if(!isFetched){
        return <div className='flex justify-center items-center min-h-screen place-content-center mx-auto place-items-center '><Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      /></div>
    }
    console.log(survey,"from all survey")

    return (
        <div className="mb-10">
            <h2 className="text-2xl font-Sora font-bold text-center text-blue-800 my-8"> --Survey you created--</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols- gap-4 max-w-4xl mx-auto">

                {
                    survey.map((item,idx)=><>
                        <div className="p-4 h-[250px] bg-slate-200 flex flex-col rounded-lg shadow-md shadow-slate-600">
        <div className="h-[50px] bg-slate-50 rounded-lg border-l-4 border-gray-800">
            <h2 className="text-xl font-Sora font-bold text-center text-blue-900 ">{item.title}</h2>
        </div>
        <div className="flex-grow">
            <p className="text-[14px] font-Sora font-semibold mt-4">Category: {item.category}</p>
            <p className="font-Sora text-slate-600">{item.description.slice(0, 50)}.....</p>
            <div className="mt-2 flex justify-between">
                <div>
                <button className=" text-[14px] font-bold font-Sora mt-4 text-emerald-800">Voted: {item.votedNumber}</button>
                </div>
                <div>
                <button className=" text-[14px] font-bold font-Sora mt-4  text-emerald-800 ">Status: {item.status}</button>
                </div>
                 
            </div>
            <div className="p-[4px] bg-white w-[70px] rounded-3xl mt-2 ">
                <Link to={`/surveyDashboard/update/${item._id}`}><button className=" text-[14px] font-semibold font-Sora">UPDATE</button></Link>
                </div>
        </div>
    </div>
                    </>)

                }
            </div>
            
        </div>
    );
};

export default AllSurvey;
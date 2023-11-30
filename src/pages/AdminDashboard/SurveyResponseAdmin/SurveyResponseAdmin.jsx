import { BarChart, XAxis } from "recharts";
import useVote from "../../../hooks/useVote";
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import { Bar, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Watch } from "react-loader-spinner";



const SurveyResponseAdmin = () => {
    const [vote,isFetched]=useVote()
    // const [response,setAllResponse]=useState([])
    const [data,setData]=useState([])
    
   
    const axiosSecure=useAxiosSecure()
    console.log(vote,"admin response survey")
    const handleChart=(res)=>{
      axiosSecure.get(`/getSurveyData/${res._id}`)
        .then(response => {
          const { yes, no } = response.data;
          console.log(yes, no);
          const data = [{name: 'YES', uv: yes},{name: 'NO', uv: no} ];
          setData(data)
        })
        .catch(error => {
          console.error('Error fetching survey data:', error);
        });
        document.getElementById(`my_modal_${res._id}`).showModal()

    }
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
    return (
        <div>
            
            <div>
             <div>
      <h2 className="text-2xl font-Sora font-bold text-center text-blue-800 my-8">--Survey Response--</h2>
      <div className="overflow-x-auto w-screen lg:w-auto">
        <table className="table table-xs overflow-x-scroll ">
          <thead className=" text-[13px] font-semibold font-Sora">
            <tr>
              <th></th>
              <th>Survey Title</th>
              <th>Commented By</th>
              <th>Voted On</th>
              <th>Voted Status</th>
              <th>Chart</th>
            </tr>
          </thead>
          <tbody>
            {vote.map((res, idx) => (
              <tr className="font-Sora text-zinc-900" key={idx}>
                <th>{idx + 1}</th>
                <td>{res.title}</td>
                <td>{res.votedby}</td>
                <td>{res.votedTime}</td>
                <td>
                    Yes
                  
                </td>
                <td>
                  <button onClick={()=>handleChart(res)}className="btn btn-secondary">Chart</button>

                </td>
                <dialog id={`my_modal_${res._id}`} className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Chart</h3>
    <BarChart width={400} height={300} data={data}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="uv" fill="#8884d8" barSize={30} />
  </BarChart>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
            
        </div>
            
        </div>
    );
};

export default SurveyResponseAdmin;
import { useContext, useEffect, useState } from "react";
import useVote from "../../hooks/useVote";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { BarChart } from "recharts";
import { Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Watch } from "react-loader-spinner";



const SurveyResponse = () => {
    const [response,setAllResponse]=useState([])
    const [data,setData]=useState([])
    const [vote,isFetched]=useVote()
    const{user}=useContext(AuthContext)
    const axiosSecure=useAxiosSecure()
    useEffect(()=>{
        const res=vote.filter(votes=>votes.surveyor==user.email)
        console.log(res,"...")
        setAllResponse(res)
        


    },[user.email])
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
      <h2 className="text-2xl font-Sora font-bold text-center text-blue-800 my-8">--Response of Survey you created--</h2>
      <div className="overflow-x-auto table-xs w-screen lg:w-auto ">
        <table className="table ">
          <thead>
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
            {response.map((res, idx) => (
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
    );
};

export default SurveyResponse;
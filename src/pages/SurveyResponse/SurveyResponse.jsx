import { useContext, useEffect, useState } from "react";
import useVote from "../../hooks/useVote";
import { AuthContext } from "../../provider/AuthProvider";


const SurveyResponse = () => {
    const [response,setAllResponse]=useState([])
    const [vote]=useVote()
    const{user}=useContext(AuthContext)
    useEffect(()=>{
        const res=vote.filter(votes=>votes.surveyor==user.email)
        console.log(res,"...")
        setAllResponse(res)
        


    },[user.email,vote])
    return (
        <div>
             <div>
      <h2 className="text-2xl font-Sora font-bold text-center text-blue-800">Survey Response</h2>
      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr>
              <th></th>
              <th>Survey Title</th>
              <th>Commented By</th>
              <th>Voted On</th>
              <th>Voted Status</th>
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
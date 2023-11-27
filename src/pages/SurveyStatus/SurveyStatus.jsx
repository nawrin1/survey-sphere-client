import Swal from "sweetalert2";
import useAllSurvey from "../../hooks/useAllSurvey";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const SurveyStatus = () => {
    const [surveys,loading,refetch]=useAllSurvey('')
    console.log(surveys,"from survey status")
    const axiosSecure=useAxiosSecure()
    const handleStatus=(ress)=>{
        if(ress.status=="publish"){
            const data={status:"unpublish"}
            console.log('inside handle stat')
            axiosSecure.patch(`/survey/${ress._id}`,data)
            .then(res =>{
                console.log(res.data)
                if(res.data.modifiedCount > 0){
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${ress.title} is unpublished!`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                const sData = axiosSecure.post('/unpublish', ress)
                console.log(sData.data)
                if(sData.data.insertedId){
                    
                    // reset();
                    // Swal.fire({
                    //     position: "top-end",
                    //     icon: "success",
                    //     title: `Survey is added`,
                    //     showConfirmButton: false,
                    //     timer: 1500
                    //   });
                }
                
            })

        }
        if(ress.status=="unpublish"){
            const data={status:"publish"}
            console.log('inside handle stat unpub')
            axiosSecure.patch(`/survey/${ress._id}`,data)
            .then(res =>{
                console.log(res.data)
                if(res.data.modifiedCount > 0){
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${ress.title} is published!`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })

        }
        
    }
    return (
        <div>
            <h2 className="text-2xl font-Sora text-blue-600 text-center mt-7 mb-6">Survey Status</h2>
            <div>
            
 
      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr>
              <th></th>
              <th>Survey Title</th>
            
              
              <th>Voted Status</th>
              <th>status control</th>
            </tr>
          </thead>
          <tbody>
           { surveys.map((ress, idx) => (
              <tr className="font-Sora text-zinc-900" key={idx}>
                <th>{idx + 1}</th>

               
                <td>{ress.title}</td>
                <td>{ress.status}</td>
                <td>{
                    ress.status=="publish"?<button onClick={()=>handleStatus(ress)}className="btn btn-outline bg-slate-600 text-white font-semibold">Unpublish</button >:<button  onClick={()=>handleStatus(ress)}className="btn btn-outline bg-slate-600 text-white font-semibold">Publish</button>
                     }</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
            
        </div>
           

       
    );
};

export default SurveyStatus;
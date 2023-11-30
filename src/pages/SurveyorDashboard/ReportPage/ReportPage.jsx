import { Watch } from "react-loader-spinner";
import useReport from "../../../hooks/useReport";


const ReportPage = () => {
    const [report,isFetched]=useReport()
    console.log(report,".......")
    const handleReport=res=>{
        document.getElementById(`my_modal_${res._id}`).showModal();

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
      <h2 className="text-2xl font-Sora font-bold text-center text-blue-800 my-7">--Reports--</h2>
      <div className="overflow-x-auto">
        <table className="table table-xs overflow-x-auto">
          <thead>
            <tr className="bg-blue-100">
              <th></th>
              <th>Survey Title</th>
              
              <th>Report</th>
            </tr>
          </thead>
          <tbody>
            {report.map((res, idx) => (
              <tr className="font-Sora text-zinc-900 border-b-cyan-300" key={idx}>
                <th>{idx + 1}</th>
                <td>{res.title}</td>
                
                <td>
                  <button className="btn btn-warning"onClick={()=>handleReport(res)}>Show Report</button>
                  
                </td>
                <div>
                <dialog id={`my_modal_${res._id}`} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Report</h3>
                <p className="py-4">{res.report}</p>
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
                </div>
            </div>
            </dialog>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

            
        </div>
    );
};

export default ReportPage;
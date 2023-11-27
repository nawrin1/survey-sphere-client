import useVote from "../../../hooks/useVote";


const SurveyResponseAdmin = () => {
    const [vote]=useVote()
    console.log(vote,"admin response survey")
    return (
        <div>
            <h2>Admin survey response</h2>
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
            {vote.map((res, idx) => (
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
            
        </div>
    );
};

export default SurveyResponseAdmin;
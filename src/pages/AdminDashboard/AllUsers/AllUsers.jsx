import useUsers from "../../../hooks/useUsers";


const AllUsers = () => {
    const [allUsers]=useUsers()
    console.log(allUsers,"all users from AllUser page")

    return (
        <div>
            <h2 className="text-2xl font-Sora font-semibold text-center text-slate-800">All Users</h2>
            <div>
             <div>

      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr>
              <th></th>
              <th>User</th>
              
              <th>Role</th>
              <th>Make Admin</th>
              <th>Make Surveyor</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((res, idx) => (
              <tr className="font-Sora text-zinc-900" key={idx}>
                <th>{idx + 1}</th>
                <td>{res.name}</td>
                <td>{res.role}</td>
                <td>
                    {
                        res.role=="admin"?<>
                        <button disabled className=" btn btn-outline font-Sora font-medium rounded-2xl bg-emerald-100 text-emerald-800">Make Admin</button>
                        </>: <button className=" btn btn-outline font-Sora font-medium rounded-2xl bg-emerald-100 text-emerald-800">Make Admin</button>
                    }
                   
                    </td>
                <td>
                {
                        res.role=="surveyor"?<>
                        <button disabled className=" btn btn-outline font-Sora font-medium rounded-2xl bg-emerald-100 text-emerald-800">Make Surveyor</button>
                        </>: <button className=" btn btn-outline font-Sora font-medium rounded-2xl bg-emerald-100 text-emerald-800">Make Surveyor</button>
                    }
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

export default AllUsers;
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUsers from "../../../hooks/useUsers";
import { Watch } from "react-loader-spinner";
import { TextField } from "@mui/material";
import { useState } from "react";


const AllUsers = () => {
    const [search,setSearch]=useState('')
    const [allUsers,refetch,isFetched]=useUsers(search)
    const axiosSecure=useAxiosSecure()
    console.log(allUsers,"all users from AllUser page")
    console.log(isFetched)
    
    // const [surveys,loadings]=useUsers(search)
    const handleAdmin = ress =>{
        axiosSecure.patch(`/users/admin/${ress._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${ress.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    const handleSurveyor = ress =>{
        axiosSecure.patch(`/users/surveyor/${ress._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${ress.name} is an surveyor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
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
 let timeout;
    
    const handleSearch=e=>{
        e.preventDefault()
        const text=e.target.search.value
        console.log(text,"user search")
        setSearch(text)
        clearTimeout(timeout);
    timeout = setTimeout(() => {
      refetch();
    }, 500); // Adjust the delay as needed
 

        // refetch()
        
        

    }


    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-Sora font-semibold text-center text-slate-800 mt-10">--All Users--</h2>
  <div className="flex justify-center mt-4 my-12">
  <form onSubmit={handleSearch}>
            {/* <input type="text" name="search" className="border-2 border-red-200 " id="" /> */}
            <TextField id="outlined-search" label="Search field" type="text" name="search" />
        
            <input type="submit" value="Search" className=" h-14 bg-teal-600 text-white w-[100px]" />
        </form>
  </div>
            <div>
             <div>

      <div className="overflow-x-auto">
        <table className="table table-xs overflow-x-hidden ">
          <thead>
            <tr className="bg-emerald-100">
              <th></th>
              <th>User</th>
              
              <th>Role</th>
              <th>Make Admin</th>
              <th>Make Surveyor</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((ress, idx) => (
              <tr className="font-Sora text-zinc-900 border-b-emerald-800" key={idx}>
                <th>{idx + 1}</th>
                <td>{ress.name}</td>
                <td>{ress.role}</td>
                <td>
                    {
                        ress.role=="admin"?<>
                        <button disabled className=" btn btn-outline font-Sora font-medium rounded-2xl bg-emerald-100 text-emerald-800">Make Admin</button>
                        </>: <button onClick={()=>handleAdmin(ress)} className=" btn btn-outline font-Sora font-medium rounded-2xl bg-emerald-100 text-emerald-800">Make Admin</button>
                    }
                   
                    </td>
                <td>
                {
                        ress.role=="surveyor"?<>
                        <button disabled className=" btn btn-outline font-Sora font-medium rounded-2xl bg-emerald-100 text-emerald-800">Make Surveyor</button>
                        </>: <button onClick={()=>handleSurveyor(ress)}className=" btn btn-outline font-Sora font-medium rounded-2xl bg-emerald-100 text-emerald-800">Make Surveyor</button>
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
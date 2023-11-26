import { TextField } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const Update = () => {
    const {
        title,
        category,
        description,
        ques1,
        ques2,
        ques3,
       
        
        deadline,
        _id
        
       
      }= useLoaderData();
      const { register, handleSubmit, reset, formState: { errors } } = useForm();
      const axiosSecure=useAxiosSecure()
      const {user}=useContext(AuthContext)
      const onSubmit=async(data)=>{
          console.log(data)
          const survey = { title: data.title, category: data.category,description:data.description,ques1:data.ques1,ques2:data.ques2,ques3:data.ques3,deadline:data.deadline };
          console.log(survey)
          const sData = await axiosSecure.patch(`/surveys/${_id}`, survey)
              console.log(sData.data)
              if(sData.data.modifiedCount>0){
                  
                  // reset();
                  Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: `Survey is updated`,
                      showConfirmButton: false,
                      timer: 1500
                    });
              }
        
      }
    
    return (
        <div>
        <div className=" min-h-screen ">
           <div className="">
              
                   
               <div className=" shadow-2xl">
                   <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                       <div className="form-control">
                           
                           <TextField style={{fontFamily:'Sora'}} defaultValue={title}id="outlined-search1" label="Survey Title" type="text"  {...register("title", { required: true })} name="title" placeholder="Survey Title.."/>
  
                        
                           {errors.title && <span className="text-red-600">Title is required</span>}
                          
                       </div>
                       <div className="form-control">
                          
                           <TextField style={{fontFamily:'Sora'}} defaultValue={description} id="outlined-search2" label="Survey Description" type="text"  {...register("description", { required: true })} placeholder="Your survey description.." />
                           
                           {errors.description && <span className="text-red-600">Survey Description is required</span>}
                           
                       </div>
                       <div className="form-control">
                         
                           <TextField style={{fontFamily:'Sora'}} defaultValue={category} id="outlined-search3" label="Category " type="text"  {...register("category", { required: true })} name="category" placeholder="Set category of survey.."  />
                          
                           {errors.category && <span className="text-red-600">Category is required</span>}
                           
                       </div>
                       <div className="form-control">
                           <label className="label ">
                               <span className="label-text mt-8 mb-4 font-Sora font-semibold text-2xl">Questions:</span>
                           </label>
                            <TextField style={{fontFamily:'Sora',marginBottom:6}} defaultValue={ques1} id="outlined-search4" label="Question 1" type="text"  {...register("ques1", {
                               required: true,
                              
                               
                           })} placeholder="Set your first question..."  />
                          
                           {errors.ques1 && <p className="text-red-600">Question is required</p>}
                            <TextField style={{fontFamily:'Sora',marginBottom:6}} defaultValue={ques2} id="outlined-search5" label="Question 2" type="text"  {...register("ques2", {
                               required: true,
                              
                               
                           })} placeholder="Set your second question..."  />
                          
                          
                            <TextField style={{fontFamily:'Sora'}} id="outlined-search6" defaultValue={ques3} label="Question 3" type="text"  {...register("ques3", {
                               required: true,
                              
                               
                           })} placeholder="Set your third question..."  />
                           <label className="label ">
                               <span className="label-text mt-8 mb-4 font-Sora font-semibold text-2xl">Set Deadline:</span>
                           </label>
                           <TextField style={{fontFamily:'Sora'}} defaultValue={deadline}id="outlined-search7" label="Survey Deadline" type="date"  {...register("deadline", {
                               required: true,
                              
                               
                           })} placeholder="Set deadline of survey..."  />
                           {errors.deadline && <p className="text-red-600">Deadline is required</p>}


                          
                      
                           
                          
                         
                           
                       </div>
                       <div className="form-control mt-2">
                           <input className="btn btn-primary font-Sora font-semibold" type="submit" value="Update Survey" />
                       </div>
                   </form>
                  
                   
               </div>
           </div>
       </div>
       
   </div>
    );
};

export default Update;
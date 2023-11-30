import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const CreateSurvey = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosSecure=useAxiosSecure()
    const {user}=useContext(AuthContext)
    const onSubmit=async(data)=>{
        console.log(data)
        const survey = { title: data.title, category: data.category,description:data.description,ques1:data.ques1,ques2:data.ques2,ques3:data.ques3,votedNumber:0,liked:0,disliked:0,status:'publish',deadline:data.deadline,surveyor:user.email };
        console.log(survey)
        const sData = await axiosSecure.post('/survey', survey)
            console.log(sData.data)
            if(sData.data.insertedId){
                
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Survey is added`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
      
    }
    return (
        <div>
             <div className=" min-h-screen ">
                <div className="">
                    <h2 className="font-Sora font-semibold text-4xl text-center my-7">--CREATE SURVEY--</h2>
                   
                        
                    <div className=" shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                
                                <TextField style={{fontFamily:'Sora'}} id="outlined-search1" label="Survey Title" type="text"  {...register("title", { required: true })} name="title" placeholder="Survey Title.."/>
       
                             
                                {errors.title && <span className="text-red-600">Title is required</span>}
                               
                            </div>
                            <div className="form-control">
                               
                                <TextField style={{fontFamily:'Sora'}} id="outlined-search2" label="Survey Description" type="text"  {...register("description", { required: true })} placeholder="Your survey description.." />
                                
                                {errors.description && <span className="text-red-600">Survey Description is required</span>}
                                
                            </div>
                            <div className="form-control">
                              
                                <TextField style={{fontFamily:'Sora'}} id="outlined-search3" label="Category " type="text"  {...register("category", { required: true })} name="category" placeholder="Set category of survey.."  />
                               
                                {errors.category && <span className="text-red-600">Category is required</span>}
                                
                            </div>
                            <div className="form-control">
                                <label className="label ">
                                    <span className="label-text mt-8 mb-4 font-Sora font-semibold text-2xl">Questions:</span>
                                </label>
                                 <TextField style={{fontFamily:'Sora',marginBottom:6}} id="outlined-search4" label="Question 1" type="text"  {...register("ques1", {
                                    required: true,
                                   
                                    
                                })} placeholder="Set your first question..."  />
                               
                                {errors.ques1 && <p className="text-red-600">Question is required</p>}
                                 <TextField style={{fontFamily:'Sora',marginBottom:6}} id="outlined-search5" label="Question 2" type="text"  {...register("ques2", {
                                    required: true,
                                   
                                    
                                })} placeholder="Set your second question..."  />
                               
                               
                                 <TextField style={{fontFamily:'Sora'}} id="outlined-search6" label="Question 3" type="text"  {...register("ques3", {
                                    required: true,
                                   
                                    
                                })} placeholder="Set your third question..."  />
                                <label className="label ">
                                    <span className="label-text mt-8 mb-4 font-Sora font-semibold text-2xl">Set Deadline:</span>
                                </label>
                                <TextField style={{fontFamily:'Sora'}} id="outlined-search7" label="" type="date"  {...register("deadline", {
                                    required: true,
                                   
                                    
                                })} placeholder="Set deadline of survey..."  />
                                {errors.deadline && <p className="text-red-600">Deadline is required</p>}


                               
                           
                                
                               
                              
                                
                            </div>
                            <div className="form-control mt-2">
                                <input className="btn btn-primary font-Sora font-semibold" type="submit" value="Create Survey" />
                            </div>
                        </form>
                       
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default CreateSurvey;
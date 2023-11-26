import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";


const CreateSurvey = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit=(data)=>{
        console.log(data)
    }
    return (
        <div>
             <div className=" min-h-screen ">
                <div className="">
                   
                        
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
                              
                                <TextField style={{fontFamily:'Sora'}} id="outlined-search3" label="Your email" type="email"  {...register("email", { required: true })} name="email" placeholder="Your Email.."  />
                               
                                {errors.email && <span className="text-red-600">Email is required</span>}
                                
                            </div>
                            <div className="form-control">
                                {/* <label className="label">
                                    <span className="label-text">Password</span>
                                </label> */}
                                 <TextField style={{fontFamily:'Sora'}} id="outlined-search4" label="Your Password" type="password"  {...register("password", {
                                    required: true,
                                   
                                    
                                })} placeholder="Set your password..."  />
                               
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                
                               
                              
                                
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
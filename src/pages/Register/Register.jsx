

// import { useContext } from "react";
// import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
// import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2'
// import useAxiosPublic from "../../hooks/useAxiosPublic";
// import SocialLogin from "../../components/SocialLogin/SocialLogin";
// import { AuthContext } from "../../providers/AuthProviders";
import im1 from '../../assets/reg.jpg'
import TextField from '@mui/material/TextField';
import Social from "../../components/Social/Social";

const Register= () => {
    // const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // const { createUser, updateUserProfile } = useContext(AuthContext);
    // const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data.email,data.password,data.name,data.photoURL)

        // createUser(data.email, data.password)
        //     .then(result => {
        //         const loggedUser = result.user;
        //         console.log(loggedUser);
        //         updateUserProfile(data.name, data.photoURL)
        //             .then(() => {
        //                 // create user entry in the database
        //                 const userInfo = {
        //                     name: data.name,
        //                     email: data.email
        //                 }
        //                 axiosPublic.post('/users', userInfo)
        //                     .then(res => {
        //                         if (res.data.insertedId) {
        //                             console.log('user added to the database')
        //                             reset();
        //                             Swal.fire({
        //                                 position: 'top-end',
        //                                 icon: 'success',
        //                                 title: 'User created successfully.',
        //                                 showConfirmButton: false,
        //                                 timer: 1500
        //                             });
        //                             navigate('/');
        //                         }
        //                     })


        //             })
        //             .catch(error => console.log(error))
        //     })
    };

    return (
        <>
           
            <div className="hero min-h-screen max-w-6xl mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center flex justify-center ">
                        <img src={im1} className="w-[75%]"alt="" />
                        </div>
                        
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                
                                <TextField style={{fontFamily:'Sora'}} id="outlined-search" label="Your Name" type="text"  {...register("name", { required: true })} name="name" placeholder="Your Name.."/>
       
                             
                                {errors.name && <span className="text-red-600">Name is required</span>}
                               
                            </div>
                            <div className="form-control">
                               
                                <TextField style={{fontFamily:'Sora'}} id="outlined-search" label="Your Photo URL" type="text"  {...register("photoURL", { required: true })} placeholder="Your Photo URL.." />
                                
                                {errors.photoURL && <span className="text-red-600">PhotoURL is required</span>}
                                
                            </div>
                            <div className="form-control">
                              
                                <TextField style={{fontFamily:'Sora'}} id="outlined-search" label="Your email" type="email"  {...register("email", { required: true })} name="email" placeholder="Your Email.."  />
                               
                                {errors.email && <span className="text-red-600">Email is required</span>}
                                
                            </div>
                            <div className="form-control">
                                {/* <label className="label">
                                    <span className="label-text">Password</span>
                                </label> */}
                                 <TextField style={{fontFamily:'Sora'}} id="outlined-search" label="Your Password" type="password"  {...register("password", {
                                    required: true,
                                   
                                    
                                })} placeholder="Set your password..."  />
                               
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                
                               
                              
                                
                            </div>
                            <div className="form-control mt-2">
                                <input className="btn btn-primary font-Sora font-semibold" type="submit" value="Register Now" />
                            </div>
                        </form>
                        <p className="px-8 text-xl font-Sora font-semibold"><small>Already have an account ?<Link to="/login">Login</Link></small></p>
                        <Social></Social>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
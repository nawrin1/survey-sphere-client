

// import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Social from '../../components/Social/Social';
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import img1 from '../../assets/computer-security-with-login-password-padlock.jpg'
import { AuthContext } from '../../provider/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';

// import Swal from 'sweetalert2'

// import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
    const {login } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const location = useLocation();

    // const from = location.state?.from?.pathname || "/";
    // console.log('state in the location login page', location.state)


    const onSubmit = data => {
      
       
        console.log(data.email, data.password);
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                // navigate(from, { replace: true });
            })
    }


    return (
        <>
            
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 ">
                        <img src={img1} alt="" />
                        
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl ">
                        <form onSubmit={handleSubmit(onSubmit)}className="card-body">
                        <div className="form-control">
                              
                              <TextField style={{fontFamily:'Sora'}}  id="outlined-search1" label="Your email" type="email"  {...register("email", { required: true })} name="email" placeholder="Your Email.."  />
                             
                              {errors.email && <span className="text-red-600">Email is required</span>}
                              
                          </div>
                          <div className="form-control">
                                {/* <label className="label">
                                    <span className="label-text">Password</span>
                                </label> */}
                                 <TextField style={{fontFamily:'Sora'}} id="outlined-search" label="Your Password" type="password"  {...register("password", {
                                    required: true,
                                   
                                    
                                })} placeholder="Give your password..."  />
                               
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                
                               
                              
                                
                            </div>
                            <div className="form-control mt-2">
                                <input className="btn btn-primary font-Sora font-semibold" type="submit" value="Login Now" />
                            </div>
                            
                            
                        </form>
                        <p className='px-6 mb-9 font-Sora font-semibold'><small>Are You New Here? <Link to="/register">Create an account</Link> </small></p>
                        <Social></Social>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
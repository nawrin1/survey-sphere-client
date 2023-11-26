import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";



const Social= () => {
    const { googleSign} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        console.log("google OKKKKKKK")
        googleSign()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                role:'user'
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }

    return (
        <div className="mt-2 ml-8 mb-4">
          
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-accent">
                    <FaGoogle className=""></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default Social;
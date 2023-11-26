import { FaGoogle } from "react-icons/fa";
// import useAuth from "../../hooks/useAuth";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
// import { useNavigate } from "react-router-dom";


const Social= () => {
    // const { googleSignIn } = useAuth();
    // const axiosPublic = useAxiosPublic();
    // const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        console.log("google OKKKKKKK")
        // googleSignIn()
        // .then(result =>{
        //     console.log(result.user);
        //     const userInfo = {
        //         email: result.user?.email,
        //         name: result.user?.displayName
        //     }
        //     axiosPublic.post('/users', userInfo)
        //     .then(res =>{
        //         console.log(res.data);
        //         navigate('/');
        //     })
        // })
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

import img1 from '../../assets/5203299.jpg'
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
    const handleGoBack=()=>{
        navigate('/')

    }
    return (
        <div className='flex flex-col justify-center items-center '>
            <img src={img1} className="h-[400px] lg:[400px] md:[400px]"alt="" />
            <button onClick={handleGoBack}className='btn btn-outline text-3xl '>Home</button>
            
        </div>
    );
};

export default Error;
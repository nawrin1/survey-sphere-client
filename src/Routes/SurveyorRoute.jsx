import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useSurveyor from "../hooks/useSurveyor";
import { Watch } from "react-loader-spinner";


const SurveyorRoute= ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    const [isSurveyor, isSurveyorLoading] = useSurveyor();
    

    if (loading || isSurveyorLoading) {
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

    if (user && isSurveyor) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default SurveyorRoute;
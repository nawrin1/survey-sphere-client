import { NavLink, Outlet } from "react-router-dom";


const SurveyHome = () => {
    return (
        <div className="flex">
       
        <div className="w-64 min-h-screen bg-[#ca8dfd]">
            <ul className="menu p-4">

                    <li className="font-Sora font-semibold">
                    <NavLink to="/surveyDashboard/surveyCreate">
                        
                        Create Survey</NavLink>
                </li>
                       <li className="font-Sora font-semibold">
                            <NavLink to="/">Home</NavLink>
                        </li>
                       <li className="font-Sora font-semibold">
                            <NavLink to="/surveyDashboard/allSurveyPage">All Surveys</NavLink>
                        </li>
                       <li className="font-Sora font-semibold">
                            <NavLink to="/surveyDashboard/userFeedbacks">User Feedbacks</NavLink>
                        </li>



                    
                
            </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default SurveyHome;
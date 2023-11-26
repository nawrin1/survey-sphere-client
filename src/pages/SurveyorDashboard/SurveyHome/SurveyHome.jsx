import { NavLink, Outlet } from "react-router-dom";


const SurveyHome = () => {
    return (
        <div className="flex">
       
        <div className="w-64 min-h-screen bg-orange-400">
            <ul className="menu p-4">

                    <li>
                    <NavLink to="/surveyDashboard/surveyCreate">
                        
                        Create Survey</NavLink>
                </li>
                <li>
                            <NavLink to="/">
                                
                                Home</NavLink>
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
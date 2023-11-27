import { NavLink, Outlet } from "react-router-dom";


const AdminHome = () => {
    return (
    
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content  ">
   <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-60 min-h-full bg-indigo-200 text-base-content ">
      
                   {/* <li className="font-Sora font-semibold">
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
                        </li> */}
                       <li className="font-Sora font-semibold">
                            <NavLink to="/adminDashboard/surveyResponseAdmin">Survey Response</NavLink>
                        </li>
                       <li className="font-Sora font-semibold">
                            <NavLink to="/adminDashboard/allUsers">All Users</NavLink>
                        </li>
                        <li className="font-Sora font-semibold">
                            <NavLink to="/">Home</NavLink>
                        </li>

    </ul>
  
  </div>
</div>
   
    );
};

export default AdminHome;
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import SurveyPage from "../pages/SurveyPage/SurveyPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import SurveyHome from "../pages/SurveyorDashboard/SurveyHome/SurveyHome";
import CreateSurvey from "../pages/SurveyorDashboard/CreateSurvey/CreateSurvey";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },{
          path:'/survey',
          element:<SurveyPage></SurveyPage>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
    },
    {
      path:'surveyDashboard',
      element:<SurveyHome></SurveyHome>,
      children:[
        {
          path:'surveyCreate',
          element:<CreateSurvey></CreateSurvey>
        }
      ]

    }
  ]);
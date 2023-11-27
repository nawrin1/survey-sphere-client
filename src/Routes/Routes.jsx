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
import AllSurvey from "../pages/SurveyorDashboard/AllSurvey/AllSurvey";
import Update from "../pages/SurveyorDashboard/Update/Update";
import SurveyDetails from "../pages/SurveyDetails/SurveyDetails";
import PrivateRoute from '../Routes/PrivateRoute'
import UserFeedbacks from "../pages/UserFeedbacks/UserFeedbacks";

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
        },{
          path:'/survey/details/:id',
          element:<SurveyDetails></SurveyDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/survey/${params.id}`)
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
        },
        {
          path:'allSurveyPage',
          element:<AllSurvey></AllSurvey>
        },{
          path:'update/:id',
          element:<Update></Update>,
          loader: ({params}) => fetch(`http://localhost:5000/surveys/${params.id}`)
        },{
          path:'userFeedbacks',
          element:<UserFeedbacks></UserFeedbacks>
        }
      ]

    }
  ]);
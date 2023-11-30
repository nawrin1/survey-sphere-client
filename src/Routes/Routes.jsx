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
import SurveyResponse from "../pages/SurveyResponse/SurveyResponse";
import AdminHome from "../pages/AdminDashboard/AdminHome/AdminHome";
import SurveyResponseAdmin from "../pages/AdminDashboard/SurveyResponseAdmin/SurveyResponseAdmin";
import AllUsers from "../pages/AdminDashboard/AllUsers/AllUsers";
import SurveyStatus from "../pages/SurveyStatus/SurveyStatus";
import Pro from "../pages/Pro/Pro";
import Payment from "../pages/Payment/Payment";
import PaymentHistory from "../pages/AdminDashboard/PaymentHistory/PaymentHistory";
import ReportPage from "../pages/SurveyorDashboard/ReportPage/ReportPage";
import AdminRoute from "./AdminRoutes";
import SurveyorRoute from "./SurveyorRoute";

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
          loader: ({params}) => fetch(`https://survey-sphere-server-five.vercel.app/survey/${params.id}`)
        },{
          path:'/pro',
          element:<PrivateRoute><Pro></Pro></PrivateRoute>
        },{
          path:'/payment',
          element:<Payment></Payment>
        }
      ]
    },
    {
      path:'surveyDashboard',
      element:<SurveyHome></SurveyHome>,
      children:[
        {
          path:'surveyCreate',
          element:<SurveyorRoute><CreateSurvey></CreateSurvey></SurveyorRoute>
        },
        {
          path:'allSurveyPage',
          element:<SurveyorRoute><AllSurvey></AllSurvey></SurveyorRoute>
        },{
          path:'update/:id',
          element:<SurveyorRoute><Update></Update></SurveyorRoute>,
          loader: ({params}) => fetch(`https://survey-sphere-server-five.vercel.app/surveys/${params.id}`)
        },{
          path:'userFeedbacks',
          element:<SurveyorRoute><UserFeedbacks></UserFeedbacks></SurveyorRoute>
        },{
          path:'surveyResponse',
          element:<SurveyorRoute><SurveyResponse></SurveyResponse></SurveyorRoute>
        },{
          path:'report',
          element:<SurveyorRoute><ReportPage></ReportPage></SurveyorRoute>
        }
      ]

    },
    {
      path:'adminDashboard',
      element:<AdminHome></AdminHome>,
      children:[
        {
          path:'surveyResponseAdmin',
          element:<AdminRoute><SurveyResponseAdmin></SurveyResponseAdmin></AdminRoute>
        },{
          path:'allUsers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
          
        },{
          path:'surveyStatus',
          element:<AdminRoute><SurveyStatus></SurveyStatus></AdminRoute>
        },{
          path:'paymentHistory',
          element:<AdminRoute><PaymentHistory></PaymentHistory></AdminRoute>
        }
      ]
    }
  ]);
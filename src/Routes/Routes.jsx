import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import SurveyPage from "../pages/SurveyPage/SurveyPage";
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
        }
      ]
    },
  ]);
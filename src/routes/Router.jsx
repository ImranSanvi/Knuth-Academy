import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import SkillDetails from "../Pages/SkillDetails";
import About from "../Pages/About";
import CategorySkill from "../Components/CategorySkill";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../layout/AuthLayout";
import PrivateRoute from "../Provider/PrivateRoute";
import Profile from "../Pages/Profile";
import Loading from "../Pages/Loading";
import ForgetPassword from "../Pages/ForgetPassword";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch('/Skills.json'),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path:"/category/:id",
                element: <CategorySkill></CategorySkill>,
                loader: () => fetch('/Skills.json'),
                hydrateFallbackElement: <Loading></Loading>
            },

        ]
    },
    {
        path: "/skillDetails/:id",
        element: <PrivateRoute>
                <SkillDetails></SkillDetails>
            </PrivateRoute>,
        loader: () => fetch('/Skills.json'),
        hydrateFallbackElement: <Loading></Loading>
    },
    {
        path: "about",
        element: <About></About>
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },

    {
        path: "/profile",
        element: <PrivateRoute>
            <Profile></Profile>
        </PrivateRoute>
    },

    {
        path: "/*",
        element: <Error></Error>
    },
    {
        path: "/auth/forget-password",
        element: <ForgetPassword></ForgetPassword>
    }

]);

export default router;
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


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch('/Skills.json')
            },
            {
                path:"/category/:id",
                element: <CategorySkill></CategorySkill>,
                loader: () => fetch('/Skills.json')
            },

        ]
    },
    {
        path: "/skillDetails/:id",
        element: <SkillDetails></SkillDetails>,
        loader: () => fetch('/Skills.json'),
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
        path: "/*",
        element: <Error></Error>
    },
]);

export default router;
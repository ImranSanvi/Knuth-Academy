import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../Pages/Home";
import AllSkill from "../Pages/AllSkill";
import Error from "../Pages/Error";
import HeroSlider from "../Components/HeroSlider";
import SkillDetails from "../Pages/SkillDetails";
import About from "../Pages/About";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch('/Popular.json')
            },
            {
                path:"/allSkill",
                element: <AllSkill></AllSkill>,
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
        element: <h1>Authentication Layout</h1>
    },

    {
        path: "/*",
        element: <Error></Error>
    },
]);

export default router;
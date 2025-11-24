import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../Pages/Home";
import AllSkill from "../Pages/AllSkill";


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
            }
        ]
    },
    {
        path: "/auth",
        element: <h1>Authentication Layout</h1>
    },
    {
        path: "/skill",
        element: <h1>Skills Layout</h1>
    },
    {
        path: "/*",
        element: <h1>Error - 404</h1>
    },
]);

export default router;
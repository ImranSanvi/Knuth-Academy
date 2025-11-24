import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../Pages/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
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
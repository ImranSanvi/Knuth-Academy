import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Home Layout</h1>
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
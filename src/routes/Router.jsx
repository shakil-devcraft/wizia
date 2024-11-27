import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/",
                element: <Home />
            },
        ]
    }
]);

export default Router;
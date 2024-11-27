import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
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
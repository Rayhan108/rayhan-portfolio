import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home/Home";
import Details from "../Pages/Details/Details";
import AllProject from "../Pages/AllProject/AllProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        
      },
      {
        path: "/allProject",
        element: <AllProject></AllProject>,
        
      },
    ],
  },
]);

export default router;
